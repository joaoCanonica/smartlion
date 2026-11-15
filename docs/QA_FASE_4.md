# QA — Fase 4

## Medido

- Astro check: 48 arquivos, zero erros, avisos e hints.
- Vitest: 159 testes aprovados, 17 novos para dados, filtros, destino único e política de movimento.
- Build: 11 páginas HTML, índice de busca vazio, cinco rascunhos excluídos.
- verify:avaliacoes: 56 textos literais e nomes de exibição; 23 destaques corretos; cinco rádios; distribuição com notas baixas; sem iframe ou schema de avaliações.
- verify:catalogo: links internos e WhatsApp, H1, rascunhos, termos proibidos e orçamento JS aprovados.

| Página | JS gzip |
|---|---:|
| Home | 2196 bytes |
| /avaliacoes | 601 bytes |
| /catalogo e sete categorias | 2752 bytes por página |
| /404 | 0 bytes |

Home: 51731 bytes de HTML sem compressão. Avaliações: 71514 bytes de HTML sem compressão. A contagem JS soma scripts, imports e inline. Nenhuma dependência nova.

## Navegador

Verificados: 56 relatos iniciais; filtro seminovo com zero; Compra de iPhone com 13; query tema na URL; rádios 1 a 5; seta do teclado de 1 para 2; mesmo link Google em todas as escolhas; Pausar muda para Retomar; Próxima desloca trilho; Anterior por Enter retorna ao início. Foco magenta visível na captura docs/preview-fase4.jpg. Não foi publicada avaliação nem enviada mensagem.

Inspeção visual desktop na viewport disponível, sem certificação das larguras exatas 390/1440. Conteúdo e links sem JS foram verificados no build, mas não houve sessão de navegador com JS desativado. A regra de movimento reduzido e pausa por foco/hover foi testada como função pura; não se simulou preferência de sistema no navegador.

Lighthouse, axe, LCP, CLS e INP não foram medidos nesta fase. Não se declara aprovação WCAG completa com base nesses testes.

## Rodar

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm verify:catalogo
pnpm verify:avaliacoes
pnpm dev
```

## Conferir em 390 e 1440 px

1. Na home, navegue até avaliações; verifique largura, leitura integral e rolagem horizontal sem deslocar a página. Tab deve alcançar Pausar, Anterior, Próxima e links dos relatos; foco deve permanecer visível.
2. Pause, aguarde mais de oito segundos e confirme ausência de avanço. Repita com foco, hover e preferência de movimento reduzido. Sem JS, role manualmente.
3. Abra /avaliacoes; teste todos os temas, inclusive Seminovo vazio. Recarregue com ?tema=iphone. Use Todas para restaurar os 56.
4. No widget, percorra notas com setas, marque 1 e depois 5; ambas devem manter o mesmo destino Google. Nenhuma avaliação é enviada no site.
5. Desative JS: textos, selo, distribuição em details, rádios e link de avaliação continuam disponíveis.

## Medir Lighthouse

Terminal 1:

```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2, com Chrome instalado:

```sh
mkdir -p reports
pnpm dlx lighthouse http://localhost:4321/avaliacoes --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path=reports/avaliacoes --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:4321/ --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path=reports/home --chrome-flags="--headless"
```

Preview intencionalmente noindex pode afetar SEO no Lighthouse. INP de campo exige interações reais; pontuação de laboratório não substitui esses dados.
