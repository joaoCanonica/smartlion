/**
 * Geometria da abertura "O Rugido de Luz", calculada no build a partir de
 * src/assets/marca/smartlion-logo.svg (via src/lib/marca.ts). Nenhum ponto é
 * redesenhado: os subcaminhos originais são só redistribuídos em <path>s.
 *
 * - Leão (#leao, 1 path evenodd com 16 subcaminhos):
 *   furos (área negativa) ficam no mesmo <path> do subcaminho que os contém,
 *   então o desenho é idêntico ao original. Grupos:
 *     núcleo  = subcaminhos com o centro dentro da caixa do rosto (olhos, focinho, testa);
 *     rosto   = o maior subcaminho (rosto e barba) + seus furos;
 *     juba    = o resto (juba e orelhas).
 *   Dentro de cada grupo a ordem é a distância ao centro do rosto (de dentro para fora).
 * - Nome (#nome, 12 subcaminhos = 9 letras + 3 furos de A, R, O):
 *   furos presos à letra; letras ordenadas pelo ângulo em volta do anel (S → N).
 * - Anel (#anel, 1 faixa em arco): círculo ajustado por mínimos quadrados e maior vão
 *   angular. A revelação é uma máscara com um traço sobre a linha central, do fim do
 *   vão no sentido horário.
 */
import { marca } from '../../lib/marca';

type Ponto = [number, number];
interface Sub { d: string; pts: Ponto[]; area: number; caixa: [number, number, number, number]; centro: Ponto }

function subcaminhos(d: string): Sub[] {
  return d.split(/(?=M)/).map(trecho => {
    const nums = (trecho.match(/-?\d+(?:\.\d+)?/g) ?? []).map(Number);
    const pts: Ponto[] = [];
    for (let i = 0; i + 1 < nums.length; i += 2) pts.push([nums[i], nums[i + 1]]);
    let area = 0;
    for (let i = 0; i < pts.length; i++) { const [x1, y1] = pts[i], [x2, y2] = pts[(i + 1) % pts.length]; area += x1 * y2 - x2 * y1; }
    const xs = pts.map(p => p[0]), ys = pts.map(p => p[1]);
    const caixa: Sub['caixa'] = [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)];
    return { d: trecho.trim(), pts, area: area / 2, caixa, centro: [(caixa[0] + caixa[2]) / 2, (caixa[1] + caixa[3]) / 2] };
  });
}
function dentro([x, y]: Ponto, poli: Ponto[]): boolean {
  let r = false;
  for (let i = 0, j = poli.length - 1; i < poli.length; j = i++) {
    const [xi, yi] = poli[i], [xj, yj] = poli[j];
    if ((yi > y) !== (yj > y) && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) r = !r;
  }
  return r;
}
/** Junta cada furo (área de sinal oposto ao da maioria) ao menor subcaminho que o contém. */
function comFuros(lista: Sub[]): { principal: Sub; d: string }[] {
  const sinal = Math.sign(lista.reduce((s, x) => s + Math.sign(x.area) * Math.abs(x.area), 0)) || 1;
  const cheios = lista.filter(s => Math.sign(s.area) === sinal);
  const furos = lista.filter(s => Math.sign(s.area) !== sinal);
  const saida = cheios.map(principal => ({ principal, d: principal.d }));
  for (const furo of furos) {
    const pai = saida.filter(c => dentro(furo.pts[0], c.principal.pts)).sort((a, b) => Math.abs(a.principal.area) - Math.abs(b.principal.area))[0];
    if (!pai) throw new Error('Abertura: furo sem contorno que o contenha.');
    pai.d += furo.d;
  }
  return saida;
}

export type GrupoLeao = 'nucleo' | 'rosto' | 'juba';
export interface ParteLeao { d: string; grupo: GrupoLeao; ordem: number }

export function partesDoLeao(): ParteLeao[] {
  const pecas = comFuros(subcaminhos(marca.logo.leao));
  const rosto = pecas.reduce((a, b) => (Math.abs(b.principal.area) > Math.abs(a.principal.area) ? b : a));
  const [x0, y0, x1, y1] = rosto.principal.caixa;
  const centro: Ponto = [(x0 + x1) / 2, (y0 + y1) / 2];
  const grupoDe = (p: typeof pecas[number]): GrupoLeao => {
    if (p === rosto) return 'rosto';
    const [cx, cy] = p.principal.centro;
    return cx > x0 && cx < x1 && cy > y0 && cy < y1 ? 'nucleo' : 'juba';
  };
  return pecas
    .map(p => ({ d: p.d, grupo: grupoDe(p), ordem: Math.hypot(p.principal.centro[0] - centro[0], p.principal.centro[1] - centro[1]) }))
    .sort((a, b) => ['nucleo', 'rosto', 'juba'].indexOf(a.grupo) - ['nucleo', 'rosto', 'juba'].indexOf(b.grupo) || a.ordem - b.ordem);
}

/** Círculo ajustado ao anel (mínimos quadrados de Kåsa) e o maior vão angular (graus, sentido horário na tela). */
export function geometriaDoAnel() {
  const pts = subcaminhos(marca.logo.anel).flatMap(s => s.pts);
  let sx = 0, sy = 0, sxx = 0, syy = 0, sxy = 0, sxz = 0, syz = 0, sz = 0;
  for (const [x, y] of pts) { const z = x * x + y * y; sx += x; sy += y; sxx += x * x; syy += y * y; sxy += x * y; sxz += x * z; syz += y * z; sz += z; }
  const n = pts.length;
  const A = [[sxx, sxy, sx], [sxy, syy, sy], [sx, sy, n]], B = [sxz, syz, sz];
  const det = (m: number[][]) => m[0][0] * (m[1][1] * m[2][2] - m[1][2] * m[2][1]) - m[0][1] * (m[1][0] * m[2][2] - m[1][2] * m[2][0]) + m[0][2] * (m[1][0] * m[2][1] - m[1][1] * m[2][0]);
  const D = det(A);
  const [a, b, c] = [0, 1, 2].map(col => det(A.map((linha, i) => linha.map((v, j) => (j === col ? B[i] : v)))) / D);
  const cx = a / 2, cy = b / 2, r = Math.sqrt(c + cx * cx + cy * cy);
  const raios = pts.map(([x, y]) => Math.hypot(x - cx, y - cy));
  const angulos = pts.map(([x, y]) => ((Math.atan2(y - cy, x - cx) * 180) / Math.PI + 360) % 360).sort((p, q) => p - q);
  let vao = 0, inicioVao = 0;
  angulos.forEach((ang, i) => { const prox = i + 1 < angulos.length ? angulos[i + 1] : angulos[0] + 360; if (prox - ang > vao) { vao = prox - ang; inicioVao = ang; } });
  return { cx, cy, r, espessura: Math.max(...raios) - Math.min(...raios), inicio: (inicioVao + vao) % 360, fim: inicioVao, vao };
}

/** Traço (linha central do anel) do fim do vão até o início, no sentido horário, com folga nas pontas. */
export function tracoDoAnel(folga = 3): { d: string; largura: number } {
  const g = geometriaDoAnel();
  const ini = g.inicio - folga;
  let fim = g.fim + folga;
  if (fim <= ini) fim += 360;
  const ponto = (graus: number) => { const t = (graus * Math.PI) / 180; return `${(g.cx + g.r * Math.cos(t)).toFixed(1)} ${(g.cy + g.r * Math.sin(t)).toFixed(1)}`; };
  // Dois arcos para não depender da bandeira de arco grande em varreduras > 180°.
  const meio = (ini + fim) / 2;
  const r = g.r.toFixed(1);
  return { d: `M${ponto(ini)}A${r} ${r} 0 0 1 ${ponto(meio)}A${r} ${r} 0 0 1 ${ponto(fim)}`, largura: Math.ceil(g.espessura * 3 + 12) };
}

/** Letras de "SMART LION" na ordem de leitura (S → N), cada uma com seus furos. */
export function letrasDoNome(): string[] {
  const g = geometriaDoAnel();
  const angulo = ([x, y]: Ponto) => { const a = (Math.atan2(y - g.cy, x - g.cx) * 180) / Math.PI; return a < 90 ? a + 360 : a; };
  return comFuros(subcaminhos(marca.logo.nome))
    .sort((a, b) => angulo(a.principal.centro) - angulo(b.principal.centro))
    .map(l => l.d);
}
