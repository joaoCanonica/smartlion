import type { APIRoute } from 'astro';
import { obterProdutos } from '../lib/produtos';
import { criarIndice } from '../lib/catalogo';
export const GET: APIRoute = async () => new Response(JSON.stringify(criarIndice(await obterProdutos())),{headers:{'Content-Type':'application/json; charset=utf-8'}});
