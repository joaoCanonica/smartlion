import type { APIRoute } from 'astro';
import { categorias, caminhoCategoria } from '../config/categorias';
import { servicos } from '../config/servicos';
import { obterProdutos } from '../lib/produtos';
import { publicavel } from '../lib/catalogo';
import { obterDicas } from '../lib/dicas';
import { dicaPublicavel } from '../schemas/dica';
import { urlCanonica } from '../lib/seo';
export const GET:APIRoute=async({site})=>{
 const rotas=['/','/produtos','/assistencia-tecnica','/curso-manutencao-celular','/a-loja','/nossa-historia','/visite-nos','/avaliacoes','/dicas','/perguntas-frequentes','/privacidade',...categorias.map(c=>caminhoCategoria(c.slug)),...servicos.map(s=>'/assistencia-tecnica/'+s.slug),...(await obterProdutos()).filter(publicavel).map(p=>'/produto/'+p.slug),...(await obterDicas()).filter(d=>dicaPublicavel(d.data)).map(d=>'/dicas/'+d.data.slug)];
 const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rotas.map(r=>`<url><loc>${escape(urlCanonica(r,site!))}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};
