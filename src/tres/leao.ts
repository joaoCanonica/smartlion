/**
 * Leão 3D do hero ("O Leão de Vidro"). Three.js 0.187 (fixado), sem framework.
 *
 * - Geometria: smartlion-leao.svg → SVGLoader.parse → ShapePath.toShapes() (forma atual desde
 *   a r185; SVGLoader.createShapes ficou obsoleto) → ExtrudeGeometry com profundidade de 6% da largura e bevel pequeno.
 *   Nada de GLB: o modelo nasce do vetor da marca em tempo real.
 * - Materiais: face em MeshPhysicalMaterial escuro (metalness .9, roughness .28, clearcoat 1);
 *   laterais e bevel em aço polido, que captam a luz.
 * - Luz: RoomEnvironment pré-filtrado pelo PMREMGenerator (uma vez só) + direcional âmbar
 *   + contraluz fria + uma luz pontual que cruza o leão a cada ~8 s (varredura).
 * - Movimento: até ±12° seguindo o ponteiro (amortecido); em telas de toque, orientação do
 *   aparelho depois de um gesto (com pedido de permissão no iOS), senão oscilação leve.
 * - Desempenho: pixelRatio ≤ 1,75; setAnimationLoop só enquanto visível e com a aba ativa;
 *   qualidade adaptativa (baixa o pixelRatio e, se ainda ficar < 24 fps, desiste e volta ao
 *   pôster AVIF); dispose de geometria, materiais, ambiente e renderer ao desmontar.
 */
import {
  ACESFilmicToneMapping, Box3, Color, DirectionalLight, ExtrudeGeometry, Group, MathUtils, Mesh,
  MeshPhysicalMaterial, PerspectiveCamera, PointLight, Scene, SRGBColorSpace, Vector3, WebGLRenderer,
  type Shape,
} from 'three';
import { SVGLoader } from 'three/addons/loaders/SVGLoader.js';
import { criarAmbiente } from './ambiente';
import svgLeao from '../assets/marca/smartlion-leao.svg?raw';

export interface OpcoesLeao {
  /** Pôster: uma pose fixa, sem animação nem varredura (usado por scripts/render-leao.mjs). */
  poster?: boolean;
  /** Chamado quando o primeiro quadro foi desenhado (para trocar o pôster pelo canvas). */
  aoPrimeiroQuadro?: () => void;
  /** Chamado se o aparelho não sustentar a cena: o hero volta ao pôster AVIF. */
  aoDesistir?: (motivo: string) => void;
  /** Qualidade adaptativa (baixar pixelRatio / desistir se o fps cair). Padrão: ligada. */
  adaptativo?: boolean;
  /** Teto de pixelRatio (padrão 1,75). */
  pixelRatioMax?: number;
}
export interface LeaoMontado {
  destruir(): void;
  /** Força um quadro (pôster/capturas). */
  desenhar(): void;
  /** Média de fps da última janela de 1 s (0 enquanto não medido). */
  readonly fps: number;
}

const GRAUS = MathUtils.DEG2RAD;
const GIRO_MAX = 12 * GRAUS;
/** Pose de repouso (a mesma do pôster AVIF): leve três-quartos para mostrar a espessura. */
export const POSE = { x: 3.5 * GRAUS, y: -9 * GRAUS } as const;
const AMBAR = new Color('#E3A857');

/** Constrói a geometria extrudada do leão, centralizada, com largura 1 (unidades da cena). */
export function geometriaDoLeao(segmentosCurva = 5): ExtrudeGeometry {
  // O arquivo usa fill="currentColor" (para o HTML); para o SVGLoader basta uma cor qualquer.
  const dados = new SVGLoader().parse(svgLeao.replace(/currentColor/g, '#fff'));
  const formas: Shape[] = dados.paths.flatMap(caminho => caminho.toShapes());
  const caixa = new Box3();
  for (const forma of formas) for (const p of forma.getPoints()) caixa.expandByPoint(new Vector3(p.x, p.y, 0));
  const largura = caixa.max.x - caixa.min.x;
  const profundidade = largura * 0.06;
  const geometria = new ExtrudeGeometry(formas, {
    depth: profundidade,
    bevelEnabled: true,
    bevelThickness: largura * 0.008,
    bevelSize: largura * 0.0028,
    bevelSegments: 3,
    curveSegments: segmentosCurva,
  });
  geometria.computeBoundingBox();
  const centro = geometria.boundingBox!.getCenter(new Vector3());
  geometria.translate(-centro.x, -centro.y, -centro.z);
  // SVG tem o eixo Y para baixo: espelha em Y e normaliza a largura para 1.
  geometria.scale(1 / largura, -1 / largura, 1 / largura);
  // O espelhamento inverte a ordem dos vértices; recompor as normais mantém a iluminação certa.
  const indice = geometria.getIndex();
  if (indice) { const a = indice.array as Uint16Array | Uint32Array; for (let i = 0; i < a.length; i += 3) { const t = a[i]; a[i] = a[i + 2]; a[i + 2] = t; } }
  else {
    const pos = geometria.getAttribute('position'); const uv = geometria.getAttribute('uv');
    for (let i = 0; i < pos.count; i += 3) {
      for (const attr of [pos, uv]) {
        if (!attr) continue;
        for (let c = 0; c < attr.itemSize; c++) { const t = attr.getComponent(i, c); attr.setComponent(i, c, attr.getComponent(i + 2, c)); attr.setComponent(i + 2, c, t); }
      }
    }
  }
  geometria.computeVertexNormals();
  return reagrupar(geometria);
}

/**
 * Com várias formas, o ExtrudeGeometry cria um par de grupos (tampa, lateral) por forma:
 * 15 formas = 30 draw calls por quadro. Reordena os triângulos em 2 grupos (tampas, laterais)
 * sem alterar nenhum vértice: 2 draw calls.
 */
function reagrupar(g: ExtrudeGeometry): ExtrudeGeometry {
  const atributos = Object.keys(g.attributes);
  const porMaterial: [number, number][][] = [[], []];
  for (const grupo of g.groups) porMaterial[grupo.materialIndex ?? 0].push([grupo.start, grupo.count]);
  for (const nome of atributos) {
    const attr = g.getAttribute(nome);
    const origem = attr.array as Float32Array;
    const destino = new Float32Array(origem.length);
    let o = 0;
    for (const lista of porMaterial) for (const [inicio, conta] of lista) {
      destino.set(origem.subarray(inicio * attr.itemSize, (inicio + conta) * attr.itemSize), o);
      o += conta * attr.itemSize;
    }
    (attr.array as Float32Array).set(destino);
    attr.needsUpdate = true;
  }
  const tampas = porMaterial[0].reduce((s, [, c]) => s + c, 0);
  const laterais = porMaterial[1].reduce((s, [, c]) => s + c, 0);
  g.clearGroups();
  g.addGroup(0, tampas, 0);
  g.addGroup(tampas, laterais, 1);
  return g;
}

export function montarLeao(canvas: HTMLCanvasElement, opcoes: OpcoesLeao = {}): LeaoMontado {
  const poster = !!opcoes.poster;
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'default', preserveDrawingBuffer: poster });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  let pixelRatio = Math.min(window.devicePixelRatio || 1, opcoes.pixelRatioMax ?? 1.75);
  renderer.setPixelRatio(pixelRatio);

  const cena = new Scene();
  // Ambiente compartilhado com o reparo 3D (src/tres/ambiente.ts).
  const ambiente = criarAmbiente(renderer);
  cena.environment = ambiente;
  cena.environmentIntensity = 0.85;

  const camera = new PerspectiveCamera(28, 1, 0.1, 20);
  camera.position.set(0, 0, 2.55);

  const geometria = geometriaDoLeao();
  const face = new MeshPhysicalMaterial({ color: '#121316', metalness: 0.9, roughness: 0.28, clearcoat: 1, clearcoatRoughness: 0.12, envMapIntensity: 0.8 });
  const borda = new MeshPhysicalMaterial({ color: '#C9CDD4', metalness: 1, roughness: 0.32, clearcoat: 0.6, clearcoatRoughness: 0.08, envMapIntensity: 1.1 });
  // ExtrudeGeometry: grupo 0 = tampas (frente e verso), grupo 1 = laterais + bevel.
  const leao = new Mesh(geometria, [face, borda]);
  const pivo = new Group();
  pivo.add(leao);
  pivo.rotation.set(POSE.x, POSE.y, 0);
  cena.add(pivo);

  const quente = new DirectionalLight(AMBAR, 3.2);
  quente.position.set(1.6, 1.1, 2.8);
  const fria = new DirectionalLight('#C8D8F0', 4);
  fria.position.set(2.6, 1.4, -1.4);
  const varredura = new PointLight('#FFE6BF', 0, 3.2, 1.6);
  cena.add(quente, fria, varredura);

  // ---- tamanho ----
  const ajustar = () => {
    const { clientWidth: l, clientHeight: a } = canvas;
    if (!l || !a) return;
    renderer.setSize(l, a, false);
    camera.aspect = l / a;
    camera.updateProjectionMatrix();
  };
  ajustar();
  const observadorTamanho = new ResizeObserver(ajustar);
  observadorTamanho.observe(canvas);

  // ---- entrada (ponteiro / orientação) ----
  const alvo = { x: POSE.x, y: POSE.y };
  let usarOrientacao = false;
  let base: { beta: number; gamma: number } | null = null;
  const aoMover = (e: PointerEvent) => {
    if (e.pointerType !== 'mouse' && e.pointerType !== 'pen') return;
    alvo.y = POSE.y + MathUtils.clamp((e.clientX / innerWidth) * 2 - 1, -1, 1) * GIRO_MAX;
    alvo.x = POSE.x + MathUtils.clamp((e.clientY / innerHeight) * 2 - 1, -1, 1) * GIRO_MAX * 0.6;
  };
  const aoOrientar = (e: DeviceOrientationEvent) => {
    if (e.beta == null || e.gamma == null) return;
    base ??= { beta: e.beta, gamma: e.gamma };
    usarOrientacao = true;
    alvo.y = POSE.y + MathUtils.clamp((e.gamma - base.gamma) / 25, -1, 1) * GIRO_MAX;
    alvo.x = POSE.x + MathUtils.clamp((e.beta - base.beta) / 25, -1, 1) * GIRO_MAX * 0.6;
  };
  // Orientação só depois de um gesto (exigência do iOS para requestPermission).
  const aoGesto = async (e: PointerEvent) => {
    if (e.pointerType === 'mouse') return;
    removeEventListener('pointerdown', aoGesto);
    const D = DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<'granted' | 'denied'> };
    try {
      if (typeof D.requestPermission === 'function' && (await D.requestPermission()) !== 'granted') return;
      addEventListener('deviceorientation', aoOrientar);
    } catch { /* sem permissão: fica a oscilação leve */ }
  };
  if (!poster) {
    addEventListener('pointermove', aoMover, { passive: true });
    addEventListener('pointerdown', aoGesto, { passive: true });
  }
  const toque = matchMedia('(hover: none)').matches;

  // ---- laço ----
  let ultimo = performance.now();
  let inicio = ultimo;
  let primeiro = true;
  let quadros = 0, janela = ultimo, fps = 0, lentas = 0;
  const desenhar = () => renderer.render(cena, camera);
  const quadro = (agora: number) => {
    const dt = Math.min(0.1, (agora - ultimo) / 1000);
    ultimo = agora;
    const t = (agora - inicio) / 1000;
    // Sem ponteiro e sem orientação (toque sem permissão): oscilação leve.
    if (toque && !usarOrientacao) { alvo.y = POSE.y + Math.sin(t * 0.45) * 7 * GRAUS; alvo.x = POSE.x + Math.sin(t * 0.31) * 3 * GRAUS; }
    const k = 1 - Math.exp(-dt * 4.5);
    pivo.rotation.y += (alvo.y - pivo.rotation.y) * k;
    pivo.rotation.x += (alvo.x - pivo.rotation.x) * k;
    // Varredura de luz: a cada 8 s a luz pontual cruza o leão na diagonal em 1,6 s.
    // Em metal o brilho vem do reflexo: além da luz pontual, o ambiente gira um pouco
    // (environmentRotation), o que passa o reflexo âmbar pela face sem refazer o PMREM.
    const fase = ((t + 2.5) % 8) / 1.6;
    if (fase < 1) {
      const s = MathUtils.smootherstep(fase, 0, 1);
      const pico = Math.sin(Math.PI * fase);
      varredura.position.set(-0.9 + 1.8 * s, 0.7 - 1.4 * s, 0.55);
      varredura.intensity = pico * 9;
      cena.environmentRotation.set(0.35 - 0.7 * s, -0.5 + 1.0 * s, 0);
      cena.environmentIntensity = 0.85 + pico * 0.45;
    } else if (varredura.intensity !== 0) {
      varredura.intensity = 0;
      cena.environmentRotation.set(0, 0, 0);
      cena.environmentIntensity = 0.85;
    }
    desenhar();
    if (primeiro) { primeiro = false; opcoes.aoPrimeiroQuadro?.(); }
    // Qualidade adaptativa: mede fps por janela de 1 s (ignora os 1,5 s iniciais).
    quadros++;
    if (agora - janela >= 1000) {
      fps = (quadros * 1000) / (agora - janela);
      quadros = 0; janela = agora;
      canvas.dataset.fps = fps.toFixed(1);
      if (opcoes.adaptativo !== false && t > 1.5 && fps < 30) {
        lentas++;
        if (lentas === 2 && pixelRatio > 1) { pixelRatio = 1; renderer.setPixelRatio(1); ajustar(); }
        else if (lentas >= 4 && fps < 24) { opcoes.aoDesistir?.(`fps ${fps.toFixed(0)}`); }
      } else if (fps >= 30) lentas = Math.max(0, lentas - 1);
    }
  };

  // Só anima enquanto visível na tela e com a aba ativa.
  let visivel = true;
  const atualizarLaco = () => {
    const rodar = !poster && visivel && !document.hidden;
    if (rodar) { ultimo = performance.now(); janela = ultimo; quadros = 0; }
    renderer.setAnimationLoop(rodar ? quadro : null);
  };
  const observadorTela = new IntersectionObserver(([e]) => { visivel = e.isIntersecting; atualizarLaco(); });
  observadorTela.observe(canvas);
  document.addEventListener('visibilitychange', atualizarLaco);

  if (poster) { desenhar(); opcoes.aoPrimeiroQuadro?.(); }
  else atualizarLaco();

  return {
    get fps() { return fps; },
    desenhar,
    destruir() {
      renderer.setAnimationLoop(null);
      observadorTela.disconnect();
      observadorTamanho.disconnect();
      document.removeEventListener('visibilitychange', atualizarLaco);
      removeEventListener('pointermove', aoMover);
      removeEventListener('pointerdown', aoGesto);
      removeEventListener('deviceorientation', aoOrientar);
      geometria.dispose();
      face.dispose();
      borda.dispose();
      ambiente.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
