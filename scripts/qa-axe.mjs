import {readdirSync,mkdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const base=new URL(process.argv[2]??'http://localhost:4321');
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const rotas=walk('dist').filter(f=>f.endsWith('.html')).map(f=>f.slice(4).replace(/\/index.html$/,'/'));
mkdirSync('qa/axe',{recursive:true});let falha=false;
for(const [i,rota] of rotas.entries()){
 const r=spawnSync('pnpm',['dlx','@axe-core/cli',new URL(rota,base).href,'--exit','--save',`${i}.json`,'--dir','qa/axe'],{stdio:'inherit'});
 if(r.status!==0)falha=true;
}
if(falha)process.exitCode=1;
