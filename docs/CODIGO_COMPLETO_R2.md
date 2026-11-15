# Código completo — R2

## Árvore de arquivos alterados/criados

- docs/PENDENCIAS.md
- docs/REMODELAGEM_R2.md
- docs/smartlion-r2-home.jpg
- scripts/verificar-avaliacoes.mjs
- scripts/verificar-home.mjs
- src/components/Header.astro
- src/components/PendenciasDev.astro
- src/components/home/InstagramHome.astro
- src/components/home/LojaHome.astro
- src/config/loja.ts
- src/pages/assistencia-tecnica/index.astro
- src/pages/catalogo/index.astro
- src/pages/index.astro

Nenhum arquivo removido. Captura em docs/smartlion-r2-home.jpg.


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

## Remodelagem R2 — 02/11/2026
- Instagram exibe cinco imagens reais; sexta imagem e URLs dos posts pendentes. Links levam ao perfil com rótulo explícito.
- Fotos próprias de iPhone, Apple, Xiaomi, perfumaria, seminovos, fachada e atendimento pendentes. Categorias sem fotos usam tipografia; avisos só em DEV.
- Tour/história usam destinos atuais /como-chegar e /sobre até R3; produtos permanecem em /catalogo até R4.
- Prévia cronológica está na home; centralizar em historia.json na R3. Não confundir anúncio IRP com ingresso contratual ou divulgação de turma com inauguração.
- Lighthouse/axe, 390/1440px exatos e Core Web Vitals ainda não medidos.

````


## docs/REMODELAGEM_R2.md

````md
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

````


## scripts/verificar-avaliacoes.mjs

````mjs
import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
const dados=JSON.parse(readFileSync('src/data/avaliacoes.json','utf8'));
const pagina=readFileSync('dist/avaliacoes/index.html','utf8');
const home=readFileSync('dist/index.html','utf8');
const escapar=s=>s.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;');
assert.equal((pagina.match(/data-avaliacao=/g)||[]).length,dados.avaliacoes.length);
const idsHome=[...home.matchAll(/data-avaliacao="([^"]+)"/g)].map(m=>m[1]);
assert(idsHome.length>=3&&idsHome.length<=6);
assert.equal(new Set(idsHome).size,idsHome.length);
for(const id of idsHome){const a=dados.avaliacoes.find(a=>a.id===id);assert(a?.destaqueHome,`Destaque não confirmado: ${id}`);assert(home.includes(`>${escapar(a.texto)}</p>`),`Citação alterada: ${id}`);}
for(const a of dados.avaliacoes){
 assert(pagina.includes(`>${escapar(a.texto)}</p>`),`Texto modificado: ${a.id}`);
 assert(pagina.includes(`>${escapar(a.autorExibicao)}</strong>`),`Autor: ${a.id}`);

}
for(const html of [pagina,home]){
 assert(!html.includes('AggregateRating')&&!html.includes('"@type":"Review"'));
 assert(!/<iframe/i.test(html));
 assert(!html.includes('negativaParaResponder'));
}
assert.equal((pagina.match(/name="nota-google"/g)||[]).length,5);
assert(pagina.includes('1 estrela: 2'));
console.log(`${dados.avaliacoes.length} textos literais; ${dados.avaliacoes.filter(a=>a.destaqueHome).length} destaques preservados; ${idsHome.length} citações na home; 5 notas; sem iframe ou schema de avaliações.`);

````


## scripts/verificar-home.mjs

````mjs
import { readFileSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync('dist/index.html','utf8');
const ordem=['id="abertura"','id="manifesto"','id="ambiente"','id="atividades"','id="vitrine"','id="depoimentos"','id="historia"','id="instagram"','id="visite-nos"','id="contato"'];
let anterior=-1;
for(const item of ordem){const pos=html.indexOf(item);assert(pos>anterior,`Seção ausente ou fora de ordem: ${item}`);anterior=pos;}
assert(!html.includes('<iframe'));
assert.equal((html.match(/fetchpriority="high"/g)||[]).length,1);
assert.equal((html.match(/<dialog/g)||[]).length,0);
assert.equal((html.match(/data-texto-avaliacao/g)||[]).length,3);
for(const img of html.matchAll(/<img\b([^>]+)>/g)){
 assert(/width="\d+"/.test(img[1])&&/height="\d+"/.test(img[1]),'Imagem sem dimensões');
 assert(/\balt(?:=|\s|$)/.test(img[1]));
}
assert(!html.includes('id="parcelamento"'));
assert(readFileSync('dist/catalogo/index.html','utf8').includes('sujeito a análise de crédito'));
assert(!html.includes('PENDENTE'));
assert(!html.includes('rascunho-'));
console.log('Ordem dos 10 blocos institucionais, 3 citações, sem modal comercial, dimensões de imagens, prioridade única e mapa sem iframe inicial: OK.');
const avifs=[...html.matchAll(/srcset="([^"]+)"/g)].flatMap(m=>m[1].split(',').map(s=>s.trim().split(' ')[0])).filter(s=>s.endsWith('.avif'));
const tamanhos=[...new Set(avifs)].map(src=>({src,bytes:statSync('dist'+src).size}));
console.log(JSON.stringify({avifVariantes:tamanhos.length,menorBytes:Math.min(...tamanhos.map(i=>i.bytes)),maiorBytes:Math.max(...tamanhos.map(i=>i.bytes))}));

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
  <a class="brand" href="/" aria-label={`${loja.nome} — início`}><Image src={logo} alt="" width={58} height={58}/><span>{loja.nome.toUpperCase()}<small>{loja.endereco.cidade.toUpperCase()} · {loja.endereco.uf}</small></span></a>
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


## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Remodelagem R2</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````


## src/components/home/InstagramHome.astro

````astro
---
import { Picture } from 'astro:assets';
import { loja } from '../../config/loja';
import capas from '../../assets/home/capas.jpg';
import laboratorio from '../../assets/home/laboratorio.jpg';
import bancada from '../../assets/home/bancada.jpg';
import fones from '../../assets/home/fones.jpg';
import caixas from '../../assets/home/caixas-de-som.jpg';
const imagens={capas:{src:capas,alt:'Capas de celular com textura de couro em três cores'},laboratorio:{src:laboratorio,alt:'Bancadas individuais no laboratório da Smart Lion'},bancada:{src:bancada,alt:'Microscópio e ferramentas na bancada de manutenção'},fones:{src:fones,alt:'Fone de ouvido azul fotografado na loja Smart Lion'},'caixas-de-som':{src:caixas,alt:'Caixa de som portátil fotografada no balcão da Smart Lion'}};
---
<section id="instagram" class="instagram-home light" aria-labelledby="titulo-instagram"><div class="container"><div class="cabecalho"><div><p class="eyebrow">De perto, no seu feed</p><h2 id="titulo-instagram">Acompanhe a Smart Lion.</h2><p>{loja.instagram.nome} · {loja.instagram.seguidoresExibicao} seguidores em <time datetime={loja.instagram.seguidoresEm}>28/10/2026</time>.</p></div><a class="button" href={loja.instagram.url}>Seguir no Instagram ↗</a></div><div class="fotos">{loja.instagramPosts.map(post=>{const img=imagens[post.imagem as keyof typeof imagens];return img ? <a href={post.url || loja.instagram.url} aria-label={`${img.alt}. ${post.url ? 'Ver publicação' : 'Ver perfil da Smart Lion'} no Instagram`}><Picture src={img.src} formats={['avif','webp']} widths={[240,400,600]} sizes="(max-width:600px) 45vw, 240px" alt={img.alt} loading="lazy"/><span>{post.url ? 'Ver publicação' : 'Ver perfil'} ↗</span></a> : import.meta.env.DEV && <div class="pendente">PENDENTE<br/>Foto e link do post</div>})}</div>{import.meta.env.DEV&&<p class="pendencia">PENDENTE: links das publicações e sexta imagem. Sem links confirmados, as fotos levam ao perfil.</p>}</div></section>
<style>.instagram-home{padding:var(--space-chapter) 0;border-top:1px solid #c7c2b9}.cabecalho{display:flex;justify-content:space-between;align-items:center;gap:30px}.eyebrow{color:var(--text-dark);margin-bottom:16px}h2{font-size:clamp(1.8rem,3.3vw,3.3rem)}h2+p{margin-top:18px}.cabecalho>a{flex-shrink:0}.fotos{display:grid;grid-auto-flow:column;grid-auto-columns:240px;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;margin-top:32px;padding-bottom:16px}.fotos a{scroll-snap-align:start}.fotos :global(img){width:100%;height:300px;object-fit:cover}.fotos span{display:block;padding:12px 0;font-size:.8rem}.pendente{background:#e4e4df;padding:36px;min-height:300px}.pendencia{font-size:.8rem;margin-top:18px}@media(max-width:800px){.cabecalho{display:block}.cabecalho>a{margin-top:24px}.fotos{grid-auto-columns:210px}}</style>

````


## src/components/home/LojaHome.astro

````astro
---
import { Picture } from 'astro:assets';
import foto from '../../assets/loja.jpg';
import { loja, enderecoCompleto } from '../../config/loja';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import { formatarPeriodos } from '../../lib/horario';
const coordenadas=`${loja.coordenadas.latitude},${loja.coordenadas.longitude}`;
const mapa=`https://www.google.com/maps?q=${encodeURIComponent(coordenadas)}&z=17&output=embed`;
const waze=`https://www.waze.com/ul?ll=${encodeURIComponent(coordenadas)}&navigate=yes`;
---
<section class="loja-home light" id="visite-nos" aria-labelledby="titulo-loja"><div class="container"><span id="loja" aria-hidden="true"></span><div class="cabecalho"><div><p class="eyebrow">Tem endereço. Tem gente.</p><h2 id="titulo-loja">Visite-nos.<br/>Vamos conversar.</h2></div><address>{enderecoCompleto}<br/>CEP {loja.endereco.cep}</address></div><Picture src={foto} formats={['avif','webp']} widths={[480,800,1280]} sizes="100vw" alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" loading="lazy"/>{import.meta.env.DEV&&!loja.fotoFachada&&<p class="pendente">PROVISÓRIO: foto do interior; aguardando foto da fachada.</p>}<div class="detalhes"><div><h3>Quando visitar</h3><table><caption class="sr-only">Horário da loja em Lages</caption><tbody>{loja.horario.semana.map(h=><tr><th scope="row">{h.rotulo}</th><td>{formatarPeriodos(h.periodos)}</td></tr>)}</tbody></table><p>Nos feriados, confirme o atendimento com a equipe.</p><div class="rotas"><a class="button" href={loja.googleMaps}>Google Maps ↗</a><a class="button" href={waze}>Waze ↗</a></div><div class="contatos"><BotaoWhatsApp rotulo="Fale conosco no WhatsApp"/><a href={`tel:${loja.telefone.numero}`}>Telefone: {loja.telefone.exibicao}</a></div></div><div class="mapa" data-mapa={mapa}><h3>Encontre a Smart Lion</h3><p>Ao carregar o mapa, seu navegador se conecta ao Google, que pode usar cookies. Você pode continuar com o endereço e os links de rota sem carregar o mapa aqui.</p><div class="consentimento" hidden><button class="button" type="button" data-aceitar-mapa>Carregar mapa do Google</button><button class="button" type="button" data-recusar-mapa>Continuar sem mapa</button></div><p class="status-mapa" role="status"></p><div class="mapa-conteudo"></div><noscript><p>Use os links Google Maps ou Waze para abrir a rota.</p></noscript></div></div></div></section>
<script>import '../../scripts/mapa';</script>
<style>.loja-home{padding:var(--space-chapter) 0;border-top:1px solid #c7c2b9}.contatos{display:grid;justify-items:start;gap:16px;margin-top:24px}.contatos>a{min-height:44px;display:flex;align-items:center}.pendente{background:#fff0c7;color:#633a00;padding:12px;font-size:.8rem;margin-top:16px}.cabecalho{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:36px}.eyebrow{color:var(--text-dark);margin-bottom:18px}address{font-style:normal;line-height:1.8}.container>:global(picture img){width:100%;height:380px;object-fit:cover}.detalhes{display:grid;grid-template-columns:1fr 1.2fr;gap:64px;margin-top:36px}h3{font-size:1.5rem;margin-bottom:20px}table{border-collapse:collapse;font-size:.95rem}th{text-align:left;font-weight:400;padding:8px 25px 8px 0}td{font-variant-numeric:tabular-nums}.detalhes p{font-size:.8rem;color:#414246;margin:16px 0}.rotas,.consentimento{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.button{background:transparent;color:#111214;border:1px solid #747579;font-size:.85rem}.consentimento .button{flex:1;min-width:180px;min-height:66px}.mapa :global(iframe){display:block;width:100%;height:320px;border:0}.status-mapa:empty{display:none}@media(max-width:800px){.cabecalho{display:block}address{margin-top:22px}.detalhes{grid-template-columns:1fr;gap:38px}.container>:global(picture img){height:260px}}</style>

````


## src/config/loja.ts

````ts
import type { Agenda } from '../lib/horario';

export const loja = {
  nome: 'Smart Lion',
  endereco: { rua: 'Rua Hercílio Luz', numero: '364', bairro: 'Centro', cidade: 'Lages', uf: 'SC', cep: '88501-010' },
  telefone: { numero: '+5549998182996', exibicao: '(49) 99818-2996' },
  whatsapp: { numero: '5549999268930', exibicao: '(49) 99926-8930' },
  instagram: { nome: '@smartlion.sc', url: 'https://www.instagram.com/smartlion.sc/', seguidoresExibicao: '10,5 mil', seguidoresEm: '2026-10-28' },
  googleMaps: 'https://www.google.com/maps?cid=8801259008937640586',
  horario: {
    fuso: 'America/Sao_Paulo',
    semana: [
      { dias: [1, 2, 3, 4, 5], rotulo: 'Segunda a sexta', periodos: [[540, 720], [810, 1110]] },
      { dias: [6], rotulo: 'Sábado', periodos: [[540, 780]] },
      { dias: [0], rotulo: 'Domingo', periodos: [] },
    ],
    // PENDENTE: adicionar somente datas e horários confirmados pela loja.
    excecoes: [],
  } satisfies Agenda,
  coordenadas: { latitude: -27.8153637, longitude: -50.3290069 },
  aceitaUsadoNaTroca: null as boolean | null,
  garantiaSeminovosMeses: 6,
  cnpj: '', razaoSocial: '', linkAvaliar: '', garantiaNovos: '', garantiaReparos: '',
  termoSeminovos: '', contatoPrivacidade: '',
  privacidade: { responsavel: '', prazoRetencao: '', operadores: '', basesLegais: '' },
  confirmacaoIRP: '',
  irpDescricao: 'Assistência técnica participante do programa Independent Repair Provider (IRP) da Apple',
  parcelamento: { cartaoAte: 24, boletoAte: 36, fonteEm: '2026-07-16', condicoesVigentes: '' },
  servicos: ['Troca de tela', 'Troca de bateria', 'Tampa traseira', 'Reparos de placa'],
  fotoFachada: '',
  instagramPosts: [
    { imagem: 'capas', url: '' }, { imagem: 'laboratorio', url: '' },
    { imagem: 'bancada', url: '' }, { imagem: 'fones', url: '' },
    { imagem: 'caixas-de-som', url: '' }, { imagem: '', url: '' },
  ],
  curso: { cargaHoraria: '', conteudo: '', proximaTurma: '', certificado: '' },
} as const;
export const enderecoCompleto = `${loja.endereco.rua}, ${loja.endereco.numero} · ${loja.endereco.bairro}, ${loja.endereco.cidade}/${loja.endereco.uf}`;

````


## src/pages/assistencia-tecnica/index.astro

````astro
---
import Pagina from '../../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../../config/loja';
import { servicos } from '../../config/servicos';
import { Picture } from 'astro:assets';
import bancada from '../../assets/home/bancada.jpg';
import DecisaoHome from '../../components/home/DecisaoHome.astro';
import Orcamento from '../../components/institucional/Orcamento.astro';
---
<Pagina titulo="Assistência técnica em Lages" descricao="Assistência de iPhone e celulares na Smart Lion em Lages. Avaliação, orçamento e atendimento pelo WhatsApp." resposta={`A ${loja.nome} oferece assistência técnica de celulares na ${enderecoCompleto}. Conte o modelo e o problema pelo WhatsApp para conversar sobre avaliação e orçamento.`}>
<a slot="acao" class="button button-light" href="#orcamento">Pedir orçamento ↗</a>
<section class="pagina-bloco light"><div class="container duas-colunas"><div><h2>Entenda o reparo antes de decidir.</h2><p>{loja.irpDescricao}.</p><p>O programa dá acesso a treinamentos, ferramentas e peças originais para reparos elegíveis. Consulte a equipe sobre as peças e opções para o seu modelo.</p><ul class="lista-servicos">{servicos.map(s=><li><a href={`/assistencia-tecnica/${s.slug}`}>{s.titulo}<span aria-hidden="true">↗</span></a></li>)}</ul></div><Picture src={bancada} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Bancada técnica da Smart Lion com microscópio e equipamentos" loading="lazy" class="foto-editorial"/></div></section>
<section class="pagina-bloco"><div class="container duas-colunas"><div><h2>Do primeiro contato ao orçamento.</h2><ol><li>Informe o aparelho e descreva a falha.</li><li>Converse com a equipe sobre a avaliação técnica.</li><li>Confirme o serviço, as condições e o prazo antes de decidir.</li></ol></div><div><h3>Prazo conforme o diagnóstico</h3><p>Muitos consertos são realizados no mesmo dia. Isso depende da avaliação, do serviço e da disponibilidade de peças.</p><h3>Garantia do serviço</h3><p>A garantia do reparo é oferecida pela loja. Peça as condições, a cobertura e o prazo aplicáveis ao seu orçamento.</p><a class="button button-light" href="/perguntas-frequentes">Tirar outras dúvidas ↗</a></div></div></section><DecisaoHome/><Orcamento/>
</Pagina>

````


## src/pages/catalogo/index.astro

````astro
---
import Layout from '../../layouts/LayoutBase.astro';
import ParcelamentoHome from '../../components/home/ParcelamentoHome.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { obterProdutos } from '../../lib/produtos';
import { loja } from '../../config/loja';
const produtos=await obterProdutos();
---
<Layout title="Catálogo de iPhone e importados em Lages | Smart Lion" description="Explore as categorias da Smart Lion em Lages. Consulte versões, cores e condições pelo WhatsApp."><section class="catalogo light"><div class="container"><header><p class="eyebrow">Escolha com calma. Fale com quem entende.</p><h1>Seu próximo aparelho<br/>começa por aqui.</h1><p>A {loja.nome} trabalha com iPhone, Apple, Xiaomi e importados na {loja.endereco.rua}, {loja.endereco.numero}, Centro de {loja.endereco.cidade}. Consulte modelos, versões e cores com nossa equipe pelo WhatsApp.</p></header><Catalogo produtos={produtos}/></div></section><ParcelamentoHome/></Layout>
<style>.catalogo{padding:60px 0 80px}.catalogo header{margin-bottom:38px}.catalogo header .eyebrow{color:#8c0747;font-size:.7rem}.catalogo h1{font-size:clamp(2.5rem,4.5vw,4.5rem);margin:18px 0 24px}.catalogo header>p:last-child{max-width:670px;color:#414246;font-size:.95rem}@media(max-width:700px){.catalogo{padding:38px 0 60px}}</style>

````


## src/pages/index.astro

````astro
---
import { Picture } from 'astro:assets';
import Layout from '../layouts/LayoutBase.astro';
import Capitulo from '../components/editorial/Capitulo.astro';
import RevelacaoImagem from '../components/editorial/RevelacaoImagem.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import StatusHorario from '../components/StatusHorario.astro';
import Depoimento from '../components/avaliacoes/Depoimento.astro';
import MarcaGoogle from '../components/avaliacoes/MarcaGoogle.astro';
import InstagramHome from '../components/home/InstagramHome.astro';
import LojaHome from '../components/home/LojaHome.astro';
import { destaques, resumoAvaliacoes, atualizadoEm } from '../lib/avaliacoes';
import { loja } from '../config/loja';
import { categorias } from '../config/categorias';
import fotoLoja from '../assets/loja.jpg';
import bancada from '../assets/home/bancada.jpg';
import laboratorio from '../assets/home/laboratorio.jpg';
import capas from '../assets/home/capas.jpg';
import caixas from '../assets/home/caixas-de-som.jpg';
const relatos=destaques.filter(a=>['g-001','g-003','g-007'].includes(a.id));
const pilares=[
 {numero:'01',titulo:'Produtos para a sua rotina.',texto:'Apple, Xiaomi e importados. A gente conversa sobre o que você procura e ajuda na escolha.',href:'/catalogo',link:'Conheça os produtos',foto:capas,alt:'Capas de celular com textura de couro fotografadas pela Smart Lion'},
 {numero:'02',titulo:'Seminovos com procedência.',texto:`Nossos iPhones seminovos passam por avaliação técnica e têm ${loja.garantiaSeminovosMeses} meses de garantia.`,href:'/catalogo/seminovos',link:'Conheça os seminovos',foto:fotoLoja,alt:'Interior da Smart Lion, onde a equipe atende sobre novos e seminovos'},
 {numero:'03',titulo:'Cuidado técnico, de perto.',texto:loja.irpDescricao+'.',href:'/assistencia-tecnica',link:'Conheça a assistência',foto:bancada,alt:'Microscópio e ferramentas na bancada técnica da Smart Lion'},
 {numero:'04',titulo:'Um espaço para aprender.',texto:'Teoria e prática no Centro Técnico, com bancadas individuais para o treinamento de manutenção de celulares.',href:'/curso-manutencao-celular',link:'Conheça o curso',foto:laboratorio,alt:'Bancadas individuais do Centro Técnico da Smart Lion'},
];
const fotosCategoria={'casa-e-games':{src:caixas,alt:'Caixa de som portátil no balcão da Smart Lion'},acessorios:{src:capas,alt:'Capas de celular com textura de couro'}};
---
<Layout title="Smart Lion em Lages | Produtos, assistência e Centro Técnico" description="Conheça a Smart Lion no Centro de Lages: Apple, Xiaomi, importados, seminovos, assistência técnica e curso de manutenção. Veja a loja e fale conosco.">
<section class="abertura" id="abertura" aria-labelledby="titulo-home">
 <Picture src={fotoLoja} formats={['avif','webp']} widths={[480,800,1280,1920]} sizes="100vw" alt="Interior da Smart Lion com balcão de madeira, notebooks e prateleiras iluminadas" loading="eager" fetchpriority="high"/>
 <div class="container abertura-conteudo"><p class="eyebrow">{loja.nome} · {loja.endereco.cidade}, {loja.endereco.uf}</p><h1 id="titulo-home">Tecnologia com procedência,<br/><span>no coração de {loja.endereco.cidade}.</span></h1><p class="resposta">Na {loja.nome}, reunimos Apple, Xiaomi, importados, assistência técnica e formação no Centro de {loja.endereco.cidade}. Estamos na {loja.endereco.rua}, {loja.endereco.numero}. Conheça nosso espaço e fale com a gente pelo WhatsApp.</p><div class="acoes"><a class="button button-light" href="#ambiente">Conheça a loja <span aria-hidden="true">↗</span></a><BotaoWhatsApp discreto/></div><div class="abertura-rodape"><span>VENDA · ASSISTÊNCIA · ENSINO</span><StatusHorario/></div></div>
</section>
<Capitulo id="manifesto" tema="claro" marcador="A ideia da Smart Lion" titulo="Tecnologia de verdade é sobre pessoas."><div class="manifesto-texto"><p>Queremos tornar a experiência com tecnologia segura e confiável.</p><p>Procedência na escolha.<br/>Atendimento de perto.<br/>Suporte depois da compra.</p><span>A gente está aqui para conversar.</span></div></Capitulo>
<Capitulo id="ambiente" marcador="A casa do leão" titulo="Entre. Conheça nosso espaço."><p slot="introducao">Da loja ao laboratório, produtos, cuidado técnico e aprendizado fazem parte do nosso dia a dia.</p><div class="galeria"><RevelacaoImagem src={fotoLoja} alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" legenda="01 / A loja. Madeira e tecnologia no mesmo ambiente."/><div class="galeria-lateral"><RevelacaoImagem src={bancada} alt="Bancada com microscópio e ferramentas de manutenção" legenda="02 / A bancada de assistência." sizes="(max-width:700px) 100vw, 35vw"/><p>Um aparelho acompanha muita coisa da nossa vida. O cuidado com ele também faz parte da nossa história.</p></div><div class="galeria-laboratorio"><RevelacaoImagem src={laboratorio} alt="Bancadas individuais do laboratório de manutenção da Smart Lion" legenda="03 / O Centro Técnico. Um lugar para aprender na prática." sizes="(max-width:700px) 100vw, 50vw"/></div><div class="galeria-convite"><p class="texto-display">Conheça de perto.</p><a class="link-editorial" href="/como-chegar">Planeje sua visita ↗</a>{import.meta.env.DEV&&<p class="pendente">PROVISÓRIO: tour /a-loja entra na R3. Faltam fachada, vitrine e balcão com atendimento autorizado.</p>}</div></div></Capitulo>
<Capitulo id="atividades" tema="claro" marcador="O que fazemos" titulo="Diferentes caminhos. O mesmo cuidado."><div class="pilares">{pilares.map(p=><article><div class="pilar-imagem"><Picture src={p.foto} formats={['avif','webp']} widths={[400,640,900]} sizes="(max-width:700px) 100vw, 45vw" alt={p.alt} loading="lazy"/></div><div class="pilar-texto"><span class="numero">{p.numero}</span><div><h3>{p.titulo}</h3><p>{p.texto}</p><a class="link-editorial" href={p.href}>{p.link} ↗</a></div></div></article>)}</div>{import.meta.env.DEV&&<p class="pendente">PROVISÓRIO: o pilar de seminovos usa a foto do interior, sem representar estoque. Aguardando foto real dos aparelhos.</p>}</Capitulo>
<Capitulo id="vitrine" tema="claro" marcador="Produtos e importados" titulo="O que você encontra aqui."><p slot="introducao">Conheça nossas categorias. Para saber quais modelos estão disponíveis, fale com a equipe.</p><div class="categorias-editoriais">{categorias.filter(c=>c.slug!=='seminovos').map((c,i)=>{const foto=fotosCategoria[c.slug as keyof typeof fotosCategoria];return <article><span class="numero">{String(i+1).padStart(2,'0')}</span><div><h3>{c.nome}</h3><p>{c.detalhe}</p></div>{foto&&<Picture src={foto.src} formats={['avif','webp']} widths={[160,240,320]} sizes="120px" alt={foto.alt} loading="lazy"/>}<a href={`/catalogo/${c.slug}`} aria-label={`Saiba mais sobre ${c.nome}`}>Saiba mais <span aria-hidden="true">↗</span></a>{import.meta.env.DEV&&!foto&&<span class="pendente">Foto PENDENTE</span>}</article>})}</div><a class="link-editorial" href="/catalogo">Ver todos os produtos ↗</a></Capitulo>
<Capitulo id="depoimentos" tema="claro" marcador="O que dizem de nós" titulo="A confiança tem muitas vozes."><div class="avaliacoes-resumo"><div><p class="nota-google tabular">{String(resumoAvaliacoes.nota).replace('.',',')}{Number.isInteger(resumoAvaliacoes.nota)?',0':''}</p><a href={loja.googleMaps}><MarcaGoogle/>{resumoAvaliacoes.total} avaliações no Google ↗</a><p class="data-coleta">Dados coletados em {atualizadoEm}.</p></div><p>Atendimento, compra e assistência, nas palavras de quem já passou por aqui.</p></div><div class="citacoes">{relatos.map(a=><Depoimento avaliacao={a}/>)}</div><p class="contexto">Seleção de relatos literais. Experiências e prazos citados são individuais, da época da avaliação.</p><a class="link-editorial" href="/avaliacoes">Ler mais avaliações ↗</a></Capitulo>
<Capitulo id="historia" marcador="Nossa história" titulo="Da escolha ao cuidado. Sempre com gente por perto."><div class="historia-texto"><p>A Smart Lion nasceu com a ideia de tornar a experiência com tecnologia segura e confiável. Produtos novos e seminovos, procedência e suporte fazem parte dessa relação.</p><p>Com o tempo, esse cuidado também ganhou espaço na manutenção e no ensino. Hoje, nossa loja reúne venda de importados, assistência técnica e treinamento de manutenção de celulares.</p></div><ol class="marcos"><li><time datetime="2026-02">Fevereiro de 2026</time><p>Anunciamos a participação no programa IRP da Apple.</p></li><li><time datetime="2026">2026</time><p>Divulgamos turmas de manutenção no Centro Técnico.</p></li><li><time datetime="2026-10">Outubro de 2026</time><p>{resumoAvaliacoes.total} avaliações na ficha do Google.</p></li></ol><a class="link-editorial" href="/sobre">Conheça nossa história ↗</a></Capitulo>
<InstagramHome/>
<LojaHome/>
</Layout>
<style>
.abertura{position:relative;isolation:isolate;min-height:calc(100svh - 100px);display:flex;align-items:center;padding:clamp(60px,8vw,120px) 0 28px}.abertura :global(picture){position:absolute;inset:0;z-index:-2}.abertura :global(img){width:100%;height:100%;object-fit:cover}.abertura:before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#111214f5 0%,#111214df 45%,#11121435 100%)}.abertura h1{max-width:940px;margin:28px 0;font-size:clamp(2.8rem,5.4vw,5.6rem)}h1 span{color:#ded1c2}.resposta{max-width:580px;color:#e2e0dc}.acoes{display:flex;gap:16px;flex-wrap:wrap;margin-top:32px}.abertura-rodape{display:flex;align-items:end;justify-content:space-between;gap:24px;border-top:1px solid #ffffff40;margin-top:60px;padding-top:20px}.abertura-rodape>span{font-size:.65rem;letter-spacing:.15em}.abertura-rodape :global(.status-horario){margin:0}.manifesto-texto{margin-left:30%;max-width:760px}.manifesto-texto p{font:400 clamp(1.7rem,3.3vw,3.5rem)/1.3 var(--font-heading);margin-bottom:32px}.manifesto-texto span{font-size:.95rem;color:var(--text-dark)}.galeria{display:grid;grid-template-columns:1.3fr 1fr;gap:64px}.galeria>:first-child{align-self:start}.galeria-lateral{padding-top:100px}.galeria-lateral>p{max-width:320px;color:var(--muted);margin-top:24px}.galeria-laboratorio{max-width:550px;margin-left:15%;margin-top:-80px}.galeria-convite{align-self:center}.texto-display{font:400 clamp(2rem,4vw,4rem)/1.1 var(--font-heading);margin-bottom:24px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;text-decoration:underline;text-underline-offset:7px}.pilares{display:grid;grid-template-columns:1fr 1fr;gap:80px 48px}.pilares article:nth-child(even){padding-top:80px}.pilar-imagem{aspect-ratio:4/3;overflow:hidden;background:#e2dfd8}.pilar-imagem :global(img){width:100%;height:100%;object-fit:cover}.pilar-imagem :global(picture){display:block;height:100%}.pilar-texto{display:grid;grid-template-columns:32px 1fr;gap:16px;margin-top:24px}.numero{font:400 .75rem var(--font-body);color:var(--text-dark);padding-top:10px}.pilar-texto h3{font-size:clamp(1.6rem,2.7vw,2.7rem)}.pilar-texto p{margin:18px 0;max-width:460px;color:var(--text-dark)}.categorias-editoriais{border-top:1px solid #aaa49b}.categorias-editoriais article{display:flex;align-items:center;gap:32px;min-height:152px;padding:24px 0;border-bottom:1px solid #c7c2b9}.categorias-editoriais h3{font-size:clamp(1.8rem,3vw,3rem)}.categorias-editoriais p{font-size:.85rem;color:var(--text-dark);margin-top:8px}.categorias-editoriais :global(picture){margin-left:auto}.categorias-editoriais :global(img){width:100px;height:100px;object-fit:cover}.categorias-editoriais a{margin-left:auto;min-height:48px;display:flex;align-items:center;gap:36px;white-space:nowrap;font-size:.85rem}.categorias-editoriais+a{margin-top:24px}.avaliacoes-resumo{display:flex;align-items:center;gap:15%;margin-bottom:56px}.nota-google{font:400 clamp(6rem,13vw,12rem)/1 var(--font-heading)}.avaliacoes-resumo a{display:flex;align-items:center;gap:8px;min-height:48px}.data-coleta,.contexto{font-size:.75rem;color:var(--text-dark)}.avaliacoes-resumo>p{font:400 clamp(1.8rem,3vw,3rem)/1.25 var(--font-heading);max-width:470px}.citacoes{columns:3;column-gap:48px}.citacoes :global(.depoimento){break-inside:avoid}.contexto{margin:24px 0 12px}.historia-texto{display:grid;grid-template-columns:1fr 1fr;gap:64px;color:#dedbd6;font-size:1.05rem;max-width:1100px}.marcos{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;list-style:none;padding:0;margin:64px 0 36px}.marcos li{border-top:1px solid var(--wood);padding-top:24px}.marcos time{font-size:.8rem;color:var(--wood-light)}.marcos p{margin-top:16px;max-width:300px}.pendente{font-size:.75rem!important;background:#fff0c7;color:#633a00!important;padding:12px;margin-top:20px}
@media(max-width:800px){.galeria{gap:32px}.galeria-lateral{padding-top:40px}.galeria-laboratorio{margin-top:0;margin-left:0}.pilares{gap:40px 24px}.citacoes{columns:1}.historia-texto{gap:24px}.marcos{gap:20px}.categorias-editoriais article{gap:20px}.categorias-editoriais a{gap:12px}}
@media(max-width:600px){.abertura{min-height:730px;padding-top:56px}.abertura:before{background:linear-gradient(90deg,#111214ed,#111214b8)}.abertura h1{font-size:2.8rem}.abertura-rodape{align-items:start;flex-direction:column;margin-top:40px}.manifesto-texto{margin-left:0}.galeria,.pilares,.historia-texto,.marcos{grid-template-columns:1fr}.galeria-lateral{padding-top:0}.galeria-laboratorio{max-width:100%}.galeria-convite{padding-block:20px}.pilares article:nth-child(even){padding-top:0}.categorias-editoriais article{gap:14px;flex-wrap:wrap}.categorias-editoriais h3{font-size:1.8rem}.categorias-editoriais .numero{display:none}.categorias-editoriais :global(img){width:66px;height:80px}.categorias-editoriais a{font-size:.75rem}.categorias-editoriais .pendente{flex-basis:100%}.avaliacoes-resumo{display:block}.avaliacoes-resumo>p{margin-top:28px}.marcos{margin-top:36px;gap:28px}}
</style>

````
