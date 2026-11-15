import { describe, expect, it } from 'vitest';
import { loja } from '../src/config/loja';
import { statusHorario, formatarPeriodos, validarAgenda, type Agenda } from '../src/lib/horario';
const agenda: Agenda = loja.horario;
const status = (data: string, a: Agenda = agenda) => statusHorario(new Date(data), a);
describe('Horários regulares — São Paulo', () => {
 it.each([
  ['2026-10-26T08:59:59-03:00','Fechado · abre hoje às 9h'],
  ['2026-10-26T09:00:00-03:00','Aberto agora · fecha às 12h'],
  ['2026-10-26T11:59:59-03:00','Aberto agora · fecha às 12h'],
  ['2026-10-26T12:00:00-03:00','Fechado para almoço · volta às 13h30'],
  ['2026-10-26T12:15:00-03:00','Fechado para almoço · volta às 13h30'],
  ['2026-10-26T13:29:59-03:00','Fechado para almoço · volta às 13h30'],
  ['2026-10-26T13:30:00-03:00','Aberto agora · fecha às 18h30'],
  ['2026-10-26T18:29:59-03:00','Aberto agora · fecha às 18h30'],
  ['2026-10-26T18:30:00-03:00','Fechado · abre terça às 9h'],
  ['2026-10-30T18:30:00-03:00','Fechado · abre sábado às 9h'],
  ['2026-10-31T08:59:59-03:00','Fechado · abre hoje às 9h'],
  ['2026-10-31T09:00:00-03:00','Aberto agora · fecha às 13h'],
  ['2026-10-31T12:59:59-03:00','Aberto agora · fecha às 13h'],
  ['2026-10-31T13:00:00-03:00','Fechado · abre segunda às 9h'],
  ['2026-10-31T13:05:00-03:00','Fechado · abre segunda às 9h'],
  ['2026-11-01T10:00:00-03:00','Fechado · abre segunda às 9h'],
  ['2026-10-26T00:00:00-03:00','Fechado · abre hoje às 9h'],
 ])('%s → %s', (instante, esperado)=>expect(status(instante).texto).toBe(esperado));
 it('usa São Paulo quando o instante é enviado em UTC',()=>expect(status('2026-10-26T15:15:00Z').tipo).toBe('almoco'));
 it('considera o dia local na virada UTC',()=>expect(status('2026-10-26T01:00:00Z').texto).toBe('Fechado · abre segunda às 9h'));
 it('produz o mesmo resultado para diferentes offsets do mesmo instante',()=>expect(status('2026-10-26T15:15:00Z')).toEqual(status('2026-10-26T17:15:00+02:00')));
 it('não altera a data de entrada',()=>{const d=new Date('2026-10-26T15:15:00Z');statusHorario(d,agenda);expect(d.toISOString()).toBe('2026-10-26T15:15:00.000Z')});
 it('deriva os horários legíveis da mesma configuração',()=>expect(agenda.semana.map(d=>formatarPeriodos(d.periodos))).toEqual(['9h–12h e 13h30–18h30','9h–13h','Fechado']));
});
describe('Exceções sintéticas — não são dados reais da loja',()=>{
 it('pula uma segunda fechada',()=>expect(status('2026-10-31T13:05:00-03:00',{...agenda,excecoes:[{data:'2026-11-02',periodos:[]}]}).texto).toBe('Fechado · abre terça às 9h'));
 it('pula fechamentos consecutivos na virada do ano',()=>expect(status('2026-12-31T20:00:00-03:00',{...agenda,excecoes:[{data:'2027-01-01',periodos:[]},{data:'2027-01-02',periodos:[]}]}).texto).toBe('Fechado · abre segunda às 9h'));
 it('permite atendimento excepcional no domingo',()=>expect(status('2026-11-01T10:15:00-03:00',{...agenda,excecoes:[{data:'2026-11-01',periodos:[[600,660]]}]}).texto).toBe('Aberto agora · fecha às 11h'));
 it('usa abertura excepcional ao procurar o próximo atendimento',()=>expect(status('2026-10-31T14:00:00-03:00',{...agenda,excecoes:[{data:'2026-11-01',periodos:[[600,660]]}]}).texto).toBe('Fechado · abre domingo às 10h'));
 it('não presume almoço em uma pausa excepcional',()=>expect(status('2026-10-26T11:30:00-03:00',{...agenda,excecoes:[{data:'2026-10-26',periodos:[[540,660],[720,780]]}]}).texto).toBe('Fechado · volta às 12h'));
 it('substitui todos os períodos regulares por uma exceção',()=>expect(status('2026-10-26T14:00:00-03:00',{...agenda,excecoes:[{data:'2026-10-26',periodos:[[540,600]]}]}).texto).toBe('Fechado · abre terça às 9h'));
 it('lida com fevereiro bissexto',()=>expect(status('2028-02-28T19:00:00-03:00',{...agenda,excecoes:[{data:'2028-02-29',periodos:[]}]}).texto).toBe('Fechado · abre quarta às 9h'));
 it('não inventa feriados na configuração real',()=>expect(agenda.excecoes).toEqual([]));
 it('não entra em loop se não há abertura prevista',()=>expect(status('2026-10-26T14:00:00-03:00',{...agenda,semana:[{dias:[0,1,2,3,4,5,6],rotulo:'Fechado',periodos:[]}]}).texto).toBe('Fechado · consulte os próximos horários'));
 it('encontra uma abertura excepcional distante',()=>expect(status('2026-10-26T14:00:00-03:00',{...agenda,semana:[{dias:[0,1,2,3,4,5,6],rotulo:'Fechado',periodos:[]}],excecoes:[{data:'2026-12-01',periodos:[[540,600]]}]}).texto).toBe('Fechado · abre em 01/12/2026 às 9h'));
});
describe('Validação da agenda',()=>{
 it.each(['2026-02-30','2026-13-01','01/01/2026'])('rejeita a data %s',data=>expect(()=>validarAgenda({...agenda,excecoes:[{data,periodos:[]}]})).toThrow('Data'));
 it('rejeita exceções duplicadas',()=>expect(()=>validarAgenda({...agenda,excecoes:[{data:'2026-11-02',periodos:[]},{data:'2026-11-02',periodos:[]}]})).toThrow('duplicada'));
 it.each([[[600,540]],[[500,700],[650,800]],[[600,600]],[[1440,1500]],[[540.5,600]]].map(periodos=>({periodos})))('rejeita períodos inválidos $periodos',({periodos})=>expect(()=>validarAgenda({...agenda,excecoes:[{data:'2026-11-02',periodos:periodos as [number,number][]}]})).toThrow('Períodos'));
 it('rejeita semana incompleta',()=>expect(()=>validarAgenda({...agenda,semana:[]})).toThrow('sete dias'));
 it('rejeita dias repetidos',()=>expect(()=>validarAgenda({...agenda,semana:[...agenda.semana,agenda.semana[0]!]})).toThrow('duplicado'));
 it('rejeita instante inválido',()=>expect(()=>statusHorario(new Date('inválido'),agenda)).toThrow('Instante'));
 it('rejeita fuso inválido',()=>expect(()=>validarAgenda({...agenda,fuso:'Inexistente'})).toThrow());
});
