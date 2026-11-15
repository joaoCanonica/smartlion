# R6 · Páginas institucionais

A assistência abre com a fotografia real da bancada. O curso abre com a fotografia do laboratório. As seis páginas de serviço compartilham a nova abertura e mantêm o orçamento específico. A página de seminovos leva diretamente à pergunta sobre garantia. Dicas oferece caminhos para Instagram e assistência enquanto os artigos aguardam aprovação. A página 404 oferece início, produtos, assistência e WhatsApp.

## Verificação

190 testes passaram e o Astro verificou 108 arquivos sem diagnósticos. O build gerou 36 páginas. As seis verificações do build passaram. A inspeção do HTML confirmou uma foto com legenda em cada abertura fotográfica e duas colunas de conteúdo na estrutura desktop. JS gzip de assistência e serviços 2.734 bytes, seminovos 4.023 bytes, curso, dicas, FAQ e 404 736 bytes cada.

## Rodar

Na raiz do projeto:
```sh
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm preview --port 4321
```

Em outro terminal na raiz:
```sh
node scripts/verificar-final.mjs
node scripts/verificar-catalogo.mjs
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```

Em 390 px, conferir fotos abaixo dos títulos, botões sem cortes, FAQ por teclado e acesso ao orçamento. Em 1440 px, conferir fotos ao lado dos títulos, lista dos seis serviços, questões abertas e caminhos da página 404. As medições de Lighthouse, axe, Core Web Vitals e a inspeção visual nessas larguras ficam para R7. Produtos e artigos aguardam confirmação já documentada. Nenhuma nova pergunta bloqueante.

## Arquivos criados ou alterados
A	docs/REMODELAGEM_R6.md
M	src/data/perguntas.ts
M	src/layouts/PaginaInstitucional.astro
M	src/pages/404.astro
M	src/pages/assistencia-tecnica/[servico].astro
M	src/pages/assistencia-tecnica/index.astro
M	src/pages/curso-manutencao-celular.astro
M	src/pages/dicas/[slug].astro
M	src/pages/dicas/index.astro
M	src/pages/perguntas-frequentes.astro
M	src/pages/seminovos.astro
