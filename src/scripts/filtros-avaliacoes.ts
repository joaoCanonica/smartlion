import { correspondeTema } from '../lib/temas-avaliacoes';
const botoes = [...document.querySelectorAll<HTMLButtonElement>('[data-tema]')];
const itens = [...document.querySelectorAll<HTMLElement>('.lista-avaliacoes [data-avaliacao]')];
const grupo = document.querySelector<HTMLElement>('.filtros');
if (grupo) {
  grupo.hidden = false;
  function aplicar(tema: string) {
    let total = 0;
    for (const item of itens) { item.hidden = !correspondeTema(item.dataset.tags!.split(' '), tema); if (!item.hidden) total++; }
    for (const botao of botoes) botao.setAttribute('aria-pressed', String(botao.dataset.tema === tema));
    document.querySelector('#contagem-avaliacoes')!.textContent = `${total} ${total === 1 ? 'depoimento' : 'depoimentos'}`;
    document.querySelector<HTMLElement>('[data-sem-avaliacoes]')!.hidden = total > 0;
  }
  function lerURL() { const t = new URL(location.href).searchParams.get('tema') || 'todas'; aplicar(t === 'iphone' ? 'compra' : botoes.some(b => b.dataset.tema === t) ? t : 'todas'); }
  for (const b of botoes) b.addEventListener('click', () => { const t = b.dataset.tema!; aplicar(t); const url = new URL(location.href); if (t === 'todas') url.searchParams.delete('tema'); else url.searchParams.set('tema', t); history.replaceState(null, '', url); });
  window.addEventListener('popstate', lerURL); lerURL();
}
