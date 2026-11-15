// Renderiza o leão 3D (a mesma cena de src/tres/leao.ts, em modo pôster) e salva o pôster/fallback
// do hero em src/assets/hero/: leao-3d-{480,1200}.{avif,webp} (fundo transparente).
//
// Uso: node scripts/render-leao.mjs
// Sobe o Vite que acompanha o Astro com uma página virtual, abre no Chromium do Playwright
// (WebGL por software se não houver GPU), lê o canvas e converte com sharp.
import { createRequire } from 'node:module';
import { mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const require = createRequire(import.meta.url);
const { createServer } = await import(require.resolve('vite', { paths: [require.resolve('astro')] }));
const carregarPlaywright = () => { for (const id of [process.env.PLAYWRIGHT_PATH, 'playwright', 'playwright-core', '/opt/node-tools/node_modules/playwright'].filter(Boolean)) { try { return require(id); } catch { /* próximo */ } } throw new Error('Playwright não encontrado.'); };
const { chromium } = carregarPlaywright();

const LADO = 1200; // px do quadro renderizado (quadrado, como o espaço do leão no hero)
const pagina = `<!doctype html><html><head><meta charset="utf-8"><style>html,body{margin:0;background:transparent}canvas{display:block;width:${LADO}px;height:${LADO}px}</style></head>
<body><canvas id="c"></canvas><script type="module">
import { montarLeao } from '/src/tres/leao.ts';
const c = document.getElementById('c');
montarLeao(c, { poster: true, pixelRatioMax: 1, aoPrimeiroQuadro: () => { window.__pronto = true; } });
</script></body></html>`;

const servidor = await createServer({
  root: raiz,
  logLevel: 'error',
  server: { port: 0, strictPort: false },
  plugins: [{ name: 'pagina-render-leao', configureServer(s) { s.middlewares.use('/__render-leao', (_req, res) => { res.setHeader('Content-Type', 'text/html'); res.end(pagina); }); } }],
});
await servidor.listen();
const endereco = servidor.resolvedUrls.local[0].replace(/\/$/, '');
const navegador = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
try {
  const p = await navegador.newPage({ viewport: { width: LADO, height: LADO }, deviceScaleFactor: 1 });
  const erros = [];
  p.on('pageerror', e => erros.push(e.message));
  p.on('console', m => { if (m.type() === 'error') erros.push(m.text()); });
  await p.goto(`${endereco}/__render-leao`);
  await p.waitForFunction(() => window.__pronto === true, null, { timeout: 120_000 });
  const info = await p.evaluate(() => { const gl = document.getElementById('c').getContext('webgl2'); const ext = gl?.getExtension('WEBGL_debug_renderer_info'); return ext ? gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) : 'desconhecido'; });
  const dataUrl = await p.evaluate(() => document.getElementById('c').toDataURL('image/png'));
  if (erros.length) throw new Error('Erros na página: ' + erros.join(' | '));
  const png = Buffer.from(dataUrl.split(',')[1], 'base64');
  const pasta = join(raiz, 'src/assets/hero');
  mkdirSync(pasta, { recursive: true });
  // Sem recorte: o pôster precisa ter exatamente o enquadramento da câmera da cena 3D,
  // para a troca pôster → canvas não dar salto.
  const quadrado = png;
  const saidas = [];
  for (const largura of [480, 1200]) {
    const base = sharp(quadrado).resize(largura, largura);
    const avif = join(pasta, `leao-3d-${largura}.avif`), webp = join(pasta, `leao-3d-${largura}.webp`);
    // 480 px é o do celular (LCP): qualidade menor, peso menor. 1200 px é o do desktop.
    await base.clone().avif({ quality: largura <= 640 ? 30 : 50, effort: 7 }).toFile(avif);
    await base.clone().webp({ quality: 78, alphaQuality: 90 }).toFile(webp);
    saidas.push(avif, webp);
  }
  const tamanhos = saidas.map(f => `${f.replace(raiz + '/', '')} ${(statSync(f).size / 1024).toFixed(1)} KB`);
  console.log(`Renderizado com: ${info}`);
  console.log(tamanhos.join('\n'));
} finally {
  await navegador.close();
  await servidor.close();
}
