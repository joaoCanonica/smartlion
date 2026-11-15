# QA — Fase 5

## Resultados

- Astro check: 59 arquivos, zero erros/avisos/hints.
- Vitest: 159 testes aprovados. Nenhuma dependência adicionada.
- Build: 11 páginas HTML, cinco rascunhos excluídos.
- verify:catalogo e verify:avaliacoes aprovados: links, mensagens, H1, ausência de rascunhos e textos literais preservados.
- verificar-home: ordem das 13 seções, modal único, dimensões/alt de imagens, prioridade alta apenas no hero, nenhum iframe inicial, nota de análise de crédito e nenhum PENDENTE no HTML público.

| Página | JS gzip |
|---|---:|
| Home | 6589 bytes |
| Avaliações | 601 bytes |
| Catálogo e sete categorias | 2963 bytes cada |
| 404 | 0 bytes |

Home: 75660 bytes HTML sem compressão. 25 variantes AVIF referenciadas, entre 4531 e 36376 bytes por arquivo; não é o total baixado pelo visitante, pois o navegador escolhe o srcset. Código compartilhado passou a ser dividido em chunks; pequena diferença nos números do catálogo reflete essa divisão.

## Navegador

Conferidas ordem das seções e ausência de transbordamento horizontal na viewport disponível (1363 px). Mapa: zero iframe inicial, recusa mantém zero, aceitar cria um iframe com título e coordenadas corretas, recusar novamente remove. Renderização do provedor externo não confirmada. Bloco de assistência com foto real inspecionado; foco no CTA visível por teclado. Nenhuma mensagem enviada.

Não foram medidos Lighthouse, axe, LCP, CLS ou INP, nem certificadas as larguras exatas 390/1440. Não houve sessão com JavaScript desativado; fallback conferido pelo HTML. Não declarar cumprimento de todas as metas de performance ou WCAG antes da Fase 9.

## Comandos

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm verify:catalogo
pnpm verify:avaliacoes
node scripts/verificar-home.mjs
pnpm dev
```

## Conferir em 390 e 1440 px

- Percorrer a home inteira: hero → confiança → avaliações → destaques → categorias → assistência → consertar/trocar → parcelamento → Instagram → curso → loja → avaliar → rodapé.
- Conferir fotos sem esticar, chips e Instagram com rolagem horizontal local, ausência de transbordamento da página e botões legíveis.
- Em desenvolvimento, abrir cards das categorias e destaques; deve existir um só dialog, Esc restaura foco e URL.
- Usar Tab nas ações e nos dois botões de mapa. Sem aceitar, não deve haver conexão via iframe com Google. Aceitar carrega; recusar remove. Verificar desenho real do mapa e links Waze/Google.
- Desativar JS: fotos, horário estático, WhatsApp e rotas continuam acessíveis; carrossel rola manualmente.
- Conferir texto codificado do WhatsApp para assistência, troca, parcelamento e curso, sem enviar.

## Medir Lighthouse

Terminal 1:

```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2, Chrome instalado:

```sh
mkdir -p reports
pnpm dlx lighthouse http://localhost:4321/ --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path=reports/home-fase5 --chrome-flags="--headless"
```

Preview noindex é intencional e afeta SEO. INP de campo exige coleta de interações reais; Lighthouse não certifica sozinho o orçamento de campo.
