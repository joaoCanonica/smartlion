# R0 — Auditoria da remodelagem institucional

30/10/2026. Sem alteração de código ou do site publicado.

Fontes: novo briefing Texto colado(3).txt; especificação anterior em docs/ESPECIFICACAO.md; avaliações em src/data/avaliacoes.json; código atual. O novo briefing prevalece sobre a antiga ordem da home e objetivo comercial. As regras técnicas e dados confirmados permanecem.

## 1. Inventário

24 páginas HTML no build: home; catálogo geral e sete categorias; assistência geral e seis serviços; avaliações; como chegar; curso; dicas; FAQ; privacidade; sobre; 404. Rotas dinâmicas de produto e artigo existem no código, mas não geram páginas públicas enquanto os registros forem rascunhos.

Endpoints estáticos: busca.json, sitemap.xml, robots.txt e llms.txt.

Conteúdo: cinco produtos de demonstração não confirmados; três artigos-modelo em rascunho; 56 avaliações publicáveis, todas de cinco estrelas, com 23 destaques; resumo geral 5,0/766 com distribuição original e coleta em 28/10/2026. Relatos negativos estão no campo separado negativaParaResponder: não são renderizados. Preservar distribuição total e link da ficha, identificando os relatos exibidos como seleção. Nenhuma nota do widget será filtrada.

Configurações: loja.ts (NAP, horário, garantias confirmadas e pendências); whatsapp.ts (mensagens e função central); categorias.ts; servicos.ts. FAQ dirigido por perguntas.ts. História atual em /sobre sem data de fundação confirmada.

Componentes comuns: Header, ChipsCategorias, Rodape, BotaoWhatsApp, StatusHorario, PendenciasDev, Consentimento; layouts LayoutBase e PaginaInstitucional.

Catálogo: Catalogo, CardProduto, Vitrine, DetalhesProduto, ModalProduto, FotoProduto; scripts de busca, produto e modal.

Avaliações: SeloGoogle, MarcaGoogle, Depoimento, CarrosselAvaliacoes, AvaliarGoogle; filtros e controle de movimento.

Home: FaixaConfianca, CategoriasHome, AssistenciaHome, DecisaoHome, ParcelamentoHome, InstagramHome, CursoHome, LojaHome. Hero está em pages/index.astro. Orcamento atende assistência/serviços. Scripts e testes existentes cobrem horários, mensagens, catálogo, avaliações, dicas e SEO.

Mídias disponíveis: loja.jpg 3000×2000; logo.png 225×225; bancada, laboratório, capas, fones e caixas de som, cada uma 1080×1350. Não há foto própria confirmada de fachada, vitrine de iPhones ou equipe; não há vídeo. Logo raster tem limitação para uso muito grande.

## 2. O que fica, muda e sai

| Elemento | Decisão e motivo |
|---|---|
| Dados, coleções, mensagens, testes | Preservar; mudar apresentação sem duplicar fatos |
| Horários e consentimento | Preservar lógica e controles; adaptar visual |
| Cabeçalho | Trocar busca/chips por menu institucional, submenu acessível, Instagram e Fale conosco |
| Busca/chips | Mover para /produtos e suas categorias; continuam funcionais |
| Hero e sequência da home | Reorganizar integralmente conforme narrativa do novo briefing |
| Fotos existentes | Reutilizar com legendas verdadeiras; não chamar interior de fachada |
| Cards/modal | Reestilizar e suavizar rótulos; mensagens exatas permanecem |
| Avaliações | Reutilizar CSS columns já existente; nova hierarquia, barras de distribuição e citações |
| Rodapé | Reestilizar, incluir leão e widget de notas sem duplicar IDs |
| Parcelamento na home | Sai dessa posição; permanece em /produtos e FAQ |
| Faixa comercial e Consertar ou trocar na home | Saem da sequência principal; conteúdo útil migra para produtos/assistência |
| Carrossel da home | Substituir por 3–6 citações estáticas; manter componente disponível |
| Arquivos/componentes antigos | Nenhuma exclusão proposta nesta etapa; remover da composição não é apagar arquivo |

Home final: abertura → manifesto → ambiente → quatro pilares → vitrine → avaliações → história → Instagram → visite-nos → rodapé com avaliação. Fotos e espaço real conduzem a narrativa; produtos entram como parte da experiência.

## 3. Rotas e redirecionamentos propostos

| Origem | Destino | Tratamento |
|---|---|---|
| / | / | Home remodelada |
| inexistente | /a-loja | Nova página |
| /sobre | /nossa-historia | 301 após transferir todo conteúdo válido |
| /catalogo | /produtos | 301 preservando query de busca/filtro |
| /catalogo/iphone | /produtos/iphone | 301 |
| /catalogo/seminovos | /seminovos | 301 direto, sem cadeia |
| /catalogo/ipad-mac-watch | /produtos/ipad-mac-watch | 301 |
| /catalogo/xiaomi | /produtos/xiaomi | 301 |
| /catalogo/casa-e-games | /produtos/casa-e-games | 301 |
| /catalogo/acessorios | /produtos/acessorios | 301 |
| /catalogo/perfumaria | /produtos/perfumaria | 301 |
| /produtos/seminovos | /seminovos | Alias com 301, evitando duplicação |
| /como-chegar | /visite-nos | 301 |
| /produto/[slug] | mesma rota | Preservar versao/cor na query |
| /assistencia-tecnica e seis serviços | mesmas rotas | Novo visual |
| /curso-manutencao-celular e /avaliacoes | mesmas rotas | Novo visual |
| /dicas e /dicas/[slug] | mesmas rotas | Preservar rascunhos |
| /perguntas-frequentes, /privacidade, 404 | mesmas rotas | Novo visual |
| /busca.json, /sitemap.xml, /robots.txt, /llms.txt | mesmos endpoints | Atualizar URLs geradas |

/seminovos é nova rota: hoje existe somente /catalogo/seminovos. Implantar redirecionamentos HTTP reais na hospedagem; meta refresh não equivale a 301. Conferir suporte do Sites e configurar Vercel na hospedagem final. Manter conteúdo antigo funcional até destino e 301 estarem prontos. Atualizar links internos, canônicas, sitemap e llms.txt, preservando âncora #busca no destino.

## 4. Três direções de copy

### A — recomendada
Título: Tecnologia com procedência, no coração de Lages.
Frase-manifesto: Tecnologia de verdade é sobre pessoas.
Desdobramento: Queremos tornar a experiência com tecnologia segura e confiável. A gente orienta a escolha e acompanha depois da compra. Aqui, venda, assistência e aprendizado fazem parte da mesma história.

### B
Título: Tecnologia com atendimento de perto.
Frase-manifesto: A compra é só o começo da conversa.
Desdobramento: A gente escuta, explica e ajuda você a escolher. Procedência e suporte fazem parte dessa relação. Nossa loja reúne produtos, assistência técnica e formação no Centro de Lages.

### C
Título: Conheça a casa da Smart Lion.
Frase-manifesto: Confiança para escolher. Gente para acompanhar.
Desdobramento: Novos e seminovos, cuidado técnico e espaço para aprender. Reunimos essas experiências em uma loja física no Centro de Lages. Fale com a gente ou venha conhecer o ambiente.

Textos são propostas editoriais; não acrescentam ano de fundação, fundador, certificação ou promessa comercial. Abertura terá parágrafo-resposta com endereço/localidade e contato, além dos links Conheça a loja e Fale conosco.

## 5. Tipografia — duas propostas para comparar na R1

A: DM Serif Display nos títulos + DM Sans no texto. Direção editorial com contraste entre título e corpo; candidata inicial para a loja como protagonista.

B: Young Serif nos títulos + DM Sans no texto. Direção mais marcada, a conferir junto ao leão e às fotos de madeira.

Comparar as mesmas composições na /_estilo, em 390 e 1440px: hero com logo, manifesto, título longo, nota 5,0 e texto de assistência. Decisão visual somente após capturas lado a lado. Se ambas competirem com o leão, usar o fallback autorizado Sora 600–700 + DM Sans. Produção carrega apenas o par escolhido, subset latino, self-hosted; preload só da fonte do H1.

## 6. História: limites da linha do tempo

- Fev/2026: a loja mencionou cinco anos de experiência em assistência. Isso NÃO confirma fundação em 2021.
- Fev/2026: anúncio de participação no IRP. Não tratar a publicação como data contratual de ingresso.
- Mai/2026: publicação comemorando +700 avaliações cinco estrelas.
- 2026: divulgação das turmas do Centro Técnico. Não inferir data de inauguração.
- Out/2026: coleta com nota 5,0 e 766 avaliações no Google.

Criar historia.json na R3 com data/precisão, título, texto, fonte, confirmação e ordem; fundação/fundadores permanecem vazios. Equipe oculta em produção até autorização. Citações preservadas literalmente.

## 7. Riscos e decisões

1. Fotografia é a principal dependência: seis fotos existentes não cobrem todos os ambientes. Usar apenas imagens verdadeiras, evitando repetição excessiva; placeholders PROVISÓRIO apenas em DEV.
2. Os 10,5 mil seguidores são um retrato de 28/10/2026. Exibir com referência de data ou atualizar mediante fonte confirmada; não afirmar contagem ao vivo.
3. Vitrine pública ainda não tem produtos confirmados. Manter categorias institucionais, sem publicar os slots como estoque real.
4. Linha do tempo pode confundir experiência com fundação e divulgação com inauguração; distinguir explicitamente.
5. CSS columns exige conferir ordem de leitura e filtros; sem JS, citações continuam visíveis.
6. Reveals devem deixar fotos visíveis por padrão e funcionar sem JS; reduced-motion desliga movimento. Parallax é opcional e não precede acessibilidade/LCP.
7. Redirecionamentos dependem da hospedagem; validar HTTP 301 e ausência de cadeias antes de retirar rotas antigas.
8. QA anterior continua parcial: 186 testes passaram e maior JS foi 7.397 bytes gzip, mas Lighthouse/axe, LCP/CLS/INP e validação integral 390/1440 não foram concluídos. Esses números são da versão anterior, não previsão da remodelagem.
9. Garantias, CNPJ, comprovação IRP, privacidade, fotos/autorização e condições de curso seguem pendentes.

## 8. Próxima entrega e arquivos previstos

R1: tokens e CSS base; Header/menu; BotaoWhatsApp; Rodape; layouts; novos componentes Capitulo e RevelacaoImagem; /_estilo; fontes locais escolhidas após comparação. /_estilo será noindex e ficará fora do sitemap. Nenhum arquivo será removido sem lista prévia.

R2–R7 seguem o briefing. A lista fotográfica está em FOTOS_NECESSARIAS.md. Código não foi alterado na R0; não há comando de build ou nova medição aplicável à auditoria. Revisão em 390/1440 começa na /_estilo da R1.

Nenhuma pergunta bloqueia R1. Adotar a copy A provisoriamente e comparar os pares tipográficos antes da escolha definitiva. Aguardar “siga”.
