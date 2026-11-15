// This module imports only the pure motion policy; review data stays server-side.
import { podeAvancarAutomaticamente } from '../lib/movimento-avaliacoes';
for (const root of document.querySelectorAll<HTMLElement>('[data-carrossel]')) {
  const trilho = root.querySelector<HTMLElement>('.trilho')!;
  const pausa = root.querySelector<HTMLButtonElement>('[data-pausa]')!;
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  let pausado = false, hover = false, visivel = false;
  root.querySelector<HTMLElement>('.controles')!.hidden = false;
  const atualizar = () => { pausa.textContent = media.matches ? 'Movimento automático desativado' : pausado ? 'Retomar carrossel' : 'Pausar carrossel'; pausa.disabled = media.matches; };
  function avancar(direcao: number) {
    const passo = trilho.firstElementChild!.getBoundingClientRect().width + parseFloat(getComputedStyle(trilho).columnGap);
    const fim = trilho.scrollWidth - trilho.clientWidth;
    const destino = direcao > 0 && trilho.scrollLeft >= fim - 2 ? 0 : direcao < 0 && trilho.scrollLeft <= 2 ? fim : trilho.scrollLeft + passo * direcao;
    trilho.scrollTo({ left: destino, behavior: media.matches ? 'instant' : 'smooth' });
  }
  pausa.addEventListener('click', () => { pausado = !pausado; atualizar(); });
  for (const [seletor, direcao] of [['[data-anterior]', -1], ['[data-proximo]', 1]] as const) root.querySelector(seletor)!.addEventListener('click', () => { pausado = true; atualizar(); avancar(direcao); });
  root.addEventListener('pointerenter', () => { hover = true; });
  root.addEventListener('pointerleave', () => { hover = false; });
  trilho.addEventListener('pointerdown', () => { pausado = true; atualizar(); });
  trilho.addEventListener('keydown', () => { pausado = true; atualizar(); });
  const observer = new IntersectionObserver(([entry]) => { visivel = entry.isIntersecting; }, { threshold: .2 });
  observer.observe(root);
  media.addEventListener('change', atualizar); atualizar();
  const timer = window.setInterval(() => {
    if (podeAvancarAutomaticamente({ pausado, reduzido: media.matches, hover, foco: root.contains(document.activeElement), oculto: document.hidden, visivel })) avancar(1);
  }, 8000);
  window.addEventListener('pagehide', () => { clearInterval(timer); observer.disconnect(); }, { once: true });
}
