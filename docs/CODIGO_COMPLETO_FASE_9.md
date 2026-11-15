# Código completo — Fase 9

## Arquivos novos ou alterados

```text
README.md
docs/PENDENCIAS.md
docs/PENDENCIAS_FINAIS.md
docs/QA_FASE_9.md
docs/preview-fase9.jpg
package.json
scripts/qa-axe.mjs
scripts/qa-lighthouse.mjs
scripts/verificar-final.mjs
src/components/Consentimento.astro
src/components/PendenciasDev.astro
src/components/Rodape.astro
```

## README.md

````md
# Smart Lion — Fase 9

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

## QA final

Status parcial, sem aprovação de lançamento público. Consulte docs/QA_FASE_9.md e docs/PENDENCIAS_FINAIS.md. Scripts de Lighthouse e axe estão em scripts/qa-lighthouse.mjs e scripts/qa-axe.mjs; exigem navegador local.

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

## Fase 9

Lista consolidada em PENDENCIAS_FINAIS.md. Verificações executadas e limitações em QA_FASE_9.md. QA final ainda não aprovado: faltam medições Lighthouse/axe e conferência móvel completa.

````

## docs/PENDENCIAS_FINAIS.md

````md
# Pendências finais — Smart Lion

Status: versão privada de revisão; manter noindex. Não houve migração de DNS ou liberação pública.

## QA antes de aprovar lançamento

- Executar Lighthouse em todas as rotas; atingir Performance/Boas práticas/SEO ≥95, Acessibilidade 100, LCP <2s, CLS <0,05. Registrar métricas reais; INP <200ms depende também da medição de uso.
- Executar axe e revisão manual integral de teclado, leitor de tela, contraste sobre fotos, reduced motion, 390/1440px e sem JS.
- Testar todos os links WhatsApp em 390px, confirmar abertura das mensagens e renderização externa do mapa.
- Revalidar catálogo, sitemap e performance após inserir modelos e fotos reais.

## Insumos da loja

- Produtos reais com modelos/versões/cores/condição/Anatel ou LL, fotos, autorização e confirmação datada. Os cinco slots permanecem rascunhos.
- CNPJ/razão social, termos de garantias (novos, seminovos, reparos), política de troca e confirmação documental IRP.
- Confirmar telefone secundário, equivalência do link da bio, condições vigentes de parcelamento e link direto de avaliação Google.
- Foto da fachada, logo vetorial, sexta foto e URLs dos posts; autorização de mídias e de nomes da equipe nos relatos.
- Curso: conteúdo, carga horária, próxima turma e certificado. Nenhuma promessa de renda.
- Revisor, aprovação e datas reais dos três artigos, além dos posts de origem quando aplicável.
- Feriados/exceções, cobertura regional e referências locais, sem inferir cidades ou datas.
- Controlador/responsável, contato específico, retenção, operadores e bases legais para finalizar privacidade.

## Lançamento

- Aprovar domínio/origem e configurar SITE_URL; habilitar indexação apenas na produção aprovada.
- Definir hospedagem final/Vercel e acesso de DNS. A versão de revisão atual usa Sites privado.
- Conferir NAP nos perfis externos e submeter sitemap; nenhuma alteração de perfil ou mensagem a terceiros foi feita.
- Atualizar nota/total/avaliações por coleta confirmada; não há sincronização automática.

Detalhes históricos em PENDENCIAS.md; evidências e comandos em QA_FASE_9.md.

````

## docs/QA_FASE_9.md

````md
# QA final — Fase 9 — 30/10/2026

**Status: entrega de QA parcial; lançamento público não aprovado.** Os controles verificáveis nesta sessão passaram, mas Lighthouse/axe e as larguras exatas exigidas não foram executados. Não confundir testes de código com certificação WCAG ou desempenho de campo.

## Correções

O painel claro de consentimento herdava foco rosa claro, apropriado ao fundo escuro. Aplicada a classe light para foco magenta escuro: contraste calculado de 7,02:1 contra o fundo. O botão de preferências foi integrado ao container do rodapé, com altura mínima de 48px e cores explícitas. Nenhum dado comercial foi alterado.

## Evidências executadas

- Astro check: 92 arquivos, 0 erros, 0 avisos, 0 hints.
- Vitest: 186 testes em sete arquivos, todos passaram.
- Build: 24 páginas HTML. Cinco produtos e três artigos rascunho excluídos.
- 102 ocorrências de links WhatsApp verificadas no HTML: número correto, mensagem preenchida, sem undefined/null/PENDENTE. Fonte sem wa.me fora de whatsapp.ts. As mensagens literais continuam cobertas pelos testes existentes.
- 37 imagens: alt presente (incluindo alt vazio decorativo) e dimensões explícitas. 25 variantes AVIF: 4.531 a 36.376 bytes.
- 56 avaliações literais, 23 destaques; cinco notas com o mesmo destino; nenhuma marcação Review/AggregateRating.
- H1 único, IDs únicos, links internos existentes, copy proibida ausente na voz da loja (depoimentos literais não reescritos), ordem das 13 seções da home, prioridade única de imagem, nenhum iframe inicial.
- SEO: canônicas únicas, imagem OG existente, JSON-LD parseável, sitemap sem rascunhos/404, llms.txt com almoço.
- Navegador: Tab e Enter no atalho Pular para conteúdo; busca por 17 pro max, seminovo e bateria encontrou um rascunho correspondente por consulta. Na produção o índice permanece vazio intencionalmente.
- Modal aberto por Enter; foco em Fechar, Shift+Tab permaneceu no diálogo, Tab voltou ao botão; versão/cor atualizaram URL e texto WhatsApp; Esc fechou e devolveu foco ao link de origem.
- Percurso de 38 paradas por Tab no catálogo filtrado, do logo ao WhatsApp flutuante, passando por busca, filtros, produto, consentimento e rodapé. Não houve envio de mensagens.
- Captura preview-fase9.jpg mostra foco corrigido. Viewport da captura 1348px; não é prova de 390/1440px.

## Limites concretos

Não há executável Chrome/Chromium local nos caminhos usuais do ambiente. O navegador remoto está disponível via controle próprio, mas a API documentada não expõe redimensionamento, Lighthouse ou execução de axe. Não foi conectado a ele um depurador externo. Portanto: Lighthouse/axe, capturas exatas 390/1440, teste de todos os links nessas larguras e desligamento real de JavaScript permanecem pendentes. O percurso de teclado registrado é do catálogo, não uma certificação integral de todas as rotas/estados.

Nenhuma nota Lighthouse foi estimada. LCP, CLS e INP não foram medidos. A presença de HTML estático, links e tabela foi conferida, mas não substitui teste com JS desligado. A renderização externa do Google Maps continua pendente; criação e remoção do iframe foram verificadas na Fase 8.

## Medições por rota

JSON-LD não conta como JavaScript executável. Todos os scripts e dependências importadas contam no orçamento. Máximo: 7.397 bytes gzip, abaixo de 30.000.

| Rota | JS gzip (bytes) | HTML (bytes) | Lighthouse P/A/BP/SEO | LCP/CLS/INP |
|---|---:|---:|---|---|
| /404.html | 522 | 12613 | Não medido | Não medido |
| /assistencia-tecnica/apple-watch-airpods/ | 2400 | 19492 | Não medido | Não medido |
| /assistencia-tecnica/ | 2400 | 20913 | Não medido | Não medido |
| /assistencia-tecnica/macbook-ipad/ | 2400 | 19360 | Não medido | Não medido |
| /assistencia-tecnica/placa/ | 2400 | 19255 | Não medido | Não medido |
| /assistencia-tecnica/tampa-traseira/ | 2400 | 19277 | Não medido | Não medido |
| /assistencia-tecnica/troca-de-bateria-iphone/ | 2400 | 19347 | Não medido | Não medido |
| /assistencia-tecnica/troca-de-tela-iphone/ | 2400 | 19269 | Não medido | Não medido |
| /avaliacoes/ | 1123 | 76448 | Não medido | Não medido |
| /catalogo/acessorios/ | 3687 | 24263 | Não medido | Não medido |
| /catalogo/casa-e-games/ | 3687 | 24282 | Não medido | Não medido |
| /catalogo/ | 3687 | 24214 | Não medido | Não medido |
| /catalogo/ipad-mac-watch/ | 3687 | 24329 | Não medido | Não medido |
| /catalogo/iphone/ | 3687 | 24204 | Não medido | Não medido |
| /catalogo/perfumaria/ | 3687 | 24256 | Não medido | Não medido |
| /catalogo/seminovos/ | 3687 | 24414 | Não medido | Não medido |
| /catalogo/xiaomi/ | 3687 | 24204 | Não medido | Não medido |
| /como-chegar/ | 1024 | 19658 | Não medido | Não medido |
| /curso-manutencao-celular/ | 522 | 17173 | Não medido | Não medido |
| /dicas/ | 522 | 15925 | Não medido | Não medido |
| / | 7397 | 81438 | Não medido | Não medido |
| /perguntas-frequentes/ | 522 | 21199 | Não medido | Não medido |
| /privacidade/ | 522 | 17506 | Não medido | Não medido |
| /sobre/ | 522 | 16393 | Não medido | Não medido |

## Reproduzir verificações

```sh
cd /workspace/sites/smartlion
pnpm check
pnpm test
pnpm build
node scripts/verificar-catalogo.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-home.mjs
node scripts/verificar-dicas.mjs
node scripts/verificar-seo.mjs
node scripts/verificar-final.mjs
```

## Executar as medições pendentes localmente

Requer Chrome instalado, Node/pnpm e acesso ao registro npm. Para axe, instalar também ChromeDriver compatível, conforme documentação oficial. Os scripts abaixo tiveram sintaxe validada nesta sessão, mas não execução de navegador.

Terminal 1:

```sh
cd /workspace/sites/smartlion
pnpm build
pnpm preview --port 4321
```

Terminal 2:

```sh
cd /workspace/sites/smartlion
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```

Lighthouse percorre todos os HTML do build com emulação de 390×844, inclusive 404, e salva JSONs e tabela em qa/lighthouse. Falha se qualquer meta não passar. O preview noindex e a 404 podem reduzir SEO; os resultados são preservados sem ajuste artificial. Axe salva JSONs em qa/axe e retorna erro em violações. Ferramentas são obtidas por pnpm dlx e não entram no bundle de produção; cada relatório registra sua versão.

Para repetir em 1440px, usar DevTools → modo responsivo → 1440×900. Em 390×844 e 1440×900: conferir cortes, foco, navegação horizontal dos chips, WhatsApp visível, busca, seleção de versão/cor, Esc, retorno por histórico e consentimento. Desabilitar JavaScript no DevTools e repetir links, horários e páginas diretas. Verificar reduced motion na emulação de mídia. Testar mensagens no WhatsApp sem enviá-las. Repetir nas rotas do sitemap e nos rascunhos somente em pnpm dev.

Fontes dos comandos:
- https://github.com/GoogleChrome/lighthouse/blob/main/readme.md
- https://github.com/dequelabs/axe-core-npm/blob/develop/packages/cli/README.md

## Contraste calculado (pares de tokens)

| Par | Razão |
|---|---:|
| Texto escuro / superfície | 17,02:1 |
| Texto secundário / superfície | 9,11:1 |
| Texto rodapé / grafite | 10,29:1 |
| Texto do WhatsApp / verde | 7,74:1 |
| Foco claro corrigido / superfície | 7,02:1 |
| Foco no escuro / grafite | 7,73:1 |

Esses cálculos não cobrem automaticamente sobreposições de fotos ou todos os estados de componentes.

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

## scripts/qa-axe.mjs

````mjs
import {readdirSync,mkdirSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
const base=new URL(process.argv[2]??'http://localhost:4321');
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const rotas=walk('dist').filter(f=>f.endsWith('.html')).map(f=>f.slice(4).replace(/\/index.html$/,'/'));
mkdirSync('qa/axe',{recursive:true});let falha=false;
for(const [i,rota] of rotas.entries()){
 const r=spawnSync('pnpm',['dlx','@axe-core/cli',new URL(rota,base).href,'--exit','--save',`${i}.json`,'--dir','qa/axe'],{stdio:'inherit'});
 if(r.status!==0)falha=true;
}
if(falha)process.exitCode=1;

````

## scripts/qa-lighthouse.mjs

````mjs
import {readFileSync,readdirSync,mkdirSync,writeFileSync} from 'node:fs';
import {spawnSync} from 'node:child_process';
import {resolve} from 'node:path';
// Executar localmente com Chrome instalado e pnpm preview ativo. Não inicia servidor.
const base=new URL(process.argv[2]??'http://localhost:4321');
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const rotas=walk('dist').filter(f=>f.endsWith('.html')).map(f=>f.slice(4).replace(/\/index.html$/,'/'));
const pasta=resolve('qa/lighthouse');mkdirSync(pasta,{recursive:true});
const linhas=['| Rota | Performance | Acessibilidade | Boas práticas | SEO | LCP ms | CLS |','|---|---:|---:|---:|---:|---:|---:|'];
let falha=false;
for(const [i,rota] of rotas.entries()){
 const arquivo=resolve(pasta,`${i}.json`);const r=spawnSync('pnpm',['dlx','lighthouse',new URL(rota,base).href,'--quiet','--chrome-flags=--headless','--screenEmulation.mobile=true','--screenEmulation.width=390','--screenEmulation.height=844','--screenEmulation.deviceScaleFactor=2','--output=json',`--output-path=${arquivo}`],{stdio:'inherit'});
 if(r.status!==0){falha=true;linhas.push(`| ${rota} | ERRO | — | — | — | — | — |`);continue;}
 const lhr=JSON.parse(readFileSync(arquivo,'utf8'));if(lhr.runtimeError){falha=true;linhas.push(`| ${rota} | ERRO de navegação | — | — | — | — | — |`);continue;}
 const notas=['performance','accessibility','best-practices','seo'].map(k=>lhr.categories[k].score===null?null:Math.round(lhr.categories[k].score*100));
 const lcp=lhr.audits['largest-contentful-paint'].numericValue,cls=lhr.audits['cumulative-layout-shift'].numericValue;
 linhas.push(`| ${rota} | ${notas.map(n=>n??'N/D').join(' | ')} | ${Math.round(lcp)} | ${cls.toFixed(4)} |`);
 if(notas.some((n,i)=>n===null||n<(i===1?100:95))||lcp>=2000||cls>=.05)falha=true;
}
writeFileSync(resolve(pasta,'RESULTADOS.md'),linhas.join('\n')+'\n');
console.log('Tabela salva em qa/lighthouse/RESULTADOS.md. 404 e noindex são exceções esperadas de SEO, sem ocultar notas. INP não é inferido do Lighthouse.');
if(falha)process.exitCode=1;

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
const pares=[['texto escuro','111214','f4f4f2',4.5],['texto secundário','414246','f4f4f2',4.5],['texto rodapé','bfc0c2','111214',4.5],['WhatsApp','082b16','25d366',4.5],['foco claro corrigido','a50050','f4f4f2',3],['foco no escuro','ff78bc','111214',3]];
for(const [nome,a,b,min] of pares){const razao=contraste(a,b);assert(razao>=min,`Contraste: ${nome}`);console.log(`${nome}: ${razao.toFixed(2)}:1`);}
console.log(`${paginas.length} páginas; ${links} links WhatsApp; ${imagens} imagens. IDs, copy da loja e função central: OK. Não substitui axe ou auditoria visual.`);

````

## src/components/Consentimento.astro

````astro
<section class="preferencias light" data-consentimento hidden aria-label="Preferências de privacidade">
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
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 9</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
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
</div><nav class="container paginas" aria-label="Informações da loja"><a href="/assistencia-tecnica">Assistência técnica</a><a href="/curso-manutencao-celular">Curso de manutenção</a><a href="/sobre">Sobre a Smart Lion</a><a href="/como-chegar">Como chegar</a><a href="/perguntas-frequentes">Perguntas frequentes</a><a href="/dicas">Dicas</a><a href="/privacidade">Privacidade</a></nav><div class="container footer-bottom"><span>{loja.nome} · {loja.endereco.cidade}/{loja.endereco.uf}</span><span>Desenvolvido por WAXLO</span></div><div class="container"><button class="preferencias-button" type="button" data-preferencias hidden>Preferências de privacidade</button></div></footer>
<style>.preferencias-button{min-height:48px;padding:12px 16px;margin-top:20px;color:var(--white);background:transparent;border:1px solid var(--muted);font-size:.8rem}.paginas{display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:30px;font-size:.8rem}.paginas a{min-height:44px;display:flex;align-items:center}footer{padding:64px 0 100px;border-top:1px solid var(--line)}.footer-grid{display:grid;grid-template-columns:1.1fr 1.2fr 1.25fr 1fr;gap:32px;font-size:.8rem;color:var(--muted)}h2{font:600 .85rem var(--font-heading);letter-spacing:0;color:white;margin-bottom:20px}.wordmark{font:600 1.35rem var(--font-heading);color:white;letter-spacing:.03em}p{margin:16px 0}address{font-style:normal;margin-bottom:16px}table{border-collapse:collapse;font-variant-numeric:tabular-nums}th{text-align:left;font-weight:400;padding:0 12px 8px 0;vertical-align:top}td{padding-bottom:8px}.small{font-size:.75rem}.number{font-size:1rem;color:white}.footer-bottom{display:flex;justify-content:space-between;border-top:1px solid var(--line);margin-top:48px;padding-top:24px;font-size:.7rem;color:var(--muted)}.sr-only{position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden}@media(max-width:1000px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:550px){.footer-grid{grid-template-columns:1fr;gap:28px}.footer-bottom{gap:20px;align-items:flex-start}.footer-bottom span:last-child{max-width:100px}}</style>

````
