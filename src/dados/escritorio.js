// Dados institucionais do escritório — fonte única para todo o site.
// Qualquer alteração de telefone, endereço ou horário é feita apenas aqui.

const WHATSAPP_NUMERO = '5534998922012'
const WHATSAPP_MENSAGEM = 'Olá! Encontrei o site do Caporale Advogados e gostaria de mais informações.'

export const escritorio = {
  nome: 'Caporale Advogados',
  razaoSocial: 'Alexandra Caporale da Silva Sociedade Individual de Advocacia',
  cnpj: '45.187.851/0001-23',
  responsavel: 'Dra. Alexandra Caporale',
  oab: 'OAB/MG 176.368',

  endereco: {
    linha1: 'R. dos Pardais, 195 - Cidade Jardim',
    linha2: 'Uberlândia - MG, 38412-108',
  },
  mapaLink: 'https://www.google.com/maps/search/?api=1&query=Caporale+Advogados+Uberl%C3%A2ndia',
  mapaEmbed:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.8635374306423!2d-48.292737452821456!3d-18.939510347557835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94a445e281327661%3A0x6cbbf5ccfac50055!2sCaporale%20Advogados%20Uberl%C3%A2ndia!5e0!3m2!1spt-BR!2sbr',

  telefone: { exibicao: '(34) 3254-5913', link: 'tel:+553432545913' },
  whatsapp: {
    exibicao: '(34) 99892-2012',
    link: `https://wa.me/${WHATSAPP_NUMERO}?text=${encodeURIComponent(WHATSAPP_MENSAGEM)}`,
  },
  email: 'caporale.alexandra.adv@outlook.com',

  // TODO: confirmar com o escritório os dias e o horário de abertura.
  horario: 'Segunda a sexta · atendimento até 17h30',
  atendimento: 'Presencial em Uberlândia e online em todo o Brasil',

  redes: {
    instagram: 'https://www.instagram.com/alexandracaporaleadvogada/',
    linkedin: 'https://www.linkedin.com/in/alexandra-caporale-4a0a51141/',
    facebook: 'https://www.facebook.com/alexandra.caporale.7',
  },
}

export const navegacao = [
  { rotulo: 'Atuação', alvo: '#atuacao' },
  { rotulo: 'Método', alvo: '#metodo' },
  { rotulo: 'O escritório', alvo: '#escritorio' },
  { rotulo: 'Dúvidas', alvo: '#faq' },
  { rotulo: 'Contato', alvo: '#contato' },
]
