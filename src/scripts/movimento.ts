/**
 * Movimento compartilhado (IntersectionObserver + Web Animations API).
 * - [data-varredura]: recebe .varredura-ativa uma vez ao entrar na tela (a animação é CSS).
 * - [data-contador]: conta de 0 até o valor final uma vez.
 * Com prefers-reduced-motion nada anima: os estados finais já estão no HTML.
 */
const reduzido = matchMedia('(prefers-reduced-motion: reduce)').matches;

function formatar(valor: number, casas: number, prefixo: string, sufixo: string) {
  return `${prefixo}${new Intl.NumberFormat('pt-BR', { minimumFractionDigits: casas, maximumFractionDigits: casas }).format(valor)}${sufixo}`;
}

function contar(el: HTMLElement) {
  const final = Number(el.dataset.contador);
  const casas = Number(el.dataset.casas ?? 0);
  const prefixo = el.dataset.prefixo ?? '', sufixo = el.dataset.sufixo ?? '';
  const duracao = Number(el.dataset.duracao ?? 1400);
  const textoFinal = el.dataset.final ?? el.textContent;
  const inicio = performance.now();
  const passo = (agora: number) => {
    const t = Math.min(1, (agora - inicio) / duracao);
    const suave = 1 - Math.pow(1 - t, 4);
    el.textContent = t < 1 ? formatar(final * suave, casas, prefixo, sufixo) : textoFinal;
    if (t < 1) requestAnimationFrame(passo);
  };
  requestAnimationFrame(passo);
}

function iniciar() {
  if (reduzido || !('IntersectionObserver' in window)) return;
  const alvos = document.querySelectorAll<HTMLElement>('[data-varredura]:not([data-movimento-pronto]), [data-contador]:not([data-movimento-pronto])');
  if (!alvos.length) return;
  const observador = new IntersectionObserver((entradas) => {
    for (const entrada of entradas) {
      if (!entrada.isIntersecting) continue;
      const el = entrada.target as HTMLElement;
      observador.unobserve(el);
      if (el.hasAttribute('data-varredura')) el.classList.add('varredura-ativa');
      if (el.dataset.animar === 'sim') contar(el);
    }
  }, { threshold: 0.35 });
  for (const el of alvos) {
    el.setAttribute('data-movimento-pronto', '');
    // Contador fora da tela começa em zero e conta ao aparecer; o que já está visível no
    // carregamento fica no valor final (sem piscar). Sem JS, sempre o número final.
    if (el.hasAttribute('data-contador')) {
      const r = el.getBoundingClientRect();
      if (r.top > innerHeight || r.bottom < 0) { el.style.minWidth = `${r.width}px`; el.dataset.animar = 'sim'; el.dataset.final = el.textContent ?? ''; el.textContent = formatar(0, Number(el.dataset.casas ?? 0), el.dataset.prefixo ?? '', el.dataset.sufixo ?? ''); }
    }
    observador.observe(el);
  }
}

iniciar();
