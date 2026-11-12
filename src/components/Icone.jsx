// Ícones de linha fina, desenhados para o projeto (sem dependências externas).
const caminhos = {
  sol: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  lua: <path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z" />,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  fechar: <path d="M6 6l12 12M18 6 6 18" />,
  seta: <path d="M5 12h14M13 6l6 6-6 6" />,
  setaCima: <path d="M12 19V5M6 11l6-6 6 6" />,
  mais: <path d="M12 5v14M5 12h14" />,
  telefone: (
    <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" />
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  local: (
    <>
      <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.500C5 14.800 12 21 12 21Z" />
      <circle cx="12" cy="9.500" r="2.500" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  check: <path d="m5 12.500 4.500 4.500L19 7.500" />,
  instagram: (
    <>
      <rect x="3.500" y="3.500" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.200" cy="6.800" r="0.600" fill="currentColor" />
    </>
  ),
  linkedin: (
    <>
      <rect x="3.500" y="3.500" width="17" height="17" rx="3" />
      <path d="M8 10.500V16M8 7.800v.1M12 16v-5.500M12 13a2.200 2.200 0 0 1 4.400 0v3" />
    </>
  ),
  facebook: (
    <>
      <rect x="3.500" y="3.500" width="17" height="17" rx="3" />
      <path d="M13 20.500V12h2.500l.5-3H13V7.500c0-.9.4-1.500 1.500-1.500H16" />
    </>
  ),
}

export default function Icone({ nome, tamanho = 20, ...resto }) {
  if (nome === 'whatsapp') {
    return (
      <svg width={tamanho} height={tamanho} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...resto}>
        <path d="M12 2a10 10 0 0 0-8.600 15.100L2 22l5-1.300A10 10 0 1 0 12 2Zm0 1.800a8.200 8.200 0 1 1-4.200 15.300l-.300-.200-3 .800.800-2.900-.200-.300A8.200 8.200 0 0 1 12 3.800Zm-3.500 4c-.200 0-.500.100-.700.400-.300.300-1 1-1 2.300 0 1.400 1 2.700 1.100 2.900.200.200 2 3.100 4.900 4.300 2.400.900 2.900.800 3.400.700.500 0 1.700-.700 1.900-1.300.200-.700.200-1.200.200-1.300-.100-.200-.300-.200-.600-.400l-1.900-.900c-.300-.100-.500-.100-.700.200l-.900 1.100c-.100.200-.300.200-.600.100-.300-.200-1.200-.500-2.300-1.400-.800-.800-1.400-1.700-1.600-2-.100-.300 0-.400.200-.600l.400-.500.300-.500v-.500L9.700 8.400c-.200-.500-.400-.600-.600-.600h-.600Z" />
      </svg>
    )
  }

  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...resto}
    >
      {caminhos[nome]}
    </svg>
  )
}
