import type { CollectionEntry } from 'astro:content';
import { categorias } from '../config/categorias';
import { linkWhatsApp, mensagensWhatsApp } from '../config/whatsapp';
export type Produto = CollectionEntry<'produtos'>['data'];
export type Categoria = typeof categorias[number]['slug'];
export type DadosConsulta = Pick<Produto,'slug'|'nome'|'categoria'|'condicao'|'condicaoFisica'|'disponibilidade'|'versoes'|'cores'>;
export interface Escolhas { versao: string; cor: string }
export interface ItemBusca { slug: string; nome: string; categorias: string[]; condicao: string; termos: string }
export function publicavel(p: Pick<Produto,'rascunho'|'confirmado'|'confirmadoEm'>): boolean {
 return p.rascunho === false && p.confirmado === true && Boolean(p.confirmadoEm);
}
export function visivel(p: Pick<Produto,'rascunho'|'confirmado'|'confirmadoEm'>, desenvolvimento: boolean): boolean { return desenvolvimento || publicavel(p); }
export function condicaoFisica(p: Pick<Produto,'condicao'|'condicaoFisica'>): 'novo' | 'seminovo' | null {
 return p.condicao === 'encomenda' ? p.condicaoFisica : p.condicao;
}
export function categoriasProduto(p: Pick<Produto,'categoria'|'condicao'|'condicaoFisica'>): string[] {
 return [...new Set([p.categoria,...(condicaoFisica(p) === 'seminovo' ? ['seminovos'] : [])])];
}
export function nomeCategoria(slug: string): string { return categorias.find(c=>c.slug === slug)?.nome ?? slug; }
export function normalizar(texto: string): string {
 return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
export type DadosIndice = Pick<Produto,'slug'|'nome'|'categoria'|'condicao'|'condicaoFisica'|'descricaoCurta'|'saudeBateria'|'sinonimos'|'versoes'>;
export function criarIndice(produtos: DadosIndice[]): ItemBusca[] {
 return produtos.map(p=>({slug:p.slug,nome:p.nome,categorias:categoriasProduto(p),condicao:condicaoFisica(p) ?? 'encomenda',termos:normalizar([p.nome,p.slug,nomeCategoria(p.categoria),p.condicao,condicaoFisica(p),p.descricaoCurta,p.saudeBateria,...p.sinonimos,...p.versoes.map(v=>v.rotulo)].join(' '))}));
}
export function buscar(indice: ItemBusca[], consulta: string, categoria = '', condicao = ''): ItemBusca[] {
 const palavras=normalizar(consulta).split(' ').filter(Boolean);
 return indice.filter(p=>(!categoria || p.categorias.includes(categoria)) && (!condicao || p.condicao === condicao) && palavras.every(t=>p.termos.includes(t)));
}
export function resolverEscolhas(p: DadosConsulta, parametros: URLSearchParams): Escolhas {
 const v=parametros.get('versao') ?? '', c=parametros.get('cor') ?? '';
 return {versao:p.versoes.some(x=>x.id===v)?v:'',cor:p.cores.some(x=>x.id===c)?c:''};
}
export function caminhoProduto(slug: string, escolhas: Partial<Escolhas> = {}): string {
 const params=new URLSearchParams();
 if(escolhas.versao)params.set('versao',escolhas.versao);
 if(escolhas.cor)params.set('cor',escolhas.cor);
 return `/produto/${slug}${params.size ? `?${params}` : ''}`;
}
export function urlProduto(slug: string, origem: string, escolhas: Partial<Escolhas> = {}): string {
 return new URL(caminhoProduto(slug,escolhas),origem).href;
}
export function consultaProduto(p: DadosConsulta, origem: string, escolhas: Partial<Escolhas> = {}): string {
 if(p.disponibilidade === 'esgotado')return linkWhatsApp(mensagensWhatsApp.esgotado(p.nome));
 if(p.categoria === 'perfumaria')return linkWhatsApp(mensagensWhatsApp.perfumaria(p.nome));
 const versao=p.versoes.find(v=>v.id===escolhas.versao), cor=p.cores.find(c=>c.id===escolhas.cor), condicao=condicaoFisica(p);
 const url=urlProduto(p.slug,origem,escolhas);
 return linkWhatsApp(versao && cor && condicao
  ? mensagensWhatsApp.produto({nome:p.nome,versao:versao.rotulo,cor:cor.rotulo,condicao,url})
  : mensagensWhatsApp.card(p.nome,url));
}
export function formatarPreco(p: Pick<Produto,'preco'|'precoNota'>): string {
 return p.preco !== null && p.precoNota ? new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(p.preco) : 'Sob consulta';
}
export function textoPrecoNota(p: Pick<Produto,'precoNota'>): string {
 if(!p.precoNota)return '';
 const n=p.precoNota;
 return `${n.condicao} · ${n.formaPagamento} · ${n.data.split('-').reverse().join('/')}`;
}
export function dadosConsulta(p: Produto): DadosConsulta {
 const {slug,nome,categoria,condicao,condicaoFisica,disponibilidade,versoes,cores}=p;
 return {slug,nome,categoria,condicao,condicaoFisica,disponibilidade,versoes,cores};
}
