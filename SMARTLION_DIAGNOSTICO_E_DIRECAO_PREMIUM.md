# Smart Lion: diagnóstico do site atual e direção premium

Versão 1 · 14/11/2026 · WAXLO

**O que foi analisado:**
- o site no ar (smartlion.vercel.app), na home e nas páginas internas, em 1440 px e 390 px;
- o repositório `joaoCanonica/smartlion`: código, estilos, mídia, configuração, docs das fases 1–9 e R0–R7;
- o Instagram atual (@smartlion.sc).

**Entrega junto:** o logo vetorizado (`smartlion-logo.svg`, com o anel, o nome e o leão em grupos separados para animar; `smartlion-leao.svg`, só o leão) e a comparação com o original.

---

## 1. Veredito em 6 linhas

1. A **base técnica é boa**: Astro estático, TypeScript, catálogo, horário ao vivo, WhatsApp centralizado, avaliações, SEO, LGPD e páginas institucionais. **Não é para refazer do zero; é para trocar a pele e a primeira impressão.**
2. O **visual não combina com a marca nem com o setor.** A serifa editorial (DM Serif), o fundo creme, a madeira e o acento magenta passam "boutique/clínica de estética", não "tecnologia premium". A marca, por sua vez, **mudou para preto e branco**: o avatar novo do Instagram é o leão branco no círculo preto.
3. **Falta abertura, hero com impacto, movimento e profundidade.** O hero é uma foto escurecida com texto, e o único movimento é um fade nas imagens.
4. **Falta foto.** O site inteiro roda com 6 imagens. A foto da loja aparece 4 vezes, várias categorias não têm imagem e a página de produtos está vazia (os 5 produtos são rascunho).
5. **Há problemas de acabamento visíveis:** buracos na galeria, cabeçalho do celular com o menu em duas linhas, título com palavra órfã, todas as seções com o mesmo padrão e logo em PNG de 225 px.
6. **Há problemas técnicos de lançamento:** o `site` do Astro aponta para um domínio de teste do ChatGPT (canonical, sitemap e Open Graph errados), o site está em noindex, o Lighthouse e o axe nunca rodaram, e a pasta `dist` está commitada.

---

## 2. O que está bom e fica

- **Arquitetura e páginas:** Home, A Loja, Nossa História, Produtos (com categorias e página de produto), Seminovos, Assistência (6 serviços), Curso, Avaliações, Visite-nos, FAQ, Dicas, Privacidade, 404, além dos redirecionamentos 301.
- **Config única** (`src/config/loja.ts`): endereço, WhatsApp (49) 99926-8930, telefone, horário com almoço, IRP, garantia de seminovos, parcelamento.
- **Funções testadas:** `linkWhatsApp()` com as 12 mensagens, motor de horário com status ao vivo, 56 avaliações com filtros e o widget "Dá a sua nota" sem filtrar nota.
- **Texto institucional honesto e sem promessas.** IRP descrito corretamente, sem "autorizada Apple" e sem preço.
- **JS leve** (cerca de 40 KB no total do build), mapa só com consentimento, `prefers-reduced-motion` respeitado.

---

## 3. Problemas encontrados (com onde e como corrigir)

| # | Problema | Onde | Correção |
|---|---|---|---|
| 1 | Identidade visual desalinhada: DM Serif Display, creme `#f5f3ef`, madeira `#8a6a4f`, magenta `#e0157a` | `src/styles/tokens.css`, `global.css` | Nova paleta preto/branco/aço com acento âmbar; nova tipografia técnica (§5) |
| 2 | Hero comum: foto escurecida com gradiente lateral e texto | `src/pages/index.astro` (`.abertura`) | Abertura com o leão + hero com 3D e luz (§6) |
| 3 | Sem abertura/entrada | — | "O Rugido de Luz" (§6) |
| 4 | Só 6 fotos; `loja.jpg` usada em hero, galeria, pilar de seminovos e Visite-nos; categorias iPhone, iPad/Mac/Watch, Xiaomi e Perfumaria sem imagem | `src/assets`, `index.astro` | Ensaio de fotos + fotos de produto do Instagram recente (§8); proibir a repetição da mesma foto na mesma página |
| 5 | Página de produtos vazia em produção (5 produtos em rascunho) | `src/content/produtos` | Vitrine institucional por **linhas** com fotos reais (sem depender de estoque) + modelos confirmados quando a loja mandar |
| 6 | Galeria "Entre. Conheça nosso espaço." com espaço vazio enorme entre as imagens (desktop) | `index.astro` (`.galeria`) | Nova composição (§7) |
| 7 | Todas as seções seguem o mesmo molde (rótulo + título serifado + texto) | `Capitulo.astro` | Cada seção com um gesto próprio (§7) |
| 8 | Cabeçalho do celular: menu ocupa duas linhas (cerca de 170 px) sem botão de menu | `Header.astro` (@media ≤1180/550) | Cabeçalho compacto de 64 px, botão "Menu" com painel em tela cheia |
| 9 | Palavra órfã no título ("Tecnologia que **faz** / parte do seu dia") por `<br>` fixo | `produtos/index.astro` | Tirar `<br>`, usar `text-wrap: balance` |
| 10 | Logo em PNG de 225 px; favicon em PNG | `src/assets/logo.png`, `public/favicon.png` | SVG entregue (`smartlion-logo.svg` e `smartlion-leao.svg`); favicon SVG do leão |
| 11 | Acento magenta herdado da fase rosa do Instagram | tokens | Sai; o Instagram agora é preto e branco |
| 12 | Domínio errado no `astro.config.mjs` (`smartlion-waxlo.samsric8.chatgpt.site`) | `astro.config.mjs` | `site: process.env.SITE_URL` com a URL real (Vercel/domínio); validar canonical, sitemap e OG |
| 13 | Lighthouse e axe nunca executados; QA declarado "parcial" | `docs/QA_FASE_9.md` | Rodar de fato na sessão final (os scripts existem) |
| 14 | `dist/` commitado | raiz | `.gitignore` + remover do repositório |
| 15 | Foto de origem com 5 MB no repositório | `src/assets/loja.jpg` | Ok para o build (vira AVIF), mas padronizar os originais em `media-originais/` |
| 16 | Dados desatualizados: seguidores "10,5 mil" (hoje 10,6 mil); avaliações coletadas em 28/10 | `loja.ts`, `avaliacoes.json` | Recoletar avaliações e atualizar números (Prompt D) |
| 17 | Lançamentos: o Instagram já mostra **iPhone 18 Pro Max Burgundy** (12/11/2026); o site não fala de nenhum modelo | — | Bloco "Chegou na loja" com os modelos que a loja confirmar |

---

## 4. A Smart Lion hoje (o que mudou desde a investigação)

- **Marca:** o avatar novo é o **leão branco num círculo preto** com "SMART LION" em letras técnicas. A fase rosa ficou para trás.
- **Instagram:** 10,6 mil seguidores e 175 posts, voltou a postar com frequência em out–nov/2026. Os posts são de **unboxing do iPhone 18 Pro Max Burgundy**, dicas de iPhone (dois números, armazenamento), assistência ("Celular quebrado já é dor de cabeça suficiente…"), JBL Tune 530BT e seminovos com avaliação completa.
- **Fotografia de produto no Instagram melhorou muito:** luz quente, mesa de madeira, close de câmera. Esse material deve ir para o site (pedir os originais).
- Google: 5,0 com 766 avaliações em 28/10 (recoletar).

---

## 5. Direção visual nova: "Leão de Aço"

**Ideia:** tecnologia com procedência. O leão é força e confiança; o aço e o vidro são a tecnologia. O site parece uma loja de tecnologia de alto padrão, escura, precisa e luminosa, com o calor da madeira e da luz da loja real aparecendo só nas fotos.

- **Paleta** (validar AA):
  - Preto Leão ≈ #0B0B0C (fundo);
  - Grafite ≈ #17181B (superfícies);
  - Aço ≈ #9A9EA6 (texto secundário, linhas);
  - Branco Gelo ≈ #F5F6F7 (texto, leão e capítulos claros);
  - **Âmbar ≈ #E3A857**, a luz quente das prateleiras da loja: acento mínimo em números, foco e linha ativa.
  - O verde do WhatsApp só no botão. **Sai:** creme, madeira, magenta.
- **Tipografia:**
  - títulos numa sans geométrica precisa: testar **Sora** × **Geist** (Outfit já está no projeto e pode ser a 3ª opção);
  - rótulos e números técnicos em **Michroma** (ecoa as letras quadradas do "SMART LION" do logo), só em caixa alta pequena;
  - texto em **Inter Tight** × **Geist**.
  - **Sai a DM Serif Display.**
- **Materiais da interface:**
  - vidro escuro (painéis com leve desfoque e borda de 1 px em aço);
  - reflexos de luz que varrem superfícies uma vez ("light sweep");
  - grão sutil no preto para não ficar chapado.
- **Fotografia:** produto em fundo escuro com luz lateral quente, a loja real com as prateleiras iluminadas, a bancada com microscópio e a fachada com o leão em relevo.
- **Proibido:**
  - maçã da Apple ou logo de qualquer marca como enfeite;
  - neon colorido;
  - mockups 3D de iPhone de banco de imagens ou de IA;
  - "cara de IA" (cards brancos arredondados iguais, ícones em círculo, gradientes roxos).

---

## 6. Abertura, hero e 3D

### 6.1 Abertura: "O Rugido de Luz" (≤ 2,8 s, uma vez por sessão, pular sempre disponível)

1. **0–0,4 s:** tela preta.
2. **0,4–1,2 s:** o **anel** do logo se desenha (traço contínuo) e as letras **SMART LION** aparecem uma a uma, no ritmo de digitação técnica.
3. **1,2–1,9 s:** o **leão** surge do escuro: as partes do vetor acendem de dentro para fora (olhos e focinho primeiro, juba por último), com uma **varredura de luz** em âmbar e branco passando pelo rosto.
4. **1,9–2,8 s:** o logo encolhe e vai para o cabeçalho, e a tela se abre para o hero.

Detalhes de execução:
- O `smartlion-logo.svg` entregue já separa `#anel`, `#nome` e `#leao`, o que permite essa animação sem nenhuma imagem extra.
- Com reduced-motion ou sem JavaScript, o estado final aparece direto.

### 6.2 Hero: "O Leão de Vidro"

- **Desktop:** fundo Preto Leão com grão. À direita, o **leão em 3D**: o vetor do leão extrudado em Three.js, num material escuro com bordas metálicas polidas e um leve reflexo. Ele gira poucos graus seguindo o mouse e a inclinação do celular, e uma luz âmbar passa por ele de tempos em tempos.
- **Texto à esquerda:**
  - rótulo em Michroma "LAGES · SC · DESDE [ano pendente]";
  - H1 "Tecnologia com procedência." (Sora, grande, branco) e, em aço, "Venda, assistência e ensino no Centro de Lages.";
  - botões "Conheça a loja" e "Fale conosco";
  - status de horário ao vivo.
- **Abaixo do hero:** uma **faixa de prova** em linha: 5,0 ★ · 766 avaliações no Google · Assistência IRP Apple · Seminovos com 6 meses de garantia.
- **Mobile:** o leão 3D vira uma imagem estática pré-renderizada (AVIF) com a varredura de luz em CSS, para não pesar.
- **Fallback:** sem WebGL, o leão SVG com a varredura em CSS.

### 6.3 Segundo 3D: "Por dentro do reparo" (seção de assistência)

- **Um celular genérico** (sem desenho de iPhone e sem marca) construído em Three.js com camadas simples: vidro, tela, quadro, bateria, placa e tampa. A visitante clica em "Tela", "Bateria", "Tampa traseira" ou "Placa" e o aparelho **se abre em camadas** (vista explodida) destacando a peça. O painel ao lado explica o serviço e traz o botão "Pedir orçamento" (WhatsApp com a mensagem do serviço).
- É o jeito mais claro de mostrar "assistência técnica com padrão IRP" sem usar imagem da Apple. Também é original, nenhuma loja da região tem.
- Carrega só quando a seção aparece na tela, e tem fallback com ilustração vetorial em camadas.

### 6.4 Movimento no resto do site (sem exagero)

- Revelações de imagem com varredura de luz (uma vez).
- Números que contam ao aparecer (5,0 · 766 · 6 meses · 24x).
- Cards de categoria com leve inclinação 3D no hover (desktop).
- Galeria da loja com profundidade (camadas em ritmos diferentes, só como melhoria progressiva).
- Marquise lenta com as marcas que a loja trabalha **só em texto** (Apple, Xiaomi, JBL, DJI…), sem logotipos.
- Tudo com reduced-motion e sem sequestrar a rolagem.

---

## 7. Nova home (ordem e gesto de cada seção)

1. **Abertura** "O Rugido de Luz".
2. **Hero** "O Leão de Vidro" + faixa de prova.
3. **"Chegou na loja"** (novo): carrossel horizontal elegante com 3 a 6 lançamentos e destaques confirmados (ex.: iPhone 18 Pro Max Burgundy, com a foto real da loja), cada um com "Consultar disponibilidade" no WhatsApp. Sem preço.
4. **O que fazemos:** quatro pilares em **painéis de vidro** grandes, cada um com foto real e número (01 Produtos · 02 Seminovos · 03 Assistência IRP · 04 Centro Técnico). No hover, a foto acende.
5. **Por dentro do reparo:** o 3D da §6.3.
6. **A loja:** galeria com profundidade (fachada, prateleiras, balcão, bancada, laboratório), sem buracos, com legendas curtas e o botão "Fazer o tour".
7. **Linhas de produto:** grade escura de categorias, todas com foto (iPhone, iPad/Mac/Watch, Xiaomi, Casa e games, DJI, Acessórios, Perfumaria), com inclinação 3D leve.
8. **O que dizem:** a nota 5,0 gigante em Michroma + carrossel lento de avaliações + "Ler mais".
9. **Nossa história** (linha do tempo resumida) e o **Instagram** (6 posts recentes reais, com link para cada post).
10. **Visite-nos:** fachada, mapa com consentimento, horário ao vivo, rotas.
11. **Rodapé** em preto com o leão grande em marca d'água.

As páginas internas recebem a mesma pele (tokens, tipografia, painéis de vidro). Assistência ganha o 3D. Produtos vira a vitrine por linhas com fotos reais.

---

## 8. Fotos e vídeos: o que pedir (decide se fica premium)

**Pedir à loja os originais do Instagram recente:**
- unboxing do iPhone 18 Pro Max Burgundy (12/11/2026);
- JBL Tune 530BT (26/10/2026);
- posts de assistência e seminovos (out/2026);
- a foto da fachada com o leão em relevo (post fixado "Smart Lion").

**Ensaio rápido (celular bom, luz da própria loja, 1 hora):**
1. Fachada de dia e ao anoitecer, com o leão legível.
2. Prateleiras iluminadas em plano geral e em detalhe.
3. Balcão de madeira com notebooks (já existe; refazer mais aberto).
4. Bancada de assistência: mãos com ferramenta, microscópio, aparelho aberto (sem dados na tela).
5. Laboratório do Centro Técnico (já existe; refazer com luz acesa).
6. **Produtos em fundo escuro**, um por categoria: iPhone (2–3 cores), iPad, Apple Watch, AirPods, Xiaomi, JBL, DJI, capas, perfumes. Luz lateral quente, como os posts novos.
7. Vídeo de 10 s andando devagar da porta até o balcão (para a seção da loja).
8. Equipe (se autorizarem).

**O que a WAXLO já tem:** o logo em vetor (entregue), as 6 fotos atuais e a estrutura de mídia do repositório.

---

## 9. Correções técnicas obrigatórias (entram na primeira sessão)

1. `astro.config.mjs`: `site` vindo de `SITE_URL`, com a URL real. Hoje canonical, sitemap e OG apontam para um domínio de teste.
2. Remover `dist/` do repositório e adicionar ao `.gitignore`.
3. Rodar de verdade Lighthouse (390 px) e axe em todas as rotas, com metas ≥ 95/100 e LCP < 2 s **medido com a abertura e o 3D**. A ilha 3D só carrega depois do LCP.
4. Orçamento: JS inicial ≤ 40 KB gzip; ilha Three.js ≤ 170 KB gzip, carregada sob demanda; leão 3D gerado do SVG em tempo real (sem arquivo GLB) ou GLB ≤ 300 KB.
5. Cabeçalho mobile de 64 px com painel de menu acessível (foco preso, Esc, `aria-expanded`).
6. Recoletar avaliações e números do Instagram; atualizar a data de coleta.

---

## 10. Próximo passo

Montar o **pacote de remodelagem premium** em prompts (mesmo formato dos outros: uma sessão por prompt, critérios de aceite, capturas). A proposta de sessões:

- **P0:** correções técnicas + nova base de tokens e tipografia.
- **P1:** logo SVG, cabeçalho e rodapé.
- **P2:** abertura "O Rugido de Luz".
- **P3:** hero "O Leão de Vidro" (3D).
- **P4:** home nova.
- **P5:** "Por dentro do reparo" (3D).
- **P6:** pele nova nas páginas internas.
- **P7:** mídia nova (quando chegar).
- **P8:** QA real e deploy.
