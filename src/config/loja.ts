import type { PessoaEquipe } from '../lib/historia';
import type { Agenda } from '../lib/horario';

export const loja = {
  nome: 'Smart Lion',
  endereco: { rua: 'Rua Hercílio Luz', numero: '364', bairro: 'Centro', cidade: 'Lages', uf: 'SC', cep: '88501-010' },
  telefone: { numero: '+5549998182996', exibicao: '(49) 99818-2996' },
  whatsapp: { numero: '5549999268930', exibicao: '(49) 99926-8930' },
  instagram: { nome: '@smartlion.sc', url: 'https://www.instagram.com/smartlion.sc/', seguidoresExibicao: '10,5 mil', seguidoresEm: '2026-10-28' },
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
  historia: { fundacao: '', fundadores: [] as string[] },
  equipe: [] as PessoaEquipe[],
  ambientes: { fotoVitrineIphones: '', fotoAtendimento: '', entradaAcessivel: true, fonteAcessibilidade: 'Google Maps, aba Sobre, consultada em 28/10/2026' },
  instagramPosts: [
    { imagem: 'capas', url: '' }, { imagem: 'laboratorio', url: '' },
    { imagem: 'bancada', url: '' }, { imagem: 'fones', url: '' },
    { imagem: 'caixas-de-som', url: '' }, { imagem: '', url: '' },
  ],
  curso: { cargaHoraria: '', conteudo: '', proximaTurma: '', certificado: '' },
} as const;
export const enderecoCompleto = `${loja.endereco.rua}, ${loja.endereco.numero} · ${loja.endereco.bairro}, ${loja.endereco.cidade}/${loja.endereco.uf}`;
