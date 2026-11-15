import type { APIRoute } from 'astro';
import { loja } from '../config/loja';
export const GET: APIRoute = () => new Response(JSON.stringify({
  name: `${loja.nome} · ${loja.endereco.cidade}/${loja.endereco.uf}`,
  short_name: loja.nome,
  lang: 'pt-BR',
  start_url: '/',
  display: 'browser',
  background_color: '#0B0B0C',
  theme_color: '#0B0B0C',
  icons: [
    { src: '/icone-192.png', sizes: '192x192', type: 'image/png', purpose: 'any maskable' },
    { src: '/icone-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
    { src: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
  ],
}, null, 2), { headers: { 'Content-Type': 'application/manifest+json; charset=utf-8' } });
