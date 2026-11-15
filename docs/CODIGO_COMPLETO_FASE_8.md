# Código completo — Fase 8

## Árvore dos arquivos novos ou alterados

```text
README.md
docs/PENDENCIAS.md
docs/QA_FASE_8.md
docs/SEO_GEO_LGPD.md
docs/preview-fase8.jpg
package.json
scripts/verificar-catalogo.mjs
scripts/verificar-seo.mjs
src/components/Consentimento.astro
src/components/PendenciasDev.astro
src/components/Rodape.astro
src/layouts/LayoutBase.astro
src/lib/consentimento.ts
src/lib/seo.ts
src/pages/llms.txt.ts
src/pages/privacidade.astro
src/pages/produto/[slug].astro
src/pages/robots.txt.ts
src/pages/sitemap.xml.ts
src/scripts/consentimento.ts
src/scripts/mapa.ts
tests/seo.test.ts
```

## README.md

````md
# Smart Lion — Fase 8

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

## Home

Composição da Fase 5 em `src/components/home/`, seguindo §8. Mapa só é solicitado após consentimento específico; recusar mantém endereço e rotas. Consulte docs/HOME.md e docs/QA_FASE_5.md.

## Páginas institucionais

Assistência e seis serviços, curso, sobre, como chegar, FAQ e privacidade disponíveis. Formulário de orçamento apenas prepara a mensagem do WhatsApp. Consulte docs/PAGINAS.md e docs/QA_FASE_6.md.

## Dicas

`/dicas` e três artigos-modelo em Markdown. Rascunhos visíveis apenas em desenvolvimento. Consulte docs/DICAS.md, docs/QA_FASE_7.md e docs/CODIGO_COMPLETO_FASE_7.md.

## SEO/GEO e privacidade

Consulte docs/SEO_GEO_LGPD.md e docs/QA_FASE_8.md. Depois do build, execute `node scripts/verificar-seo.mjs`. Código completo da fase em docs/CODIGO_COMPLETO_FASE_8.md.

````

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

````

## docs/QA_FASE_8.md

````md
# QA — Fase 8

- Astro check: 88 arquivos, zero erros/avisos/hints.
- Vitest: 186 testes passando em sete arquivos.
- Build: 24 páginas HTML, sitemap, robots e llms.txt.
- Verificação SEO: 24 canônicas únicas, Open Graph com imagem existente, JSON-LD parseável, nenhum iframe no HTML inicial, ausência de Review/AggregateRating/ofertas artificiais.
- Sitemap: 23 URLs, sem rascunhos ou 404. Cinco produtos e três artigos continuam fora da produção.
- Navegador: aceite não carregou iframe (0); clique no mapa criou 1; recusa removeu (0). Reabertura das preferências funcionou, com foco no primeiro botão e retorno ao botão do rodapé após decisão.
- Imagem registrada em preview-fase8.jpg. Largura observada da captura: 1348px; não corresponde às validações finais de 390 e 1440px.

## Orçamento medido

JS gzip por página, incluindo dependências importadas e excluindo JSON-LD (dados, não código executável):

| Rotas | Bytes gzip |
| --- | ---: |
| Home | 7397 |
| Catálogo e suas sete categorias | 3687 |
| Assistência e seis serviços | 2400 |
| Avaliações | 1123 |
| Como chegar | 1024 |
| Dicas, FAQ, privacidade, sobre, curso e 404 | 522 |

Lighthouse, axe, LCP, CLS, INP e auditoria completa de teclado não medidos nesta fase. A Fase 9 trata do QA completo. Não são declarados como aprovados.

## Comandos

```sh
cd /workspace/sites/smartlion
pnpm check
pnpm test
pnpm build
node scripts/verificar-catalogo.mjs
node scripts/verificar-dicas.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

Em 390px e 1440px, conferir botões de consentimento sem corte, mesmo peso visual, foco por Tab, reabertura no rodapé, WhatsApp visível e ausência de mapa antes do clique. Recusar deve manter contato e rota disponíveis. Desabilitar JS e conferir navegação, conteúdo e horários. Conferir canônica e JSON-LD no código-fonte, além de /robots.txt, /sitemap.xml e /llms.txt.

Para Lighthouse (Chrome instalado), iniciar `pnpm preview --port 4321` e, em outro terminal:

```sh
cd /workspace/sites/smartlion
pnpm dlx lighthouse http://localhost:4321/ --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-fase8.html --chrome-flags="--headless"
```

Repetir para cada URL do sitemap na Fase 9. Preview noindex pode reduzir a nota SEO; INP real depende de dados de uso após lançamento.

````

## docs/SEO_GEO_LGPD.md

````md
# SEO/GEO e privacidade — Fase 8

## Implementação

Metas por página preservadas; canônica sem query/hash e Open Graph com foto real da loja em JPEG de 1200px, gerada pelo Astro. JSON-LD centralizado em src/lib/seo.ts: ElectronicsStore, Service nas sete rotas da assistência, FAQPage usando exatamente src/data/perguntas.ts, BreadcrumbList e Product por produto. Product não contém ofertas, preço ou avaliação inventados. Produtos e artigos rascunho seguem excluídos da produção.

ElectronicsStore foi escolhido por representar o catálogo amplo de eletrônicos. MobilePhoneStore também existe, mas sua definição limita o foco a celulares e acessórios. Fontes oficiais consultadas em 29/10/2026:
- https://schema.org/ElectronicsStore
- https://schema.org/MobilePhoneStore
- https://schema.org/Product

O endereço, telefone, coordenadas, Instagram e horários estruturados vêm de loja.ts; almoço tem dois intervalos. areaServed usa apenas Lages, sem inventar municípios da região. Catálogos de categorias não afirmam disponibilidade de produtos. Não há AggregateRating ou Review. Não se promete rich result nem citação por IA.

Sitemap gera 23 URLs publicáveis, sem 404, busca JSON, parâmetros ou rascunhos. llms.txt é gerado da configuração, com categorias, garantia, endereço, contatos e horários. Não há datas lastmod artificiais.

## Indexação

SITE_URL define a origem da implantação. PUBLIC_INDEXABLE=false é o padrão; VERCEL_ENV=preview sempre bloqueia indexação, mesmo com PUBLIC_INDEXABLE=true. Em outras plataformas de preview, mantenha PUBLIC_INDEXABLE=false. Robots de preview bloqueia rastreamento e HTML tem noindex. Autenticação privada é a barreira de acesso; robots não é controle de segurança.

Somente no lançamento aprovado: configurar SITE_URL com o domínio definitivo e PUBLIC_INDEXABLE=true em produção, gerar novo build, verificar canônicas/robots/sitemap e submeter sitemap no Search Console. Não alterar DNS nesta fase.

## Consentimento

Banner no fluxo da página, sem sobrepor WhatsApp ou sequestrar scroll. Aceitar e Recusar têm a mesma classe, tamanho, contraste e peso visual. Nenhum mapa carrega automaticamente; o clique explícito no botão do mapa autoriza e solicita o recurso. Recusar remove iframes presentes. Preferências de privacidade no rodapé permite alterar a decisão.

A única persistência adicionada é sessionStorage, chave smartlion-mapa-v1, escolha aceito/recusado, duração da sessão da aba. Se bloqueado, usa memória da página. Não há identificadores de usuário, analytics ou publicidade. Sem JS, não há mapa nem controles inoperantes, e endereço/rotas/WhatsApp continuam em HTML. Recusar não apaga cookies já criados pelo Google; isso está explicado na política.

Referência: guia de cookies da ANPD, sem afirmar que o banner sozinho garante conformidade integral:
https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais

PENDENTE: controlador/responsável, contato específico, retenção, operadores e bases legais do atendimento, já com campos vazios na config e aviso DEV. Validar com a loja antes do lançamento público.

````

## package.json

````json
{
  "name": "smartlion",
  "version": "0.8.0",
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

## scripts/verificar-catalogo.mjs

````mjs
import { readFile, readdir, stat } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { resolve, relative, dirname } from 'node:path';
import { gzipSync } from 'node:zlib';
import assert from 'node:assert/strict';
const raiz=resolve('dist');
async function arquivos(pasta){const todos=await readdir(pasta,{withFileTypes:true});return (await Promise.all(todos.map(e=>e.isDirectory()?arquivos(resolve(pasta,e.name)):[resolve(pasta,e.name)]))).flat()}
const saida=await arquivos(raiz), html=saida.filter(f=>f.endsWith('.html'));
const indice=JSON.parse(await readFile(resolve(raiz,'busca.json'),'utf8'));
const produtos=await Promise.all((await readdir('src/content/produtos')).filter(n=>n.endsWith('.json')).map(async n=>JSON.parse(await readFile(`src/content/produtos/${n}`,'utf8'))));
for(const p of produtos){
 const publicado=p.rascunho===false&&p.confirmado===true&&Boolean(p.confirmadoEm);
 assert.equal(indice.some(i=>i.slug===p.slug),publicado,`Índice incorreto: ${p.slug}`);
 assert.equal(existsSync(resolve(raiz,`produto/${p.slug}/index.html`)),publicado,`Rota incorreta: ${p.slug}`);
 if(!publicado)for(const f of saida.filter(x=>/\.(html|js|json)$/.test(x)))assert(!(await readFile(f,'utf8')).includes(p.slug),`Rascunho vazou: ${relative(raiz,f)}`);
}
const tabela=[];
for(const f of html){
 const fonte=await readFile(f,'utf8');
 assert.equal((fonte.match(/<h1(?:\s|>)/g)||[]).length,1,`H1: ${f}`);
 assert(!fonte.includes('Desenvolvimento · Fase'),`Aviso DEV em produção: ${f}`);
 for(const proibido of ['Assistência Autorizada Apple','oficial Apple','garantia Apple','preço garantido','as melhores taxas','número 1'])assert(!fonte.toLowerCase().includes(proibido.toLowerCase()),`Texto proibido: ${f}`);
 for(const [,href] of fonte.matchAll(/href="([^"]+)"/g)){
  const dec=href.replaceAll('&amp;','&');
  if(dec.startsWith('https://wa.me/')){
   const u=new URL(dec);assert.equal(u.pathname,'/5549999268930');assert(u.searchParams.get('text'));assert.equal([...u.searchParams.keys()].length,1);
  }
  if(dec.startsWith('/')&&!dec.startsWith('//')){
   const caminho=dec.split(/[?#]/)[0];
   assert(existsSync(resolve(raiz,`.${caminho}`))||existsSync(resolve(raiz,`.${caminho}/index.html`)),`Link interno sem destino: ${dec} em ${f}`);
  }
 }
 const vistos=new Set();let bytes=0;
 async function lerJS(caminho){
  if(vistos.has(caminho))return;vistos.add(caminho);
  const s=await readFile(caminho,'utf8');bytes+=gzipSync(s).length;
  for(const [,dep] of s.matchAll(/(?:from\s*|import\s*(?:\(\s*)?)["']([^"']+\.js)["']/g))await lerJS(resolve(dep.startsWith('/')?raiz:dirname(caminho),dep.startsWith('/')?`.${dep}`:dep));
 }
 for(const [,attrs,conteudo] of fonte.matchAll(/<script([^>]*)>([\s\S]*?)<\/script>/g)){
  if(/type=["']application\/ld\+json["']/.test(attrs))continue;
  const src=attrs.match(/src="([^"]+)"/)?.[1];
  if(src?.startsWith('/'))await lerJS(resolve(raiz,`.${src}`));
  else if(conteudo.trim()){
   bytes+=gzipSync(conteudo).length;
   for(const [,dep] of conteudo.matchAll(/(?:from\s*|import\s*(?:\(\s*)?)["']([^"']+\.js)["']/g))await lerJS(resolve(raiz,`.${dep}`));
  }
 }
 assert(bytes<=30_000,`Orçamento de JS excedido: ${f}`);
 tabela.push({rota:relative(raiz,f),jsGzipBytes:bytes,htmlBytes:(await stat(f)).size});
}
console.table(tabela);
console.log(`${html.length} páginas verificadas. ${indice.length} produtos publicados; ${produtos.length-indice.length} excluídos. Links, H1, copy e orçamento OK.`);

````

## scripts/verificar-seo.mjs

````mjs
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const html=walk('dist').filter(f=>f.endsWith('.html'));
const canonicas=new Set();
for(const f of html){
 const s=readFileSync(f,'utf8');
 const canonical=s.match(/rel="canonical" href="([^"]+)"/)?.[1];assert(canonical,f);assert(!canonicas.has(canonical),`Canônica duplicada: ${f}`);canonicas.add(canonical);
 assert(s.includes('property="og:image"'),f);assert(s.includes('name="description"'),f);
 const graph=JSON.parse(s.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1]??'null');assert(graph?.['@graph']);
 assert(!JSON.stringify(graph).match(/AggregateRating|"Review"|"offers"/));
 assert(!s.includes('<iframe'),`Mapa carregado no HTML: ${f}`);
 const image=s.match(/property="og:image" content="([^"]+)"/)?.[1];assert(image&&existsSync('dist'+new URL(image).pathname));
 if(process.env.PUBLIC_INDEXABLE!=='true')assert(s.includes('noindex,nofollow'),f);
}
const sitemap=readFileSync('dist/sitemap.xml','utf8');
assert(!sitemap.includes('rascunho'));assert(!sitemap.includes('/404'));
for(const [,url] of sitemap.matchAll(/<loc>(.*?)<\/loc>/g))assert(canonicas.has(url));
assert(readFileSync('dist/llms.txt','utf8').includes('13h30'));
console.log(`SEO: ${html.length} páginas com canônica, Open Graph, JSON-LD válido e nenhum iframe inicial. Sitemap sem rascunhos; llms.txt com almoço.`);

````

## src/components/Consentimento.astro

````astro
<section class="preferencias" data-consentimento hidden aria-label="Preferências de privacidade">
 <div class="container"><h2>Mapa do Google: você escolhe.</h2><p>Não usamos publicidade ou analytics. O mapa é opcional e pode permitir cookies do Google. Aceitar autoriza esse recurso; ele só será carregado quando você clicar no mapa. Sua escolha fica nesta aba durante a sessão.</p><div class="acoes"><button type="button" data-consentir="aceito">Aceitar</button><button type="button" data-consentir="recusado">Recusar</button><a href="/privacidade">Entenda a privacidade</a></div></div>
</section>
<script>import '../scripts/consentimento';</script>
<style>.preferencias{background:#f4f4f2;color:#111214;border-top:2px solid #8c0747;padding:24px 0}.preferencias h2{font-size:1.4rem}.preferencias p{max-width:80ch;margin:12px 0;font-size:.9rem}.acoes{display:flex;flex-wrap:wrap;gap:12px;align-items:center}.acoes button{background:transparent;border:1px solid #414246;color:inherit;padding:12px 24px;min-width:120px;min-height:48px;font:inherit;cursor:pointer}.acoes a{padding:12px}</style>

````

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 8</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
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
</div><nav class="container paginas" aria-label="Informações da loja"><a href="/assistencia-tecnica">Assistência técnica</a><a href="/curso-manutencao-celular">Curso de manutenção</a><a href="/sobre">Sobre a Smart Lion</a><a href="/como-chegar">Como chegar</a><a href="/perguntas-frequentes">Perguntas frequentes</a><a href="/dicas">Dicas</a><a href="/privacidade">Privacidade</a></nav><div class="container footer-bottom"><span>{loja.nome} · {loja.endereco.cidade}/{loja.endereco.uf}</span><span>Desenvolvido por WAXLO</span></div><button type="button" data-preferencias hidden>Preferências de privacidade</button></footer>
<style>.paginas{display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:30px;font-size:.8rem}.paginas a{min-height:44px;display:flex;align-items:center}footer{padding:64px 0 100px;border-top:1px solid var(--line)}.footer-grid{display:grid;grid-template-columns:1.1fr 1.2fr 1.25fr 1fr;gap:32px;font-size:.8rem;color:var(--muted)}h2{font:600 .85rem var(--font-heading);letter-spacing:0;color:white;margin-bottom:20px}.wordmark{font:600 1.35rem var(--font-heading);color:white;letter-spacing:.03em}p{margin:16px 0}address{font-style:normal;margin-bottom:16px}table{border-collapse:collapse;font-variant-numeric:tabular-nums}th{text-align:left;font-weight:400;padding:0 12px 8px 0;vertical-align:top}td{padding-bottom:8px}.small{font-size:.75rem}.number{font-size:1rem;color:white}.footer-bottom{display:flex;justify-content:space-between;border-top:1px solid var(--line);margin-top:48px;padding-top:24px;font-size:.7rem;color:var(--muted)}.sr-only{position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden}@media(max-width:1000px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:550px){.footer-grid{grid-template-columns:1fr;gap:28px}.footer-bottom{gap:20px;align-items:flex-start}.footer-bottom span:last-child{max-width:100px}}</style>

````

## src/layouts/LayoutBase.astro

````astro
---
import '../styles/tokens.css';
import '../styles/global.css';
import fontH1 from '@fontsource/outfit/files/outfit-latin-600-normal.woff2?url';
import Header from '../components/Header.astro';
import ChipsCategorias from '../components/ChipsCategorias.astro';
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
const indexavel=podeIndexar(import.meta.env.DEV,import.meta.env.PUBLIC_INDEXABLE,import.meta.env.VERCEL_ENV)&&!Astro.url.pathname.startsWith('/404');
const og=await getImage({src:fotoLoja,width:1200,format:'jpg'});
const schema=dadosEstruturados(Astro.url.pathname,title,Astro.site!,produto);
---
<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={description}/><meta name="robots" content={indexavel ? 'index,follow' : 'noindex,nofollow'}/><link rel="canonical" href={canonical}/><meta property="og:type" content="website"/><meta property="og:locale" content="pt_BR"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={canonical}/><meta property="og:image" content={new URL(og.src,Astro.site).href}/><meta property="og:image:alt" content="Interior da loja Smart Lion em Lages"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json" set:html={jsonSeguro(schema)}/><meta name="theme-color" content="#111214"/><link rel="icon" type="image/png" href="/favicon.png"/><link rel="preload" href={fontH1} as="font" type="font/woff2" crossorigin/></head><body><a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="sticky"><Header/><ChipsCategorias/></div><PendenciasDev/><main id="conteudo" tabindex="-1"><slot/></main><Consentimento/><Rodape/><BotaoWhatsApp flutuante/></body></html>
<style>.sticky{position:sticky;top:0;z-index:40}main:focus{outline:none}</style>

````

## src/lib/consentimento.ts

````ts
export type EscolhaMapa='aceito'|'recusado';
export const chaveConsentimento='smartlion-mapa-v1';
export function escolhaValida(v:unknown):v is EscolhaMapa{return v==='aceito'||v==='recusado';}
let memoria:EscolhaMapa|null=null;
export function lerConsentimento():EscolhaMapa|null{try{const v=sessionStorage.getItem(chaveConsentimento);return escolhaValida(v)?v:memoria;}catch{return memoria;}}
export function salvarConsentimento(v:EscolhaMapa){memoria=v;try{sessionStorage.setItem(chaveConsentimento,v);}catch{/* A escolha continua nesta página se o armazenamento estiver bloqueado. */}window.dispatchEvent(new CustomEvent('smartlion:consentimento',{detail:v}));}

````

## src/lib/seo.ts

````ts
import { loja } from '../config/loja';
import { categorias } from '../config/categorias';
import { servicos } from '../config/servicos';
import { perguntas } from '../data/perguntas';
import type { Produto } from './catalogo';
export const caminhoLimpo=(path:string)=>path==='/'?'/':path.replace(/\/+$/,'');
export const urlCanonica=(path:string,site:URL|string)=>new URL(caminhoLimpo(path.split('?')[0]!.split('#')[0]!),site).href;
export function podeIndexar(dev:boolean,autorizado:string|undefined,ambiente:string|undefined){return !dev&&autorizado==='true'&&(!ambiente||ambiente==='production');}
export const jsonSeguro=(valor:unknown)=>JSON.stringify(valor).replace(/</g,'\\u003c');
const hora=(n:number)=>`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
const dias=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
export function dadosEstruturados(path:string,title:string,site:URL|string,produto?:Produto){
 const url=(p:string)=>urlCanonica(p,site);const id=url('/')+'#loja';const p=caminhoLimpo(path);
 const graph:Record<string,unknown>[]=[{'@type':'ElectronicsStore','@id':id,name:loja.nome,url:url('/'),telephone:loja.telefone.numero,address:{'@type':'PostalAddress',streetAddress:`${loja.endereco.rua}, ${loja.endereco.numero}`,addressLocality:loja.endereco.cidade,addressRegion:loja.endereco.uf,postalCode:loja.endereco.cep,addressCountry:'BR'},geo:{'@type':'GeoCoordinates',...loja.coordenadas},sameAs:[loja.instagram.url,loja.googleMaps],openingHoursSpecification:loja.horario.semana.flatMap(h=>h.periodos.map(([a,b])=>({'@type':'OpeningHoursSpecification',dayOfWeek:h.dias.map(d=>`https://schema.org/${dias[d]}`),opens:hora(a),closes:hora(b)}))),hasOfferCatalog:{'@type':'OfferCatalog',name:'Catálogo sob consulta',itemListElement:categorias.map(c=>({'@type':'OfferCatalog',name:c.nome,url:url('/catalogo/'+c.slug)}))}}];
 if(p!=='/'&&p!=='/404')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:url('/')},{'@type':'ListItem',position:2,name:title.split(' | ')[0],item:url(p)}]});
 if(p==='/assistencia-tecnica'||p.startsWith('/assistencia-tecnica/')){const s=servicos.find(s=>p.endsWith('/'+s.slug));graph.push({'@type':'Service','@id':url(p)+'#servico',name:s?.titulo??'Assistência técnica de celulares',description:s?.resumo??loja.irpDescricao,provider:{'@id':id},areaServed:{'@type':'City',name:loja.endereco.cidade},url:url(p)});}
 if(p==='/perguntas-frequentes')graph.push({'@type':'FAQPage',mainEntity:perguntas.map(p=>({'@type':'Question',name:p.pergunta,acceptedAnswer:{'@type':'Answer',text:p.resposta}}))});
 if(produto)graph.push({'@type':'Product',name:produto.nome,description:produto.descricaoCurta,url:url(p),image:produto.imagens.map(i=>new URL(i.src,site).href)});
 return {'@context':'https://schema.org','@graph':graph};
}

````

## src/pages/llms.txt.ts

````ts
import type { APIRoute } from 'astro';
import { loja,enderecoCompleto } from '../config/loja';
import { categorias } from '../config/categorias';
import { formatarPeriodos } from '../lib/horario';
import { linkWhatsApp,mensagensWhatsApp } from '../config/whatsapp';
export const GET:APIRoute=({site})=>new Response(`# ${loja.nome}\n\n> Loja física de tecnologia em ${loja.endereco.cidade}. Catálogo sob consulta; atendimento pelo WhatsApp. Não há compra online.\n\n${loja.irpDescricao}. Seminovos com ${loja.garantiaSeminovosMeses} meses de garantia da loja.\n\n## Contato\n- Endereço: ${enderecoCompleto}, CEP ${loja.endereco.cep}\n- Telefone: ${loja.telefone.exibicao}\n- [WhatsApp ${loja.whatsapp.exibicao}](${linkWhatsApp(mensagensWhatsApp.geral())})\n- [Instagram ${loja.instagram.nome}](${loja.instagram.url})\n\n## Horários (${loja.horario.fuso})\n${loja.horario.semana.map(h=>`- ${h.rotulo}: ${formatarPeriodos(h.periodos)}`).join('\n')}\nFeriados: confirmar com a equipe.\n\n## Páginas\n${[['Catálogo','/catalogo'],['Assistência técnica','/assistencia-tecnica'],['Curso de manutenção','/curso-manutencao-celular'],['Como chegar','/como-chegar'],['Perguntas frequentes','/perguntas-frequentes'],['Dicas','/dicas'],...categorias.map(c=>[c.nome,'/catalogo/'+c.slug])].map(([n,p])=>`- [${n}](${new URL(p!,site)})`).join('\n')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});

````

## src/pages/privacidade.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../config/loja';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
---
<Pagina titulo="Privacidade" descricao="Entenda o funcionamento do catálogo, dos campos de orçamento, dos links externos e do mapa da Smart Lion." resposta={`Esta página explica como funcionam os recursos de contato e navegação do site da ${loja.nome}, em ${loja.endereco.cidade}. Para dúvidas sobre seus dados, procure a loja pelo canal de atendimento abaixo.`}>
<section class="pagina-bloco light"><div class="container texto-longo"><h2>Catálogo e navegação</h2><p>Este site não tem cadastro, conta de cliente, carrinho ou checkout. A versão atual não contém scripts de publicidade ou análise de audiência adicionados pela loja.</p><p>A infraestrutura de hospedagem pode processar dados técnicos da conexão para entregar e proteger as páginas. Na versão privada de revisão, o provedor também exige autenticação para acesso.</p><h2>Campos de orçamento e WhatsApp</h2><p>Os campos de modelo e problema preparam uma mensagem no seu navegador. Eles não são enviados a um formulário da loja nem gravados pelo código do site. Ao escolher abrir a conversa, o texto é incluído no link encaminhado ao WhatsApp. Revise a mensagem antes de enviá-la.</p><p>Depois que você envia uma mensagem, o atendimento acontece pelo WhatsApp. Evite informar senhas, documentos ou dados bancários no campo de descrição do problema.</p><h2>Mapa, redes sociais e avaliações</h2><p>O mapa do Google só é solicitado após você escolher Carregar mapa do Google. A conexão permite que o Google processe dados da visita e possa usar cookies. Continuar sem mapa mantém endereço e links de rota disponíveis. Se já carregou o mapa, essa opção remove o quadro da página; ela não apaga cookies que o provedor já tenha criado.</p><p>Links de WhatsApp, Instagram, Google e Waze abrem serviços externos, com suas próprias práticas de privacidade. As fotos do Instagram exibidas aqui são arquivos estáticos; não há widget da rede social. A seleção de estrelas não é armazenada nem enviada pelo site.</p><h2>Sua preferência de mapa</h2><p>Aceitar ou Recusar registra apenas sua escolha no armazenamento de sessão desta aba, com a chave smartlion-mapa-v1. Não usamos essa escolha para identificar você. A preferência termina com a sessão da aba e pode ser alterada em Preferências de privacidade, no rodapé. Se o navegador bloquear o armazenamento, a escolha vale somente nesta página. Aceitar não carrega o mapa automaticamente: é preciso clicar em Carregar mapa do Google. Recusar remove os mapas já carregados desta página e mantém os links de rota.</p><h2>Solicitações sobre seus dados</h2><p>Você pode solicitar informações sobre o uso de seus dados e exercer direitos como acesso, correção e eliminação, conforme as condições legais aplicáveis. A ANPD explica esses direitos em sua <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares">página para titulares de dados ↗</a>.</p><p>Para encaminhar uma solicitação à loja, use o atendimento da {loja.nome} e informe que o assunto é privacidade. O canal específico será publicado quando confirmado.</p><BotaoWhatsApp rotulo="Entrar em contato com a loja"/><p>{enderecoCompleto}. Telefone: <a href={`tel:${loja.telefone.numero}`}>{loja.telefone.exibicao}</a>.</p></div></section>
</Pagina>

````

## src/pages/produto/[slug].astro

````astro
---
import Layout from '../../layouts/LayoutBase.astro';
import DetalhesProduto from '../../components/catalogo/DetalhesProduto.astro';
import { obterProdutos } from '../../lib/produtos';
export async function getStaticPaths(){return (await obterProdutos()).map(produto=>({params:{slug:produto.slug},props:{produto}}))}
const {produto}=Astro.props;
---
<Layout produto={produto} title={`${produto.nome} em Lages | Smart Lion`} description={`Consulte ${produto.nome} com a Smart Lion em Lages. Escolha versão e cor e fale pelo WhatsApp.`}><div class="pagina-produto light"><div class="container"><a class="voltar" href="/catalogo">← Voltar ao catálogo</a><DetalhesProduto produto={produto}/></div></div></Layout>
<script>
import { iniciarProduto } from '../../scripts/produto';
import { caminhoProduto } from '../../lib/catalogo';
const raiz=document.querySelector<HTMLElement>('[data-produto-detalhes]');
if(raiz){
 const slug=JSON.parse(raiz.dataset.produto!).slug;
 const sessao=iniciarProduto(raiz,escolhas=>history.replaceState(history.state,'',caminhoProduto(slug,escolhas)));
 window.addEventListener('popstate',sessao.aplicarURL);
}
</script>
<style>.pagina-produto{padding:24px 0 70px}.voltar{display:inline-flex;align-items:center;min-height:44px;font-size:.8rem;margin-bottom:20px}</style>

````

## src/pages/robots.txt.ts

````ts
import type { APIRoute } from 'astro';
import { podeIndexar } from '../lib/seo';
export const GET:APIRoute=({site})=>new Response(podeIndexar(import.meta.env.DEV,import.meta.env.PUBLIC_INDEXABLE,import.meta.env.VERCEL_ENV)?`User-agent: *\nAllow: /\nSitemap: ${new URL('/sitemap.xml',site)}\n`:'User-agent: *\nDisallow: /\n',{headers:{'Content-Type':'text/plain; charset=utf-8'}});

````

## src/pages/sitemap.xml.ts

````ts
import type { APIRoute } from 'astro';
import { categorias } from '../config/categorias';
import { servicos } from '../config/servicos';
import { obterProdutos } from '../lib/produtos';
import { publicavel } from '../lib/catalogo';
import { obterDicas } from '../lib/dicas';
import { dicaPublicavel } from '../schemas/dica';
import { urlCanonica } from '../lib/seo';
export const GET:APIRoute=async({site})=>{
 const rotas=['/','/catalogo','/assistencia-tecnica','/curso-manutencao-celular','/sobre','/como-chegar','/avaliacoes','/dicas','/perguntas-frequentes','/privacidade',...categorias.map(c=>'/catalogo/'+c.slug),...servicos.map(s=>'/assistencia-tecnica/'+s.slug),...(await obterProdutos()).filter(publicavel).map(p=>'/produto/'+p.slug),...(await obterDicas()).filter(d=>dicaPublicavel(d.data)).map(d=>'/dicas/'+d.data.slug)];
 const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rotas.map(r=>`<url><loc>${escape(urlCanonica(r,site!))}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};

````

## src/scripts/consentimento.ts

````ts
import { lerConsentimento,salvarConsentimento,escolhaValida } from '../lib/consentimento';
const painel=document.querySelector<HTMLElement>('[data-consentimento]');
if(painel){
 painel.hidden=lerConsentimento()!==null;
 for(const b of painel.querySelectorAll<HTMLButtonElement>('[data-consentir]'))b.addEventListener('click',()=>{if(escolhaValida(b.dataset.consentir))salvarConsentimento(b.dataset.consentir);});
 const preferencias=document.querySelector<HTMLButtonElement>('[data-preferencias]');
 if(preferencias){preferencias.hidden=false;preferencias.addEventListener('click',()=>{painel.hidden=false;painel.querySelector('button')?.focus();});}
 window.addEventListener('smartlion:consentimento',()=>{const foco=painel.contains(document.activeElement);painel.hidden=true;if(foco)preferencias?.focus();});
}

````

## src/scripts/mapa.ts

````ts
import { salvarConsentimento } from '../lib/consentimento';
for (const root of document.querySelectorAll<HTMLElement>('[data-mapa]')) {
 const botoes=root.querySelector<HTMLElement>('.consentimento')!;
 const aceitar=root.querySelector<HTMLButtonElement>('[data-aceitar-mapa]')!;
 const status=root.querySelector<HTMLElement>('.status-mapa')!;
 const conteudo=root.querySelector<HTMLElement>('.mapa-conteudo')!;
 botoes.hidden=false;
 aceitar.addEventListener('click',()=>{
  salvarConsentimento('aceito');
  if(conteudo.querySelector('iframe'))return;
  const frame=document.createElement('iframe');
  frame.title='Localização da Smart Lion no Google Maps';
  frame.src=root.dataset.mapa!;frame.loading='lazy';frame.referrerPolicy='no-referrer';
  conteudo.append(frame);aceitar.disabled=true;
  status.textContent='Mapa solicitado ao Google. Se não aparecer, use os links de rota.';
 });
 const recusar=()=>{
  conteudo.replaceChildren();aceitar.disabled=false;
  status.textContent='Mapa desativado. O endereço e os links de rota continuam disponíveis.';
 };
 root.querySelector('[data-recusar-mapa]')!.addEventListener('click',()=>salvarConsentimento('recusado'));
 window.addEventListener('smartlion:consentimento',e=>{if((e as CustomEvent).detail==='recusado')recusar();});
}

````

## tests/seo.test.ts

````ts
import { describe,it,expect } from 'vitest';
import { dadosEstruturados,jsonSeguro,podeIndexar,urlCanonica } from '../src/lib/seo';
import { perguntas } from '../src/data/perguntas';
import { escolhaValida } from '../src/lib/consentimento';
const site='https://example.com';
describe('SEO e consentimento',()=>{
 it('remove variantes da URL canônica',()=>expect(urlCanonica('/produto/modelo/?cor=azul#x',site)).toBe(site+'/produto/modelo'));
 it('exige autorização e bloqueia preview',()=>{expect(podeIndexar(false,'true','preview')).toBe(false);expect(podeIndexar(true,'true','production')).toBe(false);expect(podeIndexar(false,undefined,'production')).toBe(false);expect(podeIndexar(false,'true','production')).toBe(true);});
 it('preserva almoço nos horários estruturados',()=>{const loja=dadosEstruturados('/','Início',site)['@graph'][0]!;expect(loja.openingHoursSpecification).toMatchObject([{opens:'09:00',closes:'12:00'},{opens:'13:30',closes:'18:30'},{opens:'09:00',closes:'13:00'}]);});
 it('FAQ usa exatamente as respostas visíveis',()=>{const faq=dadosEstruturados('/perguntas-frequentes','FAQ',site)['@graph'].find(x=>x['@type']==='FAQPage');expect(faq?.mainEntity).toEqual(perguntas.map(p=>({'@type':'Question',name:p.pergunta,acceptedAnswer:{'@type':'Answer',text:p.resposta}})));});
 it('não gera avaliações ou ofertas artificiais',()=>{const s=JSON.stringify(dadosEstruturados('/assistencia-tecnica','Assistência',site));expect(s).not.toMatch(/AggregateRating|"Review"|"offers"|priceCurrency/);expect(s).toContain('Service');});
 it('neutraliza fechamento de script',()=>expect(jsonSeguro({name:'</script>'})).not.toContain('<'));
 it('somente escolhas explícitas são válidas',()=>{expect(escolhaValida('aceito')).toBe(true);expect(escolhaValida('recusado')).toBe(true);expect(escolhaValida(null)).toBe(false);expect(escolhaValida('true')).toBe(false);});
});

````
