import { describe,it,expect } from 'vitest';
import { marcos, marcoSchema, equipePublicavel } from '../src/lib/historia';
describe('História e autorização da equipe',()=>{
 it('só publica marcos confirmados com fonte e mantém os três da home',()=>{expect(marcos.length).toBe(5);expect(marcos.every(m=>m.confirmado&&m.fonte)).toBe(true);expect(marcos.filter(m=>m.destaqueHome).length).toBe(3);});
 it('não transforma experiência em fundação nem divulgação em inauguração',()=>{expect(marcos.find(m=>m.id==='experiencia-assistencia')?.texto).toContain('não define a data de fundação');expect(marcos.find(m=>m.id==='turmas-centro-tecnico')?.texto).toContain('não uma data de inauguração');});
 it('rejeita mês inválido',()=>expect(marcoSchema.safeParse({...marcos[0],data:'2026-13'}).success).toBe(false));
 const pessoa={nome:'Pessoa de teste',funcao:'Função de teste',foto:'teste.jpg',autorizacaoEm:'2026-10-28',autorizado:true};
 it('exige autorização explícita, data válida, identificação e arquivo de foto',()=>{expect(equipePublicavel(pessoa,true)).toBe(true);expect(equipePublicavel({...pessoa,autorizado:false},true)).toBe(false);expect(equipePublicavel(pessoa,false)).toBe(false);expect(equipePublicavel({...pessoa,nome:''},true)).toBe(false);expect(equipePublicavel({...pessoa,autorizacaoEm:''},true)).toBe(false);expect(equipePublicavel({...pessoa,autorizacaoEm:'2026-02-30'},true)).toBe(false);});
});
