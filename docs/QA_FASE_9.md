# QA final — Fase 9 — 30/10/2026

**Status: entrega de QA parcial; lançamento público não aprovado.** Os controles verificáveis nesta sessão passaram, mas Lighthouse/axe e as larguras exatas exigidas não foram executados. Não confundir testes de código com certificação WCAG ou desempenho de campo.

## Correções

O painel claro de consentimento herdava foco rosa claro, apropriado ao fundo escuro. Aplicada a classe light para foco magenta escuro: contraste calculado de 7,02:1 contra o fundo. O botão de preferências foi integrado ao container do rodapé, com altura mínima de 48px e cores explícitas. Nenhum dado comercial foi alterado.

## Evidências executadas

- Astro check: 92 arquivos, 0 erros, 0 avisos, 0 hints.
- Vitest: 186 testes em sete arquivos, todos passaram.
- Build: 24 páginas HTML. Cinco produtos e três artigos rascunho excluídos.
- 102 ocorrências de links WhatsApp verificadas no HTML: número correto, mensagem preenchida, sem undefined/null/PENDENTE. Fonte sem wa.me fora de whatsapp.ts. As mensagens literais continuam cobertas pelos testes existentes.
- 37 imagens: alt presente (incluindo alt vazio decorativo) e dimensões explícitas. 25 variantes AVIF: 4.531 a 36.376 bytes.
- 56 avaliações literais, 23 destaques; cinco notas com o mesmo destino; nenhuma marcação Review/AggregateRating.
- H1 único, IDs únicos, links internos existentes, copy proibida ausente na voz da loja (depoimentos literais não reescritos), ordem das 13 seções da home, prioridade única de imagem, nenhum iframe inicial.
- SEO: canônicas únicas, imagem OG existente, JSON-LD parseável, sitemap sem rascunhos/404, llms.txt com almoço.
- Navegador: Tab e Enter no atalho Pular para conteúdo; busca por 17 pro max, seminovo e bateria encontrou um rascunho correspondente por consulta. Na produção o índice permanece vazio intencionalmente.
- Modal aberto por Enter; foco em Fechar, Shift+Tab permaneceu no diálogo, Tab voltou ao botão; versão/cor atualizaram URL e texto WhatsApp; Esc fechou e devolveu foco ao link de origem.
- Percurso de 38 paradas por Tab no catálogo filtrado, do logo ao WhatsApp flutuante, passando por busca, filtros, produto, consentimento e rodapé. Não houve envio de mensagens.
- Captura preview-fase9.jpg mostra foco corrigido. Viewport da captura 1348px; não é prova de 390/1440px.

## Limites concretos

Não há executável Chrome/Chromium local nos caminhos usuais do ambiente. O navegador remoto está disponível via controle próprio, mas a API documentada não expõe redimensionamento, Lighthouse ou execução de axe. Não foi conectado a ele um depurador externo. Portanto: Lighthouse/axe, capturas exatas 390/1440, teste de todos os links nessas larguras e desligamento real de JavaScript permanecem pendentes. O percurso de teclado registrado é do catálogo, não uma certificação integral de todas as rotas/estados.

Nenhuma nota Lighthouse foi estimada. LCP, CLS e INP não foram medidos. A presença de HTML estático, links e tabela foi conferida, mas não substitui teste com JS desligado. A renderização externa do Google Maps continua pendente; criação e remoção do iframe foram verificadas na Fase 8.

## Medições por rota

JSON-LD não conta como JavaScript executável. Todos os scripts e dependências importadas contam no orçamento. Máximo: 7.397 bytes gzip, abaixo de 30.000.

| Rota | JS gzip (bytes) | HTML (bytes) | Lighthouse P/A/BP/SEO | LCP/CLS/INP |
|---|---:|---:|---|---|
| /404.html | 522 | 12613 | Não medido | Não medido |
| /assistencia-tecnica/apple-watch-airpods/ | 2400 | 19492 | Não medido | Não medido |
| /assistencia-tecnica/ | 2400 | 20913 | Não medido | Não medido |
| /assistencia-tecnica/macbook-ipad/ | 2400 | 19360 | Não medido | Não medido |
| /assistencia-tecnica/placa/ | 2400 | 19255 | Não medido | Não medido |
| /assistencia-tecnica/tampa-traseira/ | 2400 | 19277 | Não medido | Não medido |
| /assistencia-tecnica/troca-de-bateria-iphone/ | 2400 | 19347 | Não medido | Não medido |
| /assistencia-tecnica/troca-de-tela-iphone/ | 2400 | 19269 | Não medido | Não medido |
| /avaliacoes/ | 1123 | 76448 | Não medido | Não medido |
| /catalogo/acessorios/ | 3687 | 24263 | Não medido | Não medido |
| /catalogo/casa-e-games/ | 3687 | 24282 | Não medido | Não medido |
| /catalogo/ | 3687 | 24214 | Não medido | Não medido |
| /catalogo/ipad-mac-watch/ | 3687 | 24329 | Não medido | Não medido |
| /catalogo/iphone/ | 3687 | 24204 | Não medido | Não medido |
| /catalogo/perfumaria/ | 3687 | 24256 | Não medido | Não medido |
| /catalogo/seminovos/ | 3687 | 24414 | Não medido | Não medido |
| /catalogo/xiaomi/ | 3687 | 24204 | Não medido | Não medido |
| /como-chegar/ | 1024 | 19658 | Não medido | Não medido |
| /curso-manutencao-celular/ | 522 | 17173 | Não medido | Não medido |
| /dicas/ | 522 | 15925 | Não medido | Não medido |
| / | 7397 | 81438 | Não medido | Não medido |
| /perguntas-frequentes/ | 522 | 21199 | Não medido | Não medido |
| /privacidade/ | 522 | 17506 | Não medido | Não medido |
| /sobre/ | 522 | 16393 | Não medido | Não medido |

## Reproduzir verificações

```sh
cd /workspace/sites/smartlion
pnpm check
pnpm test
pnpm build
node scripts/verificar-catalogo.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-home.mjs
node scripts/verificar-dicas.mjs
node scripts/verificar-seo.mjs
node scripts/verificar-final.mjs
```

## Executar as medições pendentes localmente

Requer Chrome instalado, Node/pnpm e acesso ao registro npm. Para axe, instalar também ChromeDriver compatível, conforme documentação oficial. Os scripts abaixo tiveram sintaxe validada nesta sessão, mas não execução de navegador.

Terminal 1:

```sh
cd /workspace/sites/smartlion
pnpm build
pnpm preview --port 4321
```

Terminal 2:

```sh
cd /workspace/sites/smartlion
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```

Lighthouse percorre todos os HTML do build com emulação de 390×844, inclusive 404, e salva JSONs e tabela em qa/lighthouse. Falha se qualquer meta não passar. O preview noindex e a 404 podem reduzir SEO; os resultados são preservados sem ajuste artificial. Axe salva JSONs em qa/axe e retorna erro em violações. Ferramentas são obtidas por pnpm dlx e não entram no bundle de produção; cada relatório registra sua versão.

Para repetir em 1440px, usar DevTools → modo responsivo → 1440×900. Em 390×844 e 1440×900: conferir cortes, foco, navegação horizontal dos chips, WhatsApp visível, busca, seleção de versão/cor, Esc, retorno por histórico e consentimento. Desabilitar JavaScript no DevTools e repetir links, horários e páginas diretas. Verificar reduced motion na emulação de mídia. Testar mensagens no WhatsApp sem enviá-las. Repetir nas rotas do sitemap e nos rascunhos somente em pnpm dev.

Fontes dos comandos:
- https://github.com/GoogleChrome/lighthouse/blob/main/readme.md
- https://github.com/dequelabs/axe-core-npm/blob/develop/packages/cli/README.md

## Contraste calculado (pares de tokens)

| Par | Razão |
|---|---:|
| Texto escuro / superfície | 17,02:1 |
| Texto secundário / superfície | 9,11:1 |
| Texto rodapé / grafite | 10,29:1 |
| Texto do WhatsApp / verde | 7,74:1 |
| Foco claro corrigido / superfície | 7,02:1 |
| Foco no escuro / grafite | 7,73:1 |

Esses cálculos não cobrem automaticamente sobreposições de fotos ou todos os estados de componentes.
