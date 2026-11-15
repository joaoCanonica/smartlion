import { loja,enderecoCompleto } from '../config/loja';
import { formatarPeriodos } from '../lib/horario';
export const perguntas = [
 {pergunta:'Dá para comprar pelo site?',resposta:'O site é um catálogo sob consulta. Para saber disponibilidade, versões, cores, valor e condições, fale com a equipe pelo WhatsApp. Não há carrinho ou pagamento online.'},
 {pergunta:'Onde fica a loja?',resposta:`Na ${enderecoCompleto}. A página Visite-nos reúne horários e links de rota.`},
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
