import { readFileSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync('dist/index.html','utf8');
const ordem=['id="abertura"','id="manifesto"','id="ambiente"','id="atividades"','id="vitrine"','id="depoimentos"','id="historia"','id="instagram"','id="visite-nos"','id="contato"'];
let anterior=-1;
for(const item of ordem){const pos=html.indexOf(item);assert(pos>anterior,`Seção ausente ou fora de ordem: ${item}`);anterior=pos;}
assert(!html.includes('<iframe'));
assert.equal((html.match(/fetchpriority="high"/g)||[]).length,1);
assert.equal((html.match(/<dialog/g)||[]).length,0);
assert.equal((html.match(/data-texto-avaliacao/g)||[]).length,3);
for(const img of html.matchAll(/<img\b([^>]+)>/g)){
 assert(/width="\d+"/.test(img[1])&&/height="\d+"/.test(img[1]),'Imagem sem dimensões');
 assert(/\balt(?:=|\s|$)/.test(img[1]));
}
assert(!html.includes('id="parcelamento"'));
assert(readFileSync('dist/produtos/index.html','utf8').includes('sujeito a análise de crédito'));
assert(!html.includes('PENDENTE'));
assert(!html.includes('rascunho-'));
console.log('Ordem dos 10 blocos institucionais, 3 citações, sem modal comercial, dimensões de imagens, prioridade única e mapa sem iframe inicial: OK.');
const avifs=[...html.matchAll(/srcset="([^"]+)"/g)].flatMap(m=>m[1].split(',').map(s=>s.trim().split(' ')[0])).filter(s=>s.endsWith('.avif'));
const tamanhos=[...new Set(avifs)].map(src=>({src,bytes:statSync('dist'+src).size}));
console.log(JSON.stringify({avifVariantes:tamanhos.length,menorBytes:Math.min(...tamanhos.map(i=>i.bytes)),maiorBytes:Math.max(...tamanhos.map(i=>i.bytes))}));
