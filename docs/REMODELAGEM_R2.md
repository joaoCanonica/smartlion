# R2 — Home institucional

02/11/2026. Branch remodelagem-institucional.

## Entrega
Nova home: abertura com foto real → manifesto → galeria assimétrica → quatro atividades → vitrine de categorias → três citações literais → história e três marcos confirmados → Instagram → visite-nos → rodapé. O contato usa Fale conosco, sem preço ou estoque inventado.

Parcelamento movido para catálogo; Consertar ou trocar movido para assistência. Faixa comercial, carrossel, vitrine comercial e modal saíram apenas da composição da home. Seus componentes e os dados continuam preservados. Nenhum arquivo removido. Produtos continuam com seus links, modalidades e rascunhos protegidos.

Instagram: contagem histórica de 10,5 mil em 28/10/2026, centralizada em loja.ts. Cinco fotos disponíveis e links ao perfil identificados; sexta foto e links individuais permanecem pendentes. Sem imagens falsas de produto. As categorias sem fotografia ficam tipográficas. Interior usado no lugar da fachada com alt correto e aviso DEV. As novas rotas entram nas próximas fases; nenhuma URL inexistente é usada.

## Validação medida
- Vitest: 186 testes / 7 arquivos passaram.
- Astro check: 96 arquivos, zero erros/avisos/hints.
- Build: 25 páginas.
- Home JS gzip: 2.919 bytes (antes: 7.611). Máximo por página: 3.924 bytes, abaixo de 30 KB.
- Home: 38 variantes AVIF, de 2.760 a 46.093 bytes cada; um único fetchpriority=high; dimensões/alt presentes.
- 107 links WhatsApp no build, todos centralizados e verificados; 76 imagens; sem IDs duplicados.
- 56 avaliações literais preservadas; 23 destaques disponíveis no JSON; 3 usados na home, dentro do intervalo 3–6 solicitado.
- Sem AggregateRating/Review, iframes iniciais, produtos rascunho ou textos proibidos na voz da loja.
- SEO: canônicas, Open Graph e JSON-LD válidos; sitemap sem rascunhos; llms.txt mantém intervalo do almoço.
- Navegador: Conheça a loja leva à galeria; fotos carregadas. Iframes: 0 inicialmente, 1 após Carregar mapa, 0 após Continuar sem mapa.
- Contrastes por script continuam aprovados: texto 16,91:1, secundário 9,06:1, WhatsApp 7,74:1; focos claro/escuro 6,98:1 / 7,73:1.
- Captura na largura disponível de 1348px. Não medidos: Lighthouse/axe, LCP/CLS/INP, viewport exato 390/1440, JS desativado e reduced-motion no navegador. Fallback estático e CSS revisados; isso não equivale a certificação WCAG.

## Rodar e conferir
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-home.mjs
node scripts/verificar-final.mjs
node scripts/verificar-catalogo.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
pnpm dev
```
Em 390px: menu, título sem corte, quatro atividades em coluna, categorias sem scroll horizontal da página, contatos, horários com almoço, mapa por consentimento. Em 1440px: galeria assimétrica, atividades alternadas, três citações e legibilidade da foto escura. Tab/Enter/Escape no menu, foco visível, imagens visíveis sem JS, movimento reduzido sem animação.

Para Lighthouse/axe, com Chrome/ChromeDriver locais:
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
Preview noindex tem penalidade SEO esperada. INP precisa coleta de interações/campo, não é inferido de Lighthouse.

## Próxima fase
R3: /a-loja e /nossa-historia, linha do tempo dirigida por historia.json. Foto/autorização e informações jurídicas continuam pendentes conforme PENDENCIAS.md e FOTOS_NECESSARIAS.md. Nenhuma nova pergunta bloqueante.
