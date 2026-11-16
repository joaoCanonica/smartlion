import {readFileSync,readdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
let links=0,imagens=0;
const paginas=walk('dist').filter(f=>f.endsWith('.html'));
for(const f of paginas){
 const s=readFileSync(f,'utf8');
 const ids=[...s.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`IDs duplicados: ${f}`);
 const voz=s.replace(/<blockquote\b[^>]*>[\s\S]*?<\/blockquote>/gi,'').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<[^>]*>/g,' ');
 for(const t of ['Assistência Autorizada Apple','oficial Apple','garantia Apple','preço garantido','as melhores taxas','número 1'])assert(!voz.toLowerCase().includes(t.toLowerCase()),`${t}: ${f}`);
 assert(!/\b(?:o melhor|a melhor)\b/i.test(voz),`Superlativo na voz da loja: ${f}`);
 for(const [img] of s.matchAll(/<img\b[^>]*>/g)){imagens++;assert(/\salt(?:="[^"]*")?(?=\s|\/?>)/.test(img),`Alt ausente: ${f}`);assert(/\swidth="\d+"/.test(img)&&/\sheight="\d+"/.test(img),`Dimensões ausentes: ${f}`);}
 for(const [,href] of s.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)){links++;const u=new URL(href.replaceAll('&amp;','&'));assert.equal(u.pathname,'/5549999268930');const texto=u.searchParams.get('text');assert(texto?.startsWith('Olá, Smart Lion!'));assert(!/undefined|null|PENDENTE/.test(texto));}
}
for(const f of walk('src').filter(f=>/\.(astro|ts)$/.test(f)&&f!=='src/config/whatsapp.ts'))assert(!readFileSync(f,'utf8').includes('wa.me'),`Link fora da função central: ${f}`);
const luminancia=hex=>{const rgb=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722};
const contraste=(a,b)=>{const x=luminancia(a),y=luminancia(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const pares=[['texto no Preto Leão','f5f6f7','0b0b0c',4.5],['aço no Preto Leão','9a9ea6','0b0b0c',4.5],['aço no Grafite','9a9ea6','17181b',4.5],['âmbar no Preto Leão','e3a857','0b0b0c',4.5],['texto no Branco Gelo','0b0b0c','f5f6f7',4.5],['aço escuro no Branco Gelo','55595f','f5f6f7',4.5],['âmbar escuro no Branco Gelo','8a5b17','f5f6f7',4.5],['WhatsApp','082b16','25d366',4.5],['foco âmbar no Grafite','e3a857','17181b',3]];
for(const [nome,a,b,min] of pares){const razao=contraste(a,b);assert(razao>=min,`Contraste: ${nome}`);console.log(`${nome}: ${razao.toFixed(2)}:1`);}
console.log(`${paginas.length} páginas; ${links} links WhatsApp; ${imagens} imagens. IDs, copy da loja e função central: OK. Não substitui axe ou auditoria visual.`);
