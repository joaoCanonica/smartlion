# QA — Fase 8

- Astro check: 88 arquivos, zero erros/avisos/hints.
- Vitest: 186 testes passando em sete arquivos.
- Build: 24 páginas HTML, sitemap, robots e llms.txt.
- Verificação SEO: 24 canônicas únicas, Open Graph com imagem existente, JSON-LD parseável, nenhum iframe no HTML inicial, ausência de Review/AggregateRating/ofertas artificiais.
- Sitemap: 23 URLs, sem rascunhos ou 404. Cinco produtos e três artigos continuam fora da produção.
- Navegador: aceite não carregou iframe (0); clique no mapa criou 1; recusa removeu (0). Reabertura das preferências funcionou, com foco no primeiro botão e retorno ao botão do rodapé após decisão.
- Imagem registrada em preview-fase8.jpg. Largura observada da captura: 1348px; não corresponde às validações finais de 390 e 1440px.

## Orçamento medido

JS gzip por página, incluindo dependências importadas e excluindo JSON-LD (dados, não código executável):

| Rotas | Bytes gzip |
| --- | ---: |
| Home | 7397 |
| Catálogo e suas sete categorias | 3687 |
| Assistência e seis serviços | 2400 |
| Avaliações | 1123 |
| Como chegar | 1024 |
| Dicas, FAQ, privacidade, sobre, curso e 404 | 522 |

Lighthouse, axe, LCP, CLS, INP e auditoria completa de teclado não medidos nesta fase. A Fase 9 trata do QA completo. Não são declarados como aprovados.

## Comandos

```sh
cd /workspace/sites/smartlion
pnpm check
pnpm test
pnpm build
node scripts/verificar-catalogo.mjs
node scripts/verificar-dicas.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

Em 390px e 1440px, conferir botões de consentimento sem corte, mesmo peso visual, foco por Tab, reabertura no rodapé, WhatsApp visível e ausência de mapa antes do clique. Recusar deve manter contato e rota disponíveis. Desabilitar JS e conferir navegação, conteúdo e horários. Conferir canônica e JSON-LD no código-fonte, além de /robots.txt, /sitemap.xml e /llms.txt.

Para Lighthouse (Chrome instalado), iniciar `pnpm preview --port 4321` e, em outro terminal:

```sh
cd /workspace/sites/smartlion
pnpm dlx lighthouse http://localhost:4321/ --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-fase8.html --chrome-flags="--headless"
```

Repetir para cada URL do sitemap na Fase 9. Preview noindex pode reduzir a nota SEO; INP real depende de dados de uso após lançamento.
