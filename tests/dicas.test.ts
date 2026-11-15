import { describe,it,expect } from 'vitest';
import { dicaSchema,dicaPublicavel } from '../src/schemas/dica';
import { readFileSync,readdirSync } from 'node:fs';
const exemplos=readdirSync('src/content/dicas').map(n=>JSON.parse(readFileSync(`src/content/dicas/${n}`,'utf8').split('---')[1]));
describe('publicação de dicas',()=>{
 it('tem três modelos válidos, todos bloqueados em produção',()=>{expect(exemplos).toHaveLength(3);for(const e of exemplos){expect(dicaSchema.safeParse(e).success).toBe(true);expect(dicaPublicavel(e)).toBe(false);}});
 it('não publica só por remover rascunho',()=>expect(dicaPublicavel({...exemplos[0],rascunho:false})).toBe(false));
 it('exige datas e revisor para publicar',()=>expect(dicaSchema.safeParse({...exemplos[0],rascunho:false,confirmado:true}).success).toBe(false));
 it('aceita metadados de publicação completos',()=>{const e={...exemplos[0],rascunho:false,confirmado:true,publicadoEm:'2026-10-29',revisadoEm:'2026-10-29',revisor:'Revisor de teste'};expect(dicaSchema.safeParse(e).success).toBe(true);expect(dicaPublicavel(e)).toBe(true);});
 it('rejeita datas inexistentes',()=>expect(dicaSchema.safeParse({...exemplos[0],revisadoEm:'2026-02-30'}).success).toBe(false));
 it('rejeita slug com travessia',()=>expect(dicaSchema.safeParse({...exemplos[0],slug:'../privacidade'}).success).toBe(false));
 it('não inventa autor nem datas nos rascunhos',()=>{for(const e of exemplos){expect(e.revisor).toBe('');expect(e.publicadoEm).toBe('');expect(e.postOrigem).toBe('');}});
 it('exige referência consultada',()=>expect(dicaSchema.safeParse({...exemplos[0],fontes:[]}).success).toBe(false));
});
