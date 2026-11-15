// Gera os ícones PNG a partir do SVG do leão, no build (sem arquivos binários no repositório).
import sharp from 'sharp';
import { svgFavicon } from './marca';

export async function iconePng(tamanho: number, opcoes: { cantos?: boolean; margem?: number } = {}): Promise<Response> {
  // Rasteriza em 2× o tamanho final (supersampling) e reduz: bordas limpas sem estourar memória.
  const svg = Buffer.from(svgFavicon(opcoes).replace('<svg ', `<svg width="${tamanho * 2}" height="${tamanho * 2}" `));
  const png = await sharp(svg)
    .resize(tamanho, tamanho)
    .png({ compressionLevel: 9, palette: tamanho <= 64 })
    .toBuffer();
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
}
