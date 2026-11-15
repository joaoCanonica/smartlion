import { z } from 'astro/zod';
import dados from '../data/historia.json';
export const marcoSchema=z.object({
 id:z.string().min(1),data:z.string().regex(/^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/),
 rotulo:z.string().min(1),titulo:z.string().min(1),texto:z.string().min(1),
 fonte:z.string().min(1),confirmado:z.boolean(),destaqueHome:z.boolean(),ordem:z.number().int(),
});
export const marcos=marcoSchema.array().parse(dados).filter(m=>m.confirmado).sort((a,b)=>a.ordem-b.ordem);
export interface PessoaEquipe { nome:string; funcao:string; foto:string; autorizacaoEm:string; autorizado:boolean }
export function equipePublicavel(p:PessoaEquipe,fotoDisponivel:boolean){
 const dataValida=/^\d{4}-\d{2}-\d{2}$/.test(p.autorizacaoEm)&&!Number.isNaN(Date.parse(p.autorizacaoEm))&&new Date(p.autorizacaoEm).toISOString().slice(0,10)===p.autorizacaoEm;
 return p.autorizado&&Boolean(p.nome.trim()&&p.funcao.trim()&&p.foto.trim())&&fotoDisponivel&&dataValida;
}
