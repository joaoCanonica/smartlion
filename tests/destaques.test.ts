import { describe, expect, it } from 'vitest';
import { z } from 'astro/zod';
import { criarSchemaDestaque, destaquePublicavel } from '../src/schemas/destaque';
import exemplo from '../src/content/destaques/iphone-18-pro-max-burgundy.json';

const schema = criarSchemaDestaque(z.string());
const base = { titulo: 'X', texto: 'Texto.', mensagemWhatsApp: 'Olá, Smart Lion! Tem disponível?' };

describe('destaques ("Chegou na loja")', () => {
  it('o exemplo é válido e não é publicável (sem confirmação)', () => {
    const d = schema.parse(exemplo);
    expect(destaquePublicavel(d)).toBe(false);
  });
  it('só publica com data de confirmação válida', () => {
    expect(destaquePublicavel(schema.parse({ ...base, confirmadoEm: '2026-11-20' }))).toBe(true);
    expect(() => schema.parse({ ...base, confirmadoEm: '20/11/2026' })).toThrow();
  });
  it('recusa preço, mensagem fora do padrão e foto sem alt', () => {
    expect(() => schema.parse({ ...base, texto: 'Por R$ 9.999' })).toThrow();
    expect(() => schema.parse({ ...base, mensagemWhatsApp: 'Oi, tem?' })).toThrow();
    expect(() => schema.parse({ ...base, foto: 'x.jpg' })).toThrow();
  });
});
