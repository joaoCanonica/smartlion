# QA — Fase 1

- Astro check: 13 arquivos, 0 erros, 0 avisos, 0 sugestões.
- Build estático: 2 rotas (/ e /404.html).
- JavaScript da home: 334 bytes gzip (scripts inline); 404: 0 bytes. Sem bibliotecas JS no cliente.
- Hero AVIF: aproximadamente 6 / 11 / 20 / 35 kB nas larguras 480 / 800 / 1280 / 1920. Tamanhos do build; não são transferência medida em rede.
- Fontes locais: Outfit 600 latino 14.140 bytes; DM Sans 400 latino 14.200 bytes. Preload somente Outfit.
- Contraste calculado: branco/grafite 18,74:1; texto secundário/grafite 10,29:1; texto/verde WhatsApp 7,74:1; texto/cinza-claro 9,11:1; magenta escuro/cinza-claro 8,53:1. Não substitui auditoria visual completa.
- HTML: um H1 por página, imagens com dimensões, noindex nas duas rotas, horários no HTML.
- 15 links WhatsApp no build: 11 home + 4 na 404. Todos com destino 5549999268930 e mensagem geral literal da §10. Nada foi enviado.
- Textos proibidos: 0 ocorrências nas páginas. Sem Product/Review/AggregateRating nesta fase.
- Browser: composição desktop observada; busca tablet retornou iPad/Mac/Watch; acessórios sem acento retornou 2 categorias; clicar Xiaomi limpou o filtro e mostrou todas as categorias.
- Ainda não medidos: Lighthouse, LCP, CLS, INP real, axe, sessão com JS desativado, teclado completo e viewports exatos 390/1440. Não afirmar aprovação nessas metas.

## Medição local

Terminal 1:
```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2 (Chrome instalado):
```sh
pnpm dlx lighthouse http://localhost:4321/ --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --screenEmulation.width=390 --screenEmulation.height=844 --output=html --output-path=./lighthouse-home.html --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:4321/404.html --only-categories=performance,accessibility,best-practices,seo --form-factor=mobile --screenEmulation.width=390 --screenEmulation.height=844 --output=html --output-path=./lighthouse-404.html --chrome-flags="--headless"
```

O noindex intencional da revisão pode reduzir a nota SEO. A avaliação de produção será feita na fase 9, com a configuração final. INP real exige observação de interações reais; não pode ser comprovado por um Lighthouse de navegação.

## Conferência manual

Em DevTools, dimensões 390×844 e 1440×900: conferir cabeçalho, rolagem horizontal restrita aos chips, CTAs sem sobreposição, formulário, rodapé e tabela. Percorrer com Tab/Shift+Tab/Enter; desativar JavaScript e verificar links e horários. Abrir /404.html e retornar ao início. Mapa e slots de produto ainda fora desta fase.
