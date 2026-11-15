import type { APIRoute } from 'astro';
import { iconePng } from '../lib/icones';
export const GET: APIRoute = () => iconePng(192, { cantos: false, margem: 1.6 });
