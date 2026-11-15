# QA — Fase 6

## Medições e verificações

- Astro check: 74 arquivos; zero erros, avisos ou hints.
- Vitest: 171 testes aprovados (12 novos para composição do orçamento e codificação).
- Build estático: 23 páginas HTML; cinco rascunhos excluídos.
- Verificações de catálogo, avaliações e home aprovadas: links internos, H1, destino WhatsApp, orçamento JS, textos literais, ausência de rascunhos e iframe inicial.

| Rotas | JS gzip por página |
|---|---:|
| Assistência e seis serviços | 1878 bytes |
| Como chegar | 417 bytes |
| Curso, Sobre, FAQ, Privacidade e 404 | 0 bytes |
| Home | 6790 bytes |
| Avaliações | 601 bytes |
| Catálogo e sete categorias | 3165 bytes |

## Navegador

Conferida navegação da assistência à página de troca de tela, nomes acessíveis dos campos, preenchimento de modelo/problema e Tab até o botão. Não foi enviada mensagem nem testada a navegação final ao aplicativo WhatsApp. Inspeção visual desktop; não certifica larguras exatas 390/1440.

Não foram medidos Lighthouse, axe, LCP, CLS ou INP nesta fase. O comportamento sem JS foi conferido no HTML, sem sessão dedicada com JavaScript desativado.

## Rodar e conferir

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm verify:catalogo
pnpm verify:avaliacoes
node scripts/verificar-home.mjs
pnpm dev
```

Em 390 e 1440 px: abrir as seis páginas de serviços a partir de /assistencia-tecnica; percorrer campos e ações com Tab; conferir texto da mensagem antes de enviar; abrir FAQ com Enter/Espaço; conferir rodapé, fotos, horário com almoço e mapa em /como-chegar. Sem JS, o link direto de assistência deve continuar disponível e FAQ deve abrir normalmente.

Para Lighthouse, com Chrome instalado, terminal 1:

```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2:

```sh
mkdir -p reports
for rota in assistencia-tecnica assistencia-tecnica/troca-de-tela-iphone assistencia-tecnica/troca-de-bateria-iphone assistencia-tecnica/tampa-traseira assistencia-tecnica/placa assistencia-tecnica/apple-watch-airpods assistencia-tecnica/macbook-ipad curso-manutencao-celular sobre como-chegar perguntas-frequentes privacidade; do
  nome=$(printf '%s' "$rota" | tr '/' '_')
  pnpm dlx lighthouse "http://localhost:4321/$rota" --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path="reports/$nome" --chrome-flags="--headless"
done
```

Preview noindex é intencional e pode afetar SEO. INP de campo exige interações reais; nenhuma pontuação de laboratório foi presumida.
