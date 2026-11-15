# Código completo — Fase 4

## Árvore de arquivos criados ou alterados

```text
README.md
docs/AVALIACOES.md
docs/PENDENCIAS.md
docs/QA_FASE_4.md
docs/preview-fase4.jpg
package.json
scripts/verificar-avaliacoes.mjs
src/components/PendenciasDev.astro
src/components/Rodape.astro
src/components/avaliacoes/AvaliarGoogle.astro
src/components/avaliacoes/CarrosselAvaliacoes.astro
src/components/avaliacoes/Depoimento.astro
src/components/avaliacoes/MarcaGoogle.astro
src/components/avaliacoes/SeloGoogle.astro
src/data/avaliacoes.json
src/lib/avaliacoes.ts
src/lib/movimento-avaliacoes.ts
src/lib/temas-avaliacoes.ts
src/pages/avaliacoes.astro
src/pages/index.astro
src/scripts/carrossel-avaliacoes.ts
src/scripts/filtros-avaliacoes.ts
tests/avaliacoes.test.ts
```

## README.md

````markdown
# Smart Lion — Fase 4

Node 24.22.1 LTS; pnpm 11.25.0; Astro 7.4.3; TypeScript strict; saída estática.

```sh
corepack enable
corepack prepare pnpm@11.25.0 --activate
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
pnpm dev
```

`SITE_URL` define a origem. `PUBLIC_INDEXABLE=false` por padrão. Para produção pública, somente após aprovação final, definir `PUBLIC_INDEXABLE=true`. Não existem scripts de analytics nem mapa na carga inicial.

Conferir em 390px e 1440px: navegação horizontal das categorias, botão de WhatsApp, Instagram, foco por teclado, busca de produtos (17 pro max, seminovo, bateria), tabela de horários, 404 e links com JavaScript desativado.

Catálogo, busca e páginas de produto implementados. Os cinco exemplos aparecem apenas em desenvolvimento; nenhum produto sem confirmação é publicado. Consulte docs/CATALOGO.md e docs/QA_FASE_3.md.


## Horário e mensagens

A agenda está em `src/config/loja.ts`; os períodos são minutos desde meia-noite. Exceções são datas ISO com períodos; array vazio de períodos significa fechado. Não adicionar feriados sem confirmação. `src/lib/horario.ts` recebe Date e agenda, sem depender do relógio global. A tabela do rodapé e o status usam os mesmos dados.

Todos os links passam por `linkWhatsApp(texto)`. As 12 mensagens da §10 estão testadas, incluindo a troca condicional. Campos obrigatórios vazios são rejeitados; assistência preserva os campos opcionais vazios; parcelamento usa o fallback explícito “um aparelho”. Não há envio automático nem serviço externo.

## Avaliações

56 textos originais em `src/data/avaliacoes.json`; 23 destaques na home. `/avaliacoes` reúne todos os textos com filtros por tags, distribuição de notas e widget sem filtragem por nota. Consulte `docs/AVALIACOES.md`. Execute `pnpm verify:avaliacoes` após o build.

````

## docs/AVALIACOES.md

````markdown
# Avaliações — Fase 4

## Fonte e atualização

`src/data/avaliacoes.json` é uma cópia integral do arquivo fornecido. Os 56 relatos são uma seleção, não as 766 avaliações completas. O selo usa resumo.nota, resumo.total e fonte.coletadoEm juntos. A distribuição mostra inclusive as notas 1 e 4. Não há atualização automática: atualizar esses dados juntos após nova coleta confirmada, a cada 30–60 dias conforme a fonte.

Texto renderizado literalmente, sem correção de ortografia. Autor usa exclusivamente autorExibicao; nomes de perfil com um só nome permanecem assim, sem inventar sobrenome. Os nomes de funcionários dentro dos textos originais foram preservados. Datas relativas não são reapresentadas como atuais: usamos mesAprox explicitamente como aproximado.

A propriedade negativaParaResponder contém um resumo interno, não o texto literal. Ela não é publicada, nem enviada ao navegador. A lista pública é exatamente avaliacoes. A distribuição integral e o link ao Google ficam disponíveis. Preços e prazos citados em relatos não constituem oferta e recebem contexto na página.

## Componentes e comportamento

- SeloGoogle: nota, total, data e link para loja.googleMaps.
- Depoimento: texto completo, nome abreviado, estrelas, data aproximada e atribuição ao Google.
- CarrosselAvaliacoes: 23 destaqueHome, scroll-snap sem biblioteca; avanço a cada oito segundos apenas enquanto visível. Pausa com hover, foco, aba oculta, preferência de movimento reduzido e comando manual. Anterior/Próxima e interação direta pausam até Retomar. Sem JS, rolagem horizontal nativa e links permanecem.
- `/avaliacoes`: 56 textos estáticos; filtros progressivos e contagem anunciada. Compra de iPhone exige tags compra e iphone. Seminovo não tem correspondência no JSON atual, portanto apresenta estado vazio; não inferimos tags pelo modelo. Filtro preservado em ?tema=.
- AvaliarGoogle: rádios nativos de 1 a 5 e um único link estático. Nota não é armazenada nem enviada. Todas as escolhas levam ao mesmo destino, mesmo sem JS.

O link direto de avaliação continua vazio em loja.linkAvaliar. O fallback é a ficha já confirmada, com instrução para abrir Avaliações e Avaliar. Quando recebido o link do Perfil da Empresa, preencher apenas loja.ts; nenhum destino depende da nota.

Não há iframe, requisição inicial ao Google, cookies, coleta de notas, AggregateRating ou Review em JSON-LD. O JSON completo não faz parte dos módulos JS do navegador; filtros e política de movimento estão em módulos puros separados.

O carrossel foi integrado à home existente. A ordem final de todas as seções, a faixa de confiança e o widget na home serão compostos na Fase 5. O widget já está disponível em /avaliacoes.

````

## docs/PENDENCIAS.md

````markdown
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

````

## docs/QA_FASE_4.md

````markdown
# QA — Fase 4

## Medido

- Astro check: 48 arquivos, zero erros, avisos e hints.
- Vitest: 159 testes aprovados, 17 novos para dados, filtros, destino único e política de movimento.
- Build: 11 páginas HTML, índice de busca vazio, cinco rascunhos excluídos.
- verify:avaliacoes: 56 textos literais e nomes de exibição; 23 destaques corretos; cinco rádios; distribuição com notas baixas; sem iframe ou schema de avaliações.
- verify:catalogo: links internos e WhatsApp, H1, rascunhos, termos proibidos e orçamento JS aprovados.

| Página | JS gzip |
|---|---:|
| Home | 2196 bytes |
| /avaliacoes | 601 bytes |
| /catalogo e sete categorias | 2752 bytes por página |
| /404 | 0 bytes |

Home: 51731 bytes de HTML sem compressão. Avaliações: 71514 bytes de HTML sem compressão. A contagem JS soma scripts, imports e inline. Nenhuma dependência nova.

## Navegador

Verificados: 56 relatos iniciais; filtro seminovo com zero; Compra de iPhone com 13; query tema na URL; rádios 1 a 5; seta do teclado de 1 para 2; mesmo link Google em todas as escolhas; Pausar muda para Retomar; Próxima desloca trilho; Anterior por Enter retorna ao início. Foco magenta visível na captura docs/preview-fase4.jpg. Não foi publicada avaliação nem enviada mensagem.

Inspeção visual desktop na viewport disponível, sem certificação das larguras exatas 390/1440. Conteúdo e links sem JS foram verificados no build, mas não houve sessão de navegador com JS desativado. A regra de movimento reduzido e pausa por foco/hover foi testada como função pura; não se simulou preferência de sistema no navegador.

Lighthouse, axe, LCP, CLS e INP não foram medidos nesta fase. Não se declara aprovação WCAG completa com base nesses testes.

## Rodar

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
pnpm verify:catalogo
pnpm verify:avaliacoes
pnpm dev
```

## Conferir em 390 e 1440 px

1. Na home, navegue até avaliações; verifique largura, leitura integral e rolagem horizontal sem deslocar a página. Tab deve alcançar Pausar, Anterior, Próxima e links dos relatos; foco deve permanecer visível.
2. Pause, aguarde mais de oito segundos e confirme ausência de avanço. Repita com foco, hover e preferência de movimento reduzido. Sem JS, role manualmente.
3. Abra /avaliacoes; teste todos os temas, inclusive Seminovo vazio. Recarregue com ?tema=iphone. Use Todas para restaurar os 56.
4. No widget, percorra notas com setas, marque 1 e depois 5; ambas devem manter o mesmo destino Google. Nenhuma avaliação é enviada no site.
5. Desative JS: textos, selo, distribuição em details, rádios e link de avaliação continuam disponíveis.

## Medir Lighthouse

Terminal 1:

```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2, com Chrome instalado:

```sh
mkdir -p reports
pnpm dlx lighthouse http://localhost:4321/avaliacoes --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path=reports/avaliacoes --chrome-flags="--headless"
pnpm dlx lighthouse http://localhost:4321/ --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path=reports/home --chrome-flags="--headless"
```

Preview intencionalmente noindex pode afetar SEO no Lighthouse. INP de campo exige interações reais; pontuação de laboratório não substitui esses dados.

````

## package.json

````json
{
  "name": "smartlion",
  "version": "0.4.0",
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
    "@fontsource/outfit": "5.3.0",
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

## scripts/verificar-avaliacoes.mjs

````javascript
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const dados=JSON.parse(readFileSync('src/data/avaliacoes.json','utf8'));
const pagina=readFileSync('dist/avaliacoes/index.html','utf8');
const home=readFileSync('dist/index.html','utf8');
const escapar=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
assert.equal((pagina.match(/data-avaliacao=/g)||[]).length,dados.avaliacoes.length);
assert.equal((home.match(/data-avaliacao=/g)||[]).length,dados.avaliacoes.filter(a=>a.destaqueHome).length);
for(const a of dados.avaliacoes){
 assert(pagina.includes(`>${escapar(a.texto)}</p>`),`Texto modificado: ${a.id}`);
 assert(pagina.includes(`>${escapar(a.autorExibicao)}</strong>`),`Autor: ${a.id}`);
 assert.equal(home.includes(`data-avaliacao="${a.id}"`),a.destaqueHome);
}
for(const html of [pagina,home]){
 assert(!html.includes('AggregateRating')&&!html.includes('"@type":"Review"'));
 assert(!/<iframe/i.test(html));
 assert(!html.includes('negativaParaResponder'));
}
assert.equal((pagina.match(/name="nota-google"/g)||[]).length,5);
assert(pagina.includes('1 estrela: 2'));
console.log(`${dados.avaliacoes.length} textos literais; ${dados.avaliacoes.filter(a=>a.destaqueHome).length} destaques; 5 notas; sem iframe ou schema de avaliações.`);

````

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 4</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. Mapa e demais páginas entram nas próximas fases.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````

## src/components/Rodape.astro

````astro
---
import { loja, enderecoCompleto } from '../config/loja';
import { formatarPeriodos } from '../lib/horario';
import { linkWhatsApp, mensagemGeral } from '../config/whatsapp';
---
<footer id="contato"><div class="container footer-grid">
  <div><a class="wordmark" href="/">SMART LION</a><p>Tecnologia com procedência.<br/>Atendimento de perto, em {loja.endereco.cidade}.</p><a href={loja.instagram.url}>{loja.instagram.nome} ↗</a></div>
  <div><h2>Encontre a loja</h2><address>{enderecoCompleto}<br/>CEP {loja.endereco.cep}</address><a href={loja.googleMaps}>Como chegar pelo Google Maps ↗</a></div>
  <div><h2>Horários</h2><table><caption class="sr-only">Horário de atendimento</caption><tbody>{loja.horario.semana.map(h=><tr><th scope="row">{h.rotulo}</th><td>{formatarPeriodos(h.periodos)}</td></tr>)}</tbody></table><p class="small">Nos feriados, consulte o atendimento.</p></div>
  <div><h2>Vamos conversar?</h2><p><a href="/avaliacoes">Avaliações de clientes ↗</a></p><a href={linkWhatsApp(mensagemGeral)}>WhatsApp<br/><span class="number">{loja.whatsapp.exibicao}</span></a><p><a href={`tel:${loja.telefone.numero}`}>Telefone: {loja.telefone.exibicao}</a></p></div>
</div><div class="container footer-bottom"><span>{loja.nome} · {loja.endereco.cidade}/{loja.endereco.uf}</span><span>Desenvolvido por WAXLO</span></div></footer>
<style>footer{padding:64px 0 100px;border-top:1px solid var(--line)}.footer-grid{display:grid;grid-template-columns:1.1fr 1.2fr 1.25fr 1fr;gap:32px;font-size:.8rem;color:var(--muted)}h2{font:600 .85rem var(--font-heading);letter-spacing:0;color:white;margin-bottom:20px}.wordmark{font:600 1.35rem var(--font-heading);color:white;letter-spacing:.03em}p{margin:16px 0}address{font-style:normal;margin-bottom:16px}table{border-collapse:collapse;font-variant-numeric:tabular-nums}th{text-align:left;font-weight:400;padding:0 12px 8px 0;vertical-align:top}td{padding-bottom:8px}.small{font-size:.75rem}.number{font-size:1rem;color:white}.footer-bottom{display:flex;justify-content:space-between;border-top:1px solid var(--line);margin-top:48px;padding-top:24px;font-size:.7rem;color:var(--muted)}.sr-only{position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden}@media(max-width:1000px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:550px){.footer-grid{grid-template-columns:1fr;gap:28px}.footer-bottom{gap:20px;align-items:flex-start}.footer-bottom span:last-child{max-width:100px}}</style>

````

## src/components/avaliacoes/AvaliarGoogle.astro

````astro
---
import { destinoAvaliar } from '../../lib/avaliacoes';
import { loja } from '../../config/loja';
---
<section class="avaliar light" aria-labelledby="titulo-avaliar"><div class="container"><p class="eyebrow">Sua experiência importa</p><h2 id="titulo-avaliar">Comprou ou consertou<br/>com a gente? Dá a sua nota.</h2><p>Conte como foi seu atendimento. Todas as notas seguem para o Google.</p>
<fieldset><legend>Escolha de 1 a 5 estrelas</legend><div class="notas">{[1,2,3,4,5].map(n=><label><input type="radio" name="nota-google" value={n}/><span aria-hidden="true">★</span><span>{n}<span class="sr-only"> {n === 1 ? 'estrela' : 'estrelas'}</span></span></label>)}</div></fieldset>
<a class="button" href={destinoAvaliar()}>Confirmar minha nota no Google ↗</a><p class="aviso">A seleção aqui não publica nem envia sua nota. {!loja.linkAvaliar ? 'Na ficha do Google, abra Avaliações e escolha Avaliar para confirmar.' : 'Escolha novamente a nota e confirme no Google.'}</p></div></section>
<style>.avaliar{padding:64px 0}.eyebrow{color:#8c0747;margin-bottom:16px}h2{max-width:850px}.avaliar p:not(.eyebrow){margin-top:20px;max-width:650px}fieldset{border:0;margin:24px 0;padding:0}legend{font-size:.9rem;margin-bottom:12px}.notas{display:flex;flex-wrap:wrap;gap:12px}.notas label{display:flex;align-items:center;gap:7px;min-height:48px;border:1px solid #747579;padding:10px 12px;cursor:pointer;border-radius:var(--radius)}input{accent-color:#a50050;width:18px;height:18px}.notas label:has(input:checked){border-color:#a50050;background:#fbe3ef;color:#63002f}.notas label>span[aria-hidden]{font-size:1.3rem}.aviso{font-size:.8rem;color:#414246}.button{color:#111214}</style>

````

## src/components/avaliacoes/CarrosselAvaliacoes.astro

````astro
---
import { destaques } from '../../lib/avaliacoes';
import Depoimento from './Depoimento.astro';
import SeloGoogle from './SeloGoogle.astro';
---
<section class="avaliacoes-home" aria-labelledby="titulo-avaliacoes" data-carrossel>
<div class="container"><div class="cabecalho"><div><p class="eyebrow">Quem já passou pela loja</p><h2 id="titulo-avaliacoes">Confiança nas palavras<br/>de quem conhece.</h2></div><SeloGoogle/></div>
<div class="barra"><p>Depoimentos selecionados do Google.</p><a href="/avaliacoes">Ver todas as avaliações ↗</a></div>
<div class="controles" hidden><button type="button" data-anterior aria-controls="trilho-avaliacoes">← Anterior</button><button type="button" data-pausa aria-controls="trilho-avaliacoes">Pausar carrossel</button><button type="button" data-proximo aria-controls="trilho-avaliacoes">Próxima →</button></div>
<div class="trilho" id="trilho-avaliacoes" tabindex="0" role="region" aria-label="Depoimentos em destaque; role horizontalmente para ler" aria-roledescription="carrossel">{destaques.map(a=><Depoimento avaliacao={a}/>)}</div>
<p class="instrucao">Deslize para ler mais relatos. Cada experiência é individual.</p></div>
</section>
<script>import '../../scripts/carrossel-avaliacoes';</script>
<style>.avaliacoes-home{padding:72px 0;background:#191a1d;color:#fff}.cabecalho{display:flex;justify-content:space-between;gap:36px;align-items:center}.eyebrow{color:#ff78bc;margin-bottom:18px}.barra{display:flex;justify-content:space-between;gap:20px;margin:28px 0 18px;font-size:.85rem;color:#d2d3d5}.barra a{min-height:44px;display:flex;align-items:center}.controles{display:flex;gap:10px;justify-content:flex-end;margin-bottom:12px;flex-wrap:wrap}.controles button{border:1px solid #747579;color:#fff;background:transparent;min-height:44px;padding:8px 16px;border-radius:var(--radius)}.trilho{display:grid;grid-auto-flow:column;grid-auto-columns:min(380px,85%);gap:32px;overflow-x:auto;scroll-snap-type:x mandatory;scrollbar-color:#a5a6a8 #292a2d;padding-bottom:20px}.trilho :global(.depoimento){scroll-snap-align:start}.instrucao{font-size:.75rem;color:#bfc0c2;margin-top:14px}@media(max-width:800px){.cabecalho{display:block}.barra{display:block}.avaliacoes-home{padding:48px 0}.controles{justify-content:flex-start}.controles button{padding:8px 10px;font-size:.8rem}.trilho{gap:24px;grid-auto-columns:90%}}</style>

````

## src/components/avaliacoes/Depoimento.astro

````astro
---
import type { Avaliacao } from '../../lib/avaliacoes';
import { loja } from '../../config/loja';
import MarcaGoogle from './MarcaGoogle.astro';
interface Props { avaliacao: Avaliacao }
const { avaliacao: a } = Astro.props;
---
<article class="depoimento" data-avaliacao={a.id} data-tags={a.tags.join(' ')}>
  <header><strong>{a.autorExibicao}</strong><span class="estrelas" aria-label={`${a.nota} de 5 estrelas`}>{'★'.repeat(a.nota)}</span></header>
  <blockquote data-texto-avaliacao><p>{a.texto}</p></blockquote>
  <footer><a href={loja.googleMaps}><MarcaGoogle/>Avaliação no Google ↗</a><span>Publicada aproximadamente em <time datetime={a.mesAprox}>{a.mesAprox.split('-').reverse().join('/')}</time></span></footer>
</article>
<style>.depoimento{padding:28px 0;border-top:1px solid #747579;min-width:0}header{display:flex;justify-content:space-between;gap:18px;align-items:center}strong{font:600 1.1rem var(--font-heading)}.estrelas{letter-spacing:.06em;font-size:.85rem;white-space:nowrap}blockquote{margin:22px 0;font-size:1rem;line-height:1.75;overflow-wrap:anywhere}footer{display:grid;gap:8px;font-size:.8rem}footer>span{font-size:.72rem;opacity:.8}a{display:inline-flex;align-items:center;min-height:44px;width:fit-content}</style>

````

## src/components/avaliacoes/MarcaGoogle.astro

````astro
<span class="marca-google" aria-hidden="true">G</span>
<style>.marca-google{display:inline-block;font:bold 1.2rem Arial,sans-serif;margin-right:.4rem}</style>

````

## src/components/avaliacoes/SeloGoogle.astro

````astro
---
import { resumoAvaliacoes, atualizadoEm, coletadoEm } from '../../lib/avaliacoes';
import { loja } from '../../config/loja';
import MarcaGoogle from './MarcaGoogle.astro';
---
<a class="selo-google" href={loja.googleMaps}><span class="nota tabular">{resumoAvaliacoes.nota.toFixed(1).replace('.', ',')} <span aria-hidden="true">★</span><span class="sr-only">de 5 estrelas</span></span><span><strong><MarcaGoogle/>{resumoAvaliacoes.total} avaliações no Google</strong><small>Atualizado em <time datetime={coletadoEm}>{atualizadoEm}</time> ↗</small></span></a>
<style>.selo-google{display:flex;align-items:center;gap:22px;flex-wrap:wrap;padding:24px 0}.nota{font:600 3.1rem var(--font-heading);letter-spacing:-.04em}.nota span[aria-hidden]{font-size:1.8rem}strong{font-weight:400;font-size:.95rem}small{display:block;color:inherit;opacity:.8;font-size:.8rem;margin-top:4px}</style>

````

## src/data/avaliacoes.json

````json
{
  "_leiaMe": "Avaliações públicas do Google Maps coletadas em 28/10/2026, ordenadas por 'Mais recentes'. Textos literais (só emojis removidos). No site, exibir só o primeiro nome + inicial (campo autorExibicao), com selo 'Avaliação no Google' e link para a ficha. NÃO usar em JSON-LD (AggregateRating/Review autosservido é proibido pelo Google). Atualizar nota/total a cada 30–60 dias.",
  "fonte": {
    "plataforma": "Google Maps",
    "ficha": "Smart Lion - Assistência Técnica Especializada e Importados",
    "categoria": "Oficina de reparos de celulares",
    "urlFicha": "https://www.google.com/maps?cid=8801259008937640586",
    "cid": "0x94e01ffb37c77fa7:0x7a245a7003ef428a",
    "linkAvaliar": "PENDENTE: gerar no Perfil da Empresa (Pedir avaliações) — g.page/r/...",
    "coletadoEm": "2026-10-28",
    "coordenadas": [
      -27.8153637,
      -50.3290069
    ]
  },
  "resumo": {
    "nota": 5.0,
    "total": 766,
    "distribuicao": {
      "5": 763,
      "4": 1,
      "3": 0,
      "2": 0,
      "1": 2
    },
    "temasMaisCitados": {
      "produtos": 101,
      "atendente": 26,
      "vendedor": 25,
      "certeza": 24
    },
    "citacoesDestacadasPeloGoogle": [
      "A melhor loja da cidade, produtos de qualidade e ótimo atendimento",
      "Ótima proposta para negócio na compra de um novo celular.",
      "E o aparelho nem se fala né, top de linha com preço de intermediário premium."
    ]
  },
  "equipeCitada": {
    "Sabrina": "gerente/consultora (a mais citada)",
    "Amanda": "vendedora",
    "Fabi": "vendedora",
    "Vagner": "técnico/atendimento da assistência"
  },
  "avaliacoes": [
    {
      "id": "g-001",
      "autor": "Karolina Daboit",
      "autorExibicao": "Karolina D.",
      "nota": 5,
      "quando": "um mês atrás",
      "mesAprox": "2026-09",
      "texto": "Excelente atendimento! Levei meu Apple Watch para verificarem e fui muito bem atendida. Fizeram uma limpeza no aparelho e nem cobraram pelo serviço. Foram muito atenciosos, prestativos e honestos. Com certeza recomendo e voltarei quando precisar!",
      "tags": [
        "assistencia",
        "apple-watch",
        "honestidade"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-002",
      "autor": "Carolina Oliveira",
      "autorExibicao": "Carolina O.",
      "nota": 5,
      "quando": "um mês atrás",
      "mesAprox": "2026-09",
      "texto": "Excelente atendimento do início ao fim! Ótimos preços e ótimos produtos!",
      "tags": [
        "atendimento",
        "preco"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-003",
      "autor": "Mariane Vialli",
      "autorExibicao": "Mariane V.",
      "nota": 5,
      "quando": "2 meses atrás",
      "mesAprox": "2026-08",
      "texto": "Me tornei uma fã do trabalho da Smart Lion. Tive alguns problemas técnicos com meu celular no último mês e sempre que precisei eles forem extremamente solicitos, ágeis, dispostos a encontrar a melhor solução possível em todos os casos e sempre trazendo boas explicações técnicas para como resolver aquela questão. Recomendo muito a loja e agora espero voltar apenas para compras, mas sei que se algo acontecer vou poder contar com o bom trabalho deles!!",
      "tags": [
        "assistencia",
        "confianca"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-004",
      "autor": "Natália Detoni",
      "autorExibicao": "Natália D.",
      "nota": 5,
      "quando": "3 meses atrás",
      "mesAprox": "2026-07",
      "texto": "Levei meu AirPods pro conserto na Smart Lion e fui muito bem atendida. O serviço foi rápido, de qualidade e resolveu meu problema.",
      "tags": [
        "assistencia",
        "airpods",
        "rapidez"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-005",
      "autor": "São Chico São Chico",
      "autorExibicao": "São C.",
      "nota": 5,
      "quando": "3 meses atrás",
      "mesAprox": "2026-07",
      "texto": "Fomos muito bem atendidos, quem nós atendeu tem um conhecimento excepcional. Com certeza recomendamos",
      "tags": [
        "atendimento",
        "conhecimento"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-006",
      "autor": "Andréia Daniel de Liz",
      "autorExibicao": "Andréia L.",
      "nota": 5,
      "quando": "3 meses atrás",
      "mesAprox": "2026-07",
      "texto": "Sinceramente foi a melhor loja de assistencia técnica que encontrei até hoje. O atendimento foi maravilhoso, meu problema foi resolvido e o atendimento muito bom. Eu nunca conseguiria fazer o que foi feito e o profissionalismo impecável. Super recomendo e me fidelizou como cliente pra sempre.",
      "tags": [
        "assistencia"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-007",
      "autor": "Paola Zappelini de Carvalho",
      "autorExibicao": "Paola C.",
      "nota": 5,
      "quando": "3 meses atrás",
      "mesAprox": "2026-07",
      "texto": "Atendimento impecável, personalizado e de alto padrão. Os profissionais demonstram amplo conhecimento sobre os produtos, orientam com segurança e são extremamente atenciosos em cada etapa do atendimento. A experiência é diferenciada do início ao fim. Super satisfeita com a minha compra!!!",
      "tags": [
        "compra",
        "atendimento",
        "premium"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-008",
      "autor": "Keli Oliveira",
      "autorExibicao": "Keli O.",
      "nota": 5,
      "quando": "3 meses atrás",
      "mesAprox": "2026-07",
      "texto": "Atendimento muito bom, fui atendida pelo Vagner. Cotamos o aparelho no sábado e voltamos buscar hoje",
      "tags": [
        "compra"
      ],
      "equipeCitada": "Vagner",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-009",
      "autor": "Verônica Zanotto",
      "autorExibicao": "Verônica Z.",
      "nota": 5,
      "quando": "4 meses atrás",
      "mesAprox": "2026-06",
      "texto": "Eu tive uma ótima experiência com a loja. Desde o primeiro atendimento foram esclarecidos e atenciosos. Minha solicitação foi para assistência. Tive meu iPhone quebrado após um queda e eles trocaram a parte de trás do aparelho, e o serviço foi bem prestado. Recomendo muito.",
      "tags": [
        "assistencia",
        "iphone",
        "tampa-traseira"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-010",
      "autor": "Gorete Eliane de Oliveira",
      "autorExibicao": "Gorete O.",
      "nota": 5,
      "quando": "4 meses atrás",
      "mesAprox": "2026-06",
      "texto": "Comprei um iPhone 15 pra minha filha foi muito bem atendida vcs sao nota 10",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-011",
      "autor": "Paloma Mota",
      "autorExibicao": "Paloma M.",
      "nota": 5,
      "quando": "4 meses atrás",
      "mesAprox": "2026-06",
      "texto": "Atendimento impecável e preço justo",
      "tags": [
        "preco"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-012",
      "autor": "Rose Alves",
      "autorExibicao": "Rose A.",
      "nota": 5,
      "quando": "4 meses atrás",
      "mesAprox": "2026-06",
      "texto": "Minha indicação é que pode confiar. Adquiri um excelente Xioami novo. Atendimento maravilhoso pela Fabi, atenciosa. Recomendo.",
      "tags": [
        "compra",
        "xiaomi",
        "confianca"
      ],
      "equipeCitada": "Fabi",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-013",
      "autor": "Luan Vitor Borges",
      "autorExibicao": "Luan B.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Super atenciosos! Um ótimo lugar para realizar a compra de aparelhos! Diretamente de Cerro Negro - SC",
      "tags": [
        "compra",
        "regiao"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-014",
      "autor": "Crystian Aguida",
      "autorExibicao": "Crystian A.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Grato pelo ótimo atendimento carinho e atenção ! Vocês são excelentes no que fazem ! Iremos fechar muitos outros negócios ! Super indico ! Sérios e honestos parabéns . Smart Lion",
      "tags": [
        "honestidade"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-015",
      "autor": "Elisangela Pereira da Silva",
      "autorExibicao": "Elisangela S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Levei o telefone da minha filha para reparo e me entregaram no mesmo dia com o melhor tempo de garantia da cidade",
      "tags": [
        "assistencia",
        "mesmo-dia",
        "garantia"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-016",
      "autor": "Carmen Barbetta Narciso",
      "autorExibicao": "Carmen N.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Eu comprei um robô aspirador da XIAOMI X20 MAX. Ainda estou em processo de mais descobertas em tudo o que ele pode fazer… mas do que vi até agora, é muito bom Aspira e passa o pano muito bem. Na realidade achei melhor do que esperava… Mas o excelente mesmo foi o atendimento da SABRINA. Super disponível, com bom conhecimento, e muito cordial. Dispôs da sua tarde de sábado para nos orientar… e sempre atende nas dúvidas",
      "tags": [
        "compra",
        "xiaomi",
        "robo-aspirador"
      ],
      "equipeCitada": "Sabrina",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-017",
      "autor": "MATEUS SOUSA",
      "autorExibicao": "Mateus S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Muito bom,consegui pegar o meu celular no mesmo dia!",
      "tags": [
        "assistencia",
        "mesmo-dia"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-018",
      "autor": "Thalia Amorim",
      "autorExibicao": "Thalia A.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Deixar aqui meu agradecimento de coração pelo atendimento perfeito que recebi desde o primeiro contato que tive por telefone com a loja, Gerente Sabrina e vendedora Amanda ,que atendimento maravilhoso. Muito queridas , me atenderam em horário diferenciado eu cheia de dúvidas meu primeiro iPhone e elas muito atenciosas tanto no pessoal quanto por telefone , sem dúvidas o melhor atendimento, fico grata de coração",
      "tags": [
        "compra",
        "iphone",
        "primeiro-iphone"
      ],
      "equipeCitada": "Sabrina; Amanda",
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-019",
      "autor": "RYAN Dos santos",
      "autorExibicao": "Ryan S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Melhor assistência técnica de Lages!! Super indico, super rápidos e sinceros. O melhor tempo de garantia que tem em Lages.",
      "tags": [
        "assistencia",
        "garantia",
        "rapidez"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-020",
      "autor": "Gabriel De Jesus",
      "autorExibicao": "Gabriel J.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Excelente atendimento e ótima experiência de compra. A equipe foi muito atenciosa, tirou todas as minhas dúvidas e me ajudou a escolher o celular ideal para o que eu precisava. O aparelho veio em perfeito estado, original e com garantia. O preço foi justo e o atendimento foi rápido e profissional. Estou muito satisfeito com a compra e com certeza voltarei a comprar nessa loja. Recomendo a todos que procuram confiança, qualidade e bom atendimento.",
      "tags": [
        "compra",
        "original",
        "garantia",
        "preco"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-021",
      "autor": "Victor Emanuel",
      "autorExibicao": "Victor E.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Muito bom, loja climatizada, comprei um iPhone e veio tudo perfeito, o atendimento é muito bom e atencioso",
      "tags": [
        "compra",
        "iphone",
        "loja"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-022",
      "autor": "Isadora Xavier",
      "autorExibicao": "Isadora X.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Excelente atendimento, deixei o celular com um curto total, me entregaram em menos de 1 semana. Indico e recomendo!",
      "tags": [
        "assistencia",
        "placa"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-023",
      "autor": "cleci dalla bona",
      "autorExibicao": "Cleci B.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "O melhor atendimento, sempre me socorrem no que precisar … super indico !!!!",
      "tags": [
        "atendimento"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-024",
      "autor": "Cortina Companhia",
      "autorExibicao": "Cortina C.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "O atendimento das meninas é ótimo, além de você se sentir bem dentro da loja. Volto sempre e indico!",
      "tags": [
        "loja"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-025",
      "autor": "Alana Malbec",
      "autorExibicao": "Alana M.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Levei meu celular na Smart Lion depois de já ter passado por outra assistência e não ter tido uma boa experiência. Desde o primeiro contato senti muita confiança pela honestidade deles e principalmente pela garantia do serviço, que hoje em dia faz toda diferença. O atendimento foi impecável! Inclusive buscaram meu aparelho em Bom Retiro, o que já mostrou o cuidado e a preocupação com o cliente. O Vagner transmite muita segurança, explica tudo com paciência e dá pra ver que realmente se importa em entregar um trabalho bem feito. Eu tinha um prazo bem curto e eles cumpriram exatamente o combinado, sem enrolação. Serviço rápido, transparente e de extrema qualidade. Hoje posso dizer que confio de olhos fechados na Smart Lion. Recomendo demais!",
      "tags": [
        "assistencia",
        "garantia",
        "regiao",
        "busca-aparelho"
      ],
      "equipeCitada": "Vagner",
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-026",
      "autor": "Danielli Machado",
      "autorExibicao": "Danielli M.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Um atendimento impecável! Paciência incrível … esclareceram todas as minhas dúvidas, já é a segunda vez que compro com eles, produtos originais, agradeço muito e parabéns pelo atendimento mais uma vez",
      "tags": [
        "compra",
        "original",
        "recompra"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-027",
      "autor": "Alexandre Rafael dos Santos",
      "autorExibicao": "Alexandre S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Fui muito bem atendido pela Sabrina da loja de Lages ,dei um iPhone 16 pro meu filho e ela foi impecável no atendimento meu e do meu filho ,ela está de parabéns.",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": "Sabrina",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-028",
      "autor": "Elisangela Correa",
      "autorExibicao": "Elisangela C.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Excelente atendimento, meninas atenciosas, recebemos todo o suporte necessário,ambiente acolhedor, recomendamos.",
      "tags": [
        "loja"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-029",
      "autor": "xande",
      "autorExibicao": "Xande",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Super atenciosas, recebi um iphone 16 perfeito. Excelente atendimento",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-030",
      "autor": "Gabrielle Schemes",
      "autorExibicao": "Gabrielle S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "O atendimento é ótimo e eles entregaram na minha casa! Recomendo!",
      "tags": [
        "entrega"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-031",
      "autor": "Renata De Betio",
      "autorExibicao": "Renata B.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Excelente atendimento e ótimas condições! Valeu muito a pena, vim de outra cidade para comprar e fui muito bem atendida. Recomendo!",
      "tags": [
        "compra",
        "regiao",
        "condicoes"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-032",
      "autor": "Amanda Silva",
      "autorExibicao": "Amanda S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Gostei muito da experiência na loja, foram super atenciosas comigo e me ajudou a encontrar exatamente o que eu precisava, desde a parte da pré venda, quando na finalização... Comprei um iPhone 13. Concerta voltarei e indicarei o serviço e produtos.",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-033",
      "autor": "Maria elisabe Rosa",
      "autorExibicao": "Maria R.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Comprei meu iPhone na loja smart lion quero agradecer o atendimento as meninas são maravilhosas muito atenciosas principalmente a Sabrina que me vendeu meu próximo vai ser aqui novamente obrigada por tanto carinho",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": "Sabrina",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-034",
      "autor": "this 80s songs",
      "autorExibicao": "This S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Ótimo atendimento, Ótimos produtos controles ótimos, o preço do controle de xbox original foi de 450, recomendo muito",
      "tags": [
        "compra",
        "games"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-035",
      "autor": "Patricia Stefanes",
      "autorExibicao": "Patricia S.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Ganhei de presente um iPhone comprado na loja e adorei, ótimo aparelho, atendimento pós venda maravilhoso.",
      "tags": [
        "compra",
        "iphone",
        "pos-venda"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-036",
      "autor": "Juliara Costa",
      "autorExibicao": "Juliara C.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Sou de São Joaquim comprei iPhone 16 Pro prefeito supre indico atendimento excelente",
      "tags": [
        "compra",
        "iphone",
        "regiao"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-037",
      "autor": "Fernanda Eduarda",
      "autorExibicao": "Fernanda E.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Muito prestativos, atendimento excelente e me passaram muita segurança durante a execução do serviço.",
      "tags": [
        "assistencia"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-038",
      "autor": "Camila Vieira Lima",
      "autorExibicao": "Camila L.",
      "nota": 5,
      "quando": "5 meses atrás",
      "mesAprox": "2026-05",
      "texto": "Atendimento da Sabrina ótimo, educada, ágil e melhor preço que encontrei.",
      "tags": [
        "preco"
      ],
      "equipeCitada": "Sabrina",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-039",
      "autor": "Júnior Varela",
      "autorExibicao": "Júnior V.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Comprei meu iPhone 17 Pro Max aí e gostei muito A Sabrina e a Amanda foram super queridas comigo, explicaram tudo direitinho. Atendimento muito bom, me senti bem atendido mesmo Recomendo!",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": "Sabrina; Amanda",
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-040",
      "autor": "Pedro Silva",
      "autorExibicao": "Pedro S.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Fui à Smart Lion para reparar meu MacBook e meu iPad e saí genuinamente impressionado. Atendimento excelente, técnicos especializados. Os aparelhos retornaram impecáveis,como novos!! Um serviço que supera expectativas",
      "tags": [
        "assistencia",
        "macbook",
        "ipad"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-041",
      "autor": "joao gabriel ramos",
      "autorExibicao": "Joao R.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Sempre fui muito bem atendido, pessoal simpático e prestativo. Produtos e serviço de qualidade, recomendo muito. Fora o espaço que é lindo, Nota 10 !!",
      "tags": [
        "loja"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-042",
      "autor": "Laís",
      "autorExibicao": "Laís",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Loja especializada muito boa!! estava com problema na minha bateria e meu celular estava se desligando sozinho, agora esta com a saude 100% e o carregamento bem rapido e demora demais para descarregar, está como do jeito que eu comprei",
      "tags": [
        "assistencia",
        "bateria"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-043",
      "autor": "daiane Rodrigues rodrigues",
      "autorExibicao": "Daiane R.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Já comprei um iPhone na Smart Lion um tempo atrás e gostei tanto que voltei agora pra comprar outro pra mim e um pro meu filho. O atendimento continua incrível, AMOOO A VENDEDORA SABRINA pessoal super querido, explica tudo direitinho e ajuda a escolher sem pressão. Também só compro os acessórios da X-One com eles, porque realmente são muito bons e duram bastante, compensa mesmo. Com certeza é uma loja que eu confio e volto sempre ++",
      "tags": [
        "compra",
        "iphone",
        "recompra",
        "acessorios"
      ],
      "equipeCitada": "Sabrina",
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-044",
      "autor": "Árian Medeiros",
      "autorExibicao": "Árian M.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Ótima proposta para negócio na compra de um novo celular. Recomendo! Além de várias opções de capinhas para celular com garantia.",
      "tags": [
        "compra",
        "acessorios"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-045",
      "autor": "Paola Carvalho",
      "autorExibicao": "Paola C.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Atendimento ótimo e de excelência comprei meu iPhone 17 lilás.",
      "tags": [
        "compra",
        "iphone"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-046",
      "autor": "Erica mituti",
      "autorExibicao": "Erica M.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Fui super bem atendida!! Tava na dúvida entre iPhone e Xiaomi, mas as meninas me ajudaram e me explicaram as principais diferenças. Comprei o POCO X8 PRO e tô apaixonada já sai com tudo transferido e pronto. Atendimento impecável, recomendo muitooooo",
      "tags": [
        "compra",
        "xiaomi",
        "transferencia-dados"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-047",
      "autor": "Pamela Oliveira",
      "autorExibicao": "Pamela O.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Ótimo atendimento e preços justos! A Amanda foi incrível, super atenciosa e prestativa do início ao fim. Atendimento assim faz a gente querer voltar!",
      "tags": [
        "preco"
      ],
      "equipeCitada": "Amanda",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-048",
      "autor": "Wellinton Rafael",
      "autorExibicao": "Wellinton R.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Agradecido pelo atendimento. Estabelecimento com excelente ambiente, além de serviços e produtos com qualidade!",
      "tags": [
        "loja"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-049",
      "autor": "m l",
      "autorExibicao": "M L.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Atendimento excelente, com valores acessiveis e profissionais capacitados, voltaremos a fazer negócio muito breve!",
      "tags": [
        "preco"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-050",
      "autor": "Maiara Olineck",
      "autorExibicao": "Maiara O.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Atendentes super queridas no WhatsApp te dão todo suporte possível",
      "tags": [
        "whatsapp"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-051",
      "autor": "Carol Dias",
      "autorExibicao": "Carol D.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "Melhor atendimento da cidade, preços ótimos, comprei um 16 pro Max, e depois um 17 pro Max, ambos com excelente preço e pós venda, experiência perfeita",
      "tags": [
        "compra",
        "iphone",
        "recompra",
        "pos-venda"
      ],
      "equipeCitada": null,
      "destaqueHome": true,
      "plataforma": "Google"
    },
    {
      "id": "g-052",
      "autor": "victor kruchinschi",
      "autorExibicao": "Victor K.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "A melhor da AMURES, recomendo 100%",
      "tags": [
        "regiao"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-053",
      "autor": "Nicole Sousa",
      "autorExibicao": "Nicole S.",
      "nota": 5,
      "quando": "6 meses atrás",
      "mesAprox": "2026-04",
      "texto": "ótimo atendimento,estava a procura de produtos da Victoria Secrets,e encontrei de ótima qualidade,super indico",
      "tags": [
        "perfumaria"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-054",
      "autor": "Inacio Fornasari",
      "autorExibicao": "Inacio F.",
      "nota": 5,
      "quando": "7 meses atrás",
      "mesAprox": "2026-03",
      "texto": "Fiz a troca da tela de um S9 FE+, concerto rápido e vem sucedido, com atualizações da loja sempre que precisava.",
      "tags": [
        "assistencia",
        "tela",
        "samsung"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-055",
      "autor": "Eddy Souza",
      "autorExibicao": "Eddy S.",
      "nota": 5,
      "quando": "7 meses atrás",
      "mesAprox": "2026-03",
      "texto": "Empresa excepcional. Meus smartphones e tablets — tanto de uso pessoal quanto profissional — são sempre muito bem cuidados. A Sabrina, como de costume, presta um atendimento impecável e demonstra grande atenção aos equipamentos. Recomendo com total confiança.",
      "tags": [
        "assistencia",
        "empresa"
      ],
      "equipeCitada": "Sabrina",
      "destaqueHome": false,
      "plataforma": "Google"
    },
    {
      "id": "g-056",
      "autor": "Camila Bordin",
      "autorExibicao": "Camila B.",
      "nota": 5,
      "quando": "7 meses atrás",
      "mesAprox": "2026-03",
      "texto": "Atendimento impecável. As meninas me auxiliaram em como usar o iPad e acessórios tbm. Tudo que precisei encontrei lá com ótimas condições.",
      "tags": [
        "compra",
        "ipad",
        "orientacao"
      ],
      "equipeCitada": null,
      "destaqueHome": false,
      "plataforma": "Google"
    }
  ],
  "negativaParaResponder": {
    "autor": "Dionatan Faro",
    "nota": 1,
    "quando": "5 meses atrás",
    "mesAprox": "2026-05",
    "tema": "troca de bateria de iPhone; diz que o aparelho segue aquecendo e travando perto de 50% e que a saúde da bateria caiu para 86% em dois meses",
    "respostaDoProprietario": false,
    "recomendacao": "Responder em público, com calma, oferecendo avaliação técnica gratuita. Não exibir no site. É a resposta que vende confiança para quem lê o Google."
  }
}
````

## src/lib/avaliacoes.ts

````typescript
import dados from '../data/avaliacoes.json';
import { loja } from '../config/loja';
export const avaliacoes = dados.avaliacoes;
export type Avaliacao = typeof avaliacoes[number];
export const destaques = avaliacoes.filter(a => a.destaqueHome);
export const resumoAvaliacoes = dados.resumo;
export const coletadoEm = dados.fonte.coletadoEm;
export const atualizadoEm = new Intl.DateTimeFormat('pt-BR', { month: 'short', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${coletadoEm}T12:00:00Z`)).replace('. de ', '/').replace(' de ', '/');
export { filtrosAvaliacoes, correspondeTema } from './temas-avaliacoes';
// A escolha da nota nunca altera o destino. Não transmitimos nem armazenamos notas.
export function destinoAvaliar(): string { return loja.linkAvaliar || loja.googleMaps; }

````

## src/lib/movimento-avaliacoes.ts

````typescript
export function podeAvancarAutomaticamente(estado: { pausado: boolean; reduzido: boolean; hover: boolean; foco: boolean; oculto: boolean; visivel: boolean }): boolean {
  return !estado.pausado && !estado.reduzido && !estado.hover && !estado.foco && !estado.oculto && estado.visivel;
}

````

## src/lib/temas-avaliacoes.ts

````typescript
export const filtrosAvaliacoes = [
  { id: 'todas', nome: 'Todas' },
  { id: 'iphone', nome: 'Compra de iPhone' },
  { id: 'assistencia', nome: 'Assistência' },
  { id: 'seminovo', nome: 'Seminovo' },
  { id: 'atendimento', nome: 'Atendimento' },
  { id: 'regiao', nome: 'Outras cidades' },
] as const;
export function correspondeTema(tags: readonly string[], tema: string): boolean {
  if (tema === 'todas') return true;
  if (tema === 'iphone') return tags.includes('compra') && tags.includes('iphone');
  return filtrosAvaliacoes.some(f => f.id === tema) && tags.includes(tema);
}

````

## src/pages/avaliacoes.astro

````astro
---
import Layout from '../layouts/LayoutBase.astro';
import { avaliacoes, filtrosAvaliacoes, resumoAvaliacoes } from '../lib/avaliacoes';
import { loja, enderecoCompleto } from '../config/loja';
import SeloGoogle from '../components/avaliacoes/SeloGoogle.astro';
import Depoimento from '../components/avaliacoes/Depoimento.astro';
import AvaliarGoogle from '../components/avaliacoes/AvaliarGoogle.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
---
<Layout title="Avaliações da Smart Lion em Lages" description="Leia relatos de clientes da Smart Lion em Lages sobre compras e assistência técnica. Veja a nota no Google e conte sua experiência.">
<section class="intro-avaliacoes container"><p class="eyebrow">Experiências de quem conhece</p><h1>Avaliações da<br/>Smart Lion em Lages.</h1><p>Veja relatos sobre compras e assistência técnica na {loja.nome}, na {enderecoCompleto}. Para consultar um aparelho ou falar sobre um reparo, converse com nossa equipe pelo WhatsApp.</p><BotaoWhatsApp/><SeloGoogle/>
<details><summary>Distribuição das {resumoAvaliacoes.total} avaliações no Google</summary><ul>{[5,4,3,2,1].map(n=><li>{n} {n === 1 ? 'estrela' : 'estrelas'}: {resumoAvaliacoes.distribuicao[String(n) as keyof typeof resumoAvaliacoes.distribuicao]}</li>)}</ul></details></section>
<section class="relatos light" aria-labelledby="titulo-relatos"><div class="container"><h2 id="titulo-relatos">Relatos de clientes.</h2><p class="contexto">Esta seleção reúne {avaliacoes.length} depoimentos coletados do Google em outubro de 2026. Para consultar o conjunto completo e as avaliações mais recentes, <a href={loja.googleMaps}>acesse a ficha no Google ↗</a>. Preços, prazos e experiências citados são relatos individuais da época, não condições atuais da loja.</p>
<div class="filtros" role="group" aria-label="Filtrar avaliações por tema" hidden>{filtrosAvaliacoes.map(f=><button type="button" data-tema={f.id} aria-pressed={f.id === 'todas'}>{f.nome}</button>)}</div><noscript><p>Todos os depoimentos estão abaixo. Os filtros por tema ficam disponíveis com JavaScript.</p></noscript>
<p id="contagem-avaliacoes" role="status" aria-live="polite">{avaliacoes.length} depoimentos</p><div class="lista-avaliacoes">{avaliacoes.map(a=><Depoimento avaliacao={a}/>)}</div><p data-sem-avaliacoes hidden>Nenhum depoimento com este tema no arquivo disponível. <a href={loja.googleMaps}>Veja as avaliações no Google ↗</a>.</p></div></section>
<AvaliarGoogle/>
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
import { categorias } from '../config/categorias';
---
<Layout title="iPhone em Lages com garantia | Smart Lion" description="iPhone, Apple e importados na Smart Lion, no Centro de Lages. Consulte modelos e condições pelo WhatsApp.">
<section class="hero" aria-labelledby="titulo">
  <Picture src={fotoLoja} formats={['avif','webp']} widths={[480,800,1280,1920]} sizes="100vw" alt="Interior da Smart Lion, com bancada de madeira, notebooks e prateleiras iluminadas" loading="eager" fetchpriority="high" class="hero-photo"/>
  <div class="shade"></div><div class="container hero-content"><p class="eyebrow"><span></span>Loja física no Centro de {loja.endereco.cidade}</p><h1 id="titulo">iPhone, Apple<br/>e importados<br/><span>com garantia<br class="mobile-break"/> em Lages.</span></h1><p class="intro">Novos e seminovos com procedência na {loja.endereco.rua}, {loja.endereco.numero}. Fale com a nossa equipe pelo WhatsApp e encontre seu próximo aparelho.</p><div class="actions"><a class="button button-light" href="/catalogo">Explorar catálogo <span aria-hidden="true">↗</span></a><BotaoWhatsApp/></div><StatusHorario/><div class="hero-foot"><span>VENDA · MANUTENÇÃO · TREINAMENTO</span><a href="#contato">Conheça nossos horários <span aria-hidden="true">↓</span></a></div></div>
</section>
<CarrosselAvaliacoes/>
<section class="directory light" id="categorias" aria-labelledby="categorias-titulo"><div class="container"><div class="directory-heading"><div><p class="eyebrow">Encontre o que combina com você</p><h2 id="categorias-titulo">Seu próximo passo.</h2></div><p>Escolha uma categoria.<br/>Converse com quem entende.</p></div>
<div class="category-list">{categorias.map((c,i)=><article id={c.slug} data-category={`${c.nome} ${c.detalhe} ${c.slug === 'ipad-mac-watch' ? 'tablet tablets macbook airpods' : ''}`}><span class="index tabular" aria-hidden="true">0{i+1}</span><div><h3>{c.nome}</h3><p>{c.detalhe}</p></div><a class="category-contact" href={`/catalogo/${c.slug}`} aria-label={`Ver categoria ${c.nome}`}>Ver categoria <span aria-hidden="true">↗</span></a></article>)}</div>

</div></section>
<Vitrine/>
</Layout>

<style>.hero{position:relative;isolation:isolate;min-height:690px;overflow:hidden}.hero :global(.hero-photo){position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-2}.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,18,20,.96) 0%,rgba(17,18,20,.82) 33%,rgba(17,18,20,.18) 80%);z-index:-1}.hero-content{padding-top:65px;padding-bottom:30px}.hero .eyebrow{display:flex;align-items:center;gap:10px;color:#e9e9e9}.eyebrow span{width:7px;height:7px;background:var(--accent)}h1{margin:26px 0 24px;max-width:820px}h1 span{color:#d6d4cf}.intro{max-width:470px;color:#ddd;font-size:.98rem}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.hero-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ffffff30;margin-top:50px;padding-top:22px;font-size:.7rem;letter-spacing:.1em}.hero-foot a{letter-spacing:0;color:#dedede}.mobile-break{display:none}.directory{padding:80px 0 90px}.directory-heading{display:flex;justify-content:space-between;align-items:end;gap:24px}.directory-heading .eyebrow{color:#8c0747;margin-bottom:12px}.directory-heading>p{color:var(--text-dark);font-size:.9rem}.category-search{display:grid;grid-template-columns:auto minmax(160px,400px) 1fr;align-items:center;gap:16px;margin:38px 0 12px}.category-search label{font-size:.85rem}.category-search input{border:1px solid #858585;border-radius:var(--radius);padding:12px;background:transparent;width:100%;color:var(--ink)}#resultado-busca{font-size:.8rem}.category-list article{display:flex;align-items:center;gap:24px;border-bottom:1px solid #c8c8c4;padding:24px 0;scroll-margin-top:160px}.index{color:#666;font-size:.75rem;width:30px}h3{font-size:clamp(1.4rem,2.5vw,2rem)}article p{font-size:.8rem;color:var(--text-dark);margin-top:6px}.category-contact{margin-left:auto;min-height:44px;display:flex;align-items:center;gap:25px;font-size:.85rem}.category-contact span{font-size:1.4rem}.no-js{margin-top:24px}@media(min-width:1500px){.hero{min-height:760px}.hero-content{padding-top:85px}}@media(max-width:700px){.hero{min-height:720px}.hero-content{padding-top:42px}.hero :global(.hero-photo){object-position:63% center}.shade{background:linear-gradient(90deg,#111214f5,#1112149c),linear-gradient(0deg,#111214,transparent 50%)}h1{margin-top:24px;line-height:1.07}.mobile-break{display:block}.intro{font-size:.92rem;max-width:330px}.actions{display:grid;max-width:340px;gap:10px}.hero-foot{margin-top:38px;align-items:flex-start;gap:14px;flex-direction:column;font-size:.65rem}.directory{padding:52px 0}.directory-heading{display:block}.directory-heading>p{margin-top:20px}.category-search{display:block;margin-top:28px}.category-search label{display:block;margin-bottom:8px}#resultado-busca{min-height:24px;margin-top:8px}.category-list article{gap:10px}.index{width:20px}.category-contact{font-size:.75rem;gap:8px}article p{max-width:170px}}
</style>

````

## src/scripts/carrossel-avaliacoes.ts

````typescript
// This module imports only the pure motion policy; review data stays server-side.
import { podeAvancarAutomaticamente } from '../lib/movimento-avaliacoes';
for (const root of document.querySelectorAll<HTMLElement>('[data-carrossel]')) {
  const trilho = root.querySelector<HTMLElement>('.trilho')!;
  const pausa = root.querySelector<HTMLButtonElement>('[data-pausa]')!;
  const media = matchMedia('(prefers-reduced-motion: reduce)');
  let pausado = false, hover = false, visivel = false;
  root.querySelector<HTMLElement>('.controles')!.hidden = false;
  const atualizar = () => { pausa.textContent = media.matches ? 'Movimento automático desativado' : pausado ? 'Retomar carrossel' : 'Pausar carrossel'; pausa.disabled = media.matches; };
  function avancar(direcao: number) {
    const passo = trilho.firstElementChild!.getBoundingClientRect().width + parseFloat(getComputedStyle(trilho).columnGap);
    const fim = trilho.scrollWidth - trilho.clientWidth;
    const destino = direcao > 0 && trilho.scrollLeft >= fim - 2 ? 0 : direcao < 0 && trilho.scrollLeft <= 2 ? fim : trilho.scrollLeft + passo * direcao;
    trilho.scrollTo({ left: destino, behavior: media.matches ? 'instant' : 'smooth' });
  }
  pausa.addEventListener('click', () => { pausado = !pausado; atualizar(); });
  for (const [seletor, direcao] of [['[data-anterior]', -1], ['[data-proximo]', 1]] as const) root.querySelector(seletor)!.addEventListener('click', () => { pausado = true; atualizar(); avancar(direcao); });
  root.addEventListener('pointerenter', () => { hover = true; });
  root.addEventListener('pointerleave', () => { hover = false; });
  trilho.addEventListener('pointerdown', () => { pausado = true; atualizar(); });
  trilho.addEventListener('keydown', () => { pausado = true; atualizar(); });
  const observer = new IntersectionObserver(([entry]) => { visivel = entry.isIntersecting; }, { threshold: .2 });
  observer.observe(root);
  media.addEventListener('change', atualizar); atualizar();
  const timer = window.setInterval(() => {
    if (podeAvancarAutomaticamente({ pausado, reduzido: media.matches, hover, foco: root.contains(document.activeElement), oculto: document.hidden, visivel })) avancar(1);
  }, 8000);
  window.addEventListener('pagehide', () => { clearInterval(timer); observer.disconnect(); }, { once: true });
}

````

## src/scripts/filtros-avaliacoes.ts

````typescript
import { correspondeTema } from '../lib/temas-avaliacoes';
const botoes = [...document.querySelectorAll<HTMLButtonElement>('[data-tema]')];
const itens = [...document.querySelectorAll<HTMLElement>('.lista-avaliacoes [data-avaliacao]')];
const grupo = document.querySelector<HTMLElement>('.filtros');
if (grupo) {
  grupo.hidden = false;
  function aplicar(tema: string) {
    let total = 0;
    for (const item of itens) { item.hidden = !correspondeTema(item.dataset.tags!.split(' '), tema); if (!item.hidden) total++; }
    for (const botao of botoes) botao.setAttribute('aria-pressed', String(botao.dataset.tema === tema));
    document.querySelector('#contagem-avaliacoes')!.textContent = `${total} ${total === 1 ? 'depoimento' : 'depoimentos'}`;
    document.querySelector<HTMLElement>('[data-sem-avaliacoes]')!.hidden = total > 0;
  }
  function lerURL() { const t = new URL(location.href).searchParams.get('tema') || 'todas'; aplicar(botoes.some(b => b.dataset.tema === t) ? t : 'todas'); }
  for (const b of botoes) b.addEventListener('click', () => { const t = b.dataset.tema!; aplicar(t); const url = new URL(location.href); if (t === 'todas') url.searchParams.delete('tema'); else url.searchParams.set('tema', t); history.replaceState(null, '', url); });
  window.addEventListener('popstate', lerURL); lerURL();
}

````

## tests/avaliacoes.test.ts

````typescript
import { describe, expect, it } from 'vitest';
import { avaliacoes, destaques, resumoAvaliacoes, destinoAvaliar, atualizadoEm } from '../src/lib/avaliacoes';
import { correspondeTema } from '../src/lib/temas-avaliacoes';
import { podeAvancarAutomaticamente } from '../src/lib/movimento-avaliacoes';
import { loja } from '../src/config/loja';
import { readFileSync } from 'node:fs';

describe('integridade da fonte', () => {
  it('preserva os 56 depoimentos e os destaques originais', () => {
    expect(avaliacoes).toHaveLength(56);
    expect(destaques).toEqual(avaliacoes.filter(a => a.destaqueHome));
    expect(new Set(avaliacoes.map(a => a.id)).size).toBe(56);
  });
  it('mantém a distribuição completa, incluindo notas baixas', () => {
    expect(Object.values(resumoAvaliacoes.distribuicao).reduce((a,b) => a+b,0)).toBe(resumoAvaliacoes.total);
    expect(resumoAvaliacoes.distribuicao['1']).toBe(2);
    expect(resumoAvaliacoes.distribuicao['4']).toBe(1);
    expect(atualizadoEm).toBe('out/2026');
  });
  it('renderiza o campo abreviado e o texto original sem substituições', () => {
    const fonte = readFileSync('src/components/avaliacoes/Depoimento.astro', 'utf8');
    expect(fonte).toContain('{a.autorExibicao}');
    expect(fonte).toContain('{a.texto}');
    expect(fonte).not.toContain('{a.autor}');
    expect(fonte).not.toContain('set:html');
  });
});
describe('filtros por tema', () => {
  it('todas não remove avaliações por nota ou tema', () => expect(avaliacoes.filter(a => correspondeTema(a.tags,'todas'))).toHaveLength(56));
  it('compra de iPhone não inclui assistência de iPhone', () => {
    expect(correspondeTema(['assistencia','iphone'],'iphone')).toBe(false);
    expect(correspondeTema(['compra','iphone'],'iphone')).toBe(true);
  });
  it('não inventa relatos sobre seminovos', () => expect(avaliacoes.filter(a => correspondeTema(a.tags,'seminovo'))).toHaveLength(0));
  it('filtra região pelo marcador da fonte', () => expect(correspondeTema(['regiao'],'regiao')).toBe(true));
  it('rejeita tema desconhecido', () => expect(correspondeTema(['inventado'],'inventado')).toBe(false));
});
describe('widget sem seleção de destinatário por nota', () => {
  it('usa o link confirmado ou a ficha da loja', () => expect(destinoAvaliar()).toBe(loja.linkAvaliar || loja.googleMaps));
  it('mantém um link estático para todas as cinco opções, sem envio nem coleta', () => {
    const fonte = readFileSync('src/components/avaliacoes/AvaliarGoogle.astro','utf8');
    expect(fonte).toContain('[1,2,3,4,5]');
    expect(fonte.match(/href=/g)).toHaveLength(1);
    expect(fonte).toContain('href={destinoAvaliar()}');
    expect(fonte).not.toMatch(/<script|<form|fetch\(|localStorage/);
  });
});
describe('pausa do carrossel', () => {
  const estado = { pausado:false, reduzido:false, hover:false, foco:false, oculto:false, visivel:true };
  it('só avança quando visível e sem interrupção', () => expect(podeAvancarAutomaticamente(estado)).toBe(true));
  for (const motivo of ['pausado','reduzido','hover','foco','oculto'] as const) it(`não avança com ${motivo}`, () => expect(podeAvancarAutomaticamente({...estado,[motivo]:true})).toBe(false));
  it('não avança fora da tela', () => expect(podeAvancarAutomaticamente({...estado,visivel:false})).toBe(false));
});

````