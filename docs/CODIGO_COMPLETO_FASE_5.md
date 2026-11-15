# Código completo — Fase 5

## Arquivos criados ou alterados

```text
README.md
docs/HOME.md
docs/PENDENCIAS.md
docs/QA_FASE_5.md
docs/preview-fase5.jpg
package.json
scripts/verificar-home.mjs
src/assets/home/bancada.jpg
src/assets/home/caixas-de-som.jpg
src/assets/home/capas.jpg
src/assets/home/fones.jpg
src/assets/home/laboratorio.jpg
src/components/PendenciasDev.astro
src/components/catalogo/Vitrine.astro
src/components/home/AssistenciaHome.astro
src/components/home/CategoriasHome.astro
src/components/home/CursoHome.astro
src/components/home/DecisaoHome.astro
src/components/home/FaixaConfianca.astro
src/components/home/InstagramHome.astro
src/components/home/LojaHome.astro
src/components/home/ParcelamentoHome.astro
src/config/loja.ts
src/pages/index.astro
src/scripts/mapa.ts
```

## README.md

````markdown
# Smart Lion — Fase 5

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

````

## docs/HOME.md

````markdown
# Home — Fase 5

Ordem: hero, confiança, avaliações, destaques, categorias, assistência, consertar/trocar, parcelamento, Instagram, curso, loja, avaliação, rodapé; WhatsApp flutuante compartilhado. Um único modal atende os cards da home.

## Dados e limites da entrega

- Destaques e faixas usam a coleção filtrada da Fase 3. Limite de oito por faixa; não completamos artificialmente 6–8 destaques ou 4–8 produtos por categoria. Sem produtos confirmados, produção mostra consulta por categoria. Rascunhos permanecem exclusivos do desenvolvimento.
- Apple usa a rota existente ipad-mac-watch. Casa e games foi preservada conforme catálogo definido anteriormente.
- Foto da fachada não foi recebida. O bloco da loja usa a foto real do interior, com alt correto; loja.fotoFachada fica vazio. Substituir após recebimento.
- Instagram usa cinco fotos reais recebidas: capas, laboratório, bancada, fones e caixa de som. O sexto slot fica vazio, visível apenas em dev. URLs dos posts ficam vazias em loja.instagramPosts: as imagens levam ao perfil com rótulo Ver perfil, sem fingir que o link é de publicação. A contagem de seguidores não foi repetida como se fosse atual.
- Parcelamento 24x cartão e 36x boleto vem da §2/§8 (post de 16/07/2026); centralizado em loja.parcelamento. Boleto sempre com análise de crédito. A confirmação das condições vigentes continua pendente, sem taxas ou valores inventados.
- Linguagem IRP usa a descrição autorizada pela especificação; confirmação documental continua pendente. Não há logo Apple nem imagens de fabricantes adicionadas.
- Prazo de conserto é qualificado pela avaliação e peças, não promessa universal. Curso não inventa carga horária, certificado, datas, vagas ou renda.
- Consertar usa a mensagem literal de assistência; trocar de aparelho usa a geral, pois não temos os modelos e não há confirmação de usado na troca. Não usamos mensagemTroca sem autorização comercial. O formulário contextual com aparelho/problema poderá entrar na fase de páginas; nenhum placeholder fictício foi inserido nas mensagens.

## Mapa e privacidade

Endereço, coordenadas e horários vêm de loja.ts. Google Maps e Waze usam esses dados. O mapa embarcado não existe no HTML inicial. Carregar mapa do Google é um consentimento específico, informado e da mesma hierarquia visual que Continuar sem mapa. Nenhuma escolha é persistida; a cada nova carga, exige nova ação. Recusar remove o iframe existente e mantém os links. Isso não promete apagar cookies já criados pelo Google. Banner e política gerais continuam na Fase 8.

Sem JavaScript, endereço, tabela de horário, links de rota, links de produto e de WhatsApp continuam no HTML. Não há iframe do Instagram.

## Origem das fotos novas

Todos os arquivos foram fornecidos pelo usuário; sem geração ou compra de imagens:

| Destino em src/assets/home | Arquivo de origem (prefixo) |
|---|---|
| capas.jpg | SaveClip.App_706760307 |
| laboratorio.jpg | SaveClip.App_758863712 |
| bancada.jpg | SaveClip.App_760701313 |
| fones.jpg | SaveClip.App_783556075 |
| caixas-de-som.jpg | SaveClip.App_784773968 |

As imagens são processadas por astro:assets em AVIF/WebP, com dimensões e lazy loading. Somente hero tem fetchpriority high. Autorização geral de uso das mídias segue registrada nas pendências.

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

## Atualização — Fase 5

- PENDENTE: foto da fachada. Campo loja.fotoFachada vazio; interior real usado com legenda/alt correto.
- PENDENTE: URLs das cinco fotos/posts e sexta imagem para atingir o mínimo de seis da §8. Campos vazios em loja.instagramPosts; fallback explícito para perfil.
- PENDENTE: confirmar condições vigentes do parcelamento. Limites 24x/36x vêm da especificação; taxas e valores não publicados.
- PENDENTE: produtos reais suficientes para preencher vitrines da §8. Não publicar os cinco rascunhos.
- A home tem todas as seções; fachada, quantidade de produtos e grade de 6–9 posts dependem dos insumos acima.
- Próxima fase cria páginas institucionais. Rodapé não oferece rotas inexistentes; CNPJ e privacidade seguem fases previstas.
- Não foi confirmada a renderização externa do mapa no navegador de teste, apenas criação após clique e remoção após recusa. Conferir integração Google na QA final.

````

## docs/QA_FASE_5.md

````markdown
# QA — Fase 5

## Resultados

- Astro check: 59 arquivos, zero erros/avisos/hints.
- Vitest: 159 testes aprovados. Nenhuma dependência adicionada.
- Build: 11 páginas HTML, cinco rascunhos excluídos.
- verify:catalogo e verify:avaliacoes aprovados: links, mensagens, H1, ausência de rascunhos e textos literais preservados.
- verificar-home: ordem das 13 seções, modal único, dimensões/alt de imagens, prioridade alta apenas no hero, nenhum iframe inicial, nota de análise de crédito e nenhum PENDENTE no HTML público.

| Página | JS gzip |
|---|---:|
| Home | 6589 bytes |
| Avaliações | 601 bytes |
| Catálogo e sete categorias | 2963 bytes cada |
| 404 | 0 bytes |

Home: 75660 bytes HTML sem compressão. 25 variantes AVIF referenciadas, entre 4531 e 36376 bytes por arquivo; não é o total baixado pelo visitante, pois o navegador escolhe o srcset. Código compartilhado passou a ser dividido em chunks; pequena diferença nos números do catálogo reflete essa divisão.

## Navegador

Conferidas ordem das seções e ausência de transbordamento horizontal na viewport disponível (1363 px). Mapa: zero iframe inicial, recusa mantém zero, aceitar cria um iframe com título e coordenadas corretas, recusar novamente remove. Renderização do provedor externo não confirmada. Bloco de assistência com foto real inspecionado; foco no CTA visível por teclado. Nenhuma mensagem enviada.

Não foram medidos Lighthouse, axe, LCP, CLS ou INP, nem certificadas as larguras exatas 390/1440. Não houve sessão com JavaScript desativado; fallback conferido pelo HTML. Não declarar cumprimento de todas as metas de performance ou WCAG antes da Fase 9.

## Comandos

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

## Conferir em 390 e 1440 px

- Percorrer a home inteira: hero → confiança → avaliações → destaques → categorias → assistência → consertar/trocar → parcelamento → Instagram → curso → loja → avaliar → rodapé.
- Conferir fotos sem esticar, chips e Instagram com rolagem horizontal local, ausência de transbordamento da página e botões legíveis.
- Em desenvolvimento, abrir cards das categorias e destaques; deve existir um só dialog, Esc restaura foco e URL.
- Usar Tab nas ações e nos dois botões de mapa. Sem aceitar, não deve haver conexão via iframe com Google. Aceitar carrega; recusar remove. Verificar desenho real do mapa e links Waze/Google.
- Desativar JS: fotos, horário estático, WhatsApp e rotas continuam acessíveis; carrossel rola manualmente.
- Conferir texto codificado do WhatsApp para assistência, troca, parcelamento e curso, sem enviar.

## Medir Lighthouse

Terminal 1:

```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2, Chrome instalado:

```sh
mkdir -p reports
pnpm dlx lighthouse http://localhost:4321/ --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path=reports/home-fase5 --chrome-flags="--headless"
```

Preview noindex é intencional e afeta SEO. INP de campo exige coleta de interações reais; Lighthouse não certifica sozinho o orçamento de campo.

````

## package.json

````json
{
  "name": "smartlion",
  "version": "0.5.0",
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

## scripts/verificar-home.mjs

````javascript
import { readFileSync, statSync } from 'node:fs';
import assert from 'node:assert/strict';
const html=readFileSync('dist/index.html','utf8');
const ordem=['class="hero"','class="confianca"','class="avaliacoes-home"','class="vitrine light"','class="categorias-home light"','class="assistencia"','class="decisao light"','class="parcelamento"','class="instagram-home light"','class="curso"','class="loja-home light"','class="avaliar light"','id="contato"'];
let anterior=-1;
for(const item of ordem){const pos=html.indexOf(item);assert(pos>anterior,`Seção ausente ou fora de ordem: ${item}`);anterior=pos;}
assert(!html.includes('<iframe'));
assert.equal((html.match(/fetchpriority="high"/g)||[]).length,1);
assert.equal((html.match(/<dialog/g)||[]).length,1);
for(const img of html.matchAll(/<img\b([^>]+)>/g)){
 assert(/width="\d+"/.test(img[1])&&/height="\d+"/.test(img[1]),'Imagem sem dimensões');
 assert(/\balt(?:=|\s|$)/.test(img[1]));
}
assert(html.includes('sujeito a análise de crédito'));
assert(!html.includes('PENDENTE'));
assert(!html.includes('rascunho-'));
console.log('Ordem das 13 seções, modal único, dimensões de imagens, prioridade única e mapa sem iframe inicial: OK.');
const avifs=[...html.matchAll(/srcset="([^"]+)"/g)].flatMap(m=>m[1].split(',').map(s=>s.trim().split(' ')[0])).filter(s=>s.endsWith('.avif'));
const tamanhos=[...new Set(avifs)].map(src=>({src,bytes:statSync('dist'+src).size}));
console.log(JSON.stringify({avifVariantes:tamanhos.length,menorBytes:Math.min(...tamanhos.map(i=>i.bytes)),maiorBytes:Math.max(...tamanhos.map(i=>i.bytes))}));

````

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 5</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. Páginas institucionais entram na Fase 6.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````

## src/components/catalogo/Vitrine.astro

````astro
---
import { obterProdutos } from '../../lib/produtos';
import CardProduto from './CardProduto.astro';

const produtos=(await obterProdutos()).filter(p=>p.destaque).slice(0,8);
---
<section class="vitrine light"><div class="container"><div class="titulo-vitrine"><div><p class="eyebrow">Explore as opções</p><h2>Na sua próxima escolha.</h2></div><a href="/catalogo">Ver catálogo completo ↗</a></div>{import.meta.env.DEV&&<p class="aviso">Prévia: slots de demonstração, fora do build de produção.</p>}{produtos.length === 0 && <p class="sob-consulta">Seu próximo aparelho começa com uma conversa. Consulte os modelos disponíveis, versões e condições com a equipe.</p>}<div class="grade">{produtos.map(p=><CardProduto produto={p}/>)}</div></div></section>
<style>.vitrine{padding:60px 0}.titulo-vitrine{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:28px}.titulo-vitrine .eyebrow{color:#8c0747;margin-bottom:14px}.titulo-vitrine a{font-size:.8rem;white-space:nowrap}.aviso{font-size:.8rem;color:#633a00;margin-bottom:20px}.grade{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 24px}@media(max-width:1000px){.grade{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.titulo-vitrine{display:block}.titulo-vitrine a{display:inline-block;margin-top:18px}.grade{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:420px){.grade{grid-template-columns:1fr}}</style>

````

## src/components/home/AssistenciaHome.astro

````astro
---
import { Picture } from 'astro:assets';
import foto from '../../assets/home/bancada.jpg';
import { loja } from '../../config/loja';
import { mensagensWhatsApp } from '../../config/whatsapp';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
---
<section class="assistencia" id="assistencia" aria-labelledby="titulo-assistencia"><div class="container editorial"><Picture src={foto} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Bancada do Centro Técnico Smart Lion com microscópio e equipamentos de manutenção" loading="lazy"/><div class="texto"><p class="eyebrow">Assistência técnica em Lages</p><h2 id="titulo-assistencia">Seu celular precisa<br/>de cuidado.<br/>Você, de clareza.</h2><p>{loja.irpDescricao}.</p><p>Da avaliação ao orçamento, entenda o que precisa ser feito antes de decidir. Tela, bateria ou um problema mais complexo: conte o que aconteceu.</p><ul>{loja.servicos.map(s=><li>{s}</li>)}</ul><p class="prazo">Muitos consertos são realizados no mesmo dia. O prazo depende da avaliação e da disponibilidade das peças; confirme com a equipe.</p><BotaoWhatsApp texto={mensagensWhatsApp.assistencia()} rotulo="Pedir orçamento no WhatsApp"/></div></div></section>
<style>.assistencia{padding:80px 0;background:#1c1d20}.editorial{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:64px}.editorial :global(img){width:100%;height:auto;max-height:780px;object-fit:cover}.eyebrow{color:#ff78bc;margin-bottom:18px}.texto>p:not(.eyebrow){margin:22px 0;color:#d2d3d5}ul{list-style:none;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:28px 0}li{border-bottom:1px solid #626367;padding-bottom:12px;font-size:.9rem}.prazo{font-size:.8rem}@media(max-width:800px){.editorial{grid-template-columns:1fr;gap:32px}.assistencia{padding:48px 0}.editorial :global(img){max-height:480px;object-position:center}}</style>

````

## src/components/home/CategoriasHome.astro

````astro
---
import { obterProdutos } from '../../lib/produtos';
import { categoriasProduto } from '../../lib/catalogo';
import { categorias } from '../../config/categorias';
import CardProduto from '../catalogo/CardProduto.astro';
const produtos=await obterProdutos();
---
<section class="categorias-home light" aria-labelledby="categorias-titulo"><div class="container"><p class="eyebrow">Escolha por categoria</p><h2 id="categorias-titulo">Tecnologia para<br/>o seu dia a dia.</h2>{categorias.map((c,i)=>{const lista=produtos.filter(p=>categoriasProduto(p).includes(c.slug));return <section class="categoria" aria-labelledby={`cat-${c.slug}`}><div class="cabecalho"><span class="indice" aria-hidden="true">0{i+1}</span><div><h3 id={`cat-${c.slug}`}>{c.nome}</h3><p>{c.detalhe}</p></div><a href={`/catalogo/${c.slug}`}>{lista.length ? `Ver todos (${lista.length})` : 'Consultar categoria'} ↗</a></div>{lista.length ? <div class="produtos">{lista.slice(0,8).map(p=><CardProduto produto={p}/>)}</div> : <p class="consulta">Modelos, versões e disponibilidade sob consulta com a equipe.</p>}</section>})}</div></section>
<style>.categorias-home{padding:70px 0}.eyebrow{color:#8c0747;margin-bottom:14px}.categoria{border-bottom:1px solid #b7b8b4;padding:30px 0}.cabecalho{display:flex;gap:22px;align-items:center}.indice{font-size:.75rem;color:#595a5d}h3{font-size:clamp(1.6rem,3vw,2.3rem)}.cabecalho p,.consulta{font-size:.85rem;color:#414246;margin-top:8px}.cabecalho a{margin-left:auto;font-size:.85rem;min-height:44px;display:flex;align-items:center}.consulta{margin-left:40px}.produtos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;margin-top:26px}@media(max-width:800px){.produtos{grid-template-columns:repeat(2,minmax(0,1fr))}.cabecalho{gap:12px;flex-wrap:wrap}.cabecalho a{margin-left:0}.consulta{margin-left:0}}@media(max-width:420px){.produtos{grid-template-columns:1fr}}</style>

````

## src/components/home/CursoHome.astro

````astro
---
import { Picture } from 'astro:assets';
import laboratorio from '../../assets/home/laboratorio.jpg';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import { mensagensWhatsApp } from '../../config/whatsapp';
---
<section class="curso" id="curso" aria-labelledby="titulo-curso"><div class="container"><div class="texto"><p class="eyebrow">Centro Técnico Smart Lion</p><h2 id="titulo-curso">Aprender fazendo.<br/>Bancada por bancada.</h2><p>Curso de manutenção de celulares em Lages, no laboratório anexo à loja.</p><p>Bancadas individuais e prática para quem quer começar ou aperfeiçoar seus conhecimentos.</p><p>Converse com a equipe sobre conteúdo, carga horária, datas e disponibilidade da próxima turma.</p><BotaoWhatsApp texto={mensagensWhatsApp.curso()} rotulo="Quero saber da próxima turma"/></div><Picture src={laboratorio} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Laboratório da Smart Lion com uma sequência de bancadas individuais e cadeiras" loading="lazy"/></div></section>
<style>.curso{padding:80px 0}.container{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:64px}.eyebrow{color:#ff78bc;margin-bottom:20px}.texto>p:not(.eyebrow){color:#d2d3d5;margin:22px 0;max-width:570px}.texto :global(.button){margin-top:10px}.container :global(img){width:100%;max-height:690px;object-fit:cover}@media(max-width:800px){.container{grid-template-columns:1fr;gap:36px}.curso{padding:48px 0}.container :global(img){max-height:500px}}</style>

````

## src/components/home/DecisaoHome.astro

````astro
---
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import { mensagensWhatsApp } from '../../config/whatsapp';
---
<section class="decisao light" aria-labelledby="titulo-decisao"><div class="container"><div><p class="eyebrow">Uma conversa antes de decidir</p><h2 id="titulo-decisao">Consertar ou trocar?</h2><p>A gente analisa e mostra o que compensa mais. Conte o que aconteceu com seu aparelho e tire suas dúvidas sem pressão.</p></div><div class="acoes"><BotaoWhatsApp texto={mensagensWhatsApp.assistencia()} rotulo="Quero consertar"/><BotaoWhatsApp texto={mensagensWhatsApp.geral()} rotulo="Quero trocar de aparelho"/><p>Trocar de aparelho significa escolher outro modelo. A aceitação de usado como parte do pagamento precisa ser consultada.</p></div></div></section>
<style>.decisao{padding:65px 0}.container{display:grid;grid-template-columns:1.2fr 1fr;gap:64px;align-items:center}.eyebrow{color:#8c0747;margin-bottom:16px}h2+p{max-width:640px;margin-top:24px}.acoes{display:grid;gap:14px}.acoes p{font-size:.75rem;color:#414246}@media(max-width:800px){.container{grid-template-columns:1fr;gap:28px}}</style>

````

## src/components/home/FaixaConfianca.astro

````astro
---
import { loja } from '../../config/loja';
import { resumoAvaliacoes, atualizadoEm } from '../../lib/avaliacoes';
---
<section class="confianca" aria-label="Por que conhecer a Smart Lion"><div class="container"><a href="/avaliacoes"><strong>{resumoAvaliacoes.nota.toFixed(1).replace('.', ',')} ★</strong><span>{resumoAvaliacoes.total} avaliações no Google<small>Atualizado em {atualizadoEm}</small></span></a><p><strong>IRP Apple</strong><span>{loja.irpDescricao}</span></p><p><strong>{loja.garantiaSeminovosMeses} meses</strong><span>De garantia da loja nos seminovos</span></p><a href="#parcelamento"><strong>Até {loja.parcelamento.cartaoAte}x</strong><span>No cartão. Consulte condições.</span></a></div></section>
<style>.confianca{background:#222326;border-block:1px solid #4a4b4e;padding:28px 0}.container{display:grid;grid-template-columns:repeat(4,1fr);gap:28px}.container>a,.container>p{display:grid;gap:7px;padding-right:24px;border-right:1px solid #57585b}.container>:last-child{border:0}strong{font:600 1.65rem var(--font-heading)}span{font-size:.8rem;color:#d6d7d9}small{display:block;font-size:.7rem;margin-top:5px}@media(max-width:800px){.container{grid-template-columns:1fr 1fr;gap:24px}.container>:nth-child(2){border:0}}@media(max-width:380px){.container{gap:20px}strong{font-size:1.4rem}.container>a,.container>p{padding-right:10px}}</style>

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
<section class="instagram-home light" aria-labelledby="titulo-instagram"><div class="container"><div class="cabecalho"><div><p class="eyebrow">De perto, no seu feed</p><h2 id="titulo-instagram">Acompanhe {loja.instagram.nome}.</h2><p>Dicas, bastidores e novidades da loja em Lages.</p></div><a class="button" href={loja.instagram.url}>Seguir no Instagram ↗</a></div><div class="fotos">{loja.instagramPosts.map(post=>{const img=imagens[post.imagem as keyof typeof imagens];return img ? <a href={post.url || loja.instagram.url} aria-label={`${img.alt}. ${post.url ? 'Ver publicação' : 'Ver perfil da Smart Lion'} no Instagram`}><Picture src={img.src} formats={['avif','webp']} widths={[240,400,600]} sizes="(max-width:600px) 45vw, 240px" alt={img.alt} loading="lazy"/><span>{post.url ? 'Ver publicação' : 'Ver perfil'} ↗</span></a> : import.meta.env.DEV && <div class="pendente">PENDENTE<br/>Foto e link do post</div>})}</div>{import.meta.env.DEV&&<p class="pendencia">PENDENTE: links das publicações e sexta imagem. Sem links confirmados, as fotos levam ao perfil.</p>}</div></section>
<style>.instagram-home{padding:70px 0}.cabecalho{display:flex;justify-content:space-between;align-items:center;gap:30px}.eyebrow{color:#8c0747;margin-bottom:16px}h2{font-size:clamp(1.8rem,3.3vw,3.3rem)}h2+p{margin-top:18px}.cabecalho>a{flex-shrink:0}.fotos{display:grid;grid-auto-flow:column;grid-auto-columns:240px;gap:18px;overflow-x:auto;scroll-snap-type:x mandatory;margin-top:32px;padding-bottom:16px}.fotos a{scroll-snap-align:start}.fotos :global(img){width:100%;height:300px;object-fit:cover}.fotos span{display:block;padding:12px 0;font-size:.8rem}.pendente{background:#e4e4df;padding:36px;min-height:300px}.pendencia{font-size:.8rem;margin-top:18px}@media(max-width:800px){.cabecalho{display:block}.cabecalho>a{margin-top:24px}.fotos{grid-auto-columns:210px}}</style>

````

## src/components/home/LojaHome.astro

````astro
---
import { Picture } from 'astro:assets';
import foto from '../../assets/loja.jpg';
import { loja, enderecoCompleto } from '../../config/loja';
import { formatarPeriodos } from '../../lib/horario';
const coordenadas=`${loja.coordenadas.latitude},${loja.coordenadas.longitude}`;
const mapa=`https://www.google.com/maps?q=${encodeURIComponent(coordenadas)}&z=17&output=embed`;
const waze=`https://www.waze.com/ul?ll=${encodeURIComponent(coordenadas)}&navigate=yes`;
---
<section class="loja-home light" id="loja" aria-labelledby="titulo-loja"><div class="container"><div class="cabecalho"><div><p class="eyebrow">Tem endereço. Tem gente.</p><h2 id="titulo-loja">Passe na loja.<br/>Vamos conversar.</h2></div><address>{enderecoCompleto}<br/>CEP {loja.endereco.cep}</address></div><Picture src={foto} formats={['avif','webp']} widths={[480,800,1280]} sizes="100vw" alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" loading="lazy"/><div class="detalhes"><div><h3>Quando visitar</h3><table><caption class="sr-only">Horário da loja em Lages</caption><tbody>{loja.horario.semana.map(h=><tr><th scope="row">{h.rotulo}</th><td>{formatarPeriodos(h.periodos)}</td></tr>)}</tbody></table><p>Nos feriados, confirme o atendimento com a equipe.</p><div class="rotas"><a class="button" href={loja.googleMaps}>Google Maps ↗</a><a class="button" href={waze}>Waze ↗</a></div></div><div class="mapa" data-mapa={mapa}><h3>Encontre a Smart Lion</h3><p>Ao carregar o mapa, seu navegador se conecta ao Google, que pode usar cookies. Você pode continuar com o endereço e os links de rota sem carregar o mapa aqui.</p><div class="consentimento" hidden><button class="button" type="button" data-aceitar-mapa>Carregar mapa do Google</button><button class="button" type="button" data-recusar-mapa>Continuar sem mapa</button></div><p class="status-mapa" role="status"></p><div class="mapa-conteudo"></div><noscript><p>Use os links Google Maps ou Waze para abrir a rota.</p></noscript></div></div></div></section>
<script>import '../../scripts/mapa';</script>
<style>.loja-home{padding:70px 0}.cabecalho{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:36px}.eyebrow{color:#8c0747;margin-bottom:18px}address{font-style:normal;line-height:1.8}.container>:global(picture img){width:100%;height:380px;object-fit:cover}.detalhes{display:grid;grid-template-columns:1fr 1.2fr;gap:64px;margin-top:36px}h3{font-size:1.5rem;margin-bottom:20px}table{border-collapse:collapse;font-size:.95rem}th{text-align:left;font-weight:400;padding:8px 25px 8px 0}td{font-variant-numeric:tabular-nums}.detalhes p{font-size:.8rem;color:#414246;margin:16px 0}.rotas,.consentimento{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.button{background:transparent;color:#111214;border:1px solid #747579;font-size:.85rem}.consentimento .button{flex:1;min-width:180px;min-height:66px}.mapa :global(iframe){display:block;width:100%;height:320px;border:0}.status-mapa:empty{display:none}@media(max-width:800px){.cabecalho{display:block}address{margin-top:22px}.detalhes{grid-template-columns:1fr;gap:38px}.container>:global(picture img){height:260px}}</style>

````

## src/components/home/ParcelamentoHome.astro

````astro
---
import { loja } from '../../config/loja';
import { mensagensWhatsApp } from '../../config/whatsapp';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
---
<section class="parcelamento" id="parcelamento" aria-labelledby="titulo-parcelamento"><div class="container"><div><p class="eyebrow">Consulte as condições para o seu aparelho</p><h2 id="titulo-parcelamento">Planeje a próxima compra.</h2><div class="opcoes"><p><strong>Até {loja.parcelamento.cartaoAte}x</strong><span>no cartão</span></p><p><strong>Até {loja.parcelamento.boletoAte}x</strong><span>no boleto, sujeito a análise de crédito</span></p></div><p class="nota">Consulte entrada, taxas, valor das parcelas e condições vigentes antes de fechar.</p></div><BotaoWhatsApp texto={mensagensWhatsApp.parcelamento()} rotulo="Simular no WhatsApp"/></div></section>
<style>.parcelamento{padding:64px 0;border-block:1px solid #4a4b4e}.container{display:flex;align-items:center;justify-content:space-between;gap:32px}.eyebrow{color:#ff78bc;margin-bottom:18px}h2{font-size:clamp(1.8rem,3vw,3rem)}.opcoes{display:flex;gap:48px;margin:28px 0}.opcoes p{display:grid;gap:4px}.opcoes strong{font:600 clamp(2.5rem,5vw,4rem) var(--font-heading);font-variant-numeric:tabular-nums}.opcoes span,.nota{font-size:.8rem;color:#c8c9cb}.nota{max-width:600px}.container :global(.button){flex-shrink:0}@media(max-width:850px){.container{display:block}.container :global(.button){margin-top:28px}.opcoes{gap:24px}}</style>

````

## src/config/loja.ts

````typescript
import type { Agenda } from '../lib/horario';

export const loja = {
  nome: 'Smart Lion',
  endereco: { rua: 'Rua Hercílio Luz', numero: '364', bairro: 'Centro', cidade: 'Lages', uf: 'SC', cep: '88501-010' },
  telefone: { numero: '+5549998182996', exibicao: '(49) 99818-2996' },
  whatsapp: { numero: '5549999268930', exibicao: '(49) 99926-8930' },
  instagram: { nome: '@smartlion.sc', url: 'https://www.instagram.com/smartlion.sc/' },
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
import AvaliarGoogle from '../components/avaliacoes/AvaliarGoogle.astro';
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
<AvaliarGoogle/>
<ModalProduto/>
</Layout>

<style>.hero{position:relative;isolation:isolate;min-height:690px;overflow:hidden}.hero :global(.hero-photo){position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center;z-index:-2}.shade{position:absolute;inset:0;background:linear-gradient(90deg,rgba(17,18,20,.96) 0%,rgba(17,18,20,.82) 33%,rgba(17,18,20,.18) 80%);z-index:-1}.hero-content{padding-top:65px;padding-bottom:30px}.hero .eyebrow{display:flex;align-items:center;gap:10px;color:#e9e9e9}.eyebrow span{width:7px;height:7px;background:var(--accent)}h1{margin:26px 0 24px;max-width:820px}h1 span{color:#d6d4cf}.intro{max-width:470px;color:#ddd;font-size:.98rem}.actions{display:flex;gap:12px;flex-wrap:wrap;margin-top:30px}.hero-foot{display:flex;justify-content:space-between;align-items:center;border-top:1px solid #ffffff30;margin-top:50px;padding-top:22px;font-size:.7rem;letter-spacing:.1em}.hero-foot a{letter-spacing:0;color:#dedede}.mobile-break{display:none}.directory{padding:80px 0 90px}.directory-heading{display:flex;justify-content:space-between;align-items:end;gap:24px}.directory-heading .eyebrow{color:#8c0747;margin-bottom:12px}.directory-heading>p{color:var(--text-dark);font-size:.9rem}.category-search{display:grid;grid-template-columns:auto minmax(160px,400px) 1fr;align-items:center;gap:16px;margin:38px 0 12px}.category-search label{font-size:.85rem}.category-search input{border:1px solid #858585;border-radius:var(--radius);padding:12px;background:transparent;width:100%;color:var(--ink)}#resultado-busca{font-size:.8rem}.category-list article{display:flex;align-items:center;gap:24px;border-bottom:1px solid #c8c8c4;padding:24px 0;scroll-margin-top:160px}.index{color:#666;font-size:.75rem;width:30px}h3{font-size:clamp(1.4rem,2.5vw,2rem)}article p{font-size:.8rem;color:var(--text-dark);margin-top:6px}.category-contact{margin-left:auto;min-height:44px;display:flex;align-items:center;gap:25px;font-size:.85rem}.category-contact span{font-size:1.4rem}.no-js{margin-top:24px}@media(min-width:1500px){.hero{min-height:760px}.hero-content{padding-top:85px}}@media(max-width:700px){.hero{min-height:720px}.hero-content{padding-top:42px}.hero :global(.hero-photo){object-position:63% center}.shade{background:linear-gradient(90deg,#111214f5,#1112149c),linear-gradient(0deg,#111214,transparent 50%)}h1{margin-top:24px;line-height:1.07}.mobile-break{display:block}.intro{font-size:.92rem;max-width:330px}.actions{display:grid;max-width:340px;gap:10px}.hero-foot{margin-top:38px;align-items:flex-start;gap:14px;flex-direction:column;font-size:.65rem}.directory{padding:52px 0}.directory-heading{display:block}.directory-heading>p{margin-top:20px}.category-search{display:block;margin-top:28px}.category-search label{display:block;margin-bottom:8px}#resultado-busca{min-height:24px;margin-top:8px}.category-list article{gap:10px}.index{width:20px}.category-contact{font-size:.75rem;gap:8px}article p{max-width:170px}}
</style>

````

## src/scripts/mapa.ts

````typescript
for (const root of document.querySelectorAll<HTMLElement>('[data-mapa]')) {
 const botoes=root.querySelector<HTMLElement>('.consentimento')!;
 const aceitar=root.querySelector<HTMLButtonElement>('[data-aceitar-mapa]')!;
 const status=root.querySelector<HTMLElement>('.status-mapa')!;
 const conteudo=root.querySelector<HTMLElement>('.mapa-conteudo')!;
 botoes.hidden=false;
 aceitar.addEventListener('click',()=>{
  if(conteudo.querySelector('iframe'))return;
  const frame=document.createElement('iframe');
  frame.title='Localização da Smart Lion no Google Maps';
  frame.src=root.dataset.mapa!;frame.loading='lazy';frame.referrerPolicy='no-referrer';
  conteudo.append(frame);aceitar.disabled=true;
  status.textContent='Mapa solicitado ao Google. Se não aparecer, use os links de rota.';
 });
 root.querySelector('[data-recusar-mapa]')!.addEventListener('click',()=>{
  conteudo.replaceChildren();aceitar.disabled=false;
  status.textContent='Mapa desativado. O endereço e os links de rota continuam disponíveis.';
 });
}

````