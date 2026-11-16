import { createHash } from 'node:crypto';
import { defineConfig } from 'astro/config';
import { scriptAberturaInicio } from './src/lib/abertura-inicio.mjs';
import { scriptMarcarJs } from './src/lib/marcar-js.mjs';

/**
 * Origem pública do site (canonical, sitemap.xml, robots.txt, og:image, JSON-LD).
 *
 * - `astro build`: SITE_URL é obrigatório. Sem ele o build falha, para nunca
 *   publicar canonical ou sitemap apontando para um domínio errado.
 *   Exceção: deploy de prévia da Vercel (VERCEL_ENV=preview) sem SITE_URL usa a
 *   URL da própria prévia (VERCEL_URL), que é noindex de qualquer forma.
 * - `astro dev`, `astro check` e `astro preview`: sem SITE_URL, usa localhost.
 */
const ehBuild = process.argv.includes('build');

function resolverSite() {
  const bruto = process.env.SITE_URL?.trim();
  if (!bruto) {
    if (ehBuild && process.env.VERCEL_ENV === 'preview' && process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
    if (ehBuild) {
      throw new Error('SITE_URL é obrigatório no build (ex.: SITE_URL=https://www.exemplo.com.br pnpm build). Defina-o também nas variáveis de ambiente da Vercel.');
    }
    return 'http://localhost:4321';
  }
  let url;
  try { url = new URL(bruto); } catch { throw new Error(`SITE_URL inválido: "${bruto}". Use uma URL absoluta, como https://www.exemplo.com.br`); }
  const local = ['localhost', '127.0.0.1'].includes(url.hostname);
  if (url.protocol !== 'https:' && !local) throw new Error(`SITE_URL precisa usar https (recebido: ${bruto}).`);
  if (url.pathname !== '/' || url.search || url.hash) throw new Error(`SITE_URL deve ser só a origem, sem caminho (recebido: ${bruto}).`);
  return url.origin;
}

/**
 * CSP por hash (P8). O Astro calcula o hash de cada <script> e <style> que ele mesmo emite e
 * escreve a política num <meta http-equiv> em cada página; não há 'unsafe-inline' em script
 * nem em style, e o HTML não tem atributo style="" (cores, padrões e barras usam classe ou SVG).
 * O 3D (WebGL/Three.js) não precisa de nada além de 'self': sem eval, sem wasm, sem worker,
 * texturas geradas em <canvas>. O mapa do Google só entra por iframe depois do consentimento.
 * frame-ancestors não vale em <meta>; vai no cabeçalho, em vercel.json.
 */
const hash = texto => `sha256-${createHash('sha256').update(texto).digest('base64')}`;
const csp = {
  algorithm: 'SHA-256',
  scriptDirective: { hashes: [hash(scriptAberturaInicio), hash(scriptMarcarJs)] },
  directives: [
    "default-src 'self'",
    "img-src 'self' data:",
    "font-src 'self'",
    "connect-src 'self'",
    "frame-src https://www.google.com",
    "manifest-src 'self'",
    "object-src 'none'",
    "base-uri 'self'",
    "form-action 'self'",
    "worker-src 'none'",
    "upgrade-insecure-requests",
  ],
};

export default defineConfig({ site: resolverSite(), output: 'static', server: { host: true }, security: { csp } });
