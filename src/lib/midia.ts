/**
 * Ponto único de acesso às fotos originais.
 *
 * Os originais ficam em `media-originais/` (fora de `src/assets`) para separar
 * o material bruto do código. O Astro processa qualquer imagem importada pelo
 * módulo, independentemente da pasta: `astro:assets` gera AVIF/WebP no build
 * e nenhum arquivo dessa pasta vai para `dist/` sem passar pela otimização.
 *
 * Regra: componentes e páginas importam fotos daqui, nunca pelo caminho direto.
 */
import loja from '../../media-originais/loja.jpg';
import bancada from '../../media-originais/bancada.jpg';
import caixasDeSom from '../../media-originais/caixas-de-som.jpg';
import capas from '../../media-originais/capas.jpg';
import fones from '../../media-originais/fones.jpg';
import laboratorio from '../../media-originais/laboratorio.jpg';

export const midia = { loja, bancada, caixasDeSom, capas, fones, laboratorio } as const;
export type ChaveMidia = keyof typeof midia;
