# Home — Fase 5

Ordem: hero, confiança, avaliações, destaques, categorias, assistência, consertar/trocar, parcelamento, Instagram, curso, loja, avaliação, rodapé; WhatsApp flutuante compartilhado. Um único modal atende os cards da home.

## Dados e limites da entrega

- Destaques e faixas usam a coleção filtrada da Fase 3. Limite de oito por faixa; não completamos artificialmente 6–8 destaques ou 4–8 produtos por categoria. Sem produtos confirmados, produção mostra consulta por categoria. Rascunhos permanecem exclusivos do desenvolvimento.
- Apple usa a rota existente ipad-mac-watch. Casa e games foi preservada conforme catálogo definido anteriormente.
- Foto da fachada não foi recebida. O bloco da loja usa a foto real do interior, com alt correto; loja.fotoFachada fica vazio. Substituir após recebimento.
- Instagram usa cinco fotos reais recebidas: capas, laboratório, bancada, fones e caixa de som. O sexto slot fica vazio, visível apenas em dev. URLs dos posts ficam vazias em loja.instagramPosts: as imagens levam ao perfil com rótulo Ver perfil, sem fingir que o link é de publicação. A contagem de seguidores não foi repetida como se fosse atual.
- Parcelamento 24x cartão e 36x boleto vem da §2/§8 (post de 16/07/2026); centralizado em loja.parcelamento. Boleto sempre com análise de crédito. A confirmação das condições vigentes continua pendente, sem taxas ou valores inventados.
- Linguagem IRP usa a descrição autorizada pela especificação; confirmação documental continua pendente. Não há logo Apple nem imagens de fabricantes adicionadas.
- Prazo de conserto é qualificado pela avaliação e peças, não promessa universal. Curso não inventa carga horária, certificado, datas, vagas ou renda.
- Consertar usa a mensagem literal de assistência; trocar de aparelho usa a geral, pois não temos os modelos e não há confirmação de usado na troca. Não usamos mensagemTroca sem autorização comercial. O formulário contextual com aparelho/problema poderá entrar na fase de páginas; nenhum placeholder fictício foi inserido nas mensagens.

## Mapa e privacidade

Endereço, coordenadas e horários vêm de loja.ts. Google Maps e Waze usam esses dados. O mapa embarcado não existe no HTML inicial. Carregar mapa do Google é um consentimento específico, informado e da mesma hierarquia visual que Continuar sem mapa. Nenhuma escolha é persistida; a cada nova carga, exige nova ação. Recusar remove o iframe existente e mantém os links. Isso não promete apagar cookies já criados pelo Google. Banner e política gerais continuam na Fase 8.

Sem JavaScript, endereço, tabela de horário, links de rota, links de produto e de WhatsApp continuam no HTML. Não há iframe do Instagram.

## Origem das fotos novas

Todos os arquivos foram fornecidos pelo usuário; sem geração ou compra de imagens:

| Destino em src/assets/home | Arquivo de origem (prefixo) |
|---|---|
| capas.jpg | SaveClip.App_706760307 |
| laboratorio.jpg | SaveClip.App_758863712 |
| bancada.jpg | SaveClip.App_760701313 |
| fones.jpg | SaveClip.App_783556075 |
| caixas-de-som.jpg | SaveClip.App_784773968 |

As imagens são processadas por astro:assets em AVIF/WebP, com dimensões e lazy loading. Somente hero tem fetchpriority high. Autorização geral de uso das mídias segue registrada nas pendências.
