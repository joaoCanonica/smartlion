# R1 — Fundação visual

Entrega em 02/11/2026, branch remodelagem-institucional.

## Mudanças
Tokens grafite/off-white quente/madeira; DM Serif Display + DM Sans locais com swap e preload somente do título. Young Serif restrita à página comparativa. Menu institucional com details nativo; Escape devolve foco e fecha. Busca e chips dentro do catálogo. WhatsApp discreto no cabeçalho e flutuante de 50px. Rodapé com leão, contatos, horário com almoço e widget de notas único. Capitulo claro/escuro e RevelacaoImagem visível por padrão, com movimento reduzido respeitado. Nenhuma página ou componente anterior apagado.

O widget saiu da composição individual da home/avaliações para o rodapé compartilhado. /_estilo é gerada por [estudo].astro porque arquivos iniciados por underscore são ignorados pelo roteamento. Noindex e fora do sitemap. Destinos atuais do menu são temporários até R3–R5, sem URLs quebradas.

## Escolha visual
A comparação lado a lado está em smartlion-r1-fontes.jpg. Escolhida DM Serif Display: título menos denso, menos quebras e contraste mais delicado junto ao leão. Young Serif permanece somente no estudo. Capturas na largura disponível do navegador (1348px), não equivalem a testes de 390/1440px. A faixa amarela é aviso exclusivo de desenvolvimento.

## Validação
- 186 testes, 7 arquivos: passaram.
- Astro check: 96 arquivos, zero erros/avisos/hints.
- Build: 25 páginas; 5 produtos rascunho excluídos.
- JS gzip: /_estilo 2.417 bytes; máximo 7.611 bytes (home existente), limite 30 KB.
- 107 links WhatsApp; 69 imagens com alt/dimensões; IDs únicos; copy proibida ausente na voz da loja.
- 56 avaliações literais preservadas, 23 destaques, 5 notas sem filtragem.
- SEO/canônicas/OG/JSON-LD verificados, sem iframes iniciais.
- Contraste por script: texto 16,91:1; secundário 9,06:1; rodapé 10,29:1; WhatsApp 7,74:1; foco claro 6,98:1; foco escuro 7,73:1; madeira clara no escuro 8,52:1. Não substitui axe ou auditoria completa WCAG.
- Navegador: submenu abre; Escape fecha e devolve foco ao summary; fotografia carregada; comparação visual registrada.
- Não medidos: Lighthouse, axe, LCP, CLS, INP, 390/1440px exatos, JS desligado e reduced-motion no navegador. A API disponível não oferece emulação de viewport. Fallbacks revisados no código.

## Comandos
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-final.mjs
node scripts/verificar-catalogo.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

Abra /_estilo. Em 390px confira menu em duas linhas, submenu dentro da tela, botões, fontes e rodapé. Em 1440px compare fontes lado a lado, fotos e respiro dos capítulos. Tab/Enter/Escape; sem JS: fotos, links e horário devem continuar visíveis. Ative movimento reduzido e confirme ausência de animações.

Para métricas, com Chrome/ChromeDriver locais e o servidor de produção iniciado:
```sh
cd /workspace/sites/smartlion
pnpm preview --port 4321
```
Em outro terminal:
```sh
cd /workspace/sites/smartlion
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```
 /_estilo e previews são noindex intencionalmente; isso pode afetar o score SEO. INP exige coleta de interações/campo, não é medido pelo simples build.

## Pendências
Home institucional R2; tour/história R3; produtos R4; avaliações/visita R5; revisão R6; QA/SEO R7. Fotos reais e autorizações pendentes mantidas. Sem nova pergunta bloqueante.
