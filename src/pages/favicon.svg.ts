import type { APIRoute } from 'astro';
import { svgFavicon } from '../lib/marca';
export const GET: APIRoute = () => new Response(svgFavicon(), { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
