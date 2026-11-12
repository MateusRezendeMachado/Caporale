# Caporale Advogados — landing page

Landing page institucional em React + Vite, com tema claro/escuro e formulário de contato via EmailJS.

## Rodar o projeto

```bash
npm install
npm run dev      # ambiente de desenvolvimento
npm run build    # gera a pasta dist/ para publicação
```

## Configurar o EmailJS

1. Crie a conta em https://dashboard.emailjs.com e adicione um **Email Service** (Outlook, Gmail etc.).
2. Crie um **Email Template**, abra o editor de código e cole o conteúdo de `email-template/contato.html`.
   - Subject: `Novo contato pelo site — {{nome}}`
   - To Email: e-mail que receberá as mensagens
   - Reply To: `{{email}}`
3. Copie `.env.example` para `.env` e preencha:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
```

4. Reinicie o `npm run dev`. No Netlify, cadastre as mesmas três variáveis em
   *Site settings → Environment variables*.

Recomendado no painel do EmailJS: em *Account → Security*, restrinja o envio ao domínio do site.

Variáveis enviadas ao template: `nome`, `email`, `telefone`, `telefone_numeros`, `assunto`, `mensagem`, `data`.

## Onde editar

| O quê | Arquivo |
| --- | --- |
| Telefones, endereço, horário, redes | `src/dados/escritorio.js` |
| Textos das seções, áreas, FAQ | `src/dados/conteudo.js` |
| Cores e tipografia (temas) | `src/styles/global.css` |
| Imagens e logotipo | `public/img/` |
