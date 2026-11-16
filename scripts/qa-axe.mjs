import {readdirSync,mkdirSync,writeFileSync,readFileSync} from 'node:fs';
import {createRequire} from 'node:module';
import {resolve} from 'node:path';
// Executar com `pnpm preview` ativo. Usa o Playwright já instalado no sistema (ou PLAYWRIGHT_PATH)
// e o axe-core do projeto. Navegador: CHROME_PATH, se definido; senão o Chromium do Playwright.
const require=createRequire(import.meta.url);
const carregarPlaywright=()=>{for(const id of [process.env.PLAYWRIGHT_PATH,'playwright','playwright-core','/opt/node-tools/node_modules/playwright'].filter(Boolean)){try{return require(id);}catch{}}throw new Error('Playwright não encontrado. Instale com `pnpm dlx playwright install chromium` ou defina PLAYWRIGHT_PATH.');};
const {chromium}=carregarPlaywright();
const axeFonte=readFileSync(require.resolve('axe-core/axe.min.js'),'utf8');
const base=new URL(process.argv[2]??'http://localhost:4321');
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const rotas=walk('dist').filter(f=>f.endsWith('.html')).map(f=>f.slice(4).replace(/\/index.html$/,'/').replace(/index.html$/,''));
const pasta=resolve('qa/axe');mkdirSync(pasta,{recursive:true});
const navegador=await chromium.launch(process.env.CHROME_PATH?{executablePath:process.env.CHROME_PATH}:{});
const linhas=['| Rota | Largura | Violações | Regras |','|---|---:|---:|---|'];let falha=false;
for(const largura of [390,1440]){
 // bypassCSP: só para injetar o axe-core; a CSP do site (P8) bloquearia o script de teste.
 const contexto=await navegador.newContext({viewport:{width:largura,height:900},bypassCSP:true});
 for(const [i,rota] of rotas.entries()){
  const pagina=await contexto.newPage();
  await pagina.goto(new URL(rota,base).href,{waitUntil:'networkidle'});
  await pagina.addScriptTag({content:axeFonte});
  const r=await pagina.evaluate(()=>globalThis.axe.run(document,{runOnly:{type:'tag',values:['wcag2a','wcag2aa','wcag21a','wcag21aa','wcag22aa','best-practice']}}));
  writeFileSync(resolve(pasta,`${largura}-${i}.json`),JSON.stringify({rota,largura,violations:r.violations},null,1));
  const nos=r.violations.reduce((s,v)=>s+v.nodes.length,0);
  linhas.push(`| ${rota} | ${largura} | ${nos} | ${r.violations.map(v=>`${v.id} (${v.impact}, ${v.nodes.length})`).join(', ')||'—'} |`);
  if(r.violations.length)falha=true;
  await pagina.close();
 }
 await contexto.close();
}
await navegador.close();
writeFileSync(resolve(pasta,'RESULTADOS.md'),linhas.join('\n')+'\n');
console.log(linhas.join('\n'));
if(falha)process.exitCode=1;
