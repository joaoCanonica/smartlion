# QA — Fase 7

## Resultados medidos

- Astro check: 79 arquivos, zero erros, avisos e hints.
- Vitest: 179 testes passando em seis arquivos; oito novos testes do schema e publicação das dicas.
- Build estático: 24 páginas HTML.
- Verificação do catálogo: links internos, H1, WhatsApp, termos proibidos e exclusão de produtos rascunho aprovados.
- Verificação das dicas: listagem presente; três artigos rascunho ausentes dos arquivos HTML/JS/JSON/XML/TXT do build.

| Página | JavaScript gzip | HTML sem compressão |
| --- | ---: | ---: |
| /dicas | 0 bytes | 11.596 bytes |
| Home (maior JS do site) | 6.790 bytes | 78.105 bytes |

Artigos não têm orçamento de produção medido, pois são excluídos do build. Lighthouse, LCP, CLS e INP não foram medidos nesta fase; não há alegação de aprovação dessas metas.

## Navegador

Verificada a lista de três rascunhos em desenvolvimento e a abertura do artigo Modo Pouca Energia. Conteúdo Markdown, H1/H2, fontes e CTA renderizados. A largura do navegador desta sessão não foi fixada em 390/1440px; a validação dessas duas larguras permanece manual.

## Reproduzir

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
node scripts/verificar-catalogo.mjs
node scripts/verificar-dicas.mjs
pnpm dev
```

Em desenvolvimento, abrir /dicas e os três artigos. Em 390px e 1440px: conferir quebra dos títulos, ausência de rolagem horizontal, leitura das fontes, foco visível com Tab, retorno à listagem e acesso ao WhatsApp. Desativar JavaScript e repetir a navegação; conteúdo e links são HTML estático. Na produção, conferir que /dicas mostra o estado sem artigos e URLs dos rascunhos não existem.

Para medir Lighthouse, em um terminal:

```sh
pnpm preview --port 4321
```

Em outro:

```sh
pnpm dlx lighthouse http://localhost:4321/dicas --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-dicas.html --chrome-flags="--headless"
```

Requer Chrome instalado. O preview permanece noindex; isso pode reduzir SEO no relatório, intencionalmente. Lighthouse não comprova INP de usuários reais; medir em campo após lançamento.
