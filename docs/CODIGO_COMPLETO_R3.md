# Código completo — R3

## Arquivos criados/alterados

- astro.config.mjs
- docs/PENDENCIAS.md
- docs/REMODELAGEM_R3.md
- docs/smartlion-r3-historia.jpg
- docs/smartlion-r3-loja.jpg
- src/components/PendenciasDev.astro
- src/components/editorial/Equipe.astro
- src/components/editorial/LinhaDoTempo.astro
- src/config/loja.ts
- src/config/navegacao.ts
- src/data/historia.json
- src/lib/historia.ts
- src/pages/a-loja.astro
- src/pages/index.astro
- src/pages/llms.txt.ts
- src/pages/nossa-historia.astro
- src/pages/sitemap.xml.ts
- src/pages/sobre.astro
- tests/historia.test.ts

Nenhum arquivo removido.


## astro.config.mjs

````mjs
import { defineConfig } from 'astro/config';
export default defineConfig({ site: process.env.SITE_URL || 'https://smartlion-waxlo.samsric8.chatgpt.site', output: 'static', server: { host: true }, vite: { server: { allowedHosts: ['terminal.local'] } } });

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

````


## docs/REMODELAGEM_R3.md

````md
# R3 — A Loja e Nossa História

03/11/2026. Branch remodelagem-institucional.

## Entrega
/a-loja: cinco capítulos, chegada/endereço, produtos e acessórios, balcão, assistência, Centro Técnico; fecha com horário completo, contatos e mapa por consentimento. Entrada acessível confirmada na especificação (Google Maps). Sem foto falsa de fachada: composição tipográfica com endereço. Foto de capas identificada como acessórios, não vitrine de iPhones.

/nossa-historia: manifesto, conteúdo anterior de /sobre preservado, quatro valores com prova em avaliações literais, linha do tempo e estrutura de equipe. Fundação/fundadores não inventados. Equipe oculta em produção até nome, função, foto existente e autorização com data válida. IDs dos relatos: g-012, g-020, g-043, g-035. Os nomes citados pelos próprios clientes permanecem no texto literal; não constituem cadastro de equipe.

historia.json: cinco marcos com fonte, confirmação e ordem; LinhaDoTempo atende a página completa e a prévia da home. Experiência não equivale a fundação, anúncio IRP não equivale a ingresso contratual, turmas não equivalem à inauguração. Registros históricos de avaliações conservam sua data.

Menu e home apontam para as páginas novas; sitemap e llms.txt incluem ambas. /sobre continua com o conteúdo anterior e link para história até implantação/teste do HTTP 301 na migração R7. Nenhum arquivo/página removido. Sem meta refresh apresentado como 301. Canônicas tinham fallback no endereço antigo do Sites: corrigido para a origem atual. SITE_URL continua sendo a configuração prioritária para o domínio definitivo.

## Validação
- 190 testes / 8 arquivos passaram, incluindo autorização de equipe e limites dos marcos históricos.
- Astro check e build passaram sem erros.
- 27 páginas; 5 produtos rascunho excluídos.
- JavaScript gzip: /a-loja 1.469 bytes; /nossa-historia 967 bytes; home 2.919 bytes. Todas abaixo de 30 KB.
- 115 links WhatsApp centralizados; 86 imagens com alt e dimensões; nenhum ID duplicado ou texto proibido na voz da loja.
- 4 citações da história comparadas literalmente ao JSON. Equipe e avisos pendentes ausentes do HTML de produção.
- 5 marcos na história; 3 compartilhados na home. Sitemap, canônicas, OG e JSON-LD verificados, sem Review/AggregateRating e iframe inicial.
- Navegador: abertura do tour, fotografia carregada, navegação pelo menu para história, linha do tempo e H1 único; sem overflow horizontal em 1348px.
- Contrastes por script preservados; não substituem auditoria WCAG completa.
- Não medidos: 390/1440px exatos, Lighthouse/axe, LCP/CLS/INP, JS desligado/reduced-motion manual. A API de navegador disponível não expõe emulação de viewport. Não afirmar metas atingidas sem medição.

## Executar
```sh
cd /workspace/sites/smartlion
pnpm install --frozen-lockfile
pnpm test
pnpm check
pnpm build
node scripts/verificar-home.mjs
node scripts/verificar-final.mjs
node scripts/verificar-avaliacoes.mjs
node scripts/verificar-seo.mjs
node scripts/verificar-catalogo.mjs
pnpm dev
```

## Conferência visual
Abra /a-loja e /nossa-historia. Em 390px: textos e fotos em coluna, título sem corte, datas legíveis, nenhuma rolagem horizontal da página; menu/WhatsApp/Instagram acessíveis. Em 1440px: fotos grandes, alternância claro/escuro, valores e citações alinhados, datas à esquerda dos marcos. Tab/Enter/Escape no menu; mapa só por consentimento; conteúdo visível sem JS e movimento desativado em reduced-motion. A faixa amarela aparece somente no desenvolvimento.

Para medir localmente com Chrome e ChromeDriver instalados:
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
Preview noindex tem efeito esperado em SEO. INP exige interações/campo e não é inferido do build ou Lighthouse.

## Próxima etapa
R4: /produtos, categorias, páginas de produto e modal como vitrine. Fotos, fundação/fundadores, equipe e validações jurídicas permanecem pendentes. Nenhuma pergunta nova bloqueante.

````


## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Remodelagem R3</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fundação, fundadores, equipe autorizada, vitrine de iPhones, atendimento com pessoas autorizadas, fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
<style>aside{background:#fff0c7;color:#342800;padding:16px 24px;font-size:.8rem;border-bottom:1px solid #a98b35}</style>

````


## src/components/editorial/Equipe.astro

````astro
---
import { Picture } from 'astro:assets';
import type { ImageMetadata } from 'astro';
import { loja } from '../../config/loja';
import { equipePublicavel } from '../../lib/historia';
const fotos=import.meta.glob<{default:ImageMetadata}>('../../assets/equipe/*.{jpg,jpeg,png,webp}',{eager:true});
const foto=(nome:string)=>fotos[`../../assets/equipe/${nome}`]?.default;
const pessoas=loja.equipe.filter(p=>equipePublicavel(p,Boolean(foto(p.foto))));
---
{pessoas.length>0&&<section class="equipe container" aria-labelledby="titulo-equipe"><h2 id="titulo-equipe">Quem faz parte dessa história.</h2><div>{pessoas.map(p=><article><Picture src={foto(p.foto)!} formats={['avif','webp']} widths={[320,640]} sizes="(max-width:700px) 100vw, 30vw" alt={`Retrato de ${p.nome}, ${p.funcao}`} loading="lazy"/><h3>{p.nome}</h3><p>{p.funcao}</p></article>)}</div></section>}
{import.meta.env.DEV&&pessoas.length===0&&<aside class="container pendente">PENDENTE: nomes, funções, fotos e autorização da equipe. A seção não aparece em produção.</aside>}
<style>.equipe{padding-block:var(--space-chapter)}.equipe>div{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:48px}.equipe h3{font-size:1.8rem;margin:20px 0 12px}.pendente{padding:24px;background:#fff0c7;color:#633a00;font-size:.8rem}@media(max-width:700px){.equipe>div{grid-template-columns:1fr}}</style>

````


## src/components/editorial/LinhaDoTempo.astro

````astro
---
import { marcos } from '../../lib/historia';
interface Props { resumida?: boolean }
const {resumida=false}=Astro.props;
const itens=resumida?marcos.filter(m=>m.destaqueHome):marcos;
---
<ol class:list={['linha-do-tempo',{resumida}]} aria-label="Marcos confirmados da Smart Lion">{itens.map(m=><li data-marco={m.id}><time datetime={m.data}>{m.rotulo}</time><div><h3>{m.titulo}</h3><p>{m.texto}</p></div></li>)}</ol>
<style>.linha-do-tempo{list-style:none;padding:0;margin:48px 0}.linha-do-tempo li{display:grid;grid-template-columns:200px 1fr;gap:48px;border-top:1px solid var(--wood);padding:32px 0}.linha-do-tempo time{color:var(--wood-light);font-size:.85rem}.linha-do-tempo h3{font-size:clamp(1.6rem,2.5vw,2.5rem);margin-bottom:16px}.linha-do-tempo p{max-width:680px;color:var(--muted)}.resumida{display:grid;grid-template-columns:repeat(3,1fr);gap:32px}.resumida li{display:block}.resumida h3{font-size:1.5rem;margin-top:20px}.resumida p{font-size:.9rem}@media(max-width:700px){.linha-do-tempo li{grid-template-columns:1fr;gap:16px}.resumida{grid-template-columns:1fr;gap:0}.resumida li{padding-block:24px}}</style>

````


## src/config/loja.ts

````ts
import type { PessoaEquipe } from '../lib/historia';
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
  historia: { fundacao: '', fundadores: [] as string[] },
  equipe: [] as PessoaEquipe[],
  ambientes: { fotoVitrineIphones: '', fotoAtendimento: '', entradaAcessivel: true, fonteAcessibilidade: 'Google Maps, aba Sobre, consultada em 28/10/2026' },
  instagramPosts: [
    { imagem: 'capas', url: '' }, { imagem: 'laboratorio', url: '' },
    { imagem: 'bancada', url: '' }, { imagem: 'fones', url: '' },
    { imagem: 'caixas-de-som', url: '' }, { imagem: '', url: '' },
  ],
  curso: { cargaHoraria: '', conteudo: '', proximaTurma: '', certificado: '' },
} as const;
export const enderecoCompleto = `${loja.endereco.rua}, ${loja.endereco.numero} · ${loja.endereco.bairro}, ${loja.endereco.cidade}/${loja.endereco.uf}`;

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
  { nome: 'Produtos', href: '/catalogo' },
  { nome: 'Seminovos', href: '/catalogo/seminovos' },
  { nome: 'Assistência técnica', href: '/assistencia-tecnica' },
  { nome: 'Curso', href: '/curso-manutencao-celular' },
] as const;

````


## src/data/historia.json

````json
[
  {
    "id": "experiencia-assistencia",
    "data": "2026-02",
    "rotulo": "Fevereiro de 2026",
    "titulo": "Experiência no cuidado com aparelhos",
    "texto": "Na publicação de fevereiro, mencionamos cinco anos de experiência em assistência técnica. Esse relato não define a data de fundação da loja.",
    "fonte": "docs/ESPECIFICACAO.md §2 / publicação de 18/02/2026",
    "confirmado": true,
    "destaqueHome": false,
    "ordem": 1
  },
  {
    "id": "anuncio-irp",
    "data": "2026-02",
    "rotulo": "Fevereiro de 2026",
    "titulo": "Anúncio de participação no IRP",
    "texto": "Anunciamos nossa participação no programa Independent Repair Provider (IRP) da Apple. A data se refere à divulgação, não ao início contratual no programa.",
    "fonte": "docs/ESPECIFICACAO.md §3.2 / publicação de 18/02/2026",
    "confirmado": true,
    "destaqueHome": true,
    "ordem": 2
  },
  {
    "id": "setecentas-avaliacoes",
    "data": "2026-05",
    "rotulo": "Maio de 2026",
    "titulo": "Uma história contada pelos clientes",
    "texto": "Celebramos mais de 700 avaliações de cinco estrelas no Google em uma publicação da loja.",
    "fonte": "docs/ESPECIFICACAO.md §4.3 / publicação de 12/05/2026",
    "confirmado": true,
    "destaqueHome": false,
    "ordem": 3
  },
  {
    "id": "turmas-centro-tecnico",
    "data": "2026",
    "rotulo": "2026",
    "titulo": "Aprendizado no Centro Técnico",
    "texto": "Divulgamos turmas de manutenção de celulares no laboratório anexo à loja, com bancadas individuais. Este marco registra a divulgação das turmas, não uma data de inauguração.",
    "fonte": "docs/ESPECIFICACAO.md §3.4 / publicações de 27/07 e 02/08/2026",
    "confirmado": true,
    "destaqueHome": true,
    "ordem": 4
  },
  {
    "id": "avaliacoes-outubro",
    "data": "2026-10",
    "rotulo": "Outubro de 2026",
    "titulo": "A confiança segue registrada",
    "texto": "A coleta de outubro registrou 766 avaliações e nota 5,0 na ficha da loja no Google.",
    "fonte": "src/data/avaliacoes.json / coleta de 28/10/2026",
    "confirmado": true,
    "destaqueHome": true,
    "ordem": 5
  }
]

````


## src/lib/historia.ts

````ts
import { z } from 'astro/zod';
import dados from '../data/historia.json';
export const marcoSchema=z.object({
 id:z.string().min(1),data:z.string().regex(/^\d{4}(?:-(?:0[1-9]|1[0-2]))?$/),
 rotulo:z.string().min(1),titulo:z.string().min(1),texto:z.string().min(1),
 fonte:z.string().min(1),confirmado:z.boolean(),destaqueHome:z.boolean(),ordem:z.number().int(),
});
export const marcos=marcoSchema.array().parse(dados).filter(m=>m.confirmado).sort((a,b)=>a.ordem-b.ordem);
export interface PessoaEquipe { nome:string; funcao:string; foto:string; autorizacaoEm:string; autorizado:boolean }
export function equipePublicavel(p:PessoaEquipe,fotoDisponivel:boolean){
 const dataValida=/^\d{4}-\d{2}-\d{2}$/.test(p.autorizacaoEm)&&!Number.isNaN(Date.parse(p.autorizacaoEm))&&new Date(p.autorizacaoEm).toISOString().slice(0,10)===p.autorizacaoEm;
 return p.autorizado&&Boolean(p.nome.trim()&&p.funcao.trim()&&p.foto.trim())&&fotoDisponivel&&dataValida;
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
<Capitulo id="vitrine-loja" marcador="02 / Produtos e acessórios" titulo="Conheça. Pergunte. Escolha com calma."><div class="ambiente"><RevelacaoImagem src={capas} alt="Capas de celular com textura de couro em três cores" legenda="Acessórios fotografados pela Smart Lion." sizes="(max-width:800px) 100vw, 50vw"/><div><p>Reunimos Apple, Xiaomi, importados e acessórios para o dia a dia. A equipe atende também pelo WhatsApp para conversar sobre modelos e disponibilidade.</p><a class="link-editorial" href="/catalogo">Explore as categorias ↗</a>{import.meta.env.DEV&&!loja.ambientes.fotoVitrineIphones&&<p class="pendente">PROVISÓRIO: aguardando foto da vitrine de iPhones. A imagem atual mostra acessórios.</p>}</div></div></Capitulo>
<Capitulo id="balcao" tema="claro" marcador="03 / A experiência na loja" titulo="Atendimento de perto."><p slot="introducao">Balcão de madeira e prateleiras iluminadas compõem nosso espaço. Aqui, a conversa ajuda a entender o que você procura, antes de decidir.</p><RevelacaoImagem src={foto} alt="Balcão de madeira, cadeiras e prateleiras no interior da Smart Lion" legenda="O interior da loja."/>{import.meta.env.DEV&&!loja.ambientes.fotoAtendimento&&<p class="pendente">PROVISÓRIO: aguardando foto do atendimento com pessoas autorizadas.</p>}</Capitulo>
<Capitulo id="bancada-tour" marcador="04 / Assistência técnica" titulo="Um lugar para cuidar do seu aparelho."><div class="ambiente invertido"><RevelacaoImagem src={bancada} alt="Microscópio e ferramentas na bancada técnica da Smart Lion" legenda="Bancada de manutenção da Smart Lion." sizes="(max-width:800px) 100vw, 50vw"/><div><p>{loja.irpDescricao}. Nossa bancada reúne microscópio e ferramentas para a manutenção; a equipe conversa com você sobre avaliação e orçamento.</p><a class="link-editorial" href="/assistencia-tecnica">Conheça a assistência ↗</a></div></div></Capitulo>
<Capitulo id="laboratorio-tour" tema="claro" marcador="05 / Centro Técnico" titulo="Aprender também passa pela prática."><div class="ambiente"><RevelacaoImagem src={laboratorio} alt="Bancadas individuais e equipamentos do laboratório de treinamento" legenda="Laboratório de manutenção anexo à loja." sizes="(max-width:800px) 100vw, 50vw"/><div><p>O laboratório anexo à loja tem bancadas individuais para os treinamentos de manutenção de celulares. Teoria e prática fazem parte do aprendizado; converse com a equipe sobre o conteúdo e as próximas turmas.</p><a class="link-editorial" href="/curso-manutencao-celular">Conheça o curso ↗</a></div></div></Capitulo>
<LojaHome/>
</Pagina>
<style>.entrada,.ambiente{display:grid;grid-template-columns:1.1fr 1fr;align-items:center;gap:clamp(32px,8vw,120px)}.entrada p,.ambiente p{font-size:1.05rem;max-width:550px}.entrada address{font-style:normal;margin:24px 0}.entrada-nota{padding-left:48px;border-left:1px solid var(--wood)}.entrada-nota .numero{font:400 clamp(5rem,11vw,10rem)/1 var(--font-heading);font-variant-numeric:tabular-nums;margin-bottom:20px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;margin-top:24px;text-decoration:underline;text-underline-offset:6px}.ambiente.invertido>:first-child{order:2}.pendente{background:#fff0c7;color:#633a00;padding:16px;margin-top:20px;font-size:.8rem!important}@media(max-width:800px){.entrada,.ambiente{grid-template-columns:1fr;gap:32px}.entrada-nota{padding-left:24px}.ambiente.invertido>:first-child{order:0}}</style>

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
<Capitulo id="ambiente" marcador="A casa do leão" titulo="Entre. Conheça nosso espaço."><p slot="introducao">Da loja ao laboratório, produtos, cuidado técnico e aprendizado fazem parte do nosso dia a dia.</p><div class="galeria"><RevelacaoImagem src={fotoLoja} alt="Interior da Smart Lion, com balcão de madeira e prateleiras iluminadas" legenda="01 / A loja. Madeira e tecnologia no mesmo ambiente."/><div class="galeria-lateral"><RevelacaoImagem src={bancada} alt="Bancada com microscópio e ferramentas de manutenção" legenda="02 / A bancada de assistência." sizes="(max-width:700px) 100vw, 35vw"/><p>Um aparelho acompanha muita coisa da nossa vida. O cuidado com ele também faz parte da nossa história.</p></div><div class="galeria-laboratorio"><RevelacaoImagem src={laboratorio} alt="Bancadas individuais do laboratório de manutenção da Smart Lion" legenda="03 / O Centro Técnico. Um lugar para aprender na prática." sizes="(max-width:700px) 100vw, 50vw"/></div><div class="galeria-convite"><p class="texto-display">Conheça de perto.</p><a class="link-editorial" href="/a-loja">Fazer o tour ↗</a>{import.meta.env.DEV&&<p class="pendente">PROVISÓRIO: Faltam fachada, vitrine e balcão com atendimento autorizado.</p>}</div></div></Capitulo>
<Capitulo id="atividades" tema="claro" marcador="O que fazemos" titulo="Diferentes caminhos. O mesmo cuidado."><div class="pilares">{pilares.map(p=><article><div class="pilar-imagem"><Picture src={p.foto} formats={['avif','webp']} widths={[400,640,900]} sizes="(max-width:700px) 100vw, 45vw" alt={p.alt} loading="lazy"/></div><div class="pilar-texto"><span class="numero">{p.numero}</span><div><h3>{p.titulo}</h3><p>{p.texto}</p><a class="link-editorial" href={p.href}>{p.link} ↗</a></div></div></article>)}</div>{import.meta.env.DEV&&<p class="pendente">PROVISÓRIO: o pilar de seminovos usa a foto do interior, sem representar estoque. Aguardando foto real dos aparelhos.</p>}</Capitulo>
<Capitulo id="vitrine" tema="claro" marcador="Produtos e importados" titulo="O que você encontra aqui."><p slot="introducao">Conheça nossas categorias. Para saber quais modelos estão disponíveis, fale com a equipe.</p><div class="categorias-editoriais">{categorias.filter(c=>c.slug!=='seminovos').map((c,i)=>{const foto=fotosCategoria[c.slug as keyof typeof fotosCategoria];return <article><span class="numero">{String(i+1).padStart(2,'0')}</span><div><h3>{c.nome}</h3><p>{c.detalhe}</p></div>{foto&&<Picture src={foto.src} formats={['avif','webp']} widths={[160,240,320]} sizes="120px" alt={foto.alt} loading="lazy"/>}<a href={`/catalogo/${c.slug}`} aria-label={`Saiba mais sobre ${c.nome}`}>Saiba mais <span aria-hidden="true">↗</span></a>{import.meta.env.DEV&&!foto&&<span class="pendente">Foto PENDENTE</span>}</article>})}</div><a class="link-editorial" href="/catalogo">Ver todos os produtos ↗</a></Capitulo>
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
import { categorias } from '../config/categorias';
import { formatarPeriodos } from '../lib/horario';
import { linkWhatsApp,mensagensWhatsApp } from '../config/whatsapp';
export const GET:APIRoute=({site})=>new Response(`# ${loja.nome}\n\n> Loja física de tecnologia em ${loja.endereco.cidade}. Catálogo sob consulta; atendimento pelo WhatsApp. Não há compra online.\n\n${loja.irpDescricao}. Seminovos com ${loja.garantiaSeminovosMeses} meses de garantia da loja.\n\n## Contato\n- Endereço: ${enderecoCompleto}, CEP ${loja.endereco.cep}\n- Telefone: ${loja.telefone.exibicao}\n- [WhatsApp ${loja.whatsapp.exibicao}](${linkWhatsApp(mensagensWhatsApp.geral())})\n- [Instagram ${loja.instagram.nome}](${loja.instagram.url})\n\n## Horários (${loja.horario.fuso})\n${loja.horario.semana.map(h=>`- ${h.rotulo}: ${formatarPeriodos(h.periodos)}`).join('\n')}\nFeriados: confirmar com a equipe.\n\n## Páginas\n${[['A Loja','/a-loja'],['Nossa História','/nossa-historia'],['Catálogo','/catalogo'],['Assistência técnica','/assistencia-tecnica'],['Curso de manutenção','/curso-manutencao-celular'],['Como chegar','/como-chegar'],['Perguntas frequentes','/perguntas-frequentes'],['Dicas','/dicas'],...categorias.map(c=>[c.nome,'/catalogo/'+c.slug])].map(([n,p])=>`- [${n}](${new URL(p!,site)})`).join('\n')}\n`,{headers:{'Content-Type':'text/plain; charset=utf-8'}});

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
<Capitulo id="conheca" tema="claro" marcador="Nossa história tem endereço" titulo="Venha fazer parte da conversa."><p slot="introducao">Conheça o ambiente da loja, a bancada da assistência e o Centro Técnico.</p><nav class="links" aria-label="Explore a Smart Lion"><a class="button" href="/a-loja">Conheça a loja ↗</a><a class="link-editorial" href="/catalogo">Produtos ↗</a><a class="link-editorial" href="/assistencia-tecnica">Assistência ↗</a><a class="link-editorial" href="/curso-manutencao-celular">Centro Técnico ↗</a><a class="link-editorial" href="/avaliacoes">Avaliações ↗</a></nav></Capitulo>
</Pagina>
<style>.manifesto{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:center}.manifesto p{margin-bottom:24px;font-size:1.05rem}.valores{display:grid;gap:64px}.valor{display:grid;grid-template-columns:1fr 1.4fr;gap:100px;align-items:start}.valor h3{font-size:clamp(2rem,3.5vw,3.5rem);margin-bottom:20px}.valor>div>p{max-width:360px;color:var(--text-dark)}.valor :global(.depoimento){padding-top:24px}.links{display:flex;flex-wrap:wrap;align-items:center;gap:24px}.link-editorial{display:inline-flex;align-items:center;min-height:48px;text-decoration:underline;text-underline-offset:6px}.pendente{background:#fff0c7;color:#633a00;padding:16px;font-size:.8rem}@media(max-width:800px){.manifesto,.valor{grid-template-columns:1fr;gap:28px}.valores{gap:48px}}</style>

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
 const rotas=['/','/catalogo','/assistencia-tecnica','/curso-manutencao-celular','/sobre','/a-loja','/nossa-historia','/como-chegar','/avaliacoes','/dicas','/perguntas-frequentes','/privacidade',...categorias.map(c=>'/catalogo/'+c.slug),...servicos.map(s=>'/assistencia-tecnica/'+s.slug),...(await obterProdutos()).filter(publicavel).map(p=>'/produto/'+p.slug),...(await obterDicas()).filter(d=>dicaPublicavel(d.data)).map(d=>'/dicas/'+d.data.slug)];
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
<section class="pagina-bloco light"><div class="container duas-colunas"><div><h2>A compra é só o começo.</h2><p>A Smart Lion nasceu com a proposta de tornar a experiência com tecnologia segura e confiável. A loja trabalha com produtos novos e seminovos com nota fiscal e atendimento para orientar a escolha.</p><p>Essa atuação se ampliou para a manutenção de celulares e o treinamento técnico, reunindo venda, suporte e aprendizado no mesmo endereço.</p><h3>Procedência e acompanhamento</h3><p>Os iPhones seminovos passam por avaliação da equipe técnica e contam com {loja.garantiaSeminovosMeses} meses de garantia da loja. Consulte as condições de cobertura antes da compra.</p><nav class="navegacao-paginas" aria-label="Conheça a Smart Lion"><a href="/catalogo">Catálogo ↗</a><a href="/assistencia-tecnica">Assistência ↗</a><a href="/curso-manutencao-celular">Centro Técnico ↗</a><a href="/avaliacoes">Avaliações ↗</a></nav></div><Picture src={foto} formats={['avif','webp']} widths={[480,800,1280]} sizes="(max-width:800px) 100vw, 45vw" alt="Ambiente interno da loja Smart Lion com balcão e prateleiras" loading="lazy" class="foto-editorial"/></div></section>
</Pagina>

````


## tests/historia.test.ts

````ts
import { describe,it,expect } from 'vitest';
import { marcos, marcoSchema, equipePublicavel } from '../src/lib/historia';
describe('História e autorização da equipe',()=>{
 it('só publica marcos confirmados com fonte e mantém os três da home',()=>{expect(marcos.length).toBe(5);expect(marcos.every(m=>m.confirmado&&m.fonte)).toBe(true);expect(marcos.filter(m=>m.destaqueHome).length).toBe(3);});
 it('não transforma experiência em fundação nem divulgação em inauguração',()=>{expect(marcos.find(m=>m.id==='experiencia-assistencia')?.texto).toContain('não define a data de fundação');expect(marcos.find(m=>m.id==='turmas-centro-tecnico')?.texto).toContain('não uma data de inauguração');});
 it('rejeita mês inválido',()=>expect(marcoSchema.safeParse({...marcos[0],data:'2026-13'}).success).toBe(false));
 const pessoa={nome:'Pessoa de teste',funcao:'Função de teste',foto:'teste.jpg',autorizacaoEm:'2026-10-28',autorizado:true};
 it('exige autorização explícita, data válida, identificação e arquivo de foto',()=>{expect(equipePublicavel(pessoa,true)).toBe(true);expect(equipePublicavel({...pessoa,autorizado:false},true)).toBe(false);expect(equipePublicavel(pessoa,false)).toBe(false);expect(equipePublicavel({...pessoa,nome:''},true)).toBe(false);expect(equipePublicavel({...pessoa,autorizacaoEm:''},true)).toBe(false);expect(equipePublicavel({...pessoa,autorizacaoEm:'2026-02-30'},true)).toBe(false);});
});

````
