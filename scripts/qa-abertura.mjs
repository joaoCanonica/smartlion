// QA da abertura "O Rugido de Luz" na home. Requer `pnpm preview` ativo.
// Uso: node scripts/qa-abertura.mjs [origem]  (padrão http://localhost:4321)
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const carregar = () => { for (const id of [process.env.PLAYWRIGHT_PATH, 'playwright', 'playwright-core', '/opt/node-tools/node_modules/playwright'].filter(Boolean)) { try { return require(id); } catch { /* tenta o próximo */ } } throw new Error('Playwright não encontrado.'); };
const { chromium } = carregar();
const BASE = (process.argv[2] ?? 'http://localhost:4321').replace(/\/$/, '');
const ok = [];
const b = await chromium.launch();
const nova = async (opcoes = {}, init) => {
  const c = await b.newContext({ viewport: { width: 390, height: 844 }, ...opcoes });
  if (init) await c.addInitScript(init);
  const p = await c.newPage();
  const erros = [];
  p.on('pageerror', e => erros.push(e.message));
  return { c, p, erros };
};
const existe = p => p.evaluate(() => !!document.querySelector('[data-rugido]'));

try {
  // 1. Primeira visita: camada e "Pular" desde o primeiro quadro; Tab chega ao "Pular"; Enter pula.
  {
    const { c, p, erros } = await nova();
    await p.goto(BASE + '/', { waitUntil: 'commit' });
    await p.waitForSelector('[data-rugido-pular]', { state: 'visible', timeout: 2000 });
    ok.push('primeira visita: camada preta e botão "Pular" visíveis desde o início');
    await p.keyboard.press('Tab');
    assert.equal(await p.evaluate(() => document.activeElement?.matches('[data-rugido-pular]')), true);
    assert.equal(await existe(p), true, 'Tab não deve pular');
    ok.push('Tab leva o foco ao "Pular" (sem pular sozinho)');
    assert.equal(await p.evaluate(() => document.activeElement?.textContent?.trim()), 'Pular abertura');
    ok.push('nome acessível: "Pular abertura"');
    await p.keyboard.press('Enter');
    await p.waitForFunction(() => !document.querySelector('[data-rugido]'), null, { timeout: 1000 });
    assert.equal(await p.evaluate(() => document.documentElement.classList.contains('rugido-ativo')), false);
    assert.equal(await p.evaluate(() => document.activeElement === document.body), true);
    ok.push('Enter no "Pular" encerra em < 1 s e o foco volta ao início do documento');
    // Segunda visita na mesma sessão: nada.
    await p.reload({ waitUntil: 'load' });
    assert.equal(await existe(p), false);
    ok.push('segunda visita na sessão: estado final direto (sem camada)');
    assert.deepEqual(erros, []);
    await c.close();
  }
  // 2. Outras formas de pular.
  for (const [nome, acao] of [
    ['Esc', p => p.keyboard.press('Escape')],
    ['clique', p => p.mouse.click(200, 300)],
    ['rolagem (roda do mouse)', p => p.mouse.wheel(0, 300)],
  ]) {
    const { c, p } = await nova();
    await p.goto(BASE + '/', { waitUntil: 'load' });
    assert.equal(await existe(p), true);
    await acao(p);
    await p.waitForFunction(() => !document.querySelector('[data-rugido]'), null, { timeout: 1000 });
    ok.push(`${nome} pula`);
    await c.close();
  }
  // 3. Termina sozinha em ≤ 2,8 s (+ folga de carregamento) e libera a página.
  {
    const { c, p } = await nova();
    await p.goto(BASE + '/', { waitUntil: 'commit' });
    await p.waitForSelector('[data-rugido]', { state: 'attached' });
    const t = await p.evaluate(() => new Promise(res => { const r = document.querySelector('[data-rugido]'); const t0 = +r.dataset.t0; const f = () => (r.isConnected ? requestAnimationFrame(f) : res(performance.now() - t0)); f(); }));
    assert(t <= 2950, `durou ${Math.round(t)} ms`);
    ok.push(`termina sozinha em ${Math.round(t)} ms`);
    await c.close();
  }
  // 4. Reduced-motion: nunca cria a camada.
  {
    const { c, p } = await nova({ reducedMotion: 'reduce' });
    await p.goto(BASE + '/', { waitUntil: 'load' });
    assert.equal(await existe(p), false);
    ok.push('prefers-reduced-motion: sem camada');
    await c.close();
  }
  // 5. Sem JS: nada é criado e o hero está visível.
  {
    const { c, p } = await nova({ javaScriptEnabled: false });
    await p.goto(BASE + '/', { waitUntil: 'load' });
    assert.equal(await existe(p), false);
    assert.equal(await p.isVisible('#titulo-home'), true);
    ok.push('sem JS: sem camada, hero visível');
    await c.close();
  }
  // 6. sessionStorage bloqueado: roda sem erro e termina.
  {
    const { c, p, erros } = await nova({}, () => { Object.defineProperty(window, 'sessionStorage', { get() { throw new Error('bloqueado'); } }); });
    await p.goto(BASE + '/', { waitUntil: 'load' });
    await p.waitForFunction(() => !document.querySelector('[data-rugido]'), null, { timeout: 4000 });
    assert.deepEqual(erros, []);
    ok.push('sessionStorage bloqueado: roda, termina e não gera erro');
    await c.close();
  }
  // 7. Outras páginas: nunca têm abertura.
  {
    const { c, p } = await nova();
    await p.goto(BASE + '/a-loja/', { waitUntil: 'load' });
    assert.equal(await existe(p), false);
    ok.push('páginas internas: sem abertura');
    await c.close();
  }
} finally {
  await b.close();
}
console.log(ok.map(x => 'ok · ' + x).join('\n'));
