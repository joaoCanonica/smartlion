import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

if (!process.argv[2]) throw new Error('Informe a origem publicada.');
const base = new URL(process.argv[2]);
const {redirects} = JSON.parse(readFileSync('vercel.json', 'utf8'));
for (const rule of redirects) {
  for (const suffix of ['', '/']) {
    const origem = new URL(rule.source + suffix + '?q=iphone&cor=azul', base);
    const resposta = await fetch(origem, {redirect: 'manual'});
    assert.equal(resposta.status, 301, origem.href);
    const location = resposta.headers.get('location');
    assert(location, 'Location ausente');
    const destino = new URL(location, origem);
    assert.equal(destino.origin, base.origin);
    assert.equal(destino.pathname.replace(/\/$/, ''), rule.destination);
    assert.equal(destino.search, origem.search);
    const pagina = await fetch(destino, {redirect: 'manual'});
    assert.equal(pagina.status, 200, destino.href);
  }
  console.log(rule.source, '→', rule.destination);
}
