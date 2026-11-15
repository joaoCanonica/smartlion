import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const paginas=['produtos','produtos/iphone','produtos/ipad-mac-watch','produtos/xiaomi','produtos/casa-e-games','produtos/acessorios','produtos/perfumaria','seminovos'];
for(const rota of paginas){
 const html=readFileSync(`dist/${rota}/index.html`,'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,rota);
 assert(html.includes('id="busca"'),rota);
 assert(html.includes('Disponibilidade e condições pelo WhatsApp'),rota);
 assert(!html.includes('data-card-produto='),`Rascunho publicado: ${rota}`);
 assert(!html.includes('href="/catalogo'),`Link antigo: ${rota}`);
 assert(!html.includes('PENDENTE'),`Aviso DEV publicado: ${rota}`);
}
assert(readFileSync('dist/produtos/index.html','utf8').includes('sujeito a análise de crédito'));
assert(readFileSync('dist/seminovos/index.html','utf8').includes('6 meses de garantia'));
assert(existsSync('dist/catalogo/index.html'),'Preservar rota antiga até HTTP 301');
const sitemap=readFileSync('dist/sitemap.xml','utf8');
assert(!sitemap.includes('/catalogo'));
assert(!sitemap.includes('/produtos/seminovos'));
assert(sitemap.includes('/seminovos'));
assert.deepEqual(JSON.parse(readFileSync('dist/busca.json','utf8')),[],'Índice de produção sem rascunhos');
console.log('Vitrine: 8 rotas novas, busca, contatos, garantias e parcelamento presentes; rascunhos ausentes e rotas antigas preservadas.');
