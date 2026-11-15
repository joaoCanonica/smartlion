# R3 — A Loja e Nossa História

03/11/2026. Branch remodelagem-institucional.

## Entrega
/a-loja: cinco capítulos, chegada/endereço, produtos e acessórios, balcão, assistência, Centro Técnico; fecha com horário completo, contatos e mapa por consentimento. Entrada acessível confirmada na especificação (Google Maps). Sem foto falsa de fachada: composição tipográfica com endereço. Foto de capas identificada como acessórios, não vitrine de iPhones.

/nossa-historia: manifesto, conteúdo anterior de /sobre preservado, quatro valores com prova em avaliações literais, linha do tempo e estrutura de equipe. Fundação/fundadores não inventados. Equipe oculta em produção até nome, função, foto existente e autorização com data válida. IDs dos relatos: g-012, g-020, g-043, g-035. Os nomes citados pelos próprios clientes permanecem no texto literal; não constituem cadastro de equipe.

historia.json: cinco marcos com fonte, confirmação e ordem; LinhaDoTempo atende a página completa e a prévia da home. Experiência não equivale a fundação, anúncio IRP não equivale a ingresso contratual, turmas não equivalem à inauguração. Registros históricos de avaliações conservam sua data.

Menu e home apontam para as páginas novas; sitemap e llms.txt incluem ambas. /sobre continua com o conteúdo anterior e link para história até implantação/teste do HTTP 301 na migração R7. Nenhum arquivo/página removido. Sem meta refresh apresentado como 301. Canônicas tinham fallback no endereço antigo do Sites: corrigido para a origem atual. SITE_URL continua sendo a configuração prioritária para o domínio definitivo.

## Validação
- 190 testes / 8 arquivos passaram, incluindo autorização de equipe e limites dos marcos históricos.
- Astro check e build passaram sem erros.
- 27 páginas; 5 produtos rascunho excluídos.
- JavaScript gzip: /a-loja 1.469 bytes; /nossa-historia 967 bytes; home 2.919 bytes. Todas abaixo de 30 KB.
- 115 links WhatsApp centralizados; 86 imagens com alt e dimensões; nenhum ID duplicado ou texto proibido na voz da loja.
- 4 citações da história comparadas literalmente ao JSON. Equipe e avisos pendentes ausentes do HTML de produção.
- 5 marcos na história; 3 compartilhados na home. Sitemap, canônicas, OG e JSON-LD verificados, sem Review/AggregateRating e iframe inicial.
- Navegador: abertura do tour, fotografia carregada, navegação pelo menu para história, linha do tempo e H1 único; sem overflow horizontal em 1348px.
- Contrastes por script preservados; não substituem auditoria WCAG completa.
- Não medidos: 390/1440px exatos, Lighthouse/axe, LCP/CLS/INP, JS desligado/reduced-motion manual. A API de navegador disponível não expõe emulação de viewport. Não afirmar metas atingidas sem medição.

## Executar
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-home.mjs
node scripts/verificar-final.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
node scripts/verificar-catalogo.mjs
pnpm dev
```

## Conferência visual
Abra /a-loja e /nossa-historia. Em 390px: textos e fotos em coluna, título sem corte, datas legíveis, nenhuma rolagem horizontal da página; menu/WhatsApp/Instagram acessíveis. Em 1440px: fotos grandes, alternância claro/escuro, valores e citações alinhados, datas à esquerda dos marcos. Tab/Enter/Escape no menu; mapa só por consentimento; conteúdo visível sem JS e movimento desativado em reduced-motion. A faixa amarela aparece somente no desenvolvimento.

Para medir localmente com Chrome e ChromeDriver instalados:
```sh
cd /workspace/sites/smartlion
pnpm preview --port 4321
```
Em outro terminal:
```sh
cd /workspace/sites/smartlion
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```
Preview noindex tem efeito esperado em SEO. INP exige interações/campo e não é inferido do build ou Lighthouse.

## Próxima etapa
R4: /produtos, categorias, páginas de produto e modal como vitrine. Fotos, fundação/fundadores, equipe e validações jurídicas permanecem pendentes. Nenhuma pergunta nova bloqueante.
