// Auditoria de contraste WCAG 2.2 dos pares de tokens de src/styles/tokens.css.
// Uso: node scripts/auditoria-contraste.mjs [--md]   (--md imprime tabela Markdown)
// Sai com código 1 se algum par obrigatório ficar abaixo do mínimo.
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const css = readFileSync(fileURLToPath(new URL('../src/styles/tokens.css', import.meta.url)), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
const bruto = Object.fromEntries([...css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(m => [m[1], m[2].trim()]));
const resolver = (valor, pilha = []) => valor.replace(/var\((--[\w-]+)\)/g, (_, nome) => {
  if (pilha.includes(nome)) throw new Error(`Referência circular em ${nome}`);
  if (!(nome in bruto)) throw new Error(`Token inexistente: ${nome}`);
  return resolver(bruto[nome], [...pilha, nome]);
});
const token = nome => { if (!(nome in bruto)) throw new Error(`Token inexistente: ${nome}`); return resolver(bruto[nome]); };

/** Converte #rgb, #rrggbb ou rgb(r g b / a) em [r,g,b,a]. */
function cor(texto) {
  const t = texto.trim();
  let m = t.match(/^#([0-9a-f]{3,8})$/i);
  if (m) {
    let h = m[1];
    if (h.length <= 4) h = [...h].map(c => c + c).join('');
    const n = h.match(/../g).map(x => parseInt(x, 16));
    return [n[0], n[1], n[2], n[3] === undefined ? 1 : n[3] / 255];
  }
  m = t.match(/^rgba?\(\s*([\d.]+)[\s,]+([\d.]+)[\s,]+([\d.]+)(?:\s*[/,]\s*([\d.]+%?))?\s*\)$/i);
  if (m) {
    const a = m[4] === undefined ? 1 : m[4].endsWith('%') ? parseFloat(m[4]) / 100 : parseFloat(m[4]);
    return [+m[1], +m[2], +m[3], a];
  }
  throw new Error(`Cor não reconhecida: ${texto}`);
}
const compor = (frente, fundo) => { const a = frente[3]; return [0, 1, 2].map(i => frente[i] * a + fundo[i] * (1 - a)).concat(1); };
const lum = ([r, g, b]) => { const c = [r, g, b].map(v => { v /= 255; return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]; };
const razao = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((p, q) => q - p); return (x + 0.05) / (y + 0.05); };

// [frente, fundo, mínimo, uso, (base sob o fundo translúcido)]
// 4.5 = texto normal (AA) · 3 = texto grande ≥ 24px/18,66px negrito ou componente de interface (1.4.11)
const pares = [
  // Capítulos escuros
  ['--cor-texto', '--cor-fundo', 4.5, 'Texto principal no fundo'],
  ['--cor-texto', '--cor-superficie', 4.5, 'Texto em painel grafite'],
  ['--cor-texto', '--cor-superficie-2', 4.5, 'Texto em realce grafite 2'],
  ['--cor-texto-2', '--cor-fundo', 4.5, 'Texto secundário (aço) no fundo'],
  ['--cor-texto-2', '--cor-superficie', 4.5, 'Texto secundário em painel'],
  ['--cor-texto-2', '--cor-superficie-2', 4.5, 'Texto secundário em realce'],
  ['--cor-acento', '--cor-fundo', 4.5, 'Número/rótulo âmbar no fundo'],
  ['--cor-acento', '--cor-superficie', 4.5, 'Número/rótulo âmbar em painel'],
  ['--cor-acento', '--cor-superficie-2', 4.5, 'Âmbar em realce'],
  ['--cor-fundo', '--cor-acento', 4.5, 'Texto preto em botão âmbar'],
  ['--cor-texto', '--vidro-bg', 4.5, 'Texto em vidro escuro sobre o fundo', '--cor-fundo'],
  ['--cor-texto-2', '--vidro-bg', 4.5, 'Texto secundário em vidro escuro', '--cor-fundo'],
  ['--cor-acento', '--vidro-bg', 4.5, 'Âmbar em vidro escuro', '--cor-fundo'],
  ['--cor-foco', '--cor-fundo', 3, 'Anel de foco no fundo'],
  ['--cor-foco', '--cor-superficie', 3, 'Anel de foco em painel'],
  ['--cor-linha', '--cor-fundo', 3, 'Linha ativa / borda de campo (aço)'],
  ['--cor-whatsapp-texto', '--cor-whatsapp', 4.5, 'Texto do botão de WhatsApp'],
  ['--cor-whatsapp', '--cor-fundo', 3, 'Botão de WhatsApp no fundo escuro'],
  // Capítulos claros
  ['--cor-texto-escuro', '--cor-fundo-claro', 4.5, 'Texto em capítulo claro'],
  ['--cor-texto-escuro', '--cor-superficie-clara', 4.5, 'Texto em painel claro'],
  ['--cor-texto-2-escuro', '--cor-fundo-claro', 4.5, 'Texto secundário em capítulo claro'],
  ['--cor-texto-2-escuro', '--cor-superficie-clara', 4.5, 'Texto secundário em painel claro'],
  ['--cor-acento-escuro', '--cor-fundo-claro', 4.5, 'Âmbar escuro em capítulo claro'],
  ['--cor-acento-escuro', '--cor-superficie-clara', 4.5, 'Âmbar escuro em painel claro'],
  ['--cor-fundo-claro', '--cor-texto-escuro', 4.5, 'Botão invertido (gelo sobre preto)'],
];
// Pares dos apelidos antigos, ainda em uso até a P6 (informativos; também obrigatórios enquanto existirem).
const legados = [
  ['--white', '--ink', 4.5, 'Legado: texto branco no grafite'],
  ['--muted', '--ink', 4.5, 'Legado: texto secundário no grafite'],
  ['--ink', '--surface', 4.5, 'Legado: texto no creme'],
  ['--text-dark', '--surface', 4.5, 'Legado: texto secundário no creme'],
  ['--wood', '--surface', 3, 'Legado: madeira (decorativa/grande) no creme'],
  ['--wood-light', '--ink', 4.5, 'Legado: madeira clara no grafite'],
  ['--accent-light', '--ink', 3, 'Legado: foco magenta no grafite'],
  ['--focus-light', '--surface', 3, 'Legado: foco magenta escuro no creme'],
];

const linhas = [];
let falhas = 0;
for (const [grupo, lista] of [['Leão de Aço', pares], ['Legado (sai na P6)', legados]]) {
  for (const [f, b, minimo, uso, base] of lista) {
    let fundo = cor(token(b));
    if (fundo[3] < 1) fundo = compor(fundo, cor(token(base ?? '--cor-fundo')));
    const frente = compor(cor(token(f)), fundo);
    const r = razao(frente, fundo);
    const ok = r >= minimo;
    if (!ok) falhas++;
    linhas.push({ grupo, f, b: base ? `${b} sobre ${base}` : b, r, minimo, ok, uso });
  }
}

if (process.argv.includes('--md')) {
  console.log('| Grupo | Frente | Fundo | Razão | Mínimo | Resultado | Uso |\n|---|---|---|---:|---:|---|---|');
  for (const l of linhas) console.log(`| ${l.grupo} | \`${l.f}\` | \`${l.b}\` | ${l.r.toFixed(2)}:1 | ${l.minimo}:1 | ${l.ok ? 'passa' : '**FALHA**'} | ${l.uso} |`);
} else {
  for (const l of linhas) console.log(`${l.ok ? 'ok   ' : 'FALHA'} ${l.r.toFixed(2).padStart(5)}:1 (mín ${l.minimo}) ${l.f} / ${l.b} · ${l.uso}`);
}
console.log(`\n${linhas.length - falhas}/${linhas.length} pares passam.`);
if (falhas) process.exitCode = 1;
