import { defineConfig } from 'astro/config';

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

export default defineConfig({ site: resolverSite(), output: 'static', server: { host: true } });
