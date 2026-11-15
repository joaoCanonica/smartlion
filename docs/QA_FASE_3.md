# Verificação — Fase 3

## Resultados medidos

- `pnpm check`: 37 arquivos, zero erros, avisos ou hints.
- `pnpm test`: 142 testes aprovados (47 novos de catálogo; 95 anteriores).
- Build estático: 10 páginas HTML e busca.json; zero páginas de produtos rascunho.
- `pnpm verify:catalogo`: exclusão de rascunhos, índice, rotas, links internos, destino de WhatsApp, um H1, textos proibidos e orçamento JS aprovados.

| Rota | JS gzip (bytes, incluindo imports e inline) |
|---|---:|
| / | 1450 |
| /404 | 0 |
| /catalogo | 2752 |
| /catalogo/iphone | 2752 |
| /catalogo/seminovos | 2752 |
| /catalogo/ipad-mac-watch | 2752 |
| /catalogo/xiaomi | 2752 |
| /catalogo/casa-e-games | 2752 |
| /catalogo/acessorios | 2752 |
| /catalogo/perfumaria | 2752 |

Páginas de produto não têm medida de produção nesta fase: nenhum produto foi confirmado. O limite de 30 KB deve ser verificado novamente quando houver produto real. Tamanho de rede pode variar conforme compressão do servidor.

## Conferência interativa realizada

No navegador de desenvolvimento: busca “17 pro max”, “bateria”, filtro acessórios; modal nativo; opções e resumo; WhatsApp codificado com seleção; URL com versão/cor; Esc com retorno de foco ao card; Voltar/Avançar; reload abrindo página completa e preservando seleção; esgotado com CTA específico. Nenhuma mensagem enviada. Captura em `preview-fase3.jpg`.

Inspeção do HTML confirma links estáticos e tabela de horário. Não foi feita sessão de navegador com JavaScript desativado. Não foram medidos Lighthouse, LCP, CLS, INP nem axe nesta fase. A viewport disponível não permitiu certificar as larguras exatas de 390 e 1440 px. Não se declara aprovação WCAG com base nos testes atuais.

## Reproduzir

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm verify:catalogo
pnpm dev
```

Em 390 e 1440 px, conferir `/catalogo`: nenhum transbordamento horizontal, foco visível, chips navegáveis, cinco exemplos apenas em dev. Buscar “17 pro max”, “seminovo” e “bateria”; abrir card, selecionar opções, copiar URL, recarregar; Esc e Voltar retornam ao card. Na home abrir a mesma vitrine. Desativar JS e navegar pelo link do card e WhatsApp genérico. Conferir radios com setas e Tab; testar estado sem resultados e esgotado.

## Medir Lighthouse localmente

Com Chrome instalado, em um terminal:

```sh
pnpm build
pnpm preview --port 4321
```

Em outro:

```sh
mkdir -p reports
for rota in / /404 /catalogo /catalogo/iphone /catalogo/seminovos /catalogo/ipad-mac-watch /catalogo/xiaomi /catalogo/casa-e-games /catalogo/acessorios /catalogo/perfumaria; do
  nome=$(printf '%s' "$rota" | tr '/' '_')
  pnpm dlx lighthouse "http://localhost:4321$rota" --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path="reports/$nome" --chrome-flags="--headless"
done
```

Preview é noindex por exigência do projeto; isso pode afetar SEO no Lighthouse. LCP/CLS de laboratório não equivalem a dados de campo e INP depende de interações reais. A bateria final de QA continua prevista na Fase 9.
