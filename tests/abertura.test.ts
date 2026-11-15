import { describe, expect, it } from 'vitest';
import { marca } from '../src/lib/marca';
import { partesDoLeao, letrasDoNome, geometriaDoAnel, tracoDoAnel } from '../src/components/abertura/geometria';

const pedacos = (d: string) => d.split(/(?=M)/).map(s => s.trim()).sort();

describe('abertura · geometria da marca', () => {
  it('o leão separado em partes usa cada subcaminho original exatamente uma vez', () => {
    const partes = partesDoLeao();
    expect(pedacos(partes.map(p => p.d).join(''))).toEqual(pedacos(marca.logo.leao));
    expect(partes).toHaveLength(15); // 16 subcaminhos, 1 furo preso ao rosto
  });
  it('grupos: núcleo (olhos, focinho, testa) → rosto → juba', () => {
    const partes = partesDoLeao();
    const conta = (g: string) => partes.filter(p => p.grupo === g).length;
    expect([conta('nucleo'), conta('rosto'), conta('juba')]).toEqual([5, 1, 9]);
    expect(partes.map(p => p.grupo)).toEqual([...Array(5).fill('nucleo'), 'rosto', ...Array(9).fill('juba')]);
  });
  it('o nome vira 9 letras na ordem S → N, com os furos de A, R e O', () => {
    const letras = letrasDoNome();
    expect(letras).toHaveLength(9);
    expect(pedacos(letras.join(''))).toEqual(pedacos(marca.logo.nome));
    const primeiroX = (d: string) => Number(d.match(/^M([\d.]+)/)![1]);
    expect(primeiroX(letras[0])).toBeLessThan(primeiroX(letras[8])); // S à esquerda/topo, N à direita
  });
  it('o anel tem um vão de ~98° no alto à direita e o traço cobre o resto no sentido horário', () => {
    const g = geometriaDoAnel();
    expect(g.r).toBeGreaterThan(455);
    expect(g.r).toBeLessThan(470);
    expect(g.vao).toBeGreaterThan(90);
    expect(g.vao).toBeLessThan(105);
    const t = tracoDoAnel();
    expect(t.d).toMatch(/^M[\d. ]+A[\d. ]+0 0 1 [\d. ]+A[\d. ]+0 0 1 [\d. ]+$/);
    expect(t.largura).toBeGreaterThan(g.espessura);
  });
});
