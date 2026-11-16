/**
 * "Por dentro do reparo" (P5): celular GENÉRICO procedural, sem desenho de modelo real,
 * sem câmera característica e sem marca. Camadas, da frente para trás:
 *   vidro frontal · tela (gradiente escuro) · quadro (ExtrudeGeometry em anel) · bateria
 *   (bloco com rótulo neutro "BATERIA") · placa (verde-escura com componentes) · tampa traseira.
 * Mesma iluminação do leão (src/tres/ambiente.ts). Ao escolher um serviço, as camadas se
 * afastam no eixo Z (vista explodida, 800 ms) e a camada escolhida acende em âmbar.
 * Câmera fixa; arraste horizontal faz uma órbita limitada (touch-action: pan-y no canvas,
 * então a rolagem vertical continua livre). Renderiza sob demanda: o laço só roda durante
 * transições/arraste, e nunca fora da tela ou com a aba oculta. destruir() libera tudo.
 */
import {
  ACESFilmicToneMapping, BoxGeometry, CanvasTexture, EdgesGeometry, ExtrudeGeometry, LineBasicMaterial, LineSegments, Group, MathUtils, Mesh, MeshBasicMaterial,
  MeshPhysicalMaterial, MeshStandardMaterial, PerspectiveCamera, PlaneGeometry, Scene, Shape, SRGBColorSpace, WebGLRenderer,
  type BufferGeometry, type Material,
} from 'three';
import { RoundedBoxGeometry } from 'three/addons/geometries/RoundedBoxGeometry.js';
import { AMBAR, criarAmbiente, luzesPadrao } from './ambiente';

export type CamadaReparo = 'tela' | 'bateria' | 'tampa' | 'placa';
type IdCamada = 'vidro' | CamadaReparo | 'quadro';
export interface OpcoesReparo {
  inicial?: CamadaReparo | null;
  /** Sem animação: as mudanças entram direto no estado final (prefers-reduced-motion). */
  reduzido?: boolean;
  aoPrimeiroQuadro?: () => void;
  pixelRatioMax?: number;
}
export interface ReparoMontado { selecionar(camada: CamadaReparo | null): void; destruir(): void }

const W = 0.72, H = 1.5, R = 0.1;
const DURACAO = 800;
/** Emissão âmbar máxima da camada escolhida (contida: o contorno faz o destaque). */
const BRILHO = 0.07;
/** z montado → z explodido (frente positiva). */
const POSICOES: Record<IdCamada, [number, number]> = {
  vidro: [0.046, 0.86], tela: [0.03, 0.55], quadro: [0, 0.24], bateria: [-0.004, -0.07], placa: [0.002, -0.38], tampa: [-0.046, -0.7],
};
const BASE = { x: 0.3, y: -0.98 };

function textura(largura: number, altura: number, desenhar: (c: CanvasRenderingContext2D) => void): CanvasTexture {
  const tela = document.createElement('canvas');
  tela.width = largura; tela.height = altura;
  desenhar(tela.getContext('2d')!);
  const t = new CanvasTexture(tela);
  t.colorSpace = SRGBColorSpace;
  return t;
}
function retanguloArredondado(w: number, h: number, r: number): Shape {
  const s = new Shape();
  s.moveTo(-w / 2 + r, -h / 2);
  s.lineTo(w / 2 - r, -h / 2); s.quadraticCurveTo(w / 2, -h / 2, w / 2, -h / 2 + r);
  s.lineTo(w / 2, h / 2 - r); s.quadraticCurveTo(w / 2, h / 2, w / 2 - r, h / 2);
  s.lineTo(-w / 2 + r, h / 2); s.quadraticCurveTo(-w / 2, h / 2, -w / 2, h / 2 - r);
  s.lineTo(-w / 2, -h / 2 + r); s.quadraticCurveTo(-w / 2, -h / 2, -w / 2 + r, -h / 2);
  return s;
}

export function montarReparo(canvas: HTMLCanvasElement, opcoes: OpcoesReparo = {}): ReparoMontado {
  const renderer = new WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'default' });
  renderer.setClearColor(0x000000, 0);
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, opcoes.pixelRatioMax ?? 1.75));

  const cena = new Scene();
  const ambiente = criarAmbiente(renderer);
  cena.environment = ambiente;
  cena.environmentIntensity = 0.85;
  cena.add(...luzesPadrao());

  const camera = new PerspectiveCamera(30, 1, 0.1, 30);
  camera.position.set(0, 0.05, 4.3);

  const geometrias: BufferGeometry[] = [];
  const materiais: Material[] = [];
  const texturas: CanvasTexture[] = [];
  const guardar = <G extends BufferGeometry>(g: G) => (geometrias.push(g), g);
  const mat = <M extends Material>(m: M) => (materiais.push(m), m);

  // ---- materiais (sóbrios) ----
  const gradienteTela = textura(64, 256, c => {
    const g = c.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#1d2026'); g.addColorStop(0.45, '#0f1013'); g.addColorStop(1, '#17181b');
    c.fillStyle = g; c.fillRect(0, 0, 64, 256);
  });
  const rotuloBateria = textura(256, 64, c => {
    c.fillStyle = 'rgba(0,0,0,0)'; c.clearRect(0, 0, 256, 64);
    c.fillStyle = '#9A9EA6'; c.font = '600 30px system-ui, sans-serif'; c.textAlign = 'center'; c.textBaseline = 'middle';
    c.fillText('BATERIA', 128, 34);
  });
  texturas.push(gradienteTela, rotuloBateria);

  const emissivos: Record<IdCamada, (MeshStandardMaterial | MeshPhysicalMaterial)[]> = { vidro: [], tela: [], quadro: [], bateria: [], placa: [], tampa: [] };
  const camadas = {} as Record<IdCamada, Group>;
  const contornos = {} as Partial<Record<IdCamada, LineBasicMaterial>>;
  const aparelho = new Group();
  aparelho.rotation.set(BASE.x, BASE.y, 0);
  cena.add(aparelho);
  const camada = (id: IdCamada, ...malhas: Mesh[]) => {
    const g = new Group(); g.add(...malhas);
    // Contorno âmbar da peça principal: aparece quando a camada é escolhida ("acende").
    if (id !== 'vidro' && id !== 'quadro') {
      const linha = mat(new LineBasicMaterial({ color: AMBAR, transparent: true, opacity: 0 }));
      const borda = new LineSegments(guardar(new EdgesGeometry(malhas[0].geometry, 35)), linha);
      borda.position.copy(malhas[0].position);
      g.add(borda); contornos[id] = linha;
    }
    g.position.z = POSICOES[id][0]; camadas[id] = g; aparelho.add(g); return g;
  };
  const comEmissivo = <M extends MeshStandardMaterial | MeshPhysicalMaterial>(id: IdCamada, m: M) => { m.emissive = AMBAR.clone(); m.emissiveIntensity = 0; emissivos[id].push(m); return mat(m); };

  // Vidro frontal (transparente, com clearcoat).
  camada('vidro', new Mesh(guardar(new RoundedBoxGeometry(W, H, 0.014, 4, R)), comEmissivo('vidro', new MeshPhysicalMaterial({ color: '#ffffff', metalness: 0, roughness: 0.05, clearcoat: 1, transparent: true, opacity: 0.16, depthWrite: false }))));
  // Tela com gradiente escuro.
  camada('tela', new Mesh(guardar(new RoundedBoxGeometry(W - 0.03, H - 0.03, 0.01, 3, R - 0.015)), comEmissivo('tela', new MeshStandardMaterial({ color: '#ffffff', map: gradienteTela, roughness: 0.3, metalness: 0.15 }))));
  // Quadro: anel de aço (retângulo arredondado vazado), extrudado.
  const anel = retanguloArredondado(W, H, R);
  anel.holes.push(retanguloArredondado(W - 0.05, H - 0.05, R - 0.025));
  const geoQuadro = guardar(new ExtrudeGeometry(anel, { depth: 0.07, bevelEnabled: true, bevelThickness: 0.006, bevelSize: 0.004, bevelSegments: 2, curveSegments: 8 }));
  geoQuadro.translate(0, 0, -0.035);
  camada('quadro', new Mesh(geoQuadro, comEmissivo('quadro', new MeshPhysicalMaterial({ color: '#9A9EA6', metalness: 1, roughness: 0.32, clearcoat: 0.4 }))));
  // Bateria com rótulo neutro.
  const bateria = new Mesh(guardar(new RoundedBoxGeometry(0.46, 0.7, 0.03, 2, 0.03)), comEmissivo('bateria', new MeshStandardMaterial({ color: '#2A2C31', metalness: 0.3, roughness: 0.6 })));
  bateria.position.y = -0.3;
  const rotulo = new Mesh(guardar(new PlaneGeometry(0.34, 0.085)), mat(new MeshBasicMaterial({ map: rotuloBateria, transparent: true, depthWrite: false })));
  rotulo.position.set(0, -0.3, 0.0165);
  camada('bateria', bateria, rotulo);
  // Placa verde-escura com componentes (pequenos blocos), posições fixas.
  const placa = new Mesh(guardar(new BoxGeometry(0.62, 0.44, 0.012)), comEmissivo('placa', new MeshStandardMaterial({ color: '#123326', metalness: 0.2, roughness: 0.55 })));
  placa.position.y = 0.44;
  const matChip = comEmissivo('placa', new MeshStandardMaterial({ color: '#1B1D22', metalness: 0.6, roughness: 0.4 }));
  const chips: Mesh[] = [[-0.16, 0.5, 0.14, 0.1], [0.04, 0.52, 0.1, 0.1], [0.2, 0.47, 0.08, 0.2], [-0.2, 0.34, 0.08, 0.06], [-0.06, 0.34, 0.12, 0.05], [0.1, 0.33, 0.06, 0.06], [-0.24, 0.6, 0.05, 0.04], [0.24, 0.61, 0.06, 0.04]]
    .map(([x, y, w, h]) => { const m = new Mesh(guardar(new BoxGeometry(w, h, 0.014)), matChip); m.position.set(x, y, 0.013); return m; });
  camada('placa', placa, ...chips);
  // Tampa traseira lisa (sem módulo de câmera característico).
  camada('tampa', new Mesh(guardar(new RoundedBoxGeometry(W, H, 0.014, 4, R)), comEmissivo('tampa', new MeshPhysicalMaterial({ color: '#17181B', metalness: 0.7, roughness: 0.38, clearcoat: 0.5 }))));

  // ---- tamanho ----
  const ajustar = () => {
    const { clientWidth: l, clientHeight: a } = canvas;
    if (!l || !a) return;
    renderer.setSize(l, a, false);
    camera.aspect = l / a;
    camera.updateProjectionMatrix();
    pedir();
  };

  // ---- estado e animação ----
  let explodido = false;
  let escolhida: CamadaReparo | null = null;
  let tween: { inicio: number; de: Record<IdCamada, [number, number]>; para: Record<IdCamada, [number, number]> } | null = null;
  const estadoAlvo = (): Record<IdCamada, [number, number]> => {
    const r = {} as Record<IdCamada, [number, number]>;
    for (const id of Object.keys(camadas) as IdCamada[]) {
      const acesa = id === escolhida ? 1 : id === 'vidro' && escolhida === 'tela' ? 0.4 : 0;
      r[id] = [POSICOES[id][explodido ? 1 : 0], acesa];
    }
    return r;
  };
  const estadoAtual = (): Record<IdCamada, [number, number]> => {
    const r = {} as Record<IdCamada, [number, number]>;
    for (const id of Object.keys(camadas) as IdCamada[]) r[id] = [camadas[id].position.z, (emissivos[id][0]?.emissiveIntensity ?? 0) / BRILHO];
    return r;
  };
  const aplicar = (estado: Record<IdCamada, [number, number]>) => {
    for (const id of Object.keys(camadas) as IdCamada[]) {
      camadas[id].position.z = estado[id][0];
      for (const m of emissivos[id]) m.emissiveIntensity = estado[id][1] * BRILHO;
      const c = contornos[id]; if (c) c.opacity = estado[id][1];
    }
  };
  const suave = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);

  // Órbita limitada no arraste (horizontal); a rolagem vertical segue livre (touch-action: pan-y).
  const orbita = { x: 0, y: 0, alvoX: 0, alvoY: 0 };
  let arrasto: { x: number; y: number; ox: number; oy: number } | null = null;
  const aoPressionar = (e: PointerEvent) => { arrasto = { x: e.clientX, y: e.clientY, ox: orbita.alvoX, oy: orbita.alvoY }; canvas.setPointerCapture(e.pointerId); };
  const aoArrastar = (e: PointerEvent) => {
    if (!arrasto) return;
    orbita.alvoY = MathUtils.clamp(arrasto.oy + (e.clientX - arrasto.x) * 0.006, -0.45, 0.45);
    orbita.alvoX = MathUtils.clamp(arrasto.ox + (e.clientY - arrasto.y) * 0.004, -0.18, 0.18);
    pedir();
  };
  const aoSoltar = () => { arrasto = null; };
  canvas.addEventListener('pointerdown', aoPressionar);
  canvas.addEventListener('pointermove', aoArrastar);
  canvas.addEventListener('pointerup', aoSoltar);
  canvas.addEventListener('pointercancel', aoSoltar);

  // ---- laço sob demanda ----
  let visivel = true, rodando = false, primeiro = true;
  const quadro = (agora: number) => {
    let continuar = false;
    if (tween) {
      const t = Math.min(1, (agora - tween.inicio) / DURACAO);
      const k = suave(t);
      const atual = {} as Record<IdCamada, [number, number]>;
      for (const id of Object.keys(tween.para) as IdCamada[]) atual[id] = [MathUtils.lerp(tween.de[id][0], tween.para[id][0], k), MathUtils.lerp(tween.de[id][1], tween.para[id][1], k)];
      aplicar(atual);
      if (t >= 1) tween = null; else continuar = true;
    }
    const dx = orbita.alvoX - orbita.x, dy = orbita.alvoY - orbita.y;
    if (Math.abs(dx) + Math.abs(dy) > 0.0005) { orbita.x += dx * 0.18; orbita.y += dy * 0.18; continuar = true; }
    else { orbita.x = orbita.alvoX; orbita.y = orbita.alvoY; }
    aparelho.rotation.set(BASE.x + orbita.x, BASE.y + orbita.y, 0);
    renderer.render(cena, camera);
    if (primeiro) { primeiro = false; opcoes.aoPrimeiroQuadro?.(); }
    if (!continuar && !arrasto) parar();
  };
  function parar() { rodando = false; renderer.setAnimationLoop(null); }
  function pedir() {
    if (rodando || !visivel || document.hidden) return;
    rodando = true;
    renderer.setAnimationLoop(quadro);
  }
  const observadorTela = new IntersectionObserver(([e]) => { visivel = e.isIntersecting; if (visivel) pedir(); else parar(); });
  observadorTela.observe(canvas);
  const aoVisibilidade = () => (document.hidden ? parar() : pedir());
  document.addEventListener('visibilitychange', aoVisibilidade);
  const observadorTamanho = new ResizeObserver(ajustar);
  observadorTamanho.observe(canvas);

  function selecionar(c: CamadaReparo | null) {
    escolhida = c;
    explodido = c !== null;
    if (opcoes.reduzido) { tween = null; aplicar(estadoAlvo()); }
    else tween = { inicio: performance.now(), de: estadoAtual(), para: estadoAlvo() };
    pedir();
  }
  ajustar();
  if (opcoes.inicial) selecionar(opcoes.inicial); else pedir();

  return {
    selecionar,
    destruir() {
      parar();
      observadorTela.disconnect();
      observadorTamanho.disconnect();
      document.removeEventListener('visibilitychange', aoVisibilidade);
      canvas.removeEventListener('pointerdown', aoPressionar);
      canvas.removeEventListener('pointermove', aoArrastar);
      canvas.removeEventListener('pointerup', aoSoltar);
      canvas.removeEventListener('pointercancel', aoSoltar);
      geometrias.forEach(g => g.dispose());
      materiais.forEach(m => m.dispose());
      texturas.forEach(t => t.dispose());
      ambiente.dispose();
      renderer.dispose();
      renderer.forceContextLoss();
    },
  };
}
