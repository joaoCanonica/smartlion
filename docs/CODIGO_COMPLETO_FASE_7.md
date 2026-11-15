# Código completo — Fase 7

Cada arquivo novo ou alterado está reproduzido integralmente abaixo. Este documento não inclui a si próprio.

## Árvore de arquivos

```text
README.md
docs/DICAS.md
docs/PENDENCIAS.md
docs/QA_FASE_7.md
package.json
scripts/verificar-dicas.mjs
src/components/PendenciasDev.astro
src/components/Rodape.astro
src/content.config.ts
src/content/dicas/armazenamento-cheio-iphone.md
src/content/dicas/atalhos-do-mac.md
src/content/dicas/modo-pouca-energia-iphone.md
src/lib/dicas.ts
src/pages/dicas/[slug].astro
src/pages/dicas/index.astro
src/schemas/dica.ts
tests/dicas.test.ts
```

## README.md

````md
# Smart Lion — Fase 7

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

````

## docs/DICAS.md

````md
# Dicas — Fase 7

A coleção `src/content/dicas/*.md` usa o schema `src/schemas/dica.ts`. Os três modelos abordam Modo Pouca Energia, armazenamento do iPhone e atalhos do Mac, temas previstos na §13. Foram escritos a partir de documentação oficial da Apple, com fontes no próprio artigo; não representam transcrições de posts da loja.

Todos têm `rascunho: true`, `confirmado: false`, datas de publicação/revisão, revisor e postOrigem vazios. Nenhum aparece no build de produção. A listagem pública oferece atendimento e Instagram enquanto não houver texto aprovado.

Para publicar: revisar conteúdo técnico e editorial; preencher revisor real, publicadoEm e revisadoEm em YYYY-MM-DD; confirmar a origem do post quando aplicável; marcar confirmado como true e rascunho como false. O schema exige datas e revisor para publicação. Não inventar autoria ou datas. As fontes têm URL HTTPS e data de consulta.

Use apenas H2 ou níveis inferiores no corpo Markdown: o layout fornece o único H1. Slugs duplicados e H1 no corpo interrompem a leitura da coleção. A publicação é estática, sem JavaScript novo. O CTA reutiliza as mensagens existentes da §10, pela função central de WhatsApp. Não há sincronização automática com Instagram.

## Arquivos da implementação

- src/schemas/dica.ts
- src/content.config.ts
- src/lib/dicas.ts
- src/content/dicas/modo-pouca-energia-iphone.md
- src/content/dicas/armazenamento-cheio-iphone.md
- src/content/dicas/atalhos-do-mac.md
- src/pages/dicas/index.astro
- src/pages/dicas/[slug].astro
- src/components/Rodape.astro
- src/components/PendenciasDev.astro
- tests/dicas.test.ts
- scripts/verificar-dicas.mjs
- package.json
- README.md
- docs/DICAS.md
- docs/PENDENCIAS.md
- docs/QA_FASE_7.md
- docs/CODIGO_COMPLETO_FASE_7.md

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

````

## docs/QA_FASE_7.md

````md
# QA — Fase 7

## Resultados medidos

- Astro check: 79 arquivos, zero erros, avisos e hints.
- Vitest: 179 testes passando em seis arquivos; oito novos testes do schema e publicação das dicas.
- Build estático: 24 páginas HTML.
- Verificação do catálogo: links internos, H1, WhatsApp, termos proibidos e exclusão de produtos rascunho aprovados.
- Verificação das dicas: listagem presente; três artigos rascunho ausentes dos arquivos HTML/JS/JSON/XML/TXT do build.

| Página | JavaScript gzip | HTML sem compressão |
| --- | ---: | ---: |
| /dicas | 0 bytes | 11.596 bytes |
| Home (maior JS do site) | 6.790 bytes | 78.105 bytes |

Artigos não têm orçamento de produção medido, pois são excluídos do build. Lighthouse, LCP, CLS e INP não foram medidos nesta fase; não há alegação de aprovação dessas metas.

## Navegador

Verificada a lista de três rascunhos em desenvolvimento e a abertura do artigo Modo Pouca Energia. Conteúdo Markdown, H1/H2, fontes e CTA renderizados. A largura do navegador desta sessão não foi fixada em 390/1440px; a validação dessas duas larguras permanece manual.

## Reproduzir

```sh
pnpm install --frozen-lockfile
pnpm check
pnpm test
pnpm build
node scripts/verificar-catalogo.mjs
node scripts/verificar-dicas.mjs
pnpm dev
```

Em desenvolvimento, abrir /dicas e os três artigos. Em 390px e 1440px: conferir quebra dos títulos, ausência de rolagem horizontal, leitura das fontes, foco visível com Tab, retorno à listagem e acesso ao WhatsApp. Desativar JavaScript e repetir a navegação; conteúdo e links são HTML estático. Na produção, conferir que /dicas mostra o estado sem artigos e URLs dos rascunhos não existem.

Para medir Lighthouse, em um terminal:

```sh
pnpm preview --port 4321
```

Em outro:

```sh
pnpm dlx lighthouse http://localhost:4321/dicas --only-categories=performance,accessibility,best-practices,seo --output=html --output-path=./lighthouse-dicas.html --chrome-flags="--headless"
```

Requer Chrome instalado. O preview permanece noindex; isso pode reduzir SEO no relatório, intencionalmente. Lighthouse não comprova INP de usuários reais; medir em campo após lançamento.

````

## package.json

````json
{
  "name": "smartlion",
  "version": "0.7.0",
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

## scripts/verificar-dicas.mjs

````mjs
import { readFileSync,readdirSync,existsSync } from 'node:fs';
import assert from 'node:assert/strict';
const exemplos=readdirSync('src/content/dicas').map(n=>JSON.parse(readFileSync(`src/content/dicas/${n}`,'utf8').split('---')[1]));
function arquivos(p){return readdirSync(p,{withFileTypes:true}).flatMap(e=>e.isDirectory()?arquivos(`${p}/${e.name}`):[`${p}/${e.name}`]);}
const saida=arquivos('dist').filter(f=>/\.(html|js|json|xml|txt)$/.test(f));
for(const d of exemplos){
 const publico=!d.rascunho&&d.confirmado&&Boolean(d.publicadoEm&&d.revisadoEm&&d.revisor.trim());
 assert.equal(existsSync(`dist/dicas/${d.slug}/index.html`),publico);
 if(!publico)for(const f of saida)assert(!readFileSync(f,'utf8').includes(d.slug),`Rascunho vazou: ${f}`);
}
assert(existsSync('dist/dicas/index.html'));
console.log('Dicas: listagem disponível; três rascunhos ausentes de rotas, HTML e assets de produção.');

````

## src/components/PendenciasDev.astro

````astro
---
import { loja } from '../config/loja';
const pendencias = [...Object.entries(loja).filter(([,v])=>v === '' || v === null).map(([k])=>k), ...Object.entries(loja.curso).filter(([,v])=>v === '').map(([k])=>`curso.${k}`), ...(loja.horario.excecoes.length ? [] : ['exceções de feriados'])];
---
{import.meta.env.DEV && <aside aria-label="Pendências de desenvolvimento"><strong>Desenvolvimento · Fase 7</strong><p>PENDENTE: {pendencias.join(', ')}. Os cinco produtos são rascunhos de desenvolvimento: confirmar modelos, versões, cores e fotos. PENDENTE: fachada, links de posts, sexta foto do Instagram e confirmação das condições vigentes de parcelamento. PENDENTE: revisão dos três artigos, autoria aprovada e links dos posts de origem. PENDENTE: responsável de privacidade, retenção, operadores e bases legais do atendimento.</p></aside>}
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
</div><nav class="container paginas" aria-label="Informações da loja"><a href="/assistencia-tecnica">Assistência técnica</a><a href="/curso-manutencao-celular">Curso de manutenção</a><a href="/sobre">Sobre a Smart Lion</a><a href="/como-chegar">Como chegar</a><a href="/perguntas-frequentes">Perguntas frequentes</a><a href="/dicas">Dicas</a><a href="/privacidade">Privacidade</a></nav><div class="container footer-bottom"><span>{loja.nome} · {loja.endereco.cidade}/{loja.endereco.uf}</span><span>Desenvolvido por WAXLO</span></div></footer>
<style>.paginas{display:flex;flex-wrap:wrap;gap:10px 28px;margin-top:30px;font-size:.8rem}.paginas a{min-height:44px;display:flex;align-items:center}footer{padding:64px 0 100px;border-top:1px solid var(--line)}.footer-grid{display:grid;grid-template-columns:1.1fr 1.2fr 1.25fr 1fr;gap:32px;font-size:.8rem;color:var(--muted)}h2{font:600 .85rem var(--font-heading);letter-spacing:0;color:white;margin-bottom:20px}.wordmark{font:600 1.35rem var(--font-heading);color:white;letter-spacing:.03em}p{margin:16px 0}address{font-style:normal;margin-bottom:16px}table{border-collapse:collapse;font-variant-numeric:tabular-nums}th{text-align:left;font-weight:400;padding:0 12px 8px 0;vertical-align:top}td{padding-bottom:8px}.small{font-size:.75rem}.number{font-size:1rem;color:white}.footer-bottom{display:flex;justify-content:space-between;border-top:1px solid var(--line);margin-top:48px;padding-top:24px;font-size:.7rem;color:var(--muted)}.sr-only{position:absolute;clip-path:inset(50%);width:1px;height:1px;overflow:hidden}@media(max-width:1000px){.footer-grid{grid-template-columns:1fr 1fr}}@media(max-width:550px){.footer-grid{grid-template-columns:1fr;gap:28px}.footer-bottom{gap:20px;align-items:flex-start}.footer-bottom span:last-child{max-width:100px}}</style>

````

## src/content.config.ts

````ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { criarSchemaProduto } from './schemas/produto';
import { dicaSchema } from './schemas/dica';
export const collections = {
 dicas: defineCollection({ loader: glob({ pattern: '*.md', base: './src/content/dicas' }), schema: dicaSchema }),
 produtos: defineCollection({
  loader: glob({ pattern: '*.json', base: './src/content/produtos' }),
  schema: ({ image }) => criarSchemaProduto(image()),
 }),
};

````

## src/content/dicas/armazenamento-cheio-iphone.md

````md
---
{
  "slug": "armazenamento-cheio-iphone",
  "titulo": "Armazenamento cheio no iPhone: por onde começar",
  "descricao": "Veja como identificar o que ocupa espaço antes de remover arquivos.",
  "resposta": "Antes de apagar arquivos, confira o que está ocupando espaço no armazenamento do iPhone.",
  "tema": "iPhone",
  "rascunho": true,
  "confirmado": false,
  "publicadoEm": "",
  "revisadoEm": "",
  "revisor": "",
  "postOrigem": "",
  "fontes": [
    {
      "titulo": "Armazenamento no iPhone e iPad",
      "url": "https://support.apple.com/pt-br/108429",
      "consultadoEm": "2026-10-29"
    }
  ],
  "cta": "assistencia",
  "ordem": 1
}
---

## Veja o uso do espaço

Abra Ajustes, entre em Geral e depois em Armazenamento do iPhone. A tela mostra os aplicativos e o espaço utilizado, além de recomendações do sistema.

## Leia antes de confirmar

Ao abrir um aplicativo nessa lista, confira as opções disponíveis. Desinstalar App mantém seus documentos e dados; Apagar App também remove os dados relacionados. As duas ações não são equivalentes.

Revise o que você quer manter e confirme que tem cópias dos arquivos importantes antes de remover conteúdo. Não apague itens que você não reconhece apenas para liberar espaço rapidamente.

## Escolha com calma

Comece identificando os maiores usos e leia as recomendações do sistema. Se tiver dúvida sobre o que pode remover, peça orientação antes de confirmar a exclusão.

````

## src/content/dicas/atalhos-do-mac.md

````md
---
{
  "slug": "atalhos-do-mac",
  "titulo": "Atalhos do Mac para começar a usar hoje",
  "descricao": "Quatro combinações de teclado para tarefas comuns no Mac.",
  "resposta": "Atalhos de teclado ajudam a executar tarefas comuns no Mac sem procurar cada comando nos menus.",
  "tema": "Mac",
  "rascunho": true,
  "confirmado": false,
  "publicadoEm": "",
  "revisadoEm": "",
  "revisor": "",
  "postOrigem": "",
  "fontes": [
    {
      "titulo": "Atalhos de teclado do Mac",
      "url": "https://support.apple.com/pt-br/102650",
      "consultadoEm": "2026-10-29"
    }
  ],
  "cta": "assistencia",
  "ordem": 2
}
---

## Comece por quatro combinações

- **Command + C:** copiar o item selecionado.
- **Command + V:** colar o conteúdo copiado.
- **Command + Z:** desfazer uma ação, quando o aplicativo permite.
- **Command + F:** procurar conteúdo no aplicativo ou documento.

Mantenha Command pressionada, toque na outra tecla e solte as duas. Experimente primeiro em um documento de teste.

## Confira o aplicativo

Atalhos podem variar entre aplicativos. Os menus ajudam a descobrir quais combinações estão disponíveis para a ação que você quer realizar.

## Um hábito de cada vez

Escolha uma combinação e use durante as tarefas do dia. Depois, acrescente outra. Não é preciso decorar uma lista inteira para tornar o uso do computador mais prático.

````

## src/content/dicas/modo-pouca-energia-iphone.md

````md
---
{
  "slug": "modo-pouca-energia-iphone",
  "titulo": "Modo Pouca Energia: quando usar",
  "descricao": "Entenda o que muda ao ativar o Modo Pouca Energia no iPhone.",
  "resposta": "O Modo Pouca Energia reduz atividades em segundo plano para ajudar a bateria a durar mais.",
  "tema": "iPhone",
  "rascunho": true,
  "confirmado": false,
  "publicadoEm": "",
  "revisadoEm": "",
  "revisor": "",
  "postOrigem": "",
  "fontes": [
    {
      "titulo": "Modo Pouca Energia no iPhone",
      "url": "https://support.apple.com/pt-br/101604",
      "consultadoEm": "2026-10-29"
    }
  ],
  "cta": "assistencia",
  "ordem": 0
}
---

## Para os momentos longe da tomada

O recurso pode ajudar quando a carga está baixa e você precisa continuar usando o aparelho. Algumas atividades ficam limitadas, como atualização de aplicativos em segundo plano e downloads automáticos.

## Onde encontrar

Abra Ajustes e procure a área Bateria. A organização das opções pode variar conforme o modelo e a versão do sistema; consulte o passo a passo da Apple na fonte abaixo.

Com o modo ativo, o indicador da bateria fica amarelo. Isso sinaliza uma configuração de economia, não um diagnóstico sobre o estado da bateria.

## Se a duração continua preocupando

Anote quando a carga cai mais rápido e em quais situações isso acontece. Essas informações ajudam a explicar o caso na conversa com a assistência, sem concluir sozinho que uma troca é necessária.

````

## src/lib/dicas.ts

````ts
import { getCollection } from 'astro:content';
import { dicaPublicavel } from '../schemas/dica';
export async function obterDicas(){
 const entradas=await getCollection('dicas');const slugs=new Set<string>();
 for(const e of entradas){if(slugs.has(e.data.slug))throw new Error(`Slug de dica duplicado: ${e.data.slug}`);slugs.add(e.data.slug);if(/^#\s/m.test(e.body||''))throw new Error(`Use H2 no corpo: ${e.data.slug}`);}
 return entradas.filter(e=>import.meta.env.DEV||dicaPublicavel(e.data)).sort((a,b)=>a.data.ordem-b.data.ordem);
}

````

## src/pages/dicas/[slug].astro

````astro
---
import { render } from 'astro:content';
import { obterDicas } from '../../lib/dicas';
import Pagina from '../../layouts/PaginaInstitucional.astro';
import { loja } from '../../config/loja';
import BotaoWhatsApp from '../../components/BotaoWhatsApp.astro';
import { mensagensWhatsApp } from '../../config/whatsapp';
export async function getStaticPaths(){return (await obterDicas()).map(artigo=>({params:{slug:artigo.data.slug},props:{artigo}}));}
const {artigo}=Astro.props;const d=artigo.data;const {Content}=await render(artigo);
---
<Pagina titulo={d.titulo} descricao={d.descricao} resposta={`${d.resposta} Em ${loja.endereco.cidade}, fale com a ${loja.nome} pelo WhatsApp se precisar de orientação.`} rotulo={`Dicas · ${d.tema}`}>
<section class="pagina-bloco light"><div class="container texto-longo">{import.meta.env.DEV&&<aside class="rascunho">PENDENTE: revisão técnica, aprovação editorial, revisor e datas de publicação. Este artigo não aparece na produção.</aside>}{d.publicadoEm&&<p>Publicado em <time datetime={d.publicadoEm}>{d.publicadoEm.split('-').reverse().join('/')}</time></p>}<article class="conteudo-artigo"><Content/></article><aside class="fontes" aria-label="Fontes consultadas"><h2>Para conferir</h2><ul>{d.fontes.map(f=><li><a href={f.url}>{f.titulo} ↗</a><small>Consultado em {f.consultadoEm.split('-').reverse().join('/')}</small></li>)}</ul></aside><div class="final-artigo"><h2>Quer conversar sobre seu aparelho?</h2><p>A equipe atende na loja e pelo WhatsApp.</p><BotaoWhatsApp texto={d.cta==='assistencia'?mensagensWhatsApp.assistencia():mensagensWhatsApp.geral()} rotulo={d.cta==='assistencia'?'Falar com a assistência':'Consultar aparelhos'}/><nav class="navegacao-paginas" aria-label="Mais dicas"><a href="/dicas">Voltar para dicas ↗</a></nav></div></div></section>
</Pagina>
<style>.rascunho{padding:20px;background:#fff0c7;color:#342800;margin-bottom:30px}.conteudo-artigo :global(h2){margin-top:38px;font-size:clamp(1.5rem,3vw,2.2rem)}.conteudo-artigo :global(p){line-height:1.85;margin:18px 0}.conteudo-artigo :global(li){margin:8px 0}.fontes{border-top:1px solid #979895;margin-top:40px}.fontes small{display:block;font-size:.75rem}.final-artigo{border-top:1px solid #979895;margin-top:38px}</style>

````

## src/pages/dicas/index.astro

````astro
---
import Pagina from '../../layouts/PaginaInstitucional.astro';
import { obterDicas } from '../../lib/dicas';
import { loja } from '../../config/loja';
import BotaoWhatsApp from '../../components/BotaoWhatsApp.astro';
const dicas=await obterDicas();
---
<Pagina titulo="Dicas de tecnologia para o dia a dia" descricao="Dicas de iPhone e Mac da Smart Lion em Lages. Converse com a equipe para tirar dúvidas sobre seu aparelho." resposta={`Acompanhe orientações sobre o uso de iPhone e Mac na ${loja.nome}, no Centro de ${loja.endereco.cidade}. Se precisar de ajuda com seu aparelho, converse com a equipe pelo WhatsApp.`}><BotaoWhatsApp slot="acao"/><section class="pagina-bloco light"><div class="container"><h2>Uma dúvida de cada vez.</h2>{import.meta.env.DEV&&<p class="aviso">Rascunhos de demonstração: textos aguardando revisão editorial e técnica, fora da produção.</p>}{dicas.length ? <div class="artigos">{dicas.map(({data:d})=><article><p class="eyebrow">{d.tema}{d.rascunho?' · Rascunho':''}</p><h3><a href={`/dicas/${d.slug}`}>{d.titulo} ↗</a></h3><p>{d.descricao}</p></article>)}</div>:<div class="vazio"><p>Estamos preparando as próximas dicas. Enquanto isso, veja os conteúdos no Instagram ou tire sua dúvida com a equipe.</p><nav class="navegacao-paginas" aria-label="Continue explorando"><a href={loja.instagram.url}>Acompanhar {loja.instagram.nome} ↗</a><a href="/assistencia-tecnica">Conhecer a assistência ↗</a></nav></div>}</div></section></Pagina>
<style>.artigos{max-width:950px}.artigos article{padding:30px 0;border-bottom:1px solid #969795}.artigos .eyebrow{color:#8c0747}.artigos h3{font-size:clamp(1.5rem,3vw,2.5rem);margin:12px 0 18px}.artigos p{max-width:700px}.aviso{padding:16px;background:#fff0c7;color:#342800;margin:24px 0}.vazio{max-width:750px}</style>

````

## src/schemas/dica.ts

````ts
import { z } from 'astro/zod';
const data=z.string().refine(v=>v==='' || (/^\d{4}-\d{2}-\d{2}$/.test(v)&&!Number.isNaN(Date.parse(v))&&new Date(v).toISOString().slice(0,10)===v),'Data ISO válida ou vazio');
export const dicaSchema=z.object({
 slug:z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
 titulo:z.string().trim().min(1),descricao:z.string().trim().min(1),resposta:z.string().trim().min(1),
 tema:z.enum(['iPhone','Mac']),rascunho:z.boolean().default(true),confirmado:z.boolean().default(false),
 publicadoEm:data.default(''),revisadoEm:data.default(''),revisor:z.string().trim().default(''),
 postOrigem:z.union([z.literal(''),z.url({ protocol: /^https$/ })]).default(''),
 fontes:z.array(z.object({titulo:z.string().min(1),url:z.url({ protocol: /^https$/ }),consultadoEm:data.refine(v=>v!=='')})).min(1),
 cta:z.enum(['assistencia','compra']).default('assistencia'),ordem:z.number().int().default(0),
}).superRefine((d,ctx)=>{
 if(!d.rascunho&&d.confirmado&&(!d.publicadoEm||!d.revisadoEm||!d.revisor))ctx.addIssue({code:'custom',message:'Publicação exige data, revisão e revisor confirmados.'});
});
export function dicaPublicavel(d:{rascunho:boolean;confirmado:boolean;publicadoEm:string;revisadoEm:string;revisor:string}){
 return !d.rascunho&&d.confirmado&&Boolean(d.publicadoEm&&d.revisadoEm&&d.revisor.trim());
}

````

## tests/dicas.test.ts

````ts
import { describe,it,expect } from 'vitest';
import { dicaSchema,dicaPublicavel } from '../src/schemas/dica';
import { readFileSync,readdirSync } from 'node:fs';
const exemplos=readdirSync('src/content/dicas').map(n=>JSON.parse(readFileSync(`src/content/dicas/${n}`,'utf8').split('---')[1]));
describe('publicação de dicas',()=>{
 it('tem três modelos válidos, todos bloqueados em produção',()=>{expect(exemplos).toHaveLength(3);for(const e of exemplos){expect(dicaSchema.safeParse(e).success).toBe(true);expect(dicaPublicavel(e)).toBe(false);}});
 it('não publica só por remover rascunho',()=>expect(dicaPublicavel({...exemplos[0],rascunho:false})).toBe(false));
 it('exige datas e revisor para publicar',()=>expect(dicaSchema.safeParse({...exemplos[0],rascunho:false,confirmado:true}).success).toBe(false));
 it('aceita metadados de publicação completos',()=>{const e={...exemplos[0],rascunho:false,confirmado:true,publicadoEm:'2026-10-29',revisadoEm:'2026-10-29',revisor:'Revisor de teste'};expect(dicaSchema.safeParse(e).success).toBe(true);expect(dicaPublicavel(e)).toBe(true);});
 it('rejeita datas inexistentes',()=>expect(dicaSchema.safeParse({...exemplos[0],revisadoEm:'2026-02-30'}).success).toBe(false));
 it('rejeita slug com travessia',()=>expect(dicaSchema.safeParse({...exemplos[0],slug:'../privacidade'}).success).toBe(false));
 it('não inventa autor nem datas nos rascunhos',()=>{for(const e of exemplos){expect(e.revisor).toBe('');expect(e.publicadoEm).toBe('');expect(e.postOrigem).toBe('');}});
 it('exige referência consultada',()=>expect(dicaSchema.safeParse({...exemplos[0],fontes:[]}).success).toBe(false));
});

````
