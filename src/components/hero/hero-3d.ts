/**
 * Decide e carrega a ilha 3D do hero. Este arquivo é pequeno (vai no JS inicial); o
 * Three.js e a cena (src/tres/leao.ts) chegam por import() dinâmico, num pedaço separado,
 * só quando todas as condições abaixo são verdadeiras:
 *   1. tela ≥ 1025 px (no celular e no tablet fica sempre o pôster AVIF);
 *   2. sem prefers-reduced-motion, sem Save-Data, memória ≥ 4 GB (quando informada);
 *   3. WebGL2 disponível;
 *   4. depois do LCP: evento load + abertura encerrada + requestIdleCallback;
 *   5. hero visível na tela (IntersectionObserver).
 * Se a cena desistir (fps baixo), perder o contexto ou a tela ficar estreita, volta ao pôster.
 */
type Leao = { destruir(): void };

const visual = document.querySelector<HTMLElement>('[data-hero-3d]');
const telaLarga = matchMedia('(min-width: 1025px)');

function motivoParaFicarNoPoster(): string | null {
  if (!telaLarga.matches) return 'tela estreita';
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return 'movimento reduzido';
  const nav = navigator as Navigator & { connection?: { saveData?: boolean }; deviceMemory?: number };
  if (nav.connection?.saveData) return 'economia de dados';
  if (nav.deviceMemory !== undefined && nav.deviceMemory < 4) return 'pouca memória';
  try {
    const teste = document.createElement('canvas').getContext('webgl2');
    if (!teste) return 'sem WebGL2';
    teste.getExtension('WEBGL_lose_context')?.loseContext();
  } catch { return 'sem WebGL2'; }
  return null;
}

const carregou = () => new Promise<void>(ok => (document.readyState === 'complete' ? ok() : addEventListener('load', () => ok(), { once: true })));
const aberturaEncerrada = () => new Promise<void>(ok => {
  const html = document.documentElement;
  if (!html.classList.contains('rugido-ativo')) return ok();
  const obs = new MutationObserver(() => { if (!html.classList.contains('rugido-ativo')) { obs.disconnect(); ok(); } });
  obs.observe(html, { attributes: true, attributeFilter: ['class'] });
});
const ocioso = () => new Promise<void>(ok => ('requestIdleCallback' in window ? requestIdleCallback(() => ok(), { timeout: 1500 }) : setTimeout(ok, 300)));
const visivel = (el: Element) => new Promise<void>(ok => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { obs.disconnect(); ok(); } });
  obs.observe(el);
});

async function preparar(alvo: HTMLElement) {
  const motivo = motivoParaFicarNoPoster();
  if (motivo) { alvo.dataset.motivo = motivo; return; }
  await carregou();
  await aberturaEncerrada();
  await ocioso();
  await visivel(alvo);
  if (!telaLarga.matches) { alvo.dataset.motivo = 'tela estreita'; return; }

  const inicio = performance.now();
  const { montarLeao } = await import('../../tres/leao');
  const canvas = document.createElement('canvas');
  canvas.setAttribute('aria-hidden', 'true');
  alvo.append(canvas);
  let leao: Leao | null = null;
  let voltou = false;
  const voltar = (porque: string) => {
    if (voltou) return; // destruir() força a perda de contexto, que dispararia voltar() de novo
    voltou = true;
    leao?.destruir();
    leao = null;
    canvas.remove();
    alvo.dataset.modo = 'poster';
    alvo.dataset.motivo = porque;
  };
  canvas.addEventListener('webglcontextlost', () => voltar('contexto perdido'));
  try {
    leao = montarLeao(canvas, {
      aoPrimeiroQuadro: () => { alvo.dataset.modo = '3d'; alvo.dataset.carga = String(Math.round(performance.now() - inicio)); },
      aoDesistir: m => voltar(`desempenho (${m})`),
      // Gancho só para QA/capturas em máquina sem GPU (a variável não existe em produção).
      adaptativo: !('__slLeaoSemAdaptar' in window),
    });
  } catch (e) {
    voltar('erro ao iniciar');
    return;
  }
  telaLarga.addEventListener('change', e => { if (!e.matches && leao) voltar('tela estreita'); });
  addEventListener('pagehide', e => { if (!e.persisted && leao) { leao.destruir(); leao = null; } });
}

/** Liga a varredura CSS do pôster usando a própria imagem já carregada como máscara. */
function ligarMascara(alvo: HTMLElement) {
  const img = alvo.querySelector<HTMLImageElement>('.hero-poster img');
  if (!img) return;
  const ligar = () => {
    if (!img.currentSrc) return;
    alvo.style.setProperty('--leao-mascara', `url("${img.currentSrc}")`);
    alvo.setAttribute('data-mascara', '');
  };
  // Depois do load e de um respiro ocioso: a varredura não entra no caminho crítico do LCP.
  carregou().then(ocioso).then(() => (img.complete ? ligar() : img.addEventListener('load', ligar, { once: true })));
}

if (visual) ligarMascara(visual);
if (visual) preparar(visual).catch(() => { visual.dataset.modo = 'poster'; visual.dataset.motivo = 'erro'; });
