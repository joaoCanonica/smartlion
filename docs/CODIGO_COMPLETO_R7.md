# Código completo — R7

Arquivos novos ou alterados nesta etapa (este documento é um espelho, não código executável).

- `docs/PENDENCIAS.md`
- `docs/REMODELAGEM_R7.md`
- `docs/qa-r7/bloqueio-browser.txt`
- `docs/qa-r7/testes.txt`
- `docs/qa-r7/typescript.txt`
- `docs/qa-r7/verificacoes.txt`
- `public/_redirects`
- `scripts/qa-redirecionamentos.mjs`
- `scripts/verificar-seo.mjs`
- `src/components/PendenciasDev.astro`
- `src/components/home/LojaHome.astro`
- `src/layouts/LayoutBase.astro`
- `src/pages/llms.txt.ts`
- `src/pages/sitemap.xml.ts`
- `vercel.json`

## docs/PENDENCIAS.md

````
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

## Remodelagem R5
Receber foto confirmada da fachada. Conferir o status HTTP 301 de /como-chegar e a preservação de query na hospedagem definitiva. Concluir auditoria visual em 390 e 1440 px, axe e Lighthouse na R7.


## Remodelagem R7 — 06/11/2026
- Regras de 11 redirecionamentos implementadas; configuração e destinos conferidos. Teste HTTP de 22 variantes com query ainda pendente na hospedagem final.
- Canônicas, sitemap e llms.txt revisados; prévia continua noindex.
- 190 testes aprovados e build de 36 páginas. Verificações estáticas em qa-r7/verificacoes.txt.
- QA final NÃO aprovado: Chromium bloqueado pelo ambiente; Lighthouse, axe, 390/1440 px, teclado, sem JS e métricas móveis precisam de nova execução. Não reutilizar notas antigas como evidência da versão atual.
- INP depende de medição de interações e dados de campo. Relatório e comandos: REMODELAGEM_R7.md.

````

## docs/REMODELAGEM_R7.md

````
# Remodelagem R7 — URLs, SEO e QA parcial

Entrega de 06/11/2026. Código pronto para revisão privada; aprovação final de QA ainda pendente. Não foram reutilizadas medições da tentativa interrompida como resultados desta versão.

## Alterações
- Onze URLs antigas têm regras HTTP 301 em Vercel e em `_redirects`, incluindo variantes com barra final neste último.
- Canônicas, Open Graph e dados estruturados das páginas de compatibilidade apontam ao destino novo. Sitemap exclui as URLs antigas; llms.txt inclui avaliações e privacidade.
- Hierarquia de títulos da página Visite-nos corrigida: H1 seguido de H2. Na home, os detalhes continuam H3; estilo restrito aos detalhes preserva o título da seção.
- Script de teste HTTP cobre 22 variantes, query string e resposta do destino.

## Resultado medido nesta versão
| Verificação | Resultado |
|---|---|
| Vitest | 190 testes aprovados, 8 arquivos |
| Astro check | 109 arquivos; zero erros, avisos e sugestões |
| Build estático | 36 páginas |
| WhatsApp no HTML | 152 links com número e mensagem válidos |
| Avaliações | 56 textos literais; 23 destaques preservados |
| Produtos de exemplo | 5 rascunhos excluídos; nenhum produto publicado |
| Artigos-modelo | 3 rascunhos excluídos |
| JavaScript gzip | Todas as páginas abaixo de 30.000 bytes; tabela em qa-r7/verificacoes.txt |
| Contraste calculado dos pares testados | De 6,98:1 a 16,91:1; não certifica a interface inteira |
| Canônicas e JSON-LD | 36 páginas verificadas; sem Review/AggregateRating |
| Mapa | Nenhum iframe no HTML inicial |
| Redirecionamentos | Configuração e destinos verificados; HTTP da hospedagem ainda pendente |

Lighthouse, axe, LCP, CLS, INP e inspeção visual/teclado não foram medidos nesta entrega. O Chromium não iniciou: `socket() failed: Operation not permitted (1)`. Registro em qa-r7/bloqueio-browser.txt. Não há nota de aprovação para essas verificações. A prévia continua privada e noindex; isso reduz a nota SEO do Lighthouse intencionalmente. INP requer medição de interações e, para validação real, dados de campo.

## Executar e testar
Requisitos: Node conforme engines do package.json, pnpm conforme packageManager e Chrome instalado para auditorias.

```bash
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
for f in scripts/verificar-*.mjs; do node "$f" || exit 1; done
pnpm preview
```

Em outro terminal, com o preview ativo:

```bash
node scripts/qa-lighthouse.mjs http://localhost:4321
node scripts/qa-axe.mjs http://localhost:4321
```

O preview Astro não aplica regras de hospedagem. Em Vercel, após publicar a versão de revisão, executar (substitua pelo endereço real):

```bash
node scripts/qa-redirecionamentos.mjs https://ENDERECO-DA-REVISAO
```

Esse teste exige acesso HTTP sem uma tela intermediária de autenticação. Não habilitar indexação da prévia para melhorar pontuação.

## Conferência no navegador
- Em 390 px: menu, WhatsApp, Instagram e busca acessíveis; nenhum corte horizontal; endereço e horários legíveis; mapa só carrega após aceitar.
- Em 1440 px: manter escala do título Visite-nos na home e os títulos menores nos detalhes; conferir colunas, fotos e foco.
- Usar Tab do início ao fim, Enter nos controles e Esc no menu/modal quando disponível. Repetir com JavaScript desativado e movimento reduzido.
- Em DEV, buscar “17 pro max”, “seminovo” e “bateria”; conferir os slots. Produção permanece sem resultados de produtos enquanto não houver confirmação.
- Testar todos os links WhatsApp sem enviar mensagens e confirmar destino/texto. Não confundir validação de URL com teste de abertura no aplicativo.

## Pendências
QA de navegador acima, HTTP 301 no host final e métricas móveis continuam bloqueando aprovação final. Conteúdo comercial, fotos próprias, produtos confirmados, termos, dados legais, autorização IRP, curso e domínio final continuam conforme PENDENCIAS.md. Nenhum novo dado do cliente foi criado nesta etapa.

````

## docs/qa-r7/bloqueio-browser.txt

````
file:///tmp/sl-qa/node_modules/@puppeteer/browsers/lib/launch.js:346
                reject(new Error([
                       ^

Error: Failed to launch the browser process:  Code: null

stderr:
/usr/bin/chromium: 9: [: 5225713664: unexpected operator
[18:18:1106/120248.426675:FATAL:chrome/browser/process_singleton_posix.cc:297] Check failed: . socket() failed: Operation not permitted (1)
[1106/120248.428686:ERROR:third_party/crashpad/crashpad/util/linux/scoped_ptrace_attach.cc:27] ptrace: Operation not permitted (1)

TROUBLESHOOTING: https://pptr.dev/troubleshooting

    at ChildProcess.onClose (file:///tmp/sl-qa/node_modules/@puppeteer/browsers/lib/launch.js:346:24)
    at ChildProcess.emit (node:events:526:24)
    at ChildProcess._handle.onexit (node:internal/child_process:324:12)

Node.js v24.22.1

````

## docs/qa-r7/testes.txt

````

 RUN  v5.0.5 /workspace/sites/smartlion


 Test Files  8 passed (8)
      Tests  190 passed (190)
   Start at  12:05:25
   Duration  366ms (import 54%, transform 20%, tests 19%, worker 6%)


````

## docs/qa-r7/typescript.txt

````
12:05:27 [content] Syncing content
12:05:27 [content] Synced content
12:05:27 [types] Generated 588ms
12:05:27 [check] Getting diagnostics for Astro files in /workspace/sites/smartlion...
Result (109 files): 
- 0 errors
- 0 warnings
- 0 hints


````

## docs/qa-r7/verificacoes.txt

````
56 textos literais; 23 destaques preservados; 3 citações na home; 5 notas; sem iframe ou schema de avaliações.
┌─────────┬──────────────────────────────────────────────────────────┬─────────────┬───────────┐
│ (index) │ rota                                                     │ jsGzipBytes │ htmlBytes │
├─────────┼──────────────────────────────────────────────────────────┼─────────────┼───────────┤
│ 0       │ '404.html'                                               │ 736         │ 15230     │
│ 1       │ '_estilo/index.html'                                     │ 2417        │ 34534     │
│ 2       │ 'a-loja/index.html'                                      │ 1469        │ 35865     │
│ 3       │ 'assistencia-tecnica/apple-watch-airpods/index.html'     │ 2734        │ 22767     │
│ 4       │ 'assistencia-tecnica/index.html'                         │ 2734        │ 26671     │
│ 5       │ 'assistencia-tecnica/macbook-ipad/index.html'            │ 2734        │ 22635     │
│ 6       │ 'assistencia-tecnica/placa/index.html'                   │ 2734        │ 22530     │
│ 7       │ 'assistencia-tecnica/tampa-traseira/index.html'          │ 2734        │ 22552     │
│ 8       │ 'assistencia-tecnica/troca-de-bateria-iphone/index.html' │ 2734        │ 22622     │
│ 9       │ 'assistencia-tecnica/troca-de-tela-iphone/index.html'    │ 2734        │ 22544     │
│ 10      │ 'avaliacoes/index.html'                                  │ 1343        │ 77645     │
│ 11      │ 'catalogo/acessorios/index.html'                         │ 4023        │ 21931     │
│ 12      │ 'catalogo/casa-e-games/index.html'                       │ 4023        │ 21952     │
│ 13      │ 'catalogo/index.html'                                    │ 4023        │ 25224     │
│ 14      │ 'catalogo/ipad-mac-watch/index.html'                     │ 4023        │ 21992     │
│ 15      │ 'catalogo/iphone/index.html'                             │ 4023        │ 21865     │
│ 16      │ 'catalogo/perfumaria/index.html'                         │ 4023        │ 21910     │
│ 17      │ 'catalogo/seminovos/index.html'                          │ 4023        │ 22064     │
│ 18      │ 'catalogo/xiaomi/index.html'                             │ 4023        │ 21860     │
│ 19      │ 'como-chegar/index.html'                                 │ 1238        │ 24582     │
│ 20      │ 'curso-manutencao-celular/index.html'                    │ 736         │ 20548     │
│ 21      │ 'dicas/index.html'                                       │ 736         │ 19273     │
│ 22      │ 'index.html'                                             │ 2919        │ 58870     │
│ 23      │ 'nossa-historia/index.html'                              │ 967         │ 35234     │
│ 24      │ 'perguntas-frequentes/index.html'                        │ 736         │ 25647     │
│ 25      │ 'privacidade/index.html'                                 │ 736         │ 20844     │
│ 26      │ 'produtos/acessorios/index.html'                         │ 4023        │ 21931     │
│ 27      │ 'produtos/casa-e-games/index.html'                       │ 4023        │ 21952     │
│ 28      │ 'produtos/index.html'                                    │ 4023        │ 25224     │
│ 29      │ 'produtos/ipad-mac-watch/index.html'                     │ 4023        │ 21992     │
│ 30      │ 'produtos/iphone/index.html'                             │ 4023        │ 21865     │
│ 31      │ 'produtos/perfumaria/index.html'                         │ 4023        │ 21910     │
│ 32      │ 'produtos/xiaomi/index.html'                             │ 4023        │ 21860     │
│ 33      │ 'seminovos/index.html'                                   │ 4023        │ 22451     │
│ 34      │ 'sobre/index.html'                                       │ 736         │ 19284     │
│ 35      │ 'visite-nos/index.html'                                  │ 1238        │ 20733     │
└─────────┴──────────────────────────────────────────────────────────┴─────────────┴───────────┘
36 páginas verificadas. 0 produtos publicados; 5 excluídos. Links, H1, copy e orçamento OK.
Dicas: listagem disponível; três rascunhos ausentes de rotas, HTML e assets de produção.
madeira no escuro: 8.52:1
texto escuro: 16.91:1
texto secundário: 9.06:1
texto rodapé: 10.29:1
WhatsApp: 7.74:1
foco claro corrigido: 6.98:1
foco no escuro: 7.73:1
36 páginas; 152 links WhatsApp; 107 imagens. IDs, copy da loja e função central: OK. Não substitui axe ou auditoria visual.
Ordem dos 10 blocos institucionais, 3 citações, sem modal comercial, dimensões de imagens, prioridade única e mapa sem iframe inicial: OK.
{"avifVariantes":38,"menorBytes":2760,"maiorBytes":46093}
SEO: 36 páginas com canônica, Open Graph, JSON-LD válido e nenhum iframe inicial. Sitemap sem rascunhos; llms.txt com almoço.
Vitrine: 8 rotas novas, busca, contatos, garantias e parcelamento presentes; rascunhos ausentes e rotas antigas preservadas.

````

## public/_redirects

````
/como-chegar /visite-nos 301
/como-chegar/ /visite-nos 301
/sobre /nossa-historia 301
/sobre/ /nossa-historia 301
/catalogo /produtos 301
/catalogo/ /produtos 301
/produtos/seminovos /seminovos 301
/produtos/seminovos/ /seminovos 301
/catalogo/iphone /produtos/iphone 301
/catalogo/iphone/ /produtos/iphone 301
/catalogo/seminovos /seminovos 301
/catalogo/seminovos/ /seminovos 301
/catalogo/ipad-mac-watch /produtos/ipad-mac-watch 301
/catalogo/ipad-mac-watch/ /produtos/ipad-mac-watch 301
/catalogo/xiaomi /produtos/xiaomi 301
/catalogo/xiaomi/ /produtos/xiaomi 301
/catalogo/casa-e-games /produtos/casa-e-games 301
/catalogo/casa-e-games/ /produtos/casa-e-games 301
/catalogo/acessorios /produtos/acessorios 301
/catalogo/acessorios/ /produtos/acessorios 301
/catalogo/perfumaria /produtos/perfumaria 301
/catalogo/perfumaria/ /produtos/perfumaria 301

````

## scripts/qa-redirecionamentos.mjs

````
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

if (!process.argv[2]) throw new Error('Informe a origem publicada.');
const base = new URL(process.argv[2]);
const {redirects} = JSON.parse(readFileSync('vercel.json', 'utf8'));
for (const rule of redirects) {
  for (const suffix of ['', '/']) {
    const origem = new URL(rule.source + suffix + '?q=iphone&cor=azul', base);
    const resposta = await fetch(origem, {redirect: 'manual'});
    assert.equal(resposta.status, 301, origem.href);
    const location = resposta.headers.get('location');
    assert(location, 'Location ausente');
    const destino = new URL(location, origem);
    assert.equal(destino.origin, base.origin);
    assert.equal(destino.pathname.replace(/\/$/, ''), rule.destination);
    assert.equal(destino.search, origem.search);
    const pagina = await fetch(destino, {redirect: 'manual'});
    assert.equal(pagina.status, 200, destino.href);
  }
  console.log(rule.source, '→', rule.destination);
}

````

## scripts/verificar-seo.mjs

````
import {readFileSync,readdirSync,existsSync} from 'node:fs';
import assert from 'node:assert/strict';
const walk=p=>readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(`${p}/${e.name}`):[`${p}/${e.name}`]);
const html=walk('dist').filter(f=>f.endsWith('.html'));
const canonicas=new Set();
const {redirects}=JSON.parse(readFileSync('vercel.json','utf8'));
const regras=readFileSync('dist/_redirects','utf8').trim().split('\n');
for(const {source,destination,statusCode} of redirects){
 assert.equal(statusCode,301);
 assert(!redirects.some(rule=>rule.source===destination),'Cadeia de redirecionamento');
 assert(existsSync('dist'+destination+'/index.html'),destination);
 for(const suffix of ['', '/'])assert(regras.includes(source+suffix+' '+destination+' 301'));
}
for(const f of html){
 const s=readFileSync(f,'utf8');
 const canonical=s.match(/rel="canonical" href="([^"]+)"/)?.[1];assert(canonical,f);const path=f.slice(4).replace(/\/index.html$/,'').replace(/^$/, '/').replace(/^\/404.html$/, '/404');
 const dest=redirects.find(rule=>rule.source===path)?.destination;
 assert.equal(new URL(canonical).pathname,dest??path,f);
 if(!dest){assert(!canonicas.has(canonical),f);canonicas.add(canonical);}
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

## src/components/PendenciasDev.astro

````
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Remodelagem R7</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fundação, fundadores, equipe autorizada, vitrine de iPhones, atendimento com pessoas autorizadas, fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````

## src/components/home/LojaHome.astro

````
---
import { Picture } from 'astro:assets';
import foto from '../../assets/loja.jpg';
import { loja, enderecoCompleto } from '../../config/loja';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import { formatarPeriodos } from '../../lib/horario';
interface Props { pagina?: boolean }
const { pagina = false } = Astro.props;
const TituloDetalhe = pagina ? 'h2' : 'h3';
const coordenadas=`${loja.coordenadas.latitude},${loja.coordenadas.longitude}`;
const mapa=`https://www.google.com/maps?q=${encodeURIComponent(coordenadas)}&z=17&output=embed`;
const waze=`https://www.waze.com/ul?ll=${encodeURIComponent(coordenadas)}&navigate=yes`;
---
<section class="loja-home light" id="visite-nos" aria-labelledby="titulo-loja"><div class="container"><span id="loja" aria-hidden="true"></span><div class="cabecalho"><div>{pagina ? <>
  <h1 id="titulo-loja">Visite a Smart Lion em Lages.</h1>
  <p class="resposta">Nossa loja fica na {loja.endereco.rua}, {loja.endereco.numero}, no Centro de {loja.endereco.cidade}. Confira o horário antes de sair e fale com a equipe pelo WhatsApp se precisar de orientação.</p>
  <a class="atalho" href="#horarios-e-rotas">Ver horários e rotas ↓</a>
 </> : <><p class="eyebrow">Tem endereço. Tem gente.</p><h2 id="titulo-loja">Visite-nos.<br/>Vamos conversar.</h2></>}</div><address>{enderecoCompleto}<br/>CEP {loja.endereco.cep}</address></div><Picture src={foto} formats={['avif','webp']} widths={[480,800,1280]} sizes="100vw" alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" loading="lazy"/>{import.meta.env.DEV&&!loja.fotoFachada&&<p class="pendente">PROVISÓRIO: foto do interior; aguardando foto da fachada.</p>}<div class="detalhes" id="horarios-e-rotas"><div><TituloDetalhe>Quando visitar</TituloDetalhe><table><caption class="sr-only">Horário da loja em Lages</caption><tbody>{loja.horario.semana.map(h=><tr><th scope="row">{h.rotulo}</th><td>{formatarPeriodos(h.periodos)}</td></tr>)}</tbody></table><p>Nos feriados, confirme o atendimento com a equipe.</p><div class="rotas"><a class="button" href={loja.googleMaps}>Google Maps ↗</a><a class="button" href={waze}>Waze ↗</a></div><div class="contatos"><BotaoWhatsApp rotulo="Fale conosco no WhatsApp"/><a href={`tel:${loja.telefone.numero}`}>Telefone: {loja.telefone.exibicao}</a></div></div><div class="mapa" data-mapa={mapa}><TituloDetalhe>Encontre a Smart Lion</TituloDetalhe><p>Ao carregar o mapa, seu navegador se conecta ao Google, que pode usar cookies. Você pode continuar com o endereço e os links de rota sem carregar o mapa aqui.</p><div class="consentimento" hidden><button class="button" type="button" data-aceitar-mapa>Carregar mapa do Google</button><button class="button" type="button" data-recusar-mapa>Continuar sem mapa</button></div><p class="status-mapa" role="status"></p><div class="mapa-conteudo"></div><noscript><p>Use os links Google Maps ou Waze para abrir a rota.</p></noscript></div></div></div></section>
<script>import '../../scripts/mapa';</script>
<style>.resposta{max-width:60ch;margin:24px 0}.atalho{display:inline-flex;align-items:center;min-height:44px;text-decoration:underline}.cabecalho h1{max-width:15ch}.detalhes{scroll-margin-top:8rem}.loja-home{padding:var(--space-chapter) 0;border-top:1px solid #c7c2b9}.contatos{display:grid;justify-items:start;gap:16px;margin-top:24px}.contatos>a{min-height:44px;display:flex;align-items:center}.pendente{background:#fff0c7;color:#633a00;padding:12px;font-size:.8rem;margin-top:16px}.cabecalho{display:flex;align-items:end;justify-content:space-between;gap:30px;margin-bottom:36px}.eyebrow{color:var(--text-dark);margin-bottom:18px}address{font-style:normal;line-height:1.8}.container>:global(picture img){width:100%;height:380px;object-fit:cover}.detalhes{display:grid;grid-template-columns:1fr 1.2fr;gap:64px;margin-top:36px}.detalhes h2,.detalhes h3{font-size:1.5rem;margin-bottom:20px}table{border-collapse:collapse;font-size:.95rem}th{text-align:left;font-weight:400;padding:8px 25px 8px 0}td{font-variant-numeric:tabular-nums}.detalhes p{font-size:.8rem;color:#414246;margin:16px 0}.rotas,.consentimento{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}.button{background:transparent;color:#111214;border:1px solid #747579;font-size:.85rem}.consentimento .button{flex:1;min-width:180px;min-height:66px}.mapa :global(iframe){display:block;width:100%;height:320px;border:0}.status-mapa:empty{display:none}@media(max-width:800px){.cabecalho{display:block}address{margin-top:22px}.detalhes{grid-template-columns:1fr;gap:38px}.container>:global(picture img){height:260px}}</style>

````

## src/layouts/LayoutBase.astro

````
---
import '../styles/tokens.css';
import '../styles/global.css';
import { redirects } from '../../vercel.json';
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
const path = Astro.url.pathname.replace(/\/$/, '') || '/';
const destination = redirects.find(rule => rule.source === path)?.destination ?? path;
const canonical = urlCanonica(destination, Astro.site!);
const indexavel=podeIndexar(import.meta.env.DEV,import.meta.env.PUBLIC_INDEXABLE,import.meta.env.VERCEL_ENV)&&!Astro.url.pathname.startsWith('/404')&&!Astro.url.pathname.startsWith('/_estilo');
const og=await getImage({src:fotoLoja,width:1200,format:'jpg'});
const schema=dadosEstruturados(destination,title,Astro.site!,produto);
---
<!doctype html><html lang="pt-BR"><head><meta charset="UTF-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>{title}</title><meta name="description" content={description}/><meta name="robots" content={indexavel ? 'index,follow' : 'noindex,nofollow'}/><link rel="canonical" href={canonical}/><meta property="og:type" content="website"/><meta property="og:locale" content="pt_BR"/><meta property="og:title" content={title}/><meta property="og:description" content={description}/><meta property="og:url" content={canonical}/><meta property="og:image" content={new URL(og.src,Astro.site).href}/><meta property="og:image:alt" content="Interior da loja Smart Lion em Lages"/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json" set:html={jsonSeguro(schema)}/><meta name="theme-color" content="#111214"/><link rel="icon" type="image/png" href="/favicon.png"/><link rel="preload" href={fontH1} as="font" type="font/woff2" crossorigin/></head><body><a class="skip" href="#conteudo">Pular para o conteúdo</a><div class="sticky"><Header/></div><PendenciasDev/><main id="conteudo" tabindex="-1"><slot/></main><Consentimento/><Rodape/><BotaoWhatsApp flutuante/></body></html>
<style>.sticky{position:sticky;top:0;z-index:40}main:focus{outline:none}@media(max-width:1180px){.sticky{position:relative}}</style>

````

## src/pages/llms.txt.ts

````
import type { APIRoute } from 'astro';
import { loja,enderecoCompleto } from '../config/loja';
import { categorias, caminhoCategoria } from '../config/categorias';
import { formatarPeriodos } from '../lib/horario';
import { linkWhatsApp,mensagensWhatsApp } from '../config/whatsapp';
export const GET:APIRoute=({site})=>new Response(`# ${loja.nome}\n\n> Loja física de tecnologia em ${loja.endereco.cidade}. Catálogo sob consulta; atendimento pelo WhatsApp. Não há compra online.\n\n${loja.irpDescricao}. Seminovos com ${loja.garantiaSeminovosMeses} meses de garantia da loja.\n\n## Contato\n- Endereço: ${enderecoCompleto}, CEP ${loja.endereco.cep}\n- Telefone: ${loja.telefone.exibicao}\n- [WhatsApp ${loja.whatsapp.exibicao}](${linkWhatsApp(mensagensWhatsApp.geral())})\n- [Instagram ${loja.instagram.nome}](${loja.instagram.url})\n\n## Horários (${loja.horario.fuso})\n${loja.horario.semana.map(h=>`- ${h.rotulo}: ${formatarPeriodos(h.periodos)}`).join('\n')}\nFeriados: confirmar com a equipe.\n\n## Páginas\n${[['A Loja','/a-loja'],['Nossa História','/nossa-historia'],['Produtos','/produtos'],['Assistência técnica','/assistencia-tecnica'],['Curso de manutenção','/curso-manutencao-celular'],['Visite-nos','/visite-nos'],['Avaliações','/avaliacoes'],['Privacidade','/privacidade'],['Perguntas frequentes','/perguntas-frequentes'],['Dicas','/dicas'],...categorias.map(c=>[c.nome,caminhoCategoria(c.slug)])].map(([n,p])=>`- [${n}](${new URL(p!,site)})`).join('\n')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});

````

## src/pages/sitemap.xml.ts

````
import type { APIRoute } from 'astro';
import { categorias, caminhoCategoria } from '../config/categorias';
import { servicos } from '../config/servicos';
import { obterProdutos } from '../lib/produtos';
import { publicavel } from '../lib/catalogo';
import { obterDicas } from '../lib/dicas';
import { dicaPublicavel } from '../schemas/dica';
import { urlCanonica } from '../lib/seo';
export const GET:APIRoute=async({site})=>{
 const rotas=['/','/produtos','/assistencia-tecnica','/curso-manutencao-celular','/a-loja','/nossa-historia','/visite-nos','/avaliacoes','/dicas','/perguntas-frequentes','/privacidade',...categorias.map(c=>caminhoCategoria(c.slug)),...servicos.map(s=>'/assistencia-tecnica/'+s.slug),...(await obterProdutos()).filter(publicavel).map(p=>'/produto/'+p.slug),...(await obterDicas()).filter(d=>dicaPublicavel(d.data)).map(d=>'/dicas/'+d.data.slug)];
 const escape=(s:string)=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
 return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${rotas.map(r=>`<url><loc>${escape(urlCanonica(r,site!))}</loc></url>`).join('')}</urlset>`,{headers:{'Content-Type':'application/xml; charset=utf-8'}});
};

````

## vercel.json

````
{
  "redirects": [
    {
      "source": "/como-chegar",
      "destination": "/visite-nos",
      "statusCode": 301
    },
    {
      "source": "/sobre",
      "destination": "/nossa-historia",
      "statusCode": 301
    },
    {
      "source": "/catalogo",
      "destination": "/produtos",
      "statusCode": 301
    },
    {
      "source": "/produtos/seminovos",
      "destination": "/seminovos",
      "statusCode": 301
    },
    {
      "source": "/catalogo/iphone",
      "destination": "/produtos/iphone",
      "statusCode": 301
    },
    {
      "source": "/catalogo/seminovos",
      "destination": "/seminovos",
      "statusCode": 301
    },
    {
      "source": "/catalogo/ipad-mac-watch",
      "destination": "/produtos/ipad-mac-watch",
      "statusCode": 301
    },
    {
      "source": "/catalogo/xiaomi",
      "destination": "/produtos/xiaomi",
      "statusCode": 301
    },
    {
      "source": "/catalogo/casa-e-games",
      "destination": "/produtos/casa-e-games",
      "statusCode": 301
    },
    {
      "source": "/catalogo/acessorios",
      "destination": "/produtos/acessorios",
      "statusCode": 301
    },
    {
      "source": "/catalogo/perfumaria",
      "destination": "/produtos/perfumaria",
      "statusCode": 301
    }
  ]
}

````
