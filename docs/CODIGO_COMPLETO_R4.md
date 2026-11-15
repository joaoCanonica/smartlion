# R4 — Árvore e código completo

Nenhum arquivo removido. Caminhos relativos à raiz do projeto.

```text
docs/PENDENCIAS.md
docs/REMODELAGEM_R4.md
docs/smartlion-r4-vitrine.jpg
scripts/verificar-home.mjs
scripts/verificar-vitrine.mjs
src/components/ChipsCategorias.astro
src/components/PendenciasDev.astro
src/components/catalogo/AberturaVitrine.astro
src/components/catalogo/CardProduto.astro
src/components/catalogo/Catalogo.astro
src/components/catalogo/DetalhesProduto.astro
src/components/catalogo/Vitrine.astro
src/components/home/CategoriasHome.astro
src/config/categorias.ts
src/config/navegacao.ts
src/lib/seo.ts
src/pages/a-loja.astro
src/pages/catalogo/[categoria].astro
src/pages/catalogo/index.astro
src/pages/index.astro
src/pages/llms.txt.ts
src/pages/nossa-historia.astro
src/pages/produto/[slug].astro
src/pages/produtos/[categoria].astro
src/pages/produtos/index.astro
src/pages/seminovos.astro
src/pages/sitemap.xml.ts
src/pages/sobre.astro
src/styles/produto.css
```

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

## Remodelagem R3 — 03/11/2026
- /a-loja e /nossa-historia disponíveis. /sobre preservada funcional com link para história; 301 HTTP real continua na migração de URLs R7, sem meta refresh.
- historia.json concentra cinco marcos confirmados; home usa três. Campos loja.historia.fundacao e fundadores vazios.
- loja.equipe vazia. Publicação exige autorização explícita com data válida, nome, função e foto local existente em src/assets/equipe.
- Fachada, vitrine de iPhones e atendimento com pessoas autorizadas continuam sem imagens próprias. O tour identifica corretamente interior e acessórios disponíveis.
- Origem padrão de canônicas corrigida para o endereço atual do Sites; domínio final depende de SITE_URL.
- Viewports 390/1440, Lighthouse, axe e Core Web Vitals seguem pendentes de medição.

## Remodelagem R4 — 04/11/2026
- Slots preservados em DEV e excluídos da produção: receber modelos, versões, cores, fotos e confirmação datada antes de publicar.
- Novos destinos /produtos, seis categorias e /seminovos estão prontos. Rotas antigas /catalogo preservadas; HTTP 301 e alias /produtos/seminovos serão implantados/testados na R7, com query preservada.
- Sem novos fatos comerciais; validar condições vigentes de parcelamento antes do lançamento público.
- QA em 390/1440px exatos, Lighthouse/axe, JS desligado, reduced-motion e teclado completo ainda pendentes. Busca/modal/variantes/Esc conferidos no navegador em DEV com 1348px. Não há produto confirmado para medir a rota de produto no build de produção.

````

## docs/REMODELAGEM_R4.md

````md
# R4 — Produtos como vitrine

04/11/2026. Branch remodelagem-institucional.

## O que mudou
- /produtos com abertura editorial, fotografia real de acessórios, busca e chips internos; seis páginas de categoria e /seminovos.
- Cards, página de produto e modal com disponibilidade discreta e botão “Tirar dúvida no WhatsApp”. Esgotados preservam “Avise-me quando chegar”. Preço somente quando há preço e nota datada.
- Mensagens WhatsApp, rádios nativos, URL com versão/cor, diálogo nativo, compartilhamento e busca preservados. Nenhuma dependência adicionada.
- Menu, home, links internos, sitemap, llms.txt e referências de categoria em JSON-LD apontam aos novos destinos. Função caminhoCategoria centraliza o caso de seminovos.
- Parcelamento em /produtos e FAQ, com análise de crédito, fora da home.
- Nenhum arquivo removido. /catalogo e suas categorias continuam atendendo até o HTTP 301 ser implantado e testado na R7. Não há meta refresh apresentado como 301. /produtos/seminovos não é duplicado: os links apontam diretamente a /seminovos; o alias 301 permanece para R7.

## Conteúdo e slots
Os cinco JSONs de exemplo continuam rascunhos não confirmados: iPhone, seminovo, iPad, Xiaomi e acessório. Não foram inventados preços, modelos disponíveis, fotos ou garantias. Produção apresenta as categorias e conversa com a equipe; desenvolvimento mostra os slots com avisos. A fotografia da abertura representa acessórios, não estoque de um aparelho específico.

## Validações medidas
- 190 testes em 8 arquivos passaram.
- Astro check: 107 arquivos, zero erros, avisos ou sugestões.
- Build estático: 35 páginas. Zero produtos publicados; cinco rascunhos excluídos, inclusive do índice de busca.
- JavaScript gzip de /produtos, categorias e /seminovos: 4.023 bytes por página; home: 2.919 bytes. Todas as rotas geradas abaixo de 30 KB. Não há página de produto pública com dados confirmados para medir nesta entrega.
- Scripts: verificar-home, verificar-final, verificar-avaliacoes, verificar-seo, verificar-catalogo e verificar-vitrine passaram. 148 links de WhatsApp; 104 imagens com alt/dimensões; IDs únicos; copy da loja sem expressões proibidas; sem iframe inicial ou schema de avaliações.
- Navegador em desenvolvimento: busca “17 pro max”, “seminovo” e “bateria” retornaram um slot cada; limpar recuperou cinco. Modal abriu; versão e cor selecionadas entraram no link e na mensagem WhatsApp. Esc fechou, restaurou a URL da busca e devolveu foco ao card.
- Composição visual conferida; largura 1348px, scrollWidth 1348px, H1 único. Captura: smartlion-r4-vitrine.jpg; faixa amarela e slots existem apenas em DEV.
- Sem medição nova de Lighthouse, axe, LCP, CLS ou INP. Não foram emulados 390/1440px exatos, JS desligado ou reduced-motion no navegador. A estrutura estática, links e regras CSS foram preservados; isso não equivale a uma certificação de acessibilidade.

## Comandos
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-vitrine.mjs
node scripts/verificar-catalogo.mjs
node scripts/verificar-home.mjs
node scripts/verificar-final.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
pnpm dev
```

## Como conferir
Em 390px: abertura em coluna; chips roláveis sem ampliar a página; busca e condição empilhadas; botões e rádios alcançáveis por teclado; modal com fechamento visível e Esc; sem rolagem horizontal da página. Em 1440px: título e foto lado a lado, cards sem caixas brancas arredondadas, linhas discretas, abertura das categorias com detalhe lateral. O rodapé e o cabeçalho escuros contrastam com a superfície quente da vitrine.

No desenvolvimento, abra /produtos, busque um slot, escolha versão/cor e confira o texto codificado no link sem enviar mensagem. Recarregue a URL de produto com a query: deve manter as opções. Use Tab/Shift+Tab no modal, depois Esc, e confira retorno do foco. No build, nenhum slot deve aparecer. Sem JavaScript, categorias, páginas, contatos e horários devem continuar acessíveis; a busca informa sua dependência de JS.

Para medições restantes, com Chrome e ChromeDriver instalados:
```sh
pnpm preview --port 4321
```
Em outro terminal:
```sh
cd /workspace/sites/smartlion
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```
O preview privado continua noindex. INP requer interações/campo e não é inferido de Lighthouse ou tamanho do bundle.

## Pendências e próximo passo
Confirmar modelos, versões, cores, fotos e data de confirmação de cada produto; validar condições comerciais vigentes; completar HTTP 301 e QA R7. As pendências jurídicas e fotográficas anteriores permanecem. Nenhuma pergunta nova bloqueia a próxima fase.

R5: avaliações e Visite-nos. Parar e aguardar “siga”.

````

## docs/smartlion-r4-vitrine.jpg

Captura binária do navegador, incluída no repositório.

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
assert(readFileSync('dist/produtos/index.html','utf8').includes('sujeito a análise de crédito'));
assert(!html.includes('PENDENTE'));
assert(!html.includes('rascunho-'));
console.log('Ordem dos 10 blocos institucionais, 3 citações, sem modal comercial, dimensões de imagens, prioridade única e mapa sem iframe inicial: OK.');
const avifs=[...html.matchAll(/srcset="([^"]+)"/g)].flatMap(m=>m[1].split(',').map(s=>s.trim().split(' ')[0])).filter(s=>s.endsWith('.avif'));
const tamanhos=[...new Set(avifs)].map(src=>({src,bytes:statSync('dist'+src).size}));
console.log(JSON.stringify({avifVariantes:tamanhos.length,menorBytes:Math.min(...tamanhos.map(i=>i.bytes)),maiorBytes:Math.max(...tamanhos.map(i=>i.bytes))}));

````

## scripts/verificar-vitrine.mjs

````mjs
import {readFileSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const paginas=['produtos','produtos/iphone','produtos/ipad-mac-watch','produtos/xiaomi','produtos/casa-e-games','produtos/acessorios','produtos/perfumaria','seminovos'];
for(const rota of paginas){
 const html=readFileSync(`dist/${rota}/index.html`,'utf8');
 assert.equal((html.match(/<h1(?:\s|>)/g)||[]).length,1,rota);
 assert(html.includes('id="busca"'),rota);
 assert(html.includes('Disponibilidade e condições pelo WhatsApp'),rota);
 assert(!html.includes('data-card-produto='),`Rascunho publicado: ${rota}`);
 assert(!html.includes('href="/catalogo'),`Link antigo: ${rota}`);
 assert(!html.includes('PENDENTE'),`Aviso DEV publicado: ${rota}`);
}
assert(readFileSync('dist/produtos/index.html','utf8').includes('sujeito a análise de crédito'));
assert(readFileSync('dist/seminovos/index.html','utf8').includes('6 meses de garantia'));
assert(existsSync('dist/catalogo/index.html'),'Preservar rota antiga até HTTP 301');
const sitemap=readFileSync('dist/sitemap.xml','utf8');
assert(!sitemap.includes('/catalogo'));
assert(!sitemap.includes('/produtos/seminovos'));
assert(sitemap.includes('/seminovos'));
assert.deepEqual(JSON.parse(readFileSync('dist/busca.json','utf8')),[],'Índice de produção sem rascunhos');
console.log('Vitrine: 8 rotas novas, busca, contatos, garantias e parcelamento presentes; rascunhos ausentes e rotas antigas preservadas.');

````

## src/components/ChipsCategorias.astro

````astro
---
import { categorias, caminhoCategoria } from '../config/categorias';
const path=Astro.url.pathname.replace(/\/$/,'');
const atual=path==='/seminovos'?'seminovos':/^\/(produtos|catalogo)\//.test(path)?path.split('/')[2]:'';
---
<nav aria-label="Categorias de produtos"><div class="chips"><a href="/produtos" data-filtro-categoria="" aria-current={!atual?'page':undefined}>Todas</a>{categorias.map(c=><a href={caminhoCategoria(c.slug)} data-filtro-categoria={c.slug} aria-current={atual===c.slug?'page':undefined}>{c.nome}</a>)}</div></nav>
<style>
nav{border-block:1px solid #c7c1b8;color:var(--ink)}.chips{display:flex;align-items:center;gap:28px;overflow-x:auto;scrollbar-width:thin;scrollbar-color:var(--wood) var(--surface);padding:3px}a{white-space:nowrap;min-height:52px;display:flex;align-items:center;font-size:.82rem;flex-shrink:0;padding:4px 2px;border-bottom:2px solid transparent}a[aria-current]{border-bottom-color:var(--focus-light)}a:focus-visible{outline-color:var(--focus-light);outline-offset:0}@media(max-width:700px){.chips{gap:24px}a{min-height:48px}}
</style>

````

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Remodelagem R4</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fundação, fundadores, equipe autorizada, vitrine de iPhones, atendimento com pessoas autorizadas, fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````

## src/components/catalogo/AberturaVitrine.astro

````astro
---
import { Picture } from 'astro:assets';
import capas from '../../assets/home/capas.jpg';
import { loja } from '../../config/loja';
interface Props { categoria?: {slug:string;nome:string;detalhe:string} }
const {categoria}=Astro.props;
---
<header class="abertura-vitrine">
 <div class="introducao">
  {categoria && <a class="voltar" href="/produtos">← Todos os produtos</a>}
  <p class="eyebrow">Produtos · {loja.endereco.cidade}</p>
  <h1>{categoria?categoria.nome:<>Tecnologia que faz<br/>parte do seu dia.</>}</h1>
  <p class="resposta">{categoria?`Conheça ${categoria.nome} na ${loja.nome}, na ${loja.endereco.rua}, ${loja.endereco.numero}, Centro de ${loja.endereco.cidade}.`:`Na ${loja.nome}, reunimos Apple, Xiaomi, acessórios e importados no Centro de ${loja.endereco.cidade}.`} A gente conversa sobre o que você procura e ajuda na escolha pelo WhatsApp.</p>
  {categoria?.slug==='seminovos' && <p class="garantia">Nossos iPhones seminovos passam por avaliação da equipe técnica e têm {loja.garantiaSeminovosMeses} meses de garantia da loja. Consulte a cobertura com a equipe.</p>}
  <a class="conheca" href="/a-loja">Conheça também o espaço da loja ↗</a>
 </div>
 {!categoria && <figure><Picture src={capas} formats={['avif','webp']} widths={[320,480,640]} sizes="(max-width:700px) 80vw, 28vw" alt="Capas de celular com textura de couro fotografadas pela Smart Lion" loading="eager"/><figcaption>Acessórios fotografados na Smart Lion.</figcaption></figure>}
 {categoria && <p class="detalhe">{categoria.detalhe}</p>}
</header>
<style>
.abertura-vitrine{display:grid;grid-template-columns:minmax(0,1fr) minmax(200px,.45fr);gap:clamp(32px,6vw,100px);align-items:center;padding:clamp(40px,7vw,90px) 0}.eyebrow{color:#6a503b}h1{font-size:clamp(2.7rem,5.1vw,5.5rem);margin:20px 0 28px}.resposta,.garantia{max-width:670px;color:var(--text-dark)}.garantia{margin-top:20px;padding-left:18px;border-left:2px solid var(--wood)}.voltar{display:inline-flex;align-items:center;min-height:44px;margin-bottom:24px;font-size:.8rem}.conheca{display:inline-flex;align-items:center;min-height:44px;margin-top:22px;font-size:.85rem;text-decoration:underline;text-underline-offset:5px}figure{margin:0;max-width:360px;justify-self:end;transform:rotate(2deg)}figure :global(img){width:100%;height:auto;aspect-ratio:4/5;object-fit:cover}figcaption{font-size:.7rem;color:var(--text-dark);padding-top:12px}.detalhe{font-family:var(--font-heading);font-size:clamp(1.6rem,3vw,2.6rem);border-top:1px solid var(--wood);padding-top:24px;color:#6a503b;max-width:310px}@media(max-width:700px){.abertura-vitrine{grid-template-columns:1fr;gap:28px}figure{max-width:280px;justify-self:center;transform:none}.detalhe{font-size:1.4rem;max-width:none}}
</style>

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
 <div class="preco">{p.preco !== null && p.precoNota ? <strong>{formatarPreco(p)}</strong> : <span>Disponibilidade e condições pelo WhatsApp</span>}{p.precoNota && <small>{textoPrecoNota(p)}</small>}</div>
 <div class="card-acoes"><a class="opcoes" href={caminhoProduto(p.slug)} data-abrir-produto>Ver opções <span aria-hidden="true">↗</span></a><a class="atalho" href={consultaProduto(p,origem)} aria-label={p.disponibilidade === 'esgotado' ? `Pedir aviso quando chegar: ${p.nome}` : `Consultar ${p.nome} no WhatsApp`}><svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M21 11.5a9 9 0 0 1-13.4 7.9L3 21l1.5-4.6A9 9 0 1 1 21 11.5Z"/><path d="M8 7c0 5 4 9 9 9l1-3-3-1-1 1-3-3 1-1-1-3Z"/></svg></a></div>
</article>
<style>.produto-card{min-width:0;display:flex;flex-direction:column;padding-bottom:18px;border-bottom:1px solid #c6c6c0}.foto-link{display:block;margin-bottom:18px}.card-top{display:flex;justify-content:space-between;gap:8px;font-size:.7rem;letter-spacing:.02em;color:#50514e}.produto-card h3{font-size:1.3rem;line-height:1.2;margin:10px 0}.rascunho{font-size:.65rem;color:#873d00;margin-top:8px}.versoes,.selos{font-size:.75rem;color:#535450}.cores{display:flex;gap:6px;margin:12px 0;min-height:16px}.cor{width:14px;height:14px;background:var(--cor);border:1px solid #777;border-radius:50%}.preco{margin-top:auto;padding-top:8px}.preco>span{font-size:.75rem;color:var(--text-dark);display:block;max-width:24ch}.preco strong{font-size:1rem;font-weight:600}.preco small{display:block;font-size:.7rem;margin-top:6px}.card-acoes{display:flex;gap:8px;margin-top:14px}.opcoes{display:flex;flex:1;align-items:center;justify-content:space-between;border:1px solid #92938c;padding:10px 14px;font-size:.8rem;min-height:46px}.atalho{display:grid;place-items:center;background:var(--whatsapp);color:#082b16;width:46px;min-height:46px}.opcoes:hover{background:#e9e3db;text-decoration:none}.atalho:hover{filter:brightness(.94)}</style>

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
 <div class="catalogo-meta"><h2 class="sr-only">Modelos do catálogo</h2><p data-contagem role="status" aria-live="polite">{produtos.length} {produtos.length===1?'modelo cadastrado':'modelos cadastrados'}</p><span>Disponibilidade e condições pelo WhatsApp</span></div>
 <div class="grade-produtos">{produtos.map(p=><CardProduto produto={p}/>)}</div>
 <div class="catalogo-vazio" data-catalogo-vazio hidden={produtos.length>0}><p class="eyebrow">Vamos encontrar seu próximo aparelho</p><h2>Converse com a nossa equipe.</h2><p data-vazio-texto>{produtos.length ? 'Não encontramos um modelo para essa busca. Consulte as opções com a equipe.' : 'Consulte os modelos e as condições pelo WhatsApp. Nossa equipe ajuda você a escolher.'}</p><BotaoWhatsApp rotulo="Tirar dúvida no WhatsApp"/></div>
</div>
{produtos.length > 0 && <ModalProduto/>}
<script src="../../scripts/busca.ts"></script>
<style>.aviso-dev{background:#fff0c7;color:#633a00;padding:16px;font-size:.8rem;margin-bottom:24px}.busca-catalogo{display:flex;align-items:end;gap:12px;padding:24px 0;border-block:1px solid #c5c6c0;scroll-margin-top:165px}.busca-catalogo label{display:block;font-size:.8rem;margin-bottom:8px}.campo-busca{flex:1}.campo-condicao{width:160px}.busca-catalogo input,.busca-catalogo select{display:block;min-height:48px;width:100%;background:var(--surface);border:1px solid #868780;border-radius:0;padding:11px 14px;color:var(--ink)}.busca-catalogo button{min-height:48px;padding:10px 22px;border:1px solid var(--ink);background:var(--ink);color:white}.busca-catalogo .limpar{background:transparent;color:var(--ink);border-color:#777}.catalogo-meta{display:flex;justify-content:space-between;gap:16px;font-size:.75rem;color:#52534e;margin:28px 0}.grade-produtos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:40px 24px}.catalogo-vazio{padding:48px 0;max-width:650px}.catalogo-vazio .eyebrow{color:#6a503b}.catalogo-vazio h2{margin:12px 0 20px}.catalogo-vazio>p{margin-bottom:24px;color:#414246}.aviso{font-size:.8rem;margin-top:12px}@media(max-width:1050px){.grade-produtos{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.busca-catalogo{flex-wrap:wrap}.campo-busca{flex-basis:100%}.campo-condicao{flex:1;min-width:150px}.busca-catalogo .limpar{flex-basis:100%}.grade-produtos{grid-template-columns:repeat(2,minmax(0,1fr));gap:32px 16px}.catalogo-meta span{max-width:120px;text-align:right}}@media(max-width:420px){.grade-produtos{grid-template-columns:1fr}.grade-produtos :global(.foto-produto){max-height:320px;aspect-ratio:auto;height:320px}}</style>

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
  <dl class="resumo"><dt>Modelo</dt><dd>{p.nome}</dd><dt>Versão</dt><dd data-resumo-versao>A escolher</dd><dt>Cor</dt><dd data-resumo-cor>A escolher</dd>{p.preco !== null && p.precoNota && <><dt>Preço</dt><dd>{formatarPreco(p)}</dd></>}</dl>
  {p.precoNota && <p class="preco-nota">{textoPrecoNota(p)}</p>}
  <a class="button button-wa consulta" data-consulta-produto href={consultaProduto(p,origem)}>{p.disponibilidade === 'esgotado' ? 'Avise-me quando chegar' : 'Tirar dúvida no WhatsApp'}</a>
  <p class="nota">Disponibilidade e condições pelo WhatsApp.</p>
  <p class="feedback" data-feedback-produto role="status" aria-live="polite">{p.disponibilidade === 'esgotado' ? 'Peça à equipe para avisar quando chegar.' : 'Selecione versão e cor para incluir na consulta.'}</p>
  <noscript><p class="nota">O botão abre uma consulta geral deste modelo. Informe a versão e a cor desejadas na conversa.</p></noscript>
  <button class="compartilhar" type="button" data-compartilhar hidden>Compartilhar produto</button>
  <details data-copia><summary>Link do produto para copiar</summary><label class="sr-only" for={`link-${p.slug}`}>Link compartilhável do produto</label><input class="link-copia" id={`link-${p.slug}`} data-link-copia value={urlProduto(p.slug,origem)} readonly/></details>
 </div>
</section>

````

## src/components/catalogo/Vitrine.astro

````astro
---
import { obterProdutos } from '../../lib/produtos';
import CardProduto from './CardProduto.astro';

const produtos=(await obterProdutos()).filter(p=>p.destaque).slice(0,8);
---
<section class="vitrine light"><div class="container"><div class="titulo-vitrine"><div><p class="eyebrow">Explore as opções</p><h2>Na sua próxima escolha.</h2></div><a href="/produtos">Ver catálogo completo ↗</a></div>{import.meta.env.DEV&&<p class="aviso">Prévia: slots de demonstração, fora do build de produção.</p>}{produtos.length === 0 && <p class="sob-consulta">Seu próximo aparelho começa com uma conversa. Consulte os modelos disponíveis, versões e condições com a equipe.</p>}<div class="grade">{produtos.map(p=><CardProduto produto={p}/>)}</div></div></section>
<style>.vitrine{padding:60px 0}.titulo-vitrine{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:28px}.titulo-vitrine .eyebrow{color:#8c0747;margin-bottom:14px}.titulo-vitrine a{font-size:.8rem;white-space:nowrap}.aviso{font-size:.8rem;color:#633a00;margin-bottom:20px}.grade{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:32px 24px}@media(max-width:1000px){.grade{grid-template-columns:repeat(3,minmax(0,1fr))}}@media(max-width:700px){.titulo-vitrine{display:block}.titulo-vitrine a{display:inline-block;margin-top:18px}.grade{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:420px){.grade{grid-template-columns:1fr}}</style>

````

## src/components/home/CategoriasHome.astro

````astro
---
import { obterProdutos } from '../../lib/produtos';
import { categoriasProduto } from '../../lib/catalogo';
import { categorias, caminhoCategoria } from '../../config/categorias';
import CardProduto from '../catalogo/CardProduto.astro';
const produtos=await obterProdutos();
---
<section class="categorias-home light" aria-labelledby="categorias-titulo"><div class="container"><p class="eyebrow">Escolha por categoria</p><h2 id="categorias-titulo">Tecnologia para<br/>o seu dia a dia.</h2>{categorias.map((c,i)=>{const lista=produtos.filter(p=>categoriasProduto(p).includes(c.slug));return <section class="categoria" aria-labelledby={`cat-${c.slug}`}><div class="cabecalho"><span class="indice" aria-hidden="true">0{i+1}</span><div><h3 id={`cat-${c.slug}`}>{c.nome}</h3><p>{c.detalhe}</p></div><a href={caminhoCategoria(c.slug)}>{lista.length ? `Ver todos (${lista.length})` : 'Consultar categoria'} ↗</a></div>{lista.length ? <div class="produtos">{lista.slice(0,8).map(p=><CardProduto produto={p}/>)}</div> : <p class="consulta">Modelos, versões e disponibilidade sob consulta com a equipe.</p>}</section>})}</div></section>
<style>.categorias-home{padding:70px 0}.eyebrow{color:#8c0747;margin-bottom:14px}.categoria{border-bottom:1px solid #b7b8b4;padding:30px 0}.cabecalho{display:flex;gap:22px;align-items:center}.indice{font-size:.75rem;color:#595a5d}h3{font-size:clamp(1.6rem,3vw,2.3rem)}.cabecalho p,.consulta{font-size:.85rem;color:#414246;margin-top:8px}.cabecalho a{margin-left:auto;font-size:.85rem;min-height:44px;display:flex;align-items:center}.consulta{margin-left:40px}.produtos{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:24px;margin-top:26px}@media(max-width:800px){.produtos{grid-template-columns:repeat(2,minmax(0,1fr))}.cabecalho{gap:12px;flex-wrap:wrap}.cabecalho a{margin-left:0}.consulta{margin-left:0}}@media(max-width:420px){.produtos{grid-template-columns:1fr}}</style>

````

## src/config/categorias.ts

````ts
import { loja } from './loja';
export const categorias = [
  { slug: 'iphone', nome: 'iPhone', detalhe: 'Novos e seminovos' },
  { slug: 'seminovos', nome: 'Seminovos', detalhe: `${loja.garantiaSeminovosMeses} meses de garantia` },
  { slug: 'ipad-mac-watch', nome: 'iPad, Mac e Watch', detalhe: 'E acessórios Apple' },
  { slug: 'xiaomi', nome: 'Xiaomi', detalhe: 'POCO e Redmi' },
  { slug: 'casa-e-games', nome: 'Casa e games', detalhe: 'Tecnologia para sua rotina' },
  { slug: 'acessorios', nome: 'Acessórios', detalhe: 'Proteção e praticidade' },
  { slug: 'perfumaria', nome: 'Perfumaria', detalhe: 'Importados' },
] as const;

/** Destino institucional; seminovos tem página própria. */
export function caminhoCategoria(slug: string): string {
  return slug === 'seminovos' ? '/seminovos' : `/produtos/${slug}`;
}

````

## src/config/navegacao.ts

````ts
// Destinos atuais preservados até a migração com 301 nas fases R3–R5.
export const navegacao = [
  { nome: 'A Loja', href: '/a-loja' },
  { nome: 'Nossa História', href: '/nossa-historia' },
  { nome: 'Avaliações', href: '/avaliacoes' },
  { nome: 'Visite-nos', href: '/como-chegar' },
] as const;
export const atividades = [
  { nome: 'Produtos', href: '/produtos' },
  { nome: 'Seminovos', href: '/seminovos' },
  { nome: 'Assistência técnica', href: '/assistencia-tecnica' },
  { nome: 'Curso', href: '/curso-manutencao-celular' },
] as const;

````

## src/lib/seo.ts

````ts
import { loja } from '../config/loja';
import { categorias, caminhoCategoria } from '../config/categorias';
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
 const graph:Record<string,unknown>[]=[{'@type':'ElectronicsStore','@id':id,name:loja.nome,url:url('/'),telephone:loja.telefone.numero,address:{'@type':'PostalAddress',streetAddress:`${loja.endereco.rua}, ${loja.endereco.numero}`,addressLocality:loja.endereco.cidade,addressRegion:loja.endereco.uf,postalCode:loja.endereco.cep,addressCountry:'BR'},geo:{'@type':'GeoCoordinates',...loja.coordenadas},sameAs:[loja.instagram.url,loja.googleMaps],openingHoursSpecification:loja.horario.semana.flatMap(h=>h.periodos.map(([a,b])=>({'@type':'OpeningHoursSpecification',dayOfWeek:h.dias.map(d=>`https://schema.org/${dias[d]}`),opens:hora(a),closes:hora(b)}))),hasOfferCatalog:{'@type':'OfferCatalog',name:'Catálogo sob consulta',itemListElement:categorias.map(c=>({'@type':'OfferCatalog',name:c.nome,url:url(caminhoCategoria(c.slug))}))}}];
 if(p!=='/'&&p!=='/404')graph.push({'@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,name:'Início',item:url('/')},{'@type':'ListItem',position:2,name:title.split(' | ')[0],item:url(p)}]});
 if(p==='/assistencia-tecnica'||p.startsWith('/assistencia-tecnica/')){const s=servicos.find(s=>p.endsWith('/'+s.slug));graph.push({'@type':'Service','@id':url(p)+'#servico',name:s?.titulo??'Assistência técnica de celulares',description:s?.resumo??loja.irpDescricao,provider:{'@id':id},areaServed:{'@type':'City',name:loja.endereco.cidade},url:url(p)});}
 if(p==='/perguntas-frequentes')graph.push({'@type':'FAQPage',mainEntity:perguntas.map(p=>({'@type':'Question',name:p.pergunta,acceptedAnswer:{'@type':'Answer',text:p.resposta}}))});
 if(produto)graph.push({'@type':'Product',name:produto.nome,description:produto.descricaoCurta,url:url(p),image:produto.imagens.map(i=>new URL(i.src,site).href)});
 return {'@context':'https://schema.org','@graph':graph};
}

````

## src/pages/a-loja.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import Capitulo from '../components/editorial/Capitulo.astro';
import RevelacaoImagem from '../components/editorial/RevelacaoImagem.astro';
import LojaHome from '../components/home/LojaHome.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import { loja,enderecoCompleto } from '../config/loja';
import foto from '../assets/loja.jpg';
import capas from '../assets/home/capas.jpg';
import bancada from '../assets/home/bancada.jpg';
import laboratorio from '../assets/home/laboratorio.jpg';
---
<Pagina titulo="Entre. A casa é nossa, a conversa é com você." descricao="Conheça o espaço real da Smart Lion em Lages: loja, acessórios, bancada de assistência técnica e laboratório do Centro Técnico." resposta={`A ${loja.nome} reúne produtos, assistência técnica e ensino na ${enderecoCompleto}. Conheça os ambientes e fale com a gente pelo WhatsApp para planejar sua visita.`}>
<BotaoWhatsApp slot="acao"/>
<Capitulo id="fachada" tema="claro" marcador="01 / Chegando à loja" titulo="No Centro de Lages."><div class="entrada"><div><p>Estamos na {loja.endereco.rua}, {loja.endereco.numero}, no {loja.endereco.bairro}. {loja.ambientes.entradaAcessivel&&'A entrada é acessível para pessoas em cadeira de rodas.'} Se precisar de orientação para chegar, fale com a gente.</p><address>{enderecoCompleto}<br/>CEP {loja.endereco.cep}</address><a class="link-editorial" href={loja.googleMaps}>Abra a rota no Google Maps ↗</a></div><div class="entrada-nota"><p class="numero">{loja.endereco.numero}</p><p>{loja.endereco.rua}<br/>{loja.endereco.cidade} / {loja.endereco.uf}</p>{import.meta.env.DEV&&!loja.fotoFachada&&<p class="pendente">PROVISÓRIO: aguardando foto real da fachada.</p>}</div></div></Capitulo>
<Capitulo id="vitrine-loja" marcador="02 / Produtos e acessórios" titulo="Conheça. Pergunte. Escolha com calma."><div class="ambiente"><RevelacaoImagem src={capas} alt="Capas de celular com textura de couro em três cores" legenda="Acessórios fotografados pela Smart Lion." sizes="(max-width:800px) 100vw, 50vw"/><div><p>Reunimos Apple, Xiaomi, importados e acessórios para o dia a dia. A equipe atende também pelo WhatsApp para conversar sobre modelos e disponibilidade.</p><a class="link-editorial" href="/produtos">Explore as categorias ↗</a>{import.meta.env.DEV&&!loja.ambientes.fotoVitrineIphones&&<p class="pendente">PROVISÓRIO: aguardando foto da vitrine de iPhones. A imagem atual mostra acessórios.</p>}</div></div></Capitulo>
<Capitulo id="balcao" tema="claro" marcador="03 / A experiência na loja" titulo="Atendimento de perto."><p slot="introducao">Balcão de madeira e prateleiras iluminadas compõem nosso espaço. Aqui, a conversa ajuda a entender o que você procura, antes de decidir.</p><RevelacaoImagem src={foto} alt="Balcão de madeira, cadeiras e prateleiras no interior da Smart Lion" legenda="O interior da loja."/>{import.meta.env.DEV&&!loja.ambientes.fotoAtendimento&&<p class="pendente">PROVISÓRIO: aguardando foto do atendimento com pessoas autorizadas.</p>}</Capitulo>
<Capitulo id="bancada-tour" marcador="04 / Assistência técnica" titulo="Um lugar para cuidar do seu aparelho."><div class="ambiente invertido"><RevelacaoImagem src={bancada} alt="Microscópio e ferramentas na bancada técnica da Smart Lion" legenda="Bancada de manutenção da Smart Lion." sizes="(max-width:800px) 100vw, 50vw"/><div><p>{loja.irpDescricao}. Nossa bancada reúne microscópio e ferramentas para a manutenção; a equipe conversa com você sobre avaliação e orçamento.</p><a class="link-editorial" href="/assistencia-tecnica">Conheça a assistência ↗</a></div></div></Capitulo>
<Capitulo id="laboratorio-tour" tema="claro" marcador="05 / Centro Técnico" titulo="Aprender também passa pela prática."><div class="ambiente"><RevelacaoImagem src={laboratorio} alt="Bancadas individuais e equipamentos do laboratório de treinamento" legenda="Laboratório de manutenção anexo à loja." sizes="(max-width:800px) 100vw, 50vw"/><div><p>O laboratório anexo à loja tem bancadas individuais para os treinamentos de manutenção de celulares. Teoria e prática fazem parte do aprendizado; converse com a equipe sobre o conteúdo e as próximas turmas.</p><a class="link-editorial" href="/curso-manutencao-celular">Conheça o curso ↗</a></div></div></Capitulo>
<LojaHome/>
</Pagina>
<style>.entrada,.ambiente{display:grid;grid-template-columns:1.1fr 1fr;align-items:center;gap:clamp(32px,8vw,120px)}.entrada p,.ambiente p{font-size:1.05rem;max-width:550px}.entrada address{font-style:normal;margin:24px 0}.entrada-nota{padding-left:48px;border-left:1px solid var(--wood)}.entrada-nota .numero{font:400 clamp(5rem,11vw,10rem)/1 var(--font-heading);font-variant-numeric:tabular-nums;margin-bottom:20px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;margin-top:24px;text-decoration:underline;text-underline-offset:6px}.ambiente.invertido>:first-child{order:2}.pendente{background:#fff0c7;color:#633a00;padding:16px;margin-top:20px;font-size:.8rem!important}@media(max-width:800px){.entrada,.ambiente{grid-template-columns:1fr;gap:32px}.entrada-nota{padding-left:24px}.ambiente.invertido>:first-child{order:0}}</style>

````

## src/pages/catalogo/[categoria].astro

````astro
---
import AberturaVitrine from '../../components/catalogo/AberturaVitrine.astro';
import Layout from '../../layouts/LayoutBase.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { categorias } from '../../config/categorias';
import { obterProdutos } from '../../lib/produtos';
import { categoriasProduto } from '../../lib/catalogo';
export function getStaticPaths(){return categorias.map(c=>({params:{categoria:c.slug},props:{categoria:c}}))}
const {categoria}=Astro.props;
const produtos=(await obterProdutos()).filter(p=>categoriasProduto(p).includes(categoria.slug));
---
<Layout title={`${categoria.nome} em Lages | Smart Lion`} description={`Consulte ${categoria.nome} na Smart Lion, no Centro de Lages. Modelos e condições pelo WhatsApp.`}><section class="categoria light"><div class="container"><AberturaVitrine categoria={categoria}/><Catalogo produtos={produtos} categoria={categoria.slug}/></div></section></Layout>
<style>.categoria{padding:0 0 var(--space-chapter)}</style>

````

## src/pages/catalogo/index.astro

````astro
---
import AberturaVitrine from '../../components/catalogo/AberturaVitrine.astro';
import Layout from '../../layouts/LayoutBase.astro';
import ParcelamentoHome from '../../components/home/ParcelamentoHome.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { obterProdutos } from '../../lib/produtos';
const produtos=await obterProdutos();
---
<Layout title="Catálogo de iPhone e importados em Lages | Smart Lion" description="Explore as categorias da Smart Lion em Lages. Consulte versões, cores e condições pelo WhatsApp."><section class="catalogo light"><div class="container"><AberturaVitrine/><Catalogo produtos={produtos}/></div></section><ParcelamentoHome/></Layout>
<style>.catalogo{padding:0 0 var(--space-chapter)}</style>

````

## src/pages/index.astro

````astro
---
import { Picture } from 'astro:assets';
import Layout from '../layouts/LayoutBase.astro';
import LinhaDoTempo from '../components/editorial/LinhaDoTempo.astro';
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
import { categorias, caminhoCategoria } from '../config/categorias';
import fotoLoja from '../assets/loja.jpg';
import bancada from '../assets/home/bancada.jpg';
import laboratorio from '../assets/home/laboratorio.jpg';
import capas from '../assets/home/capas.jpg';
import caixas from '../assets/home/caixas-de-som.jpg';
const relatos=destaques.filter(a=>['g-001','g-003','g-007'].includes(a.id));
const pilares=[
 {numero:'01',titulo:'Produtos para a sua rotina.',texto:'Apple, Xiaomi e importados. A gente conversa sobre o que você procura e ajuda na escolha.',href:'/produtos',link:'Conheça os produtos',foto:capas,alt:'Capas de celular com textura de couro fotografadas pela Smart Lion'},
 {numero:'02',titulo:'Seminovos com procedência.',texto:`Nossos iPhones seminovos passam por avaliação técnica e têm ${loja.garantiaSeminovosMeses} meses de garantia.`,href:'/seminovos',link:'Conheça os seminovos',foto:fotoLoja,alt:'Interior da Smart Lion, onde a equipe atende sobre novos e seminovos'},
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
<Capitulo id="ambiente" marcador="A casa do leão" titulo="Entre. Conheça nosso espaço."><p slot="introducao">Da loja ao laboratório, produtos, cuidado técnico e aprendizado fazem parte do nosso dia a dia.</p><div class="galeria"><RevelacaoImagem src={fotoLoja} alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" legenda="01 / A loja. Madeira e tecnologia no mesmo ambiente."/><div class="galeria-lateral"><RevelacaoImagem src={bancada} alt="Bancada com microscópio e ferramentas de manutenção" legenda="02 / A bancada de assistência." sizes="(max-width:700px) 100vw, 35vw"/><p>Um aparelho acompanha muita coisa da nossa vida. O cuidado com ele também faz parte da nossa história.</p></div><div class="galeria-laboratorio"><RevelacaoImagem src={laboratorio} alt="Bancadas individuais do laboratório de manutenção da Smart Lion" legenda="03 / O Centro Técnico. Um lugar para aprender na prática." sizes="(max-width:700px) 100vw, 50vw"/></div><div class="galeria-convite"><p class="texto-display">Conheça de perto.</p><a class="link-editorial" href="/a-loja">Fazer o tour ↗</a>{import.meta.env.DEV&&<p class="pendente">PROVISÓRIO: Faltam fachada, vitrine e balcão com atendimento autorizado.</p>}</div></div></Capitulo>
<Capitulo id="atividades" tema="claro" marcador="O que fazemos" titulo="Diferentes caminhos. O mesmo cuidado."><div class="pilares">{pilares.map(p=><article><div class="pilar-imagem"><Picture src={p.foto} formats={['avif','webp']} widths={[400,640,900]} sizes="(max-width:700px) 100vw, 45vw" alt={p.alt} loading="lazy"/></div><div class="pilar-texto"><span class="numero">{p.numero}</span><div><h3>{p.titulo}</h3><p>{p.texto}</p><a class="link-editorial" href={p.href}>{p.link} ↗</a></div></div></article>)}</div>{import.meta.env.DEV&&<p class="pendente">PROVISÓRIO: o pilar de seminovos usa a foto do interior, sem representar estoque. Aguardando foto real dos aparelhos.</p>}</Capitulo>
<Capitulo id="vitrine" tema="claro" marcador="Produtos e importados" titulo="O que você encontra aqui."><p slot="introducao">Conheça nossas categorias. Para saber quais modelos estão disponíveis, fale com a equipe.</p><div class="categorias-editoriais">{categorias.filter(c=>c.slug!=='seminovos').map((c,i)=>{const foto=fotosCategoria[c.slug as keyof typeof fotosCategoria];return <article><span class="numero">{String(i+1).padStart(2,'0')}</span><div><h3>{c.nome}</h3><p>{c.detalhe}</p></div>{foto&&<Picture src={foto.src} formats={['avif','webp']} widths={[160,240,320]} sizes="120px" alt={foto.alt} loading="lazy"/>}<a href={caminhoCategoria(c.slug)} aria-label={`Saiba mais sobre ${c.nome}`}>Saiba mais <span aria-hidden="true">↗</span></a>{import.meta.env.DEV&&!foto&&<span class="pendente">Foto PENDENTE</span>}</article>})}</div><a class="link-editorial" href="/produtos">Ver todos os produtos ↗</a></Capitulo>
<Capitulo id="depoimentos" tema="claro" marcador="O que dizem de nós" titulo="A confiança tem muitas vozes."><div class="avaliacoes-resumo"><div><p class="nota-google tabular">{String(resumoAvaliacoes.nota).replace('.',',')}{Number.isInteger(resumoAvaliacoes.nota)?',0':''}</p><a href={loja.googleMaps}><MarcaGoogle/>{resumoAvaliacoes.total} avaliações no Google ↗</a><p class="data-coleta">Dados coletados em {atualizadoEm}.</p></div><p>Atendimento, compra e assistência, nas palavras de quem já passou por aqui.</p></div><div class="citacoes">{relatos.map(a=><Depoimento avaliacao={a}/>)}</div><p class="contexto">Seleção de relatos literais. Experiências e prazos citados são individuais, da época da avaliação.</p><a class="link-editorial" href="/avaliacoes">Ler mais avaliações ↗</a></Capitulo>
<Capitulo id="historia" marcador="Nossa história" titulo="Da escolha ao cuidado. Sempre com gente por perto."><div class="historia-texto"><p>A Smart Lion nasceu com a ideia de tornar a experiência com tecnologia segura e confiável. Produtos novos e seminovos, procedência e suporte fazem parte dessa relação.</p><p>Com o tempo, esse cuidado também ganhou espaço na manutenção e no ensino. Hoje, nossa loja reúne venda de importados, assistência técnica e treinamento de manutenção de celulares.</p></div><LinhaDoTempo resumida/><a class="link-editorial" href="/nossa-historia">Conheça nossa história ↗</a></Capitulo>
<InstagramHome/>
<LojaHome/>
</Layout>
<style>
.abertura{position:relative;isolation:isolate;min-height:calc(100svh - 100px);display:flex;align-items:center;padding:clamp(60px,8vw,120px) 0 28px}.abertura :global(picture){position:absolute;inset:0;z-index:-2}.abertura :global(img){width:100%;height:100%;object-fit:cover}.abertura:before{content:'';position:absolute;inset:0;z-index:-1;background:linear-gradient(90deg,#111214f5 0%,#111214df 45%,#11121435 100%)}.abertura h1{max-width:940px;margin:28px 0;font-size:clamp(2.8rem,5.4vw,5.6rem)}h1 span{color:#ded1c2}.resposta{max-width:580px;color:#e2e0dc}.acoes{display:flex;gap:16px;flex-wrap:wrap;margin-top:32px}.abertura-rodape{display:flex;align-items:end;justify-content:space-between;gap:24px;border-top:1px solid #ffffff40;margin-top:60px;padding-top:20px}.abertura-rodape>span{font-size:.65rem;letter-spacing:.15em}.abertura-rodape :global(.status-horario){margin:0}.manifesto-texto{margin-left:30%;max-width:760px}.manifesto-texto p{font:400 clamp(1.7rem,3.3vw,3.5rem)/1.3 var(--font-heading);margin-bottom:32px}.manifesto-texto span{font-size:.95rem;color:var(--text-dark)}.galeria{display:grid;grid-template-columns:1.3fr 1fr;gap:64px}.galeria>:first-child{align-self:start}.galeria-lateral{padding-top:100px}.galeria-lateral>p{max-width:320px;color:var(--muted);margin-top:24px}.galeria-laboratorio{max-width:550px;margin-left:15%;margin-top:-80px}.galeria-convite{align-self:center}.texto-display{font:400 clamp(2rem,4vw,4rem)/1.1 var(--font-heading);margin-bottom:24px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;text-decoration:underline;text-underline-offset:7px}.pilares{display:grid;grid-template-columns:1fr 1fr;gap:80px 48px}.pilares article:nth-child(even){padding-top:80px}.pilar-imagem{aspect-ratio:4/3;overflow:hidden;background:#e2dfd8}.pilar-imagem :global(img){width:100%;height:100%;object-fit:cover}.pilar-imagem :global(picture){display:block;height:100%}.pilar-texto{display:grid;grid-template-columns:32px 1fr;gap:16px;margin-top:24px}.numero{font:400 .75rem var(--font-body);color:var(--text-dark);padding-top:10px}.pilar-texto h3{font-size:clamp(1.6rem,2.7vw,2.7rem)}.pilar-texto p{margin:18px 0;max-width:460px;color:var(--text-dark)}.categorias-editoriais{border-top:1px solid #aaa49b}.categorias-editoriais article{display:flex;align-items:center;gap:32px;min-height:152px;padding:24px 0;border-bottom:1px solid #c7c2b9}.categorias-editoriais h3{font-size:clamp(1.8rem,3vw,3rem)}.categorias-editoriais p{font-size:.85rem;color:var(--text-dark);margin-top:8px}.categorias-editoriais :global(picture){margin-left:auto}.categorias-editoriais :global(img){width:100px;height:100px;object-fit:cover}.categorias-editoriais a{margin-left:auto;min-height:48px;display:flex;align-items:center;gap:36px;white-space:nowrap;font-size:.85rem}.categorias-editoriais+a{margin-top:24px}.avaliacoes-resumo{display:flex;align-items:center;gap:15%;margin-bottom:56px}.nota-google{font:400 clamp(6rem,13vw,12rem)/1 var(--font-heading)}.avaliacoes-resumo a{display:flex;align-items:center;gap:8px;min-height:48px}.data-coleta,.contexto{font-size:.75rem;color:var(--text-dark)}.avaliacoes-resumo>p{font:400 clamp(1.8rem,3vw,3rem)/1.25 var(--font-heading);max-width:470px}.citacoes{columns:3;column-gap:48px}.citacoes :global(.depoimento){break-inside:avoid}.contexto{margin:24px 0 12px}.historia-texto{display:grid;grid-template-columns:1fr 1fr;gap:64px;color:#dedbd6;font-size:1.05rem;max-width:1100px}.marcos{display:grid;grid-template-columns:repeat(3,1fr);gap:40px;list-style:none;padding:0;margin:64px 0 36px}.marcos li{border-top:1px solid var(--wood);padding-top:24px}.marcos time{font-size:.8rem;color:var(--wood-light)}.marcos p{margin-top:16px;max-width:300px}.pendente{font-size:.75rem!important;background:#fff0c7;color:#633a00!important;padding:12px;margin-top:20px}
@media(max-width:800px){.galeria{gap:32px}.galeria-lateral{padding-top:40px}.galeria-laboratorio{margin-top:0;margin-left:0}.pilares{gap:40px 24px}.citacoes{columns:1}.historia-texto{gap:24px}.marcos{gap:20px}.categorias-editoriais article{gap:20px}.categorias-editoriais a{gap:12px}}
@media(max-width:600px){.abertura{min-height:730px;padding-top:56px}.abertura:before{background:linear-gradient(90deg,#111214ed,#111214b8)}.abertura h1{font-size:2.8rem}.abertura-rodape{align-items:start;flex-direction:column;margin-top:40px}.manifesto-texto{margin-left:0}.galeria,.pilares,.historia-texto,.marcos{grid-template-columns:1fr}.galeria-lateral{padding-top:0}.galeria-laboratorio{max-width:100%}.galeria-convite{padding-block:20px}.pilares article:nth-child(even){padding-top:0}.categorias-editoriais article{gap:14px;flex-wrap:wrap}.categorias-editoriais h3{font-size:1.8rem}.categorias-editoriais .numero{display:none}.categorias-editoriais :global(img){width:66px;height:80px}.categorias-editoriais a{font-size:.75rem}.categorias-editoriais .pendente{flex-basis:100%}.avaliacoes-resumo{display:block}.avaliacoes-resumo>p{margin-top:28px}.marcos{margin-top:36px;gap:28px}}
</style>

````

## src/pages/llms.txt.ts

````ts
import type { APIRoute } from 'astro';
import { loja,enderecoCompleto } from '../config/loja';
import { categorias, caminhoCategoria } from '../config/categorias';
import { formatarPeriodos } from '../lib/horario';
import { linkWhatsApp,mensagensWhatsApp } from '../config/whatsapp';
export const GET:APIRoute=({site})=>new Response(`# ${loja.nome}\n\n> Loja física de tecnologia em ${loja.endereco.cidade}. Catálogo sob consulta; atendimento pelo WhatsApp. Não há compra online.\n\n${loja.irpDescricao}. Seminovos com ${loja.garantiaSeminovosMeses} meses de garantia da loja.\n\n## Contato\n- Endereço: ${enderecoCompleto}, CEP ${loja.endereco.cep}\n- Telefone: ${loja.telefone.exibicao}\n- [WhatsApp ${loja.whatsapp.exibicao}](${linkWhatsApp(mensagensWhatsApp.geral())})\n- [Instagram ${loja.instagram.nome}](${loja.instagram.url})\n\n## Horários (${loja.horario.fuso})\n${loja.horario.semana.map(h=>`- ${h.rotulo}: ${formatarPeriodos(h.periodos)}`).join('\n')}\nFeriados: confirmar com a equipe.\n\n## Páginas\n${[['A Loja','/a-loja'],['Nossa História','/nossa-historia'],['Produtos','/produtos'],['Assistência técnica','/assistencia-tecnica'],['Curso de manutenção','/curso-manutencao-celular'],['Como chegar','/como-chegar'],['Perguntas frequentes','/perguntas-frequentes'],['Dicas','/dicas'],...categorias.map(c=>[c.nome,caminhoCategoria(c.slug)])].map(([n,p])=>`- [${n}](${new URL(p!,site)})`).join('\n')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});

````

## src/pages/nossa-historia.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import Capitulo from '../components/editorial/Capitulo.astro';
import RevelacaoImagem from '../components/editorial/RevelacaoImagem.astro';
import LinhaDoTempo from '../components/editorial/LinhaDoTempo.astro';
import Equipe from '../components/editorial/Equipe.astro';
import Depoimento from '../components/avaliacoes/Depoimento.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import { loja,enderecoCompleto } from '../config/loja';
import { avaliacoes } from '../lib/avaliacoes';
import foto from '../assets/loja.jpg';
const valores=[{titulo:'Confiança',texto:'Uma relação construída com explicação, escuta e cuidado.',id:'g-012'},{titulo:'Procedência',texto:'Produtos novos e seminovos com nota fiscal e orientação para escolher.',id:'g-020'},{titulo:'Atendimento sem pressão',texto:'A gente conversa sobre o que você precisa, no seu tempo.',id:'g-043'},{titulo:'Suporte depois da compra',texto:'A conversa continua quando você precisa de ajuda com o aparelho.',id:'g-035'}];
---
<Pagina titulo="Nossa história é feita de gente." descricao="Conheça a ideia, os valores e os marcos confirmados da Smart Lion, em Lages. Produtos, assistência técnica e ensino no mesmo endereço." resposta={`Na ${loja.nome}, reunimos venda de tecnologia, assistência técnica e treinamento na ${enderecoCompleto}. Conheça a nossa história, visite a loja ou fale com a gente pelo WhatsApp.`}>
<BotaoWhatsApp slot="acao"/>
<Capitulo id="ideia" tema="claro" marcador="De onde vem a nossa ideia" titulo="Tecnologia de verdade é sobre pessoas."><div class="manifesto"><div><p>Nascer com um propósito é escolher o que importa: tornar a experiência com tecnologia segura e confiável.</p><p>Comprar um aparelho é investir em algo que acompanha a rotina. Por isso, procedência, durabilidade e suporte fazem parte da conversa.</p><p>Começamos com produtos novos e seminovos com nota fiscal. Nossa atuação se ampliou para a manutenção de celulares e o treinamento técnico, reunindo venda, suporte e aprendizado no mesmo endereço.</p><p>Nossos iPhones seminovos passam pela avaliação da equipe técnica e contam com {loja.garantiaSeminovosMeses} meses de garantia da loja. Consulte as condições de cobertura antes da compra.</p></div><RevelacaoImagem src={foto} alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" legenda="Nosso espaço em Lages." sizes="(max-width:800px) 100vw, 45vw"/></div></Capitulo>
<Capitulo id="valores" tema="claro" marcador="O que nos move" titulo="O cuidado aparece nos detalhes."><p slot="introducao">O que buscamos no dia a dia, ao lado dos relatos de quem já conhece a loja. As citações abaixo são experiências individuais, publicadas no Google.</p><div class="valores">{valores.map(v=><article class="valor"><div><h3>{v.titulo}</h3><p>{v.texto}</p></div><Depoimento avaliacao={avaliacoes.find(a=>a.id===v.id)!}/></article>)}</div></Capitulo>
<Capitulo id="linha-do-tempo" marcador="Marcos da nossa trajetória" titulo="Uma história que continua."><p slot="introducao">Estes registros mostram divulgações e momentos confirmados da loja. Cada data conserva o significado da sua fonte.</p><LinhaDoTempo/>{import.meta.env.DEV&&<p class="pendente">PENDENTE: ano de fundação e nomes dos fundadores. Cinco anos de experiência em assistência não confirmam fundação em 2021.</p>}</Capitulo>
<Equipe/>
<Capitulo id="conheca" tema="claro" marcador="Nossa história tem endereço" titulo="Venha fazer parte da conversa."><p slot="introducao">Conheça o ambiente da loja, a bancada da assistência e o Centro Técnico.</p><nav class="links" aria-label="Explore a Smart Lion"><a class="button" href="/a-loja">Conheça a loja ↗</a><a class="link-editorial" href="/produtos">Produtos ↗</a><a class="link-editorial" href="/assistencia-tecnica">Assistência ↗</a><a class="link-editorial" href="/curso-manutencao-celular">Centro Técnico ↗</a><a class="link-editorial" href="/avaliacoes">Avaliações ↗</a></nav></Capitulo>
</Pagina>
<style>.manifesto{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}.manifesto p{margin-bottom:24px;font-size:1.05rem}.valores{display:grid;gap:64px}.valor{display:grid;grid-template-columns:1fr 1.4fr;gap:100px;align-items:start}.valor h3{font-size:clamp(2rem,3.5vw,3.5rem);margin-bottom:20px}.valor>div>p{max-width:360px;color:var(--text-dark)}.valor :global(.depoimento){padding-top:24px}.links{display:flex;flex-wrap:wrap;align-items:center;gap:24px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;text-decoration:underline;text-underline-offset:6px}.pendente{background:#fff0c7;color:#633a00;padding:16px;font-size:.8rem}@media(max-width:800px){.manifesto,.valor{grid-template-columns:1fr;gap:28px}.valores{gap:48px}}</style>

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
<Layout produto={produto} title={`${produto.nome} em Lages | Smart Lion`} description={`Consulte ${produto.nome} com a Smart Lion em Lages. Escolha versão e cor e fale pelo WhatsApp.`}><div class="pagina-produto light"><div class="container"><a class="voltar" href="/produtos">← Voltar ao catálogo</a><DetalhesProduto produto={produto}/></div></div></Layout>
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

## src/pages/produtos/[categoria].astro

````astro
---
import AberturaVitrine from '../../components/catalogo/AberturaVitrine.astro';
import Layout from '../../layouts/LayoutBase.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { categorias } from '../../config/categorias';
import { obterProdutos } from '../../lib/produtos';
import { categoriasProduto } from '../../lib/catalogo';
export function getStaticPaths(){return categorias.filter(c=>c.slug!=='seminovos').map(c=>({params:{categoria:c.slug},props:{categoria:c}}))}
const {categoria}=Astro.props;
const produtos=(await obterProdutos()).filter(p=>categoriasProduto(p).includes(categoria.slug));
---
<Layout title={`${categoria.nome} em Lages | Smart Lion`} description={`Consulte ${categoria.nome} na Smart Lion, no Centro de Lages. Modelos e condições pelo WhatsApp.`}><section class="categoria light"><div class="container"><AberturaVitrine categoria={categoria}/><Catalogo produtos={produtos} categoria={categoria.slug}/></div></section></Layout>
<style>.categoria{padding:0 0 var(--space-chapter)}</style>

````

## src/pages/produtos/index.astro

````astro
---
import AberturaVitrine from '../../components/catalogo/AberturaVitrine.astro';
import Layout from '../../layouts/LayoutBase.astro';
import ParcelamentoHome from '../../components/home/ParcelamentoHome.astro';
import Catalogo from '../../components/catalogo/Catalogo.astro';
import { obterProdutos } from '../../lib/produtos';
const produtos=await obterProdutos();
---
<Layout title="Catálogo de iPhone e importados em Lages | Smart Lion" description="Explore as categorias da Smart Lion em Lages. Consulte versões, cores e condições pelo WhatsApp."><section class="catalogo light"><div class="container"><AberturaVitrine/><Catalogo produtos={produtos}/></div></section><ParcelamentoHome/></Layout>
<style>.catalogo{padding:0 0 var(--space-chapter)}</style>

````

## src/pages/seminovos.astro

````astro
---
import AberturaVitrine from '../components/catalogo/AberturaVitrine.astro';
import Layout from '../layouts/LayoutBase.astro';
import Catalogo from '../components/catalogo/Catalogo.astro';
import { categorias } from '../config/categorias';
import { obterProdutos } from '../lib/produtos';
import { categoriasProduto } from '../lib/catalogo';
const categoria=categorias.find(c=>c.slug==='seminovos')!;
const produtos=(await obterProdutos()).filter(p=>categoriasProduto(p).includes(categoria.slug));
---
<Layout title={`${categoria.nome} em Lages | Smart Lion`} description={`Consulte ${categoria.nome} na Smart Lion, no Centro de Lages. Modelos e condições pelo WhatsApp.`}><section class="categoria light"><div class="container"><AberturaVitrine categoria={categoria}/><Catalogo produtos={produtos} categoria={categoria.slug}/></div></section></Layout>
<style>.categoria{padding:0 0 var(--space-chapter)}</style>

````

## src/pages/sitemap.xml.ts

````ts
import type { APIRoute } from 'astro';
import { categorias, caminhoCategoria } from '../config/categorias';
import { servicos } from '../config/servicos';
import { obterProdutos } from '../lib/produtos';
import { publicavel } from '../lib/catalogo';
import { obterDicas } from '../lib/dicas';
import { dicaPublicavel } from '../schemas/dica';
import { urlCanonica } from '../lib/seo';
export const GET:APIRoute=async({site})=>{
 const rotas=['/','/produtos','/assistencia-tecnica','/curso-manutencao-celular','/sobre','/a-loja','/nossa-historia','/como-chegar','/avaliacoes','/dicas','/perguntas-frequentes','/privacidade',...categorias.map(c=>caminhoCategoria(c.slug)),...servicos.map(s=>'/assistencia-tecnica/'+s.slug),...(await obterProdutos()).filter(publicavel).map(p=>'/produto/'+p.slug),...(await obterDicas()).filter(d=>dicaPublicavel(d.data)).map(d=>'/dicas/'+d.data.slug)];
 const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rotas.map(r=>`<url><loc>${escape(urlCanonica(r,site!))}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};

````

## src/pages/sobre.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../config/loja';
import { Picture } from 'astro:assets';
import foto from '../assets/loja.jpg';
---
<Pagina titulo="Tecnologia com atendimento de perto" descricao="Conheça a Smart Lion, loja de tecnologia, assistência e treinamento no Centro de Lages." resposta={`A ${loja.nome} reúne venda de tecnologia, assistência técnica e treinamento na ${enderecoCompleto}. Fale com a equipe pelo WhatsApp ou visite a loja para conhecer as opções.`}>
<a slot="acao" class="button button-light" href="/nossa-historia">Conheça nossa história ↗</a>
<section class="pagina-bloco light"><div class="container duas-colunas"><div><h2>A compra é só o começo.</h2><p>A Smart Lion nasceu com a proposta de tornar a experiência com tecnologia segura e confiável. A loja trabalha com produtos novos e seminovos com nota fiscal e atendimento para orientar a escolha.</p><p>Essa atuação se ampliou para a manutenção de celulares e o treinamento técnico, reunindo venda, suporte e aprendizado no mesmo endereço.</p><h3>Procedência e acompanhamento</h3><p>Os iPhones seminovos passam por avaliação da equipe técnica e contam com {loja.garantiaSeminovosMeses} meses de garantia da loja. Consulte as condições de cobertura antes da compra.</p><nav class="navegacao-paginas" aria-label="Conheça a Smart Lion"><a href="/produtos">Catálogo ↗</a><a href="/assistencia-tecnica">Assistência ↗</a><a href="/curso-manutencao-celular">Centro Técnico ↗</a><a href="/avaliacoes">Avaliações ↗</a></nav></div><Picture src={foto} formats={['avif','webp']} widths={[480,800,1280]} sizes="(max-width:800px) 100vw, 45vw" alt="Ambiente interno da loja Smart Lion com balcão e prateleiras" loading="lazy" class="foto-editorial"/></div></section>
</Pagina>

````

## src/styles/produto.css

````css
.produto-detalhes{color:var(--ink);background:var(--surface);padding:clamp(20px,4vw,48px);display:grid;grid-template-columns:1fr 1fr;gap:clamp(24px,4vw,52px)}
.produto-detalhes h1,.produto-detalhes h2{font-size:clamp(2rem,3.4vw,3rem);line-height:1.1;margin:12px 0 20px}.produto-detalhes .resposta{color:#414246;font-size:.9rem;line-height:1.65}.produto-detalhes .aviso-rascunho{padding:10px 12px;background:#fff0c7;color:#633a00;font-size:.8rem;margin:14px 0}.produto-detalhes .garantia{font-size:.85rem;margin:16px 0;color:#414246}.produto-detalhes fieldset{border:0;padding:0;margin:24px 0}.produto-detalhes legend{font:600 .9rem var(--font-body);margin-bottom:10px}.produto-detalhes .escolhas{display:flex;flex-wrap:wrap;gap:8px}.produto-detalhes label.opcao{position:relative;display:flex;align-items:center;gap:8px;min-height:46px;border:1px solid #868780;padding:10px 12px;cursor:pointer;font-size:.8rem}.produto-detalhes label.opcao:has(input:checked){border-color:#a50050;box-shadow:inset 0 0 0 1px #a50050;background:#eee8df}.produto-detalhes label.opcao:has(input:focus-visible){outline:3px solid #a50050;outline-offset:3px}.produto-detalhes input[type=radio]{accent-color:#a50050;width:16px;height:16px;margin:0}.produto-detalhes .amostra-cor{display:block;width:15px;height:15px;background:var(--cor);border:1px solid #666;border-radius:50%}.produto-detalhes .resumo{margin:24px 0;display:grid;grid-template-columns:auto 1fr;gap:8px 16px;border-block:1px solid #ccc;padding:18px 0;font-size:.85rem}.produto-detalhes dt{color:#565752}.produto-detalhes dd{margin:0;overflow-wrap:anywhere}.produto-detalhes .preco-nota{font-size:.75rem;margin:8px 0 16px}.produto-detalhes .consulta{width:100%;text-align:center}.produto-detalhes .nota{font-size:.75rem;color:#50514c;margin:12px 0}.produto-detalhes .feedback{font-size:.8rem;min-height:1.6em;margin:10px 0}.produto-detalhes .compartilhar{background:transparent;border:1px solid #777;min-height:44px;padding:8px 16px;color:var(--ink)}.produto-detalhes details{margin-top:14px;font-size:.8rem}.produto-detalhes summary{cursor:pointer;min-height:40px;display:list-item}.produto-detalhes .link-copia{width:100%;padding:12px;border:1px solid #777;background:white;color:var(--ink);font-size:.8rem}.produto-detalhes .fotos{display:grid;gap:12px;align-content:start}.produto-detalhes .foto-extra{max-width:240px}.produto-detalhes :focus-visible{outline-color:#a50050}@media(max-width:700px){.produto-detalhes{grid-template-columns:1fr}.produto-detalhes .fotos{max-width:420px;width:100%;margin-inline:auto}.produto-detalhes h1,.produto-detalhes h2{font-size:2rem}.produto-detalhes .resumo{grid-template-columns:80px 1fr}}

````
