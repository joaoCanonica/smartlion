# Linha de base · remodelagem premium (P0)

Medido em 15/11/2026, no build **anterior** às mudanças da P0 (commit `ad6b818`, layout atual), servido por `pnpm preview`. É a referência para comparar no fim da P8. A P0 não muda layout: 28 capturas de página inteira antes × depois (7 rotas × 390/1440 px × normal/reduced-motion) saíram **idênticas pixel a pixel**, e a home re-medida depois da P0 deu os mesmos números (tabela "Depois da P0").

## Como foi medido

- Build: `SITE_URL=https://teste.smartlion.example pnpm build` (sem `PUBLIC_INDEXABLE`, portanto **noindex**, que é o estado atual).
- Lighthouse 13.6.0, perfil mobile padrão (throttling simulado: RTT 150 ms, 1,6 Mbps, CPU 4×), viewport 390 × 844, DPR 2, Chromium 1243 (Playwright) headless.
- axe-core 4.11.0 via Playwright, regras `wcag2a/aa`, `wcag21a/aa`, `wcag22aa` e `best-practice`, em 390 e 1440 px.
- JS: soma do `transferSize` dos scripts no relatório do Lighthouse (gzip real do preview) + scripts inline do HTML (gzip -9). Sem 3D e sem abertura (ainda não existem).
- INP: não é medido pelo Lighthouse em navegação; fica para a P8 (campo ou `web-vitals` com interação real).

Comandos (servidor `pnpm preview` ativo em outro terminal):

```bash
pnpm build && pnpm preview
```

```bash
CHROME_PATH=/caminho/do/chrome QA_NO_SANDBOX=1 pnpm qa:lighthouse
```

```bash
pnpm qa:axe
```

```bash
pnpm audit:contraste
```

(`LIGHTHOUSE_BIN` aponta para um Lighthouse já instalado em vez de `pnpm dlx lighthouse`; `QA_NO_SANDBOX` só em contêiner como root. O `qa-axe.mjs` foi reescrito com Playwright + `axe-core`, porque o `@axe-core/cli` baixa um chromedriver, o que a rede deste ambiente bloqueia.)

## Resumo

| Métrica | Meta (AGENTS.md §5) | Linha de base | Situação |
|---|---|---|---|
| Lighthouse Performance (mobile) | ≥ 95 | **100** em 36/36 rotas | ok |
| Lighthouse Acessibilidade | 100 | **100** em 36/36 | ok |
| Lighthouse Boas práticas | ≥ 95 | **96** em 36/36 | ok (perde só `image-size-responsive`: logo PNG 58 px exibido a 44 px em DPR 2; some com o logo SVG da P1) |
| Lighthouse SEO | ≥ 95 | **69** em 36/36 | esperado: o site está em noindex (`is-crawlable`). Com `PUBLIC_INDEXABLE=true` essa auditoria passa; medir de novo na P8 |
| LCP (simulado 4G) | < 2,0 s | 751–1583 ms; home 1582 ms | ok, mas a home tem só ~420 ms de folga para abertura + hero |
| CLS | < 0,05 | máx. 0,0164 (404) | ok |
| JS inicial (gzip) | ≤ 40 KB | 1,7–7,5 KB (home 4,4 KB) | ok |
| Fontes baixadas | — | 38,7 KB (DM Serif + DM Sans) | referência para a P6 |
| axe (WCAG A/AA) | 0 | **0** | ok |
| axe (best-practice) | 0 | 1 em todas as rotas: `region` (moderada) no botão flutuante de WhatsApp, fora de landmark | pendência P1 (pôr o botão dentro de um landmark ou de `<aside aria-label>`) |
| Contraste dos tokens | AA | 33/33 pares | ok (tabela abaixo) |

## Lighthouse por rota (antes da P0)

| Rota | Performance | Acessibilidade | Boas práticas | SEO | LCP ms | CLS |
|---|---:|---:|---:|---:|---:|---:|
| /404.html | 100 | 100 | 96 | 69 | 1312 | 0.0164 |
| /_estilo/ | 100 | 100 | 96 | 69 | 1583 | 0.0000 |
| /a-loja/ | 100 | 100 | 96 | 69 | 761 | 0.0000 |
| /assistencia-tecnica/apple-watch-airpods/ | 100 | 100 | 96 | 69 | 755 | 0.0000 |
| /assistencia-tecnica/ | 100 | 100 | 96 | 69 | 1502 | 0.0000 |
| /assistencia-tecnica/macbook-ipad/ | 100 | 100 | 96 | 69 | 753 | 0.0000 |
| /assistencia-tecnica/placa/ | 100 | 100 | 96 | 69 | 758 | 0.0000 |
| /assistencia-tecnica/tampa-traseira/ | 100 | 100 | 96 | 69 | 754 | 0.0000 |
| /assistencia-tecnica/troca-de-bateria-iphone/ | 100 | 100 | 96 | 69 | 755 | 0.0000 |
| /assistencia-tecnica/troca-de-tela-iphone/ | 100 | 100 | 96 | 69 | 752 | 0.0000 |
| /avaliacoes/ | 100 | 100 | 96 | 69 | 751 | 0.0073 |
| /catalogo/acessorios/ | 100 | 100 | 96 | 69 | 906 | 0.0000 |
| /catalogo/casa-e-games/ | 100 | 100 | 96 | 69 | 904 | 0.0000 |
| /catalogo/ | 100 | 100 | 96 | 69 | 1582 | 0.0000 |
| /catalogo/ipad-mac-watch/ | 100 | 100 | 96 | 69 | 907 | 0.0000 |
| /catalogo/iphone/ | 100 | 100 | 96 | 69 | 905 | 0.0000 |
| /catalogo/perfumaria/ | 100 | 100 | 96 | 69 | 905 | 0.0000 |
| /catalogo/seminovos/ | 100 | 100 | 96 | 69 | 906 | 0.0000 |
| /catalogo/xiaomi/ | 100 | 100 | 96 | 69 | 905 | 0.0000 |
| /como-chegar/ | 100 | 100 | 96 | 69 | 751 | 0.0000 |
| /curso-manutencao-celular/ | 100 | 100 | 96 | 69 | 1508 | 0.0000 |
| /dicas/ | 100 | 100 | 96 | 69 | 757 | 0.0000 |
| / | 100 | 100 | 96 | 69 | 1582 | 0.0000 |
| /nossa-historia/ | 100 | 100 | 96 | 69 | 754 | 0.0080 |
| /perguntas-frequentes/ | 100 | 100 | 96 | 69 | 756 | 0.0000 |
| /privacidade/ | 100 | 100 | 96 | 69 | 1304 | 0.0000 |
| /produtos/acessorios/ | 100 | 100 | 96 | 69 | 903 | 0.0000 |
| /produtos/casa-e-games/ | 100 | 100 | 96 | 69 | 906 | 0.0000 |
| /produtos/ | 100 | 100 | 96 | 69 | 1504 | 0.0000 |
| /produtos/ipad-mac-watch/ | 100 | 100 | 96 | 69 | 906 | 0.0000 |
| /produtos/iphone/ | 100 | 100 | 96 | 69 | 902 | 0.0000 |
| /produtos/perfumaria/ | 100 | 100 | 96 | 69 | 904 | 0.0000 |
| /produtos/xiaomi/ | 100 | 100 | 96 | 69 | 905 | 0.0000 |
| /seminovos/ | 100 | 100 | 96 | 69 | 903 | 0.0000 |
| /sobre/ | 100 | 100 | 96 | 69 | 754 | 0.0000 |
| /visite-nos/ | 100 | 100 | 96 | 69 | 1506 | 0.0000 |

Rotas `/catalogo/*`, `/sobre` e `/como-chegar` são as páginas de destino dos 301 da Vercel (no preview local são servidas como páginas).

## Peso por rota (antes da P0)

| Rota | JS externo (KB, transferido) | JS inline (KB gzip) | Fontes (KB) | Total transferido (KB) |
|---|---:|---:|---:|---:|
| /404.html | 1.5 | 0.2 | 38.7 | 58 |
| /_estilo/ | 1.5 | 1.7 | 65.3 | 131 |
| /a-loja/ | 2.7 | 0.4 | 38.7 | 139 |
| /assistencia-tecnica/apple-watch-airpods/ | 4.2 | 0.2 | 38.7 | 63 |
| /assistencia-tecnica/ | 4.2 | 0.2 | 38.7 | 96 |
| /assistencia-tecnica/macbook-ipad/ | 4.2 | 0.2 | 38.7 | 63 |
| /assistencia-tecnica/placa/ | 4.2 | 0.2 | 38.7 | 63 |
| /assistencia-tecnica/tampa-traseira/ | 4.2 | 0.2 | 38.7 | 63 |
| /assistencia-tecnica/troca-de-bateria-iphone/ | 4.2 | 0.2 | 38.7 | 63 |
| /assistencia-tecnica/troca-de-tela-iphone/ | 4.2 | 0.2 | 38.7 | 63 |
| /avaliacoes/ | 1.5 | 0.7 | 38.7 | 65 |
| /catalogo/acessorios/ | 5.8 | 0.2 | 38.7 | 67 |
| /catalogo/casa-e-games/ | 5.8 | 0.2 | 38.7 | 67 |
| /catalogo/ | 5.8 | 0.2 | 38.7 | 92 |
| /catalogo/ipad-mac-watch/ | 5.8 | 0.2 | 38.7 | 67 |
| /catalogo/iphone/ | 5.8 | 0.2 | 38.7 | 67 |
| /catalogo/perfumaria/ | 5.8 | 0.2 | 38.7 | 67 |
| /catalogo/seminovos/ | 5.8 | 0.2 | 38.7 | 67 |
| /catalogo/xiaomi/ | 5.8 | 0.2 | 38.7 | 67 |
| /como-chegar/ | 2.7 | 0.2 | 38.7 | 73 |
| /curso-manutencao-celular/ | 1.5 | 0.2 | 38.7 | 88 |
| /dicas/ | 1.5 | 0.2 | 38.7 | 59 |
| / | 2.7 | 1.7 | 38.7 | 177 |
| /nossa-historia/ | 1.5 | 0.4 | 38.7 | 73 |
| /perguntas-frequentes/ | 1.5 | 0.2 | 38.7 | 60 |
| /privacidade/ | 1.5 | 0.2 | 38.7 | 60 |
| /produtos/acessorios/ | 5.8 | 0.2 | 38.7 | 67 |
| /produtos/casa-e-games/ | 5.8 | 0.2 | 38.7 | 67 |
| /produtos/ | 5.8 | 0.2 | 38.7 | 92 |
| /produtos/ipad-mac-watch/ | 5.8 | 0.2 | 38.7 | 67 |
| /produtos/iphone/ | 5.8 | 0.2 | 38.7 | 67 |
| /produtos/perfumaria/ | 5.8 | 0.2 | 38.7 | 67 |
| /produtos/xiaomi/ | 5.8 | 0.2 | 38.7 | 67 |
| /seminovos/ | 5.8 | 0.2 | 38.7 | 67 |
| /sobre/ | 1.5 | 0.2 | 38.7 | 71 |
| /visite-nos/ | 2.7 | 0.2 | 38.7 | 73 |

## Depois da P0 (conferência de regressão)

| Rota | Perf / A11y / BP / SEO | LCP ms | CLS | Observação |
|---|---|---:|---:|---|
| / | 100 / 100 / 96 / 69 | 1509 · 1581 · 1581 | 0 | 3 execuções, `pnpm preview` (igual à base) |
| /a-loja/ | 100 / 100 / 96 / 69 | 905 | 0 | servidor estático simples, sem compressão |
| /_estudo-premium/ | 100 / 100 / 96 / 69 | 905 | 0,0117 | página nova de estudo (noindex) |

axe depois da P0: 37 rotas × 2 larguras, 0 violações WCAG; a mesma `region` (best-practice) do botão flutuante em todas, inclusive na página de estudo.

## Contraste dos tokens (`pnpm audit:contraste --md`)

| Grupo | Frente | Fundo | Razão | Mínimo | Resultado | Uso |
|---|---|---|---:|---:|---|---|
| Leão de Aço | `--cor-texto` | `--cor-fundo` | 18.18:1 | 4.5:1 | passa | Texto principal no fundo |
| Leão de Aço | `--cor-texto` | `--cor-superficie` | 16.41:1 | 4.5:1 | passa | Texto em painel grafite |
| Leão de Aço | `--cor-texto` | `--cor-superficie-2` | 14.35:1 | 4.5:1 | passa | Texto em realce grafite 2 |
| Leão de Aço | `--cor-texto-2` | `--cor-fundo` | 7.32:1 | 4.5:1 | passa | Texto secundário (aço) no fundo |
| Leão de Aço | `--cor-texto-2` | `--cor-superficie` | 6.61:1 | 4.5:1 | passa | Texto secundário em painel |
| Leão de Aço | `--cor-texto-2` | `--cor-superficie-2` | 5.78:1 | 4.5:1 | passa | Texto secundário em realce |
| Leão de Aço | `--cor-acento` | `--cor-fundo` | 9.37:1 | 4.5:1 | passa | Número/rótulo âmbar no fundo |
| Leão de Aço | `--cor-acento` | `--cor-superficie` | 8.46:1 | 4.5:1 | passa | Número/rótulo âmbar em painel |
| Leão de Aço | `--cor-acento` | `--cor-superficie-2` | 7.40:1 | 4.5:1 | passa | Âmbar em realce |
| Leão de Aço | `--cor-fundo` | `--cor-acento` | 9.37:1 | 4.5:1 | passa | Texto preto em botão âmbar |
| Leão de Aço | `--cor-texto` | `--vidro-bg sobre --cor-fundo` | 16.97:1 | 4.5:1 | passa | Texto em vidro escuro sobre o fundo |
| Leão de Aço | `--cor-texto-2` | `--vidro-bg sobre --cor-fundo` | 6.83:1 | 4.5:1 | passa | Texto secundário em vidro escuro |
| Leão de Aço | `--cor-acento` | `--vidro-bg sobre --cor-fundo` | 8.75:1 | 4.5:1 | passa | Âmbar em vidro escuro |
| Leão de Aço | `--cor-foco` | `--cor-fundo` | 9.37:1 | 3:1 | passa | Anel de foco no fundo |
| Leão de Aço | `--cor-foco` | `--cor-superficie` | 8.46:1 | 3:1 | passa | Anel de foco em painel |
| Leão de Aço | `--cor-linha` | `--cor-fundo` | 7.32:1 | 3:1 | passa | Linha ativa / borda de campo (aço) |
| Leão de Aço | `--cor-whatsapp-texto` | `--cor-whatsapp` | 7.74:1 | 4.5:1 | passa | Texto do botão de WhatsApp |
| Leão de Aço | `--cor-whatsapp` | `--cor-fundo` | 9.92:1 | 3:1 | passa | Botão de WhatsApp no fundo escuro |
| Leão de Aço | `--cor-texto-escuro` | `--cor-fundo-claro` | 18.18:1 | 4.5:1 | passa | Texto em capítulo claro |
| Leão de Aço | `--cor-texto-escuro` | `--cor-superficie-clara` | 19.67:1 | 4.5:1 | passa | Texto em painel claro |
| Leão de Aço | `--cor-texto-2-escuro` | `--cor-fundo-claro` | 6.51:1 | 4.5:1 | passa | Texto secundário em capítulo claro |
| Leão de Aço | `--cor-texto-2-escuro` | `--cor-superficie-clara` | 7.05:1 | 4.5:1 | passa | Texto secundário em painel claro |
| Leão de Aço | `--cor-acento-escuro` | `--cor-fundo-claro` | 5.41:1 | 4.5:1 | passa | Âmbar escuro em capítulo claro |
| Leão de Aço | `--cor-acento-escuro` | `--cor-superficie-clara` | 5.85:1 | 4.5:1 | passa | Âmbar escuro em painel claro |
| Leão de Aço | `--cor-fundo-claro` | `--cor-texto-escuro` | 18.18:1 | 4.5:1 | passa | Botão invertido (gelo sobre preto) |
| Legado (sai na P6) | `--white` | `--ink` | 18.74:1 | 4.5:1 | passa | Legado: texto branco no grafite |
| Legado (sai na P6) | `--muted` | `--ink` | 10.29:1 | 4.5:1 | passa | Legado: texto secundário no grafite |
| Legado (sai na P6) | `--ink` | `--surface` | 16.91:1 | 4.5:1 | passa | Legado: texto no creme |
| Legado (sai na P6) | `--text-dark` | `--surface` | 9.06:1 | 4.5:1 | passa | Legado: texto secundário no creme |
| Legado (sai na P6) | `--wood` | `--surface` | 4.45:1 | 3:1 | passa | Legado: madeira (decorativa/grande) no creme |
| Legado (sai na P6) | `--wood-light` | `--ink` | 8.52:1 | 4.5:1 | passa | Legado: madeira clara no grafite |
| Legado (sai na P6) | `--accent-light` | `--ink` | 7.73:1 | 3:1 | passa | Legado: foco magenta no grafite |
| Legado (sai na P6) | `--focus-light` | `--surface` | 6.98:1 | 3:1 | passa | Legado: foco magenta escuro no creme |

33/33 pares passam.

## Capturas

- Home atual: [1440 px](linha-de-base-home-1440.jpg) · [390 px](linha-de-base-home-390.jpg) · [390 px reduced-motion](linha-de-base-home-390-rm.jpg) (topo da página).
- Estudo tipográfico: ver [tipografia.md](tipografia.md).

## O que esta base já mostra para as próximas sessões

1. A folga de LCP da home é pequena (~1,6 s de 2,0 s). A abertura (P2) não pode atrasar o elemento LCP: o hero precisa ser pintado por baixo da abertura, e a ilha 3D (P3) só entra depois do LCP.
2. O orçamento de JS tem folga grande (≤ 7,5 KB de 40 KB).
3. Fontes: a troca para Sora + Inter Tight + Michroma soma ~96 KB contra 38,7 KB de hoje. Na P6, pré-carregar só a Sora e avaliar Inter Tight estática (ver tipografia.md).
4. Boas práticas 96 e `region` do axe têm a mesma origem simples (logo PNG e botão flutuante) e saem na P1.
