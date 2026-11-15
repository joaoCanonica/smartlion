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
