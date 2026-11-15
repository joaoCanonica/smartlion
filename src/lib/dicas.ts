import { getCollection } from 'astro:content';
import { dicaPublicavel } from '../schemas/dica';
export async function obterDicas(){
 const entradas=await getCollection('dicas');const slugs=new Set<string>();
 for(const e of entradas){if(slugs.has(e.data.slug))throw new Error(`Slug de dica duplicado: ${e.data.slug}`);slugs.add(e.data.slug);if(/^#\s/m.test(e.body||''))throw new Error(`Use H2 no corpo: ${e.data.slug}`);}
 return entradas.filter(e=>import.meta.env.DEV||dicaPublicavel(e.data)).sort((a,b)=>a.data.ordem-b.data.ordem);
}
