# R4 — Produtos como vitrine

04/11/2026. Branch remodelagem-institucional.

## O que mudou
- /produtos com abertura editorial, fotografia real de acessórios, busca e chips internos; seis páginas de categoria e /seminovos.
- Cards, página de produto e modal com disponibilidade discreta e botão “Tirar dúvida no WhatsApp”. Esgotados preservam “Avise-me quando chegar”. Preço somente quando há preço e nota datada.
- Mensagens WhatsApp, rádios nativos, URL com versão/cor, diálogo nativo, compartilhamento e busca preservados. Nenhuma dependência adicionada.
- Menu, home, links internos, sitemap, llms.txt e referências de categoria em JSON-LD apontam aos novos destinos. Função caminhoCategoria centraliza o caso de seminovos.
- Parcelamento em /produtos e FAQ, com análise de crédito, fora da home.
- Nenhum arquivo removido. /catalogo e suas categorias continuam atendendo até o HTTP 301 ser implantado e testado na R7. Não há meta refresh apresentado como 301. /produtos/seminovos não é duplicado: os links apontam diretamente a /seminovos; o alias 301 permanece para R7.

## Conteúdo e slots
Os cinco JSONs de exemplo continuam rascunhos não confirmados: iPhone, seminovo, iPad, Xiaomi e acessório. Não foram inventados preços, modelos disponíveis, fotos ou garantias. Produção apresenta as categorias e conversa com a equipe; desenvolvimento mostra os slots com avisos. A fotografia da abertura representa acessórios, não estoque de um aparelho específico.

## Validações medidas
- 190 testes em 8 arquivos passaram.
- Astro check: 107 arquivos, zero erros, avisos ou sugestões.
- Build estático: 35 páginas. Zero produtos publicados; cinco rascunhos excluídos, inclusive do índice de busca.
- JavaScript gzip de /produtos, categorias e /seminovos: 4.023 bytes por página; home: 2.919 bytes. Todas as rotas geradas abaixo de 30 KB. Não há página de produto pública com dados confirmados para medir nesta entrega.
- Scripts: verificar-home, verificar-final, verificar-avaliacoes, verificar-seo, verificar-catalogo e verificar-vitrine passaram. 148 links de WhatsApp; 104 imagens com alt/dimensões; IDs únicos; copy da loja sem expressões proibidas; sem iframe inicial ou schema de avaliações.
- Navegador em desenvolvimento: busca “17 pro max”, “seminovo” e “bateria” retornaram um slot cada; limpar recuperou cinco. Modal abriu; versão e cor selecionadas entraram no link e na mensagem WhatsApp. Esc fechou, restaurou a URL da busca e devolveu foco ao card.
- Composição visual conferida; largura 1348px, scrollWidth 1348px, H1 único. Captura: smartlion-r4-vitrine.jpg; faixa amarela e slots existem apenas em DEV.
- Sem medição nova de Lighthouse, axe, LCP, CLS ou INP. Não foram emulados 390/1440px exatos, JS desligado ou reduced-motion no navegador. A estrutura estática, links e regras CSS foram preservados; isso não equivale a uma certificação de acessibilidade.

## Comandos
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-vitrine.mjs
node scripts/verificar-catalogo.mjs
node scripts/verificar-home.mjs
node scripts/verificar-final.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

## Como conferir
Em 390px: abertura em coluna; chips roláveis sem ampliar a página; busca e condição empilhadas; botões e rádios alcançáveis por teclado; modal com fechamento visível e Esc; sem rolagem horizontal da página. Em 1440px: título e foto lado a lado, cards sem caixas brancas arredondadas, linhas discretas, abertura das categorias com detalhe lateral. O rodapé e o cabeçalho escuros contrastam com a superfície quente da vitrine.

No desenvolvimento, abra /produtos, busque um slot, escolha versão/cor e confira o texto codificado no link sem enviar mensagem. Recarregue a URL de produto com a query: deve manter as opções. Use Tab/Shift+Tab no modal, depois Esc, e confira retorno do foco. No build, nenhum slot deve aparecer. Sem JavaScript, categorias, páginas, contatos e horários devem continuar acessíveis; a busca informa sua dependência de JS.

Para medições restantes, com Chrome e ChromeDriver instalados:
```sh
pnpm preview --port 4321
```
Em outro terminal:
```sh
cd /workspace/sites/smartlion
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```
O preview privado continua noindex. INP requer interações/campo e não é inferido de Lighthouse ou tamanho do bundle.

## Pendências e próximo passo
Confirmar modelos, versões, cores, fotos e data de confirmação de cada produto; validar condições comerciais vigentes; completar HTTP 301 e QA R7. As pendências jurídicas e fotográficas anteriores permanecem. Nenhuma pergunta nova bloqueia a próxima fase.

R5: avaliações e Visite-nos. Parar e aguardar “siga”.
