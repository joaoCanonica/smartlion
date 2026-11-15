import { z } from 'astro/zod';
import { loja } from '../config/loja';
const identificador = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const dataISO = z.string().refine(v => /^\d{4}-\d{2}-\d{2}$/.test(v) && Number.isFinite(Date.parse(`${v}T12:00:00Z`)) && new Date(`${v}T12:00:00Z`).toISOString().slice(0,10) === v, 'Use uma data válida AAAA-MM-DD.');
export const categoriaSchema = z.enum(['iphone','seminovos','ipad-mac-watch','xiaomi','casa-e-games','acessorios','perfumaria']);
export function criarSchemaProduto<T extends z.ZodType>(imagem: T) {
 return z.object({
  slug: identificador,
  nome: z.string().trim().min(1),
  categoria: categoriaSchema,
  subcategoria: z.string().nullable().default(null),
  condicao: z.enum(['novo','seminovo','encomenda']),
  condicaoFisica: z.enum(['novo','seminovo']).nullable().default(null),
  rascunho: z.boolean().default(true),
  confirmado: z.boolean().default(false),
  confirmadoEm: z.union([dataISO,z.literal('')]).default(''),
  selos: z.array(z.string().trim().min(1)).default([]),
  versoes: z.array(z.object({ id: identificador, rotulo: z.string().trim().min(1) })).default([]),
  cores: z.array(z.object({ id: identificador, rotulo: z.string().trim().min(1), hex: z.string().regex(/^#[0-9a-fA-F]{6}$/) })).default([]),
  disponibilidade: z.enum(['consultar','disponivel','sob-encomenda','esgotado']).default('consultar'),
  preco: z.number().positive().nullable().default(null),
  precoNota: z.object({ data: dataISO, condicao: z.string().trim().min(1), formaPagamento: z.string().trim().min(1) }).nullable().default(null),
  garantia: z.string().default(''),
  garantiaMeses: z.number().int().positive().nullable().default(null),
  saudeBateria: z.string().default(''),
  destaque: z.boolean().default(false),
  ordem: z.number().int().default(0),
  imagens: z.array(imagem).default([]),
  imagensAlt: z.array(z.string().trim().min(1)).default([]),
  descricaoCurta: z.string().default(''),
  sinonimos: z.array(z.string()).default([]),
  atualizadoEm: z.union([dataISO,z.literal('')]).default(''),
 }).superRefine((p,ctx) => {
  const erro = (path: string, message: string) => ctx.addIssue({code:'custom',path:[path],message});
  if ((p.preco !== null) !== (p.precoNota !== null)) erro('precoNota','Preço e nota com data, condição e pagamento precisam ser preenchidos juntos.');
  for (const chave of ['versoes','cores'] as const) if(new Set(p[chave].map(v=>v.id)).size !== p[chave].length) erro(chave,'IDs não podem se repetir.');
  if(p.imagens.length !== p.imagensAlt.length) erro('imagensAlt','Cada imagem deve ter um texto alternativo.');
  if(p.condicao === 'encomenda' && p.confirmado && !p.condicaoFisica) erro('condicaoFisica','Confirme se a encomenda é nova ou seminova.');
  if(p.condicao !== 'encomenda' && p.condicaoFisica && p.condicaoFisica !== p.condicao) erro('condicaoFisica','Condição física incompatível.');
  if((p.condicao === 'seminovo' || p.condicaoFisica === 'seminovo') && p.confirmado && p.garantiaMeses !== loja.garantiaSeminovosMeses) erro('garantiaMeses','Confirmar os 6 meses de garantia dos seminovos.');
  if(p.confirmado && !p.confirmadoEm) erro('confirmadoEm','Registre a data de confirmação da loja.');
  if(!p.rascunho && p.confirmado) {
   if(!p.imagens.length) erro('imagens','Adicione a foto real antes de publicar.');
   if(!p.descricaoCurta.trim()) erro('descricaoCurta','Preencha a descrição confirmada.');
  }
 });
}
// Validação independente do carregador Astro, também usada nos testes de dados brutos.
export const produtoJsonSchema = criarSchemaProduto(z.string().trim().min(1));
