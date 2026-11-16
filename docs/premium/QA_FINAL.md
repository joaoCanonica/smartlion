# QA final e publicação (P8)

Medido em 16/11/2026, no build final (`SITE_URL=https://smartlion.vercel.app`), servido por `pnpm preview`. Os números do Lighthouse usam `PUBLIC_INDEXABLE=true` só para medir o SEO de verdade. **A produção continua `noindex`** até o João aprovar (ver "Pendências").

## Resumo × metas do AGENTS.md §5

| Métrica | Meta | Antes (linha de base, P0) | Depois (P8) | Situação |
|---|---|---|---|---|
| Performance mobile (390×844) | ≥ 95 | 100 em 36 rotas | **100 em 35/35** | ok |
| Performance desktop | ≥ 95 | não medido | **100 em 35/35** | ok |
| Acessibilidade | 100 | 100 | **100** mobile e desktop | ok |
| Boas práticas | ≥ 95 | 96 | **100** | ok |
| SEO | ≥ 95 | 69 (noindex) | **100** em 34 rotas | ok; a 404 fica em 66 por `noindex` de propósito |
| LCP mobile (4G simulado, com abertura) | < 2,0 s | máx. 1.583 ms; home 1.582 | **máx. 1.741 ms**, em `/produtos/perfumaria`; **home 1.052 ms** | ok |
| LCP desktop | — | — | máx. 465 ms | ok |
| CLS | < 0,05 | máx. 0,016 | **mobile máx. 0,019 · desktop máx. 0,028** | ok |
| INP | < 200 ms | não medido | ver "3D e interação" | não medido em campo |
| JS inicial (gzip, sem a ilha 3D) | ≤ 40 KB | 1,7–7,5 KB | **2,6–9,4 KB**; home 9,4 | ok |
| Ilha 3D do leão (gzip) | ≤ 170 KB | — | **163,3 KB** (Three + ambiente 141,5 + leão 21,8) | ok |
| Ilha 3D do reparo (gzip) | ≤ 170 KB | — | **144,7 KB** (Three + ambiente 141,5 + reparo 3,3) | ok |
| axe (WCAG 2.2 A/AA + best-practice) | 0 | 0 WCAG; 1 `region` | **0 em 35 rotas × 390/1440** | ok |
| Contraste dos tokens | AA | 33/33 | **31/31** (os pares legados saíram na P6) | ok |
| Testes · `astro check` · verificadores | verdes | — | **208/208 · 0 erros · 7/7** | ok |

O LCP máximo mobile subiu de 1.583 para 1.741 ms em relação à linha de base, porque o topo das páginas de produtos ganhou foto real. Mesmo assim fica 259 ms abaixo da meta, e a home, que tem a abertura, caiu de 1.582 para 1.052 ms.

## Lighthouse por rota: antes × depois

Formato de cada célula: Performance / Acessibilidade / Boas práticas / SEO · LCP · CLS.
- "Antes": linha de base da P0, mobile, build `noindex`.
- "Depois": P8, build indexável para medição.
- As rotas `/catalogo/*`, `/sobre` e `/como-chegar` respondem 301 na Vercel; aqui aparecem como páginas porque o `pnpm preview` não aplica os redirecionamentos.
- Tabelas completas em `qa/lighthouse/RESULTADOS.md` e `qa/lighthouse/desktop/RESULTADOS.md`. Esses arquivos ficam fora do git: regenere com os comandos do fim deste documento.

| Rota | Antes (P0) P/A/BP/SEO · LCP · CLS | Depois mobile P/A/BP/SEO · LCP · CLS | Depois desktop P/A/BP/SEO · LCP · CLS |
|---|---|---|---|
| / | 100/100/96/69 · 1582 ms · 0.000 | 100/100/100/100 · 1052 ms · 0.019 | 100/100/100/100 · 465 ms · 0.000 |
| /404.html | 100/100/96/69 · 1312 ms · 0.016 | 100/100/100/66 · 1504 ms · 0.000 | 100/100/100/66 · 203 ms · 0.000 |
| /a-loja/ | 100/100/96/69 · 761 ms · 0.000 | 100/100/100/100 · 908 ms · 0.000 | 100/100/100/100 · 246 ms · 0.000 |
| /assistencia-tecnica/ | 100/100/96/69 · 1502 ms · 0.000 | 100/100/100/100 · 903 ms · 0.000 | 100/100/100/100 · 245 ms · 0.000 |
| /assistencia-tecnica/apple-watch-airpods/ | 100/100/96/69 · 755 ms · 0.000 | 100/100/100/100 · 904 ms · 0.000 | 100/100/100/100 · 245 ms · 0.001 |
| /assistencia-tecnica/macbook-ipad/ | 100/100/96/69 · 753 ms · 0.000 | 100/100/100/100 · 906 ms · 0.000 | 100/100/100/100 · 245 ms · 0.001 |
| /assistencia-tecnica/placa/ | 100/100/96/69 · 758 ms · 0.000 | 100/100/100/100 · 902 ms · 0.000 | 100/100/100/100 · 245 ms · 0.002 |
| /assistencia-tecnica/tampa-traseira/ | 100/100/96/69 · 754 ms · 0.000 | 100/100/100/100 · 906 ms · 0.000 | 100/100/100/100 · 241 ms · 0.002 |
| /assistencia-tecnica/troca-de-bateria-iphone/ | 100/100/96/69 · 755 ms · 0.000 | 100/100/100/100 · 903 ms · 0.000 | 100/100/100/100 · 247 ms · 0.002 |
| /assistencia-tecnica/troca-de-tela-iphone/ | 100/100/96/69 · 752 ms · 0.000 | 100/100/100/100 · 903 ms · 0.000 | 100/100/100/100 · 248 ms · 0.002 |
| /avaliacoes/ | 100/100/96/69 · 751 ms · 0.007 | 100/100/100/100 · 904 ms · 0.000 | 100/100/100/100 · 263 ms · 0.000 |
| /catalogo/ | 100/100/96/69 · 1582 ms · 0.000 | 100/100/100/100 · 1658 ms · 0.000 | 100/100/100/100 · 388 ms · 0.000 |
| /catalogo/acessorios/ | 100/100/96/69 · 906 ms · 0.000 | 100/100/100/100 · 1729 ms · 0.000 | 100/100/100/100 · 243 ms · 0.000 |
| /catalogo/casa-e-games/ | 100/100/96/69 · 904 ms · 0.000 | 100/100/100/100 · 1733 ms · 0.000 | 100/100/100/100 · 246 ms · 0.000 |
| /catalogo/ipad-mac-watch/ | 100/100/96/69 · 907 ms · 0.000 | 100/100/100/100 · 1735 ms · 0.000 | 100/100/100/100 · 243 ms · 0.000 |
| /catalogo/iphone/ | 100/100/96/69 · 905 ms · 0.000 | 100/100/100/100 · 1734 ms · 0.000 | 100/100/100/100 · 243 ms · 0.000 |
| /catalogo/perfumaria/ | 100/100/96/69 · 905 ms · 0.000 | 100/100/100/100 · 1733 ms · 0.000 | 100/100/100/100 · 244 ms · 0.000 |
| /catalogo/seminovos/ | 100/100/96/69 · 906 ms · 0.000 | 100/100/100/100 · 1733 ms · 0.000 | 100/100/100/100 · 391 ms · 0.000 |
| /catalogo/xiaomi/ | 100/100/96/69 · 905 ms · 0.000 | 100/100/100/100 · 1730 ms · 0.000 | 100/100/100/100 · 243 ms · 0.000 |
| /como-chegar/ | 100/100/96/69 · 751 ms · 0.000 | 100/100/100/100 · 904 ms · 0.000 | 100/100/100/100 · 244 ms · 0.000 |
| /curso-manutencao-celular/ | 100/100/96/69 · 1508 ms · 0.000 | 100/100/100/100 · 1583 ms · 0.000 | 100/100/100/100 · 349 ms · 0.028 |
| /dicas/ | 100/100/96/69 · 757 ms · 0.000 | 100/100/100/100 · 906 ms · 0.000 | 100/100/100/100 · 244 ms · 0.000 |
| /nossa-historia/ | 100/100/96/69 · 754 ms · 0.008 | 100/100/100/100 · 903 ms · 0.005 | 100/100/100/100 · 242 ms · 0.000 |
| /perguntas-frequentes/ | 100/100/96/69 · 756 ms · 0.000 | 100/100/100/100 · 906 ms · 0.000 | 100/100/100/100 · 371 ms · 0.000 |
| /privacidade/ | 100/100/96/69 · 1304 ms · 0.000 | 100/100/100/100 · 903 ms · 0.000 | 100/100/100/100 · 367 ms · 0.000 |
| /produtos/ | 100/100/96/69 · 1504 ms · 0.000 | 100/100/100/100 · 1659 ms · 0.000 | 100/100/100/100 · 388 ms · 0.000 |
| /produtos/acessorios/ | 100/100/96/69 · 903 ms · 0.000 | 100/100/100/100 · 1729 ms · 0.000 | 100/100/100/100 · 366 ms · 0.000 |
| /produtos/casa-e-games/ | 100/100/96/69 · 906 ms · 0.000 | 100/100/100/100 · 1733 ms · 0.000 | 100/100/100/100 · 246 ms · 0.000 |
| /produtos/ipad-mac-watch/ | 100/100/96/69 · 906 ms · 0.000 | 100/100/100/100 · 1730 ms · 0.000 | 100/100/100/100 · 246 ms · 0.000 |
| /produtos/iphone/ | 100/100/96/69 · 902 ms · 0.000 | 100/100/100/100 · 1734 ms · 0.000 | 100/100/100/100 · 243 ms · 0.000 |
| /produtos/perfumaria/ | 100/100/96/69 · 904 ms · 0.000 | 100/100/100/100 · 1741 ms · 0.000 | 100/100/100/100 · 348 ms · 0.000 |
| /produtos/xiaomi/ | 100/100/96/69 · 905 ms · 0.000 | 100/100/100/100 · 1731 ms · 0.000 | 100/100/100/100 · 245 ms · 0.000 |
| /seminovos/ | 100/100/96/69 · 903 ms · 0.000 | 100/100/100/100 · 1731 ms · 0.000 | 100/100/100/100 · 390 ms · 0.000 |
| /sobre/ | 100/100/96/69 · 754 ms · 0.000 | 100/100/100/100 · 906 ms · 0.000 | 100/100/100/100 · 369 ms · 0.000 |
| /visite-nos/ | 100/100/96/69 · 1506 ms · 0.000 | 100/100/100/100 · 1462 ms · 0.000 | 100/100/100/100 · 349 ms · 0.000 |

## Correções feitas nesta auditoria

1. **CSP por hash.**
   - `security.csp` do Astro: o hash de cada `<script>` e `<style>` vai num `<meta http-equiv>` em cada página. Não há `'unsafe-inline'` em script nem em style.
   - Os dois scripts `is:inline` (abertura e marcação `html.js`) ficaram em módulos (`src/lib/abertura-inicio.mjs`, `src/lib/marcar-js.mjs`), e o `astro.config.mjs` calcula o hash do mesmo texto.
   - O HTML não tem mais nenhum atributo `style=""`. Cores de produto e barras das avaliações passaram a SVG com `fill`/`width`; os padrões das linhas e o deslocamento das camadas usam classes; a largura do contador é reservada via CSSOM.
   - O 3D não precisou de exceção: sem eval, wasm ou worker, com texturas em `<canvas>`.
   - Navegando nas 35 rotas × 2 larguras (com 3D, abertura, mapa com consentimento e reparo), houve **0 violações**.
2. **Cabeçalhos** (`vercel.json`):
   - HSTS de 2 anos com `preload`;
   - `Referrer-Policy: strict-origin-when-cross-origin`;
   - `Permissions-Policy` fechada, com `gyroscope`/`accelerometer` só em `self` para o leão reagir à inclinação no celular;
   - `X-Content-Type-Options`, `X-Frame-Options: DENY`, `COOP` e uma CSP de cabeçalho só com `frame-ancestors 'none'`, que não funciona em `<meta>`.
   - Cache: `/_astro/*` (assets com hash) com `max-age=31536000, immutable`. Ícones, sprite, manifest e `busca.json` com 1 h e `must-revalidate`.
3. **CLS na troca de fonte**, que chegava a 0,057 em `/assistencia-tecnica` no desktop:
   - `max-width: Nch` → `em`: o "0" da fonte web é bem mais largo que o do fallback (Sora 0,756 em × 0,598 em), e a linha quebrava em outro lugar. A conversão foi feita pela razão medida de cada fonte (37 ocorrências). Mesma largura final: capturas idênticas pixel a pixel às da P6.
   - `size-adjust` dos fallbacks recalibrado pela largura média dos 98 títulos reais do site: Sora 600 107,46 → 106,59%; Inter Tight 400 96,45 → 95,74%.
   - Abas do reparo em grade 2×2 fixa entre 901 e 1.439 px, onde não cabem numa linha, e o título do painel reserva 2 linhas nessa faixa.
   - A trilha "Início / …" fica numa linha só, com reticências no item atual.
   - `html.js` passou a ser marcado no `<head>`: o reparo já pinta abas e um só painel. O seletor exigiu `:global()`, porque o escopo do Astro impedia o `.js` de casar com o `<html>`.
   - Resultado: **CLS máximo 0,019**, medido em 35 rotas × 1440/1350/1100/390 px.
4. **Reflow em 320 px:** a grade de linhas da home vira 1 coluna. Antes, "Seminovos" e "Perfumaria" eram cortados.
5. **QA:** o `qa-axe.mjs` usa `bypassCSP`, porque a CSP do site bloqueia a injeção do axe-core, o que confirma que ela funciona. O `qa-lighthouse.mjs` ganhou `QA_LH_DESKTOP=1`.

## Acessibilidade (roteiro manual automatizado)

Arquivos: [`p8/roteiro-acessibilidade.txt`](p8/roteiro-acessibilidade.txt) e [`p8/arvore-acessibilidade.txt`](p8/arvore-acessibilidade.txt) (leitor de tela: árvore ARIA de 5 páginas).

- **Teclado, em 390 e 1440 px:**
  - abertura → Tab no "Pular abertura" → Enter (a abertura some);
  - "Pular para o conteúdo" → Enter (o foco vai para `<main>`);
  - hero: "Conheça a loja" e "Fale conosco";
  - menu mobile: Enter abre, Tab entra no painel, Esc fecha e devolve o foco ao botão;
  - reparo: as setas movem o foco e Enter escolhe;
  - Tab → "Pedir orçamento" e, por fim, o WhatsApp flutuante, com a mensagem "Olá, Smart Lion!".
- **Anel de foco:** 1.604 paradas de Tab em 25 rotas × 2 larguras, **0 sem anel visível** (âmbar, 2 px).
- **Leitor de tela:** landmarks, um `h1` por página e hierarquia de títulos sem saltos em 25 rotas; reparo como `tablist`/`tab [selected]`/`tabpanel` nomeado; números do contador com o valor final em texto.
- **reduced-motion:** sem abertura, sem canvas, 0 animações em execução e nenhuma ilha 3D baixada; fica o pôster. Captura em [`p8/reduzido-home-1440.jpg`](p8/reduzido-home-1440.jpg).
- **Zoom 200%** (1280 → 640 px CSS) e **reflow em 320 px:** nenhuma rolagem horizontal nem texto cortado em 25 rotas. Na trilha de navegação, o item atual pode terminar em reticências, mas o título completo é o `h1` logo abaixo. Capturas em [`p8/zoom-200-assistencia.jpg`](p8/zoom-200-assistencia.jpg) e [`p8/zoom-320-home.jpg`](p8/zoom-320-home.jpg).
- **Sem JavaScript:** `h1`, títulos visíveis e WhatsApp em 25 rotas. O reparo mostra os 4 serviços empilhados e o menu vira o link para o rodapé (`qa:reparo`, `qa:teclado`). Capturas em [`p8/sem-js-home-390.jpg`](p8/sem-js-home-390.jpg) e [`p8/sem-js-assistencia-390.jpg`](p8/sem-js-assistencia-390.jpg).
- **Sem WebGL** (`--disable-webgl --disable-3d-apis`): o leão fica no pôster (motivo "sem WebGL2") e o reparo na ilustração. Nenhum canvas, nenhuma ilha baixada, nenhum erro. Captura em [`p8/sem-webgl-home-1440.jpg`](p8/sem-webgl-home-1440.jpg).

## 3D e interação

Este contêiner **não tem GPU**: todo WebGL roda no SwiftShader, na CPU. Os fps abaixo são o piso de uma máquina sem aceleração, não o que um aparelho real entrega.

| Medida | Resultado |
|---|---|
| Leão, desktop 1440, girando com o mouse (sem a desistência adaptativa) | 9,7 fps no SwiftShader. Com GPU real, o limite é o rAF de 60 fps; numa máquina lenta assim, a cena desiste sozinha e volta ao pôster |
| Leão, tempo de carga da ilha até o 1º quadro | 383 ms |
| Reparo, desktop, transição de 800 ms | 19,9 fps; parado, **0 quadros** (renderização sob demanda) |
| "Android médio" emulado (412×915, DPR 2,625, toque, CPU 4×) | leão no pôster ("tela estreita"), sem baixar ilha; reparo só pelo botão "Ver em 3D": transição a 3,3 fps (SwiftShader + CPU 4×), parado 0 quadros |
| Memória, desktop: entra e sai da seção do reparo 3 vezes, trocando a camada | heap JS 3,9 → 5,3 → 5,5 → 5,6 MB. Nenhum elemento novo depois do 1º ciclo (só o canvas e o CSS da ilha). Sem vazamento |
| Memória, 3 navegações home ⇄ assistência | heap 4,0 / 4,0 / 4,0 MB e 1.412 nós nas três (o `pagehide` destrói as cenas) |
| Memória, "Android": 3 ciclos com o 3D aberto | 4,7 → 4,8 → 4,9 MB |
| **Save-Data** (cabeçalho e `navigator.connection.saveData`) | nenhuma ilha baixada em home e assistência; leão com motivo "economia de dados" |

**INP:** não é medido pelo Lighthouse em navegação. Para medir em campo, no Chrome de um Android real, use DevTools → Performance → Interactions, tocando em: menu, abas do reparo, "Ver em 3D", filtros das avaliações e busca do catálogo. A pendência está listada abaixo.

## Acabamento (diretor de arte)

- **Capturas antes × depois:**
  - antes: [`p6/`](p6/), todas as rotas, e a linha de base;
  - depois: [`p8/depois/`](p8/depois/), com home, assistência, avaliações, produtos e 404 em 390/1440.
  - Comparação pixel a pixel P6 × P8 nas 50 capturas: **46 idênticas**. As diferenças:
    - home: o quadro da animação do leão e o status "aberto/fechado", que muda com a hora;
    - avaliações a 1440: a coluna dos números das barras ficou 8 px mais larga e não depende mais da fonte carregada.
- **Abas do reparo em 1.100 px:** [`p8/reparo-abas-1100.jpg`](p8/reparo-abas-1100.jpg), grade 2×2 alinhada.
- **Palavras órfãs:** 0 em h1/h2/h3, em 35 rotas × 390/1440 (verificado na P6, e a P8 não muda nenhum texto).
- **Aspas e reticências retas:** nenhuma no texto da loja. A única é "finalização..." dentro de uma avaliação literal, que é preservada como escrita.
- **Acentos:** nenhuma palavra sem acento no texto da loja. As formas sem acento aparecem só em URLs (`/assistencia-tecnica`…).
- **Caixa alta:** só via CSS, nos rótulos em Michroma. No texto, aparecem em caixa alta apenas siglas e nomes (IRP, LGPD, ANPD, CEP, POCO, WAXLO) e a assinatura "SMART LION · LAGES · SC" da marca.
- **Títulos:** os enunciados terminam em ponto (33 h2); rótulos de seção, menus e os subtítulos da privacidade ficam sem ponto, de forma coerente dentro de cada página.

## Conferência de regras (AGENTS.md §2)

| Regra | Resultado |
|---|---|
| "autorizada Apple" / "assistência autorizada" | **0** ocorrências |
| Preço (`R$`) | **0** ocorrências |
| Superlativos na voz da loja | 0. "Melhor loja…" e "Melhor atendimento da cidade" aparecem só em **avaliações literais de clientes**, com nome e inicial |
| Marcas como enfeite | nenhum logo de marca ou maçã decorativa. O "G" do Google só aparece como atribuição das avaliações |
| Avaliações literais | `verificar-avaliacoes`: 56 textos literais, sem `AggregateRating`/`Review` no JSON-LD |
| IRP | todas as menções usam "Assistência técnica participante do programa Independent Repair Provider (IRP) da Apple" ou "participação no programa Independent Repair Provider (IRP) da Apple" (marco da linha do tempo) |
| LGPD / mapa | nenhum `<iframe>` no HTML inicial de nenhuma rota. O mapa só carrega depois do consentimento e do clique, e a CSP só libera `frame-src https://www.google.com` |

## Publicação (Vercel)

- **Projeto:** Vercel `smartlion`, time "Joao Canonica's projects", ligado ao GitHub `joaoCanonica/smartlion`.
- **Deploy de produção:** `dpl_BQaXFTvTiB8eeQ62ucV7utTwxXTH`, do commit `8e3a900` da branch `claude/great-shannon-lkkb9f`, publicado em `https://smartlion.vercel.app`. O build na Vercel gerou as 35 páginas em 32 s, sem erros.
- **Variável de produção:** `SITE_URL=https://smartlion.vercel.app` (criada nesta sessão). `PUBLIC_INDEXABLE` **não** foi criada: aguarda a aprovação do João.
- **Conferido em produção** em 16/11/2026, pela ferramenta da Vercel, porque a rede deste ambiente bloqueia `*.vercel.app`:

| Item | Resultado |
|---|---|
| Home | 200; HTML da P8 com `<meta http-equiv="content-security-policy">` (36 hashes SHA-256) e `noindex,nofollow` |
| canonical | `https://smartlion.vercel.app/` na home; `/sobre` → 301 → `/nossa-historia`, com canonical `https://smartlion.vercel.app/nossa-historia` |
| Open Graph | `og:url` e `og:image` absolutos em `smartlion.vercel.app`; a imagem responde 200 `image/jpeg` |
| sitemap.xml | 200, 24 URLs, todas em `https://smartlion.vercel.app/…`, sem rascunhos nem 404 |
| robots.txt | `Disallow: /`, correto enquanto o site está noindex; vira `Allow` com `PUBLIC_INDEXABLE=true` |
| Cabeçalhos (todas as respostas) | `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload` · `Referrer-Policy: strict-origin-when-cross-origin` · `Permissions-Policy` (câmera, microfone, geolocalização, pagamento etc. fechados; giroscópio e acelerômetro só `self`) · `X-Content-Type-Options: nosniff` · `X-Frame-Options: DENY` · `Cross-Origin-Opener-Policy: same-origin` · `Content-Security-Policy: frame-ancestors 'none'; object-src 'none'; base-uri 'self'` |
| Cache | HTML `max-age=0, must-revalidate`; `/_astro/*` `public, max-age=31536000, immutable` (conferido na imagem OG); `marca.svg` `max-age=3600, must-revalidate` |

## Pendências do cliente

1. **Indexação:** `PUBLIC_INDEXABLE=true` só com a aprovação do João. Até lá, a produção sai `noindex,nofollow`. Para ligar: Vercel → smartlion → Settings → Environment Variables → `PUBLIC_INDEXABLE` = `true` (Production) e redeploy. O SEO medido com indexação é 100.
2. **Domínio próprio:** hoje a produção é `smartlion.vercel.app`. Com o domínio, trocar `SITE_URL` na Vercel (canonical, sitemap e OG vêm dele) e só então enviar o HSTS `preload` para a lista dos navegadores.
3. **Mídias da P7** (fachada, prateleiras, bancada, laboratório, produtos em fundo escuro, vídeo da loja), com a lista arquivo · o que é · onde entra · autorização · crédito. A fachada passa a ser a imagem do Open Graph (aprovado).
4. **INP e fps em aparelho real** (Android médio e um desktop com GPU), pelo roteiro acima.
5. Já pendentes de antes: ano de fundação e fundadores, foto do atendimento com autorização, link direto de avaliação do Google, prazo "no mesmo dia" por serviço, canal específico de privacidade.

## Como repetir

Gerar o build com indexação, só para medir:

```bash
SITE_URL=https://smartlion.vercel.app PUBLIC_INDEXABLE=true pnpm build
```

Servir o build, num terminal separado:

```bash
pnpm preview
```

Lighthouse mobile:

```bash
QA_NO_SANDBOX=1 pnpm qa:lighthouse
```

Lighthouse desktop:

```bash
QA_NO_SANDBOX=1 QA_LH_DESKTOP=1 pnpm qa:lighthouse
```

Gerar o build de produção (noindex):

```bash
SITE_URL=https://smartlion.vercel.app pnpm build
```

Testes e verificadores:

```bash
pnpm test && pnpm check && node scripts/verificar-seo.mjs && pnpm qa:axe && pnpm qa:teclado && pnpm qa:abertura && pnpm qa:reparo
```
