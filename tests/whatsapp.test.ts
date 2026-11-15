import { describe, expect, it } from 'vitest';
import { readFileSync } from 'node:fs';
import { loja } from '../src/config/loja';
import { mensagensWhatsApp as m, mensagemTroca, linkWhatsApp, type EscolhasProduto } from '../src/config/whatsapp';
const url = 'https://www.smartlionsc.com.br/produto/exemplo?versao=256&cor=prata';
// Dados sintéticos somente nos testes: não representam catálogo ou estoque.
const escolhas: EscolhasProduto = { nome: 'Modelo de teste', versao: '256GB', cor: 'Prata', condicao: 'novo', url };
const casos: [string, string, string][] = [
 ['Botão geral', m.geral(), 'Olá, Smart Lion! Vim pelo site e queria atendimento.'],
 ['Produto (com escolhas)', m.produto(escolhas), `Olá, Smart Lion! Vi no site e tenho interesse:\n*Modelo de teste*\nVersão: 256GB\nCor: Prata\nCondição: novo\nPode me passar a disponibilidade e o valor?\n${url}`],
 ['Atalho do card (sem escolhas)', m.card('Modelo de teste', url), `Olá, Smart Lion! Vi o *Modelo de teste* no site. Quais versões e cores vocês têm e qual o valor?\n${url}`],
 ['Esgotado', m.esgotado('Modelo de teste'), 'Olá, Smart Lion! Vi o *Modelo de teste* no site. Me avisam quando chegar?'],
 ['Assistência (genérico)', m.assistencia('Modelo de teste', 'tela quebrada'), 'Olá, Smart Lion! Preciso de assistência técnica. Aparelho: Modelo de teste. Problema: tela quebrada.'],
 ['Serviço específico', m.servico('troca de tela', 'iPhone 13'), 'Olá, Smart Lion! Quero um orçamento de troca de tela para iPhone 13.'],
 ['Consertar ou trocar', m.consertarOuTrocar('Modelo de teste','tela quebrada'), 'Olá, Smart Lion! Meu Modelo de teste está com tela quebrada. Quero saber se compensa consertar ou trocar.'],
 ['Parcelamento', m.parcelamento('Modelo de teste'), 'Olá, Smart Lion! Quero simular o parcelamento de Modelo de teste.'],
 ['Seminovos', m.seminovos('Modelo de teste'), 'Olá, Smart Lion! Quero ver os seminovos disponíveis. Tenho interesse em Modelo de teste.'],
 ['Troca (meu aparelho como parte)', mensagemTroca('Modelo atual', 'Modelo desejado', true), 'Olá, Smart Lion! Quero trocar meu Modelo atual por Modelo desejado. Como funciona a avaliação?'],
 ['Curso', m.curso(), 'Olá, Smart Lion! Quero saber sobre a próxima turma do curso de manutenção de celulares.'],
 ['Perfumaria', m.perfumaria('Perfume de teste'), 'Olá, Smart Lion! Vi o perfume *Perfume de teste* no site. Tem disponível?'],
];
describe('Todas as 12 mensagens da §10', () => {
 it.each(casos)('%s: texto literal', (_, atual, esperado) => expect(atual).toBe(esperado));
 it.each(casos)('%s: link preserva todo o texto e o número', (_, texto) => {
   const link = new URL(linkWhatsApp(texto));
   expect(link.origin).toBe('https://wa.me'); expect(link.pathname).toBe('/5549999268930');
   expect(link.searchParams.get('text')).toBe(texto); expect([...link.searchParams.keys()]).toEqual(['text']);
 });
 it.each(casos)('%s: contrato direto com o arquivo da especificação', (origem, atual) => {
   const spec = readFileSync(new URL('../docs/ESPECIFICACAO.md', import.meta.url), 'utf8');
   const linha = spec.split('## 10.')[1]!.split('## 11.')[0]!.split('\n').find(l=>l.startsWith(`| ${origem} |`))!;
   const template = linha.match(/`([^`]+)`/)![1]!.replaceAll('\\n','\n');
   const valores: Record<string,string> = { nome: origem === 'Perfumaria' ? 'Perfume de teste' : 'Modelo de teste', versao:'256GB',cor:'Prata','novo/seminovo':'novo',url,modelo:'Modelo de teste',problema:'tela quebrada','troca de tela':'troca de tela','iPhone 13':'iPhone 13',aparelho:'Modelo de teste','produto ou "um aparelho"':'Modelo de teste','modelo atual':'Modelo atual','modelo desejado':'Modelo desejado' };
   expect(atual).toBe(template.replace(/\{([^}]+)\}/g,(_,key:string)=>valores[key]!));
 });
 it('os testes cobrem todas as linhas da tabela da especificação', () => {
   const spec = readFileSync(new URL('../docs/ESPECIFICACAO.md', import.meta.url), 'utf8').split('## 10.')[1]!.split('## 11.')[0]!;
   const origens = spec.split('\n').filter(l=>l.startsWith('| ')&&!l.startsWith('| Origem')).map(l=>l.split('|')[1]!.trim());
   expect(casos.map(c=>c[0])).toEqual(origens);
 });
 it('seminovo aparece como condição literal', () => expect(m.produto({...escolhas,condicao:'seminovo'})).toContain('\nCondição: seminovo\n'));
 it('não assume condição física de uma encomenda', () => expect(()=>m.produto({...escolhas,condicao:'encomenda' as 'novo'})).toThrow('Condição'));
 it('parcela um aparelho quando o campo opcional fica vazio', () => expect(m.parcelamento()).toBe('Olá, Smart Lion! Quero simular o parcelamento de um aparelho.'));
 it('normaliza espaços no produto opcional', () => expect(m.parcelamento('  ')).toBe(m.parcelamento()));
 it('assistência mantém campos opcionais vazios sem inventar dados', () => expect(m.assistencia()).toBe('Olá, Smart Lion! Preciso de assistência técnica. Aparelho: . Problema: .'));
 it.each(['nome','versao','cor','url'] as const)('produto rejeita %s vazio', key=>expect(()=>m.produto({...escolhas,[key]:' '})).toThrow('Campo obrigatório'));
 it('troca está bloqueada na configuração real', () => { expect(loja.aceitaUsadoNaTroca).toBeNull(); expect(()=>mensagemTroca('a','b')).toThrow('PENDENTE'); });
 it.each([false,null])('troca fica bloqueada com confirmação %s', confirmacao=>expect(()=>mensagemTroca('a','b',confirmacao)).toThrow('PENDENTE'));
 it('codifica acentos, ampersand, sinais e quebra de linha sem criar parâmetros extras', () => {
   const texto='Ação & revisão + 100%\n#teste?cor=azul'; const link=new URL(linkWhatsApp(texto));
   expect(link.searchParams.get('text')).toBe(texto); expect(link.hash).toBe(''); expect([...link.searchParams.keys()]).toEqual(['text']);
 });
});
