# Código completo — Fase 3

## Arquivos criados ou alterados

```text
README.md
docs/CATALOGO.md
docs/PENDENCIAS.md
docs/QA_FASE_3.md
docs/preview-fase3.jpg
package.json
scripts/verificar-catalogo.mjs
src/components/ChipsCategorias.astro
src/components/Header.astro
src/components/PendenciasDev.astro
src/components/catalogo/CardProduto.astro
src/components/catalogo/Catalogo.astro
src/components/catalogo/DetalhesProduto.astro
src/components/catalogo/FotoProduto.astro
src/components/catalogo/ModalProduto.astro
src/components/catalogo/Vitrine.astro
src/content.config.ts
src/content/produtos/rascunho-acessorio.json
src/content/produtos/rascunho-ipad.json
src/content/produtos/rascunho-iphone-17-pro-max.json
src/content/produtos/rascunho-iphone-seminovo.json
src/content/produtos/rascunho-xiaomi.json
src/layouts/LayoutBase.astro
src/lib/catalogo.ts
src/lib/produtos.ts
src/pages/busca.json.ts
src/pages/catalogo/[categoria].astro
src/pages/catalogo/index.astro
src/pages/index.astro
src/pages/produto/[slug].astro
src/schemas/produto.ts
src/scripts/busca.ts
src/scripts/modal-produto.ts
src/scripts/produto.ts
src/styles/global.css
src/styles/produto.css
tests/catalogo.test.ts
```

## README.md

````markdown
# Smart Lion — Fase 3

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

````

## docs/CATALOGO.md

````markdown
# Catálogo — Fase 3

Os cinco JSON em `src/content/produtos/` são exemplos, com `rascunho: true` e `confirmado: false`. Modelos, versões e cores demonstrativos não representam estoque. Use `pnpm dev` para visualizar os slots. A produção omite esses produtos, suas páginas e o índice de busca correspondente.

## Substituição dos slots

1. Edite o JSON da categoria desejada: nome, slug, descrição, versões e cores confirmados pela loja. Remova as opções rotuladas demonstração. IDs devem ser únicos dentro de cada lista.
2. Salve fotos reais em `src/assets/produtos/<slug>/`. Em `imagens`, use caminhos relativos ao JSON, por exemplo `../../assets/produtos/<slug>/frente.jpg`. Preencha `imagensAlt` na mesma ordem. Astro gera AVIF/WebP e dimensões.
3. Preencha condição física, disponibilidade e garantia confirmadas. `encomenda` não implica novo: exige `condicaoFisica` explícita para confirmação. Seminovo confirmado exige os seis meses de garantia da configuração da loja.
4. Sem preço confirmado, mantenha `preco: null` e `precoNota: null`: o site mostra “Sob consulta”. Um preço exige nota com `data` ISO (AAAA-MM-DD), `condicao` e `formaPagamento`. Não há preço inferido nem atualização automática de estoque.
5. Somente após validação comercial: `rascunho: false`, `confirmado: true` e `confirmadoEm` com a data real da confirmação. Foto e descrição são obrigatórias. Slugs duplicados interrompem a geração.
6. Execute `pnpm test`, `pnpm check`, `pnpm build` e `pnpm verify:catalogo` antes de publicar.

## Comportamento

`/catalogo` e sete páginas de categoria funcionam como navegação estática. Busca usa `/busca.json`, gerado no build a partir da mesma coleção filtrada; normaliza acentos. Seminovos também aparecem na categoria correspondente ao tipo do aparelho.

Cards levam à página real `/produto/[slug]`. Com JavaScript, abrem um dialog nativo; Esc e Voltar fecham o modal, restaurando o foco. Versão e cor usam rádios nativos e URL `?versao=…&cor=…`; recarregar abre a página com a seleção. A vitrine da home usa o mesmo componente.

Sem JavaScript, a página, fotos, detalhes e links de WhatsApp continuam disponíveis. A seleção dinâmica não altera a mensagem sem JavaScript; o link estático consulta o produto, e a microcopy explica esse comportamento. Todas as mensagens passam pela configuração central. Esgotado usa “Avise-me quando chegar”. Compartilhamento tenta a API nativa, depois copiar e, por fim, exibe um campo selecionável.

Não há carrinho, checkout, backend, controle de estoque ou produtos reais cadastrados nesta fase.

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

````

## docs/QA_FASE_3.md

````markdown
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

````

## package.json

````json
{
  "name": "smartlion",
  "version": "0.3.0",
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

````javascript
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

## src/components/ChipsCategorias.astro

````astro
---
import { categorias } from '../config/categorias';
const atual = Astro.url.pathname.startsWith('/catalogo/') ? Astro.url.pathname.split('/')[2] : '';
const catalogo = Astro.url.pathname.startsWith('/catalogo');
---
<nav aria-label="Categorias de produtos"><div class="container chips"><a href="/catalogo" data-filtro-categoria="" aria-current={catalogo && !atual ? 'page' : undefined}>Todas as categorias</a>{categorias.map(c=><a href={`/catalogo/${c.slug}`} data-filtro-categoria={c.slug} aria-current={atual === c.slug ? 'page' : undefined}>{c.nome}</a>)}</div></nav>
<style>nav{border-block:1px solid var(--line);background:var(--ink)}.chips{display:flex;align-items:center;gap:30px;overflow-x:auto;scrollbar-width:thin;scrollbar-color:#777 var(--ink)}a{white-space:nowrap;min-height:52px;display:flex;align-items:center;font-size:.82rem;flex-shrink:0;padding:4px 2px}a[aria-current]{border-bottom:2px solid var(--accent);color:var(--white)}@media(max-width:700px){.chips{gap:24px}a{min-height:48px}}</style>

````

## src/components/Header.astro

````astro
---
import { Image } from 'astro:assets';
import logo from '../assets/logo.png';
import { loja } from '../config/loja';
import BotaoWhatsApp from './BotaoWhatsApp.astro';
---
<header>
  <div class="container header-row">
    <a class="brand" href="/" aria-label={`${loja.nome} — início`}><Image src={logo} alt="" width={58} height={58}/><span>SMART LION<small>TECNOLOGIA COM PROCEDÊNCIA</small></span></a>
    <a class="search-link" href="/catalogo#busca"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="10" cy="10" r="6.5"/><path d="m15 15 6 6"/></svg><span>Buscar modelos e categorias</span><span class="search-label">Buscar</span></a>
    <a class="instagram" href={loja.instagram.url} aria-label={`Instagram ${loja.instagram.nome}`}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".7"/></svg><span>Instagram</span></a>
    <BotaoWhatsApp rotulo="WhatsApp"/>
  </div>
</header>
<style>header{background:var(--ink)}.header-row{display:flex;align-items:center;gap:28px;min-height:96px}.brand{display:flex;align-items:center;gap:12px;flex-shrink:0}.brand:hover{text-decoration:none}.brand span{font-family:var(--font-heading);font-size:1.25rem;letter-spacing:.04em}.brand small{display:block;font:400 .54rem var(--font-body);letter-spacing:.13em;color:var(--muted);margin-top:4px}.search-link{flex:1;display:flex;align-items:center;gap:12px;border:1px solid var(--line);border-radius:var(--radius);padding:11px 16px;color:var(--muted);font-size:.875rem}.search-label{margin-left:auto;font-size:.7rem}.instagram{display:flex;align-items:center;gap:8px;font-size:.875rem}@media(max-width:1000px){.header-row{gap:16px}.instagram span,.search-label{display:none}}@media(max-width:700px){.header-row{min-height:80px;gap:12px}.brand img{width:42px;height:42px}.brand span{display:none}.search-link{flex:0;border:0;padding:10px;margin-left:auto}.search-link span{display:none}.instagram{padding:10px}.header-row :global(.button){padding:10px;font-size:.8rem}.header-row :global(.button svg){display:none}}</style>

````

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 3</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. Mapa e demais páginas entram nas próximas fases.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````

## src/components/catalogo/CardProduto.astro

````astro
---
import { caminhoProduto, consultaProduto, formatarPreco, textoPrecoNota, nomeCategoria, publicavel, type Produto } from '../../lib/catalogo';
import FotoProduto from './FotoProduto.astro';
interface Props { produto: Produto }
const { produto: p } = Astro.props;
const origem = import.meta.env.DEV ? Astro.url.origin : Astro.site!.href;
---
<article class="produto-card" data-card-produto={p.slug}>
 <a class="foto-link" href={caminhoProduto(p.slug)} data-abrir-produto aria-label={`Ver opções de ${p.nome}`}><FotoProduto produto={p}/></a>
 <div class="card-top"><span>{nomeCategoria(p.categoria)}</span><span>{p.disponibilidade === 'esgotado' ? 'Esgotado' : p.condicao === 'seminovo' ? 'Seminovo' : p.condicao === 'encomenda' ? 'Sob encomenda' : 'Novo'}</span></div>
 {!publicavel(p) && <p class="rascunho">Rascunho · demonstração</p>}
 <h3><a href={caminhoProduto(p.slug)} data-abrir-produto>{p.nome}</a></h3>
 {p.selos.length > 0 && <p class="selos">{p.selos.join(' · ')}</p>}
 <p class="versoes">{p.versoes.map(v=>v.rotulo).join(' · ') || 'Versões sob consulta'}</p>
 <div class="cores" aria-label="Cores do modelo">{p.cores.map(c=><span class="cor" style={`--cor:${c.hex}`} title={c.rotulo}><span class="sr-only">{c.rotulo}</span></span>)}</div>
 <div class="preco"><strong>{formatarPreco(p)}</strong>{p.precoNota && <small>{textoPrecoNota(p)}</small>}</div>
 <div class="card-acoes"><a class="opcoes" href={caminhoProduto(p.slug)} data-abrir-produto>Ver opções <span aria-hidden="true">↗</span></a><a class="atalho" href={consultaProduto(p,origem)} aria-label={p.disponibilidade === 'esgotado' ? `Pedir aviso quando chegar: ${p.nome}` : `Consultar ${p.nome} no WhatsApp`}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1-3-3 1-1-1-3Z"/></svg></a></div>
</article>
<style>.produto-card{min-width:0;display:flex;flex-direction:column;padding-bottom:18px;border-bottom:1px solid #c6c6c0}.foto-link{display:block;margin-bottom:18px}.card-top{display:flex;justify-content:space-between;gap:8px;font-size:.65rem;text-transform:uppercase;letter-spacing:.06em;color:#50514e}.produto-card h3{font-size:1.3rem;line-height:1.2;margin:10px 0}.rascunho{font-size:.65rem;color:#873d00;margin-top:8px}.versoes,.selos{font-size:.75rem;color:#535450}.cores{display:flex;gap:6px;margin:12px 0;min-height:16px}.cor{width:14px;height:14px;background:var(--cor);border:1px solid #777;border-radius:50%}.preco{margin-top:auto;padding-top:8px}.preco strong{font-size:1rem;font-weight:600}.preco small{display:block;font-size:.7rem;margin-top:6px}.card-acoes{display:flex;gap:8px;margin-top:14px}.opcoes{display:flex;flex:1;align-items:center;justify-content:space-between;border:1px solid #92938c;padding:10px 14px;font-size:.8rem;min-height:46px}.atalho{display:grid;place-items:center;background:var(--whatsapp);color:#082b16;width:46px;min-height:46px}.opcoes:hover{background:#e5e5df;text-decoration:none}.atalho:hover{filter:brightness(.94)}</style>

````

## src/components/catalogo/Catalogo.astro

````astro
---
import type { Produto } from '../../lib/catalogo';
import { publicavel } from '../../lib/catalogo';
import CardProduto from './CardProduto.astro';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import ModalProduto from './ModalProduto.astro';
interface Props { produtos: Produto[]; categoria?: string }
const {produtos,categoria=''}=Astro.props;
---
<div data-catalogo data-categoria-base={categoria} data-rota-catalogo={Astro.url.pathname}>
 {import.meta.env.DEV && produtos.some(p=>!publicavel(p)) && <p class="aviso-dev">Prévia de desenvolvimento: os slots abaixo são rascunhos, com opções demonstrativas. Nenhum deles será publicado sem confirmação.</p>}
 <form class="busca-catalogo" id="busca" action={Astro.url.pathname} method="get" data-busca-catalogo role="search" aria-label="Buscar produtos">
  <div class="campo-busca"><label for="consulta-catalogo">Qual modelo você procura?</label><input id="consulta-catalogo" name="q" type="search" placeholder="iPhone, 17 Pro Max, tablet…" autocomplete="off"/></div>
  <div class="campo-condicao"><label for="condicao-catalogo">Condição</label><select id="condicao-catalogo" name="condicao"><option value="">Todas</option><option value="novo">Novo</option><option value="seminovo">Seminovo</option></select></div>
  <button type="submit" class="buscar">Buscar</button><button type="button" class="limpar" data-limpar hidden>Limpar busca</button>
 </form>
 <noscript><p class="aviso">A busca precisa de JavaScript. Você pode navegar pelas categorias no cabeçalho e abrir os produtos ou o WhatsApp normalmente.</p></noscript>
 <div class="catalogo-meta"><h2 class="sr-only">Modelos do catálogo</h2><p data-contagem role="status" aria-live="polite">{produtos.length} {produtos.length===1?'modelo cadastrado':'modelos cadastrados'}</p><span>Disponibilidade pelo WhatsApp</span></div>
 <div class="grade-produtos">{produtos.map(p=><CardProduto produto={p}/>)}</div>
 <div class="catalogo-vazio" data-catalogo-vazio hidden={produtos.length>0}><p class="eyebrow">Vamos encontrar seu próximo aparelho</p><h2>Converse com a nossa equipe.</h2><p data-vazio-texto>{produtos.length ? 'Não encontramos um modelo para essa busca. Consulte as opções com a equipe.' : 'Consulte os modelos e as condições pelo WhatsApp. Nossa equipe ajuda você a escolher.'}</p><BotaoWhatsApp rotulo="Consultar modelos no WhatsApp"/></div>
</div>
{produtos.length > 0 && <ModalProduto/>}
<script src="../../scripts/busca.ts"></script>
<style>.aviso-dev{background:#fff0c7;color:#633a00;padding:16px;font-size:.8rem;margin-bottom:24px}.busca-catalogo{display:flex;align-items:end;gap:12px;padding:24px 0;border-block:1px solid #c5c6c0;scroll-margin-top:165px}.busca-catalogo label{display:block;font-size:.8rem;margin-bottom:8px}.campo-busca{flex:1}.campo-condicao{width:160px}.busca-catalogo input,.busca-catalogo select{display:block;min-height:48px;width:100%;background:white;border:1px solid #868780;border-radius:0;padding:11px 14px;color:var(--ink)}.busca-catalogo button{min-height:48px;padding:10px 22px;border:1px solid var(--ink);background:var(--ink);color:white}.busca-catalogo .limpar{background:transparent;color:var(--ink);border-color:#777}.catalogo-meta{display:flex;justify-content:space-between;gap:16px;font-size:.75rem;color:#52534e;margin:28px 0}.grade-produtos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:40px 24px}.catalogo-vazio{padding:48px 0;max-width:650px}.catalogo-vazio .eyebrow{color:#8c0747}.catalogo-vazio h2{margin:12px 0 20px}.catalogo-vazio>p{margin-bottom:24px;color:#414246}.aviso{font-size:.8rem;margin-top:12px}@media(max-width:1050px){.grade-produtos{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.busca-catalogo{flex-wrap:wrap}.campo-busca{flex-basis:100%}.campo-condicao{flex:1;min-width:150px}.busca-catalogo .limpar{flex-basis:100%}.grade-produtos{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 16px}.catalogo-meta span{max-width:120px;text-align:right}}@media(max-width:420px){.grade-produtos{grid-template-columns:1fr}.grade-produtos :global(.foto-produto){max-height:320px;aspect-ratio:auto;height:320px}}</style>

````

## src/components/catalogo/DetalhesProduto.astro

````astro
---
import '../../styles/produto.css';
import { loja } from '../../config/loja';
import { consultaProduto, dadosConsulta, formatarPreco, textoPrecoNota, nomeCategoria, publicavel, condicaoFisica, urlProduto, type Produto } from '../../lib/catalogo';
import FotoProduto from './FotoProduto.astro';
interface Props { produto: Produto }
const { produto: p } = Astro.props;
const origem = import.meta.env.DEV ? Astro.url.origin : Astro.site!.href;
const condicao = condicaoFisica(p);
---
<section class="produto-detalhes light" data-produto-detalhes data-produto={JSON.stringify(dadosConsulta(p))} data-origem={origem}>
 <div class="fotos"><FotoProduto produto={p}/>{p.imagens.slice(1).map((_,i)=><div class="foto-extra"><FotoProduto produto={p} indice={i+1}/></div>)}</div>
 <div class="conteudo-produto">
  <p class="eyebrow">{nomeCategoria(p.categoria)} · {p.condicao === 'encomenda' ? 'Sob encomenda' : condicao === 'seminovo' ? 'Seminovo' : 'Novo'}</p>
  <h1 data-titulo-produto>{p.nome}</h1>
  {!publicavel(p) && <p class="aviso-rascunho">Demonstração de desenvolvimento. Modelo, versões, cores e imagens aguardam confirmação; não representa estoque ou oferta.</p>}
  <p class="resposta">Consulte {p.nome} com a {loja.nome}, na {loja.endereco.rua}, {loja.endereco.numero}, Centro de {loja.endereco.cidade}. Fale pelo WhatsApp para confirmar disponibilidade e condições.</p>
  {p.descricaoCurta && <p class="garantia">{p.descricaoCurta}</p>}
  {condicao === 'seminovo' && <p class="garantia">Seminovo com procedência · {loja.garantiaSeminovosMeses} meses de garantia da loja.</p>}
  {p.garantia && <p class="garantia">{p.garantia}</p>}
  {p.saudeBateria && <p class="garantia">Saúde da bateria: {p.saudeBateria}</p>}
  {p.versoes.length > 0 && <fieldset><legend>Versão</legend><div class="escolhas">{p.versoes.map(v=><label class="opcao"><input type="radio" name={`versao-${p.slug}`} value={v.id} data-escolha="versao"/>{v.rotulo}</label>)}</div></fieldset>}
  {p.cores.length > 0 && <fieldset><legend>Cor</legend><div class="escolhas">{p.cores.map(c=><label class="opcao"><input type="radio" name={`cor-${p.slug}`} value={c.id} data-escolha="cor"/><span class="amostra-cor" style={`--cor:${c.hex}`} aria-hidden="true"></span>{c.rotulo}</label>)}</div></fieldset>}
  <dl class="resumo"><dt>Modelo</dt><dd>{p.nome}</dd><dt>Versão</dt><dd data-resumo-versao>A escolher</dd><dt>Cor</dt><dd data-resumo-cor>A escolher</dd><dt>Preço</dt><dd>{formatarPreco(p)}</dd></dl>
  {p.precoNota && <p class="preco-nota">{textoPrecoNota(p)}</p>}
  <a class="button button-wa consulta" data-consulta-produto href={consultaProduto(p,origem)}>{p.disponibilidade === 'esgotado' ? 'Avise-me quando chegar' : 'Consultar no WhatsApp'}</a>
  <p class="nota">Estoque e condições sujeitos a alteração. Confirme pelo WhatsApp.</p>
  <p class="feedback" data-feedback-produto role="status" aria-live="polite">{p.disponibilidade === 'esgotado' ? 'Peça à equipe para avisar quando chegar.' : 'Selecione versão e cor para incluir na consulta.'}</p>
  <noscript><p class="nota">O botão abre uma consulta geral deste modelo. Informe a versão e a cor desejadas na conversa.</p></noscript>
  <button class="compartilhar" type="button" data-compartilhar hidden>Compartilhar produto</button>
  <details data-copia><summary>Link do produto para copiar</summary><label class="sr-only" for={`link-${p.slug}`}>Link compartilhável do produto</label><input class="link-copia" id={`link-${p.slug}`} data-link-copia value={urlProduto(p.slug,origem)} readonly/></details>
 </div>
</section>

````

## src/components/catalogo/FotoProduto.astro

````astro
---
import { Picture } from 'astro:assets';
import type { Produto } from '../../lib/catalogo';
interface Props { produto: Produto; indice?: number }
const { produto, indice = 0 } = Astro.props;
const imagem = produto.imagens[indice];
---
<div class="foto-produto">
 {imagem ? <Picture src={imagem} alt={produto.imagensAlt[indice]} formats={['avif','webp']} widths={[320,480,720]} sizes="(max-width: 700px) 90vw, 40vw" width={720} height={720} fit="contain" loading="lazy"/> : <div class="slot-imagem"><span class="eyebrow">{produto.categoria === 'ipad-mac-watch' ? 'TABLET / APPLE' : produto.categoria === 'acessorios' ? 'ACESSÓRIO' : 'CELULAR'}</span><span class="slot-marca" aria-hidden="true">SL</span><span>Foto a definir</span><small>Slot de demonstração</small></div>}
</div>
<style>.foto-produto{aspect-ratio:1;background:#e8e8e4;overflow:hidden}.foto-produto :global(img){width:100%;height:100%;object-fit:contain}.foto-produto :global(picture){display:block;width:100%;height:100%}.slot-imagem{height:100%;display:flex;align-items:center;justify-content:center;flex-direction:column;color:#535450;border:1px dashed #a7a7a1;gap:5px;padding:18px;text-align:center}.slot-marca{font:600 clamp(2.8rem,7vw,5.5rem) var(--font-heading);color:#b9bab3;letter-spacing:-.08em;line-height:1.5}.slot-imagem .eyebrow{font-size:.6rem}.slot-imagem small{font-size:.7rem}</style>

````

## src/components/catalogo/ModalProduto.astro

````astro
---
import '../../styles/produto.css';
---
<p class="sr-only" data-modal-feedback role="status" aria-live="polite"></p>
<dialog id="modal-produto" aria-labelledby="modal-titulo"><div class="modal-barra"><span>SMART LION</span><button type="button" data-fechar-modal aria-label="Fechar opções do produto" autofocus>Fechar <span aria-hidden="true">×</span></button></div><div data-modal-conteudo></div></dialog>
<script src="../../scripts/modal-produto.ts"></script>
<style>dialog{border:0;padding:0;width:min(1040px,calc(100% - 32px));max-height:calc(100dvh - 32px);background:var(--surface);color:var(--ink);box-shadow:0 20px 90px #0008;overflow:auto}dialog::backdrop{background:#090a0bd9}.modal-barra{position:sticky;top:0;background:var(--surface);border-bottom:1px solid #ccc;z-index:2;display:flex;align-items:center;justify-content:space-between;padding:12px 24px;font-size:.75rem;letter-spacing:.08em}.modal-barra button{min-height:44px;min-width:85px;background:transparent;color:var(--ink);border:1px solid #777;padding:8px 12px}.modal-barra button:focus-visible{outline-color:#a50050}.modal-barra span[aria-hidden]{margin-left:12px;font-size:1.2rem}@media(max-width:700px){dialog{width:calc(100% - 16px);max-height:calc(100dvh - 16px)}.modal-barra{padding:8px 20px}}</style>

````

## src/components/catalogo/Vitrine.astro

````astro
---
import { obterProdutos } from '../../lib/produtos';
import CardProduto from './CardProduto.astro';
import ModalProduto from './ModalProduto.astro';
const produtos=(await obterProdutos()).filter(p=>p.destaque).slice(0,8);
---
{produtos.length > 0 && <section class="vitrine light"><div class="container"><div class="titulo-vitrine"><div><p class="eyebrow">Explore as opções</p><h2>Na sua próxima escolha.</h2></div><a href="/catalogo">Ver catálogo completo ↗</a></div>{import.meta.env.DEV&&<p class="aviso">Prévia: slots de demonstração, fora do build de produção.</p>}<div class="grade">{produtos.map(p=><CardProduto produto={p}/>)}</div></div><ModalProduto/></section>}
<style>.vitrine{padding:60px 0}.titulo-vitrine{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:28px}.titulo-vitrine .eyebrow{color:#8c0747;margin-bottom:14px}.titulo-vitrine a{font-size:.8rem;white-space:nowrap}.aviso{font-size:.8rem;color:#633a00;margin-bottom:20px}.grade{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 24px}@media(max-width:1000px){.grade{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.titulo-vitrine{display:block}.titulo-vitrine a{display:inline-block;margin-top:18px}.grade{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:420px){.grade{grid-template-columns:1fr}}</style>

````

## src/content.config.ts

````typescript
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { criarSchemaProduto } from './schemas/produto';
export const collections = {
 produtos: defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/produtos' }),
  schema: ({ image }) => criarSchemaProduto(image()),
 }),
};

````

## src/content/produtos/rascunho-acessorio.json

````json
{
  "slug": "rascunho-acessorio",
  "nome": "Acessório · modelo a confirmar",
  "categoria": "acessorios",
  "subcategoria": null,
  "condicao": "novo",
  "condicaoFisica": null,
  "rascunho": true,
  "confirmado": false,
  "confirmadoEm": "",
  "selos": [],
  "versoes": [
    {
      "id": "exemplo-a",
      "rotulo": "Versão A · demonstração"
    },
    {
      "id": "exemplo-b",
      "rotulo": "Versão B · demonstração"
    }
  ],
  "cores": [
    {
      "id": "exemplo-clara",
      "rotulo": "Cor clara · demonstração",
      "hex": "#D9D9D6"
    },
    {
      "id": "exemplo-escura",
      "rotulo": "Cor escura · demonstração",
      "hex": "#303236"
    }
  ],
  "disponibilidade": "esgotado",
  "preco": null,
  "precoNota": null,
  "garantia": "",
  "garantiaMeses": null,
  "saudeBateria": "",
  "destaque": true,
  "ordem": 5,
  "imagens": [],
  "imagensAlt": [],
  "descricaoCurta": "",
  "sinonimos": [
    "capa",
    "capinha"
  ],
  "atualizadoEm": ""
}

````

## src/content/produtos/rascunho-ipad.json

````json
{
  "slug": "rascunho-ipad",
  "nome": "iPad · modelo a confirmar",
  "categoria": "ipad-mac-watch",
  "subcategoria": null,
  "condicao": "novo",
  "condicaoFisica": null,
  "rascunho": true,
  "confirmado": false,
  "confirmadoEm": "",
  "selos": [],
  "versoes": [
    {
      "id": "exemplo-a",
      "rotulo": "Versão A · demonstração"
    },
    {
      "id": "exemplo-b",
      "rotulo": "Versão B · demonstração"
    }
  ],
  "cores": [
    {
      "id": "exemplo-clara",
      "rotulo": "Cor clara · demonstração",
      "hex": "#D9D9D6"
    },
    {
      "id": "exemplo-escura",
      "rotulo": "Cor escura · demonstração",
      "hex": "#303236"
    }
  ],
  "disponibilidade": "consultar",
  "preco": null,
  "precoNota": null,
  "garantia": "",
  "garantiaMeses": null,
  "saudeBateria": "",
  "destaque": true,
  "ordem": 3,
  "imagens": [],
  "imagensAlt": [],
  "descricaoCurta": "",
  "sinonimos": [
    "tablet",
    "tablets"
  ],
  "atualizadoEm": ""
}

````

## src/content/produtos/rascunho-iphone-17-pro-max.json

````json
{
  "slug": "rascunho-iphone-17-pro-max",
  "nome": "iPhone 17 Pro Max",
  "categoria": "iphone",
  "subcategoria": null,
  "condicao": "novo",
  "condicaoFisica": null,
  "rascunho": true,
  "confirmado": false,
  "confirmadoEm": "",
  "selos": [],
  "versoes": [
    {
      "id": "exemplo-a",
      "rotulo": "Versão A · demonstração"
    },
    {
      "id": "exemplo-b",
      "rotulo": "Versão B · demonstração"
    }
  ],
  "cores": [
    {
      "id": "exemplo-clara",
      "rotulo": "Cor clara · demonstração",
      "hex": "#D9D9D6"
    },
    {
      "id": "exemplo-escura",
      "rotulo": "Cor escura · demonstração",
      "hex": "#303236"
    }
  ],
  "disponibilidade": "consultar",
  "preco": null,
  "precoNota": null,
  "garantia": "",
  "garantiaMeses": null,
  "saudeBateria": "",
  "destaque": true,
  "ordem": 1,
  "imagens": [],
  "imagensAlt": [],
  "descricaoCurta": "",
  "sinonimos": [
    "17 pro max",
    "iphone 17"
  ],
  "atualizadoEm": ""
}

````

## src/content/produtos/rascunho-iphone-seminovo.json

````json
{
  "slug": "rascunho-iphone-seminovo",
  "nome": "iPhone seminovo · modelo a confirmar",
  "categoria": "iphone",
  "subcategoria": null,
  "condicao": "seminovo",
  "condicaoFisica": null,
  "rascunho": true,
  "confirmado": false,
  "confirmadoEm": "",
  "selos": [],
  "versoes": [
    {
      "id": "exemplo-a",
      "rotulo": "Versão A · demonstração"
    },
    {
      "id": "exemplo-b",
      "rotulo": "Versão B · demonstração"
    }
  ],
  "cores": [
    {
      "id": "exemplo-clara",
      "rotulo": "Cor clara · demonstração",
      "hex": "#D9D9D6"
    },
    {
      "id": "exemplo-escura",
      "rotulo": "Cor escura · demonstração",
      "hex": "#303236"
    }
  ],
  "disponibilidade": "consultar",
  "preco": null,
  "precoNota": null,
  "garantia": "",
  "garantiaMeses": 6,
  "saudeBateria": "",
  "destaque": true,
  "ordem": 2,
  "imagens": [],
  "imagensAlt": [],
  "descricaoCurta": "",
  "sinonimos": [
    "seminovo",
    "bateria"
  ],
  "atualizadoEm": ""
}

````

## src/content/produtos/rascunho-xiaomi.json

````json
{
  "slug": "rascunho-xiaomi",
  "nome": "Xiaomi · modelo a confirmar",
  "categoria": "xiaomi",
  "subcategoria": null,
  "condicao": "encomenda",
  "condicaoFisica": null,
  "rascunho": true,
  "confirmado": false,
  "confirmadoEm": "",
  "selos": [],
  "versoes": [
    {
      "id": "exemplo-a",
      "rotulo": "Versão A · demonstração"
    },
    {
      "id": "exemplo-b",
      "rotulo": "Versão B · demonstração"
    }
  ],
  "cores": [
    {
      "id": "exemplo-clara",
      "rotulo": "Cor clara · demonstração",
      "hex": "#D9D9D6"
    },
    {
      "id": "exemplo-escura",
      "rotulo": "Cor escura · demonstração",
      "hex": "#303236"
    }
  ],
  "disponibilidade": "sob-encomenda",
  "preco": null,
  "precoNota": null,
  "garantia": "",
  "garantiaMeses": null,
  "saudeBateria": "",
  "destaque": true,
  "ordem": 4,
  "imagens": [],
  "imagensAlt": [],
  "descricaoCurta": "",
  "sinonimos": [
    "redmi",
    "poco"
  ],
  "atualizadoEm": ""
}

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
interface Props { title: string; description: string }
const { title, description } = Astro.props;
---
<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={description}/><meta name="robots" content={!import.meta.env.DEV && import.meta.env.PUBLIC_INDEXABLE === 'true' ? 'index,follow' : 'noindex,nofollow'}/><meta name="theme-color" content="#111214"/><link rel="icon" type="image/png" href="/favicon.png"/><link rel="preload" href={fontH1} as="font" type="font/woff2" crossorigin/></head><body><a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="sticky"><Header/><ChipsCategorias/></div><PendenciasDev/><main id="conteudo" tabindex="-1"><slot/></main><Rodape/><BotaoWhatsApp flutuante/></body></html>
<style>.sticky{position:sticky;top:0;z-index:40}main:focus{outline:none}</style>

````

## src/lib/catalogo.ts

````typescript
import type { CollectionEntry } from 'astro:content';
import { categorias } from '../config/categorias';
import { linkWhatsApp, mensagensWhatsApp } from '../config/whatsapp';
export type Produto = CollectionEntry<'produtos'>['data'];
export type Categoria = typeof categorias[number]['slug'];
export type DadosConsulta = Pick<Produto,'slug'|'nome'|'categoria'|'condicao'|'condicaoFisica'|'disponibilidade'|'versoes'|'cores'>;
export interface Escolhas { versao: string; cor: string }
export interface ItemBusca { slug: string; nome: string; categorias: string[]; condicao: string; termos: string }
export function publicavel(p: Pick<Produto,'rascunho'|'confirmado'|'confirmadoEm'>): boolean {
 return p.rascunho === false && p.confirmado === true && Boolean(p.confirmadoEm);
}
export function visivel(p: Pick<Produto,'rascunho'|'confirmado'|'confirmadoEm'>, desenvolvimento: boolean): boolean { return desenvolvimento || publicavel(p); }
export function condicaoFisica(p: Pick<Produto,'condicao'|'condicaoFisica'>): 'novo' | 'seminovo' | null {
 return p.condicao === 'encomenda' ? p.condicaoFisica : p.condicao;
}
export function categoriasProduto(p: Pick<Produto,'categoria'|'condicao'|'condicaoFisica'>): string[] {
 return [...new Set([p.categoria,...(condicaoFisica(p) === 'seminovo' ? ['seminovos'] : [])])];
}
export function nomeCategoria(slug: string): string { return categorias.find(c=>c.slug === slug)?.nome ?? slug; }
export function normalizar(texto: string): string {
 return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,' ').trim();
}
export type DadosIndice = Pick<Produto,'slug'|'nome'|'categoria'|'condicao'|'condicaoFisica'|'descricaoCurta'|'saudeBateria'|'sinonimos'|'versoes'>;
export function criarIndice(produtos: DadosIndice[]): ItemBusca[] {
 return produtos.map(p=>({slug:p.slug,nome:p.nome,categorias:categoriasProduto(p),condicao:condicaoFisica(p) ?? 'encomenda',termos:normalizar([p.nome,p.slug,nomeCategoria(p.categoria),p.condicao,condicaoFisica(p),p.descricaoCurta,p.saudeBateria,...p.sinonimos,...p.versoes.map(v=>v.rotulo)].join(' '))}));
}
export function buscar(indice: ItemBusca[], consulta: string, categoria = '', condicao = ''): ItemBusca[] {
 const palavras=normalizar(consulta).split(' ').filter(Boolean);
 return indice.filter(p=>(!categoria || p.categorias.includes(categoria)) && (!condicao || p.condicao === condicao) && palavras.every(t=>p.termos.includes(t)));
}
export function resolverEscolhas(p: DadosConsulta, parametros: URLSearchParams): Escolhas {
 const v=parametros.get('versao') ?? '', c=parametros.get('cor') ?? '';
 return {versao:p.versoes.some(x=>x.id===v)?v:'',cor:p.cores.some(x=>x.id===c)?c:''};
}
export function caminhoProduto(slug: string, escolhas: Partial<Escolhas> = {}): string {
 const params=new URLSearchParams();
 if(escolhas.versao)params.set('versao',escolhas.versao);
 if(escolhas.cor)params.set('cor',escolhas.cor);
 return `/produto/${slug}${params.size ? `?${params}` : ''}`;
}
export function urlProduto(slug: string, origem: string, escolhas: Partial<Escolhas> = {}): string {
 return new URL(caminhoProduto(slug,escolhas),origem).href;
}
export function consultaProduto(p: DadosConsulta, origem: string, escolhas: Partial<Escolhas> = {}): string {
 if(p.disponibilidade === 'esgotado')return linkWhatsApp(mensagensWhatsApp.esgotado(p.nome));
 if(p.categoria === 'perfumaria')return linkWhatsApp(mensagensWhatsApp.perfumaria(p.nome));
 const versao=p.versoes.find(v=>v.id===escolhas.versao), cor=p.cores.find(c=>c.id===escolhas.cor), condicao=condicaoFisica(p);
 const url=urlProduto(p.slug,origem,escolhas);
 return linkWhatsApp(versao && cor && condicao
  ? mensagensWhatsApp.produto({nome:p.nome,versao:versao.rotulo,cor:cor.rotulo,condicao,url})
  : mensagensWhatsApp.card(p.nome,url));
}
export function formatarPreco(p: Pick<Produto,'preco'|'precoNota'>): string {
 return p.preco !== null && p.precoNota ? new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(p.preco) : 'Sob consulta';
}
export function textoPrecoNota(p: Pick<Produto,'precoNota'>): string {
 if(!p.precoNota)return '';
 const n=p.precoNota;
 return `${n.condicao} · ${n.formaPagamento} · ${n.data.split('-').reverse().join('/')}`;
}
export function dadosConsulta(p: Produto): DadosConsulta {
 const {slug,nome,categoria,condicao,condicaoFisica,disponibilidade,versoes,cores}=p;
 return {slug,nome,categoria,condicao,condicaoFisica,disponibilidade,versoes,cores};
}

````

## src/lib/produtos.ts

````typescript
import { getCollection } from 'astro:content';
import { visivel, type Produto } from './catalogo';
/** Única porta de leitura: usada por rotas, cards, contagens e índice JSON. */
export async function obterProdutos(): Promise<Produto[]> {
 const entradas=await getCollection('produtos');
 const slugs=new Set<string>();
 for(const {data} of entradas){
  if(slugs.has(data.slug))throw new Error(`Slug de produto duplicado: ${data.slug}`);
  slugs.add(data.slug);
 }
 return entradas.map(e=>e.data).filter(p=>visivel(p,import.meta.env.DEV)).sort((a,b)=>a.ordem-b.ordem || a.nome.localeCompare(b.nome,'pt-BR'));
}

````

## src/pages/busca.json.ts

````typescript
import type { APIRoute } from 'astro';
import { obterProdutos } from '../lib/produtos';
import { criarIndice } from '../lib/catalogo';
export const GET: APIRoute = async () => new Response(JSON.stringify(criarIndice(await obterProdutos())),{headers:{'Content-Type':'application/json; charset=utf-8'}});

````

## src/pages/catalogo/[categoria].astro

````astro
---
import Layout from '../../layouts/LayoutBase.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { categorias } from '../../config/categorias';
import { loja } from '../../config/loja';
import { obterProdutos } from '../../lib/produtos';
import { categoriasProduto } from '../../lib/catalogo';
export function getStaticPaths(){return categorias.map(c=>({params:{categoria:c.slug},props:{categoria:c}}))}
const {categoria}=Astro.props;
const produtos=(await obterProdutos()).filter(p=>categoriasProduto(p).includes(categoria.slug));
---
<Layout title={`${categoria.nome} em Lages | Smart Lion`} description={`Consulte ${categoria.nome} na Smart Lion, no Centro de Lages. Modelos e condições pelo WhatsApp.`}><section class="categoria light"><div class="container"><a class="voltar" href="/catalogo">← Todas as categorias</a><header><p class="eyebrow">Smart Lion · {loja.endereco.cidade}</p><h1>{categoria.nome}</h1><p>Consulte {categoria.nome} com a {loja.nome}, na {loja.endereco.rua}, {loja.endereco.numero}, Centro de {loja.endereco.cidade}. Fale pelo WhatsApp para saber os modelos e as condições.</p>{categoria.slug==='seminovos'&&<p class="garantia">Nossos iPhones seminovos passam pela equipe técnica e têm {loja.garantiaSeminovosMeses} meses de garantia da loja. Consulte a cobertura com a equipe.</p>}</header><Catalogo produtos={produtos} categoria={categoria.slug}/></div></section></Layout>
<style>.categoria{padding:36px 0 80px}.voltar{font-size:.8rem;display:inline-block;min-height:44px}.categoria header{margin:22px 0 38px}.categoria .eyebrow{color:#8c0747}.categoria h1{margin:16px 0 24px}.categoria header>p{max-width:680px;color:#414246}.garantia{margin-top:18px;border-left:3px solid #a50050;padding-left:16px}@media(max-width:700px){.categoria{padding:24px 0 60px}}</style>

````

## src/pages/catalogo/index.astro

````astro
---
import Layout from '../../layouts/LayoutBase.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { obterProdutos } from '../../lib/produtos';
import { loja } from '../../config/loja';
const produtos=await obterProdutos();
---
<Layout title="Catálogo de iPhone e importados em Lages | Smart Lion" description="Explore as categorias da Smart Lion em Lages. Consulte versões, cores e condições pelo WhatsApp."><section class="catalogo light"><div class="container"><header><p class="eyebrow">Escolha com calma. Fale com quem entende.</p><h1>Seu próximo aparelho<br/>começa por aqui.</h1><p>A {loja.nome} trabalha com iPhone, Apple, Xiaomi e importados na {loja.endereco.rua}, {loja.endereco.numero}, Centro de {loja.endereco.cidade}. Consulte modelos, versões e cores com nossa equipe pelo WhatsApp.</p></header><Catalogo produtos={produtos}/></div></section></Layout>
<style>.catalogo{padding:60px 0 80px}.catalogo header{margin-bottom:38px}.catalogo header .eyebrow{color:#8c0747;font-size:.7rem}.catalogo h1{font-size:clamp(2.5rem,4.5vw,4.5rem);margin:18px 0 24px}.catalogo header>p:last-child{max-width:670px;color:#414246;font-size:.95rem}@media(max-width:700px){.catalogo{padding:38px 0 60px}}</style>

````

## src/pages/index.astro

````astro
---
import { Picture } from 'astro:assets';
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
<section class="directory light" id="categorias" aria-labelledby="categorias-titulo"><div class="container"><div class="directory-heading"><div><p class="eyebrow">Encontre o que combina com você</p><h2 id="categorias-titulo">Seu próximo passo.</h2></div><p>Escolha uma categoria.<br/>Converse com quem entende.</p></div>
<div class="category-list">{categorias.map((c,i)=><article id={c.slug} data-category={`${c.nome} ${c.detalhe} ${c.slug === 'ipad-mac-watch' ? 'tablet tablets macbook airpods' : ''}`}><span class="index tabular" aria-hidden="true">0{i+1}</span><div><h3>{c.nome}</h3><p>{c.detalhe}</p></div><a class="category-contact" href={`/catalogo/${c.slug}`} aria-label={`Ver categoria ${c.nome}`}>Ver categoria <span aria-hidden="true">↗</span></a></article>)}</div>

</div></section>
<Vitrine/>
</Layout>

<style>.hero{position:relative;isolation:isolate;min-height:690px;overflow:hidden}.hero :global(.hero-photo){position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-2}.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,18,20,.96) 0%,rgba(17,18,20,.82) 33%,rgba(17,18,20,.18) 80%);z-index:-1}.hero-content{padding-top:65px;padding-bottom:30px}.hero .eyebrow{display:flex;align-items:center;gap:10px;color:#e9e9e9}.eyebrow span{width:7px;height:7px;background:var(--accent)}h1{margin:26px 0 24px;max-width:820px}h1 span{color:#d6d4cf}.intro{max-width:470px;color:#ddd;font-size:.98rem}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.hero-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ffffff30;margin-top:50px;padding-top:22px;font-size:.7rem;letter-spacing:.1em}.hero-foot a{letter-spacing:0;color:#dedede}.mobile-break{display:none}.directory{padding:80px 0 90px}.directory-heading{display:flex;justify-content:space-between;align-items:end;gap:24px}.directory-heading .eyebrow{color:#8c0747;margin-bottom:12px}.directory-heading>p{color:var(--text-dark);font-size:.9rem}.category-search{display:grid;grid-template-columns:auto minmax(160px,400px) 1fr;align-items:center;gap:16px;margin:38px 0 12px}.category-search label{font-size:.85rem}.category-search input{border:1px solid #858585;border-radius:var(--radius);padding:12px;background:transparent;width:100%;color:var(--ink)}#resultado-busca{font-size:.8rem}.category-list article{display:flex;align-items:center;gap:24px;border-bottom:1px solid #c8c8c4;padding:24px 0;scroll-margin-top:160px}.index{color:#666;font-size:.75rem;width:30px}h3{font-size:clamp(1.4rem,2.5vw,2rem)}article p{font-size:.8rem;color:var(--text-dark);margin-top:6px}.category-contact{margin-left:auto;min-height:44px;display:flex;align-items:center;gap:25px;font-size:.85rem}.category-contact span{font-size:1.4rem}.no-js{margin-top:24px}@media(min-width:1500px){.hero{min-height:760px}.hero-content{padding-top:85px}}@media(max-width:700px){.hero{min-height:720px}.hero-content{padding-top:42px}.hero :global(.hero-photo){object-position:63% center}.shade{background:linear-gradient(90deg,#111214f5,#1112149c),linear-gradient(0deg,#111214,transparent 50%)}h1{margin-top:24px;line-height:1.07}.mobile-break{display:block}.intro{font-size:.92rem;max-width:330px}.actions{display:grid;max-width:340px;gap:10px}.hero-foot{margin-top:38px;align-items:flex-start;gap:14px;flex-direction:column;font-size:.65rem}.directory{padding:52px 0}.directory-heading{display:block}.directory-heading>p{margin-top:20px}.category-search{display:block;margin-top:28px}.category-search label{display:block;margin-bottom:8px}#resultado-busca{min-height:24px;margin-top:8px}.category-list article{gap:10px}.index{width:20px}.category-contact{font-size:.75rem;gap:8px}article p{max-width:170px}}
</style>

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
<Layout title={`${produto.nome} em Lages | Smart Lion`} description={`Consulte ${produto.nome} com a Smart Lion em Lages. Escolha versão e cor e fale pelo WhatsApp.`}><div class="pagina-produto light"><div class="container"><a class="voltar" href="/catalogo">← Voltar ao catálogo</a><DetalhesProduto produto={produto}/></div></div></Layout>
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

## src/schemas/produto.ts

````typescript
import { z } from 'astro/zod';
import { loja } from '../config/loja';
const identificador = z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/);
const dataISO = z.string().refine(v => /^\d{4}-\d{2}-\d{2}$/.test(v) && Number.isFinite(Date.parse(`${v}T12:00:00Z`)) && new Date(`${v}T12:00:00Z`).toISOString().slice(0,10) === v, 'Use uma data válida AAAA-MM-DD.');
export const categoriaSchema = z.enum(['iphone','seminovos','ipad-mac-watch','xiaomi','casa-e-games','acessorios','perfumaria']);
export function criarSchemaProduto<T extends z.ZodType>(imagem: T) {
 return z.object({
  slug: identificador,
  nome: z.string().trim().min(1),
  categoria: categoriaSchema,
  subcategoria: z.string().nullable().default(null),
  condicao: z.enum(['novo','seminovo','encomenda']),
  condicaoFisica: z.enum(['novo','seminovo']).nullable().default(null),
  rascunho: z.boolean().default(true),
  confirmado: z.boolean().default(false),
  confirmadoEm: z.union([dataISO,z.literal('')]).default(''),
  selos: z.array(z.string().trim().min(1)).default([]),
  versoes: z.array(z.object({ id: identificador, rotulo: z.string().trim().min(1) })).default([]),
  cores: z.array(z.object({ id: identificador, rotulo: z.string().trim().min(1), hex: z.string().regex(/^#[0-9a-fA-F]{6}$/) })).default([]),
  disponibilidade: z.enum(['consultar','disponivel','sob-encomenda','esgotado']).default('consultar'),
  preco: z.number().positive().nullable().default(null),
  precoNota: z.object({ data: dataISO, condicao: z.string().trim().min(1), formaPagamento: z.string().trim().min(1) }).nullable().default(null),
  garantia: z.string().default(''),
  garantiaMeses: z.number().int().positive().nullable().default(null),
  saudeBateria: z.string().default(''),
  destaque: z.boolean().default(false),
  ordem: z.number().int().default(0),
  imagens: z.array(imagem).default([]),
  imagensAlt: z.array(z.string().trim().min(1)).default([]),
  descricaoCurta: z.string().default(''),
  sinonimos: z.array(z.string()).default([]),
  atualizadoEm: z.union([dataISO,z.literal('')]).default(''),
 }).superRefine((p,ctx) => {
  const erro = (path: string, message: string) => ctx.addIssue({code:'custom',path:[path],message});
  if ((p.preco !== null) !== (p.precoNota !== null)) erro('precoNota','Preço e nota com data, condição e pagamento precisam ser preenchidos juntos.');
  for (const chave of ['versoes','cores'] as const) if(new Set(p[chave].map(v=>v.id)).size !== p[chave].length) erro(chave,'IDs não podem se repetir.');
  if(p.imagens.length !== p.imagensAlt.length) erro('imagensAlt','Cada imagem deve ter um texto alternativo.');
  if(p.condicao === 'encomenda' && p.confirmado && !p.condicaoFisica) erro('condicaoFisica','Confirme se a encomenda é nova ou seminova.');
  if(p.condicao !== 'encomenda' && p.condicaoFisica && p.condicaoFisica !== p.condicao) erro('condicaoFisica','Condição física incompatível.');
  if((p.condicao === 'seminovo' || p.condicaoFisica === 'seminovo') && p.confirmado && p.garantiaMeses !== loja.garantiaSeminovosMeses) erro('garantiaMeses','Confirmar os 6 meses de garantia dos seminovos.');
  if(p.confirmado && !p.confirmadoEm) erro('confirmadoEm','Registre a data de confirmação da loja.');
  if(!p.rascunho && p.confirmado) {
   if(!p.imagens.length) erro('imagens','Adicione a foto real antes de publicar.');
   if(!p.descricaoCurta.trim()) erro('descricaoCurta','Preencha a descrição confirmada.');
  }
 });
}
// Validação independente do carregador Astro, também usada nos testes de dados brutos.
export const produtoJsonSchema = criarSchemaProduto(z.string().trim().min(1));

````

## src/scripts/busca.ts

````typescript
import { buscar, type ItemBusca } from '../lib/catalogo';
const raiz=document.querySelector<HTMLElement>('[data-catalogo]');
if(raiz){
 const form=raiz.querySelector<HTMLFormElement>('[data-busca-catalogo]')!;
 const input=form.querySelector<HTMLInputElement>('[name=q]')!;
 const select=form.querySelector<HTMLSelectElement>('[name=condicao]')!;
 const limpar=form.querySelector<HTMLButtonElement>('[data-limpar]')!;
 const contagem=raiz.querySelector<HTMLElement>('[data-contagem]')!;
 const vazio=raiz.querySelector<HTMLElement>('[data-catalogo-vazio]')!;
 const cards=[...raiz.querySelectorAll<HTMLElement>('[data-card-produto]')];
 const chips=[...document.querySelectorAll<HTMLAnchorElement>('[data-filtro-categoria]')];
 const categoriaBase=raiz.dataset.categoriaBase!;
 let categoria=categoriaBase, indice: ItemBusca[] | null=null;
 function carregarURL(){
  const params=new URLSearchParams(location.search);
  input.value=params.get('q')??'';
  select.value=['novo','seminovo'].includes(params.get('condicao')??'')?params.get('condicao')!:'';
  const filtro=params.get('categoria')??'';
  categoria=categoriaBase || (chips.some(c=>c.dataset.filtroCategoria===filtro)?filtro:'');
 }
 function filtrar(atualizarURL=true){
  if(!indice)return;
  const resultado=buscar(indice,input.value,categoria,select.value);
  const slugs=new Set(resultado.map(p=>p.slug));let visiveis=0;
  cards.forEach(card=>{card.hidden=!slugs.has(card.dataset.cardProduto!);if(!card.hidden)visiveis++});
  vazio.hidden=visiveis>0;
  contagem.textContent=`${visiveis} ${visiveis===1?'modelo encontrado':'modelos encontrados'}`;
  limpar.hidden=!(input.value || select.value || (!categoriaBase&&categoria));
  chips.forEach(c=>{if(c.dataset.filtroCategoria===categoria)c.setAttribute('aria-current','page');else c.removeAttribute('aria-current')});
  if(atualizarURL){
   const params=new URLSearchParams();
   if(input.value.trim())params.set('q',input.value.trim());
   if(select.value)params.set('condicao',select.value);
   if(categoria && !categoriaBase)params.set('categoria',categoria);
   history.replaceState(history.state,'',`${raiz!.dataset.rotaCatalogo}${params.size?`?${params}`:''}`);
  }
 }
 form.addEventListener('submit',event=>{event.preventDefault();filtrar()});
 input.addEventListener('input',()=>filtrar());select.addEventListener('change',()=>filtrar());
 limpar.addEventListener('click',()=>{input.value='';select.value='';categoria=categoriaBase;filtrar();input.focus()});
 if(!categoriaBase)chips.forEach(chip=>chip.addEventListener('click',event=>{
  if(!indice||event.button!==0||event.ctrlKey||event.metaKey||event.shiftKey||event.altKey)return;
  event.preventDefault();categoria=chip.dataset.filtroCategoria!;filtrar();
 }));
 window.addEventListener('popstate',()=>{if(location.pathname===raiz!.dataset.rotaCatalogo){carregarURL();filtrar(false)}});
 carregarURL();
 fetch('/busca.json').then(r=>{if(!r.ok)throw new Error('Índice indisponível');return r.json()}).then((dados: ItemBusca[])=>{indice=dados;filtrar(false)}).catch(()=>{contagem.textContent='A busca não carregou. Navegue pelas categorias ou consulte a equipe.'});
}

````

## src/scripts/modal-produto.ts

````typescript
import { iniciarProduto } from './produto';
import { caminhoProduto } from '../lib/catalogo';
const dialog=document.querySelector<HTMLDialogElement>('#modal-produto');
if(dialog && typeof dialog.showModal === 'function'){
 const conteudo=dialog.querySelector<HTMLElement>('[data-modal-conteudo]')!;
 const feedback=document.querySelector<HTMLElement>('[data-modal-feedback]')!;
 const tituloOriginal=document.title;
 let inicio: HTMLElement | null=null;
 let sessao: ReturnType<typeof iniciarProduto> | undefined;
 let pedido: AbortController | undefined;
 let sequencia=0;
 const cache=new Map<string,HTMLElement>();
 function fechar(){
  pedido?.abort();sequencia++;
  if(history.state?.smartlionModal)history.back();
  else limpar();
 }
 function limpar(){
  sessao?.destruir();sessao=undefined;
  if(dialog!.open)dialog!.close();
  document.title=tituloOriginal;conteudo.replaceChildren();inicio?.focus({preventScroll:true});
 }
 async function abrir(href:string, registrar:boolean){
  const url=new URL(href,location.origin);
  if(url.origin!==location.origin)return;
  pedido?.abort();pedido=new AbortController();const atual=++sequencia;
  feedback.textContent='Carregando opções do produto.';
  try{
   let detalhe=cache.get(url.pathname)?.cloneNode(true) as HTMLElement | undefined;
   if(!detalhe){
    const resposta=await fetch(url.pathname,{signal:pedido.signal});
    if(!resposta.ok)throw new Error('Produto indisponível.');
    const doc=new DOMParser().parseFromString(await resposta.text(),'text/html');
    detalhe=doc.querySelector<HTMLElement>('[data-produto-detalhes]') ?? undefined;
    if(!detalhe)throw new Error('Página sem produto.');
    cache.set(url.pathname,detalhe.cloneNode(true) as HTMLElement);
   }
   if(atual!==sequencia)return;
   sessao?.destruir();
   const h1=detalhe.querySelector<HTMLElement>('[data-titulo-produto]')!;
   const h2=document.createElement('h2');h2.textContent=h1.textContent;h2.id='modal-titulo';h1.replaceWith(h2);
   conteudo.replaceChildren(detalhe);
   if(registrar)history.pushState({smartlionModal:true},'',url.pathname+url.search);
   document.title=`${h2.textContent} | Smart Lion`;
   sessao=iniciarProduto(detalhe,escolhas=>history.replaceState(history.state,'',caminhoProduto(JSON.parse(detalhe!.dataset.produto!).slug,escolhas)));
   if(!dialog!.open)dialog!.showModal();
   dialog!.querySelector<HTMLButtonElement>('[data-fechar-modal]')!.focus();
   feedback.textContent='';
  }catch(error){
   if(error instanceof Error && error.name==='AbortError')return;
   feedback.textContent='Não foi possível abrir as opções aqui. Abrindo a página do produto.';
   location.assign(url.href);
  }
 }
 document.addEventListener('click',event=>{
  const alvo=(event.target as Element).closest<HTMLAnchorElement>('a[data-abrir-produto]');
  if(!alvo || event.button!==0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey || alvo.target==='_blank')return;
  event.preventDefault();inicio=alvo;void abrir(alvo.href,true);
 });
 dialog.querySelector('[data-fechar-modal]')!.addEventListener('click',fechar);
 dialog.addEventListener('cancel',event=>{event.preventDefault();fechar()});
 window.addEventListener('popstate',()=>{
  pedido?.abort();sequencia++;
  if(history.state?.smartlionModal)void abrir(location.href,false);
  else limpar();
 });
}

````

## src/scripts/produto.ts

````typescript
import { consultaProduto, resolverEscolhas, urlProduto, type DadosConsulta, type Escolhas } from '../lib/catalogo';
export function iniciarProduto(raiz: HTMLElement, aoAlterar?: (escolhas: Escolhas)=>void) {
 const p: DadosConsulta=JSON.parse(raiz.dataset.produto!);
 const origem=raiz.dataset.origem!;
 const inputs=[...raiz.querySelectorAll<HTMLInputElement>('[data-escolha]')];
 const consulta=raiz.querySelector<HTMLAnchorElement>('[data-consulta-produto]')!;
 const feedback=raiz.querySelector<HTMLElement>('[data-feedback-produto]')!;
 const campoLink=raiz.querySelector<HTMLInputElement>('[data-link-copia]')!;
 const compartilhar=raiz.querySelector<HTMLButtonElement>('[data-compartilhar]')!;
 let escolhas: Escolhas={versao:'',cor:''};
 function desenhar(){
  const versao=p.versoes.find(v=>v.id===escolhas.versao), cor=p.cores.find(c=>c.id===escolhas.cor);
  inputs.forEach(i=>i.checked=i.value===escolhas[i.dataset.escolha as keyof Escolhas]);
  raiz.querySelector('[data-resumo-versao]')!.textContent=versao?.rotulo ?? (p.versoes.length ? 'A escolher' : 'Consultar a equipe');
  raiz.querySelector('[data-resumo-cor]')!.textContent=cor?.rotulo ?? (p.cores.length ? 'A escolher' : 'Consultar a equipe');
  consulta.href=consultaProduto(p,origem,escolhas);
  campoLink.value=urlProduto(p.slug,origem,escolhas);
 }
 function aplicarURL(){
  const params=new URLSearchParams(location.search);
  escolhas=resolverEscolhas(p,params);desenhar();
  const invalida=(params.has('versao')&&!escolhas.versao)||(params.has('cor')&&!escolhas.cor);
  if(invalida)feedback.textContent='Uma opção do link não está cadastrada. Escolha novamente ou consulte a equipe.';
  else feedback.textContent=p.disponibilidade==='esgotado'?'Peça à equipe para avisar quando chegar.':escolhas.versao&&escolhas.cor?'Opções selecionadas. Confirme disponibilidade com a equipe.':'Selecione versão e cor para incluir na consulta.';
 }
 function mudar(){
  const params=new URLSearchParams();
  inputs.filter(i=>i.checked).forEach(i=>params.set(i.dataset.escolha!,i.value));
  escolhas=resolverEscolhas(p,params);desenhar();aoAlterar?.(escolhas);
  feedback.textContent=p.disponibilidade==='esgotado'?'Peça à equipe para avisar quando chegar.':escolhas.versao&&escolhas.cor?'Opções selecionadas. Confirme disponibilidade com a equipe.':'Você pode consultar agora ou selecionar versão e cor.';
 }
 async function partilhar(){
  const url=campoLink.value;
  if(navigator.share){
   try{await navigator.share({title:p.nome,url});return;}catch(error){if(error instanceof Error && error.name==='AbortError')return;}
  }
  try{await navigator.clipboard.writeText(url);feedback.textContent='Link copiado.';}
  catch{raiz.querySelector<HTMLDetailsElement>('[data-copia]')!.open=true;campoLink.focus();campoLink.select();feedback.textContent='Copie o link selecionado.';}
 }
 inputs.forEach(i=>i.addEventListener('change',mudar));
 compartilhar.hidden=false;compartilhar.addEventListener('click',partilhar);aplicarURL();
 return {aplicarURL,destruir:()=>{inputs.forEach(i=>i.removeEventListener('change',mudar));compartilhar.removeEventListener('click',partilhar)}};
}

````

## src/styles/global.css

````css
*{box-sizing:border-box}html{scroll-padding-top:160px}body{margin:0;background:var(--ink);color:var(--white);font-family:var(--font-body);line-height:1.6;-webkit-font-smoothing:antialiased}h1,h2,h3,p{margin:0}h1,h2,h3{font-family:var(--font-heading);font-weight:600;line-height:1.08;letter-spacing:-.035em}h1{font-size:var(--text-h1)}h2{font-size:var(--text-h2)}a{color:inherit;text-decoration:none}button,input{font:inherit}button,a,input{touch-action:manipulation}button{cursor:pointer}img{display:block;max-width:100%;height:auto}a:hover{text-decoration:underline;text-underline-offset:5px}:focus-visible{outline:3px solid var(--accent-light);outline-offset:5px}.light :focus-visible{outline-color:#a50050}.container{width:min(var(--container),calc(100% - 96px));margin-inline:auto}.eyebrow{font-size:.75rem;letter-spacing:.16em;text-transform:uppercase}.button{display:inline-flex;justify-content:center;align-items:center;gap:.65rem;min-height:48px;padding:.8rem 1.3rem;border:1px solid currentColor;border-radius:var(--radius);font-weight:600}.button:hover{text-decoration:none;filter:brightness(.95)}.button-light{background:var(--surface);color:var(--ink);border-color:var(--surface)}.button-wa{background:var(--whatsapp);color:#082b16;border-color:var(--whatsapp)}.skip{position:fixed;left:1rem;top:-100px;background:white;color:black;padding:1rem;z-index:100}.skip:focus{top:1rem}.light{background:var(--surface);color:var(--ink)}.tabular{font-variant-numeric:tabular-nums}[hidden]{display:none!important}@media(max-width:700px){.container{width:calc(100% - 40px)}html{scroll-padding-top:140px}}@media(prefers-reduced-motion:reduce){*,*::before,*::after{animation:none!important;transition:none!important;scroll-behavior:auto!important}}

.sr-only{position:absolute;width:1px;height:1px;overflow:hidden;clip-path:inset(50%);white-space:nowrap}

````

## src/styles/produto.css

````css
.produto-detalhes{color:var(--ink);background:var(--surface);padding:clamp(20px,4vw,48px);display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,52px)}
.produto-detalhes h1,.produto-detalhes h2{font-size:clamp(2rem,3.4vw,3rem);line-height:1.1;margin:12px 0 20px}.produto-detalhes .resposta{color:#414246;font-size:.9rem;line-height:1.65}.produto-detalhes .aviso-rascunho{padding:10px 12px;background:#fff0c7;color:#633a00;font-size:.8rem;margin:14px 0}.produto-detalhes .garantia{font-size:.85rem;margin:16px 0;color:#414246}.produto-detalhes fieldset{border:0;padding:0;margin:24px 0}.produto-detalhes legend{font:600 .9rem var(--font-heading);margin-bottom:10px}.produto-detalhes .escolhas{display:flex;flex-wrap:wrap;gap:8px}.produto-detalhes label.opcao{position:relative;display:flex;align-items:center;gap:8px;min-height:46px;border:1px solid #868780;padding:10px 12px;cursor:pointer;font-size:.8rem}.produto-detalhes label.opcao:has(input:checked){border-color:#a50050;box-shadow:inset 0 0 0 1px #a50050;background:#fce5f0}.produto-detalhes label.opcao:has(input:focus-visible){outline:3px solid #a50050;outline-offset:3px}.produto-detalhes input[type=radio]{accent-color:#a50050;width:16px;height:16px;margin:0}.produto-detalhes .amostra-cor{display:block;width:15px;height:15px;background:var(--cor);border:1px solid #666;border-radius:50%}.produto-detalhes .resumo{margin:24px 0;display:grid;grid-template-columns:auto 1fr;gap:8px 16px;border-block:1px solid #ccc;padding:18px 0;font-size:.85rem}.produto-detalhes dt{color:#565752}.produto-detalhes dd{margin:0;overflow-wrap:anywhere}.produto-detalhes .preco-nota{font-size:.75rem;margin:8px 0 16px}.produto-detalhes .consulta{width:100%;text-align:center}.produto-detalhes .nota{font-size:.75rem;color:#50514c;margin:12px 0}.produto-detalhes .feedback{font-size:.8rem;min-height:1.6em;margin:10px 0}.produto-detalhes .compartilhar{background:transparent;border:1px solid #777;min-height:44px;padding:8px 16px;color:var(--ink)}.produto-detalhes details{margin-top:14px;font-size:.8rem}.produto-detalhes summary{cursor:pointer;min-height:40px;display:list-item}.produto-detalhes .link-copia{width:100%;padding:12px;border:1px solid #777;background:white;color:var(--ink);font-size:.8rem}.produto-detalhes .fotos{display:grid;gap:12px;align-content:start}.produto-detalhes .foto-extra{max-width:240px}.produto-detalhes :focus-visible{outline-color:#a50050}@media(max-width:700px){.produto-detalhes{grid-template-columns:1fr}.produto-detalhes .fotos{max-width:420px;width:100%;margin-inline:auto}.produto-detalhes h1,.produto-detalhes h2{font-size:2rem}.produto-detalhes .resumo{grid-template-columns:80px 1fr}}

````

## tests/catalogo.test.ts

````typescript
import { describe, expect, it } from 'vitest';
import { readFileSync, readdirSync } from 'node:fs';
import { produtoJsonSchema } from '../src/schemas/produto';
import { buscar, caminhoProduto, categoriasProduto, consultaProduto, criarIndice, formatarPreco, resolverEscolhas, urlProduto, visivel } from '../src/lib/catalogo';
const pasta=new URL('../src/content/produtos/',import.meta.url);
const brutos=readdirSync(pasta).filter(f=>f.endsWith('.json')).map(f=>JSON.parse(readFileSync(new URL(f,pasta),'utf8')));
const rascunhos=brutos.map(p=>produtoJsonSchema.parse(p));
// Imagens vazias nas fixtures: nenhuma destas entidades é publicada.
const exemplo=rascunhos[0]!;
const exemploConfirmado={...brutos[0],rascunho:false,confirmado:true,confirmadoEm:'2026-10-28',imagens:['../../assets/produtos/foto-real.jpg'],imagensAlt:['Descrição da foto real'],descricaoCurta:'Descrição confirmada de teste.'};
describe('Schema e publicação',()=>{
 it('os cinco arquivos são válidos e permanecem rascunhos sem confirmação',()=>{expect(rascunhos).toHaveLength(5);expect(rascunhos.every(p=>p.rascunho&&!p.confirmado&&!p.confirmadoEm)).toBe(true)});
 it('exclui todos os exemplos na produção',()=>expect(rascunhos.filter(p=>visivel(p,false))).toEqual([]));
 it('permite conferir os cinco slots somente em desenvolvimento',()=>expect(rascunhos.filter(p=>visivel(p,true))).toHaveLength(5));
 it.each([{rascunho:true,confirmado:true,confirmadoEm:'2026-10-28'},{rascunho:false,confirmado:false,confirmadoEm:''},{rascunho:false,confirmado:true,confirmadoEm:''}])('não publica estado incompleto %j',p=>expect(visivel(p,false)).toBe(false));
 it('publica um cadastro confirmado e sem rascunho',()=>{const p=produtoJsonSchema.parse(exemploConfirmado);expect(visivel(p,false)).toBe(true)});
 it('por padrão um arquivo novo não é publicado',()=>{const {rascunho,confirmado,confirmadoEm,...p}=brutos[0];const validado=produtoJsonSchema.parse(p);expect(visivel(validado,false)).toBe(false)});
 it('rejeita confirmação sem data',()=>expect(produtoJsonSchema.safeParse({...exemploConfirmado,confirmadoEm:''}).success).toBe(false));
 it.each(['2026-02-30','28/10/2026','2026-13-01'])('rejeita data inválida %s',data=>expect(produtoJsonSchema.safeParse({...exemploConfirmado,confirmadoEm:data}).success).toBe(false));
 it('não publica sem foto',()=>expect(produtoJsonSchema.safeParse({...exemploConfirmado,imagens:[],imagensAlt:[]}).success).toBe(false));
 it('rejeita imagem sem alt correspondente',()=>expect(produtoJsonSchema.safeParse({...exemploConfirmado,imagensAlt:[]}).success).toBe(false));
 it('rejeita IDs de versão duplicados',()=>expect(produtoJsonSchema.safeParse({...brutos[0],versoes:[{id:'a',rotulo:'A'},{id:'a',rotulo:'B'}]}).success).toBe(false));
 it('rejeita IDs de cor duplicados',()=>expect(produtoJsonSchema.safeParse({...brutos[0],cores:[{id:'a',rotulo:'A',hex:'#000000'},{id:'a',rotulo:'B',hex:'#ffffff'}]}).success).toBe(false));
 it('rejeita slug com caminho arbitrário',()=>expect(produtoJsonSchema.safeParse({...brutos[0],slug:'../../segredo'}).success).toBe(false));
 it('encomenda confirmada exige condição física',()=>expect(produtoJsonSchema.safeParse({...exemploConfirmado,condicao:'encomenda',condicaoFisica:null}).success).toBe(false));
 it('não aceita condições físicas contraditórias',()=>expect(produtoJsonSchema.safeParse({...brutos[0],condicao:'novo',condicaoFisica:'seminovo'}).success).toBe(false));
 it('seminovo confirmado exige garantia da loja',()=>expect(produtoJsonSchema.safeParse({...exemploConfirmado,condicao:'seminovo',garantiaMeses:null}).success).toBe(false));
});
describe('Preço sob consulta',()=>{
 const nota={data:'2026-10-28',condicao:'Condição de teste',formaPagamento:'Pagamento de teste'};
 it('mantém todos os exemplos sem preço',()=>expect(rascunhos.every(p=>p.preco===null&&p.precoNota===null)).toBe(true));
 it('usa Sob consulta quando não existe preço',()=>expect(formatarPreco(exemplo)).toBe('Sob consulta'));
 it('não exibe preço sem nota',()=>expect(formatarPreco({preco:100,precoNota:null})).toBe('Sob consulta'));
 it('rejeita preço sem nota no schema',()=>expect(produtoJsonSchema.safeParse({...brutos[0],preco:100}).success).toBe(false));
 it('rejeita nota sem preço',()=>expect(produtoJsonSchema.safeParse({...brutos[0],precoNota:nota}).success).toBe(false));
 it('rejeita nota sem data',()=>expect(produtoJsonSchema.safeParse({...brutos[0],preco:100,precoNota:{...nota,data:''}}).success).toBe(false));
 it('aceita preço acompanhado de condições completas',()=>expect(produtoJsonSchema.safeParse({...brutos[0],preco:100,precoNota:nota}).success).toBe(true));
 it('formata preço com nota',()=>expect(formatarPreco({preco:100,precoNota:nota}).replace(/\s/g,' ')).toBe('R$ 100,00'));
});
describe('Busca e categorias',()=>{
 const indice=criarIndice(rascunhos);
 it('busca 17 pro max por palavras',()=>expect(buscar(indice,'17 pro max').map(p=>p.slug)).toEqual(['rascunho-iphone-17-pro-max']));
 it('busca independente de ordem, acentos e caixa',()=>expect(buscar(indice,'PRÓ 17 MAX')).toEqual(buscar(indice,'17 pro max')));
 it('encontra tablet por sinônimo',()=>expect(buscar(indice,'tablet').map(p=>p.slug)).toEqual(['rascunho-ipad']));
 it('encontra seminovo',()=>expect(buscar(indice,'seminovo')).toHaveLength(1));
 it('encontra bateria nos termos de demonstração',()=>expect(buscar(indice,'bateria')).toHaveLength(1));
 it('inclui iPhone seminovo em ambas as categorias',()=>expect(categoriasProduto(rascunhos.find(p=>p.condicao==='seminovo')!)).toEqual(['iphone','seminovos']));
 it('combina busca, categoria e condição',()=>expect(buscar(indice,'iphone','iphone','seminovo')).toHaveLength(1));
 it('não inventa resultado quando não há correspondência',()=>expect(buscar(indice,'produto inexistente')).toEqual([]));
 it('consulta vazia devolve todo o índice',()=>expect(buscar(indice,'   ')).toHaveLength(5));
 it('o índice de produção fica vazio com os rascunhos atuais',()=>expect(criarIndice((rascunhos).filter(p=>visivel(p,false)))).toEqual([]));
});
describe('URLs, seleções e WhatsApp',()=>{
 const p=rascunhos.find(p=>p.slug==='rascunho-iphone-17-pro-max')!;
 const escolhas={versao:'exemplo-a',cor:'exemplo-clara'};
 const texto=(href:string)=>new URL(href).searchParams.get('text');
 it('gera uma URL compartilhável por produto',()=>expect(caminhoProduto(p.slug,escolhas)).toBe(`/produto/${p.slug}?versao=exemplo-a&cor=exemplo-clara`));
 it('usa SITE_URL fornecida como origem',()=>expect(urlProduto(p.slug,'https://loja.example',escolhas)).toBe(`https://loja.example/produto/${p.slug}?versao=exemplo-a&cor=exemplo-clara`));
 it('restaura as duas opções válidas',()=>expect(resolverEscolhas(p,new URLSearchParams(escolhas))).toEqual(escolhas));
 it('descarta opções inválidas sem escolher outra automaticamente',()=>expect(resolverEscolhas(p,new URLSearchParams('versao=invalida&cor=exemplo-clara'))).toEqual({versao:'',cor:'exemplo-clara'}));
 it('sem escolhas usa a mensagem exata de atalho',()=>expect(texto(consultaProduto(p,'https://loja.example'))).toBe(`Olá, Smart Lion! Vi o *${p.nome}* no site. Quais versões e cores vocês têm e qual o valor?\nhttps://loja.example/produto/${p.slug}`));
 it('inclui versão, cor, condição e URL na mensagem',()=>expect(texto(consultaProduto(p,'https://loja.example',escolhas))).toBe(`Olá, Smart Lion! Vi no site e tenho interesse:\n*${p.nome}*\nVersão: Versão A · demonstração\nCor: Cor clara · demonstração\nCondição: novo\nPode me passar a disponibilidade e o valor?\nhttps://loja.example/produto/${p.slug}?versao=exemplo-a&cor=exemplo-clara`));
 it('esgotado usa avise-me mesmo com escolhas',()=>expect(texto(consultaProduto({...p,disponibilidade:'esgotado'},'https://loja.example',escolhas))).toBe(`Olá, Smart Lion! Vi o *${p.nome}* no site. Me avisam quando chegar?`));
 it('encomenda sem condição física não assume novo',()=>expect(texto(consultaProduto({...p,condicao:'encomenda',condicaoFisica:null},'https://loja.example',escolhas))).not.toContain('Condição: novo'));
 it('perfumaria usa a mensagem específica',()=>expect(texto(consultaProduto({...p,categoria:'perfumaria'},'https://loja.example'))).toBe(`Olá, Smart Lion! Vi o perfume *${p.nome}* no site. Tem disponível?`));
});

````