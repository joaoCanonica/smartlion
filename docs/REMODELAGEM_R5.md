# R5 · Avaliações e Visite-nos

A página /avaliacoes mostra o resumo datado do Google e as cinco contagens. As barras representam a proporção de cada nota entre as 766 avaliações. As 56 citações usam o texto e o nome de exibição da fonte. Cada nota do widget leva à mesma ficha do Google. O filtro Compra aceita a tag compra em todas as categorias. O estado vazio em Seminovos corresponde à seleção fornecida.

A página /visite-nos reúne endereço, telefone, WhatsApp, tabela de horários com almoço e rotas Google Maps/Waze. A imagem mostra o interior da loja. A fachada aguarda foto confirmada. O mapa exige interação e consentimento. Menu, links internos, llms.txt e sitemap apontam à nova rota. A configuração Vercel e o arquivo _redirects solicitam 301 de /como-chegar para /visite-nos. A página antiga continua disponível como alternativa em servidores que ignorem as regras.

## Conferência
190 testes passaram. Astro verificou 108 arquivos sem diagnósticos. Build estático com 36 páginas. A verificação de produção conferiu 56 textos literais, 152 links de WhatsApp, 107 imagens com dimensões e alt, um H1 por página e ausência de iframe inicial. JS gzip de /avaliacoes: 1.343 bytes. JS gzip de /visite-nos: 1.238 bytes.

No diretório do projeto:
```sh
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-final.mjs
node scripts/verificar-seo.mjs
node scripts/verificar-catalogo.mjs
pnpm preview --port 4321
```
Em 390 px confira barras e depoimentos em uma coluna, filtro por teclado, horário do almoço e mapa após clique. Em 1440 px confira o resumo ao lado do título e as duas colunas de depoimentos. Confira o endereço e os horários também com JavaScript desativado. As medições de Lighthouse, axe, Core Web Vitals e a inspeção visual nas duas larguras estão pendentes.
```sh
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```
No domínio final, inspecione a resposta HTTP da origem antiga, com e sem barra final, antes de seguir o Location. Confira 301, destino direto e query preservada. O preview Astro estático não interpreta as regras da hospedagem.

## Arquivos
M	docs/PENDENCIAS.md
A	docs/REMODELAGEM_R5.md
A	public/_redirects
M	src/components/home/LojaHome.astro
M	src/config/navegacao.ts
M	src/lib/temas-avaliacoes.ts
M	src/pages/[estudo].astro
M	src/pages/assistencia-tecnica/[servico].astro
M	src/pages/avaliacoes.astro
M	src/pages/curso-manutencao-celular.astro
M	src/pages/llms.txt.ts
M	src/pages/sitemap.xml.ts
A	src/pages/visite-nos.astro
M	src/scripts/filtros-avaliacoes.ts
A	vercel.json
