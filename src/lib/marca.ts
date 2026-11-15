/**
 * Marca "Leão de Aço": caminhos extraídos em tempo de build dos SVGs entregues
 * em src/assets/marca/ (fonte única; nada é redesenhado à mão).
 *
 * - smartlion-logo.svg: grupos #anel, #nome e #leao (usados para animar na P2).
 * - smartlion-leao.svg: só o leão, com o recorte (viewBox) próprio.
 *
 * Os metadados C2PA dos arquivos originais não vão para o HTML.
 */
import logoBruto from '../assets/marca/smartlion-logo.svg?raw';
import leaoBruto from '../assets/marca/smartlion-leao.svg?raw';

function caminho(svg: string, id?: string): string {
  const padrao = id ? new RegExp(`<path[^>]*\\bid="${id}"[^>]*\\bd="([^"]+)"`) : /<path[^>]*\bd="([^"]+)"/;
  const achado = svg.match(padrao)?.[1];
  if (!achado) throw new Error(`Marca: caminho ${id ?? 'principal'} não encontrado no SVG.`);
  return achado;
}
function viewBox(svg: string): string {
  const achado = svg.match(/<svg[^>]*\bviewBox="([^"]+)"/)?.[1];
  if (!achado) throw new Error('Marca: viewBox ausente.');
  return achado;
}

export const marca = {
  /** Logo completo: anel + nome + leão. */
  logo: { viewBox: viewBox(logoBruto), anel: caminho(logoBruto, 'anel'), nome: caminho(logoBruto, 'nome'), leao: caminho(logoBruto, 'leao') },
  /** Só o leão, com o recorte do arquivo smartlion-leao.svg. */
  leao: { viewBox: viewBox(leaoBruto), d: caminho(leaoBruto) },
} as const;

/**
 * Ícone: leão em Branco Gelo sobre quadrado Preto Leão.
 * `cantos`: arredonda 18% (favicon). Para apple-touch e manifest o quadrado é cheio,
 * porque o sistema aplica a própria máscara. `margem`: respiro em volta do leão.
 */
export function svgFavicon({ cantos = true, margem = 1.3 }: { cantos?: boolean; margem?: number } = {}): string {
  const [x, y, w, h] = marca.leao.viewBox.split(/\s+/).map(Number);
  const lado = Math.max(w, h) * margem;
  const ox = x - (lado - w) / 2, oy = y - (lado - h) / 2;
  const r = cantos ? (lado * 0.18).toFixed(1) : '0';
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${ox.toFixed(1)} ${oy.toFixed(1)} ${lado.toFixed(1)} ${lado.toFixed(1)}"><rect x="${ox.toFixed(1)}" y="${oy.toFixed(1)}" width="${lado.toFixed(1)}" height="${lado.toFixed(1)}" rx="${r}" fill="#0B0B0C"/><path fill="#F5F6F7" fill-rule="evenodd" d="${marca.leao.d}"/></svg>`;
}

/** URL do sprite gerado em src/pages/marca.svg.ts e ids dos símbolos. */
export const spriteMarca = { url: '/marca.svg', leao: 'sl-leao', logo: 'sl-logo' } as const;

/** Sprite com os símbolos da marca (leão e logo completo), servido como /marca.svg. */
export function svgSimbolos(): string {
  // O logo completo reaproveita o símbolo do leão na posição exata (mesmas coordenadas absolutas).
  const [x, y, w, h] = marca.leao.viewBox.split(/\s+/);
  return `<svg xmlns="http://www.w3.org/2000/svg">`
    + `<symbol id="${spriteMarca.leao}" viewBox="${marca.leao.viewBox}"><path fill="currentColor" fill-rule="evenodd" d="${marca.leao.d}"/></symbol>`
    + `<symbol id="${spriteMarca.logo}" viewBox="${marca.logo.viewBox}"><g fill="currentColor" fill-rule="evenodd"><path id="anel" d="${marca.logo.anel}"/><path id="nome" d="${marca.logo.nome}"/></g><use href="#${spriteMarca.leao}" x="${x}" y="${y}" width="${w}" height="${h}"/></symbol>`
    + `</svg>`;
}

/** viewBox "0 0 largura altura" para o <svg> que usa um símbolo (o <use> desenha a partir da origem). */
export function caixaDeUso(viewBox: string): string {
  const [, , l, a] = viewBox.split(/\s+/);
  return `0 0 ${l} ${a}`;
}
