import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { criarSchemaProduto } from './schemas/produto';
import { dicaSchema } from './schemas/dica';
export const collections = {
 dicas: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/dicas' }), schema: dicaSchema }),
 produtos: defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/produtos' }),
  schema: ({ image }) => criarSchemaProduto(image()),
 }),
};
