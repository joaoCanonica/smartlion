import { getCollection } from 'astro:content';
import { visivel, type Produto } from './catalogo';
/** Única porta de leitura: usada por rotas, cards, contagens e índice JSON. */
export async function obterProdutos(): Promise<Produto[]> {
 const entradas=await getCollection('produtos');
 const slugs=new Set<string>();
 for(const {data} of entradas){
  if(slugs.has(data.slug))throw new Error(`Slug de produto duplicado: ${data.slug}`);
  slugs.add(data.slug);
 }
 return entradas.map(e=>e.data).filter(p=>visivel(p,import.meta.env.DEV)).sort((a,b)=>a.ordem-b.ordem || a.nome.localeCompare(b.nome,'pt-BR'));
}
