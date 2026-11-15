import { describe,it,expect } from 'vitest';
import { mensagemOrcamento } from '../src/lib/orcamento';
import { mensagensWhatsApp,linkWhatsApp } from '../src/config/whatsapp';
import { servicos } from '../src/config/servicos';
describe('orçamento contextual sem alterar a §10',()=>{
 it('preserva campos opcionais vazios',()=>expect(mensagemOrcamento('','')).toBe(mensagensWhatsApp.assistencia()));
 it('preserva o problema digitado, mesmo em página de serviço',()=>expect(mensagemOrcamento('iPhone 13','toque falhando','troca de tela')).toBe(mensagensWhatsApp.assistencia('iPhone 13','toque falhando')));
 it('não inventa modelo quando apenas o problema foi informado',()=>expect(mensagemOrcamento('','não liga','reparo de placa')).toBe(mensagensWhatsApp.assistencia('','não liga')));
 for(const s of servicos)it(`usa mensagem de serviço para ${s.slug} com modelo informado`,()=>expect(mensagemOrcamento(' Meu modelo ','',s.mensagem)).toBe(mensagensWhatsApp.servico(s.mensagem,'Meu modelo')));
 it('considera espaços como campos vazios',()=>expect(mensagemOrcamento('  ','  ','reparo')).toBe(mensagensWhatsApp.assistencia()));
 it('codifica caracteres especiais sem criar parâmetros adicionais',()=>{const texto=mensagemOrcamento('A&B','tela #1? não liga');const url=new URL(linkWhatsApp(texto));expect(url.searchParams.get('text')).toBe(texto);expect([...url.searchParams.keys()]).toEqual(['text']);});
 it('tem seis slugs exclusivos',()=>expect(new Set(servicos.map(s=>s.slug)).size).toBe(6));
});
