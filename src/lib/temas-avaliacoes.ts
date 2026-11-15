export const filtrosAvaliacoes = [
  { id: 'todas', nome: 'Todas' },
  { id: 'compra', nome: 'Compra' },
  { id: 'assistencia', nome: 'Assistência' },
  { id: 'seminovo', nome: 'Seminovos' },
  { id: 'atendimento', nome: 'Atendimento' },
  { id: 'regiao', nome: 'Clientes de outras cidades' },
] as const;
export function correspondeTema(tags: readonly string[], tema: string): boolean {
  if (tema === 'todas') return true;
  if (tema === 'iphone') return tags.includes('compra') && tags.includes('iphone');
  return filtrosAvaliacoes.some(f => f.id === tema) && tags.includes(tema);
}
