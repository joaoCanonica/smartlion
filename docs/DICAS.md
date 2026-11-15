# Dicas — Fase 7

A coleção `src/content/dicas/*.md` usa o schema `src/schemas/dica.ts`. Os três modelos abordam Modo Pouca Energia, armazenamento do iPhone e atalhos do Mac, temas previstos na §13. Foram escritos a partir de documentação oficial da Apple, com fontes no próprio artigo; não representam transcrições de posts da loja.

Todos têm `rascunho: true`, `confirmado: false`, datas de publicação/revisão, revisor e postOrigem vazios. Nenhum aparece no build de produção. A listagem pública oferece atendimento e Instagram enquanto não houver texto aprovado.

Para publicar: revisar conteúdo técnico e editorial; preencher revisor real, publicadoEm e revisadoEm em YYYY-MM-DD; confirmar a origem do post quando aplicável; marcar confirmado como true e rascunho como false. O schema exige datas e revisor para publicação. Não inventar autoria ou datas. As fontes têm URL HTTPS e data de consulta.

Use apenas H2 ou níveis inferiores no corpo Markdown: o layout fornece o único H1. Slugs duplicados e H1 no corpo interrompem a leitura da coleção. A publicação é estática, sem JavaScript novo. O CTA reutiliza as mensagens existentes da §10, pela função central de WhatsApp. Não há sincronização automática com Instagram.

## Arquivos da implementação

- src/schemas/dica.ts
- src/content.config.ts
- src/lib/dicas.ts
- src/content/dicas/modo-pouca-energia-iphone.md
- src/content/dicas/armazenamento-cheio-iphone.md
- src/content/dicas/atalhos-do-mac.md
- src/pages/dicas/index.astro
- src/pages/dicas/[slug].astro
- src/components/Rodape.astro
- src/components/PendenciasDev.astro
- tests/dicas.test.ts
- scripts/verificar-dicas.mjs
- package.json
- README.md
- docs/DICAS.md
- docs/PENDENCIAS.md
- docs/QA_FASE_7.md
- docs/CODIGO_COMPLETO_FASE_7.md
