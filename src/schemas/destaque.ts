import { z } from 'astro/zod';
/**
 * "Chegou na loja" (P4): lançamentos e destaques que a loja confirmar.
 * Sem preço. Só aparece em produção com `confirmadoEm` preenchido (data ISO).
 * A mensagem do WhatsApp é do próprio item (as 12 mensagens da config não mudam) e
 * passa por linkWhatsApp(); precisa começar como as demais ("Olá, Smart Lion!").
 */
const dataIso = z.string().refine(v => v === '' || (/^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) && new Date(v).toISOString().slice(0, 10) === v), 'Data ISO válida ou vazio');
export const criarSchemaDestaque = <T extends z.ZodType>(imagem: T) => z.object({
  titulo: z.string().trim().min(1),
  texto: z.string().trim().min(1),
  foto: imagem.optional(),
  fotoAlt: z.string().trim().default(''),
  mensagemWhatsApp: z.string().trim().startsWith('Olá, Smart Lion!').refine(v => !/PENDENTE|undefined|null/.test(v), 'Mensagem sem marcadores'),
  confirmadoEm: dataIso.default(''),
  fonte: z.string().trim().default(''),
  ordem: z.number().int().default(0),
}).superRefine((d, ctx) => {
  if (d.foto && !d.fotoAlt) ctx.addIssue({ code: 'custom', message: 'Foto exige texto alternativo.' });
  if (/R\$|\bpreço\b|\bvalor\b/i.test(`${d.titulo} ${d.texto}`)) ctx.addIssue({ code: 'custom', message: 'Destaque não mostra preço.' });
});
export function destaquePublicavel(d: { confirmadoEm: string }): boolean { return d.confirmadoEm !== ''; }
