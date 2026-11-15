import type { APIRoute } from 'astro';
import { iconePng } from '../lib/icones';
export const GET: APIRoute = () => iconePng(32, { margem: 1.15 });
