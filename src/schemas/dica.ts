import { z } from 'astro/zod';
const data=z.string().refine(v=>v==='' || (/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v),'Data ISO válida ou vazio');
export const dicaSchema=z.object({
 slug:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
 titulo:z.string().trim().min(1),descricao:z.string().trim().min(1),resposta:z.string().trim().min(1),
 tema:z.enum(['iPhone','Mac']),rascunho:z.boolean().default(true),confirmado:z.boolean().default(false),
 publicadoEm:data.default(''),revisadoEm:data.default(''),revisor:z.string().trim().default(''),
 postOrigem:z.union([z.literal(''),z.url({ protocol: /^https$/ })]).default(''),
 fontes:z.array(z.object({titulo:z.string().min(1),url:z.url({ protocol: /^https$/ }),consultadoEm:data.refine(v=>v!=='')})).min(1),
 cta:z.enum(['assistencia','compra']).default('assistencia'),ordem:z.number().int().default(0),
}).superRefine((d,ctx)=>{
 if(!d.rascunho&&d.confirmado&&(!d.publicadoEm||!d.revisadoEm||!d.revisor))ctx.addIssue({code:'custom',message:'Publicação exige data, revisão e revisor confirmados.'});
});
export function dicaPublicavel(d:{rascunho:boolean;confirmado:boolean;publicadoEm:string;revisadoEm:string;revisor:string}){
 return !d.rascunho&&d.confirmado&&Boolean(d.publicadoEm&&d.revisadoEm&&d.revisor.trim());
}
