# Código e documentação completos — R1

## Arquivos criados ou alterados

- docs/PENDENCIAS.md
- docs/REMODELAGEM_R1.md
- package.json
- pnpm-lock.yaml
- scripts/verificar-final.mjs
- src/components/BotaoWhatsApp.astro
- src/components/Header.astro
- src/components/Rodape.astro
- src/components/avaliacoes/AvaliarGoogle.astro
- src/components/catalogo/Catalogo.astro
- src/components/editorial/Capitulo.astro
- src/components/editorial/RevelacaoImagem.astro
- src/config/navegacao.ts
- src/layouts/LayoutBase.astro
- src/pages/[estudo].astro
- src/pages/avaliacoes.astro
- src/pages/index.astro
- src/styles/global.css
- src/styles/tokens.css

Nenhum arquivo anterior removido.


## docs/PENDENCIAS.md

````md
# Pendências — Fase 1

Dados não confirmados permanecem vazios em src/config/loja.ts. O aviso visual aparece somente em desenvolvimento.

- [ ] Lista de produtos, versões, cores, novo/seminovo, LL/Anatel e confirmação explícita. Slots de produtos e exemplos rascunho serão implementados na Fase 3. Não há produtos publicados.
- [ ] Confirmar bio do Instagram e telefone secundário. WhatsApp de vendas definido: 5549999268930.
- [ ] Logo vetorial: recebido PNG 225×225 e JPG 150×150.
- [ ] Termos de garantia de novos, seminovos e reparos; política de troca.
- [ ] Confirmação documental IRP e permissão de uso da denominação.
- [ ] CNPJ e razão social.
- [ ] Autorização de nomes/imagens da equipe, inclusive quatro depoimentos destaqueHome.
- [ ] Link direto para avaliar no Google.
- [ ] Fotos de fachada e produtos sem textos sobrepostos; autorização de uso de todas as mídias.
- [ ] Links dos 6–9 posts selecionados do Instagram.
- [ ] Curso: carga horária, conteúdo, turma, certificado.
- [ ] Feriados e exceções de atendimento.
- [ ] Condições vigentes de parcelamento.
- [ ] Responsável, contato de privacidade e ferramenta de métricas.
- [ ] Referências locais e cobertura de atendimento confirmadas.
- [ ] Acesso de publicação Vercel/DNS na fase final; versão de revisão privada no Sites.
- [ ] Resolver campos opcionais vazios nas mensagens e condição de encomenda na Fase 2.
- [ ] Texto recebido diz “sem aparelhos de vitrine”; especificação diz “sem swap”. Confirmar ambas as políticas antes de ampliar a afirmação.

## Escopo desta entrega
Fundação, navegação por categorias, busca de categorias, rodapé, contato, 404 e composição inicial para avaliar o layout. A home completa e o mapa permanecem na Fase 5; catálogo, filtros de produto e slots na Fase 3. Sem status de horário dinâmico até a Fase 2. Sem links para páginas ainda inexistentes.


## Atualização — Fase 2

- Horários regulares e lista de exceções centralizados em `loja.horario`. Exceções continuam vazias por falta de confirmação; nenhum feriado foi inferido.
- `aceitaUsadoNaTroca: null`: mensagem de troca bloqueada enquanto não for true.
- Mensagens da §10 implementadas sem alterar a copy. Na assistência, omitir os campos opcionais gera literalmente “Aparelho: . Problema: .”. Antes do mini formulário da fase 6, decidir se a loja autoriza omitir esses rótulos quando vazios; por enquanto não há esse formulário publicado.
- Encomenda não define novo/seminovo. O gerador de mensagem exige a condição física confirmada, sem converter encomenda em novo.
- Campos de curso e confirmação IRP continuam vazios; aviso de desenvolvimento ampliado.
- Relógio do status depende do instante informado pelo navegador, convertido para America/Sao_Paulo. Sem JS, tabela e links continuam disponíveis.

## Atualização — Fase 3

- Slots, coleção validada, busca, filtros, categorias, modal e páginas implementados; substituem as previsões de fase 3 acima.
- PENDENTE: modelos reais, versões, cores, fotos/alt, disponibilidade e confirmação datada para publicar os produtos. Os cinco exemplos continuam rascunhos, fora da produção.
- PENDENTE: preço e condições datadas somente se a loja desejar exibir preço. O padrão continua Sob consulta.
- PENDENTE: validação visual nas larguras exatas 390/1440 e Lighthouse/CWV/axe na fase de QA. Os testes desta fase não certificam WCAG nem metas de campo.
- Nenhuma pergunta bloqueia a próxima fase de avaliações.

## Atualização — Fase 4

- PENDENTE: link direto “Pedir avaliações” no Perfil da Empresa; loja.linkAvaliar continua vazio. Todas as notas usam a ficha confirmada enquanto isso, com instrução visível.
- PENDENTE: nova coleta confirmada a cada 30–60 dias para manter nota, total e data consistentes. Não há sincronização automática.
- O JSON não contém relatos marcados seminovo. Filtro vazio é intencional; nenhuma tag foi inventada.
- Autorização de nomes de equipe dentro dos relatos continua pendente conforme §16; textos literais preservados conforme §11. Não criamos perfis ou fotos de equipe.
- QA completo em 390/1440, axe, Lighthouse e métricas de campo continua pendente.
- Nenhuma pergunta bloqueia a Fase 5.

## Atualização — Fase 5

- PENDENTE: foto da fachada. Campo loja.fotoFachada vazio; interior real usado com legenda/alt correto.
- PENDENTE: URLs das cinco fotos/posts e sexta imagem para atingir o mínimo de seis da §8. Campos vazios em loja.instagramPosts; fallback explícito para perfil.
- PENDENTE: confirmar condições vigentes do parcelamento. Limites 24x/36x vêm da especificação; taxas e valores não publicados.
- PENDENTE: produtos reais suficientes para preencher vitrines da §8. Não publicar os cinco rascunhos.
- A home tem todas as seções; fachada, quantidade de produtos e grade de 6–9 posts dependem dos insumos acima.
- Próxima fase cria páginas institucionais. Rodapé não oferece rotas inexistentes; CNPJ e privacidade seguem fases previstas.
- Não foi confirmada a renderização externa do mapa no navegador de teste, apenas criação após clique e remoção após recusa. Conferir integração Google na QA final.

## Atualização — Fase 6

- Páginas institucionais e seis serviços implementados; links adicionados ao rodapé.
- PENDENTE: responsável, canal específico, prazo de retenção, operadores e bases legais do atendimento. Campos vazios em loja.privacidade; aviso de desenvolvimento atualizado. Completar a política antes do lançamento público.
- Permanecem pendentes termos de garantia, confirmação documental IRP, dados da turma e CNPJ. Nenhum prazo, cobertura ou certificado foi inventado.
- Formulário preserva as mensagens exatas, inclusive rótulos vazios nos campos opcionais. Não há envio automático.
- Sem nova pergunta bloqueante para a Fase 7.

## Fase 7 — Dicas

- PENDENTE: revisão técnica e editorial dos três artigos-modelo, identificação do revisor e datas reais de publicação/revisão.
- PENDENTE: links dos posts de origem. Os modelos usam temas da especificação e fontes Apple, sem afirmar que reproduzem posts.
- Nenhuma dessas pendências bloqueia a Fase 8; os três textos permanecem rascunhos fora da produção.

## Fase 8 — SEO/GEO e privacidade

- Confirmar domínio/origem de produção e concluir pendências da loja antes de habilitar indexação; prévia permanece privada e noindex.
- Validar responsável/controlador, contato de privacidade, retenção, operadores e bases legais, campos já vazios em loja.ts.
- Confirmar exceções de feriados antes de incluir horários especiais.
- QA final, validadores externos e métricas móveis ficam para a Fase 9. Nenhuma nova pergunta bloqueia essa fase.

## Fase 9

Lista consolidada em PENDENCIAS_FINAIS.md. Verificações executadas e limitações em QA_FASE_9.md. QA final ainda não aprovado: faltam medições Lighthouse/axe e conferência móvel completa.

## Remodelagem R1 — 02/11/2026
- R2: composição completa da home institucional.
- R3–R5: novas rotas e redirecionamentos HTTP 301; menu usa destinos existentes provisoriamente.
- Conferência em 390/1440px, reduced-motion, Lighthouse e axe ainda pendentes.
- Fotos e autorizações continuam conforme FOTOS_NECESSARIAS.md.

````


## docs/REMODELAGEM_R1.md

````md
# R1 — Fundação visual

Entrega em 02/11/2026, branch remodelagem-institucional.

## Mudanças
Tokens grafite/off-white quente/madeira; DM Serif Display + DM Sans locais com swap e preload somente do título. Young Serif restrita à página comparativa. Menu institucional com details nativo; Escape devolve foco e fecha. Busca e chips dentro do catálogo. WhatsApp discreto no cabeçalho e flutuante de 50px. Rodapé com leão, contatos, horário com almoço e widget de notas único. Capitulo claro/escuro e RevelacaoImagem visível por padrão, com movimento reduzido respeitado. Nenhuma página ou componente anterior apagado.

O widget saiu da composição individual da home/avaliações para o rodapé compartilhado. /_estilo é gerada por [estudo].astro porque arquivos iniciados por underscore são ignorados pelo roteamento. Noindex e fora do sitemap. Destinos atuais do menu são temporários até R3–R5, sem URLs quebradas.

## Escolha visual
A comparação lado a lado está em smartlion-r1-fontes.jpg. Escolhida DM Serif Display: título menos denso, menos quebras e contraste mais delicado junto ao leão. Young Serif permanece somente no estudo. Capturas na largura disponível do navegador (1348px), não equivalem a testes de 390/1440px. A faixa amarela é aviso exclusivo de desenvolvimento.

## Validação
- 186 testes, 7 arquivos: passaram.
- Astro check: 96 arquivos, zero erros/avisos/hints.
- Build: 25 páginas; 5 produtos rascunho excluídos.
- JS gzip: /_estilo 2.417 bytes; máximo 7.611 bytes (home existente), limite 30 KB.
- 107 links WhatsApp; 69 imagens com alt/dimensões; IDs únicos; copy proibida ausente na voz da loja.
- 56 avaliações literais preservadas, 23 destaques, 5 notas sem filtragem.
- SEO/canônicas/OG/JSON-LD verificados, sem iframes iniciais.
- Contraste por script: texto 16,91:1; secundário 9,06:1; rodapé 10,29:1; WhatsApp 7,74:1; foco claro 6,98:1; foco escuro 7,73:1; madeira clara no escuro 8,52:1. Não substitui axe ou auditoria completa WCAG.
- Navegador: submenu abre; Escape fecha e devolve foco ao summary; fotografia carregada; comparação visual registrada.
- Não medidos: Lighthouse, axe, LCP, CLS, INP, 390/1440px exatos, JS desligado e reduced-motion no navegador. A API disponível não oferece emulação de viewport. Fallbacks revisados no código.

## Comandos
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-final.mjs
node scripts/verificar-catalogo.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

Abra /_estilo. Em 390px confira menu em duas linhas, submenu dentro da tela, botões, fontes e rodapé. Em 1440px compare fontes lado a lado, fotos e respiro dos capítulos. Tab/Enter/Escape; sem JS: fotos, links e horário devem continuar visíveis. Ative movimento reduzido e confirme ausência de animações.

Para métricas, com Chrome/ChromeDriver locais e o servidor de produção iniciado:
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
 /_estilo e previews são noindex intencionalmente; isso pode afetar o score SEO. INP exige coleta de interações/campo, não é medido pelo simples build.

## Pendências
Home institucional R2; tour/história R3; produtos R4; avaliações/visita R5; revisão R6; QA/SEO R7. Fotos reais e autorizações pendentes mantidas. Sem nova pergunta bloqueante.

````

## Mudanças
Tokens grafite/off-white quente/madeira; DM Serif Display + DM Sans locais com swap e preload somente do título. Young Serif restrita à página comparativa. Menu institucional com details nativo; Escape devolve foco e fecha. Busca e chips dentro do catálogo. WhatsApp discreto no cabeçalho e flutuante de 50px. Rodapé com leão, contatos, horário com almoço e widget de notas único. Capitulo claro/escuro e RevelacaoImagem visível por padrão, com movimento reduzido respeitado. Nenhuma página ou componente anterior apagado.

O widget saiu da composição individual da home/avaliações para o rodapé compartilhado. /_estilo é gerada por [estudo].astro porque arquivos iniciados por underscore são ignorados pelo roteamento. Noindex e fora do sitemap. Destinos atuais do menu são temporários até R3–R5, sem URLs quebradas.

## Escolha visual
A comparação lado a lado está em smartlion-r1-fontes.jpg. Escolhida DM Serif Display: título menos denso, menos quebras e contraste mais delicado junto ao leão. Young Serif permanece somente no estudo. Capturas na largura disponível do navegador (1348px), não equivalem a testes de 390/1440px. A faixa amarela é aviso exclusivo de desenvolvimento.

## Validação
- 186 testes, 7 arquivos: passaram.
- Astro check: 96 arquivos, zero erros/avisos/hints.
- Build: 25 páginas; 5 produtos rascunho excluídos.
- JS gzip: /_estilo 2.417 bytes; máximo 7.611 bytes (home existente), limite 30 KB.
- 107 links WhatsApp; 69 imagens com alt/dimensões; IDs únicos; copy proibida ausente na voz da loja.
- 56 avaliações literais preservadas, 23 destaques, 5 notas sem filtragem.
- SEO/canônicas/OG/JSON-LD verificados, sem iframes iniciais.
- Contraste por script: texto 16,91:1; secundário 9,06:1; rodapé 10,29:1; WhatsApp 7,74:1; foco claro 6,98:1; foco escuro 7,73:1; madeira clara no escuro 8,52:1. Não substitui axe ou auditoria completa WCAG.
- Navegador: submenu abre; Escape fecha e devolve foco ao summary; fotografia carregada; comparação visual registrada.
- Não medidos: Lighthouse, axe, LCP, CLS, INP, 390/1440px exatos, JS desligado e reduced-motion no navegador. A API disponível não oferece emulação de viewport. Fallbacks revisados no código.

## Comandos
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-final.mjs
node scripts/verificar-catalogo.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

Abra /_estilo. Em 390px confira menu em duas linhas, submenu dentro da tela, botões, fontes e rodapé. Em 1440px compare fontes lado a lado, fotos e respiro dos capítulos. Tab/Enter/Escape; sem JS: fotos, links e horário devem continuar visíveis. Ative movimento reduzido e confirme ausência de animações.

Para métricas, com Chrome/ChromeDriver locais e o servidor de produção iniciado:
```sh
cd /workspace/sites/smartlion
pnpm preview --port 4321
```
Em outro terminal, use os scripts qa-lighthouse.mjs e qa-axe.mjs conforme seus argumentos documentados no código. /_estilo e previews são noindex intencionalmente; isso pode afetar o score SEO. INP exige coleta de interações/campo, não é medido pelo simples build.

## Pendências
Home institucional R2; tour/história R3; produtos R4; avaliações/visita R5; revisão R6; QA/SEO R7. Fotos reais e autorizações pendentes mantidas. Sem nova pergunta bloqueante.

````


## package.json

````json
{
  "name": "smartlion",
  "version": "0.9.0",
  "private": true,
  "type": "module",
  "engines": {
    "node": ">=24.22.1 <25"
  },
  "packageManager": "pnpm@11.25.0",
  "scripts": {
    "dev": "astro dev --host 0.0.0.0",
    "build": "astro build",
    "preview": "astro preview --host 0.0.0.0",
    "check": "astro check",
    "test": "vitest run",
    "test:watch": "vitest",
    "verify:avaliacoes": "node scripts/verificar-avaliacoes.mjs",
    "verify:catalogo": "node scripts/verificar-catalogo.mjs"
  },
  "dependencies": {
    "@fontsource/dm-sans": "5.3.0",
    "@fontsource/dm-serif-display": "5.3.0",
    "@fontsource/outfit": "5.3.0",
    "@fontsource/young-serif": "5.3.0",
    "astro": "7.4.3"
  },
  "devDependencies": {
    "@astrojs/check": "0.9.12",
    "@types/node": "^24.19.2",
    "typescript": "5.9.3",
    "vitest": "5.0.5"
  }
}

````


## pnpm-lock.yaml

````yaml
lockfileVersion: '9.0'

settings:
  autoInstallPeers: true
  excludeLinksFromLockfile: false

importers:

  .:
    dependencies:
      '@fontsource/dm-sans':
        specifier: 5.3.0
        version: 5.3.0
      '@fontsource/dm-serif-display':
        specifier: 5.3.0
        version: 5.3.0
      '@fontsource/outfit':
        specifier: 5.3.0
        version: 5.3.0
      '@fontsource/young-serif':
        specifier: 5.3.0
        version: 5.3.0
      astro:
        specifier: 7.4.3
        version: 7.4.3(@types/node@24.19.2)(yaml@2.9.1)
    devDependencies:
      '@astrojs/check':
        specifier: 0.9.12
        version: 0.9.12(@emnapi/runtime@1.11.3)(prettier@3.9.10)(typescript@5.9.3)
      '@types/node':
        specifier: ^24.19.2
        version: 24.19.2
      typescript:
        specifier: 5.9.3
        version: 5.9.3
      vitest:
        specifier: 5.0.5
        version: 5.0.5(@types/node@24.19.2)(vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1))

packages:

  '@astrojs/astro2tsx@0.1.3':
    resolution: {integrity: sha512-GMDC7Eo0myBUA/QLBl0u+OcegJ8LiBhccmNZR34KmprQNP8gQUJlWlOOZWUsxNA2rNS6GuPYcGDyLoPnjmn4/Q==}
    engines: {node: ^20.19.0 || >=22.12.0}

  '@astrojs/check@0.9.12':
    resolution: {integrity: sha512-hazpqxIfZWj2VhyPyR0pOEQ/IhFDM/2nIApL96zMXABdD8NrUKYDmhxTy7h+drTDl9MQG/Sd1ET/4amadVJUUA==}
    hasBin: true
    peerDependencies:
      typescript: ^5.0.0 || ^6.0.0

  '@astrojs/compiler-binding-android-arm64@0.5.2':
    resolution: {integrity: sha512-kckIxon6Rm/Bxzh9mGPYpRRqUbToUQoHptCmpMmE+Yt0Xumq8CqrKUidyYhrBsrHVO7bxuRzzWUUqvpf+iYceQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@astrojs/compiler-binding-darwin-arm64@0.5.2':
    resolution: {integrity: sha512-1ZG5Ar3dD8HtodX9XH1mRmE0qBXZlvjYXSFfpgFwocqfWnvhFuqtGUNseL8wgfImiRMztIjpQqlogQFQQtgiag==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@astrojs/compiler-binding-darwin-x64@0.5.2':
    resolution: {integrity: sha512-+kl35S7hiHJ2cb7eujwEsPFYYuSgE11uEE2Z20lAJ+undpgulMcW+weQqFPOSSZccEKHOiLIY+kQHkb4e4092w==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@astrojs/compiler-binding-linux-arm64-gnu@0.5.2':
    resolution: {integrity: sha512-BqlR0EHNQLPLwgL9+xogjsAc7zGf0cHho2CPdhv0P1yqbVMwGVaGAqrANP6VYAXCqSC43AF4Czcxc2n+oqdesg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@astrojs/compiler-binding-linux-arm64-musl@0.5.2':
    resolution: {integrity: sha512-GRGyby3AZWw5d6JQzidyxPyvGgHWsSusrpgKyFVpDTKctABF7L3Pd5V1cRJbV36/rcu+Eh292/wL7pF7MkmGkQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@astrojs/compiler-binding-linux-x64-gnu@0.5.2':
    resolution: {integrity: sha512-9XAqGTMQAtIslMsjK3xdyY6OI9d59OZqcLBB6pvD/DcoR0daYswfrKx2azdDERDY4AqAnWPC7odVM1BmxYv3Vw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@astrojs/compiler-binding-linux-x64-musl@0.5.2':
    resolution: {integrity: sha512-jOViewGeTh9bSfS8vK72ECxoy2yvmA+Pd/ZcEvBI5c7+7IcfHwZ5qA4L9fRYuOhSrAifvQ2dV4vm1XAtloaWBw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@astrojs/compiler-binding-wasm32-wasi@0.5.2':
    resolution: {integrity: sha512-Z7p64doar1uvR5C9Xs6j1CV9lGlPVQX7OQ2aAtZ/xKC5aGS6GB13nyc2UfQXTQLvZrvVwsyaflTQy6ziY5Bekw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [wasm32]

  '@astrojs/compiler-binding-win32-arm64-msvc@0.5.2':
    resolution: {integrity: sha512-Tr13bh+ahTWsjXjzctK7pFpWV+dUU4FtBfETlR7gO+ueex0F+RDch7eRr0YfKysaRhk9tWm14lsCJ5uWyFPNHQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@astrojs/compiler-binding-win32-x64-msvc@0.5.2':
    resolution: {integrity: sha512-SfKkI+jOQYLh6wojPvVPV0lFfQnxisweN9B+qCzRvZp7DHAuGif8Y0WcC5PUgN4jb8VKy57LggQDtggR46Du1g==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@astrojs/compiler-binding@0.5.2':
    resolution: {integrity: sha512-lEn76+0JcMQ5RDXU0wSMWJg2ZppiZvSULpghC29cfv4o9bhvWFDbQjsCtvjjXN9iVLFQ7fL3wTR2L2UU13mP8g==}
    engines: {node: ^20.19.0 || >=22.12.0}

  '@astrojs/compiler-rs@0.5.2':
    resolution: {integrity: sha512-IvwYLB8t1M86rKO4oPdBi9GP4gzXcgrVlNgocjwos1jeeUuEIV8d9Crn1PvYD/5IKteWOxpIHomf7e8iYlkE+Q==}
    engines: {node: '>=22.12.0'}

  '@astrojs/internal-helpers@0.13.0':
    resolution: {integrity: sha512-20jxQqnSmpskcGyad7N5l6Xf1gz0UCa6lNde44bEBdaXGpncEYfAZJ142r2ZgzBaG4dUyzGmhqZWv1INU2eiHQ==}

  '@astrojs/language-server@2.17.3':
    resolution: {integrity: sha512-QIAFu1e/4quJMTPdmBOm+ZPXc5NDGZE4/YQjgR3EgjhGLl/tdidaWJDr5WmO2lesVc+BW1qN/xNBURmuePDG2A==}
    hasBin: true
    peerDependencies:
      prettier: ^3.0.0
      prettier-plugin-astro: '>=0.11.0'
    peerDependenciesMeta:
      prettier:
        optional: true
      prettier-plugin-astro:
        optional: true

  '@astrojs/markdown-satteri@0.4.6':
    resolution: {integrity: sha512-6biKp2lEAYycF3jhv91br+Otyf4EgDFkF1oRL9ks0u/m/YRGmI7XkGQ2MgaM35DslT03f7NtozKtlqfBNkp6bw==}

  '@astrojs/prism@4.1.2':
    resolution: {integrity: sha512-jMrUEpFDarDO1KWPvVc9eSa8DSfwBlwEOHwX+8zvZQpiqXRGDxFnOXHsYqV6DP7w+0qIgTr98gS1GdQlm8ypWg==}
    engines: {node: '>=22.23.4'}

  '@astrojs/telemetry@3.4.2':
    resolution: {integrity: sha512-2JOMRUxJrBSfiVDfeKLv1wBmvSIx1Y6u2YEO8awZ9qSq3u/rNAiUyFdOYi8dHv91kHrmYEQX7pRDw0J4xyj3UA==}
    engines: {node: '>=22.23.4'}

  '@astrojs/yaml2ts@0.2.4':
    resolution: {integrity: sha512-8oddpOae35pJsXPQXhTkM0ypfKPskVsh2bCxRtbf7e+/Epw2nReakFYpLKjZMEr75CsoF203PMnCocpfz0s69A==}

  '@babel/helper-string-parser@7.29.11':
    resolution: {integrity: sha512-snZbO7MEDOof+hvNa97EjEY7qD7h2kwvQr5AJC3ZhQudKW5dnej6k3kP9NQV88hJwaS8vDqRLFo9rivLEhle2g==}
    engines: {node: '>=6.9.0'}

  '@babel/helper-validator-identifier@7.29.7':
    resolution: {integrity: sha512-qehxGkRj55h/ff8EMaJ+cYhyaKlHIxqYDn682wQD7RNp9UujOQsHog2uS0r2vzr4pW+sXf90NeeayjcNaX3fFg==}
    engines: {node: '>=6.9.0'}

  '@babel/parser@7.29.11':
    resolution: {integrity: sha512-OZ6+oaK7GMyg3IfCpj8JOmn8n+w2rJbDT0LLfVDTLb1ZFeKDh3AiNELgCMUw175IJHSkLl74hG0M0VLsvx+gag==}
    engines: {node: '>=6.0.0'}
    hasBin: true

  '@babel/types@7.29.11':
    resolution: {integrity: sha512-WCsemW40Cpc6gouC1SrY6PBaZ+oLRlEVY9XBvZBI7il/HyUrb2nJ505wE1MHEFyDZNnrWDEuy4jL50WVHfTTSQ==}
    engines: {node: '>=6.9.0'}

  '@bruits/satteri-darwin-arm64@0.10.5':
    resolution: {integrity: sha512-27KTVl4TJkVahMy/ohyA7qd4938G5UNneFUz/PsScYfpIhj0IVAS23mpcJXdPF44sa6nva198lmV/cKIb2YPyA==}
    cpu: [arm64]
    os: [darwin]

  '@bruits/satteri-darwin-x64@0.10.5':
    resolution: {integrity: sha512-IjnLe3nKspq6qaeqGgjT7MT8VrTV74yWRlaag7ZdNsI8TDAYZ0iPxMCo+9KQZHUk5EyVB+reBI/PFWL5KuFw9Q==}
    cpu: [x64]
    os: [darwin]

  '@bruits/satteri-linux-arm64-gnu@0.10.5':
    resolution: {integrity: sha512-glkYXZCJywjP13v67eAyAMSJdF+ncvEbYvgi/wOtffL9tQ27lr/zsyzUfgs+ovjJ9d8JNQKiXeiArJcX8PJL9w==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@bruits/satteri-linux-arm64-musl@0.10.5':
    resolution: {integrity: sha512-yWdgG1g17Nh2QyGVlFUxGRa3FEFwiMcpZEyMNWkbM3deC94cmVc+/i9OuyFpdKuWo3GkgoCtYVOoxk1uCnCZIA==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@bruits/satteri-linux-x64-gnu@0.10.5':
    resolution: {integrity: sha512-FVaLoPT1fBgGl0J+AYebyyXJYBachGl8Oyyrf1lye4RTqCB4S0Gwkj1uM9RJyThUOvx5VUmAT1CnNh1SFHA+kw==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@bruits/satteri-linux-x64-musl@0.10.5':
    resolution: {integrity: sha512-EHpVAx2bqW3GINHTKkljtxVfQmVDGWIuwOYOP5YghTj+0PkBa2o8oKPRtQ9Kbsr1Fye8jtUcDjhwj2jMNugZKg==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@bruits/satteri-wasm32-wasi@0.10.5':
    resolution: {integrity: sha512-ypz8c/Zmipxp4IoeDa228Gstv6TLzVmNs3yC6wKCoNSOjx1iwpgzu87Y3hTkXFdwChVGU85qeUDuOIarGUZQLw==}
    engines: {node: '>=14.0.0'}
    cpu: [wasm32]

  '@bruits/satteri-win32-arm64-msvc@0.10.5':
    resolution: {integrity: sha512-siTV88nb0LRqNpkL2gXboqCwVdq95sLtzMHS1/3eONV2gLbB3NAK46wmSMvCO/yquBvI2lvaFIfd8P12ecsxBw==}
    cpu: [arm64]
    os: [win32]

  '@bruits/satteri-win32-x64-msvc@0.10.5':
    resolution: {integrity: sha512-C3IfPvfvMXmlzBxaMPKFS1XiuV9pu2mC7YqkPk7PSvTgPZ8gbdASIpHpztDLvTTQjqZ0z1Ol8tK5X+V6XXC0wQ==}
    cpu: [x64]
    os: [win32]

  '@capsizecss/unpack@4.0.1':
    resolution: {integrity: sha512-CuNiSqg7+e1cO/GjffyMOm5Tt2jUF9CWHHnvQ/UkqvtkGfHdgwEC0wpmq7fkN3gxwpRnrAN0WzO3vREKmNolMQ==}
    engines: {node: '>=18'}

  '@clack/core@1.5.1':
    resolution: {integrity: sha512-iHTrHA8MtVuLl2TfZySmcKv1qO2PoyC9Z7pfSDozEuV5vtY3/wcOPKJXlqJ5Oq2Cx5DDGQGAMVx6HZfRRoVEbQ==}
    engines: {node: '>= 20.12.0'}

  '@clack/prompts@1.8.1':
    resolution: {integrity: sha512-dlT1m5e/0yUL0kRNcQn7yGLVThkgbB0Ga/1AmfDDC/8ik6AIiSf2QLQO2zPYvefsHP0aFgxO93cVLCCfDp7kzQ==}
    engines: {node: '>= 20.12.0'}

  '@emmetio/abbreviation@2.3.3':
    resolution: {integrity: sha512-mgv58UrU3rh4YgbE/TzgLQwJ3pFsHHhCLqY20aJq+9comytTXUDNGG/SMtSeMJdkpxgXSXunBGLD8Boka3JyVA==}

  '@emmetio/css-abbreviation@2.1.8':
    resolution: {integrity: sha512-s9yjhJ6saOO/uk1V74eifykk2CBYi01STTK3WlXWGOepyKa23ymJ053+DNQjpFcy1ingpaO7AxCcwLvHFY9tuw==}

  '@emmetio/css-parser@0.4.1':
    resolution: {integrity: sha512-2bC6m0MV/voF4CTZiAbG5MWKbq5EBmDPKu9Sb7s7nVcEzNQlrZP6mFFFlIaISM8X6514H9shWMme1fCm8cWAfQ==}

  '@emmetio/html-matcher@1.3.0':
    resolution: {integrity: sha512-NTbsvppE5eVyBMuyGfVu2CRrLvo7J4YHb6t9sBFLyY03WYhXET37qA4zOYUjBWFCRHO7pS1B9khERtY0f5JXPQ==}

  '@emmetio/scanner@1.0.4':
    resolution: {integrity: sha512-IqRuJtQff7YHHBk4G8YZ45uB9BaAGcwQeVzgj/zj8/UdOhtQpEIupUhSk8dys6spFIWVZVeK20CzGEnqR5SbqA==}

  '@emmetio/stream-reader-utils@0.1.0':
    resolution: {integrity: sha512-ZsZ2I9Vzso3Ho/pjZFsmmZ++FWeEd/txqybHTm4OgaZzdS8V9V/YYWQwg5TC38Z7uLWUV1vavpLLbjJtKubR1A==}

  '@emmetio/stream-reader@2.2.0':
    resolution: {integrity: sha512-fXVXEyFA5Yv3M3n8sUGT7+fvecGrZP4k6FnWWMSZVQf69kAq0LLpaBQLGcPR30m3zMmKYhECP4k/ZkzvhEW5kw==}

  '@emnapi/core@1.11.1':
    resolution: {integrity: sha512-RSvbQmHzdKzNsLYa/wHrbc3KN4sYLKAdPZxqiM2HATqv/SBk2/ENSHpvXGaLOMcsAyz0poEGqkmmKYG3OWiJEQ==}

  '@emnapi/core@1.11.3':
    resolution: {integrity: sha512-zLpS5asjEb7lq8jYLq37N6XKaE41DIexlY1rF/z4/tIl3wo13Sqm28fRyfIsKZD+NZ8mM5RoKkpW/rBcuoSZSg==}

  '@emnapi/runtime@1.11.1':
    resolution: {integrity: sha512-vgj7R3y3Wgx24IQaGPA/R6YFXLHVMOZ0uVEyIQPaWs+rd1AzfEMXlAC22FYwO1XkKR6NPsq7mUandH8oIRdZFw==}

  '@emnapi/runtime@1.11.3':
    resolution: {integrity: sha512-Xz4Tpyki7XyrpbUK1jR1AhdAdaXyhhY4lZ3neLodmhpuWfy2PAQN5B46sAiU4liOXGLkHypn/qU+jvfWSCYYLA==}

  '@emnapi/wasi-threads@1.2.2':
    resolution: {integrity: sha512-c95qOXkHdydNKhscBTebqEC1CVAZpyqOfVfBzQ1qgzyl3gfeldUjIggDbIZgDKsHLgnsM+igH7TJ/eAasaVuMA==}

  '@emnapi/wasi-threads@1.2.3':
    resolution: {integrity: sha512-ELEBe8PsLvvJ6QMr0zLt8ffvOHW/dc1m3CEzNMg7aJUv3bMaoDtw2TXyDAwkYBuroxxuHEwhRTLJSe5sya547g==}

  '@fontsource/dm-sans@5.3.0':
    resolution: {integrity: sha512-lYJtMXXO28q1z+yz+z8XKd0s4hXaa9QdkETzkyD760sidCv5heI86weYA0sx0Nc4pAMAQTUuyf4gO44cYKKS9g==}

  '@fontsource/dm-serif-display@5.3.0':
    resolution: {integrity: sha512-ecRclUcYeto9fB7ghkB36H4MtUoaUYFjjornWYYeLCMHzaWEDPk2kIWgZOq0mKBNRxclRSieKcFeLonlMYDTKg==}

  '@fontsource/outfit@5.3.0':
    resolution: {integrity: sha512-0AVHzTTVJSxWDOxPKSfMeHhZeBFDU3cmgrcOb76ZEyhGo0+xgyG3GsLF3h9+X8w0IX7G4jzjJgFQEBiWdX6VgA==}

  '@fontsource/young-serif@5.3.0':
    resolution: {integrity: sha512-/ay2kPm7QzGKW/9tL7UVh+B5meX3J6gh2PLnHV2ohlIbQSMRGTuyzNNVWpzsHc3P3bcpMm1IPfuO7GRtFrXWvQ==}

  '@img/colour@1.1.0':
    resolution: {integrity: sha512-Td76q7j57o/tLVdgS746cYARfSyxk8iEfRxewL9h4OMzYhbW4TAcppl0mT4eyqXddh6L/jwoM75mo7ixa/pCeQ==}
    engines: {node: '>=18'}

  '@img/sharp-darwin-arm64@0.35.5':
    resolution: {integrity: sha512-QRUlFQ0WxvdWyqqG/WtI3iupfD5rBzmCHXSdPsY91sAtVtTo7Q4cb6zOccZ3gqEqkr0f1As1ehLqmEpDsRf+lg==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-darwin-x64@0.35.5':
    resolution: {integrity: sha512-+BR255RhDlpygUpOc/Jdt1nT6DQ3XG/ERo5wbcdOf5Q320dKtPCKPLR1LJs9VGXRaMa8l1uUa0tkCNOXiAxZUw==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-freebsd-wasm32@0.35.5':
    resolution: {integrity: sha512-Y/z91nEZ4uIBX5X3nfTovjU9lHNKFYbL2lpHCLVNmXQK03VIZvXBBt0KxbPGp2SdGSF+2mQU4e+hQaWOt86iAw==}
    engines: {node: '>=20.9.0'}
    os: [freebsd]

  '@img/sharp-libvips-darwin-arm64@1.3.4':
    resolution: {integrity: sha512-5R89nBYiRdUlSWJxPhO+GVtaXzXSxKnRu/xqMn3KTA3L9EB9Oy/P+Nn2f2vlhPuUdy/Zusb2DarbyTpGCfEDuw==}
    cpu: [arm64]
    os: [darwin]

  '@img/sharp-libvips-darwin-x64@1.3.4':
    resolution: {integrity: sha512-iR2OKH80yi0U+dUplyh3/xdpFvps6YkCwsXenIJxqxR1v9o+xtKTGbS9H7cps+2Vxjc8B1j96p75NmTGjIhtpQ==}
    cpu: [x64]
    os: [darwin]

  '@img/sharp-libvips-linux-arm64@1.3.4':
    resolution: {integrity: sha512-Y3dgX/6lE2QhQb+Gxy0WZxfg9MEm/JBjamZpS2IklP7xIQoKN4hzAm7KcMVGtaVDt3neE9OKBC7vAfonA/Lr1A==}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-arm@1.3.4':
    resolution: {integrity: sha512-LmRtTsOHuvM2+wlO2Db37dx5MiZhB0FvSunciw48YjdOkZz9KAiRbm8ujeMOA1INqmei5NapFxYEK1D1ZSidmw==}
    cpu: [arm]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-ppc64@1.3.4':
    resolution: {integrity: sha512-Le6boB8Tai0Nis+gIxIpKx68UDVVIqdR8Tin5Yf1z2LJJQLDJvCDRqRu+jC2qCoD+eIomonmOwB4smBRxfVpYQ==}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-riscv64@1.3.4':
    resolution: {integrity: sha512-aHkkIEHPRdQEegJN20MLmGtxYD9R2wQr3Cwpddnu5+YKMt6Uzax7S9h5gpZTo8wyrGuZSlfQ63OevL5mTyOC7Q==}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-s390x@1.3.4':
    resolution: {integrity: sha512-ra/mB6MikESDUO7Yg+Mi95bFBb9GsObURuhnOv3OqknjGe9sZrG8tCe9q0xSIGrtLgvgw0gKnFWcK4blSgQOuQ==}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linux-x64@1.3.4':
    resolution: {integrity: sha512-GJ//SSXbnwSDes02umB3nDJLFcQzw8a18V8fyhqr6tV515tOEMdImjjxj1AoafMRz56F3PHgftnj1QEKSU1zkw==}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-libvips-linuxmusl-arm64@1.3.4':
    resolution: {integrity: sha512-hvulFwtjUcagsis6BBxHwGFwWoNZjgYmULGVrZcyfNbjA8hKILbRxGg15/7w5HDyXHXUos/j6baAWqnCyQ2DWA==}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@img/sharp-libvips-linuxmusl-x64@1.3.4':
    resolution: {integrity: sha512-6zXKeE/p39I1AmA3cJG35eyBGNqNddLnUXjhwBnsGjFPWqf5VKkDBEqaEkPDoTEtkxwi2vv8Tcr2mDyP4So7Fg==}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@img/sharp-linux-arm64@0.35.5':
    resolution: {integrity: sha512-LYVx5JTsOM2CBzmxreh+nl64/3H6Xb09iSLknqH47z2T2DFFxDeFLP5y4dJwe6H7uGQlHPyEEtIqyo3DYsRwdQ==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-arm@0.35.5':
    resolution: {integrity: sha512-LEaXK2WdXVK5ykcw0buWyPMsmLLL2vpHLD6yrNSW+JGEL3BZPA4tpKN6iaMc4AxTTAoaX/sU1rOL51lcIz48ZQ==}
    engines: {node: '>=20.9.0'}
    cpu: [arm]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-ppc64@0.35.5':
    resolution: {integrity: sha512-QVxAAq8evVRI9ia2vqgwrmWucn5Dfv+JdWzj75pD8omHLPSP7f8p20O8jxzjCcuCEQEOtYOZUmX1hkiZ0kdevA==}
    engines: {node: '>=20.9.0'}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-riscv64@0.35.5':
    resolution: {integrity: sha512-LtdreXguaavKODPIfzJ4kffx7UNt1omwtK0rch4EBbbSTXPnxWmYSayXdLJw0fJzQ97kHt1gL/yh4tvU+nCyRQ==}
    engines: {node: '>=20.9.0'}
    cpu: [riscv64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-s390x@0.35.5':
    resolution: {integrity: sha512-UZasTOFiYzotTsGOCu42BfUzP6Tu6Do/947iRm1RsLKvlllxwGcn4RN27LibGWceix4Y+Pmw3jsnTcCQIgWjqA==}
    engines: {node: '>=20.9.0'}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linux-x64@0.35.5':
    resolution: {integrity: sha512-SxFtLTeJInhAA9Q836kux2vZNeOBQEx658qvbboZScr0wIARym3IcGmW7KpVD5sbVg0Ojy+udFQdayYIZyoNog==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@img/sharp-linuxmusl-arm64@0.35.5':
    resolution: {integrity: sha512-9HbMclmI1zlNkFRs3z9/eBtDjfD0sGlrX1z6b1qwmiFY5ElDLh4BC0LPBdVp7z1DXFiKlIcznf+ZlsuZzLxQqg==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@img/sharp-linuxmusl-x64@0.35.5':
    resolution: {integrity: sha512-4KOphqB035HrVdqLZfCgMzzERrQkkzOwRhl4OAkRO1YCldbaFjySXMaK534Mo0V+LndnlJk+sbUyLeU0ULyD1A==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@img/sharp-wasm32@0.35.5':
    resolution: {integrity: sha512-Ptsga1su4tQx+LLF1ECS9U6nz5kmrXKo6XVbtR48Ke3ZRxxgaWBu7IDtEe1quo8hiupwm6WFqxVlXaSf7IINGQ==}
    engines: {node: '>=20.9.0'}

  '@img/sharp-webcontainers-wasm32@0.35.5':
    resolution: {integrity: sha512-hfhF/FmoQyTUkA0bIKFOtw536BQSeBMe6BF6QyWlrPxT754+TFLaZ7sKKTfvvM0yJgKgaYTwnFCIZ/GuDw5SUA==}
    engines: {node: '>=20.9.0'}
    cpu: [wasm32]

  '@img/sharp-win32-arm64@0.35.5':
    resolution: {integrity: sha512-X4t7g+7ZA5DKblCBEXGjUqqemj4vczING/5viFwAL8h4N3qYeyjwdCvRLHi4EdOUI+2Z7UFlp1VM+p/AuEtm6Q==}
    engines: {node: '>=20.9.0'}
    cpu: [arm64]
    os: [win32]

  '@img/sharp-win32-ia32@0.35.5':
    resolution: {integrity: sha512-5Zm82LoBc43nhwNybZlG7Y1KO//Zhsn306fQl29ZOuStHLGTo3BWL83q3cznX0poxSAMuYL1On/BHBxkBeKr6A==}
    engines: {node: ^20.9.0}
    cpu: [ia32]
    os: [win32]

  '@img/sharp-win32-x64@0.35.5':
    resolution: {integrity: sha512-x76eH0vEiHlcMQu8Y8IenntaACtddpT6W0wmXtWrnKcnKI7ME5DdgqhAD6SEWOEl1v2zDvkZDhFA9KnURwpfqg==}
    engines: {node: '>=20.9.0'}
    cpu: [x64]
    os: [win32]

  '@jridgewell/resolve-uri@3.1.2':
    resolution: {integrity: sha512-bRISgCIjP20/tbWSPWMEi54QVPRZExkuD9lJL+UIxUKtwVJA8wW1Trb1jMs1RFXo1CBTNZ/5hpC9QvmKWdopKw==}
    engines: {node: '>=6.0.0'}

  '@jridgewell/sourcemap-codec@1.6.0':
    resolution: {integrity: sha512-T7jf+5zgsZHwNJ4lvQ7/aezbyk0nNX+zJVWpmHA7VYsEx7a7qr5Rg5IbtJFqkgze5Y2sruq1RUY8Q837Od7iFw==}

  '@jridgewell/trace-mapping@0.3.31':
    resolution: {integrity: sha512-zzNR+SdQSDJzc8joaeP8QQoCQr8NuYx2dIIytl1QeBEZHJ9uW6hebsrYgbz8hJwUQao3TWCMtmfV8Nu1twOLAw==}

  '@napi-rs/wasm-runtime@1.2.4':
    resolution: {integrity: sha512-AJxoUD2/15ESHbvpcyjU274nsAPLuOtPHCk0vKJM5pj//Fg/B1FXNWjPnXTT9PymCYYiHo4zPj0ZomXBKhoy7g==}
    engines: {node: ^20.19.0 || ^22.13.0 || >=23.5.0}
    peerDependencies:
      '@emnapi/core': ^1.7.1 || ^2.0.0-alpha.4
      '@emnapi/runtime': ^1.7.1 || ^2.0.0-alpha.4

  '@napi-rs/wasm-runtime@1.2.6':
    resolution: {integrity: sha512-mRyDmEw9/fCDXCGfL1sbgIw/GUK0PVxRW4YwgPN61F3LQ+fSyoBFarJVzgGyhF6kRzEQZ0FejDqm4WLXSeqQmw==}
    engines: {node: ^20.19.0 || ^22.13.0 || >=23.5.0}
    peerDependencies:
      '@emnapi/core': ^1.7.1 || 2.0.0-beta.2
      '@emnapi/runtime': ^1.7.1 || 2.0.0-beta.2

  '@oslojs/encoding@1.1.0':
    resolution: {integrity: sha512-70wQhgYmndg4GCPxPPxPGevRKqTIJ2Nh4OkiMWmDAVYsTQ+Ta7Sq+rPevXyXGdzr30/qZBnyOalCszoMxlyldQ==}

  '@oxc-project/types@0.155.0':
    resolution: {integrity: sha512-SeE8JPwW1xs1tHeNycjUtUBdhorRa8o4jlvjwk49R7/Z291i+4DQa7JJIgOm/TaYQZx+QrPQbVJ/9c8dMIZN8Q==}

  '@rolldown/binding-android-arm-eabi@1.2.15':
    resolution: {integrity: sha512-aLcgK9gIJ3YRvrrtfSBbRa27F5WrpiTaPulnFpsHPxpUHgFlSgnU4854MHwoRGEBhfRJDWCS2WQ7lIjskE9Olw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [android]

  '@rolldown/binding-android-arm64@1.2.15':
    resolution: {integrity: sha512-xD7DdZCrbThKuxNg7ooQmvp07ys4J/pnSEMTG3/OdOWl6daC67m/Q4fL78sRHMxTH/N4fGUbYhcPM0MF5WFHkg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [android]

  '@rolldown/binding-darwin-arm64@1.2.15':
    resolution: {integrity: sha512-m2WuQ6r0B4OTYxyPpNLtXaMRbRDUbG8YQV2Q3KTdSSK8Th6KHCnC8jVCJt8bvYeSB5WivkkNbc85mKadaSdOxA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [darwin]

  '@rolldown/binding-darwin-x64@1.2.15':
    resolution: {integrity: sha512-5RtnsHM36nodM9WbMy+zip0LGS/G+y5wro5RHrpOlr4ac24+1zSi9kiV2MP1myZeZ/ifEHfulQcWjnAXzc2C2A==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [darwin]

  '@rolldown/binding-freebsd-x64@1.2.15':
    resolution: {integrity: sha512-g3l09pyFqhu+135JKkbkwiKGQmwU5hUMUPJ4VdBADvuqR8d33L6H578rh8m7rtxbdp+VmX/+nzI7nvhSZlzpUQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [freebsd]

  '@rolldown/binding-linux-arm-gnueabihf@1.2.15':
    resolution: {integrity: sha512-nIe3VugI97nGQtspPxDqA4sXMUpeiocKIP/CqpY/u/vgbT+alX+cVxu1C/oVBPKg4feNTmYovE91v4DgXvXNwQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm]
    os: [linux]

  '@rolldown/binding-linux-arm64-gnu@1.2.15':
    resolution: {integrity: sha512-iTBjXx+B5QSvgI89lJfmqh4wTh8NabR1YZIIN3hNx4zSG0EVfVqkOvLulNpG4251pbd6/IAmZ/LefVk1Y4rPhw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-arm64-musl@1.2.15':
    resolution: {integrity: sha512-uN26XOnVR7rqQupG3V9oAG2EGGatWjcJHOeDOHUFCh4TBWmP2tHTFoVN13aYbwfm0aHqJAEmcwhAu6sooIjfqQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-linux-ppc64-gnu@1.2.15':
    resolution: {integrity: sha512-9nWkcdd+H+XhaA3fQIwpHnKIrfx/PQ6rO0pivr78Og07tXlUlctBBJoEYLPfhTmCR/QxEVdn6uPjHV5SymPhdw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [ppc64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-s390x-gnu@1.2.15':
    resolution: {integrity: sha512-Ggh0ciFjLwIusLSLz7LZYEaGdxOAUJXI+Qu5JCbhPJJHEt8vP+IjRATTJheiJsdzzTYgUiHUiw3X1Ea3ZpMBdA==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [s390x]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-gnu@1.2.15':
    resolution: {integrity: sha512-FHg60rS6DBePAYZ9X9F67x+JObFdmgn6tupA1C/a3B+CufFmTD4mX+e8M75tCiAO3foR/6xwVBI0KQiI7sn/rw==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  '@rolldown/binding-linux-x64-musl@1.2.15':
    resolution: {integrity: sha512-/cvV/7v5VGz/moiz0XKRj2dE8DzsKyhIu1KpOvJGPjRywg3yscON889UGvAe8zfiJLHup7VLjBduoGWi3HusWQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  '@rolldown/binding-openharmony-arm64@1.2.15':
    resolution: {integrity: sha512-MyzC5Hrv/sm+Z7TSGKP/j8001RO2xQm1zOpCNVL4j0cY/VhBZviludA2YFQ7i4lH6ZAXxQm0lcMdBzM+99mE7w==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [openharmony]

  '@rolldown/binding-win32-arm64-msvc@1.2.15':
    resolution: {integrity: sha512-+PgYiS+AH5omy6L45ZLxybasauJaj3M8buoT83D+nzPmCayXlxUV9hydhciCKVyIg0B/v0BtXPDE1uGqNwCPpg==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [arm64]
    os: [win32]

  '@rolldown/binding-win32-x64-msvc@1.2.15':
    resolution: {integrity: sha512-HFZd2QNQYn1JbIi+Hpd7H+r/lkWxcfIu28nirZ6eCn2LafuvmExMlb/P96Sfx5tf7pPArw39IdhmCF8vmV+NhQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    cpu: [x64]
    os: [win32]

  '@rolldown/pluginutils@1.0.1':
    resolution: {integrity: sha512-2j9bGt5Jh8hj+vPtgzPtl72j0yRxHAyumoo6TNfAjsLB04UtpSvPbPcDcBMxz7n+9CYB0c1GxQFxYRg2jimqGw==}

  '@shikijs/core@4.5.0':
    resolution: {integrity: sha512-6CIgwq+bt2JZ3OSjb/nBkkwEf/CfpHcbam+Mg5Pllco7HAGRQ2/EFhZrrJtbyNTgKwknfVS+llsXGygiDGwJWw==}
    engines: {node: '>=20'}

  '@shikijs/engine-javascript@4.5.0':
    resolution: {integrity: sha512-Ed6UdEj84LyYkwnxM5CvSMWAD+id9ExTYri0/+x41U9zrgNifPSS9lZm0JqBP0VfYI8yr8tY5nbNq9+p9R0kFA==}
    engines: {node: '>=20'}

  '@shikijs/engine-oniguruma@4.5.0':
    resolution: {integrity: sha512-dKVmbJecVdB9recl8a/CU4jdpNXyjJQrIcesIkpS70s5HS02ohpnCSpMUbotPnEUzbAcLQ+S4hwZYbkBBiTcJw==}
    engines: {node: '>=20'}

  '@shikijs/langs@4.5.0':
    resolution: {integrity: sha512-wwBTqwduXSz0X4v9Qa2EWeFaYJEw1clCncWjoRNQRbVDu3SPRTRWucnouYapKj3b8Q+sk/41Vbc4B5c8nuYzLA==}
    engines: {node: '>=20'}

  '@shikijs/primitive@4.5.0':
    resolution: {integrity: sha512-UM7ShlA8oz0OWxLLO8BmO9Ip6fVqdkt8yF0EH7nOCqHfrx1eEAzF0ZUVK7L+I8NEgeu1PEWSRlxaiPPeCb4iDg==}
    engines: {node: '>=20'}

  '@shikijs/themes@4.5.0':
    resolution: {integrity: sha512-zGb87H3UBbpuI4yoh5UguB1XbU+2BDU3kflM7UfZ+Cy2hWo9lBtqjSVK20gmLY6ukYl040hAypGXMgud9vul8Q==}
    engines: {node: '>=20'}

  '@shikijs/types@4.5.0':
    resolution: {integrity: sha512-drtPrtD8N0DENyD2cyt6Ajy+IWsiCLgMxODwLTpvH1UsN6a9jf90tNTPjqwHvA+0Lzu9e0txk8DjfqH1p9UJRw==}
    engines: {node: '>=20'}

  '@shikijs/vscode-textmate@10.1.0':
    resolution: {integrity: sha512-cVBuhDQjBZaNMTwBquYfPydrUP+E3hE6oYGasx8h6ZrODIM7/r+gxLDXdd66oszbrggZHEntdE6j+5gYIVyMWQ==}

  '@tybys/wasm-util@0.10.4':
    resolution: {integrity: sha512-W3c4gRigFS0T/Ma4qIYF3GDAc5AQdHb1yL5znJT1Zv1YaD9Kitx656wBjvr19qbiosmZT8lWDM5BEMynUqX65A==}

  '@types/chai@5.2.3':
    resolution: {integrity: sha512-Mw558oeA9fFbv65/y4mHtXDs9bPnFMZAL/jxdPFUpOHHIXX91mcgEHbS5Lahr+pwZFR8A7GQleRWeI6cGFC2UA==}

  '@types/deep-eql@4.0.2':
    resolution: {integrity: sha512-c9h9dVVMigMPc4bwTvC5dxqtqJZwQPePsWjPlpSOnojbor6pGqdk541lfA7AqFQr5pB1BRdq0juY9db81BwyFw==}

  '@types/estree-jsx@1.0.5':
    resolution: {integrity: sha512-52CcUVNFyfb1A2ALocQw/Dd1BQFNmSdkuC3BkZ6iqhdMfQz7JWOFRuJFloOzjk+6WijU56m9oKXFAXc7o3Towg==}

  '@types/estree@1.0.9':
    resolution: {integrity: sha512-GhdPgy1el4/ImP05X05Uw4cw2/M93BCUmnEvWZNStlCzEKME4Fkk+YpoA5OiHNQmoS7Cafb8Xa3Pya8m1Qrzeg==}

  '@types/hast@3.0.5':
    resolution: {integrity: sha512-rp/ezSWaD1m44dPKICGhiskI13nVr7qTloFwDa/IYkhhf5nzwP+zIQcIJh3WIFSBOy/H1PzB40jPjMDksN4F+g==}

  '@types/mdast@4.0.4':
    resolution: {integrity: sha512-kGaNbPh1k7AFzgpud/gMdvIm5xuECykRR+JnWKQno9TAXVa6WIVCGTPvYGekIDL4uwCZQSYbUxNBSb1aUo79oA==}

  '@types/nlcst@2.0.3':
    resolution: {integrity: sha512-vSYNSDe6Ix3q+6Z7ri9lyWqgGhJTmzRjZRqyq15N0Z/1/UnVsno9G/N40NBijoYx2seFDIl0+B2mgAb9mezUCA==}

  '@types/node@24.19.2':
    resolution: {integrity: sha512-93d49wCWJkCyN87MxLpNN6KXPCwFw7bVUg79mGUV1OS40JGWwVCr8n61DXCSqz7CV6/VfPkb7xec7uP2M+QHWQ==}

  '@types/unist@3.0.3':
    resolution: {integrity: sha512-ko/gIFJRv177XgZsZcBwnqJN5x/Gien8qNOn0D5bQU/zAzVf9Zt3BlcUiLqhV9y4ARk0GbT3tnUiPNgnTXzc/Q==}

  '@ungap/structured-clone@1.4.0':
    resolution: {integrity: sha512-1mEZtMKPM09vDmQt5y7YvmN2+DFTP7Tg0EWXdic8/C6VRnpb33e4ghisCIE3WZjsE2N8mf+QV1Zqh7ZFYLWInQ==}

  '@vitest/mocker@5.0.5':
    resolution: {integrity: sha512-xLL3lkDegJZw+MGoGaCCsFayDZthGgpAtr3Vziyfc4p7xH89K7KRPcRBBh/kEYm0Aqkt5DtTmkYpBtRV/FrHZg==}
    peerDependencies:
      msw: ^2.4.9 || ^3.0.0
      vite: ^6.0.0 || ^7.0.0 || ^8.0.0
    peerDependenciesMeta:
      msw:
        optional: true
      vite:
        optional: true

  '@vitest/spy@5.0.5':
    resolution: {integrity: sha512-lwJRExuH417257Q5wv9QYugN9IMJkoxcrKrYxGPQkBzl7wlNpTUxD/5yNX4ESKVUIShKPgkGchYPFMWOOk0wzw==}

  '@volar/kit@2.4.30':
    resolution: {integrity: sha512-VocLtumfXnqnPQEWc9Yx7uC1uOh9gyjVNlrn2+6Zx/z9aM6yTLhPK8lSqM9Ilu81XRa48I00lcYJWLi2BLxx8Q==}
    peerDependencies:
      typescript: <7

  '@volar/language-core@2.4.30':
    resolution: {integrity: sha512-73fjwEV8wat6aOZ6U/y/hqtE30ocrIWECg67b0txGczOMNw+MffLmvJ5fnFfN9drVUEYZzLdaNo6VAy6G6avMw==}

  '@volar/language-server@2.4.30':
    resolution: {integrity: sha512-tcP9fzzUBbsLIFHhgnRU4ncQjMn9G9Vax0ffkQmdCrXVEYqRroUepmyC5AVgiju5bCiLD6a55qen5iOTQHkb3g==}
    peerDependencies:
      typescript: <7
    peerDependenciesMeta:
      typescript:
        optional: true

  '@volar/language-service@2.4.30':
    resolution: {integrity: sha512-w/xDsASiqC71ggCOm7sTDXDNk/l72XEptodeRC68tgZ0e5QM4hM3zAqBGC7mBctvhrpYwKfMG+t9xcUo2hEFtA==}
    peerDependencies:
      typescript: <7
    peerDependenciesMeta:
      typescript:
        optional: true

  '@volar/source-map@2.4.30':
    resolution: {integrity: sha512-zym1ob/KwDDyN+0jGVtxwbxJSRRnUvv5HspCtz3yEfVVdCG4/dzxJktMGPAgemqRuVs81O0o/y0q3qOUErR8kg==}

  '@volar/typescript@2.4.30':
    resolution: {integrity: sha512-/DgA5tgYFPfrLFuSjIMXMGHk1LQv2+P8eny6+BhGNzFJELWIW7UZlc56ZLIRFhLsPpMfIFxM8/HvOPBggrjTZg==}
    peerDependencies:
      typescript: <7
    peerDependenciesMeta:
      typescript:
        optional: true

  '@vscode/emmet-helper@2.11.0':
    resolution: {integrity: sha512-QLxjQR3imPZPQltfbWRnHU6JecWTF1QSWhx3GAKQpslx7y3Dp6sIIXhKjiUJ/BR9FX8PVthjr9PD6pNwOJfAzw==}

  '@vscode/l10n@0.0.18':
    resolution: {integrity: sha512-KYSIHVmslkaCDyw013pphY+d7x1qV8IZupYfeIfzNA+nsaWHbn5uPuQRvdRFsa9zFzGeudPuoGoZ1Op4jrJXIQ==}

  ajv-draft-04@1.0.0:
    resolution: {integrity: sha512-mv00Te6nmYbRp5DCwclxtt7yV/joXJPGS7nM+97GdxvuttCOfgI3K4U25zboyeX0O+myI8ERluxQe5wljMmVIw==}
    peerDependencies:
      ajv: ^8.5.0
    peerDependenciesMeta:
      ajv:
        optional: true

  ajv-i18n@4.2.0:
    resolution: {integrity: sha512-v/ei2UkCEeuKNXh8RToiFsUclmU+G57LO1Oo22OagNMENIw+Yb8eMwvHu7Vn9fmkjJyv6XclhJ8TbuigSglPkg==}
    peerDependencies:
      ajv: ^8.0.0-beta.0

  ajv@8.20.0:
    resolution: {integrity: sha512-Thbli+OlOj+iMPYFBVBfJ3OmCAnaSyNn4M1vz9T6Gka5Jt9ba/HIR56joy65tY6kx/FCF5VXNB819Y7/GUrBGA==}

  am-i-vibing@0.5.0:
    resolution: {integrity: sha512-KLcsDhqf1XRrJmJr+9I/C0EX2K+sGrAGZFgkmd84c8TJO9zJBu+/kFInjazu1KfJWFhWDKdRWkpBzEs7s35DVA==}
    hasBin: true

  ansi-regex@6.4.0:
    resolution: {integrity: sha512-KzTVk2tCWAHtYrvvvaP8bJKJq2pVinhLcGEQdtLIYPbmNGNyYe8QwNaTUYQp2J7/vIsUKt5QCqAfUkYyG9DkOw==}
    engines: {node: '>=12'}

  ansi-styles@6.2.3:
    resolution: {integrity: sha512-4Dj6M28JB+oAH8kFkTLUo+a2jwOFkuqb3yucU0CANcRRUbxS0cP0nZYCGjcc3BNXwRIsUVmDGgzawme7zvJHvg==}
    engines: {node: '>=12'}

  anymatch@3.1.3:
    resolution: {integrity: sha512-KMReFUr0B4t+D+OBkjR3KYqvocp2XaSzO55UcB6mgQMd3KbcE+mWTyvVV7D/zsdEbNnV6acZUutkiHQXvTr1Rw==}
    engines: {node: '>= 8'}

  aria-query@5.3.2:
    resolution: {integrity: sha512-COROpnaoap1E2F000S62r6A60uHZnmlvomhfyT2DlTcrY1OrBKn2UhH7qn5wTC9zMvD0AY7csdPSNwKP+7WiQw==}
    engines: {node: '>= 0.4'}

  assertion-error@2.0.1:
    resolution: {integrity: sha512-Izi8RQcffqCeNVgFigKli1ssklIbpHnCYc6AknXGYoB6grJqyeby7jv12JUQgmTAnIDnbck1uxksT4dzN3PWBA==}
    engines: {node: '>=12'}

  astro@7.4.3:
    resolution: {integrity: sha512-gIytSwggVMj+/Az9sXSyqFrxpHfO2KpvefEJNJfwvQGDMarNRoNvZOjxal1+52maOIRt2m4PlrVHvOVPisxtxw==}
    engines: {node: '>=22.23.4', npm: '>=9.6.5', pnpm: '>=7.1.0'}
    hasBin: true
    peerDependencies:
      '@astrojs/markdown-remark': ^7.3.0
    peerDependenciesMeta:
      '@astrojs/markdown-remark':
        optional: true

  axobject-query@4.1.0:
    resolution: {integrity: sha512-qIj0G9wZbMGNLjLmg1PT6v2mE9AH2zlnADJD/2tC6E00hgmhUOfEB6greHPAfLRSufHqROIUTkw6E+M3lH0PTQ==}
    engines: {node: '>= 0.4'}

  bail@2.0.2:
    resolution: {integrity: sha512-0xO6mYd7JB2YesxDKplafRpsiOzPt9V02ddPCLbY1xYGPOX24NTyN50qnUxgCPcSoYMhKpAuBTjQoRZCAkUDRw==}

  boolbase@1.0.0:
    resolution: {integrity: sha512-JZOSA7Mo9sNGB8+UjSgzdLtokWAky1zbztM3WRLCbZ70/3cTANmQmOdR7y2g+J0e2WXywy1yS468tY+IruqEww==}

  ccount@2.0.1:
    resolution: {integrity: sha512-eyrF0jiFpY+3drT6383f1qhkbGsLSifNAjA61IUjZjmLCWjItY6LB9ft9YhoDgwfmclB2zhu51Lc7+95b8NRAg==}

  chai@6.3.0:
    resolution: {integrity: sha512-XWAtwJ6OHO+tj0EKCs0Y2UamnyOxseZWltU4x2U2wh8g4AigdjwvtUjvLP2tqkA/avxHEtzxNaqGq/YGNwckKg==}
    engines: {node: '>=18'}

  character-entities-html4@2.1.0:
    resolution: {integrity: sha512-1v7fgQRj6hnSwFpq1Eu0ynr/CDEw0rXo2B61qXrLNdHZmPKgb7fqS1a2JwF0rISo9q77jDI8VMEHoApn8qDoZA==}

  character-entities-legacy@3.0.0:
    resolution: {integrity: sha512-RpPp0asT/6ufRm//AJVwpViZbGM/MkjQFxJccQRHmISF/22NBtsHqAWmL+/pmkPWoIUJdWyeVleTl1wydHATVQ==}

  chokidar@5.0.0:
    resolution: {integrity: sha512-TQMmc3w+5AxjpL8iIiwebF73dRDF4fBIieAqGn9RGCWaEVwQ6Fb2cGe31Yns0RRIzii5goJ1Y7xbMwo1TxMplw==}
    engines: {node: '>= 20.19.0'}

  ci-info@4.4.0:
    resolution: {integrity: sha512-77PSwercCZU2Fc4sX94eF8k8Pxte6JAwL4/ICZLFjJLqegs7kCuAsqqj/70NQF6TvDpgFjkubQB2FW2ZZddvQg==}
    engines: {node: '>=8'}

  cliui@9.0.1:
    resolution: {integrity: sha512-k7ndgKhwoQveBL+/1tqGJYNz097I7WOvwbmmU2AR5+magtbjPWQTS1C5vzGkBC8Ym8UWRzfKUzUUqFLypY4Q+w==}
    engines: {node: '>=20'}

  clsx@2.1.1:
    resolution: {integrity: sha512-eYm0QWBtUrBWZWG0d386OGAw16Z995PiOVo2B7bjWSbHedGl5e0ZWaq65kOGgUSNesEIDkB9ISbTg/JK9dhCZA==}
    engines: {node: '>=6'}

  comma-separated-tokens@2.0.3:
    resolution: {integrity: sha512-Fu4hJdvzeylCfQPp9SGWidpzrMs7tTrlu6Vb8XGaRGck8QSNZJJp538Wrb60Lax4fPwR64ViY468OIUTbRlGZg==}

  commander@11.1.0:
    resolution: {integrity: sha512-yPVavfyCcRhmorC7rWlkHn15b4wDVgVmBA7kV4QVBsF7kv/9TKJAbAXVTxvTnwP8HHKjRCJDClKbciiYS7p0DQ==}
    engines: {node: '>=16'}

  common-ancestor-path@2.0.0:
    resolution: {integrity: sha512-dnN3ibLeoRf2HNC+OlCiNc5d2zxbLJXOtiZUudNFSXZrNSydxcCsSpRzXwfu7BBWCIfHPw+xTayeBvJCP/D8Ng==}
    engines: {node: '>= 18'}

  cookie-es@1.2.3:
    resolution: {integrity: sha512-lXVyvUvrNXblMqzIRrxHb57UUVmqsSWlxqt3XIjCkUP0wDAf6uicO6KMbEgYrMNtEvWgWHwe42CKxPu9MYAnWw==}

  cookie@2.0.1:
    resolution: {integrity: sha512-yuToqVvRrj6pfDXREyQAAv8SkAEk/8GS3jQRTiUMm66TVtBYmqQeoEjL2Lmq8Rpo6271vH76InTChTitEAm65w==}
    engines: {node: '>=22'}

  crossws@0.3.5:
    resolution: {integrity: sha512-ojKiDvcmByhwa8YYqbQI/hg7MEU0NC03+pSdEq4ZUnZR9xXpwk7E43SMNGkn+JxJGPFtNvQ48+vV2p+P1ml5PA==}

  css-select@6.0.0:
    resolution: {integrity: sha512-rZZVSLle8v0+EY8QAkDWrKhpgt6SA5OtHsgBnsj6ZaLb5dmDVOWUDtQitd9ydxxvEjhewNudS6eTVU7uOyzvXw==}

  css-tree@2.2.1:
    resolution: {integrity: sha512-OA0mILzGc1kCOCSJerOeqDxDQ4HOh+G8NbOJFOTgOCzpw7fCBubk0fEyxp8AgOL/jvLgYA/uV0cMbe43ElF1JA==}
    engines: {node: ^10 || ^12.20.0 || ^14.13.0 || >=15.0.0, npm: '>=7.0.0'}

  css-tree@3.2.1:
    resolution: {integrity: sha512-X7sjQzceUhu1u7Y/ylrRZFU2FS6LRiFVp6rKLPg23y3x3c3DOKAwuXGDp+PAGjh6CSnCjYeAul8pcT8bAl+lSA==}
    engines: {node: ^10 || ^12.20.0 || ^14.13.0 || >=15.0.0}

  css-what@7.0.0:
    resolution: {integrity: sha512-wD5oz5xibMOPHzy13CyGmogB3phdvcDaB5t0W/Nr5Z2O/agcB8YwOz6e2Lsp10pNDzBoDO9nVa3RGs/2BttpHQ==}
    engines: {node: '>= 6'}

  csso@5.0.5:
    resolution: {integrity: sha512-0LrrStPOdJj+SPCCrGhzryycLjwcgUSHBtxNA8aIDxf0GLsRh1cKYhB00Gd1lDOS4yGH69+SNn13+TWbVHETFQ==}
    engines: {node: ^10 || ^12.20.0 || ^14.13.0 || >=15.0.0, npm: '>=7.0.0'}

  defu@6.1.7:
    resolution: {integrity: sha512-7z22QmUWiQ/2d0KkdYmANbRUVABpZ9SNYyH5vx6PZ+nE5bcC0l7uFvEfHlyld/HcGBFTL536ClDt3DEcSlEJAQ==}

  dequal@2.0.3:
    resolution: {integrity: sha512-0je+qPKHEMohvfRTCEo3CrPG6cAzAYgmzKyxRiYSSDkS6eGJdyVJm7WaYA5ECaAD9wLB2T4EEeymA5aFVcYXCA==}
    engines: {node: '>=6'}

  destr@2.0.5:
    resolution: {integrity: sha512-ugFTXCtDZunbzasqBxrK93Ik/DRYsO6S/fedkWEMKqt04xZ4csmnmwGDBAb07QWNaGMAmnTIemsYZCksjATwsA==}

  detect-libc@2.1.2:
    resolution: {integrity: sha512-Btj2BOOO83o3WyH59e8MgXsxEQVcarkUOpEYrubB0urwnN10yQ364rsiByU11nZlqWYZm05i/of7io4mzihBtQ==}
    engines: {node: '>=8'}

  devalue@6.0.3:
    resolution: {integrity: sha512-3woMEITftG1wKeO/4d/QXH1DVKctTSZg3jNGPpjp9hNr5Hos8MCFF5McTML5ZtgKDObm2R591B0spRp2IVernA==}
    engines: {node: '>=18'}

  devlop@1.1.0:
    resolution: {integrity: sha512-RWmIqhcFf1lRYBvNmr7qTNuyCt/7/ns2jbpp1+PalgE/rDQcBT0fioSMUpJ93irlUhC5hrg4cYqe6U+0ImW0rA==}

  diff@9.0.0:
    resolution: {integrity: sha512-svtcdpS8CgJyqAjEQIXdb3OjhFVVYjzGAPO8WGCmRbrml64SPw/jJD4GoE98aR7r25A0XcgrK3F02yw9R/vhQw==}
    engines: {node: '>=0.3.1'}

  dom-serializer@2.0.0:
    resolution: {integrity: sha512-wIkAryiqt/nV5EQKqQpo3SToSOV9J0DnbJqwK7Wv/Trc92zIAYZ4FlMu+JPFW1DfGFt81ZTCGgDEabffXeLyJg==}

  domelementtype@2.3.0:
    resolution: {integrity: sha512-OLETBj6w0OsagBwdXnPdN0cnMfF9opN69co+7ZrbfPGrdpPVNBUj02spi6B1N7wChLQiPn4CSH/zJvXw56gmHw==}

  domhandler@5.0.3:
    resolution: {integrity: sha512-cgwlv/1iFQiFnU96XXgROh8xTeetsnJiDsTc7TYCLFd9+/WNkIqPTxiM/8pSd8VIrhXGTf1Ny1q1hquVqDJB5w==}
    engines: {node: '>= 4'}

  domutils@3.2.2:
    resolution: {integrity: sha512-6kZKyUajlDuqlHKVX1w7gyslj9MPIXzIFiz/rGu35uC1wMi+kMhQwGhl4lt9unC9Vb9INnY9Z3/ZA3+FhASLaw==}

  dset@3.1.4:
    resolution: {integrity: sha512-2QF/g9/zTaPDc3BjNcVTGoBbXBgYfMTTceLaYcFJ/W9kggFUkhxD/hMEeuLKbugyef9SqAx8cpgwlIP/jinUTA==}
    engines: {node: '>=4'}

  emmet@2.4.11:
    resolution: {integrity: sha512-23QPJB3moh/U9sT4rQzGgeyyGIrcM+GH5uVYg2C6wZIxAIJq7Ng3QLT79tl8FUwDXhyq9SusfknOrofAKqvgyQ==}

  emoji-regex@10.6.0:
    resolution: {integrity: sha512-toUI84YS5YmxW219erniWD0CIVOo46xGKColeNQRgOzDorgBi1v4D71/OFzgD9GO2UGKIv1C3Sp8DAn0+j5w7A==}

  entities@4.5.0:
    resolution: {integrity: sha512-V0hjH4dGPh9Ao5p0MoRY6BVqtwCjhz6vI5LT8AJ55H+4g9/4vbHx1I54fS0XuclLhDHArPQCiMjDxjaL8fPxhw==}
    engines: {node: '>=0.12'}

  es-module-lexer@2.3.2:
    resolution: {integrity: sha512-poHGpORABojJJucnV9KbOavETW8lBVnphkW77ER5/BQ5Fz7oXSoCNek7IH3vR5nRjdsEz926ibFYX8KtLQmdyw==}

  es-module-lexer@3.0.4:
    resolution: {integrity: sha512-BldNY5mwkVu+cQ5Ymn3e6hB9Sx8XHx4ZevWbiUyZbfKxJxYO27Hf0wfzkxIaD5CAJMaGl3YspKELj0ff/7nCMA==}

  escalade@3.2.0:
    resolution: {integrity: sha512-WUj2qlxaQtO4g6Pq5c29GTcWGDyd8itL8zTlipgECz3JesAiiOKotd8JU6otB3PACgG6xkJUyVhboMS+bje/jA==}
    engines: {node: '>=6'}

  estree-walker@3.0.3:
    resolution: {integrity: sha512-7RUKfXgSMMkzt6ZuXmqapOurLGPPfgj6l9uRZ7lRGolvk0y2yocc35LdcxKC5PQZdn2DMqioAQ2NoWcrTKmm6g==}

  eventemitter3@5.0.4:
    resolution: {integrity: sha512-mlsTRyGaPBjPedk6Bvw+aqbsXDtoAyAzm5MO7JgU+yVRyMQ5O8bD4Kcci7BS85f93veegeCPkL8R4GLClnjLFw==}

  expect-type@1.4.0:
    resolution: {integrity: sha512-KfYbmpRm0VbLjEvVa9yGwCi9GI34xvi7A/HXYWQO65CSD2u3MczUJSuwXKFIxlGsgBQizV9q5J9NHj4VG0n+pA==}
    engines: {node: '>=12.0.0'}

  extend@3.0.2:
    resolution: {integrity: sha512-fjquC59cD7CyW6urNXK0FBufkZcoiGG80wTuPujX590cB5Ttln20E2UB4S/WARVqhXffZl2LNgS+gQdPIIim/g==}

  fast-deep-equal@3.1.3:
    resolution: {integrity: sha512-f3qQ9oQy9j2AhBe/H9VC91wLmKBCCU/gDOnKNAYG5hswO7BLKj09Hc5HYNz9cGI++xlpDCIgDaitVs03ATR84Q==}

  fast-string-truncated-width@3.0.3:
    resolution: {integrity: sha512-0jjjIEL6+0jag3l2XWWizO64/aZVtpiGE3t0Zgqxv0DPuxiMjvB3M24fCyhZUO4KomJQPj3LTSUnDP3GpdwC0g==}

  fast-string-width@3.0.2:
    resolution: {integrity: sha512-gX8LrtNEI5hq8DVUfRQMbr5lpaS4nMIWV+7XEbXk2b8kiQIizgnlr12B4dA3ZEx3308ze0O4Q1R+cHts8kyUJg==}

  fast-uri@3.1.9:
    resolution: {integrity: sha512-hS/0Wt3Ya043oKXs0sIxrMpKQITXhMLIrVAKKXi4gozGC9v7YRWVnXIZzjNPTO02M9BdxLCWqK1yRXgNziVyJQ==}

  fast-wrap-ansi@0.2.2:
    resolution: {integrity: sha512-7F2Fl+TjRSenLqlU3UjSH0iyqopqoZIu7eZVpEirP2g1GtWa2G/ecEmBdgz31+Mxr+ELclgg6sokpSFIQiZ02Q==}

  fdir@6.5.0:
    resolution: {integrity: sha512-tIbYtZbucOs0BRGqPJkshJUYdL+SDH7dVM8gjy+ERp3WAUjLEFJE+02kanyHtwjWOnwrKYBiwAmM0p4kLJAnXg==}
    engines: {node: '>=12.0.0'}
    peerDependencies:
      picomatch: ^3 || ^4
    peerDependenciesMeta:
      picomatch:
        optional: true

  flattie@1.1.1:
    resolution: {integrity: sha512-9UbaD6XdAL97+k/n+N7JwX46K/M6Zc6KcFYskrYL8wbBV/Uyk0CTAMY0VT+qiK5PM7AIc9aTWYtq65U7T+aCNQ==}
    engines: {node: '>=8'}

  fnv1a-64@0.1.2:
    resolution: {integrity: sha512-mJbcILTPybAR1jdOwt/lVv8N2cffeJFFP+gVbSAwLEx1ujXH27RpPd8Rokec/KX9c76UYIB6Co+H4lQzxPnJfA==}

  fontace@0.4.1:
    resolution: {integrity: sha512-lDMvbAzSnHmbYMTEld5qdtvNH2/pWpICOqpean9IgC7vUbUJc3k+k5Dokp85CegamqQpFbXf0rAVkbzpyTA8aw==}

  fontkitten@1.0.3:
    resolution: {integrity: sha512-Wp1zXWPVUPBmfoa3Cqc9ctaKuzKAV6uLstRqlR56kSjplf5uAce+qeyYym7F+PHbGTk+tCEdkCW6RD7DX/gBZw==}
    engines: {node: '>=20'}

  fsevents@2.3.3:
    resolution: {integrity: sha512-5xoDfX+fL7faATnagmWPpbFtwh/R77WmMMqqHGS65C3vvB0YHrgF+B1YmZ3441tMj5n63k0212XNoJwzlhffQw==}
    engines: {node: ^8.16.0 || ^10.6.0 || >=11.0.0}
    os: [darwin]

  get-caller-file@2.0.5:
    resolution: {integrity: sha512-DyFP3BM/3YHTQOCUL/w0OZHR0lpKeGrxotcHWcqNEdnltqFwXVfhEBQ94eIo34AfQpo0rGki4cyIiftY06h2Fg==}
    engines: {node: 6.* || 8.* || >= 10.*}

  get-east-asian-width@1.7.0:
    resolution: {integrity: sha512-XjH1AECxf0giL2V1aU8vKyRR2ppRUb5c0EvT7zuJTokQ74bNo52zOtghqdWIqrhUD79fo3x0WfKZdOqxF6LG1Q==}
    engines: {node: '>=18'}

  get-tsconfig@5.0.0-beta.6:
    resolution: {integrity: sha512-X6fBC0pmImC70gvX2zm56go9hx0MyoGVdG0tUCkg/D+Xnh5TJsOZ7iDbOdI3PvmtrDxnu1YdDufpK2QJX1Meqw==}
    engines: {node: '>=20.20.0'}

  github-slugger@2.0.0:
    resolution: {integrity: sha512-IaOQ9puYtjrkq7Y0Ygl9KDZnrf/aiUJYUpVf89y8kyaxbRG7Y1SrX/jaumrv81vc61+kiMempujsM3Yw7w5qcw==}

  h3@1.15.11:
    resolution: {integrity: sha512-L3THSe2MPeBwgIZVSH5zLdBBU90TOxarvhK9d04IDY2AmVS8j2Jz2LIWtwsGOU3lu2I5jCN7FNvVfY2+XyF+mg==}

  hast-util-to-html@9.0.5:
    resolution: {integrity: sha512-OguPdidb+fbHQSU4Q4ZiLKnzWo8Wwsf5bZfbvu7//a9oTYoqD/fWpe96NuHkoS9h0ccGOTe0C4NGXdtS0iObOw==}

  hast-util-whitespace@3.0.0:
    resolution: {integrity: sha512-88JUN06ipLwsnv+dVn+OIYOvAuvBMy/Qoi6O7mQHxdPXpjy+Cd6xRkWwux7DKO+4sYILtLBRIKgsdpS2gQc7qw==}

  html-escaper@3.0.3:
    resolution: {integrity: sha512-RuMffC89BOWQoY0WKGpIhn5gX3iI54O6nRA0yC124NYVtzjmFWBIiFd8M0x+ZdX0P9R4lADg1mgP8C7PxGOWuQ==}

  html-void-elements@3.0.0:
    resolution: {integrity: sha512-bEqo66MRXsUGxWHV5IP0PUiAWwoEjba4VCzg0LjFJBpchPaTfyfCKTG6bc5F8ucKec3q5y6qOdGyYTSBEvhCrg==}

  http-cache-semantics@4.3.0:
    resolution: {integrity: sha512-M5t5LlJpS1UHMjvwRQVdFHvPISGeLAxNcrWuJkeGh0KxsqCHZ1O3NXZU/8x7cD0BDcGW8kapxMKTvwlqrNkHkA==}

  iron-webcrypto@1.2.1:
    resolution: {integrity: sha512-feOM6FaSr6rEABp/eDfVseKyTMDt+KGpeB35SkVn9Tyn0CqvVsY3EwI0v5i8nMHyJnzCIQf7nsy3p41TPkJZhg==}

  is-docker@4.0.0:
    resolution: {integrity: sha512-LHE+wROyG/Y/0ZnbktRCoTix2c1RhgWaZraMZ8o1Q7zCh0VSrICJQO5oqIIISrcSBtrXv0o233w1IYwsWCjTzA==}
    engines: {node: '>=20'}
    hasBin: true

  is-plain-obj@4.1.0:
    resolution: {integrity: sha512-+Pgi+vMuUNkJyExiMBt5IlFoMyKnr5zhJ4Uspz58WOhBF5QoIZkFyNHIbBAtHwzVAgk5RtndVNsDRN61/mmDqg==}
    engines: {node: '>=12'}

  json-schema-traverse@1.0.0:
    resolution: {integrity: sha512-NM8/P9n3XjXhIZn1lLhkFaACTOURQXjWhV4BA/RnOv8xvgqtqpAX9IO4mRQxSx1Rlo4tqzeqb0sOlruaOy3dug==}

  jsonc-parser@2.3.1:
    resolution: {integrity: sha512-H8jvkz1O50L3dMZCsLqiuB2tA7muqbSg1AtGEkN0leAqGjsUzDJir3Zwr02BhqdcITPg3ei3mZ+HjMocAknhhg==}

  jsonc-parser@3.3.1:
    resolution: {integrity: sha512-HUgH65KyejrUFPvHFPbqOY0rsFip3Bo5wb4ngvdi1EpCYWUQDC5V+Y7mZws+DLkr4M//zQJoanu1SP+87Dv1oQ==}

  kleur@4.1.5:
    resolution: {integrity: sha512-o+NO+8WrRiQEE4/7nwRJhN1HWpVmJm511pBHUxPLtp0BUISzlBplORYSmTclCnJvQq2tKu/sgl3xVpkc7ZWuQQ==}
    engines: {node: '>=6'}

  lightningcss-android-arm64@1.33.0:
    resolution: {integrity: sha512-gEpRTalKdosp4Bb8qWtc2iOgE5SeIHlpS1up9bFq2wAyYhl1UdTObYiHe98zEM9SQvSoqQZ1IQD0JNpg3Ml5pg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [android]

  lightningcss-darwin-arm64@1.33.0:
    resolution: {integrity: sha512-Sciaz8eenNTKn9b3t7+xr0ipTp9YxKQY4npwQ3mrRuL0BAVHBLyZxofhaKBAVtzmtRZ/zTyo0/to4B1uWG/Djg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [darwin]

  lightningcss-darwin-x64@1.33.0:
    resolution: {integrity: sha512-Z5UPAxzrjlWNNyGy6i65cJzzvgJ5D3T6wMvs+gWpY9d7qRhANrxqAp6LhxIgZhWEw18RfJTGcRxjuLIBr+m8XQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [darwin]

  lightningcss-freebsd-x64@1.33.0:
    resolution: {integrity: sha512-QQM/Ti/hQajJwCY+RiWuCZ9sdtI/XQk7nDK5vC8kkdwixezOlDgvDx7+RT+QjK6FcFT4MpsuoBnHIo/O3StRRg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [freebsd]

  lightningcss-linux-arm-gnueabihf@1.33.0:
    resolution: {integrity: sha512-N7FVBe6iS24MlM6R/4RBTxGhQheZGs7tiQ9U32UtF75NzP5Q7xWPRqLBCKxlRQRk3rY1jCIPLzx7WzOhuUIRLQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm]
    os: [linux]

  lightningcss-linux-arm64-gnu@1.33.0:
    resolution: {integrity: sha512-j2v/itmy4HlNxlc6voKXYgBqNi0Ng2LShg4z7GufpEgs05P+2suBVyi9I6YHq5uoVFx9ETin3eCEhLVyXGQnKg==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-arm64-musl@1.33.0:
    resolution: {integrity: sha512-yiO5ROMuYQgXbC60yjZU5CYSFZGKXL0HFATXt9mHJn1+zW55oCtMI9NfcVhYLMFDL7gV7oBPon/EmMMGg2OvtQ==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [linux]
    libc: [musl]

  lightningcss-linux-x64-gnu@1.33.0:
    resolution: {integrity: sha512-ar+Ju7LmcN0Jo4FpL4hpFybwNG9/3A/Br5KW2n2jyODg3MEZXaDYADdemoNS+BDNfMgKvylJLj4S5tyRActuAg==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [glibc]

  lightningcss-linux-x64-musl@1.33.0:
    resolution: {integrity: sha512-RYiYbkokw0trfKqqzfF55lginwEPrD3OJDfTuJzFs1MK6iFnDenaz1fqLLtX4ITG3OktJQXOeTaw1awrBAlZPw==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [linux]
    libc: [musl]

  lightningcss-win32-arm64-msvc@1.33.0:
    resolution: {integrity: sha512-1K+MPfLSFVpphzpdbfkhlWk6wBrTObBzS2T6db10PNOZgR9GoVsAWzwNyuhUYYbTp23j+4RrncfujZ4uAzXvwA==}
    engines: {node: '>= 12.0.0'}
    cpu: [arm64]
    os: [win32]

  lightningcss-win32-x64-msvc@1.33.0:
    resolution: {integrity: sha512-OlEICDx/Xl0FqSp4bry8zFnCvGpig3Gl4gCquvYwHuqJKEC1+n9NgDniFvqHGmMv1ZkqDJrDqKKSykTDX+ehuA==}
    engines: {node: '>= 12.0.0'}
    cpu: [x64]
    os: [win32]

  lightningcss@1.33.0:
    resolution: {integrity: sha512-WkUDrojuJs0xkgGf2udWxa3yGBRxPtxUkB79i6aCZLRgc7PM8fZe9TosfPDcvEpQZbuFASnHYmRLBLUbmLOIIA==}
    engines: {node: '>= 12.0.0'}

  lru-cache@11.5.3:
    resolution: {integrity: sha512-U4N8FgzmWxc8k1VH8Kr6lQg18U7Fjvby6wXHVRX/ZZ7IwWbRMgrRbP0Wrb5q5NVinryp4SQampHKdvtecItxUg==}
    engines: {node: 20 || >=22}

  magic-string@1.4.5:
    resolution: {integrity: sha512-oLLC2+YvQUfAa+vxoufE/yc1icb87M9iXIRqAoR/2EhE/8cb3SF/+Gi0c2By1B+5Vz2e2vQtUvHiu1+63Znh+w==}

  magicast@0.5.5:
    resolution: {integrity: sha512-UicdXN8zQ3JHlxVq+28afMXPr1z7WNY6+7EJnzTdQWkTAlMLF5fNCCKxJHBQwGaNGR11581EiQmQzx73+MvszA==}

  mdast-util-to-hast@13.2.1:
    resolution: {integrity: sha512-cctsq2wp5vTsLIcaymblUriiTcZd0CwWtCbLvrOzYCDZoWyMNV8sZ7krj09FSnsiJi3WVsHLM4k6Dq/yaPyCXA==}

  mdn-data@2.0.28:
    resolution: {integrity: sha512-aylIc7Z9y4yzHYAJNuESG3hfhC+0Ibp/MAMiaOZgNv4pmEdFyfZhhhny4MNiAfWdBQ1RQ2mfDWmM1x8SvGyp8g==}

  mdn-data@2.27.1:
    resolution: {integrity: sha512-9Yubnt3e8A0OKwxYSXyhLymGW4sCufcLG6VdiDdUGVkPhpqLxlvP5vl1983gQjJl3tqbrM731mjaZaP68AgosQ==}

  micromark-util-character@2.1.1:
    resolution: {integrity: sha512-wv8tdUTJ3thSFFFJKtpYKOYiGP2+v96Hvk4Tu8KpCAsTMs6yi+nVmGh1syvSCsaxz45J6Jbw+9DD6g97+NV67Q==}

  micromark-util-encode@2.0.1:
    resolution: {integrity: sha512-c3cVx2y4KqUnwopcO9b/SCdo2O67LwJJ/UyqGfbigahfegL9myoEFoDYZgkT7f36T0bLrM9hZTAaAyH+PCAXjw==}

  micromark-util-sanitize-uri@2.0.1:
    resolution: {integrity: sha512-9N9IomZ/YuGGZZmQec1MbgxtlgougxTodVwDzzEouPKo3qFWvymFHWcnDi2vzV1ff6kas9ucW+o3yzJK9YB1AQ==}

  micromark-util-symbol@2.0.1:
    resolution: {integrity: sha512-vs5t8Apaud9N28kgCrRUdEed4UJ+wWNvicHLPxCa9ENlYuAY31M0ETy5y1vA33YoNPDFTghEbnh6efaE8h4x0Q==}

  micromark-util-types@2.0.3:
    resolution: {integrity: sha512-oxB2Ik03hI0gv+VNn9tnh1t1YEe9MDPptViAEgfdf3YQHsn0pzGTgCdlSCJXcwhqm8phaEuM7zeEu3QQzVBrPg==}

  mrmime@2.0.1:
    resolution: {integrity: sha512-Y3wQdFg2Va6etvQ5I82yUhGdsKrcYox6p7FfL1LbK2J4V01F9TGlepTIhnK24t7koZibmg82KGglhA1XK5IsLQ==}
    engines: {node: '>=10'}

  muggle-string@0.4.1:
    resolution: {integrity: sha512-VNTrAak/KhO2i8dqqnqnAHOa3cYBwXEZe9h+D5h/1ZqFSTEFHdM65lR7RoIqq3tBBYavsOXV84NoHXZ0AkPyqQ==}

  nanoid@3.3.20:
    resolution: {integrity: sha512-uKdg2G3GNCKQn9byYOpxbGqrT2fGO5KRt5J/8b3pok8rT6qxGWF6hxMyJiEYtAf+FVyYuD9hRaDqX5uPFYJ4ZQ==}
    engines: {node: ^10 || ^12 || ^13.7 || ^14 || >=15.0.1}
    hasBin: true

  neotraverse@1.0.1:
    resolution: {integrity: sha512-WmmLty1YWwJl9yZi77v2dVIV6X2kuYV8YYBI/G3LWGKdGHmHUvL1z7FW0iDvEvGAwNEoc5x1tOOOyDnf5jJw/w==}
    engines: {node: '>= 10'}

  nlcst-to-string@4.0.0:
    resolution: {integrity: sha512-YKLBCcUYKAg0FNlOBT6aI91qFmSiFKiluk655WzPF+DDMA02qIyy8uiRqI8QXtcFpEvll12LpL5MXqEmAZ+dcA==}

  node-fetch-native@1.6.7:
    resolution: {integrity: sha512-g9yhqoedzIUm0nTnTqAQvueMPVOuIY16bqgAJJC8XOOubYFNwz6IER9qs0Gq2Xd0+CecCKFjtdDTMA4u4xG06Q==}

  node-mock-http@1.0.5:
    resolution: {integrity: sha512-KQyt/wLjG3TAc7DOUhpqWzgd4ERxR80JOlTK5VE5R1S12IaPVN5qkj4klBce9HPG1Njuup4Sb5bljaT34lIyjw==}

  normalize-path@3.0.0:
    resolution: {integrity: sha512-6eZs5Ls3WtCisHWp9S2GUy8dqkpGi4BVSz3GaqiE6ezub0512ESztXUwUB6C6IKbQkY2Pnb/mD4WYojCRwcwLA==}
    engines: {node: '>=0.10.0'}

  nth-check@2.1.1:
    resolution: {integrity: sha512-lqjrjmaOoAnWfMmBPL+XNnynZh2+swxiX3WUE0s4yEHI6m+AwrK2UZOimIRl3X/4QctVqS8AiZjFqyOGrMXb/w==}

  obug@3.0.0:
    resolution: {integrity: sha512-5vvB5+W7ePv+p3uqxi+RcW1XAzLW0/hxt3/4X4Lc4qHudzOhmBiBwOY6DRob4WnanAEGvNcLjF+KNOufrUoEQw==}
    engines: {node: '>=12.20.0'}

  ofetch@1.5.1:
    resolution: {integrity: sha512-2W4oUZlVaqAPAil6FUg/difl6YhqhUR7x2eZY4bQCko22UXg3hptq9KLQdqFClV+Wu85UX7hNtdGTngi/1BxcA==}

  oniguruma-parser@0.12.2:
    resolution: {integrity: sha512-6HVa5oIrgMC6aA6WF6XyyqbhRPJrKR02L20+2+zpDtO5QAzGHAUGw5TKQvwi5vctNnRHkJYmjAhRVQF2EKdTQw==}

  oniguruma-to-es@4.3.6:
    resolution: {integrity: sha512-csuQ9x3Yr0cEIs/Zgx/OEt9iBw9vqIunAPQkx19R/fiMq2oGVTgcMqO/V3Ybqefr1TBvosI6jU539ksaBULJyA==}

  p-limit@7.3.3:
    resolution: {integrity: sha512-SKgVvDU5TNIxQ4r30U75BNLC6a+6GOEjngrk/ysM5+Zu3oJuk1SC5ApzIzY/7PjCEjoVPMWJ0zho/4QUiEB7TQ==}
    engines: {node: '>=20'}

  p-queue@9.3.5:
    resolution: {integrity: sha512-Lki/zhXFVmDhesBUn/yHRLW9Bte7mE7xoFHzTR8sIomV7a2z+LxYAPkGvdfidNiu4fKSfjtawixxSHcZci5QcQ==}
    engines: {node: '>=20'}

  p-timeout@7.0.2:
    resolution: {integrity: sha512-prbX4Z3YszrFNgH+MW5Zoeq3baXrMtP/MQnFeET90UB/GtGcGDQ5Usg9OCy6ETjTTntOw1SL2z9fMPUppN3Guw==}
    engines: {node: '>=20'}

  package-manager-detector@1.9.0:
    resolution: {integrity: sha512-zAMfbta9nPA8AKkA4WdmNAT8R8s6Dk0/xwPsqNnRidMFcLo1YkLuPDTgs2f64XdzS8vbLNnoJ+uUIkgbz7oRHA==}

  path-browserify@1.0.1:
    resolution: {integrity: sha512-b7uo2UCUOYZcnF/3ID0lulOJi/bafxa1xPe7ZPsammBSpjSWQkjNxlt635YGS2MiR9GjvuXCtz2emr3jbsz98g==}

  piccolore@0.1.3:
    resolution: {integrity: sha512-o8bTeDWjE086iwKrROaDf31K0qC/BENdm15/uH9usSC/uZjJOKb2YGiVHfLY4GhwsERiPI1jmwI2XrA7ACOxVw==}

  picocolors@1.1.1:
    resolution: {integrity: sha512-xceH2snhtb5M9liqDsmEw56le376mTZkEX/jEb/RxNFyegNul7eNslCXP9FDj/Lcu0X8KEyMceP2ntpaHrDEVA==}

  picomatch@2.3.2:
    resolution: {integrity: sha512-V7+vQEJ06Z+c5tSye8S+nHUfI51xoXIXjHQ99cQtKUkQqqO1kO/KCJUfZXuB47h/YBlDhah2H3hdUGXn8ie0oA==}
    engines: {node: '>=8.6'}

  picomatch@4.0.7:
    resolution: {integrity: sha512-qcJu88Q2IWqJsDD529JKMdwGm/dvInW4HvQnRwiH9JtihJvzGOscDtHE3x1pBKeUOTysQ8kVmLnJ2kJu7yhcGA==}
    engines: {node: '>=12'}

  postcss@8.5.32:
    resolution: {integrity: sha512-LJlKCCAUFKOuZxipUdYw1NzIITEsPcgyOG9LkvRJvuKj/bRzbuRY0ARXvL0pWGpsZvn8jku+LMep2eU0seHp8g==}
    engines: {node: ^10 || ^12 || >=14}

  prettier@3.9.10:
    resolution: {integrity: sha512-skGHTH1Yb9QvaTC4hWnRTzEYtCpApF0UMBPz+t/0ZPzP8ihefo/btKd+QA7pUE0fEwA1SbS/NmhyEcstdXOIdA==}
    engines: {node: '>=14'}
    hasBin: true

  prismjs@1.30.0:
    resolution: {integrity: sha512-DEvV2ZF2r2/63V+tK8hQvrR2ZGn10srHbXviTlcv7Kpzw8jWiNTqbVgjO3IY8RxrrOUF8VPMQQFysYYYv0YZxw==}
    engines: {node: '>=6'}

  process-ancestry@0.1.0:
    resolution: {integrity: sha512-tGqJW/UnclpYASFcM6Xh8D8l/BMtaQ9+CSG0vlJSJTcdMM4lDRv4c6H0Pdcsfted+bVczdYSfk2fdukg2gQkZg==}
    engines: {node: '>=18.0.0'}

  property-information@7.2.0:
    resolution: {integrity: sha512-IAtzIB6sUiWaJYrX9smp3V46pBGbBeLFRGdh25kg1334VcBlD8HzhPeNIWQH9zhGmo2itIe25EHt9dQP7G5hmg==}

  radix3@1.1.2:
    resolution: {integrity: sha512-b484I/7b8rDEdSDKckSSBA8knMpcdsXudlE/LNL639wFoHKwLbEkQFZHWEYwDC0wa0FKUcCY+GAF73Z7wxNVFA==}

  readdirp@5.1.1:
    resolution: {integrity: sha512-Kko+Y5XQ6fM+Ce3dq3m9YGxnacYZYl9cA1wZjaF3Vbry2L3i1qVg8+CAgNPsXRArPMUMCaOR7oa9Nqntc43JKA==}
    engines: {node: '>= 20.19.0'}

  regex-recursion@6.0.2:
    resolution: {integrity: sha512-0YCaSCq2VRIebiaUviZNs0cBz1kg5kVS2UKUfNIx8YVs1cN3AV7NTctO5FOKBA+UT2BPJIWZauYHPqJODG50cg==}

  regex-utilities@2.3.0:
    resolution: {integrity: sha512-8VhliFJAWRaUiVvREIiW2NXXTmHs4vMNnSzuJVhscgmGav3g9VDxLrQndI3dZZVVdp0ZO/5v0xmX516/7M9cng==}

  regex@6.1.0:
    resolution: {integrity: sha512-6VwtthbV4o/7+OaAF9I5L5V3llLEsoPyq9P1JVXkedTP33c7MfCG0/5NOPcSJn0TzXcG9YUrR0gQSWioew3LDg==}

  request-light@0.5.8:
    resolution: {integrity: sha512-3Zjgh+8b5fhRJBQZoy+zbVKpAQGLyka0MPgW3zruTF4dFFJ8Fqcfu9YsAvi/rvdcaTeWG3MkbZv4WKxAn/84Lg==}

  request-light@0.7.0:
    resolution: {integrity: sha512-lMbBMrDoxgsyO+yB3sDcrDuX85yYt7sS8BfQd11jtbW/z5ZWgLZRcEGLsLoYw7I0WSUGQBs8CC8ScIxkTX1+6Q==}

  require-from-string@2.0.2:
    resolution: {integrity: sha512-Xf0nWe6RseziFMu+Ap9biiUbmplq6S9/p+7w7YXP/JBHhrUDDUhwa+vANyubuqfZWTveU//DYVGsDG7RKL/vEw==}
    engines: {node: '>=0.10.0'}

  resolve-pkg-maps@1.0.0:
    resolution: {integrity: sha512-seS2Tj26TBVOC2NIc2rOe2y2ZO7efxITtLZcGSOnHHNOQ7CkiUBfw0Iw2ck6xkIhPwLhKNLS8BO+hEpngQlqzw==}

  retext-smartypants@6.2.0:
    resolution: {integrity: sha512-kk0jOU7+zGv//kfjXEBjdIryL1Acl4i9XNkHxtM7Tm5lFiCog576fjNC9hjoR7LTKQ0DsPWy09JummSsH1uqfQ==}

  rolldown@1.2.15:
    resolution: {integrity: sha512-6odND+fel5zVw3I4Yc2e69gvguDnX0CAAGiNDZSq4ik5WUcaLrkD2GLuog0XcODbor31hZ5ayEMgVDno+KPV5g==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true

  satteri@0.10.5:
    resolution: {integrity: sha512-Ao1LKpAEa9Wdg0otgbVKViZHEq9ebdXe4DMrp3s9vQAU0HNIuHnFEuMuOcm0ZIXyV0Yzxj91NvhLpvXZJO/5ZQ==}

  sax@1.6.1:
    resolution: {integrity: sha512-42tBVwLWnaQvW5zc4HbZrTuWccECCZfBi92FDuwtqxasH+JbPB3/FOKb1m222K42R4WxuxzzMsTswfzgtSu64Q==}
    engines: {node: '>=11.0.0'}

  semver@7.8.5:
    resolution: {integrity: sha512-Y7/KDsb8LjooZpwaqGyulO6DQlksgCncchHGk+sZIY4SBvUocMBEFH5Ur1fI4dV+Jvl0w6cjvucaIi40puRioA==}
    engines: {node: '>=10'}
    hasBin: true

  sharp@0.35.5:
    resolution: {integrity: sha512-Ywn4OnzGukp7CDMrp08RQ50YKmuwG47brZgIVPTvBaaAfQlRlygrRqSrxdCiL9M+LlzLBiJ68IR1QqvzHyjC7g==}
    engines: {node: '>=20.9.0'}
    peerDependencies:
      '@types/node': '*'
    peerDependenciesMeta:
      '@types/node':
        optional: true

  shiki@4.5.0:
    resolution: {integrity: sha512-OcRW72ngQvc+MSVWBRIovC/BTW589iUE/Vxav7VeM4RcY9MUjqB+IR6ILG1k9nuW6LiG/nct9uma4/MBtnZbmQ==}
    engines: {node: '>=20'}

  sisteransi@1.0.5:
    resolution: {integrity: sha512-bLGGlR1QxBcynn2d5YmDX4MGjlZvy2MRBDRNHLJ8VI6l6+9FUiyTFNJ0IveOSP0bcXgVDPRcfGqA0pjaqUpfVg==}

  smol-toml@1.9.1:
    resolution: {integrity: sha512-j7WyPdf0CJoutMzMoPLF/bVXHtKZIT9Rb4eGeEbWw8X2t5oirjPgpL+OpaENZrILYaXqYwnVH+qgUwVbl+pUJQ==}
    engines: {node: '>= 18'}

  source-map-js@1.2.2:
    resolution: {integrity: sha512-KGj/8Y43x35aZVDtt+J4mK1hoLGHULMYfSkODJNQjNDC3oW1PqPoxMwo0pLUsWM/UEGzON/NxeHywEfNXNP3Vw==}
    engines: {node: '>=0.10.0'}

  space-separated-tokens@2.0.2:
    resolution: {integrity: sha512-PEGlAwrG8yXGXRjW32fGbg66JAlOAwbObuqVoJpv/mRgoWDQfgH1wDPvtzWyUSNAXBGSk8h755YDbbcEy3SH2Q==}

  std-env@4.3.0:
    resolution: {integrity: sha512-OtU/EgQ1kIm5KwqQpBC6ZEMXrZRui11w8zgfTWp8cdO9B8OaPsbA8bTHO2P+HNo1VlUTGMVBwPhydu6poeXiag==}

  string-width@7.2.0:
    resolution: {integrity: sha512-tsaTIkKW9b4N+AEj+SVA+WhJzV7/zMhcSu78mLKWSk7cXMOSHsBKFWUs0fWwq8QyK3MgJBQRX6Gbi4kYbdvGkQ==}
    engines: {node: '>=18'}

  string-width@8.3.0:
    resolution: {integrity: sha512-ZbmZM0JCihQN91dWnxoipT2KOEyHqEyfRXUyjuRhW8b/xnqPDoq4gWEVApTVa9db2wN8mmoikgFBbjh71+cGeQ==}
    engines: {node: '>=20'}

  stringify-entities@4.0.4:
    resolution: {integrity: sha512-IwfBptatlO+QCJUo19AqvrPNqlVMpW9YEL2LIVY+Rpv2qsjCGxaDLNRgeGsQWJhfItebuJhsGSLjaBbNSQ+ieg==}

  strip-ansi@7.2.0:
    resolution: {integrity: sha512-yDPMNjp4WyfYBkHnjIRLfca1i6KMyGCtsVgoKe/z1+6vukgaENdgGBZt+ZmKPc4gavvEZ5OgHfHdrazhgNyG7w==}
    engines: {node: '>=12'}

  svgo@4.1.0:
    resolution: {integrity: sha512-bkxnTg1kSU0guhIBmibA6UUhrQmPVA1XsQLN+ylCd+UWzbnLkySOcXpyk1mrl05f+pcaCx2eHb+sp6BgMZWX+Q==}
    engines: {node: '>=16'}
    hasBin: true

  tiny-inflate@1.0.3:
    resolution: {integrity: sha512-pkY1fj1cKHb2seWDy0B16HeWyczlJA9/WW3u3c4z/NiWDsO3DOU5D7nhTLE9CF0yXv/QZFY7sEJmj24dK+Rrqw==}

  tinybench@6.2.2:
    resolution: {integrity: sha512-nIZ2N2dFpjBsg2hgitKu7mA+FvsIJuGJOwysRngmVRRmWgR/UyPjwJj8c/fT/dhm8EkHnF5EOogRf+0Z2qrimA==}
    engines: {node: '>=20.0.0'}

  tinyclip@1.0.3:
    resolution: {integrity: sha512-nTv2raKFMzGG6JJp0lpNDsRPdfFE6UHlu2rVEjXo8vkx1ZS3LW2CVXqIaLu8xZlu+6tbFs9V58Qc/Jmk/Ii7wA==}
    engines: {node: ^16.14.0 || >= 17.3.0}

  tinyexec@1.3.1:
    resolution: {integrity: sha512-GCvB3aoys96IuDFBMcTB46JOR6mdMtAToqwiW8JlWhsoh1mhHi/xn9ss/Dg7N555GiJyEt2qzoG/NHCwM6h1EA==}
    engines: {node: '>=18'}

  tinyglobby@0.2.17:
    resolution: {integrity: sha512-wXR/dYpcqKmfWpEdZjiKJOwCNFndD0DMnrW/cYjVGttEkBfVgcLFHoNrlj47mjOVic9yyNu65alsgF4NQyTa2g==}
    engines: {node: '>=12.0.0'}

  tinyps@0.5.1:
    resolution: {integrity: sha512-B6Ykif5HflC3AdDkS4Zst/2muYVfeXoVMy+KorqH80s/1x4vunIORpNySH681X7fjj+dFM9MDKD6/Hsccjb87Q==}

  trim-lines@3.0.1:
    resolution: {integrity: sha512-kRj8B+YHZCc9kQYdWfJB2/oUl9rA99qbowYYBtr4ui4mZyAQ2JpvVBd/6U2YloATfqBhBTSMhTpgBHtU0Mf3Rg==}

  trough@2.2.0:
    resolution: {integrity: sha512-tmMpK00BjZiUyVyvrBK7knerNgmgvcV/KLVyuma/SC+TQN167GrMRciANTz09+k3zW8L8t60jWO1GpfkZdjTaw==}

  tslib@2.8.1:
    resolution: {integrity: sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==}

  typesafe-path@0.2.2:
    resolution: {integrity: sha512-OJabfkAg1WLZSqJAJ0Z6Sdt3utnbzr/jh+NAHoyWHJe8CMSy79Gm085094M9nvTPy22KzTVn5Zq5mbapCI/hPA==}

  typescript-auto-import-cache@0.3.6:
    resolution: {integrity: sha512-RpuHXrknHdVdK7wv/8ug3Fr0WNsNi5l5aB8MYYuXhq2UH5lnEB1htJ1smhtD5VeCsGr2p8mUDtd83LCQDFVgjQ==}

  typescript@5.9.3:
    resolution: {integrity: sha512-jl1vZzPDinLr9eUt3J/t7V6FgNEw9QjvBPdysz9KfQDD41fQrC2Y4vKQdiaUpFT4bXlb1RHhLpp8wtm6M5TgSw==}
    engines: {node: '>=14.17'}
    hasBin: true

  ufo@1.6.4:
    resolution: {integrity: sha512-JFNbkD1Svwe0KvGi8GOeLcP4kAWQ609twvCdcHxq1oSL8svv39ZuSvajcD8B+5D0eL4+s1Is2D/O6KN3qcTeRA==}

  ultrahtml@1.7.0:
    resolution: {integrity: sha512-2xRd0VHoAQE4M+vF/DvFFB7pUV0ZxTW1TLi7lHQWnF/Sb5TPeEUV/l+hxcNnGO00ZXGnR0voCMmYRKQf+rvJ2g==}

  uncrypto@0.1.3:
    resolution: {integrity: sha512-Ql87qFHB3s/De2ClA9e0gsnS6zXG27SkTiSJwjCc9MebbfapQfuPzumMIUMi38ezPZVNFcHI9sUIepeQfw8J8Q==}

  undici-types@7.24.6:
    resolution: {integrity: sha512-WRNW+sJgj5OBN4/0JpHFqtqzhpbnV0GuB+OozA9gCL7a993SmU+1JBZCzLNxYsbMfIeDL+lTsphD5jN5N+n0zg==}

  undici@8.12.3:
    resolution: {integrity: sha512-+fdndUTwBP86cVjihTp21hZHo7d6oj1c/47XPA3lL8mM0XHs+C4EkcjmgRsFnFk2f/UONGDy9ItBItmXsLOQHw==}
    engines: {node: '>=22.19.0'}

  unified@11.0.5:
    resolution: {integrity: sha512-xKvGhPWw3k84Qjh8bI3ZeJjqnyadK+GEFtazSfZv/rKeTkTjOJho6mFqh2SM96iIcZokxiOpg78GazTSg8+KHA==}

  unifont@1.0.3:
    resolution: {integrity: sha512-XGnEwj5sWdCbiBX01mWLSBncS0yMRjnLygau3IfdOlfjMacNIQvTGW4VH7pWBq+gGWArfSef/CensMLjMmIr/A==}

  unist-util-is@6.0.1:
    resolution: {integrity: sha512-LsiILbtBETkDz8I9p1dQ0uyRUWuaQzd/cuEeS1hoRSyW5E5XGmTzlwY1OrNzzakGowI9Dr/I8HVaw4hTtnxy8g==}

  unist-util-position@5.0.0:
    resolution: {integrity: sha512-fucsC7HjXvkB5R3kTCO7kUjRdrS0BJt3M/FPxmHMBOm8JQi2BsHAHFsy27E0EolP8rp0NzXsJ+jNPyDWvOJZPA==}

  unist-util-stringify-position@4.0.0:
    resolution: {integrity: sha512-0ASV06AAoKCDkS2+xw5RXJywruurpbC4JZSm7nr7MOt1ojAzvyyaO+UxZf18j8FCF6kmzCZKcAgN/yu2gm2XgQ==}

  unist-util-visit-parents@6.1.0:
    resolution: {integrity: sha512-vKXxz6O38sKDj1mtx/k2cWvkkFBuYGx6uGrlzBkVeWCRF/F8sdI0j3Wbkz/5rVNRRuVc8UrgRdbCxNhmYXgP3w==}

  unist-util-visit@5.2.0:
    resolution: {integrity: sha512-fpsYs/VVoZxfGY9/j3FQpZmN8wdLJaV1Pt38AaJNZu9uKIHcFU3halCdBveEq1HGKO1OEfJY65w1zvoFV1b3qQ==}

  unstorage@1.17.6:
    resolution: {integrity: sha512-gjKtcmn/KwZuJZO9o2sc0esAQnhmTw0LviDHwevTXbJMYs0dRTp8ZEEWXHU0vTpzbN3cA0yxlTeyXssMp3zDqw==}
    peerDependencies:
      '@azure/app-configuration': ^1.8.0
      '@azure/cosmos': ^4.2.0
      '@azure/data-tables': ^13.3.0
      '@azure/identity': ^4.6.0
      '@azure/keyvault-secrets': ^4.9.0
      '@azure/storage-blob': ^12.26.0
      '@capacitor/preferences': ^6 || ^7 || ^8
      '@deno/kv': '>=0.9.0'
      '@netlify/blobs': ^6.5.0 || ^7.0.0 || ^8.1.0 || ^9.0.0 || ^10.0.0 || ^11.0.0
      '@planetscale/database': ^1.19.0
      '@upstash/redis': ^1.34.3
      '@vercel/blob': '>=0.27.1'
      '@vercel/functions': ^2.2.12 || ^3.0.0
      '@vercel/kv': ^1 || ^2 || ^3
      aws4fetch: ^1.0.20
      db0: '>=0.2.1'
      idb-keyval: ^6.2.1
      ioredis: ^5.4.2
      uploadthing: ^7.4.4
    peerDependenciesMeta:
      '@azure/app-configuration':
        optional: true
      '@azure/cosmos':
        optional: true
      '@azure/data-tables':
        optional: true
      '@azure/identity':
        optional: true
      '@azure/keyvault-secrets':
        optional: true
      '@azure/storage-blob':
        optional: true
      '@capacitor/preferences':
        optional: true
      '@deno/kv':
        optional: true
      '@netlify/blobs':
        optional: true
      '@planetscale/database':
        optional: true
      '@upstash/redis':
        optional: true
      '@vercel/blob':
        optional: true
      '@vercel/functions':
        optional: true
      '@vercel/kv':
        optional: true
      aws4fetch:
        optional: true
      db0:
        optional: true
      idb-keyval:
        optional: true
      ioredis:
        optional: true
      uploadthing:
        optional: true

  verkit@0.5.0:
    resolution: {integrity: sha512-u4J1hr6Y+C/hit34GwL3eIcUf3wngT8TlYUjK7tk0jxydKLAq3sYvifjdTDA6U3KCKRcQCQDGf/srjxfZF3l7g==}
    engines: {node: '>=18.12.0'}

  vfile-message@4.0.3:
    resolution: {integrity: sha512-QTHzsGd1EhbZs4AsQ20JX1rC3cOlt/IWJruk893DfLRr57lcnOeMaWG4K0JrRta4mIJZKth2Au3mM3u03/JWKw==}

  vfile@6.0.3:
    resolution: {integrity: sha512-KzIbH/9tXat2u30jf+smMwFCsno4wHVdNmzFyL+T/L3UGqqk6JKfVqOFOZEpZSHADH1k40ab6NUIXZq422ov3Q==}

  vite@8.3.5:
    resolution: {integrity: sha512-z1YpjieJ9g0ebTmQpLBv/oq9E3F9EIlOe+7LahW8SrE3LTiG3udBRUXQOlYXP9b+IC2q2phHeVxj9xGlw34OEQ==}
    engines: {node: ^20.19.0 || >=22.12.0}
    hasBin: true
    peerDependencies:
      '@types/node': ^20.19.0 || >=22.12.0
      '@vitejs/devtools': ^0.7.1 || ^0.8.0
      esbuild: ^0.27.0 || ^0.28.0
      jiti: '>=1.21.0'
      less: ^4.0.0
      sass: ^1.70.0
      sass-embedded: ^1.70.0
      stylus: '>=0.54.8'
      sugarss: ^5.0.0
      terser: ^5.16.0
      tsx: ^4.8.1
      yaml: ^2.4.2
    peerDependenciesMeta:
      '@types/node':
        optional: true
      '@vitejs/devtools':
        optional: true
      esbuild:
        optional: true
      jiti:
        optional: true
      less:
        optional: true
      sass:
        optional: true
      sass-embedded:
        optional: true
      stylus:
        optional: true
      sugarss:
        optional: true
      terser:
        optional: true
      tsx:
        optional: true
      yaml:
        optional: true

  vitefu@1.1.3:
    resolution: {integrity: sha512-ub4okH7Z5KLjb6hDyjqrGXqWtWvoYdU3IGm/NorpgHncKoLTCfRIbvlhBm7r0YstIaQRYlp4yEbFqDcKSzXSSg==}
    peerDependencies:
      vite: ^3.0.0 || ^4.0.0 || ^5.0.0 || ^6.0.0 || ^7.0.0 || ^8.0.0
    peerDependenciesMeta:
      vite:
        optional: true

  vitest@5.0.5:
    resolution: {integrity: sha512-cPODOMF8YnkiiYtDdHo6n4wWmBrOBBbOIYH2d33M4l3CdNn72h+qMmO6uXffUN6A5AZFXNND/d+krS9mgkXRfg==}
    engines: {node: ^22.12.0 || ^24.0.0 || >=26.0.0}
    hasBin: true
    peerDependencies:
      '@edge-runtime/vm': '*'
      '@opentelemetry/api': ^1.9.0
      '@types/node': ^22.0.0 || >=24.0.0
      '@vitest/browser-playwright': 5.0.5
      '@vitest/browser-preview': 5.0.5
      '@vitest/browser-webdriverio': ^5.0.0-beta.5 || >=5.0.0
      '@vitest/coverage-istanbul': 5.0.5
      '@vitest/coverage-v8': 5.0.5
      '@vitest/ui': 5.0.5
      happy-dom: '*'
      jsdom: '*'
      vite: ^6.4.0 || ^7.0.0 || ^8.0.0
    peerDependenciesMeta:
      '@edge-runtime/vm':
        optional: true
      '@opentelemetry/api':
        optional: true
      '@types/node':
        optional: true
      '@vitest/browser-playwright':
        optional: true
      '@vitest/browser-preview':
        optional: true
      '@vitest/browser-webdriverio':
        optional: true
      '@vitest/coverage-istanbul':
        optional: true
      '@vitest/coverage-v8':
        optional: true
      '@vitest/ui':
        optional: true
      happy-dom:
        optional: true
      jsdom:
        optional: true

  volar-service-css@0.0.71:
    resolution: {integrity: sha512-wRRFt9BpjMKCazcgOh67MSjUjiWUCAh99DyYSDIOTuxaRjEtDC7PpB0k1Y1wbJIW/pVtMUSVbpPo3UGSm0Byxw==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-emmet@0.0.71:
    resolution: {integrity: sha512-zqjzt6bN95e3CUstBm0PBFAJnrfz0ZAARka87fart46/gNCLLuP3Vujy8V/J8HEziTFLnfkgIASLFYPUhonJcA==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-html@0.0.71:
    resolution: {integrity: sha512-e8tHPhgQ7ooLfudAEIku+kgd9pWkq3SSz8RbnQDI1+Eb8wbenkLGHqoirLqz5ORLV6wIMr2Iv08RWBG5eOcgpw==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  volar-service-prettier@0.0.71:
    resolution: {integrity: sha512-Rz7JVH3qD108UCdmIEiZvOBNljMt2nLFdbN8AXcDfn7xD9F5I2aCIsDVqBbXw21PsnxG0b7MfwtNF+zPS/NKUg==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
      prettier: ^2.2 || ^3.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true
      prettier:
        optional: true

  volar-service-typescript-twoslash-queries@0.0.71:
    resolution: {integrity: sha512-9K2k72s4n7rV9s4bX0MyjbX9iBribvKZbBJKuEmTCZfeWJXs6Yh7bGpY4eoc7UufAjvpheBqwyZCOIPBvxCv0A==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
      typescript: '*'
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true
      typescript:
        optional: true

  volar-service-typescript@0.0.71:
    resolution: {integrity: sha512-yTtM/BVT6hoyEYnDtaCyAtNhdNeS/mhTTABlBOdw3NNiRBUin3IznFJpgfjer4c6RYopiPjjQjc9VFhxVl1mLw==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
      typescript: '*'
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true
      typescript:
        optional: true

  volar-service-yaml@0.0.71:
    resolution: {integrity: sha512-qYGWGuVpUTnZGu5P/CR4KLK4aIR8RrcVnmfZ2eRcj9q/I8VZCoC5yy9FtEvfNvnDp4MU17yhdJcvpQPIqhJS2Q==}
    peerDependencies:
      '@volar/language-service': ~2.4.0
    peerDependenciesMeta:
      '@volar/language-service':
        optional: true

  vscode-css-languageservice@6.3.10:
    resolution: {integrity: sha512-eq5N9Er3fC4vA9zd9EFhyBG90wtCCuXgRSpAndaOgXMh1Wgep5lBgRIeDgjZBW9pa+332yC9+49cZMW8jcL3MA==}

  vscode-html-languageservice@5.6.2:
    resolution: {integrity: sha512-ulCrSnFnfQ16YzvwnYUgEbUEl/ZG7u2eV27YhvLObSHKkb8fw1Z9cgsnUwjTEeDIdJDoTDTDpxuhQwoenoLNMg==}

  vscode-json-languageservice@4.1.8:
    resolution: {integrity: sha512-0vSpg6Xd9hfV+eZAaYN63xVVMOTmJ4GgHxXnkLCh+9RsQBkWKIghzLhW2B9ebfG+LQQg8uLtsQ2aUKjTgE+QOg==}
    engines: {npm: '>=7.0.0'}

  vscode-jsonrpc@10.0.0:
    resolution: {integrity: sha512-USSfxg0vDIpTQqlQBGxF3mBARyoS8cU7LHLpbYNh6dOJt32dlskxPWB0Irrh5TllTmyf7oNLAvqDqzklbwwnpA==}
    engines: {node: '>=14.17.0'}

  vscode-jsonrpc@8.2.0:
    resolution: {integrity: sha512-C+r0eKJUIfiDIfwJhria30+TYWPtuHJXHtI7J0YlOmKAo7ogxP20T0zxB7HZQIFhIyvoBPwWskjxrvAtfjyZfA==}
    engines: {node: '>=14.0.0'}

  vscode-languageserver-protocol@3.17.5:
    resolution: {integrity: sha512-mb1bvRJN8SVznADSGWM9u/b07H7Ecg0I3OgXDuLdn307rl/J3A9YD6/eYOssqhecL27hK1IPZAsaqh00i/Jljg==}

  vscode-languageserver-protocol@3.18.5:
    resolution: {integrity: sha512-FW4fBMzZ99N8xeob4py0l050wgCoRgTpEq5Xcsb9lM1bc29UKGR/wSV+4knaqFxssFHajy7OzNiKP/m3U1ZEuA==}

  vscode-languageserver-textdocument@1.0.16:
    resolution: {integrity: sha512-qeNEuOi9a3qkqRf7Gfez2WL2VwlBTLCNekHBGO9kxPVUp9XuY15yfTJ9jwvOwKI0I2MhUUfZq95NSp+LK1CLQg==}

  vscode-languageserver-types@3.17.5:
    resolution: {integrity: sha512-Ld1VelNuX9pdF39h2Hgaeb5hEZM2Z3jUrrMgWQAu82jMtZp7p3vJT3BzToKtZI7NgQssZje5o0zryOrhQvzQAg==}

  vscode-languageserver-types@3.18.5:
    resolution: {integrity: sha512-kPd6+JQNz3HMJvjKlqUxERSlZHAntl/aGpsk7ImwIh0ewDKDcjgAEyVSYciPiOJD3ftbK9IrfiqUeTZLSbCizw==}

  vscode-languageserver@9.0.1:
    resolution: {integrity: sha512-woByF3PDpkHFUreUa7Hos7+pUWdeWMXRd26+ZX2A8cFx6v/JPTtd4/uN0/jB6XQHYaOlHbio03NTHCqrgG5n7g==}
    hasBin: true

  vscode-nls@5.2.0:
    resolution: {integrity: sha512-RAaHx7B14ZU04EU31pT+rKz2/zSl7xMsfIZuo8pd+KZO6PXtQmpevpq3vxvWNcrGbdmhM/rr5Uw5Mz+NBfhVng==}

  vscode-uri@3.2.0:
    resolution: {integrity: sha512-m2gXo3bn0G1kT9InzMf07fTbqMbGtyckj3bH5ktLO+1Ssv+yiATZ4dhwaQv9UZWxJh6E9IFGnQyjgWVDWVBDrg==}

  why-is-node-running@3.2.1:
    resolution: {integrity: sha512-Tb2FUhB4vUsGQlfSquQLYkApkuPAFQXGFzxWKHHumVz2dK+X1RUm/HnID4+TfIGYJ1kTcwOaCk/buYCEJr6YjQ==}
    engines: {node: '>=20.11'}
    hasBin: true

  wrap-ansi@9.0.2:
    resolution: {integrity: sha512-42AtmgqjV+X1VpdOfyTGOYRi0/zsoLqtXQckTmqTeybT+BDIbM/Guxo7x3pE2vtpr1ok6xRqM9OpBe+Jyoqyww==}
    engines: {node: '>=18'}

  xxhash-wasm@1.1.0:
    resolution: {integrity: sha512-147y/6YNh+tlp6nd/2pWq38i9h6mz/EuQ6njIrmW8D1BS5nCqs0P6DG+m6zTGnNz5I+uhZ0SHxBs9BsPrwcKDA==}

  y18n@5.0.8:
    resolution: {integrity: sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==}
    engines: {node: '>=10'}

  yaml-language-server@1.23.0:
    resolution: {integrity: sha512-3qVyCOexLCWw06PQa5kRPwvMWMZ/eZeCRWUvgD6a0OkqL/4iCnxy2WumbWifa937Uo5xhyWJ0uxlU39ljhNh7A==}
    hasBin: true

  yaml@2.8.3:
    resolution: {integrity: sha512-AvbaCLOO2Otw/lW5bmh9d/WEdcDFdQp2Z2ZUH3pX9U2ihyUY0nvLv7J6TrWowklRGPYbB/IuIMfYgxaCPg5Bpg==}
    engines: {node: '>= 14.6'}
    hasBin: true

  yaml@2.9.1:
    resolution: {integrity: sha512-3NxN8+78OdzbT7C/WjGsyfPAtJaN3FNDsWxv7Y7mcDsT/oOmgW8BpyQQFFBnvZE3j9Y2Sdz1ULFLezL7Eb2yFw==}
    engines: {node: '>= 14.6'}
    hasBin: true

  yargs-parser@22.0.0:
    resolution: {integrity: sha512-rwu/ClNdSMpkSrUb+d6BRsSkLUq1fmfsY6TOpYzTwvwkg1/NRG85KBy3kq++A8LKQwX6lsu+aWad+2khvuXrqw==}
    engines: {node: ^20.19.0 || ^22.12.0 || >=23}

  yargs@18.2.0:
    resolution: {integrity: sha512-9OpKOLeaoNFecEp7P6iYbzze/5CqWoH7N3SMs/6y1XF4nMvFMspEGZzJ6uFi9MmQwXhyzqYoSEKO3tvA3Z/o2w==}
    engines: {node: ^20.19.0 || ^22.12.0 || >=23}

  yocto-queue@1.2.2:
    resolution: {integrity: sha512-4LCcse/U2MHZ63HAJVE+v71o7yOdIe4cZ70Wpf8D/IyjDKYQLV5GD46B+hSTjJsvV5PztjvHoU580EftxjDZFQ==}
    engines: {node: '>=12.20'}

  zod@4.6.7:
    resolution: {integrity: sha512-g8W2D2kU6a8untc053fX1uVBKzM7yqAxW/3zwk83+6RyF2+SKOuV+c0wBDhUwzV1PaGapmZH+rmcUzPf+3CGwg==}

  zwitch@2.0.4:
    resolution: {integrity: sha512-bXE4cR/kVZhKZX/RjPEflHaKVhUVl85noU3v6b8apfQEc1x4A+zBxjZ4lN8LqGd6WZ3dl98pY4o717VFmoPp+A==}

snapshots:

  '@astrojs/astro2tsx@0.1.3(@emnapi/runtime@1.11.3)':
    dependencies:
      '@emnapi/core': 1.11.3
      '@napi-rs/wasm-runtime': 1.2.4(@emnapi/core@1.11.3)(@emnapi/runtime@1.11.3)
    transitivePeerDependencies:
      - '@emnapi/runtime'

  '@astrojs/check@0.9.12(@emnapi/runtime@1.11.3)(prettier@3.9.10)(typescript@5.9.3)':
    dependencies:
      '@astrojs/language-server': 2.17.3(@emnapi/runtime@1.11.3)(prettier@3.9.10)(typescript@5.9.3)
      chokidar: 5.0.0
      kleur: 4.1.5
      typescript: 5.9.3
      yargs: 18.2.0
    transitivePeerDependencies:
      - '@emnapi/runtime'
      - prettier
      - prettier-plugin-astro

  '@astrojs/compiler-binding-android-arm64@0.5.2':
    optional: true

  '@astrojs/compiler-binding-darwin-arm64@0.5.2':
    optional: true

  '@astrojs/compiler-binding-darwin-x64@0.5.2':
    optional: true

  '@astrojs/compiler-binding-linux-arm64-gnu@0.5.2':
    optional: true

  '@astrojs/compiler-binding-linux-arm64-musl@0.5.2':
    optional: true

  '@astrojs/compiler-binding-linux-x64-gnu@0.5.2':
    optional: true

  '@astrojs/compiler-binding-linux-x64-musl@0.5.2':
    optional: true

  '@astrojs/compiler-binding-wasm32-wasi@0.5.2':
    dependencies:
      '@emnapi/core': 1.11.3
      '@emnapi/runtime': 1.11.3
      '@napi-rs/wasm-runtime': 1.2.6(@emnapi/core@1.11.3)(@emnapi/runtime@1.11.3)
    optional: true

  '@astrojs/compiler-binding-win32-arm64-msvc@0.5.2':
    optional: true

  '@astrojs/compiler-binding-win32-x64-msvc@0.5.2':
    optional: true

  '@astrojs/compiler-binding@0.5.2':
    optionalDependencies:
      '@astrojs/compiler-binding-android-arm64': 0.5.2
      '@astrojs/compiler-binding-darwin-arm64': 0.5.2
      '@astrojs/compiler-binding-darwin-x64': 0.5.2
      '@astrojs/compiler-binding-linux-arm64-gnu': 0.5.2
      '@astrojs/compiler-binding-linux-arm64-musl': 0.5.2
      '@astrojs/compiler-binding-linux-x64-gnu': 0.5.2
      '@astrojs/compiler-binding-linux-x64-musl': 0.5.2
      '@astrojs/compiler-binding-wasm32-wasi': 0.5.2
      '@astrojs/compiler-binding-win32-arm64-msvc': 0.5.2
      '@astrojs/compiler-binding-win32-x64-msvc': 0.5.2

  '@astrojs/compiler-rs@0.5.2':
    dependencies:
      '@astrojs/compiler-binding': 0.5.2

  '@astrojs/internal-helpers@0.13.0':
    dependencies:
      '@types/hast': 3.0.5
      '@types/mdast': 4.0.4
      picomatch: 4.0.7
      retext-smartypants: 6.2.0
      shiki: 4.5.0
      smol-toml: 1.9.1
      unified: 11.0.5
      yaml: 2.9.1

  '@astrojs/language-server@2.17.3(@emnapi/runtime@1.11.3)(prettier@3.9.10)(typescript@5.9.3)':
    dependencies:
      '@astrojs/astro2tsx': 0.1.3(@emnapi/runtime@1.11.3)
      '@astrojs/yaml2ts': 0.2.4
      '@volar/kit': 2.4.30(typescript@5.9.3)
      '@volar/language-core': 2.4.30
      '@volar/language-server': 2.4.30(typescript@5.9.3)
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      muggle-string: 0.4.1
      tinyglobby: 0.2.17
      volar-service-css: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))
      volar-service-emmet: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))
      volar-service-html: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))
      volar-service-prettier: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))(prettier@3.9.10)
      volar-service-typescript: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))(typescript@5.9.3)
      volar-service-typescript-twoslash-queries: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))(typescript@5.9.3)
      volar-service-yaml: 0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))
      vscode-html-languageservice: 5.6.2
      vscode-uri: 3.2.0
    optionalDependencies:
      prettier: 3.9.10
    transitivePeerDependencies:
      - '@emnapi/runtime'
      - typescript

  '@astrojs/markdown-satteri@0.4.6':
    dependencies:
      '@astrojs/internal-helpers': 0.13.0
      '@astrojs/prism': 4.1.2
      github-slugger: 2.0.0
      satteri: 0.10.5

  '@astrojs/prism@4.1.2':
    dependencies:
      prismjs: 1.30.0

  '@astrojs/telemetry@3.4.2':
    dependencies:
      ci-info: 4.4.0
      dset: 3.1.4
      is-docker: 4.0.0
      package-manager-detector: 1.9.0

  '@astrojs/yaml2ts@0.2.4':
    dependencies:
      yaml: 2.9.1

  '@babel/helper-string-parser@7.29.11': {}

  '@babel/helper-validator-identifier@7.29.7': {}

  '@babel/parser@7.29.11':
    dependencies:
      '@babel/types': 7.29.11

  '@babel/types@7.29.11':
    dependencies:
      '@babel/helper-string-parser': 7.29.11
      '@babel/helper-validator-identifier': 7.29.7

  '@bruits/satteri-darwin-arm64@0.10.5':
    optional: true

  '@bruits/satteri-darwin-x64@0.10.5':
    optional: true

  '@bruits/satteri-linux-arm64-gnu@0.10.5':
    optional: true

  '@bruits/satteri-linux-arm64-musl@0.10.5':
    optional: true

  '@bruits/satteri-linux-x64-gnu@0.10.5':
    optional: true

  '@bruits/satteri-linux-x64-musl@0.10.5':
    optional: true

  '@bruits/satteri-wasm32-wasi@0.10.5':
    dependencies:
      '@emnapi/core': 1.11.1
      '@emnapi/runtime': 1.11.1
      '@napi-rs/wasm-runtime': 1.2.6(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.1)
    optional: true

  '@bruits/satteri-win32-arm64-msvc@0.10.5':
    optional: true

  '@bruits/satteri-win32-x64-msvc@0.10.5':
    optional: true

  '@capsizecss/unpack@4.0.1':
    dependencies:
      fontkitten: 1.0.3

  '@clack/core@1.5.1':
    dependencies:
      fast-wrap-ansi: 0.2.2
      sisteransi: 1.0.5

  '@clack/prompts@1.8.1':
    dependencies:
      '@clack/core': 1.5.1
      fast-string-width: 3.0.2
      fast-wrap-ansi: 0.2.2
      sisteransi: 1.0.5

  '@emmetio/abbreviation@2.3.3':
    dependencies:
      '@emmetio/scanner': 1.0.4

  '@emmetio/css-abbreviation@2.1.8':
    dependencies:
      '@emmetio/scanner': 1.0.4

  '@emmetio/css-parser@0.4.1':
    dependencies:
      '@emmetio/stream-reader': 2.2.0
      '@emmetio/stream-reader-utils': 0.1.0

  '@emmetio/html-matcher@1.3.0':
    dependencies:
      '@emmetio/scanner': 1.0.4

  '@emmetio/scanner@1.0.4': {}

  '@emmetio/stream-reader-utils@0.1.0': {}

  '@emmetio/stream-reader@2.2.0': {}

  '@emnapi/core@1.11.1':
    dependencies:
      '@emnapi/wasi-threads': 1.2.2
      tslib: 2.8.1
    optional: true

  '@emnapi/core@1.11.3':
    dependencies:
      '@emnapi/wasi-threads': 1.2.3
      tslib: 2.8.1

  '@emnapi/runtime@1.11.1':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/runtime@1.11.3':
    dependencies:
      tslib: 2.8.1

  '@emnapi/wasi-threads@1.2.2':
    dependencies:
      tslib: 2.8.1
    optional: true

  '@emnapi/wasi-threads@1.2.3':
    dependencies:
      tslib: 2.8.1

  '@fontsource/dm-sans@5.3.0': {}

  '@fontsource/dm-serif-display@5.3.0': {}

  '@fontsource/outfit@5.3.0': {}

  '@fontsource/young-serif@5.3.0': {}

  '@img/colour@1.1.0':
    optional: true

  '@img/sharp-darwin-arm64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-arm64': 1.3.4
    optional: true

  '@img/sharp-darwin-x64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-darwin-x64': 1.3.4
    optional: true

  '@img/sharp-freebsd-wasm32@0.35.5':
    dependencies:
      '@img/sharp-wasm32': 0.35.5
    optional: true

  '@img/sharp-libvips-darwin-arm64@1.3.4':
    optional: true

  '@img/sharp-libvips-darwin-x64@1.3.4':
    optional: true

  '@img/sharp-libvips-linux-arm64@1.3.4':
    optional: true

  '@img/sharp-libvips-linux-arm@1.3.4':
    optional: true

  '@img/sharp-libvips-linux-ppc64@1.3.4':
    optional: true

  '@img/sharp-libvips-linux-riscv64@1.3.4':
    optional: true

  '@img/sharp-libvips-linux-s390x@1.3.4':
    optional: true

  '@img/sharp-libvips-linux-x64@1.3.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-arm64@1.3.4':
    optional: true

  '@img/sharp-libvips-linuxmusl-x64@1.3.4':
    optional: true

  '@img/sharp-linux-arm64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm64': 1.3.4
    optional: true

  '@img/sharp-linux-arm@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-arm': 1.3.4
    optional: true

  '@img/sharp-linux-ppc64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-ppc64': 1.3.4
    optional: true

  '@img/sharp-linux-riscv64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-riscv64': 1.3.4
    optional: true

  '@img/sharp-linux-s390x@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-s390x': 1.3.4
    optional: true

  '@img/sharp-linux-x64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linux-x64': 1.3.4
    optional: true

  '@img/sharp-linuxmusl-arm64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.4
    optional: true

  '@img/sharp-linuxmusl-x64@0.35.5':
    optionalDependencies:
      '@img/sharp-libvips-linuxmusl-x64': 1.3.4
    optional: true

  '@img/sharp-wasm32@0.35.5':
    dependencies:
      '@emnapi/runtime': 1.11.3
    optional: true

  '@img/sharp-webcontainers-wasm32@0.35.5':
    dependencies:
      '@img/sharp-wasm32': 0.35.5
    optional: true

  '@img/sharp-win32-arm64@0.35.5':
    optional: true

  '@img/sharp-win32-ia32@0.35.5':
    optional: true

  '@img/sharp-win32-x64@0.35.5':
    optional: true

  '@jridgewell/resolve-uri@3.1.2': {}

  '@jridgewell/sourcemap-codec@1.6.0': {}

  '@jridgewell/trace-mapping@0.3.31':
    dependencies:
      '@jridgewell/resolve-uri': 3.1.2
      '@jridgewell/sourcemap-codec': 1.6.0

  '@napi-rs/wasm-runtime@1.2.4(@emnapi/core@1.11.3)(@emnapi/runtime@1.11.3)':
    dependencies:
      '@emnapi/core': 1.11.3
      '@emnapi/runtime': 1.11.3
      '@tybys/wasm-util': 0.10.4

  '@napi-rs/wasm-runtime@1.2.6(@emnapi/core@1.11.1)(@emnapi/runtime@1.11.1)':
    dependencies:
      '@emnapi/core': 1.11.1
      '@emnapi/runtime': 1.11.1
      '@tybys/wasm-util': 0.10.4
    optional: true

  '@napi-rs/wasm-runtime@1.2.6(@emnapi/core@1.11.3)(@emnapi/runtime@1.11.3)':
    dependencies:
      '@emnapi/core': 1.11.3
      '@emnapi/runtime': 1.11.3
      '@tybys/wasm-util': 0.10.4
    optional: true

  '@oslojs/encoding@1.1.0': {}

  '@oxc-project/types@0.155.0': {}

  '@rolldown/binding-android-arm-eabi@1.2.15':
    optional: true

  '@rolldown/binding-android-arm64@1.2.15':
    optional: true

  '@rolldown/binding-darwin-arm64@1.2.15':
    optional: true

  '@rolldown/binding-darwin-x64@1.2.15':
    optional: true

  '@rolldown/binding-freebsd-x64@1.2.15':
    optional: true

  '@rolldown/binding-linux-arm-gnueabihf@1.2.15':
    optional: true

  '@rolldown/binding-linux-arm64-gnu@1.2.15':
    optional: true

  '@rolldown/binding-linux-arm64-musl@1.2.15':
    optional: true

  '@rolldown/binding-linux-ppc64-gnu@1.2.15':
    optional: true

  '@rolldown/binding-linux-s390x-gnu@1.2.15':
    optional: true

  '@rolldown/binding-linux-x64-gnu@1.2.15':
    optional: true

  '@rolldown/binding-linux-x64-musl@1.2.15':
    optional: true

  '@rolldown/binding-openharmony-arm64@1.2.15':
    optional: true

  '@rolldown/binding-win32-arm64-msvc@1.2.15':
    optional: true

  '@rolldown/binding-win32-x64-msvc@1.2.15':
    optional: true

  '@rolldown/pluginutils@1.0.1': {}

  '@shikijs/core@4.5.0':
    dependencies:
      '@shikijs/primitive': 4.5.0
      '@shikijs/types': 4.5.0
      '@shikijs/vscode-textmate': 10.1.0
      '@types/hast': 3.0.5
      hast-util-to-html: 9.0.5

  '@shikijs/engine-javascript@4.5.0':
    dependencies:
      '@shikijs/types': 4.5.0
      '@shikijs/vscode-textmate': 10.1.0
      oniguruma-to-es: 4.3.6

  '@shikijs/engine-oniguruma@4.5.0':
    dependencies:
      '@shikijs/types': 4.5.0
      '@shikijs/vscode-textmate': 10.1.0

  '@shikijs/langs@4.5.0':
    dependencies:
      '@shikijs/types': 4.5.0

  '@shikijs/primitive@4.5.0':
    dependencies:
      '@shikijs/types': 4.5.0
      '@shikijs/vscode-textmate': 10.1.0
      '@types/hast': 3.0.5

  '@shikijs/themes@4.5.0':
    dependencies:
      '@shikijs/types': 4.5.0

  '@shikijs/types@4.5.0':
    dependencies:
      '@shikijs/vscode-textmate': 10.1.0
      '@types/hast': 3.0.5

  '@shikijs/vscode-textmate@10.1.0': {}

  '@tybys/wasm-util@0.10.4':
    dependencies:
      tslib: 2.8.1

  '@types/chai@5.2.3':
    dependencies:
      '@types/deep-eql': 4.0.2
      assertion-error: 2.0.1

  '@types/deep-eql@4.0.2': {}

  '@types/estree-jsx@1.0.5':
    dependencies:
      '@types/estree': 1.0.9

  '@types/estree@1.0.9': {}

  '@types/hast@3.0.5':
    dependencies:
      '@types/unist': 3.0.3

  '@types/mdast@4.0.4':
    dependencies:
      '@types/unist': 3.0.3

  '@types/nlcst@2.0.3':
    dependencies:
      '@types/unist': 3.0.3

  '@types/node@24.19.2':
    dependencies:
      undici-types: 7.24.6

  '@types/unist@3.0.3': {}

  '@ungap/structured-clone@1.4.0': {}

  '@vitest/mocker@5.0.5(vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1))':
    dependencies:
      '@jridgewell/trace-mapping': 0.3.31
      '@vitest/spy': 5.0.5
      estree-walker: 3.0.3
      magic-string: 1.4.5
    optionalDependencies:
      vite: 8.3.5(@types/node@24.19.2)(yaml@2.9.1)

  '@vitest/spy@5.0.5': {}

  '@volar/kit@2.4.30(typescript@5.9.3)':
    dependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      '@volar/typescript': 2.4.30(typescript@5.9.3)
      typesafe-path: 0.2.2
      typescript: 5.9.3
      vscode-languageserver-textdocument: 1.0.16
      vscode-uri: 3.2.0

  '@volar/language-core@2.4.30':
    dependencies:
      '@volar/source-map': 2.4.30

  '@volar/language-server@2.4.30(typescript@5.9.3)':
    dependencies:
      '@volar/language-core': 2.4.30
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      '@volar/typescript': 2.4.30(typescript@5.9.3)
      path-browserify: 1.0.1
      request-light: 0.7.0
      vscode-languageserver: 9.0.1
      vscode-languageserver-protocol: 3.18.5
      vscode-languageserver-textdocument: 1.0.16
      vscode-uri: 3.2.0
    optionalDependencies:
      typescript: 5.9.3

  '@volar/language-service@2.4.30(typescript@5.9.3)':
    dependencies:
      '@volar/language-core': 2.4.30
      vscode-languageserver-protocol: 3.18.5
      vscode-languageserver-textdocument: 1.0.16
      vscode-uri: 3.2.0
    optionalDependencies:
      typescript: 5.9.3

  '@volar/source-map@2.4.30': {}

  '@volar/typescript@2.4.30(typescript@5.9.3)':
    dependencies:
      '@volar/language-core': 2.4.30
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      path-browserify: 1.0.1
      vscode-uri: 3.2.0
    optionalDependencies:
      typescript: 5.9.3

  '@vscode/emmet-helper@2.11.0':
    dependencies:
      emmet: 2.4.11
      jsonc-parser: 2.3.1
      vscode-languageserver-textdocument: 1.0.16
      vscode-languageserver-types: 3.18.5
      vscode-uri: 3.2.0

  '@vscode/l10n@0.0.18': {}

  ajv-draft-04@1.0.0(ajv@8.20.0):
    optionalDependencies:
      ajv: 8.20.0

  ajv-i18n@4.2.0(ajv@8.20.0):
    dependencies:
      ajv: 8.20.0

  ajv@8.20.0:
    dependencies:
      fast-deep-equal: 3.1.3
      fast-uri: 3.1.9
      json-schema-traverse: 1.0.0
      require-from-string: 2.0.2

  am-i-vibing@0.5.0:
    dependencies:
      process-ancestry: 0.1.0

  ansi-regex@6.4.0: {}

  ansi-styles@6.2.3: {}

  anymatch@3.1.3:
    dependencies:
      normalize-path: 3.0.0
      picomatch: 2.3.2

  aria-query@5.3.2: {}

  assertion-error@2.0.1: {}

  astro@7.4.3(@types/node@24.19.2)(yaml@2.9.1):
    dependencies:
      '@astrojs/compiler-rs': 0.5.2
      '@astrojs/internal-helpers': 0.13.0
      '@astrojs/markdown-satteri': 0.4.6
      '@astrojs/telemetry': 3.4.2
      '@capsizecss/unpack': 4.0.1
      '@clack/prompts': 1.8.1
      '@oslojs/encoding': 1.1.0
      am-i-vibing: 0.5.0
      aria-query: 5.3.2
      axobject-query: 4.1.0
      ci-info: 4.4.0
      clsx: 2.1.1
      common-ancestor-path: 2.0.0
      cookie: 2.0.1
      devalue: 6.0.3
      diff: 9.0.0
      dset: 3.1.4
      es-module-lexer: 3.0.4
      flattie: 1.1.1
      fontace: 0.4.1
      get-tsconfig: 5.0.0-beta.6
      github-slugger: 2.0.0
      html-escaper: 3.0.3
      http-cache-semantics: 4.3.0
      jsonc-parser: 3.3.1
      magic-string: 1.4.5
      magicast: 0.5.5
      mrmime: 2.0.1
      neotraverse: 1.0.1
      obug: 3.0.0
      p-limit: 7.3.3
      p-queue: 9.3.5
      package-manager-detector: 1.9.0
      piccolore: 0.1.3
      picomatch: 4.0.7
      rolldown: 1.2.15
      shiki: 4.5.0
      smol-toml: 1.9.1
      svgo: 4.1.0
      tinyclip: 1.0.3
      tinyexec: 1.3.1
      tinyglobby: 0.2.17
      tinyps: 0.5.1
      ultrahtml: 1.7.0
      unifont: 1.0.3
      unstorage: 1.17.6
      verkit: 0.5.0
      vite: 8.3.5(@types/node@24.19.2)(yaml@2.9.1)
      vitefu: 1.1.3(vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1))
      xxhash-wasm: 1.1.0
      yargs-parser: 22.0.0
      zod: 4.6.7
    optionalDependencies:
      sharp: 0.35.5(@types/node@24.19.2)
    transitivePeerDependencies:
      - '@azure/app-configuration'
      - '@azure/cosmos'
      - '@azure/data-tables'
      - '@azure/identity'
      - '@azure/keyvault-secrets'
      - '@azure/storage-blob'
      - '@capacitor/preferences'
      - '@deno/kv'
      - '@netlify/blobs'
      - '@planetscale/database'
      - '@types/node'
      - '@upstash/redis'
      - '@vercel/blob'
      - '@vercel/functions'
      - '@vercel/kv'
      - '@vitejs/devtools'
      - aws4fetch
      - db0
      - esbuild
      - idb-keyval
      - ioredis
      - jiti
      - less
      - sass
      - sass-embedded
      - stylus
      - sugarss
      - terser
      - tsx
      - uploadthing
      - yaml

  axobject-query@4.1.0: {}

  bail@2.0.2: {}

  boolbase@1.0.0: {}

  ccount@2.0.1: {}

  chai@6.3.0: {}

  character-entities-html4@2.1.0: {}

  character-entities-legacy@3.0.0: {}

  chokidar@5.0.0:
    dependencies:
      readdirp: 5.1.1

  ci-info@4.4.0: {}

  cliui@9.0.1:
    dependencies:
      string-width: 7.2.0
      strip-ansi: 7.2.0
      wrap-ansi: 9.0.2

  clsx@2.1.1: {}

  comma-separated-tokens@2.0.3: {}

  commander@11.1.0: {}

  common-ancestor-path@2.0.0: {}

  cookie-es@1.2.3: {}

  cookie@2.0.1: {}

  crossws@0.3.5:
    dependencies:
      uncrypto: 0.1.3

  css-select@6.0.0:
    dependencies:
      boolbase: 1.0.0
      css-what: 7.0.0
      domhandler: 5.0.3
      domutils: 3.2.2
      nth-check: 2.1.1

  css-tree@2.2.1:
    dependencies:
      mdn-data: 2.0.28
      source-map-js: 1.2.2

  css-tree@3.2.1:
    dependencies:
      mdn-data: 2.27.1
      source-map-js: 1.2.2

  css-what@7.0.0: {}

  csso@5.0.5:
    dependencies:
      css-tree: 2.2.1

  defu@6.1.7: {}

  dequal@2.0.3: {}

  destr@2.0.5: {}

  detect-libc@2.1.2: {}

  devalue@6.0.3: {}

  devlop@1.1.0:
    dependencies:
      dequal: 2.0.3

  diff@9.0.0: {}

  dom-serializer@2.0.0:
    dependencies:
      domelementtype: 2.3.0
      domhandler: 5.0.3
      entities: 4.5.0

  domelementtype@2.3.0: {}

  domhandler@5.0.3:
    dependencies:
      domelementtype: 2.3.0

  domutils@3.2.2:
    dependencies:
      dom-serializer: 2.0.0
      domelementtype: 2.3.0
      domhandler: 5.0.3

  dset@3.1.4: {}

  emmet@2.4.11:
    dependencies:
      '@emmetio/abbreviation': 2.3.3
      '@emmetio/css-abbreviation': 2.1.8

  emoji-regex@10.6.0: {}

  entities@4.5.0: {}

  es-module-lexer@2.3.2: {}

  es-module-lexer@3.0.4: {}

  escalade@3.2.0: {}

  estree-walker@3.0.3:
    dependencies:
      '@types/estree': 1.0.9

  eventemitter3@5.0.4: {}

  expect-type@1.4.0: {}

  extend@3.0.2: {}

  fast-deep-equal@3.1.3: {}

  fast-string-truncated-width@3.0.3: {}

  fast-string-width@3.0.2:
    dependencies:
      fast-string-truncated-width: 3.0.3

  fast-uri@3.1.9: {}

  fast-wrap-ansi@0.2.2:
    dependencies:
      fast-string-width: 3.0.2

  fdir@6.5.0(picomatch@4.0.7):
    optionalDependencies:
      picomatch: 4.0.7

  flattie@1.1.1: {}

  fnv1a-64@0.1.2: {}

  fontace@0.4.1:
    dependencies:
      fontkitten: 1.0.3

  fontkitten@1.0.3:
    dependencies:
      tiny-inflate: 1.0.3

  fsevents@2.3.3:
    optional: true

  get-caller-file@2.0.5: {}

  get-east-asian-width@1.7.0: {}

  get-tsconfig@5.0.0-beta.6:
    dependencies:
      resolve-pkg-maps: 1.0.0

  github-slugger@2.0.0: {}

  h3@1.15.11:
    dependencies:
      cookie-es: 1.2.3
      crossws: 0.3.5
      defu: 6.1.7
      destr: 2.0.5
      iron-webcrypto: 1.2.1
      node-mock-http: 1.0.5
      radix3: 1.1.2
      ufo: 1.6.4
      uncrypto: 0.1.3

  hast-util-to-html@9.0.5:
    dependencies:
      '@types/hast': 3.0.5
      '@types/unist': 3.0.3
      ccount: 2.0.1
      comma-separated-tokens: 2.0.3
      hast-util-whitespace: 3.0.0
      html-void-elements: 3.0.0
      mdast-util-to-hast: 13.2.1
      property-information: 7.2.0
      space-separated-tokens: 2.0.2
      stringify-entities: 4.0.4
      zwitch: 2.0.4

  hast-util-whitespace@3.0.0:
    dependencies:
      '@types/hast': 3.0.5

  html-escaper@3.0.3: {}

  html-void-elements@3.0.0: {}

  http-cache-semantics@4.3.0: {}

  iron-webcrypto@1.2.1: {}

  is-docker@4.0.0: {}

  is-plain-obj@4.1.0: {}

  json-schema-traverse@1.0.0: {}

  jsonc-parser@2.3.1: {}

  jsonc-parser@3.3.1: {}

  kleur@4.1.5: {}

  lightningcss-android-arm64@1.33.0:
    optional: true

  lightningcss-darwin-arm64@1.33.0:
    optional: true

  lightningcss-darwin-x64@1.33.0:
    optional: true

  lightningcss-freebsd-x64@1.33.0:
    optional: true

  lightningcss-linux-arm-gnueabihf@1.33.0:
    optional: true

  lightningcss-linux-arm64-gnu@1.33.0:
    optional: true

  lightningcss-linux-arm64-musl@1.33.0:
    optional: true

  lightningcss-linux-x64-gnu@1.33.0:
    optional: true

  lightningcss-linux-x64-musl@1.33.0:
    optional: true

  lightningcss-win32-arm64-msvc@1.33.0:
    optional: true

  lightningcss-win32-x64-msvc@1.33.0:
    optional: true

  lightningcss@1.33.0:
    dependencies:
      detect-libc: 2.1.2
    optionalDependencies:
      lightningcss-android-arm64: 1.33.0
      lightningcss-darwin-arm64: 1.33.0
      lightningcss-darwin-x64: 1.33.0
      lightningcss-freebsd-x64: 1.33.0
      lightningcss-linux-arm-gnueabihf: 1.33.0
      lightningcss-linux-arm64-gnu: 1.33.0
      lightningcss-linux-arm64-musl: 1.33.0
      lightningcss-linux-x64-gnu: 1.33.0
      lightningcss-linux-x64-musl: 1.33.0
      lightningcss-win32-arm64-msvc: 1.33.0
      lightningcss-win32-x64-msvc: 1.33.0

  lru-cache@11.5.3: {}

  magic-string@1.4.5:
    dependencies:
      '@jridgewell/sourcemap-codec': 1.6.0

  magicast@0.5.5:
    dependencies:
      '@babel/parser': 7.29.11
      '@babel/types': 7.29.11
      source-map-js: 1.2.2

  mdast-util-to-hast@13.2.1:
    dependencies:
      '@types/hast': 3.0.5
      '@types/mdast': 4.0.4
      '@ungap/structured-clone': 1.4.0
      devlop: 1.1.0
      micromark-util-sanitize-uri: 2.0.1
      trim-lines: 3.0.1
      unist-util-position: 5.0.0
      unist-util-visit: 5.2.0
      vfile: 6.0.3

  mdn-data@2.0.28: {}

  mdn-data@2.27.1: {}

  micromark-util-character@2.1.1:
    dependencies:
      micromark-util-symbol: 2.0.1
      micromark-util-types: 2.0.3

  micromark-util-encode@2.0.1: {}

  micromark-util-sanitize-uri@2.0.1:
    dependencies:
      micromark-util-character: 2.1.1
      micromark-util-encode: 2.0.1
      micromark-util-symbol: 2.0.1

  micromark-util-symbol@2.0.1: {}

  micromark-util-types@2.0.3: {}

  mrmime@2.0.1: {}

  muggle-string@0.4.1: {}

  nanoid@3.3.20: {}

  neotraverse@1.0.1: {}

  nlcst-to-string@4.0.0:
    dependencies:
      '@types/nlcst': 2.0.3

  node-fetch-native@1.6.7: {}

  node-mock-http@1.0.5: {}

  normalize-path@3.0.0: {}

  nth-check@2.1.1:
    dependencies:
      boolbase: 1.0.0

  obug@3.0.0: {}

  ofetch@1.5.1:
    dependencies:
      destr: 2.0.5
      node-fetch-native: 1.6.7
      ufo: 1.6.4

  oniguruma-parser@0.12.2: {}

  oniguruma-to-es@4.3.6:
    dependencies:
      oniguruma-parser: 0.12.2
      regex: 6.1.0
      regex-recursion: 6.0.2

  p-limit@7.3.3:
    dependencies:
      yocto-queue: 1.2.2

  p-queue@9.3.5:
    dependencies:
      eventemitter3: 5.0.4
      p-timeout: 7.0.2

  p-timeout@7.0.2: {}

  package-manager-detector@1.9.0: {}

  path-browserify@1.0.1: {}

  piccolore@0.1.3: {}

  picocolors@1.1.1: {}

  picomatch@2.3.2: {}

  picomatch@4.0.7: {}

  postcss@8.5.32:
    dependencies:
      nanoid: 3.3.20
      picocolors: 1.1.1
      source-map-js: 1.2.2

  prettier@3.9.10: {}

  prismjs@1.30.0: {}

  process-ancestry@0.1.0: {}

  property-information@7.2.0: {}

  radix3@1.1.2: {}

  readdirp@5.1.1: {}

  regex-recursion@6.0.2:
    dependencies:
      regex-utilities: 2.3.0

  regex-utilities@2.3.0: {}

  regex@6.1.0:
    dependencies:
      regex-utilities: 2.3.0

  request-light@0.5.8: {}

  request-light@0.7.0: {}

  require-from-string@2.0.2: {}

  resolve-pkg-maps@1.0.0: {}

  retext-smartypants@6.2.0:
    dependencies:
      '@types/nlcst': 2.0.3
      nlcst-to-string: 4.0.0
      unist-util-visit: 5.2.0

  rolldown@1.2.15:
    dependencies:
      '@oxc-project/types': 0.155.0
      '@rolldown/pluginutils': 1.0.1
    optionalDependencies:
      '@rolldown/binding-android-arm-eabi': 1.2.15
      '@rolldown/binding-android-arm64': 1.2.15
      '@rolldown/binding-darwin-arm64': 1.2.15
      '@rolldown/binding-darwin-x64': 1.2.15
      '@rolldown/binding-freebsd-x64': 1.2.15
      '@rolldown/binding-linux-arm-gnueabihf': 1.2.15
      '@rolldown/binding-linux-arm64-gnu': 1.2.15
      '@rolldown/binding-linux-arm64-musl': 1.2.15
      '@rolldown/binding-linux-ppc64-gnu': 1.2.15
      '@rolldown/binding-linux-s390x-gnu': 1.2.15
      '@rolldown/binding-linux-x64-gnu': 1.2.15
      '@rolldown/binding-linux-x64-musl': 1.2.15
      '@rolldown/binding-openharmony-arm64': 1.2.15
      '@rolldown/binding-win32-arm64-msvc': 1.2.15
      '@rolldown/binding-win32-x64-msvc': 1.2.15

  satteri@0.10.5:
    dependencies:
      '@types/estree-jsx': 1.0.5
      '@types/hast': 3.0.5
      '@types/mdast': 4.0.4
      '@types/unist': 3.0.3
    optionalDependencies:
      '@bruits/satteri-darwin-arm64': 0.10.5
      '@bruits/satteri-darwin-x64': 0.10.5
      '@bruits/satteri-linux-arm64-gnu': 0.10.5
      '@bruits/satteri-linux-arm64-musl': 0.10.5
      '@bruits/satteri-linux-x64-gnu': 0.10.5
      '@bruits/satteri-linux-x64-musl': 0.10.5
      '@bruits/satteri-wasm32-wasi': 0.10.5
      '@bruits/satteri-win32-arm64-msvc': 0.10.5
      '@bruits/satteri-win32-x64-msvc': 0.10.5

  sax@1.6.1: {}

  semver@7.8.5: {}

  sharp@0.35.5(@types/node@24.19.2):
    dependencies:
      '@img/colour': 1.1.0
      detect-libc: 2.1.2
      semver: 7.8.5
    optionalDependencies:
      '@img/sharp-darwin-arm64': 0.35.5
      '@img/sharp-darwin-x64': 0.35.5
      '@img/sharp-freebsd-wasm32': 0.35.5
      '@img/sharp-libvips-darwin-arm64': 1.3.4
      '@img/sharp-libvips-darwin-x64': 1.3.4
      '@img/sharp-libvips-linux-arm': 1.3.4
      '@img/sharp-libvips-linux-arm64': 1.3.4
      '@img/sharp-libvips-linux-ppc64': 1.3.4
      '@img/sharp-libvips-linux-riscv64': 1.3.4
      '@img/sharp-libvips-linux-s390x': 1.3.4
      '@img/sharp-libvips-linux-x64': 1.3.4
      '@img/sharp-libvips-linuxmusl-arm64': 1.3.4
      '@img/sharp-libvips-linuxmusl-x64': 1.3.4
      '@img/sharp-linux-arm': 0.35.5
      '@img/sharp-linux-arm64': 0.35.5
      '@img/sharp-linux-ppc64': 0.35.5
      '@img/sharp-linux-riscv64': 0.35.5
      '@img/sharp-linux-s390x': 0.35.5
      '@img/sharp-linux-x64': 0.35.5
      '@img/sharp-linuxmusl-arm64': 0.35.5
      '@img/sharp-linuxmusl-x64': 0.35.5
      '@img/sharp-webcontainers-wasm32': 0.35.5
      '@img/sharp-win32-arm64': 0.35.5
      '@img/sharp-win32-ia32': 0.35.5
      '@img/sharp-win32-x64': 0.35.5
      '@types/node': 24.19.2
    optional: true

  shiki@4.5.0:
    dependencies:
      '@shikijs/core': 4.5.0
      '@shikijs/engine-javascript': 4.5.0
      '@shikijs/engine-oniguruma': 4.5.0
      '@shikijs/langs': 4.5.0
      '@shikijs/themes': 4.5.0
      '@shikijs/types': 4.5.0
      '@shikijs/vscode-textmate': 10.1.0
      '@types/hast': 3.0.5

  sisteransi@1.0.5: {}

  smol-toml@1.9.1: {}

  source-map-js@1.2.2: {}

  space-separated-tokens@2.0.2: {}

  std-env@4.3.0: {}

  string-width@7.2.0:
    dependencies:
      emoji-regex: 10.6.0
      get-east-asian-width: 1.7.0
      strip-ansi: 7.2.0

  string-width@8.3.0:
    dependencies:
      get-east-asian-width: 1.7.0
      strip-ansi: 7.2.0

  stringify-entities@4.0.4:
    dependencies:
      character-entities-html4: 2.1.0
      character-entities-legacy: 3.0.0

  strip-ansi@7.2.0:
    dependencies:
      ansi-regex: 6.4.0

  svgo@4.1.0:
    dependencies:
      commander: 11.1.0
      css-select: 6.0.0
      css-tree: 3.2.1
      css-what: 7.0.0
      csso: 5.0.5
      picocolors: 1.1.1
      sax: 1.6.1

  tiny-inflate@1.0.3: {}

  tinybench@6.2.2: {}

  tinyclip@1.0.3: {}

  tinyexec@1.3.1: {}

  tinyglobby@0.2.17:
    dependencies:
      fdir: 6.5.0(picomatch@4.0.7)
      picomatch: 4.0.7

  tinyps@0.5.1: {}

  trim-lines@3.0.1: {}

  trough@2.2.0: {}

  tslib@2.8.1: {}

  typesafe-path@0.2.2: {}

  typescript-auto-import-cache@0.3.6:
    dependencies:
      semver: 7.8.5

  typescript@5.9.3: {}

  ufo@1.6.4: {}

  ultrahtml@1.7.0: {}

  uncrypto@0.1.3: {}

  undici-types@7.24.6: {}

  undici@8.12.3: {}

  unified@11.0.5:
    dependencies:
      '@types/unist': 3.0.3
      bail: 2.0.2
      devlop: 1.1.0
      extend: 3.0.2
      is-plain-obj: 4.1.0
      trough: 2.2.0
      vfile: 6.0.3

  unifont@1.0.3:
    dependencies:
      css-tree: 3.2.1
      fnv1a-64: 0.1.2
      std-env: 4.3.0
      undici: 8.12.3

  unist-util-is@6.0.1:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-position@5.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-stringify-position@4.0.0:
    dependencies:
      '@types/unist': 3.0.3

  unist-util-visit-parents@6.1.0:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-is: 6.0.1

  unist-util-visit@5.2.0:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-is: 6.0.1
      unist-util-visit-parents: 6.1.0

  unstorage@1.17.6:
    dependencies:
      anymatch: 3.1.3
      chokidar: 5.0.0
      destr: 2.0.5
      h3: 1.15.11
      lru-cache: 11.5.3
      node-fetch-native: 1.6.7
      ofetch: 1.5.1
      ufo: 1.6.4

  verkit@0.5.0: {}

  vfile-message@4.0.3:
    dependencies:
      '@types/unist': 3.0.3
      unist-util-stringify-position: 4.0.0

  vfile@6.0.3:
    dependencies:
      '@types/unist': 3.0.3
      vfile-message: 4.0.3

  vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1):
    dependencies:
      lightningcss: 1.33.0
      picomatch: 4.0.7
      postcss: 8.5.32
      rolldown: 1.2.15
      tinyglobby: 0.2.17
    optionalDependencies:
      '@types/node': 24.19.2
      fsevents: 2.3.3
      yaml: 2.9.1

  vitefu@1.1.3(vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1)):
    optionalDependencies:
      vite: 8.3.5(@types/node@24.19.2)(yaml@2.9.1)

  vitest@5.0.5(@types/node@24.19.2)(vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1)):
    dependencies:
      '@types/chai': 5.2.3
      '@vitest/mocker': 5.0.5(vite@8.3.5(@types/node@24.19.2)(yaml@2.9.1))
      chai: 6.3.0
      es-module-lexer: 2.3.2
      expect-type: 1.4.0
      magic-string: 1.4.5
      obug: 3.0.0
      picomatch: 4.0.7
      std-env: 4.3.0
      tinybench: 6.2.2
      tinyexec: 1.3.1
      tinyglobby: 0.2.17
      vite: 8.3.5(@types/node@24.19.2)(yaml@2.9.1)
      why-is-node-running: 3.2.1
    optionalDependencies:
      '@types/node': 24.19.2
    transitivePeerDependencies:
      - msw

  volar-service-css@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3)):
    dependencies:
      vscode-css-languageservice: 6.3.10
      vscode-languageserver-textdocument: 1.0.16
      vscode-uri: 3.2.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)

  volar-service-emmet@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3)):
    dependencies:
      '@emmetio/css-parser': 0.4.1
      '@emmetio/html-matcher': 1.3.0
      '@vscode/emmet-helper': 2.11.0
      vscode-uri: 3.2.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)

  volar-service-html@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3)):
    dependencies:
      vscode-html-languageservice: 5.6.2
      vscode-languageserver-textdocument: 1.0.16
      vscode-uri: 3.2.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)

  volar-service-prettier@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))(prettier@3.9.10):
    dependencies:
      vscode-uri: 3.2.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      prettier: 3.9.10

  volar-service-typescript-twoslash-queries@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))(typescript@5.9.3):
    dependencies:
      vscode-uri: 3.2.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      typescript: 5.9.3

  volar-service-typescript@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3))(typescript@5.9.3):
    dependencies:
      path-browserify: 1.0.1
      semver: 7.8.5
      typescript-auto-import-cache: 0.3.6
      vscode-languageserver-textdocument: 1.0.16
      vscode-nls: 5.2.0
      vscode-uri: 3.2.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)
      typescript: 5.9.3

  volar-service-yaml@0.0.71(@volar/language-service@2.4.30(typescript@5.9.3)):
    dependencies:
      vscode-uri: 3.2.0
      yaml-language-server: 1.23.0
    optionalDependencies:
      '@volar/language-service': 2.4.30(typescript@5.9.3)

  vscode-css-languageservice@6.3.10:
    dependencies:
      '@vscode/l10n': 0.0.18
      vscode-languageserver-textdocument: 1.0.16
      vscode-languageserver-types: 3.17.5
      vscode-uri: 3.2.0

  vscode-html-languageservice@5.6.2:
    dependencies:
      '@vscode/l10n': 0.0.18
      vscode-languageserver-textdocument: 1.0.16
      vscode-languageserver-types: 3.18.5
      vscode-uri: 3.2.0

  vscode-json-languageservice@4.1.8:
    dependencies:
      jsonc-parser: 3.3.1
      vscode-languageserver-textdocument: 1.0.16
      vscode-languageserver-types: 3.18.5
      vscode-nls: 5.2.0
      vscode-uri: 3.2.0

  vscode-jsonrpc@10.0.0: {}

  vscode-jsonrpc@8.2.0: {}

  vscode-languageserver-protocol@3.17.5:
    dependencies:
      vscode-jsonrpc: 8.2.0
      vscode-languageserver-types: 3.17.5

  vscode-languageserver-protocol@3.18.5:
    dependencies:
      vscode-jsonrpc: 10.0.0
      vscode-languageserver-types: 3.18.5

  vscode-languageserver-textdocument@1.0.16: {}

  vscode-languageserver-types@3.17.5: {}

  vscode-languageserver-types@3.18.5: {}

  vscode-languageserver@9.0.1:
    dependencies:
      vscode-languageserver-protocol: 3.17.5

  vscode-nls@5.2.0: {}

  vscode-uri@3.2.0: {}

  why-is-node-running@3.2.1: {}

  wrap-ansi@9.0.2:
    dependencies:
      ansi-styles: 6.2.3
      string-width: 7.2.0
      strip-ansi: 7.2.0

  xxhash-wasm@1.1.0: {}

  y18n@5.0.8: {}

  yaml-language-server@1.23.0:
    dependencies:
      '@vscode/l10n': 0.0.18
      ajv: 8.20.0
      ajv-draft-04: 1.0.0(ajv@8.20.0)
      ajv-i18n: 4.2.0(ajv@8.20.0)
      prettier: 3.9.10
      request-light: 0.5.8
      vscode-json-languageservice: 4.1.8
      vscode-languageserver: 9.0.1
      vscode-languageserver-textdocument: 1.0.16
      vscode-languageserver-types: 3.18.5
      vscode-uri: 3.2.0
      yaml: 2.8.3

  yaml@2.8.3: {}

  yaml@2.9.1: {}

  yargs-parser@22.0.0: {}

  yargs@18.2.0:
    dependencies:
      cliui: 9.0.1
      escalade: 3.2.0
      get-caller-file: 2.0.5
      string-width: 8.3.0
      y18n: 5.0.8
      yargs-parser: 22.0.0

  yocto-queue@1.2.2: {}

  zod@4.6.7: {}

  zwitch@2.0.4: {}

````


## scripts/verificar-final.mjs

````mjs
import {readFileSync,readdirSync} from 'node:fs';
import assert from 'node:assert/strict';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
let links=0,imagens=0;
const paginas=walk('dist').filter(f=>f.endsWith('.html'));
for(const f of paginas){
 const s=readFileSync(f,'utf8');
 const ids=[...s.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`IDs duplicados: ${f}`);
 const voz=s.replace(/<blockquote\b[^>]*>[\s\S]*?<\/blockquote>/gi,'').replace(/<(script|style)\b[^>]*>[\s\S]*?<\/\1>/gi,'').replace(/<[^>]*>/g,' ');
 for(const t of ['Assistência Autorizada Apple','oficial Apple','garantia Apple','preço garantido','as melhores taxas','número 1'])assert(!voz.toLowerCase().includes(t.toLowerCase()),`${t}: ${f}`);
 assert(!/\b(?:o melhor|a melhor)\b/i.test(voz),`Superlativo na voz da loja: ${f}`);
 for(const [img] of s.matchAll(/<img\b[^>]*>/g)){imagens++;assert(/\salt(?:="[^"]*")?(?=\s|\/?>)/.test(img),`Alt ausente: ${f}`);assert(/\swidth="\d+"/.test(img)&&/\sheight="\d+"/.test(img),`Dimensões ausentes: ${f}`);}
 for(const [,href] of s.matchAll(/href="(https:\/\/wa\.me\/[^\"]+)"/g)){links++;const u=new URL(href.replaceAll('&amp;','&'));assert.equal(u.pathname,'/5549999268930');const texto=u.searchParams.get('text');assert(texto?.startsWith('Olá, Smart Lion!'));assert(!/undefined|null|PENDENTE/.test(texto));}
}
for(const f of walk('src').filter(f=>/\.(astro|ts)$/.test(f)&&f!=='src/config/whatsapp.ts'))assert(!readFileSync(f,'utf8').includes('wa.me'),`Link fora da função central: ${f}`);
const luminancia=hex=>{const rgb=hex.match(/\w\w/g).map(x=>parseInt(x,16)/255).map(x=>x<=.04045?x/12.92:((x+.055)/1.055)**2.4);return rgb[0]*.2126+rgb[1]*.7152+rgb[2]*.0722};
const contraste=(a,b)=>{const x=luminancia(a),y=luminancia(b);return (Math.max(x,y)+.05)/(Math.min(x,y)+.05)};
const pares=[['madeira no escuro','c6aa8f','111214',4.5],['texto escuro','111214','f5f3ef',4.5],['texto secundário','414246','f5f3ef',4.5],['texto rodapé','bfc0c2','111214',4.5],['WhatsApp','082b16','25d366',4.5],['foco claro corrigido','a50050','f5f3ef',3],['foco no escuro','ff78bc','111214',3]];
for(const [nome,a,b,min] of pares){const razao=contraste(a,b);assert(razao>=min,`Contraste: ${nome}`);console.log(`${nome}: ${razao.toFixed(2)}:1`);}
console.log(`${paginas.length} páginas; ${links} links WhatsApp; ${imagens} imagens. IDs, copy da loja e função central: OK. Não substitui axe ou auditoria visual.`);

````


## src/components/BotaoWhatsApp.astro

````astro
---
import { linkWhatsApp, mensagemGeral } from '../config/whatsapp';
interface Props { texto?: string; rotulo?: string; flutuante?: boolean; discreto?: boolean }
const { texto = mensagemGeral, rotulo = 'Fale conosco', flutuante = false, discreto = false } = Astro.props;
---
<a class:list={['button','button-wa',{flutuante,discreto}]} href={linkWhatsApp(texto)} aria-label={flutuante ? 'Conversar com a Smart Lion no WhatsApp' : undefined}>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1-3-3 1-1-1-3Z"/></svg>
  <span>{rotulo}</span>
</a>
<style>
.discreto{background:transparent;color:var(--white);border-color:#797a7c;font-weight:400}.discreto svg{color:var(--whatsapp)}.flutuante{position:fixed;right:24px;bottom:24px;z-index:30;width:50px;height:50px;min-height:50px;padding:0;border-radius:var(--radius);box-shadow:var(--shadow);border:1px solid #082b16}.flutuante span{position:absolute;right:calc(100% + 12px);padding:8px 14px;background:var(--ink);color:var(--white);border:1px solid var(--muted);white-space:nowrap;font-size:.8rem;opacity:0;pointer-events:none;transform:translateX(5px);transition:opacity .15s,transform .15s}.flutuante:hover span,.flutuante:focus-visible span{opacity:1;transform:none}@media(max-width:700px){.flutuante{right:16px;bottom:16px}}
</style>

````


## src/components/Header.astro

````astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logo.png';
import { loja } from '../config/loja';
import { navegacao, atividades } from '../config/navegacao';
import BotaoWhatsApp from './BotaoWhatsApp.astro';
---
<header class="site-header">
 <div class="container header-row">
  <a class="brand" href="/" aria-label={`${loja.nome} — início`}><Image src={logo} alt="" width={58} height={58}/><span>SMART LION<small>LAGES · SANTA CATARINA</small></span></a>
  <nav class="main-nav" aria-label="Navegação principal">
   {navegacao.slice(0,2).map(n=><a href={n.href}>{n.nome}</a>)}
   <details class="activities"><summary>O que fazemos <span aria-hidden="true">⌄</span></summary><div class="submenu">{atividades.map(n=><a href={n.href}>{n.nome}</a>)}</div></details>
   {navegacao.slice(2).map(n=><a href={n.href}>{n.nome}</a>)}
  </nav>
  <div class="contacts"><a class="instagram" href={loja.instagram.url} aria-label={`Instagram ${loja.instagram.nome}`}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg></a><BotaoWhatsApp rotulo="Fale conosco" discreto/></div>
 </div>
</header>
<script>
 const menu=document.querySelector<HTMLDetailsElement>('.activities');
 menu?.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.open){menu.open=false;menu.querySelector('summary')?.focus();}});
 document.addEventListener('click',event=>{if(menu?.open&&event.target instanceof Node&&!menu.contains(event.target))menu.open=false;});
 menu?.addEventListener('focusout',event=>{if(event.relatedTarget instanceof Node&&!menu.contains(event.relatedTarget))menu.open=false;});
</script>
<style>
.site-header{background:var(--ink);border-bottom:1px solid var(--line)}.header-row{display:flex;align-items:center;gap:28px;min-height:100px}.brand{display:flex;align-items:center;gap:10px;flex-shrink:0}.brand:hover{text-decoration:none}.brand span{font:400 1.05rem var(--font-body);letter-spacing:.12em}.brand small{display:block;font-size:.53rem;letter-spacing:.12em;color:var(--muted);margin-top:6px}.main-nav{display:flex;align-items:center;justify-content:center;gap:clamp(12px,1.6vw,25px);margin-left:auto;font-size:.8rem}.main-nav>a,summary{display:flex;align-items:center;min-height:48px;white-space:nowrap}summary{gap:8px;cursor:pointer;list-style:none}summary::-webkit-details-marker{display:none}.activities{position:relative}.activities[open] summary{color:var(--accent-light)}.submenu{position:absolute;top:100%;left:-20px;background:var(--ink);border:1px solid var(--line);box-shadow:var(--shadow);padding:12px;min-width:240px;z-index:50}.submenu a{display:flex;align-items:center;min-height:48px;padding:8px 12px}.submenu a:hover{background:#242529}.contacts{display:flex;gap:8px;align-items:center}.instagram{display:grid;place-items:center;min-width:44px;min-height:48px}.contacts :global(.button){font-size:.78rem;white-space:nowrap;padding:10px 13px}.contacts :global(.button svg){width:18px;height:18px}
@media(max-width:1180px){.header-row{flex-wrap:wrap;gap:0;min-height:0;padding-top:12px}.contacts{margin-left:auto}.main-nav{order:3;width:100%;justify-content:space-between;margin-top:8px;gap:8px;border-top:1px solid var(--line)}.brand img{width:44px;height:44px}.main-nav>a,summary{min-height:50px}}
@media(max-width:550px){.brand span{font-size:.8rem}.brand small{font-size:.43rem}.brand{gap:6px}.contacts{gap:0}.contacts :global(.button){font-size:.72rem;padding:8px}.contacts :global(.button svg){display:none}.main-nav{display:grid;grid-template-columns:1fr 1fr auto;column-gap:8px;padding-block:4px}.main-nav>a,summary{font-size:.75rem;min-height:44px}.activities{grid-column:3;grid-row:1 / span 2;align-self:center}.submenu{left:auto;right:0}.main-nav>a:nth-last-child(2){grid-column:1}.main-nav>a:last-child{grid-column:2}}
</style>

````


## src/components/Rodape.astro

````astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logo.png';
import { loja, enderecoCompleto } from '../config/loja';
import { formatarPeriodos } from '../lib/horario';
import { linkWhatsApp, mensagemGeral } from '../config/whatsapp';
import { navegacao, atividades } from '../config/navegacao';
import AvaliarGoogle from './avaliacoes/AvaliarGoogle.astro';
---
<footer id="contato">
 <div class="container assinatura"><Image src={logo} alt="Leão da Smart Lion" width={90} height={90} loading="lazy"/><p>Tecnologia de verdade<br/>é sobre pessoas.</p><a href={loja.instagram.url}>{loja.instagram.nome} ↗</a></div>
 <div class="container footer-grid">
  <div><h2>Venha nos conhecer</h2><address>{enderecoCompleto}<br/>CEP {loja.endereco.cep}</address><a href={loja.googleMaps}>Ver no Google Maps ↗</a></div>
  <div><h2>Horários da loja</h2><table><caption class="sr-only">Horário de atendimento</caption><tbody>{loja.horario.semana.map(h=><tr><th scope="row">{h.rotulo}</th><td>{formatarPeriodos(h.periodos)}</td></tr>)}</tbody></table><p class="small">Nos feriados, consulte o atendimento.</p></div>
  <div><h2>Fale com a gente</h2><a class="contact" href={linkWhatsApp(mensagemGeral)}>WhatsApp <span>{loja.whatsapp.exibicao}</span></a><a class="contact" href={`tel:${loja.telefone.numero}`}>Telefone <span>{loja.telefone.exibicao}</span></a></div>
 </div>
 <nav class="container paginas" aria-label="Informações da loja">{[...navegacao,...atividades].map(n=><a href={n.href}>{n.nome}</a>)}<a href="/perguntas-frequentes">Perguntas frequentes</a><a href="/dicas">Dicas</a><a href="/privacidade">Privacidade</a></nav>
 <AvaliarGoogle compacto/>
 <div class="container footer-bottom"><span>{loja.nome} · {loja.endereco.cidade}/{loja.endereco.uf}{loja.cnpj&&` · CNPJ ${loja.cnpj}`}{import.meta.env.DEV&&!loja.cnpj&&<span class="pendente"> · CNPJ PENDENTE</span>}</span><span>Desenvolvido por WAXLO</span></div>
 <div class="container"><button class="preferencias-button" type="button" data-preferencias hidden>Preferências de privacidade</button></div>
</footer>
<style>
footer{padding:var(--space-chapter) 0 100px;background:var(--ink);color:var(--white);border-top:1px solid var(--line)}.assinatura{display:flex;align-items:center;gap:30px;margin-bottom:60px}.assinatura p{font:400 clamp(1.8rem,3vw,3.2rem)/1.15 var(--font-heading)}.assinatura>a{margin-left:auto;font-size:.9rem;min-height:44px;display:flex;align-items:center}.footer-grid{display:grid;grid-template-columns:1.1fr 1.2fr 1fr;gap:48px;color:var(--muted);font-size:.875rem}h2{font:400 .75rem var(--font-body);text-transform:uppercase;letter-spacing:.14em;color:var(--white);margin-bottom:24px}address{font-style:normal;margin-bottom:18px;max-width:30ch}table{border-collapse:collapse;font-variant-numeric:tabular-nums}th{text-align:left;font-weight:400;padding:0 16px 12px 0;vertical-align:top}td{padding-bottom:12px}.small{font-size:.75rem;margin-top:10px}.contact{display:block;margin-bottom:18px}.contact span{display:block;color:var(--white);font-size:1.15rem;font-variant-numeric:tabular-nums}.paginas{display:flex;flex-wrap:wrap;gap:8px 28px;margin-top:44px;padding-top:24px;border-top:1px solid var(--line);font-size:.8rem}.paginas a{min-height:44px;display:flex;align-items:center}.footer-bottom{display:flex;justify-content:space-between;gap:24px;border-top:1px solid var(--line);padding-top:24px;font-size:.75rem;color:var(--muted)}.preferencias-button{min-height:48px;padding:12px 16px;margin-top:20px;color:var(--white);background:transparent;border:1px solid var(--muted);font-size:.8rem}.pendente{color:#ffda8b}@media(max-width:900px){.footer-grid{grid-template-columns:1fr 1fr}.assinatura{flex-wrap:wrap}.assinatura>a{margin-left:0}.footer-grid>div:last-child{grid-column:1 / -1;display:flex;flex-wrap:wrap;gap:16px 48px}.footer-grid>div:last-child h2{width:100%;margin-bottom:0}}@media(max-width:550px){.assinatura{gap:20px;margin-bottom:40px}.assinatura img{width:64px;height:64px}.assinatura p{font-size:1.7rem}.assinatura>a{width:100%}.footer-grid{grid-template-columns:1fr;gap:32px}.footer-grid>div:last-child{display:block}.footer-grid>div:last-child h2{margin-bottom:24px}.footer-bottom{flex-direction:column;gap:10px}}
</style>

````


## src/components/avaliacoes/AvaliarGoogle.astro

````astro
---
import { destinoAvaliar } from '../../lib/avaliacoes';
import { loja } from '../../config/loja';
interface Props { compacto?: boolean }
const {compacto=false}=Astro.props;
---
<section class:list={['avaliar', {light:!compacto, compacto}]} aria-labelledby="titulo-avaliar"><div class="container"><p class="eyebrow">Sua experiência importa</p><h2 id="titulo-avaliar">Comprou ou consertou<br/>com a gente? Dá a sua nota.</h2><p>Conte como foi seu atendimento. Todas as notas seguem para o Google.</p>
<fieldset><legend>Escolha de 1 a 5 estrelas</legend><div class="notas">{[1,2,3,4,5].map(n=><label><input type="radio" name="nota-google" value={n}/><span aria-hidden="true">★</span><span>{n}<span class="sr-only"> {n === 1 ? 'estrela' : 'estrelas'}</span></span></label>)}</div></fieldset>
<a class="button" href={destinoAvaliar()}>Confirmar minha nota no Google ↗</a><p class="aviso">A seleção aqui não publica nem envia sua nota. {!loja.linkAvaliar ? 'Na ficha do Google, abra Avaliações e escolha Avaliar para confirmar.' : 'Escolha novamente a nota e confirme no Google.'}</p></div></section>
<style>.avaliar{padding:64px 0}.eyebrow{color:#8c0747;margin-bottom:16px}h2{max-width:850px}.avaliar p:not(.eyebrow){margin-top:20px;max-width:650px}fieldset{border:0;margin:24px 0;padding:0}legend{font-size:.9rem;margin-bottom:12px}.notas{display:flex;flex-wrap:wrap;gap:12px}.notas label{display:flex;align-items:center;gap:7px;min-height:48px;border:1px solid #747579;padding:10px 12px;cursor:pointer;border-radius:var(--radius)}input{accent-color:#a50050;width:18px;height:18px}.notas label:has(input:checked){border-color:#a50050;background:#fbe3ef;color:#63002f}.notas label>span[aria-hidden]{font-size:1.3rem}.aviso{font-size:.8rem;color:#414246}.button{color:#111214}.compacto{padding:40px 0;background:var(--ink);color:var(--white)}.compacto h2{font-size:clamp(1.5rem,2.5vw,2.4rem);max-width:700px}.compacto .eyebrow{color:var(--wood-light)}.compacto .aviso{color:var(--muted)}.compacto .button{color:var(--white)}.compacto .notas label{border-color:#919294}.compacto input{accent-color:var(--accent-light)}.compacto .notas label:has(input:checked){color:var(--white);background:#59223b;border-color:var(--accent-light)}</style>

````


## src/components/catalogo/Catalogo.astro

````astro
---
import type { Produto } from '../../lib/catalogo';
import { publicavel } from '../../lib/catalogo';
import CardProduto from './CardProduto.astro';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import ChipsCategorias from '../ChipsCategorias.astro';
import ModalProduto from './ModalProduto.astro';
interface Props { produtos: Produto[]; categoria?: string }
const {produtos,categoria=''}=Astro.props;
---
<ChipsCategorias/>
<div data-catalogo data-categoria-base={categoria} data-rota-catalogo={Astro.url.pathname}>
 {import.meta.env.DEV && produtos.some(p=>!publicavel(p)) && <p class="aviso-dev">Prévia de desenvolvimento: os slots abaixo são rascunhos, com opções demonstrativas. Nenhum deles será publicado sem confirmação.</p>}
 <form class="busca-catalogo" id="busca" action={Astro.url.pathname} method="get" data-busca-catalogo role="search" aria-label="Buscar produtos">
  <div class="campo-busca"><label for="consulta-catalogo">Qual modelo você procura?</label><input id="consulta-catalogo" name="q" type="search" placeholder="iPhone, 17 Pro Max, tablet…" autocomplete="off"/></div>
  <div class="campo-condicao"><label for="condicao-catalogo">Condição</label><select id="condicao-catalogo" name="condicao"><option value="">Todas</option><option value="novo">Novo</option><option value="seminovo">Seminovo</option></select></div>
  <button type="submit" class="buscar">Buscar</button><button type="button" class="limpar" data-limpar hidden>Limpar busca</button>
 </form>
 <noscript><p class="aviso">A busca precisa de JavaScript. Você pode navegar pelas categorias acima e abrir os produtos ou o WhatsApp normalmente.</p></noscript>
 <div class="catalogo-meta"><h2 class="sr-only">Modelos do catálogo</h2><p data-contagem role="status" aria-live="polite">{produtos.length} {produtos.length===1?'modelo cadastrado':'modelos cadastrados'}</p><span>Disponibilidade pelo WhatsApp</span></div>
 <div class="grade-produtos">{produtos.map(p=><CardProduto produto={p}/>)}</div>
 <div class="catalogo-vazio" data-catalogo-vazio hidden={produtos.length>0}><p class="eyebrow">Vamos encontrar seu próximo aparelho</p><h2>Converse com a nossa equipe.</h2><p data-vazio-texto>{produtos.length ? 'Não encontramos um modelo para essa busca. Consulte as opções com a equipe.' : 'Consulte os modelos e as condições pelo WhatsApp. Nossa equipe ajuda você a escolher.'}</p><BotaoWhatsApp rotulo="Consultar modelos no WhatsApp"/></div>
</div>
{produtos.length > 0 && <ModalProduto/>}
<script src="../../scripts/busca.ts"></script>
<style>.aviso-dev{background:#fff0c7;color:#633a00;padding:16px;font-size:.8rem;margin-bottom:24px}.busca-catalogo{display:flex;align-items:end;gap:12px;padding:24px 0;border-block:1px solid #c5c6c0;scroll-margin-top:165px}.busca-catalogo label{display:block;font-size:.8rem;margin-bottom:8px}.campo-busca{flex:1}.campo-condicao{width:160px}.busca-catalogo input,.busca-catalogo select{display:block;min-height:48px;width:100%;background:white;border:1px solid #868780;border-radius:0;padding:11px 14px;color:var(--ink)}.busca-catalogo button{min-height:48px;padding:10px 22px;border:1px solid var(--ink);background:var(--ink);color:white}.busca-catalogo .limpar{background:transparent;color:var(--ink);border-color:#777}.catalogo-meta{display:flex;justify-content:space-between;gap:16px;font-size:.75rem;color:#52534e;margin:28px 0}.grade-produtos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:40px 24px}.catalogo-vazio{padding:48px 0;max-width:650px}.catalogo-vazio .eyebrow{color:#8c0747}.catalogo-vazio h2{margin:12px 0 20px}.catalogo-vazio>p{margin-bottom:24px;color:#414246}.aviso{font-size:.8rem;margin-top:12px}@media(max-width:1050px){.grade-produtos{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.busca-catalogo{flex-wrap:wrap}.campo-busca{flex-basis:100%}.campo-condicao{flex:1;min-width:150px}.busca-catalogo .limpar{flex-basis:100%}.grade-produtos{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 16px}.catalogo-meta span{max-width:120px;text-align:right}}@media(max-width:420px){.grade-produtos{grid-template-columns:1fr}.grade-produtos :global(.foto-produto){max-height:320px;aspect-ratio:auto;height:320px}}</style>

````


## src/components/editorial/Capitulo.astro

````astro
---
interface Props { id: string; tema?: 'claro'|'escuro'; marcador?: string; titulo: string }
const {id,tema='escuro',marcador,titulo}=Astro.props;
---
<section id={id} class:list={['capitulo',{'light':tema==='claro'}]} aria-labelledby={`${id}-titulo`}><div class="container"><header>{marcador&&<p class="eyebrow">{marcador}</p>}<h2 id={`${id}-titulo`}>{titulo}</h2><div class="introducao"><slot name="introducao"/></div></header><slot/></div></section>
<style>.capitulo{padding-block:var(--space-chapter);background:var(--ink);color:var(--white)}.capitulo.light{background:var(--surface);color:var(--ink)}header{margin-bottom:clamp(32px,5vw,64px);max-width:1000px}.eyebrow{color:var(--wood-light);margin-bottom:24px}.light .eyebrow{color:var(--text-dark)}h2{max-width:20ch}.introducao{max-width:660px;margin-top:24px;color:var(--muted)}.light .introducao{color:var(--text-dark)}</style>

````


## src/components/editorial/RevelacaoImagem.astro

````astro
---
import { Picture } from 'astro:assets';
import type { ImageMetadata } from 'astro';
interface Props { src: ImageMetadata; alt: string; legenda?: string; sizes?: string; provisoria?: boolean }
const {src,alt,legenda,sizes='(max-width: 700px) 100vw, 80vw',provisoria=false}=Astro.props;
---
<figure data-revelacao><Picture src={src} alt={alt} formats={['avif','webp']} widths={[480,800,1280]} sizes={sizes} loading="lazy"/>{legenda&&<figcaption>{legenda}</figcaption>}{import.meta.env.DEV&&provisoria&&<p class="provisorio">PROVISÓRIO — aguardando fotografia deste ambiente.</p>}</figure>
<script>
 if('IntersectionObserver' in window&&!window.matchMedia('(prefers-reduced-motion: reduce)').matches){
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(entry.isIntersecting){entry.target.classList.add('revelada');observer.unobserve(entry.target);}}},{threshold:.08});
  document.querySelectorAll('[data-revelacao]').forEach(el=>observer.observe(el));
 }
</script>
<style>figure{margin:0}figure :global(img){width:100%;height:auto}figcaption{margin-top:14px;font-size:.8rem}figure.revelada :global(picture){display:block;animation:revelar .7s ease-out both}.provisorio{margin-top:12px;font:400 .75rem var(--font-body);background:#fff0c7;color:#633a00;padding:10px}@keyframes revelar{from{opacity:.75;clip-path:inset(0 0 3% 0)}to{opacity:1;clip-path:inset(0)}}@media(prefers-reduced-motion:reduce){figure.revelada :global(picture){animation:none}}</style>

````


## src/config/navegacao.ts

````ts
// Destinos atuais preservados até a migração com 301 nas fases R3–R5.
export const navegacao = [
  { nome: 'A Loja', href: '/como-chegar' },
  { nome: 'Nossa História', href: '/sobre' },
  { nome: 'Avaliações', href: '/avaliacoes' },
  { nome: 'Visite-nos', href: '/como-chegar' },
] as const;
export const atividades = [
  { nome: 'Produtos', href: '/catalogo' },
  { nome: 'Seminovos', href: '/catalogo/seminovos' },
  { nome: 'Assistência técnica', href: '/assistencia-tecnica' },
  { nome: 'Curso', href: '/curso-manutencao-celular' },
] as const;

````


## src/layouts/LayoutBase.astro

````astro
---
import '../styles/tokens.css';
import '../styles/global.css';
import fontH1 from '@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2?url';
import Header from '../components/Header.astro';
import Rodape from '../components/Rodape.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import PendenciasDev from '../components/PendenciasDev.astro';
import { getImage } from 'astro:assets';
import fotoLoja from '../assets/loja.jpg';
import Consentimento from '../components/Consentimento.astro';
import { dadosEstruturados, jsonSeguro, urlCanonica, podeIndexar } from '../lib/seo';
import type { Produto } from '../lib/catalogo';
interface Props { title: string; description: string; produto?: Produto }
const { title, description, produto } = Astro.props;
const canonical=urlCanonica(Astro.url.pathname,Astro.site!);
const indexavel=podeIndexar(import.meta.env.DEV,import.meta.env.PUBLIC_INDEXABLE,import.meta.env.VERCEL_ENV)&&!Astro.url.pathname.startsWith('/404')&&!Astro.url.pathname.startsWith('/_estilo');
const og=await getImage({src:fotoLoja,width:1200,format:'jpg'});
const schema=dadosEstruturados(Astro.url.pathname,title,Astro.site!,produto);
---
<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={description}/><meta name="robots" content={indexavel ? 'index,follow' : 'noindex,nofollow'}/><link rel="canonical" href={canonical}/><meta property="og:type" content="website"/><meta property="og:locale" content="pt_BR"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={canonical}/><meta property="og:image" content={new URL(og.src,Astro.site).href}/><meta property="og:image:alt" content="Interior da loja Smart Lion em Lages"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json" set:html={jsonSeguro(schema)}/><meta name="theme-color" content="#111214"/><link rel="icon" type="image/png" href="/favicon.png"/><link rel="preload" href={fontH1} as="font" type="font/woff2" crossorigin/></head><body><a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="sticky"><Header/></div><PendenciasDev/><main id="conteudo" tabindex="-1"><slot/></main><Consentimento/><Rodape/><BotaoWhatsApp flutuante/></body></html>
<style>.sticky{position:sticky;top:0;z-index:40}main:focus{outline:none}@media(max-width:1180px){.sticky{position:relative}}</style>

````


## src/pages/[estudo].astro

````astro
---
export function getStaticPaths(){ return [{params:{estudo:"_estilo"}}]; }
import Layout from '../layouts/LayoutBase.astro';
import Capitulo from '../components/editorial/Capitulo.astro';
import RevelacaoImagem from '../components/editorial/RevelacaoImagem.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import StatusHorario from '../components/StatusHorario.astro';
import { Picture, Image } from 'astro:assets';
import lojaFoto from '../assets/loja.jpg';
import bancada from '../assets/home/bancada.jpg';
import laboratorio from '../assets/home/laboratorio.jpg';
import logo from '../assets/logo.png';
import { loja, enderecoCompleto } from '../config/loja';
---
<Layout title="Direção visual institucional | Smart Lion" description="Estudo visual da remodelagem institucional da Smart Lion, em Lages.">
 <section class="abertura"><Picture src={lojaFoto} alt="Interior da Smart Lion com balcão de madeira e prateleiras iluminadas" formats={['avif','webp']} widths={[480,800,1280,1920]} sizes="100vw" loading="eager" fetchpriority="high"/><div class="container abertura-texto"><p class="eyebrow">A casa do leão · estudo visual R1</p><h1>Tecnologia com procedência,<br/><em>no coração de Lages.</em></h1><p class="resposta">Na {loja.nome}, reunimos produtos, assistência técnica e formação na {enderecoCompleto}. Conheça nosso espaço e fale com a gente pelo WhatsApp.</p><div class="acoes"><a class="button button-light" href="/como-chegar">Conheça a loja ↗</a><BotaoWhatsApp discreto/></div><StatusHorario/></div><div class="container legenda">O ambiente real da Smart Lion. Fotografia existente do interior.</div></section>
 <Capitulo id="manifesto-estilo" marcador="01 / A ideia" titulo="Tecnologia de verdade é sobre pessoas."><p slot="introducao">Queremos tornar a experiência com tecnologia segura e confiável. Procedência, atendimento e suporte fazem parte dessa relação.</p><div class="editorial"><RevelacaoImagem src={lojaFoto} alt="Balcão de madeira e prateleiras no interior da Smart Lion" legenda="Um lugar para conhecer, conversar e escolher."/><div><p class="eyebrow">Um espaço, diferentes caminhos</p><p class="texto-grande">Da escolha de um aparelho ao cuidado com ele.</p><a class="link-editorial" href="/assistencia-tecnica">Conheça a assistência ↗</a></div></div></Capitulo>
 <Capitulo id="fontes" tema="claro" marcador="02 / Comparação tipográfica" titulo="Duas vozes para a mesma história."><p slot="introducao">A: DM Serif Display + DM Sans. B: Young Serif + DM Sans. O mesmo leão, texto e proporção para comparar. A fonte B é carregada somente nesta página de estudo.</p><div class="comparacao">{['a','b'].map((par,index)=><article class={`amostra fonte-${par}`}><div class="amostra-topo"><Image src={logo} alt="Leão da Smart Lion" width={56} height={56} loading="lazy"/><span>{index===0?'A · DM Serif Display':'B · Young Serif'}</span></div><h3>Tecnologia com procedência, no coração de Lages.</h3><p>Tecnologia de verdade é sobre pessoas.</p><p class="numero">5,0</p><p>Atendimento de perto. Conheça a loja e fale com a nossa equipe.</p></article>)}</div></Capitulo>
 <Capitulo id="ambientes-estilo" marcador="03 / Fotografia e movimento" titulo="Espaço para cuidar. Espaço para aprender."><p slot="introducao">Fotos reais, reveladas uma vez. Sem JavaScript ou com movimento reduzido, continuam visíveis.</p><div class="ambientes"><RevelacaoImagem src={bancada} alt="Bancada de manutenção da Smart Lion" legenda="Assistência técnica" sizes="(max-width: 700px) 100vw, 45vw"/><RevelacaoImagem src={laboratorio} alt="Bancadas do laboratório de treinamento da Smart Lion" legenda="Centro Técnico" sizes="(max-width: 700px) 100vw, 45vw"/></div></Capitulo>
 <Capitulo id="elementos" tema="claro" marcador="04 / Elementos e contraste" titulo="O essencial, à vista."><p slot="introducao">Paleta quente, contato discreto e foco visível. As mensagens do WhatsApp permanecem centralizadas.</p><div class="paleta">{[['Grafite','#111214'],['Off-white','#f5f3ef'],['Madeira','#8a6a4f'],['Magenta','#e0157a'],['WhatsApp','#25d366']].map(([nome,cor])=><div><span style={`background:${cor}`} aria-hidden="true"></span><p>{nome}<br/><code>{cor}</code></p></div>)}</div><div class="acoes"><BotaoWhatsApp/><a class="button" href="/avaliacoes">Leia as avaliações ↗</a><a class="link-editorial" href={loja.instagram.url}>{loja.instagram.nome} ↗</a></div><p class="nota">Use Tab para conferir os focos e Escape para fechar o submenu “O que fazemos”. O horário e os contatos completos estão no rodapé.</p></Capitulo>
</Layout>
<style>
@font-face{font-family:'Young Serif';src:url('@fontsource/young-serif/files/young-serif-latin-400-normal.woff2') format('woff2');font-weight:400;font-display:swap}.abertura{position:relative;isolation:isolate;padding:clamp(64px,8vw,120px) 0 28px;min-height:760px;display:flex;flex-direction:column;justify-content:center}.abertura :global(picture){position:absolute;inset:0;z-index:-2}.abertura :global(picture img){width:100%;height:100%;object-fit:cover;object-position:center}.abertura:before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#111214f5 0%,#111214df 48%,#11121425 100%)}h1{max-width:890px;margin:28px 0;line-height:1.04}h1 em{font-style:normal;color:#ded1c2}.resposta{max-width:580px;font-size:1rem;color:#e2e0dc}.acoes{display:flex;flex-wrap:wrap;align-items:center;gap:16px;margin-top:28px}.legenda{padding-top:60px;font-size:.75rem;color:#ded1c2}.editorial{display:grid;grid-template-columns:1.5fr 1fr;align-items:center;gap:clamp(32px,6vw,96px)}.texto-grande{font:400 clamp(1.8rem,3vw,3rem)/1.2 var(--font-heading);margin:24px 0 32px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;text-decoration:underline;text-underline-offset:6px}.comparacao{display:grid;grid-template-columns:1fr 1fr;gap:32px}.amostra{padding:clamp(24px,3vw,44px);background:var(--ink);color:var(--white);border-top:3px solid var(--wood)}.amostra-topo{display:flex;align-items:center;gap:16px;font-size:.8rem;margin-bottom:40px}.amostra h3{font-size:clamp(1.8rem,3.1vw,3.4rem)}.amostra>p{margin-top:24px}.amostra .numero{font:400 5rem/1 var(--font-heading);font-variant-numeric:tabular-nums}.fonte-b h3,.fonte-b .numero{font-family:'Young Serif',Georgia,serif}.ambientes{display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,8vw,120px)}.ambientes>:last-child{margin-top:100px}.paleta{display:flex;flex-wrap:wrap;gap:32px}.paleta>div{flex:1;min-width:120px}.paleta span{display:block;height:72px;border:1px solid #777;margin-bottom:16px}.paleta p{font-size:.85rem}.nota{font-size:.85rem;color:var(--text-dark);max-width:650px;margin-top:32px}@media(max-width:700px){.abertura{min-height:700px;padding-top:64px}.abertura:before{background:#111214df}.abertura h1{font-size:clamp(2.5rem,9vw,3.5rem)}.editorial,.comparacao,.ambientes{grid-template-columns:1fr}.ambientes>:last-child{margin-top:12px}.amostra h3{font-size:2.2rem}.legenda{padding-top:40px}}
</style>

````


## src/pages/avaliacoes.astro

````astro
---
import Layout from '../layouts/LayoutBase.astro';
import { avaliacoes, filtrosAvaliacoes, resumoAvaliacoes } from '../lib/avaliacoes';
import { loja, enderecoCompleto } from '../config/loja';
import SeloGoogle from '../components/avaliacoes/SeloGoogle.astro';
import Depoimento from '../components/avaliacoes/Depoimento.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
---
<Layout title="Avaliações da Smart Lion em Lages" description="Leia relatos de clientes da Smart Lion em Lages sobre compras e assistência técnica. Veja a nota no Google e conte sua experiência.">
<section class="intro-avaliacoes container"><p class="eyebrow">Experiências de quem conhece</p><h1>Avaliações da<br/>Smart Lion em Lages.</h1><p>Veja relatos sobre compras e assistência técnica na {loja.nome}, na {enderecoCompleto}. Para consultar um aparelho ou falar sobre um reparo, converse com nossa equipe pelo WhatsApp.</p><BotaoWhatsApp/><SeloGoogle/>
<details><summary>Distribuição das {resumoAvaliacoes.total} avaliações no Google</summary><ul>{[5,4,3,2,1].map(n=><li>{n} {n === 1 ? 'estrela' : 'estrelas'}: {resumoAvaliacoes.distribuicao[String(n) as keyof typeof resumoAvaliacoes.distribuicao]}</li>)}</ul></details></section>
<section class="relatos light" aria-labelledby="titulo-relatos"><div class="container"><h2 id="titulo-relatos">Relatos de clientes.</h2><p class="contexto">Esta seleção reúne {avaliacoes.length} depoimentos coletados do Google em outubro de 2026. Para consultar o conjunto completo e as avaliações mais recentes, <a href={loja.googleMaps}>acesse a ficha no Google ↗</a>. Preços, prazos e experiências citados são relatos individuais da época, não condições atuais da loja.</p>
<div class="filtros" role="group" aria-label="Filtrar avaliações por tema" hidden>{filtrosAvaliacoes.map(f=><button type="button" data-tema={f.id} aria-pressed={f.id === 'todas'}>{f.nome}</button>)}</div><noscript><p>Todos os depoimentos estão abaixo. Os filtros por tema ficam disponíveis com JavaScript.</p></noscript>
<p id="contagem-avaliacoes" role="status" aria-live="polite">{avaliacoes.length} depoimentos</p><div class="lista-avaliacoes">{avaliacoes.map(a=><Depoimento avaliacao={a}/>)}</div><p data-sem-avaliacoes hidden>Nenhum depoimento com este tema no arquivo disponível. <a href={loja.googleMaps}>Veja as avaliações no Google ↗</a>.</p></div></section>
</Layout>
<script>import '../scripts/filtros-avaliacoes';</script>
<style>.intro-avaliacoes{padding-block:60px}.intro-avaliacoes>.eyebrow{color:#ff78bc;margin-bottom:18px}.intro-avaliacoes>p:not(.eyebrow){max-width:760px;margin:24px 0}.intro-avaliacoes h1{max-width:1000px}.intro-avaliacoes details{font-size:.85rem;max-width:650px}.intro-avaliacoes summary{min-height:44px;cursor:pointer}.intro-avaliacoes ul{padding-left:24px}.relatos{padding:60px 0}.contexto{max-width:850px;margin:22px 0;font-size:.9rem;color:#414246}.contexto a{text-decoration:underline}.filtros{display:flex;flex-wrap:wrap;gap:10px;margin:28px 0}.filtros button{padding:10px 16px;min-height:44px;background:transparent;border:1px solid #747579;color:#111214;border-radius:var(--radius)}.filtros button[aria-pressed=true]{background:#8c0747;border-color:#8c0747;color:#fff}#contagem-avaliacoes{font-size:.85rem;margin-bottom:22px}.lista-avaliacoes{columns:2;column-gap:64px}.lista-avaliacoes :global(.depoimento){break-inside:avoid;margin-bottom:22px} [data-sem-avaliacoes]{padding:24px 0}@media(max-width:800px){.lista-avaliacoes{columns:1}.intro-avaliacoes,.relatos{padding-block:42px}}</style>

````


## src/pages/index.astro

````astro
---
import { Picture } from 'astro:assets';
import CarrosselAvaliacoes from '../components/avaliacoes/CarrosselAvaliacoes.astro';
import Vitrine from '../components/catalogo/Vitrine.astro';
import StatusHorario from '../components/StatusHorario.astro';
import Layout from '../layouts/LayoutBase.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import fotoLoja from '../assets/loja.jpg';
import { loja } from '../config/loja';
import FaixaConfianca from '../components/home/FaixaConfianca.astro';
import CategoriasHome from '../components/home/CategoriasHome.astro';
import AssistenciaHome from '../components/home/AssistenciaHome.astro';
import DecisaoHome from '../components/home/DecisaoHome.astro';
import ParcelamentoHome from '../components/home/ParcelamentoHome.astro';
import InstagramHome from '../components/home/InstagramHome.astro';
import CursoHome from '../components/home/CursoHome.astro';
import LojaHome from '../components/home/LojaHome.astro';
import ModalProduto from '../components/catalogo/ModalProduto.astro';
---
<Layout title="iPhone em Lages com garantia | Smart Lion" description="iPhone, Apple e importados na Smart Lion, no Centro de Lages. Consulte modelos e condições pelo WhatsApp.">
<section class="hero" aria-labelledby="titulo">
  <Picture src={fotoLoja} formats={['avif','webp']} widths={[480,800,1280,1920]} sizes="100vw" alt="Interior da Smart Lion, com bancada de madeira, notebooks e prateleiras iluminadas" loading="eager" fetchpriority="high" class="hero-photo"/>
  <div class="shade"></div><div class="container hero-content"><p class="eyebrow"><span></span>Loja física no Centro de {loja.endereco.cidade}</p><h1 id="titulo">iPhone, Apple<br/>e importados<br/><span>com garantia<br class="mobile-break"/> em Lages.</span></h1><p class="intro">Novos e seminovos com procedência, assistência técnica IRP Apple e parcelamento em até {loja.parcelamento.cartaoAte}x no cartão. Estamos na {loja.endereco.rua}, {loja.endereco.numero}, em Lages. Fale com a equipe pelo WhatsApp para consultar modelos e condições.</p><div class="actions"><a class="button button-light" href="/catalogo">Ver modelos disponíveis <span aria-hidden="true">↗</span></a><BotaoWhatsApp/></div><StatusHorario/><div class="hero-foot"><span>VENDA · MANUTENÇÃO · TREINAMENTO</span><a href="#contato">Conheça nossos horários <span aria-hidden="true">↓</span></a></div></div>
</section>
<FaixaConfianca/>
<CarrosselAvaliacoes/>
<Vitrine/>
<CategoriasHome/>
<AssistenciaHome/>
<DecisaoHome/>
<ParcelamentoHome/>
<InstagramHome/>
<CursoHome/>
<LojaHome/>
<ModalProduto/>
</Layout>

<style>.hero{position:relative;isolation:isolate;min-height:690px;overflow:hidden}.hero :global(.hero-photo){position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-2}.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,18,20,.96) 0%,rgba(17,18,20,.82) 33%,rgba(17,18,20,.18) 80%);z-index:-1}.hero-content{padding-top:65px;padding-bottom:30px}.hero .eyebrow{display:flex;align-items:center;gap:10px;color:#e9e9e9}.eyebrow span{width:7px;height:7px;background:var(--accent)}h1{margin:26px 0 24px;max-width:820px}h1 span{color:#d6d4cf}.intro{max-width:470px;color:#ddd;font-size:.98rem}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.hero-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ffffff30;margin-top:50px;padding-top:22px;font-size:.7rem;letter-spacing:.1em}.hero-foot a{letter-spacing:0;color:#dedede}.mobile-break{display:none}.directory{padding:80px 0 90px}.directory-heading{display:flex;justify-content:space-between;align-items:end;gap:24px}.directory-heading .eyebrow{color:#8c0747;margin-bottom:12px}.directory-heading>p{color:var(--text-dark);font-size:.9rem}.category-search{display:grid;grid-template-columns:auto minmax(160px,400px) 1fr;align-items:center;gap:16px;margin:38px 0 12px}.category-search label{font-size:.85rem}.category-search input{border:1px solid #858585;border-radius:var(--radius);padding:12px;background:transparent;width:100%;color:var(--ink)}#resultado-busca{font-size:.8rem}.category-list article{display:flex;align-items:center;gap:24px;border-bottom:1px solid #c8c8c4;padding:24px 0;scroll-margin-top:160px}.index{color:#666;font-size:.75rem;width:30px}h3{font-size:clamp(1.4rem,2.5vw,2rem)}article p{font-size:.8rem;color:var(--text-dark);margin-top:6px}.category-contact{margin-left:auto;min-height:44px;display:flex;align-items:center;gap:25px;font-size:.85rem}.category-contact span{font-size:1.4rem}.no-js{margin-top:24px}@media(min-width:1500px){.hero{min-height:760px}.hero-content{padding-top:85px}}@media(max-width:700px){.hero{min-height:720px}.hero-content{padding-top:42px}.hero :global(.hero-photo){object-position:63% center}.shade{background:linear-gradient(90deg,#111214f5,#1112149c),linear-gradient(0deg,#111214,transparent 50%)}h1{margin-top:24px;line-height:1.07}.mobile-break{display:block}.intro{font-size:.92rem;max-width:330px}.actions{display:grid;max-width:340px;gap:10px}.hero-foot{margin-top:38px;align-items:flex-start;gap:14px;flex-direction:column;font-size:.65rem}.directory{padding:52px 0}.directory-heading{display:block}.directory-heading>p{margin-top:20px}.category-search{display:block;margin-top:28px}.category-search label{display:block;margin-bottom:8px}#resultado-busca{min-height:24px;margin-top:8px}.category-list article{gap:10px}.index{width:20px}.category-contact{font-size:.75rem;gap:8px}article p{max-width:170px}}
</style>

````


## src/styles/global.css

````css
*{box-sizing:border-box}html{scroll-padding-top:120px}body{margin:0;background:var(--ink);color:var(--white);font-family:var(--font-body);line-height:1.6;-webkit-font-smoothing:antialiased}h1,h2,h3,p{margin:0}h1,h2,h3{font-family:var(--font-heading);font-weight:400;line-height:1.08;letter-spacing:-.025em}h1{font-size:var(--text-h1)}h2{font-size:var(--text-h2)}a{color:inherit;text-decoration:none}button,input{font:inherit}button,a,input{touch-action:manipulation}button{cursor:pointer}img{display:block;max-width:100%;height:auto}a:hover{text-decoration:underline;text-underline-offset:5px}:focus-visible{outline:3px solid var(--accent-light);outline-offset:5px}.light :focus-visible{outline-color:var(--focus-light)}.container{width:min(var(--container),calc(100% - 96px));margin-inline:auto}.eyebrow{font-size:.75rem;letter-spacing:.16em;text-transform:uppercase}.button{display:inline-flex;justify-content:center;align-items:center;gap:.65rem;min-height:48px;padding:.8rem 1.3rem;border:1px solid currentColor;border-radius:var(--radius);font-weight:600}.button:hover{text-decoration:none;filter:brightness(.95)}.button-light{background:var(--surface);color:var(--ink);border-color:var(--surface)}.button-wa{background:var(--whatsapp);color:#082b16;border-color:var(--whatsapp)}.skip{position:fixed;left:1rem;top:-100px;background:white;color:black;padding:1rem;z-index:100}.skip:focus{top:1rem}.light{background:var(--surface);color:var(--ink)}.tabular{font-variant-numeric:tabular-nums}[hidden]{display:none!important}@media(max-width:700px){.container{width:calc(100% - 40px)}html{scroll-padding-top:24px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}

````


## src/styles/tokens.css

````css
@font-face{font-family:'DM Serif Display';src:url('@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap}
@font-face{font-family:'DM Sans';src:url('@fontsource/dm-sans/files/dm-sans-latin-400-normal.woff2') format('woff2');font-style:normal;font-weight:400;font-display:swap}
:root{--ink:#111214;--surface:#f5f3ef;--white:#fff;--muted:#bfc0c2;--line:#363739;--wood:#8a6a4f;--wood-light:#c6aa8f;--accent:#e0157a;--accent-light:#ff78bc;--focus-light:#a50050;--whatsapp:#25d366;--text-dark:#414246;--space-1:.5rem;--space-2:1rem;--space-3:1.5rem;--space-4:2rem;--space-5:3rem;--space-6:5rem;--space-chapter:clamp(4rem,8vw,8rem);--radius:.2rem;--shadow:0 12px 36px #0002;--font-body:'DM Sans',sans-serif;--font-heading:'DM Serif Display',Georgia,serif;--text-sm:.875rem;--text-base:1rem;--text-h1:clamp(2.6rem,5.5vw,5.6rem);--text-h2:clamp(2.15rem,4vw,4.3rem);--container:1320px}

````
