# Remodelagem R7 — URLs, SEO e QA parcial

Entrega de 06/11/2026. Código pronto para revisão privada; aprovação final de QA ainda pendente. Não foram reutilizadas medições da tentativa interrompida como resultados desta versão.

## Alterações
- Onze URLs antigas têm regras HTTP 301 em Vercel e em `_redirects`, incluindo variantes com barra final neste último.
- Canônicas, Open Graph e dados estruturados das páginas de compatibilidade apontam ao destino novo. Sitemap exclui as URLs antigas; llms.txt inclui avaliações e privacidade.
- Hierarquia de títulos da página Visite-nos corrigida: H1 seguido de H2. Na home, os detalhes continuam H3; estilo restrito aos detalhes preserva o título da seção.
- Script de teste HTTP cobre 22 variantes, query string e resposta do destino.

## Resultado medido nesta versão
| Verificação | Resultado |
|---|---|
| Vitest | 190 testes aprovados, 8 arquivos |
| Astro check | 109 arquivos; zero erros, avisos e sugestões |
| Build estático | 36 páginas |
| WhatsApp no HTML | 152 links com número e mensagem válidos |
| Avaliações | 56 textos literais; 23 destaques preservados |
| Produtos de exemplo | 5 rascunhos excluídos; nenhum produto publicado |
| Artigos-modelo | 3 rascunhos excluídos |
| JavaScript gzip | Todas as páginas abaixo de 30.000 bytes; tabela em qa-r7/verificacoes.txt |
| Contraste calculado dos pares testados | De 6,98:1 a 16,91:1; não certifica a interface inteira |
| Canônicas e JSON-LD | 36 páginas verificadas; sem Review/AggregateRating |
| Mapa | Nenhum iframe no HTML inicial |
| Redirecionamentos | Configuração e destinos verificados; HTTP da hospedagem ainda pendente |

Lighthouse, axe, LCP, CLS, INP e inspeção visual/teclado não foram medidos nesta entrega. O Chromium não iniciou: `socket() failed: Operation not permitted (1)`. Registro em qa-r7/bloqueio-browser.txt. Não há nota de aprovação para essas verificações. A prévia continua privada e noindex; isso reduz a nota SEO do Lighthouse intencionalmente. INP requer medição de interações e, para validação real, dados de campo.

## Executar e testar
Requisitos: Node conforme engines do package.json, pnpm conforme packageManager e Chrome instalado para auditorias.

```bash
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
for f in scripts/verificar-*.mjs; do node "$f" || exit 1; done
pnpm preview
```

Em outro terminal, com o preview ativo:

```bash
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```

O preview Astro não aplica regras de hospedagem. Em Vercel, após publicar a versão de revisão, executar (substitua pelo endereço real):

```bash
node scripts/qa-redirecionamentos.mjs https://ENDERECO-DA-REVISAO
```

Esse teste exige acesso HTTP sem uma tela intermediária de autenticação. Não habilitar indexação da prévia para melhorar pontuação.

## Conferência no navegador
- Em 390 px: menu, WhatsApp, Instagram e busca acessíveis; nenhum corte horizontal; endereço e horários legíveis; mapa só carrega após aceitar.
- Em 1440 px: manter escala do título Visite-nos na home e os títulos menores nos detalhes; conferir colunas, fotos e foco.
- Usar Tab do início ao fim, Enter nos controles e Esc no menu/modal quando disponível. Repetir com JavaScript desativado e movimento reduzido.
- Em DEV, buscar “17 pro max”, “seminovo” e “bateria”; conferir os slots. Produção permanece sem resultados de produtos enquanto não houver confirmação.
- Testar todos os links WhatsApp sem enviar mensagens e confirmar destino/texto. Não confundir validação de URL com teste de abertura no aplicativo.

## Pendências
QA de navegador acima, HTTP 301 no host final e métricas móveis continuam bloqueando aprovação final. Conteúdo comercial, fotos próprias, produtos confirmados, termos, dados legais, autorização IRP, curso e domínio final continuam conforme PENDENCIAS.md. Nenhum novo dado do cliente foi criado nesta etapa.
