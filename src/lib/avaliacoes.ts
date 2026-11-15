import dados from '../data/avaliacoes.json';
import { loja } from '../config/loja';
export const avaliacoes = dados.avaliacoes;
export type Avaliacao = typeof avaliacoes[number];
export const destaques = avaliacoes.filter(a => a.destaqueHome);
export const resumoAvaliacoes = dados.resumo;
export const coletadoEm = dados.fonte.coletadoEm;
export const atualizadoEm = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${coletadoEm}T12:00:00Z`)).replace('. de ', '/').replace(' de ', '/');
export { filtrosAvaliacoes, correspondeTema } from './temas-avaliacoes';
// A escolha da nota nunca altera o destino. Não transmitimos nem armazenamos notas.
export function destinoAvaliar(): string { return loja.linkAvaliar || loja.googleMaps; }
