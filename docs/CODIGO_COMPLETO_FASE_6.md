# Código completo — Fase 6

## Arquivos criados ou alterados

```text
README.md
docs/PAGINAS.md
docs/PENDENCIAS.md
docs/QA_FASE_6.md
package.json
src/components/PendenciasDev.astro
src/components/Rodape.astro
src/components/home/AssistenciaHome.astro
src/components/home/CursoHome.astro
src/components/institucional/Orcamento.astro
src/config/loja.ts
src/config/servicos.ts
src/data/perguntas.ts
src/layouts/PaginaInstitucional.astro
src/lib/orcamento.ts
src/pages/assistencia-tecnica/[servico].astro
src/pages/assistencia-tecnica/index.astro
src/pages/como-chegar.astro
src/pages/curso-manutencao-celular.astro
src/pages/perguntas-frequentes.astro
src/pages/privacidade.astro
src/pages/sobre.astro
src/scripts/orcamento.ts
src/styles/institucional.css
tests/orcamento.test.ts
```

## README.md

````markdown
# Smart Lion — Fase 6

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

````

## docs/PAGINAS.md

````markdown
# Páginas — Fase 6

Foram adicionadas 12 rotas: assistência, seis serviços da §7, curso, sobre, como chegar, perguntas frequentes e privacidade. Todas têm um H1, parágrafo-resposta, metadados e acesso ao WhatsApp. O rodapé e os blocos de assistência/curso da home apontam às novas páginas.

## Conteúdo

Serviços em src/config/servicos.ts, com slugs definidos pela especificação. Não há diagnóstico remoto, preço, garantia ou prazo inventados. Os textos pedem avaliação e confirmação das condições. História baseada no texto recebido, sem data de fundação ou nomes de funcionários. Curso usa a foto real do laboratório e mantém informações comerciais sob consulta.

FAQ em src/data/perguntas.ts, pronta para reutilização na Fase 8. Os detalhes nativos funcionam sem JavaScript. Não presume venda de versão LL; orienta a confirmar identificação do modelo, homologação, chip/eSIM, itens e garantia.

## Orçamento

Orcamento.astro oferece modelo e problema opcionais. O formulário é revelado somente com JS; sem JS, permanece o link estático de assistência. Os campos não têm backend, fetch ou armazenamento. A ação abre o WhatsApp com a mensagem, sem enviar automaticamente.

mensagemOrcamento preserva a §10: se houver serviço e modelo, mas nenhum problema descrito, usa a mensagem de serviço; nos demais casos usa assistência, preservando o problema. Campos vazios permanecem literalmente vazios conforme decisão anterior, sem inventar valores. Todos os links passam por linkWhatsApp.

## Privacidade

A página descreve os recursos efetivamente implementados: links externos, campos locais, mapa por consentimento, ausência de analytics adicionados pela loja e acesso privado do provedor. Não afirma ausência absoluta de processamento de dados ou cookies da infraestrutura.

Os direitos são resumidos com link para a ANPD: https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares (consultado em 29/10/2026). Responsável, canal específico, retenção, operadores e bases legais do atendimento continuam vazios na configuração. Esses dados e a política final precisam ser completados antes do lançamento público; a página atual não substitui essa definição. Banner e integração geral de consentimento continuam na Fase 8.

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

## Atualização — Fase 6

- Páginas institucionais e seis serviços implementados; links adicionados ao rodapé.
- PENDENTE: responsável, canal específico, prazo de retenção, operadores e bases legais do atendimento. Campos vazios em loja.privacidade; aviso de desenvolvimento atualizado. Completar a política antes do lançamento público.
- Permanecem pendentes termos de garantia, confirmação documental IRP, dados da turma e CNPJ. Nenhum prazo, cobertura ou certificado foi inventado.
- Formulário preserva as mensagens exatas, inclusive rótulos vazios nos campos opcionais. Não há envio automático.
- Sem nova pergunta bloqueante para a Fase 7.

````

## docs/QA_FASE_6.md

````markdown
# QA — Fase 6

## Medições e verificações

- Astro check: 74 arquivos; zero erros, avisos ou hints.
- Vitest: 171 testes aprovados (12 novos para composição do orçamento e codificação).
- Build estático: 23 páginas HTML; cinco rascunhos excluídos.
- Verificações de catálogo, avaliações e home aprovadas: links internos, H1, destino WhatsApp, orçamento JS, textos literais, ausência de rascunhos e iframe inicial.

| Rotas | JS gzip por página |
|---|---:|
| Assistência e seis serviços | 1878 bytes |
| Como chegar | 417 bytes |
| Curso, Sobre, FAQ, Privacidade e 404 | 0 bytes |
| Home | 6790 bytes |
| Avaliações | 601 bytes |
| Catálogo e sete categorias | 3165 bytes |

## Navegador

Conferida navegação da assistência à página de troca de tela, nomes acessíveis dos campos, preenchimento de modelo/problema e Tab até o botão. Não foi enviada mensagem nem testada a navegação final ao aplicativo WhatsApp. Inspeção visual desktop; não certifica larguras exatas 390/1440.

Não foram medidos Lighthouse, axe, LCP, CLS ou INP nesta fase. O comportamento sem JS foi conferido no HTML, sem sessão dedicada com JavaScript desativado.

## Rodar e conferir

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

Em 390 e 1440 px: abrir as seis páginas de serviços a partir de /assistencia-tecnica; percorrer campos e ações com Tab; conferir texto da mensagem antes de enviar; abrir FAQ com Enter/Espaço; conferir rodapé, fotos, horário com almoço e mapa em /como-chegar. Sem JS, o link direto de assistência deve continuar disponível e FAQ deve abrir normalmente.

Para Lighthouse, com Chrome instalado, terminal 1:

```sh
pnpm build
pnpm preview --port 4321
```

Terminal 2:

```sh
mkdir -p reports
for rota in assistencia-tecnica assistencia-tecnica/troca-de-tela-iphone assistencia-tecnica/troca-de-bateria-iphone assistencia-tecnica/tampa-traseira assistencia-tecnica/placa assistencia-tecnica/apple-watch-airpods assistencia-tecnica/macbook-ipad curso-manutencao-celular sobre como-chegar perguntas-frequentes privacidade; do
  nome=$(printf '%s' "$rota" | tr '/' '_')
  pnpm dlx lighthouse "http://localhost:4321/$rota" --form-factor=mobile --throttling-method=simulate --only-categories=performance,accessibility,best-practices,seo --output=html --output=json --output-path="reports/$nome" --chrome-flags="--headless"
done
```

Preview noindex é intencional e pode afetar SEO. INP de campo exige interações reais; nenhuma pontuação de laboratório foi presumida.

````

## package.json

````json
{
  "name": "smartlion",
  "version": "0.6.0",
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

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 6</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
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
</div><nav class="container paginas" aria-label="Informações da loja"><a href="/assistencia-tecnica">Assistência técnica</a><a href="/curso-manutencao-celular">Curso de manutenção</a><a href="/sobre">Sobre a Smart Lion</a><a href="/como-chegar">Como chegar</a><a href="/perguntas-frequentes">Perguntas frequentes</a><a href="/privacidade">Privacidade</a></nav><div class="container footer-bottom"><span>{loja.nome} · {loja.endereco.cidade}/{loja.endereco.uf}</span><span>Desenvolvido por WAXLO</span></div></footer>
<style>.paginas{display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:30px;font-size:.8rem}.paginas a{min-height:44px;display:flex;align-items:center}footer{padding:64px 0 100px;border-top:1px solid var(--line)}.footer-grid{display:grid;grid-template-columns:1.1fr 1.2fr 1.25fr 1fr;gap:32px;font-size:.8rem;color:var(--muted)}h2{font:600 .85rem var(--font-heading);letter-spacing:0;color:white;margin-bottom:20px}.wordmark{font:600 1.35rem var(--font-heading);color:white;letter-spacing:.03em}p{margin:16px 0}address{font-style:normal;margin-bottom:16px}table{border-collapse:collapse;font-variant-numeric:tabular-nums}th{text-align:left;font-weight:400;padding:0 12px 8px 0;vertical-align:top}td{padding-bottom:8px}.small{font-size:.75rem}.number{font-size:1rem;color:white}.footer-bottom{display:flex;justify-content:space-between;border-top:1px solid var(--line);margin-top:48px;padding-top:24px;font-size:.7rem;color:var(--muted)}.sr-only{position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden}@media(max-width:1000px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:550px){.footer-grid{grid-template-columns:1fr;gap:28px}.footer-bottom{gap:20px;align-items:flex-start}.footer-bottom span:last-child{max-width:100px}}</style>

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
<section class="assistencia" id="assistencia" aria-labelledby="titulo-assistencia"><div class="container editorial"><Picture src={foto} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Bancada do Centro Técnico Smart Lion com microscópio e equipamentos de manutenção" loading="lazy"/><div class="texto"><p class="eyebrow">Assistência técnica em Lages</p><h2 id="titulo-assistencia">Seu celular precisa<br/>de cuidado.<br/>Você, de clareza.</h2><p>{loja.irpDescricao}.</p><p>Da avaliação ao orçamento, entenda o que precisa ser feito antes de decidir. Tela, bateria ou um problema mais complexo: conte o que aconteceu.</p><ul>{loja.servicos.map(s=><li>{s}</li>)}</ul><p class="prazo">Muitos consertos são realizados no mesmo dia. O prazo depende da avaliação e da disponibilidade das peças; confirme com a equipe.</p><BotaoWhatsApp texto={mensagensWhatsApp.assistencia()} rotulo="Pedir orçamento no WhatsApp"/><p><a href="/assistencia-tecnica">Conhecer os serviços ↗</a></p></div></div></section>
<style>.assistencia{padding:80px 0;background:#1c1d20}.editorial{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:64px}.editorial :global(img){width:100%;height:auto;max-height:780px;object-fit:cover}.eyebrow{color:#ff78bc;margin-bottom:18px}.texto>p:not(.eyebrow){margin:22px 0;color:#d2d3d5}ul{list-style:none;padding:0;display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:28px 0}li{border-bottom:1px solid #626367;padding-bottom:12px;font-size:.9rem}.prazo{font-size:.8rem}@media(max-width:800px){.editorial{grid-template-columns:1fr;gap:32px}.assistencia{padding:48px 0}.editorial :global(img){max-height:480px;object-position:center}}</style>

````

## src/components/home/CursoHome.astro

````astro
---
import { Picture } from 'astro:assets';
import laboratorio from '../../assets/home/laboratorio.jpg';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
import { mensagensWhatsApp } from '../../config/whatsapp';
---
<section class="curso" id="curso" aria-labelledby="titulo-curso"><div class="container"><div class="texto"><p class="eyebrow">Centro Técnico Smart Lion</p><h2 id="titulo-curso">Aprender fazendo.<br/>Bancada por bancada.</h2><p>Curso de manutenção de celulares em Lages, no laboratório anexo à loja.</p><p>Bancadas individuais e prática para quem quer começar ou aperfeiçoar seus conhecimentos.</p><p>Converse com a equipe sobre conteúdo, carga horária, datas e disponibilidade da próxima turma.</p><BotaoWhatsApp texto={mensagensWhatsApp.curso()} rotulo="Quero saber da próxima turma"/><p><a href="/curso-manutencao-celular">Conhecer o Centro Técnico ↗</a></p></div><Picture src={laboratorio} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Laboratório da Smart Lion com uma sequência de bancadas individuais e cadeiras" loading="lazy"/></div></section>
<style>.curso{padding:80px 0}.container{display:grid;grid-template-columns:1fr 1fr;align-items:center;gap:64px}.eyebrow{color:#ff78bc;margin-bottom:20px}.texto>p:not(.eyebrow){color:#d2d3d5;margin:22px 0;max-width:570px}.texto :global(.button){margin-top:10px}.container :global(img){width:100%;max-height:690px;object-fit:cover}@media(max-width:800px){.container{grid-template-columns:1fr;gap:36px}.curso{padding:48px 0}.container :global(img){max-height:500px}}</style>

````

## src/components/institucional/Orcamento.astro

````astro
---
import { mensagensWhatsApp } from '../../config/whatsapp';
import BotaoWhatsApp from '../BotaoWhatsApp.astro';
interface Props { servico?:string }
const {servico=''}=Astro.props;
---
<section class="orcamento light" id="orcamento" aria-labelledby="titulo-orcamento"><div class="container"><div><p class="eyebrow">Converse com quem vai cuidar do aparelho</p><h2 id="titulo-orcamento">Vamos entender o problema.</h2><p>Conte o modelo e o que aconteceu. A equipe conversa com você pelo WhatsApp sobre avaliação, prazo e orçamento.</p></div><div data-orcamento data-servico={servico}><form hidden><label for="modelo-orcamento">Modelo do aparelho <span>(opcional)</span></label><input id="modelo-orcamento" maxlength="100" autocomplete="off" placeholder="Digite o modelo do seu aparelho"/><label for="problema-orcamento">O que aconteceu? <span>(opcional)</span></label><textarea id="problema-orcamento" rows="3" maxlength="500" placeholder="Descreva o problema"></textarea><p class="aviso">Os campos apenas preparam uma mensagem no seu navegador. Revise no WhatsApp antes de enviar. Não informe senhas, documentos ou dados bancários.</p><button class="button button-wa" type="submit">Preparar conversa no WhatsApp ↗</button></form><div data-fallback><BotaoWhatsApp texto={mensagensWhatsApp.assistencia()} rotulo="Pedir orçamento no WhatsApp"/><p class="aviso">Informe o modelo e o problema na conversa.</p></div><p class="aviso"><a href="/privacidade">Como seus dados são tratados</a></p></div></div></section>
<script>import '../../scripts/orcamento';</script>
<style>.orcamento{padding:64px 0}.container{display:grid;grid-template-columns:1fr 1fr;gap:64px}.eyebrow{color:#8c0747;margin-bottom:18px}h2+p{margin-top:24px;max-width:530px}label{display:block;margin:0 0 8px;font-weight:600}label span{font-weight:400;font-size:.8rem}input,textarea{font:inherit;color:#111214;background:#fff;border:1px solid #747579;border-radius:var(--radius);padding:12px;width:100%;margin-bottom:20px}textarea{resize:vertical;min-height:100px}.aviso{font-size:.78rem;margin:12px 0;color:#414246}.aviso a{text-decoration:underline}.button{margin-top:12px}@media(max-width:800px){.container{grid-template-columns:1fr;gap:30px}.orcamento{padding:44px 0}}</style>

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

## src/config/servicos.ts

````typescript
/** Serviços documentados na §3.2; não representam diagnóstico ou disponibilidade de peças. */
export const servicos = [
 { slug:'troca-de-tela-iphone', titulo:'Troca de tela de iPhone', mensagem:'troca de tela', resumo:'A tela quebrou ou o toque começou a falhar? Conte o modelo e o que aconteceu para iniciar a avaliação.', perguntas:['Qual é o modelo do iPhone?','A imagem aparece normalmente?','O toque funciona em toda a tela?'] },
 { slug:'troca-de-bateria-iphone', titulo:'Troca de bateria de iPhone', mensagem:'troca de bateria', resumo:'Bateria durando pouco ou aparelho desligando? A avaliação ajuda a entender o problema antes de indicar o reparo.', perguntas:['Qual é o modelo do iPhone?','O que mudou na duração da carga?','O aparelho está desligando durante o uso?'] },
 { slug:'tampa-traseira', titulo:'Reparo de tampa traseira', mensagem:'reparo de tampa traseira', resumo:'A parte de trás do aparelho sofreu uma queda? Fale com a equipe para avaliar o dano e as opções de reparo.', perguntas:['Qual é o modelo do aparelho?','Como aconteceu o dano?','Outras funções também apresentaram problema?'] },
 { slug:'placa', titulo:'Reparo de placa de celular', mensagem:'reparo de placa', resumo:'O aparelho parou de ligar ou apresenta falhas? O diagnóstico técnico orienta o orçamento e a viabilidade do reparo.', perguntas:['Qual é o modelo do aparelho?','O aparelho liga ou apresenta algum sinal?','Quando a falha começou?'] },
 { slug:'apple-watch-airpods', titulo:'Assistência para Apple Watch e AirPods', mensagem:'assistência para Apple Watch ou AirPods', resumo:'Conte qual dispositivo precisa de avaliação e o que deixou de funcionar. A equipe orienta o próximo passo para o seu caso.', perguntas:['É um Apple Watch ou AirPods? Qual modelo?','Qual função apresenta problema?','Quando você percebeu a falha?'] },
 { slug:'macbook-ipad', titulo:'Assistência para MacBook e iPad', mensagem:'assistência para MacBook ou iPad', resumo:'Seu MacBook ou iPad precisa de atenção? Descreva a falha para conversar com a equipe sobre avaliação e orçamento.', perguntas:['É um MacBook ou iPad? Qual modelo?','Qual problema você percebeu?','O aparelho liga normalmente?'] },
] as const;

````

## src/data/perguntas.ts

````typescript
import { loja,enderecoCompleto } from '../config/loja';
import { formatarPeriodos } from '../lib/horario';
export const perguntas = [
 {pergunta:'Dá para comprar pelo site?',resposta:'O site é um catálogo sob consulta. Para saber disponibilidade, versões, cores, valor e condições, fale com a equipe pelo WhatsApp. Não há carrinho ou pagamento online.'},
 {pergunta:'Onde fica a loja?',resposta:`Na ${enderecoCompleto}. A página Como chegar reúne horários e links de rota.`},
 {pergunta:'Qual é o horário de atendimento?',resposta:loja.horario.semana.map(h=>`${h.rotulo}: ${formatarPeriodos(h.periodos)}`).join('. ')+'. Nos feriados, confirme o atendimento com a equipe.'},
 {pergunta:'Os iPhones seminovos têm garantia?',resposta:`Os iPhones seminovos contam com ${loja.garantiaSeminovosMeses} meses de garantia da loja e passam por avaliação técnica. Peça as condições de cobertura antes da compra.`},
 {pergunta:'Como funciona a assistência IRP?',resposta:`A Smart Lion é uma ${loja.irpDescricao.charAt(0).toLowerCase() + loja.irpDescricao.slice(1)}. Consulte as opções de peças e reparos elegíveis para o seu modelo. A garantia do serviço é da loja.`},
 {pergunta:'Meu aparelho fica pronto no mesmo dia?',resposta:'Muitos consertos são realizados no mesmo dia, mas isso depende do diagnóstico, do serviço e da disponibilidade de peças. Confirme o prazo com a equipe antes de aprovar o orçamento.'},
 {pergunta:'Quanto custa o reparo?',resposta:'O valor depende do aparelho e da avaliação do problema. Conte o modelo e o que aconteceu pelo WhatsApp para iniciar a conversa sobre o orçamento.'},
 {pergunta:'Como posso parcelar?',resposta:`Consulte parcelamento em até ${loja.parcelamento.cartaoAte}x no cartão ou até ${loja.parcelamento.boletoAte}x no boleto, sujeito a análise de crédito. Entrada, taxas e condições vigentes são confirmadas com a equipe.`},
 {pergunta:'Posso dar meu usado como parte do pagamento?',resposta:'Essa possibilidade precisa ser consultada diretamente com a equipe. Não há uma política de recebimento de usados confirmada neste catálogo.'},
 {pergunta:'O que preciso confirmar sobre a versão do aparelho?',resposta:'Antes de escolher, peça a identificação exata do modelo, país de origem, situação da homologação Anatel, compatibilidade com chip físico ou eSIM, itens da caixa e condições da garantia da loja. Não presuma que toda versão acompanha carregador ou tem as mesmas características.'},
 {pergunta:'Quando será a próxima turma do curso?',resposta:'Consulte a equipe sobre datas, carga horária, conteúdo, pré-requisitos, materiais, certificado e investimento da próxima turma. Essas informações variam conforme a turma e ainda não estão publicadas no site.'},
 {pergunta:'Como deixo uma avaliação?',resposta:'Acesse a página Avaliações e escolha Confirmar minha nota no Google. Todas as notas levam ao mesmo destino. A escolha no site não publica nem envia uma avaliação.'},
] as const;

````

## src/layouts/PaginaInstitucional.astro

````astro
---
import Layout from './LayoutBase.astro';
import '../styles/institucional.css';
interface Props { titulo:string; descricao:string; resposta:string; rotulo?:string }
const { titulo,descricao,resposta,rotulo='Smart Lion · Lages' }=Astro.props;
---
<Layout title={`${titulo} | Smart Lion`} description={descricao}><header class="pagina-abertura container"><nav aria-label="Caminho da página"><a href="/">Início</a><span aria-hidden="true"> / </span><span aria-current="page">{titulo}</span></nav><p class="eyebrow">{rotulo}</p><h1>{titulo}</h1><p class="resposta">{resposta}</p><slot name="acao"/></header><slot/></Layout>

````

## src/lib/orcamento.ts

````typescript
import { mensagensWhatsApp } from '../config/whatsapp';
/** Preserva o texto literal da §10 e só usa dados digitados pelo visitante. */
export function mensagemOrcamento(modelo:string,problema:string,servico=''):string {
 if(servico && modelo.trim() && !problema.trim()) return mensagensWhatsApp.servico(servico,modelo);
 return mensagensWhatsApp.assistencia(modelo,problema);
}

````

## src/pages/assistencia-tecnica/[servico].astro

````astro
---
import Pagina from '../../layouts/PaginaInstitucional.astro';
import { servicos } from '../../config/servicos';
import { loja,enderecoCompleto } from '../../config/loja';
import Orcamento from '../../components/institucional/Orcamento.astro';
export function getStaticPaths(){return servicos.map(servico=>({params:{servico:servico.slug},props:{servico}}));}
const {servico}=Astro.props;
---
<Pagina titulo={`${servico.titulo} em Lages`} descricao={`${servico.titulo} na Smart Lion em Lages. Fale pelo WhatsApp para consultar avaliação, peças, prazo e orçamento.`} resposta={`${servico.titulo} na ${loja.nome}, na ${enderecoCompleto}. Fale com a equipe pelo WhatsApp para avaliar o seu aparelho e consultar as condições do serviço.`}>
<a slot="acao" class="button button-light" href="#orcamento">Conversar sobre este serviço ↗</a>
<section class="pagina-bloco light"><div class="container duas-colunas"><div><h2>Conte o que aconteceu.</h2><p>{servico.resumo}</p><h3>O que ajuda no primeiro contato</h3><ul>{servico.perguntas.map(p=><li>{p}</li>)}</ul></div><div><h2>Orçamento para o seu caso.</h2><p>Valor, peças necessárias e prazo dependem da avaliação do aparelho. Não é possível confirmar o reparo apenas pela descrição do problema.</p><h3>Peças e garantia</h3><p>Confirme as opções de peças e as condições da garantia da loja antes de aprovar o serviço.</p><nav class="navegacao-paginas" aria-label="Mais informações"><a href="/assistencia-tecnica">Todos os serviços ↗</a><a href="/como-chegar">Como chegar ↗</a></nav></div></div></section><Orcamento servico={servico.mensagem}/>
</Pagina>

````

## src/pages/assistencia-tecnica/index.astro

````astro
---
import Pagina from '../../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../../config/loja';
import { servicos } from '../../config/servicos';
import { Picture } from 'astro:assets';
import bancada from '../../assets/home/bancada.jpg';
import Orcamento from '../../components/institucional/Orcamento.astro';
---
<Pagina titulo="Assistência técnica em Lages" descricao="Assistência de iPhone e celulares na Smart Lion em Lages. Avaliação, orçamento e atendimento pelo WhatsApp." resposta={`A ${loja.nome} oferece assistência técnica de celulares na ${enderecoCompleto}. Conte o modelo e o problema pelo WhatsApp para conversar sobre avaliação e orçamento.`}>
<a slot="acao" class="button button-light" href="#orcamento">Pedir orçamento ↗</a>
<section class="pagina-bloco light"><div class="container duas-colunas"><div><h2>Entenda o reparo antes de decidir.</h2><p>{loja.irpDescricao}.</p><p>O programa dá acesso a treinamentos, ferramentas e peças originais para reparos elegíveis. Consulte a equipe sobre as peças e opções para o seu modelo.</p><ul class="lista-servicos">{servicos.map(s=><li><a href={`/assistencia-tecnica/${s.slug}`}>{s.titulo}<span aria-hidden="true">↗</span></a></li>)}</ul></div><Picture src={bancada} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Bancada técnica da Smart Lion com microscópio e equipamentos" loading="lazy" class="foto-editorial"/></div></section>
<section class="pagina-bloco"><div class="container duas-colunas"><div><h2>Do primeiro contato ao orçamento.</h2><ol><li>Informe o aparelho e descreva a falha.</li><li>Converse com a equipe sobre a avaliação técnica.</li><li>Confirme o serviço, as condições e o prazo antes de decidir.</li></ol></div><div><h3>Prazo conforme o diagnóstico</h3><p>Muitos consertos são realizados no mesmo dia. Isso depende da avaliação, do serviço e da disponibilidade de peças.</p><h3>Garantia do serviço</h3><p>A garantia do reparo é oferecida pela loja. Peça as condições, a cobertura e o prazo aplicáveis ao seu orçamento.</p><a class="button button-light" href="/perguntas-frequentes">Tirar outras dúvidas ↗</a></div></div></section><Orcamento/>
</Pagina>

````

## src/pages/como-chegar.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../config/loja';
import LojaHome from '../components/home/LojaHome.astro';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
---
<Pagina titulo="Como chegar à Smart Lion em Lages" descricao="Endereço, horários e rotas para a Smart Lion na Rua Hercílio Luz, 364, Centro de Lages." resposta={`A ${loja.nome} fica na ${enderecoCompleto}. Confira os horários e abra a rota abaixo; se precisar de orientação, fale com a equipe pelo WhatsApp.`}><BotaoWhatsApp slot="acao" rotulo="Falar com a loja"/><LojaHome/></Pagina>

````

## src/pages/curso-manutencao-celular.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../config/loja';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import { mensagensWhatsApp } from '../config/whatsapp';
import { Picture } from 'astro:assets';
import foto from '../assets/home/laboratorio.jpg';
---
<Pagina titulo="Curso de manutenção de celulares em Lages" descricao="Conheça o Centro Técnico Smart Lion em Lages. Laboratório com bancadas individuais e informações sobre as próximas turmas pelo WhatsApp." resposta={`O Centro Técnico da ${loja.nome} oferece treinamento em manutenção de celulares no laboratório anexo à loja, na ${enderecoCompleto}. Consulte a próxima turma e as condições pelo WhatsApp.`}>
<BotaoWhatsApp slot="acao" texto={mensagensWhatsApp.curso()} rotulo="Quero saber da próxima turma"/>
<section class="pagina-bloco light"><div class="container duas-colunas"><Picture src={foto} formats={['avif','webp']} widths={[420,640,900]} sizes="(max-width:800px) 100vw, 45vw" alt="Laboratório de treinamento Smart Lion com bancadas individuais" loading="lazy" class="foto-editorial"/><div><h2>Teoria e prática na bancada.</h2><p>Um espaço para quem deseja começar na manutenção de celulares ou aperfeiçoar seus conhecimentos.</p><p>O laboratório conta com bancadas individuais e estrutura voltada ao aprendizado prático.</p><h3>Antes de se inscrever</h3><ul><li>Consulte conteúdo e pré-requisitos.</li><li>Confirme datas, horários e carga horária.</li><li>Pergunte sobre materiais, certificado e investimento.</li></ul><p>Essas informações são confirmadas diretamente com a equipe para cada turma.</p><BotaoWhatsApp texto={mensagensWhatsApp.curso()} rotulo="Conversar sobre o curso"/><nav class="navegacao-paginas" aria-label="Visite o Centro Técnico"><a href="/como-chegar">Como chegar ↗</a></nav></div></div></section>
</Pagina>

````

## src/pages/perguntas-frequentes.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { perguntas } from '../data/perguntas';
import { loja } from '../config/loja';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
---
<Pagina titulo="Perguntas frequentes" descricao="Tire dúvidas sobre catálogo, seminovos, assistência, parcelamento e curso da Smart Lion em Lages." resposta={`Encontre respostas sobre compras, assistência e treinamento na ${loja.nome}, no Centro de ${loja.endereco.cidade}. Para confirmar as condições do seu produto ou serviço, converse com a equipe pelo WhatsApp.`}><BotaoWhatsApp slot="acao" rotulo="Tirar uma dúvida no WhatsApp"/><section class="pagina-bloco light"><div class="container faq-lista">{perguntas.map(p=><details><summary>{p.pergunta}</summary><p>{p.resposta}</p></details>)}</div></section></Pagina>

````

## src/pages/privacidade.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../config/loja';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
---
<Pagina titulo="Privacidade" descricao="Entenda o funcionamento do catálogo, dos campos de orçamento, dos links externos e do mapa da Smart Lion." resposta={`Esta página explica como funcionam os recursos de contato e navegação do site da ${loja.nome}, em ${loja.endereco.cidade}. Para dúvidas sobre seus dados, procure a loja pelo canal de atendimento abaixo.`}>
<section class="pagina-bloco light"><div class="container texto-longo"><h2>Catálogo e navegação</h2><p>Este site não tem cadastro, conta de cliente, carrinho ou checkout. A versão atual não contém scripts de publicidade ou análise de audiência adicionados pela loja.</p><p>A infraestrutura de hospedagem pode processar dados técnicos da conexão para entregar e proteger as páginas. Na versão privada de revisão, o provedor também exige autenticação para acesso.</p><h2>Campos de orçamento e WhatsApp</h2><p>Os campos de modelo e problema preparam uma mensagem no seu navegador. Eles não são enviados a um formulário da loja nem gravados pelo código do site. Ao escolher abrir a conversa, o texto é incluído no link encaminhado ao WhatsApp. Revise a mensagem antes de enviá-la.</p><p>Depois que você envia uma mensagem, o atendimento acontece pelo WhatsApp. Evite informar senhas, documentos ou dados bancários no campo de descrição do problema.</p><h2>Mapa, redes sociais e avaliações</h2><p>O mapa do Google só é solicitado após você escolher Carregar mapa do Google. A conexão permite que o Google processe dados da visita e possa usar cookies. Continuar sem mapa mantém endereço e links de rota disponíveis. Se já carregou o mapa, essa opção remove o quadro da página; ela não apaga cookies que o provedor já tenha criado.</p><p>Links de WhatsApp, Instagram, Google e Waze abrem serviços externos, com suas próprias práticas de privacidade. As fotos do Instagram exibidas aqui são arquivos estáticos; não há widget da rede social. A seleção de estrelas não é armazenada nem enviada pelo site.</p><h2>Solicitações sobre seus dados</h2><p>Você pode solicitar informações sobre o uso de seus dados e exercer direitos como acesso, correção e eliminação, conforme as condições legais aplicáveis. A ANPD explica esses direitos em sua <a href="https://www.gov.br/anpd/pt-br/assuntos/titular-de-dados/direito-dos-titulares">página para titulares de dados ↗</a>.</p><p>Para encaminhar uma solicitação à loja, use o atendimento da {loja.nome} e informe que o assunto é privacidade. O canal específico será publicado quando confirmado.</p><BotaoWhatsApp rotulo="Entrar em contato com a loja"/><p>{enderecoCompleto}. Telefone: <a href={`tel:${loja.telefone.numero}`}>{loja.telefone.exibicao}</a>.</p></div></section>
</Pagina>

````

## src/pages/sobre.astro

````astro
---
import Pagina from '../layouts/PaginaInstitucional.astro';
import { loja,enderecoCompleto } from '../config/loja';
import BotaoWhatsApp from '../components/BotaoWhatsApp.astro';
import { Picture } from 'astro:assets';
import foto from '../assets/loja.jpg';
---
<Pagina titulo="Tecnologia com atendimento de perto" descricao="Conheça a Smart Lion, loja de tecnologia, assistência e treinamento no Centro de Lages." resposta={`A ${loja.nome} reúne venda de tecnologia, assistência técnica e treinamento na ${enderecoCompleto}. Fale com a equipe pelo WhatsApp ou visite a loja para conhecer as opções.`}>
<BotaoWhatsApp slot="acao"/>
<section class="pagina-bloco light"><div class="container duas-colunas"><div><h2>A compra é só o começo.</h2><p>A Smart Lion nasceu com a proposta de tornar a experiência com tecnologia segura e confiável. A loja trabalha com produtos novos e seminovos com nota fiscal e atendimento para orientar a escolha.</p><p>Essa atuação se ampliou para a manutenção de celulares e o treinamento técnico, reunindo venda, suporte e aprendizado no mesmo endereço.</p><h3>Procedência e acompanhamento</h3><p>Os iPhones seminovos passam por avaliação da equipe técnica e contam com {loja.garantiaSeminovosMeses} meses de garantia da loja. Consulte as condições de cobertura antes da compra.</p><nav class="navegacao-paginas" aria-label="Conheça a Smart Lion"><a href="/catalogo">Catálogo ↗</a><a href="/assistencia-tecnica">Assistência ↗</a><a href="/curso-manutencao-celular">Centro Técnico ↗</a><a href="/avaliacoes">Avaliações ↗</a></nav></div><Picture src={foto} formats={['avif','webp']} widths={[480,800,1280]} sizes="(max-width:800px) 100vw, 45vw" alt="Ambiente interno da loja Smart Lion com balcão e prateleiras" loading="lazy" class="foto-editorial"/></div></section>
</Pagina>

````

## src/scripts/orcamento.ts

````typescript
import { linkWhatsApp } from '../config/whatsapp';
import { mensagemOrcamento } from '../lib/orcamento';
for(const root of document.querySelectorAll<HTMLElement>('[data-orcamento]')){
 const form=root.querySelector<HTMLFormElement>('form')!;
 const modelo=root.querySelector<HTMLInputElement>('input')!;
 const problema=root.querySelector<HTMLTextAreaElement>('textarea')!;
 form.hidden=false;root.querySelector<HTMLElement>('[data-fallback]')!.hidden=true;
 form.addEventListener('submit',event=>{
  event.preventDefault();
  // Não há fetch, armazenamento ou envio automático: apenas navegação iniciada pelo usuário.
  location.assign(linkWhatsApp(mensagemOrcamento(modelo.value,problema.value,root.dataset.servico)));
 });
}

````

## src/styles/institucional.css

````css
.pagina-abertura{padding-block:46px 60px}.pagina-abertura nav{font-size:.8rem;color:#c8c9cb;margin-bottom:32px}.pagina-abertura .eyebrow{color:#ff78bc;margin-bottom:20px}.pagina-abertura h1{max-width:1050px}.pagina-abertura .resposta{max-width:800px;color:#d2d3d5;font-size:1.05rem;margin:26px 0}.pagina-bloco{padding:64px 0}.pagina-bloco .duas-colunas{display:grid;grid-template-columns:1fr 1fr;gap:64px;align-items:start}.pagina-bloco h2{margin-bottom:24px}.pagina-bloco h3{font-size:1.5rem;margin:26px 0 14px}.pagina-bloco p+p{margin-top:18px}.pagina-bloco ul,.pagina-bloco ol{padding-left:24px;line-height:1.9}.pagina-bloco .foto-editorial{display:block;width:100%;height:auto;max-height:680px;object-fit:cover}.pagina-bloco .button{margin-top:24px}.lista-servicos{list-style:none;padding:0!important;margin:26px 0}.lista-servicos li{border-top:1px solid #949598}.lista-servicos a{display:flex;justify-content:space-between;align-items:center;gap:24px;min-height:70px;padding:20px 0;font-family:var(--font-heading);font-size:1.2rem}.faq-lista{max-width:920px}.faq-lista details{border-top:1px solid #8b8c8e;padding:18px 0}.faq-lista summary{font:600 clamp(1.1rem,2vw,1.4rem) var(--font-heading);cursor:pointer;min-height:44px;padding:10px 28px 10px 0}.faq-lista details p{line-height:1.8;padding:14px 0;max-width:850px}.texto-longo{max-width:850px}.texto-longo h2{font-size:clamp(1.6rem,3vw,2.4rem);margin-top:40px}.texto-longo a:not(.button){text-decoration:underline;text-underline-offset:4px}.nota-consulta{font-size:.85rem;color:#414246;margin-top:20px}.navegacao-paginas{display:flex;flex-wrap:wrap;gap:12px 28px;margin-top:28px}.navegacao-paginas a{display:flex;align-items:center;min-height:44px;text-decoration:underline}@media(max-width:800px){.pagina-abertura{padding-block:32px 42px}.pagina-bloco{padding:44px 0}.pagina-bloco .duas-colunas{grid-template-columns:1fr;gap:32px}.pagina-abertura h1{overflow-wrap:anywhere}.pagina-bloco .foto-editorial{max-height:480px}}

````

## tests/orcamento.test.ts

````typescript
import { describe,it,expect } from 'vitest';
import { mensagemOrcamento } from '../src/lib/orcamento';
import { mensagensWhatsApp,linkWhatsApp } from '../src/config/whatsapp';
import { servicos } from '../src/config/servicos';
describe('orçamento contextual sem alterar a §10',()=>{
 it('preserva campos opcionais vazios',()=>expect(mensagemOrcamento('','')).toBe(mensagensWhatsApp.assistencia()));
 it('preserva o problema digitado, mesmo em página de serviço',()=>expect(mensagemOrcamento('iPhone 13','toque falhando','troca de tela')).toBe(mensagensWhatsApp.assistencia('iPhone 13','toque falhando')));
 it('não inventa modelo quando apenas o problema foi informado',()=>expect(mensagemOrcamento('','não liga','reparo de placa')).toBe(mensagensWhatsApp.assistencia('','não liga')));
 for(const s of servicos)it(`usa mensagem de serviço para ${s.slug} com modelo informado`,()=>expect(mensagemOrcamento(' Meu modelo ','',s.mensagem)).toBe(mensagensWhatsApp.servico(s.mensagem,'Meu modelo')));
 it('considera espaços como campos vazios',()=>expect(mensagemOrcamento('  ','  ','reparo')).toBe(mensagensWhatsApp.assistencia()));
 it('codifica caracteres especiais sem criar parâmetros adicionais',()=>{const texto=mensagemOrcamento('A&B','tela #1? não liga');const url=new URL(linkWhatsApp(texto));expect(url.searchParams.get('text')).toBe(texto);expect([...url.searchParams.keys()]).toEqual(['text']);});
 it('tem seis slugs exclusivos',()=>expect(new Set(servicos.map(s=>s.slug)).size).toBe(6));
});

````