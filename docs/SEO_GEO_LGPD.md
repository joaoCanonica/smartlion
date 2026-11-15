# SEO/GEO e privacidade — Fase 8

## Implementação

Metas por página preservadas; canônica sem query/hash e Open Graph com foto real da loja em JPEG de 1200px, gerada pelo Astro. JSON-LD centralizado em src/lib/seo.ts: ElectronicsStore, Service nas sete rotas da assistência, FAQPage usando exatamente src/data/perguntas.ts, BreadcrumbList e Product por produto. Product não contém ofertas, preço ou avaliação inventados. Produtos e artigos rascunho seguem excluídos da produção.

ElectronicsStore foi escolhido por representar o catálogo amplo de eletrônicos. MobilePhoneStore também existe, mas sua definição limita o foco a celulares e acessórios. Fontes oficiais consultadas em 29/10/2026:
- https://schema.org/ElectronicsStore
- https://schema.org/MobilePhoneStore
- https://schema.org/Product

O endereço, telefone, coordenadas, Instagram e horários estruturados vêm de loja.ts; almoço tem dois intervalos. areaServed usa apenas Lages, sem inventar municípios da região. Catálogos de categorias não afirmam disponibilidade de produtos. Não há AggregateRating ou Review. Não se promete rich result nem citação por IA.

Sitemap gera 23 URLs publicáveis, sem 404, busca JSON, parâmetros ou rascunhos. llms.txt é gerado da configuração, com categorias, garantia, endereço, contatos e horários. Não há datas lastmod artificiais.

## Indexação

SITE_URL define a origem da implantação. PUBLIC_INDEXABLE=false é o padrão; VERCEL_ENV=preview sempre bloqueia indexação, mesmo com PUBLIC_INDEXABLE=true. Em outras plataformas de preview, mantenha PUBLIC_INDEXABLE=false. Robots de preview bloqueia rastreamento e HTML tem noindex. Autenticação privada é a barreira de acesso; robots não é controle de segurança.

Somente no lançamento aprovado: configurar SITE_URL com o domínio definitivo e PUBLIC_INDEXABLE=true em produção, gerar novo build, verificar canônicas/robots/sitemap e submeter sitemap no Search Console. Não alterar DNS nesta fase.

## Consentimento

Banner no fluxo da página, sem sobrepor WhatsApp ou sequestrar scroll. Aceitar e Recusar têm a mesma classe, tamanho, contraste e peso visual. Nenhum mapa carrega automaticamente; o clique explícito no botão do mapa autoriza e solicita o recurso. Recusar remove iframes presentes. Preferências de privacidade no rodapé permite alterar a decisão.

A única persistência adicionada é sessionStorage, chave smartlion-mapa-v1, escolha aceito/recusado, duração da sessão da aba. Se bloqueado, usa memória da página. Não há identificadores de usuário, analytics ou publicidade. Sem JS, não há mapa nem controles inoperantes, e endereço/rotas/WhatsApp continuam em HTML. Recusar não apaga cookies já criados pelo Google; isso está explicado na política.

Referência: guia de cookies da ANPD, sem afirmar que o banner sozinho garante conformidade integral:
https://www.gov.br/anpd/pt-br/centrais-de-conteudo/materiais-educativos-e-publicacoes/guia_orientativo_cookies_e_protecao_de_dados_pessoais

PENDENTE: controlador/responsável, contato específico, retenção, operadores e bases legais do atendimento, já com campos vazios na config e aviso DEV. Validar com a loja antes do lançamento público.
