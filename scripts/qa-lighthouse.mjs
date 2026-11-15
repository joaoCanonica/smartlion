import {readFileSync,readdirSync,mkdirSync,writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
// Executar localmente com Chrome instalado e pnpm preview ativo. Não inicia servidor.
const base=new URL(process.argv[2]??'http://localhost:4321');
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const rotas=walk('dist').filter(f=>f.endsWith('.html')).map(f=>f.slice(4).replace(/\/index.html$/,'/'));
const pasta=resolve('qa/lighthouse');mkdirSync(pasta,{recursive:true});
const linhas=['| Rota | Performance | Acessibilidade | Boas práticas | SEO | LCP ms | CLS |','|---|---:|---:|---:|---:|---:|---:|'];
let falha=false;
for(const [i,rota] of rotas.entries()){
 const arquivo=resolve(pasta,`${i}.json`);const r=spawnSync('pnpm',['dlx','lighthouse',new URL(rota,base).href,'--quiet','--chrome-flags=--headless','--screenEmulation.mobile=true','--screenEmulation.width=390','--screenEmulation.height=844','--screenEmulation.deviceScaleFactor=2','--output=json',`--output-path=${arquivo}`],{stdio:'inherit'});
 if(r.status!==0){falha=true;linhas.push(`| ${rota} | ERRO | — | — | — | — | — |`);continue;}
 const lhr=JSON.parse(readFileSync(arquivo,'utf8'));if(lhr.runtimeError){falha=true;linhas.push(`| ${rota} | ERRO de navegação | — | — | — | — | — |`);continue;}
 const notas=['performance','accessibility','best-practices','seo'].map(k=>lhr.categories[k].score===null?null:Math.round(lhr.categories[k].score*100));
 const lcp=lhr.audits['largest-contentful-paint'].numericValue,cls=lhr.audits['cumulative-layout-shift'].numericValue;
 linhas.push(`| ${rota} | ${notas.map(n=>n??'N/D').join(' | ')} | ${Math.round(lcp)} | ${cls.toFixed(4)} |`);
 if(notas.some((n,i)=>n===null||n<(i===1?100:95))||lcp>=2000||cls>=.05)falha=true;
}
writeFileSync(resolve(pasta,'RESULTADOS.md'),linhas.join('\n')+'\n');
console.log('Tabela salva em qa/lighthouse/RESULTADOS.md. 404 e noindex são exceções esperadas de SEO, sem ocultar notas. INP não é inferido do Lighthouse.');
if(falha)process.exitCode=1;
