// Teste de teclado do cabeçalho (menu do celular e submenu do desktop). Requer `pnpm preview` ativo.
// Uso: node scripts/qa-teclado-menu.mjs [origem]  (padrão http://localhost:4321)
import {createRequire} from 'node:module';const require=createRequire(import.meta.url);
const carregar=()=>{for(const id of [process.env.PLAYWRIGHT_PATH,'playwright','playwright-core','/opt/node-tools/node_modules/playwright'].filter(Boolean)){try{return require(id);}catch{}}throw new Error('Playwright não encontrado.');};
const BASE=(process.argv[2]??'http://localhost:4321').replace(/\/$/,'');
const {chromium}=carregar();const assert=require('node:assert/strict');
(async()=>{const b=await chromium.launch();const r=[];
const p=await b.newPage({viewport:{width:390,height:844}});await p.goto(BASE+'/a-loja/',{waitUntil:'networkidle'});
const ativo=()=>p.evaluate(()=>{const a=document.activeElement;return (a.getAttribute('aria-label')||a.textContent).trim().slice(0,40)});
assert.equal(await p.getAttribute('[data-menu-abrir]','aria-expanded'),'false');
assert(await p.isHidden('.menu-sem-js'));
await p.focus('[data-menu-abrir]');await p.keyboard.press('Enter');
assert.equal(await p.getAttribute('[data-menu-abrir]','aria-expanded'),'true');r.push('Enter abre; aria-expanded=true');
assert.equal(await ativo(),'Fechar');r.push('foco vai para "Fechar"');
assert.equal(await p.evaluate(()=>getComputedStyle(document.documentElement).overflow),'hidden');r.push('rolagem do fundo travada');
assert(await p.evaluate(()=>document.querySelector('main').inert&&document.querySelector('#contato').inert));r.push('main e rodapé inertes');
assert(await p.evaluate(()=>{const el=document.elementFromPoint(innerWidth/2,innerHeight-60);return document.querySelector('[data-menu-painel]').contains(el)}),'algo cobre o painel do menu');r.push('painel por cima de tudo (inclusive o aviso de consentimento)');
assert.equal(await p.getAttribute('.nav-desktop a[aria-current], .menu-movel-nav a[aria-current]','href'),'/a-loja');r.push('página atual marcada (aria-current)');
const n=await p.evaluate(()=>[...document.querySelectorAll('[data-menu-painel] a[href],[data-menu-painel] button')].filter(e=>e.offsetParent).length);
const vistos=new Set();for(let i=0;i<n+3;i++){await p.keyboard.press('Tab');const inside=await p.evaluate(()=>document.querySelector('[data-menu-painel]').contains(document.activeElement));assert(inside,'foco escapou');vistos.add(await ativo());}
r.push(`Tab ${n+3}x: foco nunca sai do painel (${vistos.size} alvos)`);
await p.focus('[data-menu-fechar]');await p.keyboard.press('Shift+Tab');assert(await p.evaluate(()=>document.querySelector('[data-menu-painel]').contains(document.activeElement)));r.push('Shift+Tab no primeiro volta ao último');
await p.keyboard.press('Escape');
assert.equal(await p.getAttribute('[data-menu-abrir]','aria-expanded'),'false');assert(await p.isHidden('[data-menu-painel]'));
assert.equal(await p.evaluate(()=>document.activeElement.matches('[data-menu-abrir]')),true);r.push('Esc fecha e devolve o foco ao botão Menu');
assert.notEqual(await p.evaluate(()=>getComputedStyle(document.documentElement).overflow),'hidden');assert(!(await p.evaluate(()=>document.querySelector('main').inert)));r.push('rolagem e conteúdo liberados');
await p.keyboard.press('Space');assert(await p.isVisible('[data-menu-painel]'));await p.click('[data-menu-fechar]');assert(await p.isHidden('[data-menu-painel]'));r.push('Espaço abre; clique em Fechar fecha');
// desktop: submenu
const d=await b.newPage({viewport:{width:1440,height:900}});await d.goto(BASE+'/',{waitUntil:'networkidle'});
assert(await d.isHidden('[data-menu-abrir]'));
let achou=false;for(let i=0;i<12;i++){await d.keyboard.press('Tab');if(await d.evaluate(()=>document.activeElement.tagName==='SUMMARY')){achou=true;break;}}assert(achou);
await d.keyboard.press('Enter');assert(await d.evaluate(()=>document.querySelector('[data-submenu]').open));
await d.keyboard.press('Tab');assert.equal(await d.evaluate(()=>document.activeElement.getAttribute('href')),'/produtos');
await d.keyboard.press('Escape');assert(!(await d.evaluate(()=>document.querySelector('[data-submenu]').open)));assert(await d.evaluate(()=>document.activeElement.tagName==='SUMMARY'));
r.push('Desktop: Tab chega ao "O que fazemos", Enter abre, Tab entra no submenu, Esc fecha e devolve o foco');
// sem JS
const c=await b.newContext({javaScriptEnabled:false,viewport:{width:390,height:844}});const nj=await c.newPage();await nj.goto(BASE+'/',{waitUntil:'load'});
assert(await nj.isVisible('.menu-sem-js'));assert(await nj.isHidden('[data-menu-abrir]'));r.push('Sem JS: link "Menu" visível leva às páginas do rodapé');
console.log(r.map(x=>'ok · '+x).join('\n'));await b.close();})().catch(e=>{console.error('FALHA',e.message);process.exit(1)});
