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
