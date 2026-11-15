import { describe, expect, it } from 'vitest';
import { avaliacoes, destaques, resumoAvaliacoes, destinoAvaliar, atualizadoEm } from '../src/lib/avaliacoes';
import { correspondeTema } from '../src/lib/temas-avaliacoes';
import { podeAvancarAutomaticamente } from '../src/lib/movimento-avaliacoes';
import { loja } from '../src/config/loja';
import { readFileSync } from 'node:fs';

describe('integridade da fonte', () => {
  it('preserva os 56 depoimentos e os destaques originais', () => {
    expect(avaliacoes).toHaveLength(56);
    expect(destaques).toEqual(avaliacoes.filter(a => a.destaqueHome));
    expect(new Set(avaliacoes.map(a => a.id)).size).toBe(56);
  });
  it('mantém a distribuição completa, incluindo notas baixas', () => {
    expect(Object.values(resumoAvaliacoes.distribuicao).reduce((a,b) => a+b,0)).toBe(resumoAvaliacoes.total);
    expect(resumoAvaliacoes.distribuicao['1']).toBe(2);
    expect(resumoAvaliacoes.distribuicao['4']).toBe(1);
    expect(atualizadoEm).toBe('out/2026');
  });
  it('renderiza o campo abreviado e o texto original sem substituições', () => {
    const fonte = readFileSync('src/components/avaliacoes/Depoimento.astro', 'utf8');
    expect(fonte).toContain('{a.autorExibicao}');
    expect(fonte).toContain('{a.texto}');
    expect(fonte).not.toContain('{a.autor}');
    expect(fonte).not.toContain('set:html');
  });
});
describe('filtros por tema', () => {
  it('todas não remove avaliações por nota ou tema', () => expect(avaliacoes.filter(a => correspondeTema(a.tags,'todas'))).toHaveLength(56));
  it('compra de iPhone não inclui assistência de iPhone', () => {
    expect(correspondeTema(['assistencia','iphone'],'iphone')).toBe(false);
    expect(correspondeTema(['compra','iphone'],'iphone')).toBe(true);
  });
  it('não inventa relatos sobre seminovos', () => expect(avaliacoes.filter(a => correspondeTema(a.tags,'seminovo'))).toHaveLength(0));
  it('filtra região pelo marcador da fonte', () => expect(correspondeTema(['regiao'],'regiao')).toBe(true));
  it('rejeita tema desconhecido', () => expect(correspondeTema(['inventado'],'inventado')).toBe(false));
});
describe('widget sem seleção de destinatário por nota', () => {
  it('usa o link confirmado ou a ficha da loja', () => expect(destinoAvaliar()).toBe(loja.linkAvaliar || loja.googleMaps));
  it('mantém um link estático para todas as cinco opções, sem envio nem coleta', () => {
    const fonte = readFileSync('src/components/avaliacoes/AvaliarGoogle.astro','utf8');
    expect(fonte).toContain('[1,2,3,4,5]');
    expect(fonte.match(/href=/g)).toHaveLength(1);
    expect(fonte).toContain('href={destinoAvaliar()}');
    expect(fonte).not.toMatch(/<script|<form|fetch\(|localStorage/);
  });
});
describe('pausa do carrossel', () => {
  const estado = { pausado:false, reduzido:false, hover:false, foco:false, oculto:false, visivel:true };
  it('só avança quando visível e sem interrupção', () => expect(podeAvancarAutomaticamente(estado)).toBe(true));
  for (const motivo of ['pausado','reduzido','hover','foco','oculto'] as const) it(`não avança com ${motivo}`, () => expect(podeAvancarAutomaticamente({...estado,[motivo]:true})).toBe(false));
  it('não avança fora da tela', () => expect(podeAvancarAutomaticamente({...estado,visivel:false})).toBe(false));
});
