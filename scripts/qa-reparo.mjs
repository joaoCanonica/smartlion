// QA do reparo 3D (home e /assistencia-tecnica): teclado, leitor de tela, sem JS, WhatsApp e "Ver em 3D".
// Requer `pnpm preview` ativo. Uso: node scripts/qa-reparo.mjs [origem]
import { createRequire } from 'node:module';
import assert from 'node:assert/strict';
const require = createRequire(import.meta.url);
const carregar = () => { for (const id of [process.env.PLAYWRIGHT_PATH, 'playwright', 'playwright-core', '/opt/node-tools/node_modules/playwright'].filter(Boolean)) { try { return require(id); } catch { /* próximo */ } } throw new Error('Playwright não encontrado.'); };
const { chromium } = carregar();
const BASE = (process.argv[2] ?? 'http://localhost:4321').replace(/\/$/, '');
const ok = [];
const b = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const contexto = async (o = {}) => { const c = await b.newContext({ viewport: { width: 1440, height: 900 }, ...o }); await c.addInitScript(() => { try { sessionStorage.setItem('smartlion-rugido-v1', '1'); sessionStorage.setItem('smartlion-mapa-v1', 'recusado'); } catch { /* sem JS */ } }); return c; };
try {
  // 1. Teclado (home): Tab entra na aba escolhida; setas movem o foco SEM escolher; Enter escolhe.
  {
    const c = await contexto(); const p = await c.newPage(); const erros = [];
    p.on('pageerror', e => erros.push(e.message));
    await p.goto(BASE + '/', { waitUntil: 'load' });
    await p.locator('#reparo').scrollIntoViewIfNeeded();
    await p.focus('#reparo-home-aba-tela');
    const estado = () => p.evaluate(() => ({ foco: document.activeElement.id, sel: document.querySelector('#reparo-home [aria-selected="true"]').id, painel: document.querySelector('#reparo-home [data-ativo]')?.id, camada: document.querySelector('#reparo-home [data-visual]').dataset.camada }));
    await p.keyboard.press('ArrowRight');
    let e = await estado();
    assert.equal(e.foco, 'reparo-home-aba-bateria'); assert.equal(e.sel, 'reparo-home-aba-tela');
    ok.push('→ move o foco para "Bateria" sem trocar a escolha');
    await p.keyboard.press('Enter');
    e = await estado();
    assert.equal(e.sel, 'reparo-home-aba-bateria'); assert.equal(e.painel, 'reparo-home-painel-bateria'); assert.equal(e.camada, 'bateria');
    ok.push('Enter escolhe "Bateria": aba selecionada, painel e camada trocados');
    await p.keyboard.press('End'); await p.keyboard.press('Space');
    e = await estado(); assert.equal(e.sel, 'reparo-home-aba-placa');
    ok.push('End vai para "Placa" e Espaço escolhe');
    await p.keyboard.press('ArrowRight'); e = await estado(); assert.equal(e.foco, 'reparo-home-aba-tela');
    ok.push('→ na última aba volta para a primeira (circular)');
    await p.keyboard.press('Home'); await p.keyboard.press('ArrowLeft'); e = await estado(); assert.equal(e.foco, 'reparo-home-aba-placa');
    ok.push('Home e ← também funcionam');
    // Tab sai das abas e entra no painel (tabindex=0) e depois no "Pedir orçamento".
    await p.keyboard.press('Enter'); await p.keyboard.press('Tab');
    assert.equal(await p.evaluate(() => document.activeElement.id), 'reparo-home-painel-placa');
    await p.keyboard.press('Tab');
    const href = await p.evaluate(() => document.activeElement.getAttribute('href'));
    assert.match(decodeURIComponent(href), /reparo de placa/);
    ok.push('Tab: abas → painel → "Pedir orçamento" (WhatsApp com a mensagem do serviço)');
    assert.deepEqual(erros, []);
    // 2. Leitor de tela: árvore de acessibilidade das abas e do painel.
    const arvore = await p.locator('#reparo-home .reparo3d-controle').ariaSnapshot();
    for (const t of ['tablist "Escolha a parte do aparelho"', 'tab "Tela"', 'tab "Bateria"', 'tab "Tampa traseira"', 'tab "Placa" [selected]', 'tabpanel "Placa"', 'heading "Reparo de placa de celular"', 'link "Pedir orçamento"']) assert(arvore.includes(t), `árvore sem: ${t}\n${arvore}`);
    ok.push('Leitor de tela: tablist com 4 tabs, a escolhida marcada [selected], tabpanel nomeado pela aba, título e link');
    await c.close();
  }
  // 3. Sem JS: abas ocultas e os 4 serviços legíveis, um embaixo do outro.
  {
    const c = await b.newContext({ viewport: { width: 1440, height: 900 }, javaScriptEnabled: false }); const p = await c.newPage();
    await p.goto(BASE + '/', { waitUntil: 'load' });
    assert.equal(await p.isHidden('#reparo-home [data-abas]'), true);
    // Pelo estilo calculado (não pela caixa): a seção usa content-visibility:auto e, fora da tela,
    // o navegador pode adiar o layout; o que importa aqui é nenhum painel estar oculto sem JS.
    const paineis = await p.evaluate(() => [...document.querySelectorAll('#reparo-home [role="tabpanel"]')].map(e => [e.id, getComputedStyle(e).display, e.hidden]));
    assert.equal(paineis.filter(([, d, h]) => d !== 'none' && !h).length, 4, JSON.stringify(paineis));
    ok.push('Sem JS: abas ocultas e os 4 painéis visíveis');
    await c.close();
  }
  // 4. Celular: ilustração por padrão; "Ver em 3D" carrega o 3D sob demanda.
  {
    const c = await contexto({ viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }); const p = await c.newPage();
    await p.goto(BASE + '/', { waitUntil: 'load' });
    await p.locator('#reparo').scrollIntoViewIfNeeded(); await p.waitForTimeout(800);
    const visual = '#reparo-home [data-visual]';
    assert.equal(await p.getAttribute(visual, 'data-modo'), 'svg');
    const ilhaAntes = await p.evaluate(() => performance.getEntriesByType('resource').some(r => /\/reparo\.[\w-]+\.js/.test(r.name)));
    assert.equal(ilhaAntes, false, 'a ilha não deve carregar sozinha no celular');
    ok.push('Celular: ilustração em camadas, sem baixar a ilha 3D');
    await p.click('#reparo-home [data-ver-3d]');
    await p.waitForFunction(v => document.querySelector(v).dataset.modo === '3d', visual, { timeout: 60000 });
    ok.push('Celular: "Ver em 3D" carrega e mostra o 3D');
    await c.close();
  }
  // 5. /assistencia-tecnica: o componente no topo, com ids próprios.
  {
    const c = await contexto(); const p = await c.newPage();
    await p.goto(BASE + '/assistencia-tecnica/', { waitUntil: 'load' });
    assert.equal(await p.locator('#reparo-pagina [role="tab"]').count(), 4);
    const ordem = await p.evaluate(() => { const r = document.querySelector('#reparo-pagina'); const h = [...document.querySelectorAll('main h2')].find(x => /Entenda o reparo/.test(x.textContent)); return !!(r.compareDocumentPosition(h) & Node.DOCUMENT_POSITION_FOLLOWING); });
    assert(ordem, 'o reparo deve vir antes de "Entenda o reparo"');
    ok.push('/assistencia-tecnica: 4 abas, no topo (antes de "Entenda o reparo")');
    await c.close();
  }
} finally { await b.close(); }
console.log(ok.map(x => 'ok · ' + x).join('\n'));
