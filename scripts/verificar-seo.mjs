import {readFileSync,readdirSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const html=walk('dist').filter(f=>f.endsWith('.html'));
const canonicas=new Set();
const {redirects}=JSON.parse(readFileSync('vercel.json','utf8'));
const regras=readFileSync('dist/_redirects','utf8').trim().split('\n');
for(const {source,destination,statusCode} of redirects){
 assert.equal(statusCode,301);
 assert(!redirects.some(rule=>rule.source===destination),'Cadeia de redirecionamento');
 assert(existsSync('dist'+destination+'/index.html'),destination);
 for(const suffix of ['', '/'])assert(regras.includes(source+suffix+' '+destination+' 301'));
}
for(const f of html){
 const s=readFileSync(f,'utf8');
 const canonical=s.match(/rel="canonical" href="([^"]+)"/)?.[1];assert(canonical,f);const path=f.slice(4).replace(/\/index.html$/,'').replace(/^$/, '/').replace(/^\/404.html$/, '/404');
 const dest=redirects.find(rule=>rule.source===path)?.destination;
 assert.equal(new URL(canonical).pathname,dest??path,f);
 if(!dest){assert(!canonicas.has(canonical),f);canonicas.add(canonical);}
 assert(s.includes('property="og:image"'),f);assert(s.includes('name="description"'),f);
 const graph=JSON.parse(s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]??'null');assert(graph?.['@graph']);
 assert(!JSON.stringify(graph).match(/AggregateRating|"Review"|"offers"/));
 assert(!s.includes('<iframe'),`Mapa carregado no HTML: ${f}`);
 const image=s.match(/property="og:image" content="([^"]+)"/)?.[1];assert(image&&existsSync('dist'+new URL(image).pathname));
 if(process.env.PUBLIC_INDEXABLE!=='true')assert(s.includes('noindex,nofollow'),f);
}
const sitemap=readFileSync('dist/sitemap.xml','utf8');
assert(!sitemap.includes('rascunho'));assert(!sitemap.includes('/404'));
for(const [,url] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g))assert(canonicas.has(url));
assert(readFileSync('dist/llms.txt','utf8').includes('13h30'));
console.log(`SEO: ${html.length} páginas com canônica, Open Graph, JSON-LD válido e nenhum iframe inicial. Sitemap sem rascunhos; llms.txt com almoço.`);
