import type { APIRoute } from 'astro';
import { iconePng } from '../lib/icones';
export const GET: APIRoute = () => iconePng(512, { cantos: false, margem: 1.6 });
