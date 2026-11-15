import { loja } from './loja';
export const mensagemGeral = 'Olá, Smart Lion! Vim pelo site e queria atendimento.';
/** Único ponto de geração dos links de WhatsApp do site. */
export function linkWhatsApp(texto: string): string {
  return `https://wa.me/${loja.whatsapp.numero}?text=${encodeURIComponent(texto)}`;
}
function campo(valor: string, nome: string): string {
  const texto = valor.trim();
  if (!texto) throw new Error(`Campo obrigatório: ${nome}.`);
  return texto;
}
export interface EscolhasProduto {
  nome: string; versao: string; cor: string; condicao: 'novo' | 'seminovo'; url: string;
}
export const mensagensWhatsApp = {
  geral: () => mensagemGeral,
  produto: ({ nome, versao, cor, condicao, url }: EscolhasProduto): string => {
    // Encomenda é disponibilidade; a condição física ainda precisa ser confirmada.
    if (condicao !== 'novo' && condicao !== 'seminovo') throw new Error('Condição deve ser novo ou seminovo.');
    return `Olá, Smart Lion! Vi no site e tenho interesse:\n*${campo(nome, 'nome')}*\nVersão: ${campo(versao, 'versao')}\nCor: ${campo(cor, 'cor')}\nCondição: ${condicao}\nPode me passar a disponibilidade e o valor?\n${campo(url, 'url')}`;
  },
  card: (nome: string, url: string): string => `Olá, Smart Lion! Vi o *${campo(nome, 'nome')}* no site. Quais versões e cores vocês têm e qual o valor?\n${campo(url, 'url')}`,
  esgotado: (nome: string): string => `Olá, Smart Lion! Vi o *${campo(nome, 'nome')}* no site. Me avisam quando chegar?`,
  // Campos opcionais ficam vazios: não acrescentar valores ou frases não aprovadas.
  assistencia: (modelo = '', problema = ''): string => `Olá, Smart Lion! Preciso de assistência técnica. Aparelho: ${modelo.trim()}. Problema: ${problema.trim()}.`,
  servico: (servico: string, modelo: string): string => `Olá, Smart Lion! Quero um orçamento de ${campo(servico, 'servico')} para ${campo(modelo, 'modelo')}.`,
  consertarOuTrocar: (aparelho: string, problema: string): string => `Olá, Smart Lion! Meu ${campo(aparelho, 'aparelho')} está com ${campo(problema, 'problema')}. Quero saber se compensa consertar ou trocar.`,
  parcelamento: (produto = ''): string => `Olá, Smart Lion! Quero simular o parcelamento de ${produto.trim() || 'um aparelho'}.`,
  seminovos: (modelo: string): string => `Olá, Smart Lion! Quero ver os seminovos disponíveis. Tenho interesse em ${campo(modelo, 'modelo')}.`,
  curso: (): string => 'Olá, Smart Lion! Quero saber sobre a próxima turma do curso de manutenção de celulares.',
  perfumaria: (nome: string): string => `Olá, Smart Lion! Vi o perfume *${campo(nome, 'nome')}* no site. Tem disponível?`,
};
/** A configuração precisa ser explicitamente true antes de oferecer este fluxo. */
export function mensagemTroca(modeloAtual: string, modeloDesejado: string, aceitaUsado: boolean | null = loja.aceitaUsadoNaTroca): string {
  if (aceitaUsado !== true) throw new Error('PENDENTE: confirmar se a loja aceita usado na troca.');
  return `Olá, Smart Lion! Quero trocar meu ${campo(modeloAtual, 'modeloAtual')} por ${campo(modeloDesejado, 'modeloDesejado')}. Como funciona a avaliação?`;
}
