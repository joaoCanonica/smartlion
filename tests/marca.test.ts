import { describe, expect, it } from 'vitest';
import { marca, svgFavicon } from '../src/lib/marca';

describe('marca (SVG da Smart Lion)', () => {
  it('extrai anel, nome e leão do logo completo', () => {
    for (const parte of [marca.logo.anel, marca.logo.nome, marca.logo.leao]) {
      expect(parte).toMatch(/^M[\d.]/);
      expect(parte.length).toBeGreaterThan(1000);
    }
    expect(marca.logo.viewBox.split(/\s+/)).toHaveLength(4);
  });
  it('o leão isolado é o mesmo desenho do leão do logo', () => {
    expect(marca.leao.d).toBe(marca.logo.leao);
    expect(marca.leao.viewBox).toBe('278 363 796 668');
  });
  it('não leva metadados C2PA para o HTML', () => {
    expect(JSON.stringify(marca)).not.toMatch(/c2pa|metadata/i);
  });
  it('favicon: leão em Branco Gelo sobre Preto Leão, quadrado', () => {
    const svg = svgFavicon();
    expect(svg).toContain('fill="#0B0B0C"');
    expect(svg).toContain('fill="#F5F6F7"');
    const [, , w, h] = svg.match(/viewBox="([^"]+)"/)![1].split(' ').map(Number);
    expect(w).toBe(h);
    expect(svgFavicon({ cantos: false })).toContain('rx="0"');
  });
});

describe('sprite /marca.svg', () => {
  it('tem os símbolos do leão e do logo, com o leão uma vez só', async () => {
    const { svgSimbolos, spriteMarca } = await import('../src/lib/marca');
    const svg = svgSimbolos();
    expect(svg).toContain(`id="${spriteMarca.leao}"`);
    expect(svg).toContain(`id="${spriteMarca.logo}"`);
    expect(svg.split(marca.leao.d).length - 1).toBe(1);
    expect(svg).toContain('x="278" y="363" width="796" height="668"');
  });
});
