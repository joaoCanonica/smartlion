import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const dados=JSON.parse(readFileSync('src/data/avaliacoes.json','utf8'));
const pagina=readFileSync('dist/avaliacoes/index.html','utf8');
const home=readFileSync('dist/index.html','utf8');
const escapar=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
assert.equal((pagina.match(/data-avaliacao=/g)||[]).length,dados.avaliacoes.length);
const idsHome=[...home.matchAll(/data-avaliacao="([^"]+)"/g)].map(m=>m[1]);
assert(idsHome.length>=3&&idsHome.length<=6);
assert.equal(new Set(idsHome).size,idsHome.length);
for(const id of idsHome){const a=dados.avaliacoes.find(a=>a.id===id);assert(a?.destaqueHome,`Destaque não confirmado: ${id}`);assert(home.includes(`>${escapar(a.texto)}</p>`),`Citação alterada: ${id}`);}
for(const a of dados.avaliacoes){
 assert(pagina.includes(`>${escapar(a.texto)}</p>`),`Texto modificado: ${a.id}`);
 assert(pagina.includes(`>${escapar(a.autorExibicao)}</strong>`),`Autor: ${a.id}`);

}
for(const html of [pagina,home]){
 assert(!html.includes('AggregateRating')&&!html.includes('"@type":"Review"'));
 assert(!/<iframe/i.test(html));
 assert(!html.includes('negativaParaResponder'));
}
assert.equal((pagina.match(/name="nota-google"/g)||[]).length,5);
assert(pagina.includes('1 estrela: 2'));
console.log(`${dados.avaliacoes.length} textos literais; ${dados.avaliacoes.filter(a=>a.destaqueHome).length} destaques preservados; ${idsHome.length} citações na home; 5 notas; sem iframe ou schema de avaliações.`);
