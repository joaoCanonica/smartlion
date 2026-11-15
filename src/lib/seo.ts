import { loja } from '../config/loja';
import { categorias, caminhoCategoria } from '../config/categorias';
import { servicos } from '../config/servicos';
import { perguntas } from '../data/perguntas';
import type { Produto } from './catalogo';
export const caminhoLimpo=(path:string)=>path==='/'?'/':path.replace(/\/+$/,'');
export const urlCanonica=(path:string,site:URL|string)=>new URL(caminhoLimpo(path.split('?')[0]!.split('#')[0]!),site).href;
export function podeIndexar(dev:boolean,autorizado:string|undefined,ambiente:string|undefined){return !dev&&autorizado==='true'&&(!ambiente||ambiente==='production');}
export const jsonSeguro=(valor:unknown)=>JSON.stringify(valor).replace(/</g,'\\u003c');
const hora=(n:number)=>`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
const dias=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export function dadosEstruturados(path:string,title:string,site:URL|string,produto?:Produto){
 const url=(p:string)=>urlCanonica(p,site);const id=url('/')+'#loja';const p=caminhoLimpo(path);
 const graph:Record<string,unknown>[]=[{'@type':'ElectronicsStore','@id':id,name:loja.nome,url:url('/'),telephone:loja.telefone.numero,address:{'@type':'PostalAddress',streetAddress:`${loja.endereco.rua}, ${loja.endereco.numero}`,addressLocality:loja.endereco.cidade,addressRegion:loja.endereco.uf,postalCode:loja.endereco.cep,addressCountry:'BR'},geo:{'@type':'GeoCoordinates',...loja.coordenadas},sameAs:[loja.instagram.url,loja.googleMaps],openingHoursSpecification:loja.horario.semana.flatMap(h=>h.periodos.map(([a,b])=>({'@type':'OpeningHoursSpecification',dayOfWeek:h.dias.map(d=>`https://schema.org/${dias[d]}`),opens:hora(a),closes:hora(b)}))),hasOfferCatalog:{'@type':'OfferCatalog',name:'Catálogo sob consulta',itemListElement:categorias.map(c=>({'@type':'OfferCatalog',name:c.nome,url:url(caminhoCategoria(c.slug))}))}}];
 if(p!=='/'&&p!=='/404')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:url('/')},{'@type':'ListItem',position:2,name:title.split(' | ')[0],item:url(p)}]});
 if(p==='/assistencia-tecnica'||p.startsWith('/assistencia-tecnica/')){const s=servicos.find(s=>p.endsWith('/'+s.slug));graph.push({'@type':'Service','@id':url(p)+'#servico',name:s?.titulo??'Assistência técnica de celulares',description:s?.resumo??loja.irpDescricao,provider:{'@id':id},areaServed:{'@type':'City',name:loja.endereco.cidade},url:url(p)});}
 if(p==='/perguntas-frequentes')graph.push({'@type':'FAQPage',mainEntity:perguntas.map(p=>({'@type':'Question',name:p.pergunta,acceptedAnswer:{'@type':'Answer',text:p.resposta}}))});
 if(produto)graph.push({'@type':'Product',name:produto.nome,description:produto.descricaoCurta,url:url(p),image:produto.imagens.map(i=>new URL(i.src,site).href)});
 return {'@context':'https://schema.org','@graph':graph};
}
