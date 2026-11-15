import type { APIRoute } from 'astro';
import { svgSimbolos } from '../lib/marca';
// Sprite da marca: o HTML referencia com <use href="/marca.svg#..."> (uma requisição, em cache entre páginas).
export const GET: APIRoute = () => new Response(svgSimbolos(), { headers: { 'Content-Type': 'image/svg+xml; charset=utf-8' } });
