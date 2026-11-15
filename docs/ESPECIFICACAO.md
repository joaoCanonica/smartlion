# Smart Lion (Lages/SC): investigação completa e plano do site

Versão 1 · 28/10/2026 · WAXLO
Fontes: Instagram @smartlion.sc (62 posts lidos, de fev a ago/2026), ficha do Google Maps (nota, 130 avaliações mais recentes, aba Sobre), site atual smartlionsc.com.br (todas as páginas) e site de referência sidimport.com.br (estrutura, catálogo e funil testados).
Arquivo irmão: `SMARTLION_AVALIACOES_GOOGLE.json` (avaliações prontas para o site).

> **Para quem vai construir (GPT):** este documento é a fonte de verdade. Leia inteiro antes de escrever código. Onde está escrito **PENDENTE**, não invente: crie o campo vazio e mostre um aviso no modo de desenvolvimento. Onde está escrito **NÃO**, é regra.

---

## 1. Resumo em 10 linhas

1. A Smart Lion não é só "loja de iPhone". São **três negócios num endereço**: (a) venda de Apple, Xiaomi e importados, novos e seminovos; (b) **assistência técnica do programa IRP da Apple** (Independent Repair Provider), com conserto no mesmo dia em muitos casos; (c) **Centro Técnico** com curso de manutenção de celulares.
2. Prova social muito forte: **5,0 no Google com 766 avaliações** (763 de 5 estrelas). O site atual não mostra nenhuma.
3. O site atual (Wix) é bonito na foto de abertura, mas está vazio: sem H1, sem descrição, sem produtos, sem avaliações, sem WhatsApp, e com páginas de modelo esquecidas ("interna-mesas", "interna-armarios").
4. O Instagram tem 10,5 mil seguidores, selo de verificado e posts de dicas que viralizam (24 mil e 13 mil curtidas). **O último post visto é de 02/08/2026.**
5. A referência (Sid Import) resolve exatamente o pedido do João: catálogo **"sob consulta"**, com versão e cor, e um botão que abre o WhatsApp **com a mensagem já escrita**. Não precisa de preço atualizado.
6. O plano é **fundir**: a identidade e a foto da loja do site atual + a máquina de vender da Sid + o que a Sid não tem (assistência IRP, curso, garantia de seminovos, parcelamento).
7. O funil é um só: **WhatsApp (49) 99926-8930**. Todo produto, serviço e curso termina numa conversa já escrita.
8. Instagram e WhatsApp aparecem em destaque fixo (cabeçalho, botão flutuante, rodapé e seção própria).
9. Riscos a tratar: linguagem do IRP (não é "autorizada Apple"), imagens oficiais da Apple, versão americana (LL) × Anatel, a avaliação de 1 estrela sem resposta, e números de telefone diferentes.
10. Para o GPT: Astro estático, catálogo em JSON editável, zero backend, zero carrinho.

---

## 2. Ficha da loja (dados para a config)

| Campo | Valor | Estado |
|---|---|---|
| Nome | **Smart Lion** | CONFIRMADO |
| Nome na ficha do Google | Smart Lion - Assistência Técnica Especializada e Importados | VISTO |
| Nome no Instagram | SMART LION • Assistência Técnica IRP Apple & Importados | VISTO |
| Endereço | R. Hercílio Luz, 364 - Centro, Lages - SC, 88501-010 | CONFIRMADO (João + Google + site) |
| Coordenadas | -27.8153637, -50.3290069 · plus code 5MMC+V9 | VISTO (Google) |
| Link da ficha | https://www.google.com/maps?cid=8801259008937640586 | VISTO |
| Telefone | (49) 99818-2996 | CONFIRMADO (João + Google + site) |
| **WhatsApp de vendas (funil do site)** | **(49) 99926-8930 → wa.me/5549999268930** | CONFIRMADO pelo João |
| WhatsApp da bio do Instagram | wa.me/message/XWVOJO5HMEUXN1 (link curto, não mostra o número) | PENDENTE: é o mesmo 99926-8930? |
| Horário | seg a sex 9h–12h e 13h30–18h30 · sáb 9h–13h · dom fechado | CONFIRMADO (João). Fecha no almoço. Feriados: o Google avisa horário diferente (ex.: Finados) |
| Instagram | @smartlion.sc · 10,5 mil seguidores · 170 posts · verificado | VISTO 28/10/2026 |
| Destaques do Instagram | Seminovos · Smartwatches · DJI · Proteções · Xiaomi · IRP Apple | VISTO (são as categorias reais) |
| Google | 5,0 · 766 avaliações (5★ 763 · 4★ 1 · 1★ 2) | VISTO 28/10/2026 |
| Pagamento (Google) | crédito, débito, NFC | VISTO |
| Parcelamento (Instagram) | até 24x no cartão; até 36x no boleto mediante análise de crédito | VISTO (post de 16/07/2026) |
| Acessibilidade (Google) | entrada e estacionamento acessíveis para cadeira de rodas | VISTO |
| Reciclagem (Google) | baterias e eletrônicos | VISTO |
| Tempo de casa | "5 anos de experiência em assistência técnica" | VISTO (post de 18/02/2026) |
| CNPJ / razão social | — | PENDENTE (não achei em fonte aberta; pedir) |
| Domínio | smartlionsc.com.br (já é deles, hoje no Wix) | VISTO. Migrar o DNS na publicação |

**Vizinhança útil para o "como chegar":** fica na mesma Rua Hercílio Luz da barbearia Tensini (cliente WAXLO). Pontos próximos que aparecem no mapa: Catedral Diocesana, Planet Cell Store (concorrente, na quadra de cima). Usar só pontos que a loja confirmar.

---

## 3. O que a loja vende e faz (com prova)

### 3.1 Venda
| Linha | Itens vistos | Onde vi |
|---|---|---|
| iPhone novo (lacrado) | iPhone 17 Pro Max, 17 Pro Silver, 17 lilás, 16 Pro, 16 Pro Max, 15 | avaliações e posts |
| iPhone seminovo | iPhone 13 (troca de 11 por 13), seminovos em geral | avaliações + destaque "Seminovos" |
| Outros Apple | iPad + Apple Pencil, MacBook, Apple Watch, AirPods | posts e destaques |
| Xiaomi | Redmi Note 14, Redmi Note 15, Redmi Note 15 Pro 5G, POCO X8 Pro, POCO F8 Ultra (sob encomenda) | posts e avaliações |
| Casa inteligente | Robot Vacuum X20 Max, Robot Vacuum H50 Pro | posts |
| Audiovisual | DJI (drones, microfones, estabilizadores) | post + destaque "DJI" |
| Games | controle de Xbox original | avaliação |
| Acessórios | capas de couro MagSafe, películas, X-One, fones JBL | posts e avaliações |
| Perfumaria | La Vie Est Belle, Invictus, Marina de Bourbon, perfumes árabes, Victoria's Secret (body splash, hidratantes), "selo ADIPEC" | posts |

### 3.2 Assistência técnica
- **IRP Apple** (post de 18/02/2026, palavras deles): "programa da Apple que credencia assistências técnicas independentes para realizar reparos seguindo os padrões oficiais da marca, com acesso a treinamentos, ferramentas homologadas, documentação técnica e peças originais."
- Serviços citados: troca de tela, bateria, tampa traseira, reparo de placa (curto), Apple Watch, AirPods, MacBook, iPad, Samsung (troca de tela de S9 FE+).
- "Troca de tela, bateria, tampa traseira e diversos outros serviços **costumam ser realizados no mesmo dia**" (post de 23/06/2026).
- "Analisamos o seu celular e mostramos qual opção oferece o melhor custo-benefício" entre consertar e trocar (post de 14/07/2026). É uma ponte natural para a venda.
- Logística: buscaram aparelho em Bom Retiro; entregaram na casa do cliente (avaliações).

### 3.3 Seminovos (regra da casa, palavras deles)
"Antes de qualquer iPhone chegar até você, ele passa pelo nosso time técnico para garantir a procedência, **não trabalhamos com aparelhos swap ou recondicionados**. Todos os nossos seminovos contam com **6 meses de garantia**." (post de 07/04/2026)

### 3.4 Centro Técnico (curso)
"Anexo à nossa loja, temos um laboratório completo de manutenção de celulares… bancadas individuais… As próximas turmas já estão sendo formadas." Curso de Manutenção de Celulares: professor qualificado, bancada individual por aluno, aulas práticas, vagas limitadas (posts de 27/07 e 02/08/2026). O site atual já tinha a página "Treinamento".

### 3.5 Equipe citada nas avaliações
Sabrina (gerente e consultora, a mais elogiada), Amanda e Fabi (vendedoras), Vagner (técnico/assistência). **Só citar nomes no site se a loja autorizar.**

### 3.6 O que os clientes mais repetem (vira texto do site)
1. Atendimento atencioso e "sem pressão" (dezenas).
2. Original, com garantia e procedência.
3. Preço justo e boas condições.
4. Conserto rápido, no mesmo dia, e "o melhor tempo de garantia da cidade".
5. Loja bonita e climatizada.
6. Clientes de outras cidades: Cerro Negro, São Joaquim, Bom Retiro ("a melhor da AMURES").
7. Atendimento bom também pelo WhatsApp.
8. Ajuda a escolher entre iPhone e Xiaomi e já entrega o celular com os dados transferidos.

---

## 4. Presença digital hoje

### 4.1 Site atual (smartlionsc.com.br, Wix)
- **Fica:** a foto de abertura (loja escura, bancada de madeira, notebooks, prateleira iluminada) com o leão branco centralizado; o texto "Nossa História" (bom, com retoque); os três serviços (Importados, Manutenção, Treinamento).
- **Problemas:** sem H1 (o único título é um H3); sem meta description; título "Inicio | Smart Lion"; páginas com nome de modelo esquecido (`/interna-mesas` = Importados, `/interna-armarios` = Manutenção, `/interna-outros` = Treinamento); nenhum produto; nenhuma avaliação; nenhum botão de WhatsApp; formulário "Enviar" genérico; texto citando Poco e Redmi, mas não iPhone; tudo estático e pesado (Wix).
- **Imagens publicadas no Wix** (o João baixa pelo navegador; o servidor daqui não acessa o Wix):
  - abertura 1905×1019: `static.wixstatic.com/media/bda9fe_04b083c03a1f43e38eeeeff1a4b65967~mv2.jpg`
  - leão (PNG) 316×400: `static.wixstatic.com/media/bda9fe_38dd0768bc1b40449158fbc51d59b719~mv2.png`
  - fotos dos serviços: `bda9fe_5bc2212838e74fc68fb79180c6b40b7f~mv2.jpeg` (949×1441), `bda9fe_e51cfbcb8e12453dba0c4a8a4a446475~mv2.jpeg`, `bda9fe_725a37816b8e4a3a958c581030a6b7be~mv2.jpg`, `bda9fe_ecd740a67aff444db16dc16dfbb83e29~mv2.jpg` (Treinamento), `bda9fe_f7058a457cc54ff4ab36d28fd2983c39~mv2.png` (banner 1905×810)
  - **O ideal é pedir o logo em vetor (SVG/AI/PDF) à loja.**

### 4.2 Instagram (@smartlion.sc)
- 10,5 mil seguidores, 170 posts, verificado. Bio: "Excelência em Tecnologia · Assistência Técnica Credenciada IRP Apple · Acessórios Premium e Importados · Loja Física em Lages-SC".
- Visual: fundo rosa-magenta no perfil e em campanhas ("Conexão Rosa"), fotos reais da loja (fachada com o leão em relevo, vitrine de iPhones, prateleiras).
- **Posts que mais engajam são de dicas:** "recurso do iPhone" (24 mil curtidas, 141 comentários), "configurações de câmera" (13 mil), "atalhos do Mac" (1.242), "modo pouca energia" (341), "bateria carregando a noite toda" (53). **Isso vira o blog de dicas do site (SEO e GEO).**
- Datas comerciais: Dia das Mães, Dia dos Namorados, Páscoa.
- Recrutamento: "Vem fazer parte do time Smart Lion" (jun e jul/2026).
- **Último post visto: 02/08/2026** (quase 3 meses sem postar). Fica o aviso para a loja.

### 4.3 Google
- 5,0 · 766. Os temas mais citados pelo próprio Google são "produtos" (101), "atendente" (26), "vendedor" (25) e "certeza" (24).
- **Avaliação de 1 estrela (Dionatan Faro, ~mai/2026) sem resposta do dono:** troca de bateria de iPhone, aparelho aquecendo e saúde da bateria em 86% após dois meses. Responder com calma e oferecer avaliação gratuita. Uma resposta bem feita vale mais que mais dez estrelas.
- Grande concentração de avaliações em abr–mai/2026; o post de 12/05 comemora "+700 avaliações 5 estrelas". Pedir avaliação é ok. **Dar brinde ou desconto em troca é proibido pelo Google** e pode derrubar avaliações.
- Ficha: o site cadastrado é o Wix atual. Na publicação, trocar para o novo e cadastrar o link do WhatsApp e o de avaliar.

### 4.4 Concorrência vista na mesma busca (28/10/2026)
| Loja | Nota | Avaliações | Observação |
|---|---|---|---|
| **Planet Cell Store** | 5,0 | **867** | concorrente direto, a uma quadra; mais avaliações que a Smart Lion |
| Celular Center Angeloni | 4,9 | 248 | loja de celulares |
| Conserta Smart Lages | 4,2 | 102 | assistência |
| King Cell | 4,8 | 59 | assistência |
| Smart 360 | 4,9 | 35 | assistência |
| Garcia's Imports | — | — | importados, no mapa ao lado |

Nenhum deles tem catálogo com WhatsApp como a Sid. **O diferencial defensável da Smart Lion é o IRP Apple + seminovo com 6 meses + loja física bonita.** O site tem que gritar isso.

---

## 5. A referência: o que a Sid Import faz (e por que funciona)

Site: sidimport.com.br (Feira dos Importados, Brasília). Anatomia, de cima para baixo:

1. **Cabeçalho fixo escuro:** logo · **busca** ("Buscar iPhone, PS5, JBL, drone…") · "Instalar app" (PWA) · **botão verde WhatsApp**.
2. **Faixa de categorias em chips com miniatura:** Todos · iPhone · iPad · MacBook · Apple Watch · AirPods e Apple · Xiaomi · Realme · Acessórios. A faixa rola na horizontal e fica fixa.
3. **Hero em carrossel** (13 slides): fundo preto, título grande ("iPhone Duo: o iPhone que dobra"), uma linha de apoio, botão amarelo "Quero o meu", produto à direita e um mascote 3D.
4. **Bloco de avaliações:** selo "4,4 ★ 60 avaliações no Google" + **carrossel automático** de cartões (texto curto, primeiro nome + inicial, estrelas, ícone do Google).
5. **Destaques**, depois **uma seção por categoria** com contagem ("18 modelos").
6. **Card de produto:** foto em fundo claro, selo ("LACRADO"), categoria, nome, versões ("256GB · 512GB · 1TB"), bolinhas de cor, **"SOB CONSULTA / Consulte"**, botão "Ver opções" e um **atalho de WhatsApp** no próprio card.
7. **Janela do produto (modal):** escolher **Versão** (ex.: "256GB · LL (americano)", "256GB · Anatel") e **Cor** → resumo (Modelo / Versão / Cor / Preço: "Consulte disponibilidade") → **"Comprar pelo WhatsApp"** + compartilhar. Rodapé: "Estoque e valores sujeitos a alteração. Confirme a disponibilidade no WhatsApp." A URL muda para `#p=iphone-17-pro-max` (link compartilhável).
8. **Mensagem que abre no WhatsApp** (testada):
   ```
   Olá, SID IMPORT! Vi no site e tenho interesse:
   *iPhone 17 Pro Max*
   Versão: 256GB · LL (americano)
   Cor: Laranja
   Pode me passar a disponibilidade e o valor?
   https://www.sidimport.com.br/#p=iphone-17-pro-max
   ```
9. **"Venha conhecer a loja":** endereço com referência ("próximo à Cafeteria Black"), mapa, foto da loja, horário, botões **Waze** e **Google Maps**.
10. **"Comprou com a gente? Dá a sua nota!":** cinco estrelas clicáveis → "Confirmar minha nota no Google". **Testei com 2 estrelas: ela leva ao Google do mesmo jeito.** Isso é o correto: filtrar quem dá nota baixa é proibido pelo Google.
11. **Rodapé:** loja, horário, WhatsApp com número, @instagram.
12. **WhatsApp flutuante** no canto e mascote "Já tem na SID!".

**Copiar o padrão, não a marca:** NÃO usar mascote 3D, amarelo da Sid, textos dela, nem o "preço da Feira". A Smart Lion tem o leão e a loja física bonita, e é com isso que ela compete.

---

## 6. A fusão: o que vem de cada lado

| Do site atual (manter e melhorar) | Da Sid (trazer) | Novo (só a Smart Lion tem) |
|---|---|---|
| Leão branco e nome em caixa alta | Busca + chips de categoria fixos | **Assistência IRP Apple** com página própria e orçamento por WhatsApp |
| Foto escura da loja como abertura | Catálogo "sob consulta" com versão e cor | **Seminovos com 6 meses de garantia, sem swap nem recondicionado** |
| Texto "Nossa História" (editado) | Modal → WhatsApp com mensagem pronta | **Consertar ou trocar?** (ponte assistência → venda) |
| Os três pilares: Venda · Manutenção · Treinamento | Carrossel de avaliações do Google + selo de nota | **Curso de manutenção (Centro Técnico)** |
| Endereço e telefone | Bloco da loja com mapa, Waze, Google Maps e horário | **Parcelamento 24x cartão / 36x boleto (com análise)** |
| Link do Instagram | Widget "Dá a sua nota" (sem filtro) | **Dicas de iPhone** (blog a partir dos posts que viralizaram) |
| | Link compartilhável por produto | **Perfumaria importada** como categoria separada |

---

## 7. Mapa do site

```
/                               Início (vitrine + prova + loja)
/catalogo                       todos os produtos (filtros = chips)
/catalogo/iphone                iPhone (novos e seminovos, com filtro)
/catalogo/seminovos             seminovos (regra de garantia no topo)
/catalogo/ipad-mac-watch        iPad, MacBook, Apple Watch, AirPods
/catalogo/xiaomi                Xiaomi / POCO / Redmi
/catalogo/casa-e-games          robôs aspiradores, DJI, games
/catalogo/acessorios            capas, películas, carregadores, fones
/catalogo/perfumaria            perfumes e Victoria's Secret
/produto/[slug]                 página própria de cada modelo (SEO); o modal da home abre a mesma coisa
/assistencia-tecnica            assistência IRP Apple (+ serviços, prazos, garantia, orçamento)
/assistencia-tecnica/[servico]  troca-de-tela-iphone, troca-de-bateria-iphone, tampa-traseira, placa, apple-watch-airpods, macbook-ipad
/curso-manutencao-celular       Centro Técnico
/sobre                          história, loja, equipe (se autorizado)
/como-chegar                    mapa, horário, referências
/avaliacoes                     todas as avaliações do JSON + "avaliar"
/dicas                          blog de dicas (iPhone, Mac, Xiaomi)
/dicas/[slug]
/perguntas-frequentes
/privacidade
404
```

**Regra de navegação:** o cabeçalho tem logo, busca, botão "Instagram" (ícone) e o botão **"WhatsApp"** verde. Abaixo, os chips de categoria. No celular, a busca vira ícone e o WhatsApp fica sempre visível.

---

## 8. Home, seção por seção (ordem final)

1. **Hero (fusão):** a foto escura da loja do site atual em tela cheia, com o leão. Por cima, à esquerda: rótulo "Loja física no Centro de Lages"; **H1 "iPhone, Apple e importados com garantia em Lages"**; linha de apoio "Novos e seminovos com procedência, assistência técnica IRP Apple e parcelamento em até 24x"; botões **"Ver modelos disponíveis"** e **"Falar no WhatsApp"**. Abaixo, a linha de status "Aberto agora · fecha às 18h30" (ou "Fechado para almoço · volta às 13h30").
   - **Variação com carrossel (como a Sid):** no máximo 4 slides (Lançamento do momento · Seminovos com 6 meses · Assistência IRP · Parcelamento). Sem troca automática rápida (mínimo 6 s, pausa no hover e no foco, botão pausar).
2. **Faixa de confiança (4 itens em linha, sem cards):** 5,0 ★ com 766 avaliações no Google · Assistência IRP Apple · Seminovos com 6 meses de garantia · Até 24x no cartão.
3. **Avaliações:** selo do Google com nota e total (do JSON) + carrossel com os 23 `destaqueHome: true`. Primeiro nome + inicial. Link "Ver todas" (/avaliacoes) e "Ver no Google".
4. **Destaques:** de 6 a 8 produtos marcados `destaque: true`.
5. **Por categoria:** uma faixa por categoria (iPhone, Seminovos, Apple, Xiaomi, Acessórios, Perfumaria), com 4 a 8 cards e "Ver todos (N)".
6. **Assistência técnica IRP Apple:** foto real da bancada, texto curto do programa IRP (ver §12), serviços mais pedidos, "muitos consertos no mesmo dia", botão "Pedir orçamento no WhatsApp".
7. **Consertar ou trocar?** Bloco curto: "A gente analisa e mostra o que compensa mais." Dois botões: "Quero consertar" / "Quero trocar de aparelho" (cada um com a sua mensagem).
8. **Parcelamento:** "Até 24x no cartão · até 36x no boleto (sujeito a análise de crédito)". Botão "Simular no WhatsApp".
9. **Instagram:** "Siga @smartlion.sc · 10,5 mil pessoas acompanham nossas dicas". De 6 a 9 imagens (estáticas, baixadas e otimizadas, cada uma com link para o post; **NÃO usar widget/iframe do Instagram**, que pesa e quebra) + botão "Seguir no Instagram".
10. **Curso de manutenção:** foto do laboratório, 4 linhas, "Quero saber da próxima turma" (WhatsApp).
11. **A loja:** foto da fachada com o leão, endereço, horário completo (com o intervalo do almoço), mapa (só carrega ao clicar), botões **Google Maps** e **Waze**, "Atendemos clientes de toda a Serra" (Lages, São Joaquim, Bom Retiro, Cerro Negro… só cidades que aparecem nas avaliações).
12. **"Comprou ou consertou com a gente? Dá a sua nota"** (estrelas → link de avaliação do Google, sem filtro).
13. **Rodapé:** logo, endereço, horário, WhatsApp com o número escrito, telefone, Instagram, CNPJ (pendente), links das páginas, privacidade.
14. **Botão flutuante do WhatsApp** (canto inferior direito) em todas as páginas.

---

## 9. O catálogo (como ensinar o GPT)

### 9.1 Princípio
A loja **não** vai manter preço nem estoque em tempo real. O site mostra **os modelos que a loja trabalha**, com versões e cores, e **cada clique vira uma pergunta no WhatsApp**. Preço aparece só se a loja quiser ("a partir de", com data) e é opcional por produto.

### 9.2 Onde fica
Um arquivo por produto em `src/content/produtos/*.json` (coleção do Astro com schema Zod). Assim qualquer pessoa da WAXLO edita um arquivo pequeno, sem mexer em código. (Fase 2, se a loja quiser editar sozinha: planilha do Google publicada como CSV, lida no build, com rebuild agendado. Não fazer agora.)

### 9.3 Modelo de dados (exemplo; versões, cores e nomes reais vêm da loja)
```json
{
  "slug": "iphone-17-pro-max",
  "nome": "iPhone 17 Pro Max",
  "categoria": "iphone",
  "subcategoria": null,
  "condicao": "novo",
  "selos": ["lacrado"],
  "versoes": [
    { "id": "256-ll", "rotulo": "256GB · versão americana (LL)" },
    { "id": "256-br", "rotulo": "256GB · homologado Anatel" },
    { "id": "512-ll", "rotulo": "512GB · versão americana (LL)" }
  ],
  "cores": [
    { "id": "laranja", "rotulo": "Laranja cósmico", "hex": "#D4733A" },
    { "id": "azul", "rotulo": "Azul profundo", "hex": "#2C3E5C" },
    { "id": "prata", "rotulo": "Prateado", "hex": "#D9D9D6" }
  ],
  "disponibilidade": "consultar",
  "preco": null,
  "precoNota": null,
  "garantia": "PENDENTE: texto de garantia de novos",
  "destaque": true,
  "ordem": 1,
  "imagens": ["/produtos/iphone-17-pro-max/frente.webp"],
  "descricaoCurta": "",
  "atualizadoEm": "2026-10-28"
}
```
- `condicao`: `novo` | `seminovo` | `encomenda`.
- `disponibilidade`: `consultar` (padrão) | `disponivel` | `sob-encomenda` | `esgotado` (esgotado continua no site, com o botão "Avise-me quando chegar" indo para o WhatsApp).
- Seminovo ganha campos `garantiaMeses: 6`, `saudeBateria` (opcional, texto) e o selo "Seminovo com procedência".
- **Lista inicial de modelos: PENDENTE.** A loja manda a lista do que trabalha hoje. Sugestão para começar (só o que apareceu nos posts e avaliações): iPhone 17 Pro Max, 17 Pro, 17, 16 Pro Max, 16 Pro, 16, 15, seminovos (13 a 16), iPad + Apple Pencil, MacBook, Apple Watch, AirPods, Redmi Note 15 Pro 5G, Redmi Note 15, Redmi Note 14, POCO X8 Pro, POCO F8 Ultra (encomenda), Robot Vacuum X20 Max e H50 Pro, DJI, controle Xbox, capas de couro MagSafe, películas, X-One, perfumes (La Vie Est Belle, Invictus, Marina de Bourbon, árabes), Victoria's Secret. **Não publicar modelo que a loja não confirmou.**

### 9.4 Componentes
- **Card:** imagem 1:1 em fundo claro neutro, selo, categoria, nome, versões resumidas, bolinhas de cor, "Sob consulta", botão "Ver opções" e ícone do WhatsApp (atalho que manda a mensagem sem versão/cor).
- **Modal / página do produto:** escolher versão e cor (rádios acessíveis, não div clicável), resumo, botão **"Consultar no WhatsApp"**, botão compartilhar (Web Share API, com cópia de link como alternativa). Nota fixa: "Estoque e condições sujeitos a alteração. Confirme pelo WhatsApp." URL compartilhável: `/produto/iphone-17-pro-max?versao=256-ll&cor=laranja` (a página existe de verdade; o modal da home usa a mesma URL com `history.pushState`).
- **Busca:** no cliente, sobre um índice JSON gerado no build (nome, categoria, sinônimos: "17 pro max", "pro max", "iphone 17"…). Sem biblioteca pesada; normalizar acentos.
- **Chips:** filtram a página de catálogo (âncora + filtro no cliente, com fallback de links para as páginas de categoria).

---

## 10. O funil do WhatsApp (mensagens exatas)

Número único: **5549999268930**. Função única `linkWhatsApp(texto)` → `https://wa.me/5549999268930?text=${encodeURIComponent(texto)}`. Nenhum link de WhatsApp escrito à mão no HTML.

| Origem | Mensagem |
|---|---|
| Botão geral | `Olá, Smart Lion! Vim pelo site e queria atendimento.` |
| Produto (com escolhas) | `Olá, Smart Lion! Vi no site e tenho interesse:\n*{nome}*\nVersão: {versao}\nCor: {cor}\nCondição: {novo/seminovo}\nPode me passar a disponibilidade e o valor?\n{url}` |
| Atalho do card (sem escolhas) | `Olá, Smart Lion! Vi o *{nome}* no site. Quais versões e cores vocês têm e qual o valor?\n{url}` |
| Esgotado | `Olá, Smart Lion! Vi o *{nome}* no site. Me avisam quando chegar?` |
| Assistência (genérico) | `Olá, Smart Lion! Preciso de assistência técnica. Aparelho: {modelo}. Problema: {problema}.` (campos opcionais num mini formulário que só monta o texto) |
| Serviço específico | `Olá, Smart Lion! Quero um orçamento de {troca de tela} para {iPhone 13}.` |
| Consertar ou trocar | `Olá, Smart Lion! Meu {aparelho} está com {problema}. Quero saber se compensa consertar ou trocar.` |
| Parcelamento | `Olá, Smart Lion! Quero simular o parcelamento de {produto ou "um aparelho"}.` |
| Seminovos | `Olá, Smart Lion! Quero ver os seminovos disponíveis. Tenho interesse em {modelo}.` |
| Troca (meu aparelho como parte) | PENDENTE: a loja aceita aparelho usado como parte do pagamento? (há avaliação de "troca de 11 por 13"). Se sim: `Olá, Smart Lion! Quero trocar meu {modelo atual} por {modelo desejado}. Como funciona a avaliação?` |
| Curso | `Olá, Smart Lion! Quero saber sobre a próxima turma do curso de manutenção de celulares.` |
| Perfumaria | `Olá, Smart Lion! Vi o perfume *{nome}* no site. Tem disponível?` |

Regras: nunca escrever "compra garantida", "reservado" ou "preço garantido". O site **pergunta**, a loja confirma. Medir os cliques (evento `clique_whatsapp` com `origem` e `produto`) só depois do consentimento, se a ferramenta usar cookie.

---

## 11. Avaliações no site (usar o JSON)

- Arquivo: `SMARTLION_AVALIACOES_GOOGLE.json` → copiar para `src/data/avaliacoes.json`.
- `resumo.nota`, `resumo.total` e `fonte.coletadoEm` aparecem juntos: "5,0 ★ · 766 avaliações no Google · atualizado em out/2026".
- Carrossel da home: só `destaqueHome: true`. A página /avaliacoes mostra todas, com filtro por tag (Compra de iPhone · Assistência · Seminovo · Atendimento · Outras cidades).
- Exibir `autorExibicao` (primeiro nome + inicial), nunca o nome completo. Ícone do Google + "Avaliação no Google" + link para a ficha.
- **NÃO** gerar `AggregateRating` nem `Review` em JSON-LD com essas avaliações (o Google trata como autosservido e pode punir).
- **NÃO** editar texto de avaliação (só cortar com "…", sem mudar o sentido).
- A de 1 estrela fica fora do site e com recomendação de resposta pública.
- Atualizar o JSON a cada 30–60 dias (a WAXLO roda a coleta de novo).

---

## 12. Regras jurídicas e de marca (ler antes de escrever qualquer texto)

1. **IRP não é "Autorizada Apple".** Usar: "Assistência técnica participante do programa Independent Repair Provider (IRP) da Apple" ou "Assistência IRP Apple". **NÃO** escrever "Assistência Autorizada Apple", "Apple Authorized Service Provider", "oficial Apple" nem "garantia Apple". Pelo que a Apple publica, a garantia do reparo IRP é **da loja**, não da Apple. Conferir no localizador da Apple se a loja aparece (support.apple.com/repair/verify-repair-provider) e se o contrato permite usar o nome do programa no site.
2. **Logo da Apple:** NÃO usar a maçã nem logotipos de marcas como ícone ou decoração. Nomes de produtos ("iPhone 17 Pro Max") podem ser usados para descrever o que se vende.
3. **Fotos de produto:** as imagens oficiais da Apple e da Xiaomi são protegidas. Preferir **fotos próprias do estoque** (a loja tem vitrine bonita) em fundo neutro. Se usar imagem de fabricante, registrar a origem e a decisão em `docs/PENDENCIAS.md` para a conferência final.
4. **Versão americana (LL) × Anatel:** se a loja vende LL, o rótulo tem que ser claro ("versão americana, sem homologação Anatel" ou o termo que a loja usar), e o FAQ explica garantia, carregador e eSIM. Não esconder.
5. **Seminovos:** a garantia de 6 meses é da loja; escrever as condições (o que cobre). PENDENTE: termo de garantia.
6. **Preço (CDC):** se aparecer preço, ele vale e precisa de data, condição e forma de pagamento. Por isso o padrão é "Sob consulta".
7. **Parcelamento:** sempre com "sujeito a análise de crédito" no boleto, e sem prometer taxa ("as melhores taxas" sai).
8. **Superlativos:** NÃO usar "a melhor loja", "o melhor preço", "número 1" no texto da loja (nas avaliações literais dos clientes pode).
9. **Perfumaria:** "originais com selo ADIPEC" só se a loja confirmar o selo por produto.
10. **LGPD:** banner com Aceitar e Recusar do mesmo tamanho; mapa e medição com cookie só depois de aceitar; página de privacidade simples.
11. **Curso:** nada de promessa de renda ("ótima renda", "excelente potencial de faturamento" saem do site).

---

## 13. SEO e GEO (para o Google e as IAs indicarem a loja)

- **Títulos (≤ 60):** "iPhone em Lages com garantia | Smart Lion" · "Assistência técnica de iPhone em Lages (IRP Apple) | Smart Lion" · "Seminovos com 6 meses de garantia em Lages | Smart Lion" · "Curso de manutenção de celular em Lages | Smart Lion".
- **Um parágrafo-resposta no topo de cada página** (2–3 frases com o quê, onde e como): "A Smart Lion vende iPhone novo e seminovo com garantia na Rua Hercílio Luz, 364, Centro de Lages. Os seminovos têm 6 meses de garantia e procedência conferida pela assistência técnica da própria loja. Para saber os modelos e valores, fale pelo WhatsApp (49) 99926-8930."
- **JSON-LD:** `MobilePhoneStore` (confirmar o tipo em schema.org; alternativa `ElectronicsStore`) com name, address, geo, telephone, url, sameAs (Instagram, ficha do Google), openingHoursSpecification **com o intervalo do almoço** (dois blocos por dia), `hasOfferCatalog` com as categorias; um `Service` para a assistência (areaServed: Lages e região); `Product` por página de produto **sem preço quando for sob consulta** (sem `offers` falsos); `FAQPage` na página de perguntas; `BreadcrumbList`. **Sem AggregateRating.**
- **NAP idêntico** (nome, endereço, telefone) em site, Google, Instagram, WhatsApp Business, Apple Business Connect e Bing Places.
- **/dicas:** transformar os posts que viralizaram em artigos curtos com texto próprio (não colar a legenda): "Recurso escondido do iPhone que pouca gente usa", "Configurações de câmera do iPhone para fotos melhores", "Atalhos do Mac", "Modo pouca energia: quando usar", "Carregar o iPhone a noite toda estraga a bateria?", "Armazenamento cheio no iPhone: o que fazer". Cada artigo termina com o CTA de assistência ou de compra. **É o conteúdo que as IAs citam.**
- **llms.txt** gerado da config: quem é, o que vende, assistência IRP, seminovos com 6 meses, endereço, horário, WhatsApp, Instagram.
- **Fora do site (checklist para a loja):** trocar o site na ficha do Google; responder a avaliação de 1 estrela; responder as próximas avaliações; voltar a postar no Instagram (as dicas funcionam); trocar o link da bio para `smartlionsc.com.br` (com /catalogo e WhatsApp); pedir avaliação a todo cliente atendido, sem brinde.
- **Teste mensal nas IAs** (sem estar logado): "onde comprar iPhone em Lages", "assistência de iPhone em Lages", "iPhone seminovo com garantia em Lages", "loja Apple em Lages". Anotar quem aparece.

---

## 14. Direção visual (fusão, sem "cara de IA")

- **Base:** o escuro e a madeira da foto atual da loja + o leão branco. Grafite quase preto (≈ #111214) como fundo do hero e das seções de vitrine; superfície clara neutra (≈ #F4F4F2) nas listas de produto (as fotos de produto ficam melhores no claro, como na Sid); texto e leão em branco no escuro.
- **Cor de acento:** o **rosa-magenta do Instagram** (≈ #E0157A, calibrar com o perfil) em detalhe pequeno (selo, foco, linha ativa do chip). O WhatsApp fica no verde oficial do WhatsApp **só no botão de WhatsApp**. Nada de dourado, nada de gradiente roxo/azul.
- **Tipografia:** uma sans geométrica forte para títulos (testar "Sora" ou "Outfit") + uma sans de leitura para texto (testar "Inter Tight" ou "DM Sans"). Números de nota e parcelas em tabular.
- **Fotos reais acima de tudo:** fachada com o leão em relevo, vitrine de iPhones, prateleiras iluminadas, bancada da assistência, laboratório do curso. Pedir à loja ou baixar do Instagram em boa resolução.
- **Proibido:** mascote, grade de cards brancos arredondados idênticos em todas as seções, ícones de biblioteca como ilustração, hero centralizado com degradê, maçã da Apple, banners com preço riscado.
- **Movimento:** leve. O leão do hero aparece com um fade curto (≤ 600 ms); o carrossel de avaliações rola devagar e pausa no hover/foco; tudo desligado com `prefers-reduced-motion`.

---

## 15. Instruções para o GPT (como construir)

**Stack.** Astro (versão estável atual, fixada), TypeScript strict, site estático, pnpm, ilhas mínimas em JS puro (sem React só para isso). Sem jQuery, Swiper, GSAP. Carrossel com CSS `scroll-snap` + 30 linhas de JS. Imagens com `astro:assets` (AVIF/WebP, `srcset`, `loading="lazy"` fora da primeira dobra). Fontes self-hosted.
> Se "Astra" se referir ao tema Astra do WordPress, avise a WAXLO antes de começar: a estrutura de conteúdo (JSON de produtos e avaliações, mensagens do WhatsApp, páginas e regras) continua valendo, só muda a implementação.

**Pastas.**
```
src/config/loja.ts          dados da §2 (fonte única; NAP sai daqui para todo o site)
src/config/whatsapp.ts      número + linkWhatsApp() + mensagens da §10
src/config/horario.ts       horários com intervalo + status "aberto/fechado/almoço"
src/content/produtos/*.json catálogo (§9)
src/content/dicas/*.md      blog
src/data/avaliacoes.json    (§11)
src/components/             Header, ChipsCategorias, Busca, CardProduto, ModalProduto,
                            CarrosselAvaliacoes, SeloGoogle, BlocoLoja, BotaoWhatsApp,
                            BotaoWhatsAppFlutuante, BlocoInstagram, AvaliarGoogle, Rodape
```

**Ordem de trabalho (um passo = um commit):**
1. Fundação (Astro, config, layout, Header/Rodapé, botão flutuante).
2. Config + horário (com testes: segunda 12h15 = "fechado para almoço, volta 13h30"; sábado 13h05 = "fechado, abre segunda 9h"; domingo).
3. WhatsApp (função + testes de cada mensagem da §10).
4. Catálogo (schema, 5 produtos de exemplo marcados `rascunho: true` até a lista real chegar, card, modal, página de produto, busca, chips).
5. Avaliações (selo, carrossel, página).
6. Home completa (§8).
7. Assistência, curso, sobre, como chegar, FAQ, avaliar.
8. Dicas (3 artigos-modelo a partir da §13, marcados rascunho).
9. SEO/GEO (§13) + LGPD.
10. QA: Lighthouse mobile ≥ 90 em todas as páginas (meta 95), acessibilidade 100, teste de todos os links de WhatsApp em 390 px, capturas 390 e 1440.

**Critérios que não se negociam:** nenhum link de WhatsApp fora da função; nenhum preço sem data; nenhuma frase da §12 proibida; nenhum produto não confirmado publicado; o site funciona sem JS (cards com link direto para a página do produto e para o WhatsApp).

---

## 16. O que pedir à loja (pendências)

**Antes de publicar**
1. **Lista de modelos que eles trabalham hoje** (com versões, cores, novo/seminovo e se vendem LL ou só Anatel).
2. Confirmar que o WhatsApp de vendas é **(49) 99926-8930** e se o link da bio leva ao mesmo número. O (49) 99818-2996 continua como telefone?
3. **Logo em vetor** (SVG/AI/PDF) e as fotos originais do site atual.
4. Texto da **garantia** (novos, seminovos 6 meses, reparos) e se aceitam aparelho usado na troca.
5. Confirmação do **IRP** (nome exato que a Apple deu e se podem citar o programa no site).
6. CNPJ e razão social.
7. Autorização para citar a equipe pelo nome (Sabrina, Amanda, Fabi, Vagner).
8. Link de avaliação do Google (Perfil da Empresa → "Pedir avaliações").

**Mídia (melhora muito o site)**
9. Fotos novas: fachada de dia, vitrine, balcão, bancada da assistência, laboratório do curso, equipe.
10. Fotos próprias dos produtos mais vendidos em fundo neutro (o celular da loja serve, com luz de janela).
11. 6 a 9 posts do Instagram escolhidos para a seção de Instagram (baixar em alta).

**Curso**
12. Carga horária, conteúdo, próxima turma, se tem certificado.

---

## 17. Fontes

- Instagram: https://www.instagram.com/smartlion.sc/ (perfil, destaques e 62 legendas lidas em 28/10/2026)
- Google Maps: https://www.google.com/maps?cid=8801259008937640586 (nota, distribuição, aba Sobre e 130 avaliações mais recentes, em 28/10/2026)
- Site atual: https://www.smartlionsc.com.br/ (+ /interna-mesas, /interna-armarios, /interna-outros)
- Referência: https://www.sidimport.com.br/ (navegado e testado: modal, mensagem do WhatsApp, widget de nota)
- Apple, verificação de prestadores e definição de IRP: https://support.apple.com/repair/verify-repair-provider
