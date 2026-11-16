/**
 * Reparo 3D: abas (WAI-ARIA, ativação manual), estados da ilustração e carga da ilha 3D.
 * - Setas ←/→ (e ↑/↓), Home e End movem o foco entre as abas; Enter/Espaço (clique) escolhem.
 * - A ilustração monta/explode em CSS ([data-explodido]) e destaca a camada ([data-camada]).
 * - 3D (src/tres/reparo.ts, import dinâmico; Three.js num pedaço compartilhado com o leão):
 *   desktop (≥ 1025 px, ponteiro fino) sem reduced-motion/Save-Data, com WebGL2, depois do
 *   load + ocioso e com a seção visível. No celular/tablet, só pelo botão "Ver em 3D"
 *   (com reduced-motion o 3D, se pedido, entra sem animação).
 */
import type { CamadaReparo, ReparoMontado } from '../../tres/reparo';

const reduzido = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
const temWebGL2 = () => {
  try {
    const gl = document.createElement('canvas').getContext('webgl2');
    gl?.getExtension('WEBGL_lose_context')?.loseContext();
    return !!gl;
  } catch { return false; }
};
const economia = () => !!(navigator as Navigator & { connection?: { saveData?: boolean } }).connection?.saveData;
const carregou = () => new Promise<void>(ok => (document.readyState === 'complete' ? ok() : addEventListener('load', () => ok(), { once: true })));
const ocioso = () => new Promise<void>(ok => ('requestIdleCallback' in window ? requestIdleCallback(() => ok(), { timeout: 1500 }) : setTimeout(ok, 300)));
const quandoVisivel = (el: Element, margem = '0px') => new Promise<void>(ok => {
  const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { obs.disconnect(); ok(); } }, { rootMargin: margem });
  obs.observe(el);
});

function iniciar(raiz: HTMLElement) {
  const lista = raiz.querySelector<HTMLElement>('[data-abas]')!;
  const abas = [...raiz.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const paineis = [...raiz.querySelectorAll<HTMLElement>('[data-painel]')];
  const visual = raiz.querySelector<HTMLElement>('[data-visual]')!;
  const botao3d = raiz.querySelector<HTMLButtonElement>('[data-ver-3d]')!;
  let cena: ReparoMontado | null = null;
  let atual: CamadaReparo = (abas[0]?.dataset.camada ?? 'tela') as CamadaReparo;

  // Modo com JS: abas visíveis, um painel por vez.
  raiz.setAttribute('data-js', '');
  lista.hidden = false;
  const escolher = (aba: HTMLButtonElement, focar = false) => {
    atual = aba.dataset.camada as CamadaReparo;
    for (const a of abas) {
      const sel = a === aba;
      a.setAttribute('aria-selected', String(sel));
      a.tabIndex = sel ? 0 : -1;
    }
    for (const p of paineis) p.toggleAttribute('data-ativo', p.dataset.painel === atual);
    visual.dataset.camada = atual;
    visual.setAttribute('data-explodido', '');
    cena?.selecionar(atual);
    if (focar) aba.focus();
  };
  for (const p of paineis) p.toggleAttribute('data-ativo', p.hasAttribute('data-inicial'));
  for (const aba of abas) aba.addEventListener('click', () => escolher(aba));
  lista.addEventListener('keydown', e => {
    const i = abas.indexOf(document.activeElement as HTMLButtonElement);
    if (i < 0) return;
    const ir = (n: number) => { e.preventDefault(); abas[(n + abas.length) % abas.length].focus(); };
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') ir(i + 1);
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') ir(i - 1);
    else if (e.key === 'Home') ir(0);
    else if (e.key === 'End') ir(abas.length - 1);
    // Enter e Espaço: o próprio <button> dispara o clique (ativação manual).
  });

  // Ao aparecer na tela, a ilustração explode na camada inicial (uma vez).
  quandoVisivel(visual, '-15% 0px').then(() => { if (!visual.hasAttribute('data-explodido')) escolher(abas.find(a => a.getAttribute('aria-selected') === 'true') ?? abas[0]); });

  // ---- 3D ----
  const montar3d = async () => {
    if (cena || visual.dataset.modo === 'carregando') return;
    visual.dataset.modo = 'carregando';
    botao3d.hidden = true;
    try {
      const { montarReparo } = await import('../../tres/reparo');
      const canvas = document.createElement('canvas');
      canvas.setAttribute('aria-hidden', 'true');
      visual.append(canvas);
      let voltou = false;
      const voltar = () => {
        if (voltou) return;
        voltou = true;
        cena?.destruir(); cena = null; canvas.remove();
        visual.dataset.modo = 'svg';
      };
      canvas.addEventListener('webglcontextlost', voltar);
      cena = montarReparo(canvas, {
        inicial: visual.hasAttribute('data-explodido') ? atual : null,
        reduzido: reduzido(),
        aoPrimeiroQuadro: () => { visual.dataset.modo = '3d'; },
      });
      addEventListener('pagehide', e => { if (!e.persisted) voltar(); });
    } catch {
      visual.dataset.modo = 'svg';
    }
  };
  if (!temWebGL2() || economia()) return; // fica a ilustração
  const desktop = matchMedia('(min-width: 1025px) and (pointer: fine)').matches;
  if (desktop && !reduzido()) {
    carregou().then(ocioso).then(() => quandoVisivel(visual, '200px')).then(montar3d);
  } else {
    botao3d.hidden = false;
    botao3d.addEventListener('click', montar3d, { once: true });
  }
}

for (const raiz of document.querySelectorAll<HTMLElement>('[data-reparo3d]')) iniciar(raiz);
