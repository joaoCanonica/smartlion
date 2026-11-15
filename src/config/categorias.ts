import { loja } from './loja';
export const categorias = [
  { slug: 'iphone', nome: 'iPhone', detalhe: 'Novos e seminovos' },
  { slug: 'seminovos', nome: 'Seminovos', detalhe: `${loja.garantiaSeminovosMeses} meses de garantia` },
  { slug: 'ipad-mac-watch', nome: 'iPad, Mac e Watch', detalhe: 'E acessórios Apple' },
  { slug: 'xiaomi', nome: 'Xiaomi', detalhe: 'POCO e Redmi' },
  { slug: 'casa-e-games', nome: 'Casa e games', detalhe: 'Tecnologia para sua rotina' },
  { slug: 'acessorios', nome: 'Acessórios', detalhe: 'Proteção e praticidade' },
  { slug: 'perfumaria', nome: 'Perfumaria', detalhe: 'Importados' },
] as const;

/** Destino institucional; seminovos tem página própria. */
export function caminhoCategoria(slug: string): string {
  return slug === 'seminovos' ? '/seminovos' : `/produtos/${slug}`;
}
