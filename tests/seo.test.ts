import { describe,it,expect } from 'vitest';
import { dadosEstruturados,jsonSeguro,podeIndexar,urlCanonica } from '../src/lib/seo';
import { perguntas } from '../src/data/perguntas';
import { escolhaValida } from '../src/lib/consentimento';
const site='https://example.com';
describe('SEO e consentimento',()=>{
 it('remove variantes da URL canônica',()=>expect(urlCanonica('/produto/modelo/?cor=azul#x',site)).toBe(site+'/produto/modelo'));
 it('exige autorização e bloqueia preview',()=>{expect(podeIndexar(false,'true','preview')).toBe(false);expect(podeIndexar(true,'true','production')).toBe(false);expect(podeIndexar(false,undefined,'production')).toBe(false);expect(podeIndexar(false,'true','production')).toBe(true);});
 it('preserva almoço nos horários estruturados',()=>{const loja=dadosEstruturados('/','Início',site)['@graph'][0]!;expect(loja.openingHoursSpecification).toMatchObject([{opens:'09:00',closes:'12:00'},{opens:'13:30',closes:'18:30'},{opens:'09:00',closes:'13:00'}]);});
 it('FAQ usa exatamente as respostas visíveis',()=>{const faq=dadosEstruturados('/perguntas-frequentes','FAQ',site)['@graph'].find(x=>x['@type']==='FAQPage');expect(faq?.mainEntity).toEqual(perguntas.map(p=>({'@type':'Question',name:p.pergunta,acceptedAnswer:{'@type':'Answer',text:p.resposta}})));});
 it('não gera avaliações ou ofertas artificiais',()=>{const s=JSON.stringify(dadosEstruturados('/assistencia-tecnica','Assistência',site));expect(s).not.toMatch(/AggregateRating|"Review"|"offers"|priceCurrency/);expect(s).toContain('Service');});
 it('neutraliza fechamento de script',()=>expect(jsonSeguro({name:'</script>'})).not.toContain('<'));
 it('somente escolhas explícitas são válidas',()=>{expect(escolhaValida('aceito')).toBe(true);expect(escolhaValida('recusado')).toBe(true);expect(escolhaValida(null)).toBe(false);expect(escolhaValida('true')).toBe(false);});
});
