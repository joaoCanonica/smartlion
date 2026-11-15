# Catálogo — Fase 3

Os cinco JSON em `src/content/produtos/` são exemplos, com `rascunho: true` e `confirmado: false`. Modelos, versões e cores demonstrativos não representam estoque. Use `pnpm dev` para visualizar os slots. A produção omite esses produtos, suas páginas e o índice de busca correspondente.

## Substituição dos slots

1. Edite o JSON da categoria desejada: nome, slug, descrição, versões e cores confirmados pela loja. Remova as opções rotuladas demonstração. IDs devem ser únicos dentro de cada lista.
2. Salve fotos reais em `src/assets/produtos/<slug>/`. Em `imagens`, use caminhos relativos ao JSON, por exemplo `../../assets/produtos/<slug>/frente.jpg`. Preencha `imagensAlt` na mesma ordem. Astro gera AVIF/WebP e dimensões.
3. Preencha condição física, disponibilidade e garantia confirmadas. `encomenda` não implica novo: exige `condicaoFisica` explícita para confirmação. Seminovo confirmado exige os seis meses de garantia da configuração da loja.
4. Sem preço confirmado, mantenha `preco: null` e `precoNota: null`: o site mostra “Sob consulta”. Um preço exige nota com `data` ISO (AAAA-MM-DD), `condicao` e `formaPagamento`. Não há preço inferido nem atualização automática de estoque.
5. Somente após validação comercial: `rascunho: false`, `confirmado: true` e `confirmadoEm` com a data real da confirmação. Foto e descrição são obrigatórias. Slugs duplicados interrompem a geração.
6. Execute `pnpm test`, `pnpm check`, `pnpm build` e `pnpm verify:catalogo` antes de publicar.

## Comportamento

`/catalogo` e sete páginas de categoria funcionam como navegação estática. Busca usa `/busca.json`, gerado no build a partir da mesma coleção filtrada; normaliza acentos. Seminovos também aparecem na categoria correspondente ao tipo do aparelho.

Cards levam à página real `/produto/[slug]`. Com JavaScript, abrem um dialog nativo; Esc e Voltar fecham o modal, restaurando o foco. Versão e cor usam rádios nativos e URL `?versao=…&cor=…`; recarregar abre a página com a seleção. A vitrine da home usa o mesmo componente.

Sem JavaScript, a página, fotos, detalhes e links de WhatsApp continuam disponíveis. A seleção dinâmica não altera a mensagem sem JavaScript; o link estático consulta o produto, e a microcopy explica esse comportamento. Todas as mensagens passam pela configuração central. Esgotado usa “Avise-me quando chegar”. Compartilhamento tenta a API nativa, depois copiar e, por fim, exibe um campo selecionável.

Não há carrinho, checkout, backend, controle de estoque ou produtos reais cadastrados nesta fase.
