import { readFileSync,readdirSync,existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const exemplos=readdirSync('src/content/dicas').map(n=>JSON.parse(readFileSync(`src/content/dicas/${n}`,'utf8').split('---')[1]));
function arquivos(p){return readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?arquivos(`${p}/${e.name}`):[`${p}/${e.name}`]);}
const saida=arquivos('dist').filter(f=>/\.(html|js|json|xml|txt)$/.test(f));
for(const d of exemplos){
 const publico=!d.rascunho&&d.confirmado&&Boolean(d.publicadoEm&&d.revisadoEm&&d.revisor.trim());
 assert.equal(existsSync(`dist/dicas/${d.slug}/index.html`),publico);
 if(!publico)for(const f of saida)assert(!readFileSync(f,'utf8').includes(d.slug),`Rascunho vazou: ${f}`);
}
assert(existsSync('dist/dicas/index.html'));
console.log('Dicas: listagem disponível; três rascunhos ausentes de rotas, HTML e assets de produção.');
