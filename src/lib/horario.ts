export type Periodo = readonly [abertura: number, fechamento: number];
export interface DiaHorario { readonly dias: readonly number[]; readonly rotulo: string; readonly periodos: readonly Periodo[] }
export interface ExcecaoHorario { readonly data: string; readonly periodos: readonly Periodo[] }
export interface Agenda {
  readonly fuso: string;
  readonly semana: readonly DiaHorario[];
  readonly excecoes: readonly ExcecaoHorario[];
}
export interface StatusHorario {
  readonly tipo: 'aberto' | 'almoco' | 'fechado';
  readonly texto: string;
}
export function formatarHora(minutos: number): string {
  const h = Math.floor(minutos / 60), m = minutos % 60;
  return m ? `${h}h${String(m).padStart(2, '0')}` : `${h}h`;
}
export function formatarPeriodos(periodos: readonly Periodo[]): string {
  return periodos.length ? periodos.map(([a, f]) => `${formatarHora(a)}–${formatarHora(f)}`).join(' e ') : 'Fechado';
}
function validarPeriodos(periodos: readonly Periodo[]): void {
  let fimAnterior = -1;
  for (const [inicio, fim] of periodos) {
    if (!Number.isInteger(inicio) || !Number.isInteger(fim) || inicio < 0 || fim > 1440 || fim <= inicio || inicio <= fimAnterior) {
      throw new Error('Períodos devem estar ordenados, separados e dentro do mesmo dia.');
    }
    fimAnterior = fim;
  }
}
function dataValida(data: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(data)) return false;
  const d = new Date(`${data}T12:00:00Z`);
  return Number.isFinite(d.getTime()) && d.toISOString().slice(0, 10) === data;
}
export function validarAgenda(agenda: Agenda): void {
  new Intl.DateTimeFormat('pt-BR', { timeZone: agenda.fuso });
  const dias = new Set<number>();
  for (const grupo of agenda.semana) {
    validarPeriodos(grupo.periodos);
    for (const dia of grupo.dias) {
      if (!Number.isInteger(dia) || dia < 0 || dia > 6 || dias.has(dia)) throw new Error('Dia semanal inválido ou duplicado.');
      dias.add(dia);
    }
  }
  if (dias.size !== 7) throw new Error('A agenda deve declarar os sete dias da semana.');
  const datas = new Set<string>();
  for (const excecao of agenda.excecoes) {
    if (!dataValida(excecao.data) || datas.has(excecao.data)) throw new Error('Data de exceção inválida ou duplicada.');
    validarPeriodos(excecao.periodos);
    datas.add(excecao.data);
  }
}
function diaCivil(data: string, incremento = 0): { data: string; dia: number } {
  const d = new Date(`${data}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + incremento);
  return { data: d.toISOString().slice(0, 10), dia: d.getUTCDay() };
}
function periodosEm(data: string, agenda: Agenda): readonly Periodo[] {
  const especial = agenda.excecoes.find(e => e.data === data);
  if (especial) return especial.periodos;
  return agenda.semana.find(g => g.dias.includes(diaCivil(data).dia))!.periodos;
}
/** Função pura: o instante e a agenda são entradas; não consulta relógio global nem rede. */
export function statusHorario(agora: Date, agenda: Agenda): StatusHorario {
  validarAgenda(agenda);
  if (!Number.isFinite(agora.getTime())) throw new Error('Instante inválido.');
  const partes = new Intl.DateTimeFormat('en-CA', {
    timeZone: agenda.fuso, year: 'numeric', month: '2-digit', day: '2-digit',
    hour: '2-digit', minute: '2-digit', hourCycle: 'h23',
  }).formatToParts(agora);
  const valor = (tipo: Intl.DateTimeFormatPartTypes) => partes.find(p => p.type === tipo)!.value;
  const hoje = `${valor('year')}-${valor('month')}-${valor('day')}`;
  const minuto = Number(valor('hour')) * 60 + Number(valor('minute'));
  const periodos = periodosEm(hoje, agenda);
  for (const [abertura, fechamento] of periodos) {
    if (minuto >= abertura && minuto < fechamento) return { tipo: 'aberto', texto: `Aberto agora · fecha às ${formatarHora(fechamento)}` };
  }
  const proximoHoje = periodos.find(([inicio]) => inicio > minuto);
  if (proximoHoje) {
    const houveAtendimento = periodos.some(([, fim]) => fim <= minuto);
    const diaRegular = !agenda.excecoes.some(e => e.data === hoje);
    if (houveAtendimento && diaRegular) return { tipo: 'almoco', texto: `Fechado para almoço · volta às ${formatarHora(proximoHoje[0])}` };
    return { tipo: 'fechado', texto: `Fechado · ${houveAtendimento ? 'volta' : 'abre hoje'} às ${formatarHora(proximoHoje[0])}` };
  }
  const nomes = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado'];
  // Mais dias que todas as exceções finitas + uma semana completa cobre a próxima abertura regular.
  for (let i = 1; i <= agenda.excecoes.length + 8; i++) {
    const futuro = diaCivil(hoje, i);
    const proximo = periodosEm(futuro.data, agenda)[0];
    if (proximo) return { tipo: 'fechado', texto: `Fechado · abre ${nomes[futuro.dia]} às ${formatarHora(proximo[0])}` };
  }
  // Também suporta agenda semanal totalmente fechada com abertura excepcional distante.
  const especial = [...agenda.excecoes].filter(e => e.data > hoje && e.periodos.length).sort((a,b)=>a.data.localeCompare(b.data))[0];
  if (especial) {
    const [ano, mes, dia] = especial.data.split('-');
    return { tipo: 'fechado', texto: `Fechado · abre em ${dia}/${mes}/${ano} às ${formatarHora(especial.periodos[0]![0])}` };
  }
  return { tipo: 'fechado', texto: 'Fechado · consulte os próximos horários' };
}
