import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';
import { gzipSync } from 'node:zlib';
import assert from 'node:assert/strict';
const raiz=resolve('dist');
async function arquivos(pasta){const todos=await readdir(pasta,{withFileTypes:true});return (await Promise.all(todos.map(e=>e.isDirectory()?arquivos(resolve(pasta,e.name)):[resolve(pasta,e.name)]))).flat()}
const saida=await arquivos(raiz), html=saida.filter(f=>f.endsWith('.html'));
const indice=JSON.parse(await readFile(resolve(raiz,'busca.json'),'utf8'));
const produtos=await Promise.all((await readdir('src/content/produtos')).filter(n=>n.endsWith('.json')).map(async n=>JSON.parse(await readFile(`src/content/produtos/${n}`,'utf8'))));
for(const p of produtos){
 const publicado=p.rascunho===false&&p.confirmado===true&&Boolean(p.confirmadoEm);
 assert.equal(indice.some(i=>i.slug===p.slug),publicado,`Índice incorreto: ${p.slug}`);
 assert.equal(existsSync(resolve(raiz,`produto/${p.slug}/index.html`)),publicado,`Rota incorreta: ${p.slug}`);
 if(!publicado)for(const f of saida.filter(x=>/\.(html|js|json)$/.test(x)))assert(!(await readFile(f,'utf8')).includes(p.slug),`Rascunho vazou: ${relative(raiz,f)}`);
}
const tabela=[];
for(const f of html){
 const fonte=await readFile(f,'utf8');
 assert.equal((fonte.match(/<h1(?:\s|>)/g)||[]).length,1,`H1: ${f}`);
 assert(!fonte.includes('Desenvolvimento · Fase'),`Aviso DEV em produção: ${f}`);
 for(const proibido of ['Assistência Autorizada Apple','oficial Apple','garantia Apple','preço garantido','as melhores taxas','número 1'])assert(!fonte.toLowerCase().includes(proibido.toLowerCase()),`Texto proibido: ${f}`);
 for(const [,href] of fonte.matchAll(/href="([^"]+)"/g)){
  const dec=href.replaceAll('&amp;','&');
  if(dec.startsWith('https://wa.me/')){
   const u=new URL(dec);assert.equal(u.pathname,'/5549999268930');assert(u.searchParams.get('text'));assert.equal([...u.searchParams.keys()].length,1);
  }
  if(dec.startsWith('/')&&!dec.startsWith('//')){
   const caminho=dec.split(/[?#]/)[0];
   assert(existsSync(resolve(raiz,`.${caminho}`))||existsSync(resolve(raiz,`.${caminho}/index.html`)),`Link interno sem destino: ${dec} em ${f}`);
  }
 }
 const vistos=new Set();let bytes=0;
 async function lerJS(caminho){
  if(vistos.has(caminho))return;vistos.add(caminho);
  const s=await readFile(caminho,'utf8');bytes+=gzipSync(s).length;
  for(const [,dep] of s.matchAll(/(?:from\s*|import\s*(?:\(\s*)?)["']([^"']+\.js)["']/g))await lerJS(resolve(dep.startsWith('/')?raiz:dirname(caminho),dep.startsWith('/')?`.${dep}`:dep));
 }
 for(const [,attrs,conteudo] of fonte.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)){
  if(/type=["']application\/ld\+json["']/.test(attrs))continue;
  const src=attrs.match(/src="([^"]+)"/)?.[1];
  if(src?.startsWith('/'))await lerJS(resolve(raiz,`.${src}`));
  else if(conteudo.trim()){
   bytes+=gzipSync(conteudo).length;
   for(const [,dep] of conteudo.matchAll(/(?:from\s*|import\s*(?:\(\s*)?)["']([^"']+\.js)["']/g))await lerJS(resolve(raiz,`.${dep}`));
  }
 }
 assert(bytes<=30_000,`Orçamento de JS excedido: ${f}`);
 tabela.push({rota:relative(raiz,f),jsGzipBytes:bytes,htmlBytes:(await stat(f)).size});
}
console.table(tabela);
console.log(`${html.length} páginas verificadas. ${indice.length} produtos publicados; ${produtos.length-indice.length} excluídos. Links, H1, copy e orçamento OK.`);
