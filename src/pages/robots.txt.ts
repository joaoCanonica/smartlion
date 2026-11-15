import type { APIRoute } from 'astro';
import { podeIndexar } from '../lib/seo';
export const GET:APIRoute=({site})=>new Response(podeIndexar(import.meta.env.DEV,import.meta.env.PUBLIC_INDEXABLE,import.meta.env.VERCEL_ENV)?`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml',site)}\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});
