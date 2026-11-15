# Avaliações — Fase 4

## Fonte e atualização

`src/data/avaliacoes.json` é uma cópia integral do arquivo fornecido. Os 56 relatos são uma seleção, não as 766 avaliações completas. O selo usa resumo.nota, resumo.total e fonte.coletadoEm juntos. A distribuição mostra inclusive as notas 1 e 4. Não há atualização automática: atualizar esses dados juntos após nova coleta confirmada, a cada 30–60 dias conforme a fonte.

Texto renderizado literalmente, sem correção de ortografia. Autor usa exclusivamente autorExibicao; nomes de perfil com um só nome permanecem assim, sem inventar sobrenome. Os nomes de funcionários dentro dos textos originais foram preservados. Datas relativas não são reapresentadas como atuais: usamos mesAprox explicitamente como aproximado.

A propriedade negativaParaResponder contém um resumo interno, não o texto literal. Ela não é publicada, nem enviada ao navegador. A lista pública é exatamente avaliacoes. A distribuição integral e o link ao Google ficam disponíveis. Preços e prazos citados em relatos não constituem oferta e recebem contexto na página.

## Componentes e comportamento

- SeloGoogle: nota, total, data e link para loja.googleMaps.
- Depoimento: texto completo, nome abreviado, estrelas, data aproximada e atribuição ao Google.
- CarrosselAvaliacoes: 23 destaqueHome, scroll-snap sem biblioteca; avanço a cada oito segundos apenas enquanto visível. Pausa com hover, foco, aba oculta, preferência de movimento reduzido e comando manual. Anterior/Próxima e interação direta pausam até Retomar. Sem JS, rolagem horizontal nativa e links permanecem.
- `/avaliacoes`: 56 textos estáticos; filtros progressivos e contagem anunciada. Compra de iPhone exige tags compra e iphone. Seminovo não tem correspondência no JSON atual, portanto apresenta estado vazio; não inferimos tags pelo modelo. Filtro preservado em ?tema=.
- AvaliarGoogle: rádios nativos de 1 a 5 e um único link estático. Nota não é armazenada nem enviada. Todas as escolhas levam ao mesmo destino, mesmo sem JS.

O link direto de avaliação continua vazio em loja.linkAvaliar. O fallback é a ficha já confirmada, com instrução para abrir Avaliações e Avaliar. Quando recebido o link do Perfil da Empresa, preencher apenas loja.ts; nenhum destino depende da nota.

Não há iframe, requisição inicial ao Google, cookies, coleta de notas, AggregateRating ou Review em JSON-LD. O JSON completo não faz parte dos módulos JS do navegador; filtros e política de movimento estão em módulos puros separados.

O carrossel foi integrado à home existente. A ordem final de todas as seções, a faixa de confiança e o widget na home serão compostos na Fase 5. O widget já está disponível em /avaliacoes.
