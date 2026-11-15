/**
 * Sequência da abertura "O Rugido de Luz" (≤ 2,8 s), só Web Animations API.
 * O tempo zero é o instante em que a parte 1 criou a camada (data-t0); se este
 * módulo chegar atrasado, as animações começam já no ponto certo (atraso negativo).
 *
 *   0–0,4 s   tela Preto Leão com grão
 *   0,4–1,2 s anel se desenha (máscara com traço, sentido horário) + letras uma a uma
 *   1,2–1,9 s leão acende por grupos (núcleo → rosto → juba) + varredura âmbar→branco
 *   1,9–2,8 s logo encolhe até o leão do cabeçalho (FLIP) e o preto abre do centro (clip-path)
 *
 * View Transitions: avaliado e não usado. A transição de mesmo documento congela a
 * página em instantâneos durante a animação, o que deixaria o hero e o botão "Pular"
 * sem resposta; o FLIP com WAAPI dá o mesmo resultado em todos os navegadores.
 */
const TEMPO = {
  anel: { inicio: 400, duracao: 750 },
  letras: { inicio: 560, passo: 60, duracao: 200 },
  leao: { nucleo: 1200, rosto: 1360, juba: 1500, passo: 40, duracao: 360 },
  varredura: { inicio: 1280, duracao: 640 },
  saida: { inicio: 1900, logo: 820, apagar: 320, abrir: { atraso: 100, duracao: 800 } },
  total: 2800,
} as const;
const SUAVE = 'cubic-bezier(.65,0,.35,1)';
const SAIDA = 'cubic-bezier(.16,1,.3,1)';

export function iniciarAbertura(): void {
  const raiz = document.querySelector<HTMLElement>('[data-rugido]');
  const modelo = document.querySelector<HTMLTemplateElement>('#rugido-modelo');
  if (!raiz || !modelo || raiz.hasAttribute('data-iniciada') || !('animate' in Element.prototype)) return;
  raiz.setAttribute('data-iniciada', '');

  const t0 = Number(raiz.dataset.t0) || performance.now();
  const decorrido = () => performance.now() - t0;
  const botao = raiz.querySelector<HTMLButtonElement>('[data-rugido-pular]');
  raiz.insertBefore(modelo.content.cloneNode(true), botao);
  const svg = raiz.querySelector<SVGSVGElement>('.rugido-logo')!;
  const fundo = raiz.querySelector<HTMLElement>('.rugido-fundo')!;
  const animacoes: Animation[] = [];
  const timers: number[] = [];
  let terminou = false;

  /** Anima com atraso relativo ao tempo zero da camada. */
  const animar = (el: Element, quadros: Keyframe[], inicio: number, duracao: number, easing = SUAVE) => {
    const a = el.animate(quadros, { delay: inicio - decorrido(), duration: duracao, easing, fill: 'both' });
    animacoes.push(a);
    return a;
  };
  const depois = (inicio: number, fn: () => void) => { timers.push(window.setTimeout(fn, Math.max(0, inicio - decorrido()))); };

  const finalizar = (rapido = false) => {
    if (terminou) return;
    terminou = true;
    timers.forEach(clearTimeout);
    window.__slAberturaPular = undefined;
    const remover = () => {
      animacoes.forEach(a => a.cancel());
      if (raiz.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
      raiz.remove();
      document.documentElement.classList.remove('rugido-ativo');
    };
    if (rapido) raiz.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 160, easing: 'ease-out' }).finished.then(remover, remover);
    else remover();
  };
  window.__slAberturaPular = () => finalizar(true);

  // 0,4–1,2 s · anel desenhado no sentido horário e letras do nome.
  const traco = svg.querySelector('.ab-traco')!;
  animar(traco, [{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], TEMPO.anel.inicio, TEMPO.anel.duracao);
  const escala = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width || 1;
  const sobe = 2 / escala; // 2 px na tela, em unidades do SVG
  svg.querySelectorAll('.ab-letra').forEach((letra, i) => {
    animar(letra, [{ opacity: 0, transform: `translateY(${sobe}px)` }, { opacity: 1, transform: 'translateY(0)' }], TEMPO.letras.inicio + i * TEMPO.letras.passo, TEMPO.letras.duracao, 'cubic-bezier(.2,.8,.2,1)');
  });

  // 1,2–1,9 s · leão acende de dentro para fora + varredura de luz na diagonal.
  const contagem: Record<string, number> = {};
  svg.querySelectorAll<SVGPathElement>('.ab-parte').forEach(parte => {
    const grupo = (parte.dataset.grupo ?? 'juba') as 'nucleo' | 'rosto' | 'juba';
    const i = (contagem[grupo] = (contagem[grupo] ?? -1) + 1);
    animar(parte, [{ opacity: 0 }, { opacity: 1 }], TEMPO.leao[grupo] + i * TEMPO.leao.passo, TEMPO.leao.duracao, 'cubic-bezier(.3,0,.2,1)');
  });
  animar(svg.querySelector('.ab-leao')!, [{ transform: 'scale(.965)' }, { transform: 'scale(1)' }], TEMPO.leao.nucleo, TEMPO.saida.inicio - TEMPO.leao.nucleo, SAIDA);
  const luz = svg.querySelector<SVGRectElement>('.ab-varredura')!;
  const lw = luz.width.baseVal.value / 3, lh = luz.height.baseVal.value / 3; // tamanho do leão
  animar(luz, [
    { opacity: 0, transform: `translate(${-lw}px, ${-lh}px)` },
    { opacity: 1, offset: 0.2 },
    { opacity: 1, offset: 0.75 },
    { opacity: 0, transform: `translate(${lw}px, ${lh}px)` },
  ], TEMPO.varredura.inicio, TEMPO.varredura.duracao, 'cubic-bezier(.45,0,.25,1)');

  // 1,9–2,8 s · FLIP até o leão do cabeçalho e abertura do preto do centro para fora.
  depois(TEMPO.saida.inicio, () => {
    if (terminou) return;
    const inicio = TEMPO.saida.inicio;
    animar(svg.querySelector('.ab-anel')!, [{ opacity: 1 }, { opacity: 0 }], inicio, TEMPO.saida.apagar);
    animar(svg.querySelector('.ab-nome')!, [{ opacity: 1 }, { opacity: 0 }], inicio, TEMPO.saida.apagar);

    const alvo = document.querySelector('.cabecalho .marca .logo-compacto-leao')?.getBoundingClientRect();
    const caixa = svg.getBoundingClientRect();
    const vb = svg.viewBox.baseVal;
    const [lx, ly, lwv] = (svg.dataset.leao ?? '').split(/\s+/).map(Number);
    if (alvo && alvo.width > 0 && caixa.width > 0) {
      const k = caixa.width / vb.width; // px por unidade do SVG
      const leaoEsq = caixa.left + (lx - vb.x) * k, leaoTopo = caixa.top + (ly - vb.y) * k;
      const s = alvo.width / (lwv * k);
      const tx = alvo.left - caixa.left - (leaoEsq - caixa.left) * s;
      const ty = alvo.top - caixa.top - (leaoTopo - caixa.top) * s;
      animar(svg, [{ transform: 'translate(0px, 0px) scale(1)' }, { transform: `translate(${tx}px, ${ty}px) scale(${s})` }], inicio + 50, TEMPO.saida.logo, 'cubic-bezier(.7,0,.2,1)');
    } else {
      animar(svg, [{ opacity: 1 }, { opacity: 0 }], inicio, TEMPO.saida.apagar);
    }

    // Preto abre do centro: clip-path com um furo circular (evenodd) que cresce.
    const w = innerWidth, h = innerHeight, cx = w / 2, cy = h / 2, rMax = Math.hypot(cx, cy) + 2;
    const furo = (r: number) => `path(evenodd, "M0 0H${w}V${h}H0Z M${cx - r} ${cy}a${r} ${r} 0 1 0 ${2 * r} 0a${r} ${r} 0 1 0 ${-2 * r} 0Z")`;
    animar(fundo, [{ clipPath: furo(0.5) }, { clipPath: furo(rMax) }], inicio + TEMPO.saida.abrir.atraso, TEMPO.saida.abrir.duracao, 'cubic-bezier(.6,0,.2,1)');
  });
  depois(TEMPO.total, () => finalizar(false));
}

declare global { interface Window { __slAberturaPular?: () => void } }
