# Smart Lion — Fase 9

Node 24.22.1 LTS; pnpm 11.25.0; Astro 7.4.3; TypeScript strict; saída estática.

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm dev
```

`SITE_URL` define a origem. `PUBLIC_INDEXABLE=false` por padrão. Para produção pública, somente após aprovação final, definir `PUBLIC_INDEXABLE=true`. Não existem scripts de analytics nem mapa na carga inicial.

Conferir em 390px e 1440px: navegação horizontal das categorias, botão de WhatsApp, Instagram, foco por teclado, busca de produtos (17 pro max, seminovo, bateria), tabela de horários, 404 e links com JavaScript desativado.

Catálogo, busca e páginas de produto implementados. Os cinco exemplos aparecem apenas em desenvolvimento; nenhum produto sem confirmação é publicado. Consulte docs/CATALOGO.md e docs/QA_FASE_3.md.


## Horário e mensagens

A agenda está em `src/config/loja.ts`; os períodos são minutos desde meia-noite. Exceções são datas ISO com períodos; array vazio de períodos significa fechado. Não adicionar feriados sem confirmação. `src/lib/horario.ts` recebe Date e agenda, sem depender do relógio global. A tabela do rodapé e o status usam os mesmos dados.

Todos os links passam por `linkWhatsApp(texto)`. As 12 mensagens da §10 estão testadas, incluindo a troca condicional. Campos obrigatórios vazios são rejeitados; assistência preserva os campos opcionais vazios; parcelamento usa o fallback explícito “um aparelho”. Não há envio automático nem serviço externo.

## Avaliações

56 textos originais em `src/data/avaliacoes.json`; 23 destaques na home. `/avaliacoes` reúne todos os textos com filtros por tags, distribuição de notas e widget sem filtragem por nota. Consulte `docs/AVALIACOES.md`. Execute `pnpm verify:avaliacoes` após o build.

## Home

Composição da Fase 5 em `src/components/home/`, seguindo §8. Mapa só é solicitado após consentimento específico; recusar mantém endereço e rotas. Consulte docs/HOME.md e docs/QA_FASE_5.md.

## Páginas institucionais

Assistência e seis serviços, curso, sobre, como chegar, FAQ e privacidade disponíveis. Formulário de orçamento apenas prepara a mensagem do WhatsApp. Consulte docs/PAGINAS.md e docs/QA_FASE_6.md.

## Dicas

`/dicas` e três artigos-modelo em Markdown. Rascunhos visíveis apenas em desenvolvimento. Consulte docs/DICAS.md, docs/QA_FASE_7.md e docs/CODIGO_COMPLETO_FASE_7.md.

## SEO/GEO e privacidade

Consulte docs/SEO_GEO_LGPD.md e docs/QA_FASE_8.md. Depois do build, execute `node scripts/verificar-seo.mjs`. Código completo da fase em docs/CODIGO_COMPLETO_FASE_8.md.

## QA final

Status parcial, sem aprovação de lançamento público. Consulte docs/QA_FASE_9.md e docs/PENDENCIAS_FINAIS.md. Scripts de Lighthouse e axe estão em scripts/qa-lighthouse.mjs e scripts/qa-axe.mjs; exigem navegador local.
