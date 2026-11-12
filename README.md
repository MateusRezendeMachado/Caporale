# Caporale Advogados — Landing Page

Landing page institucional desenvolvida para o escritório **Caporale Advogados**, localizado em Uberlândia/MG.

O projeto apresenta as áreas de atuação, o método de trabalho e a sócia fundadora, conduzindo o visitante de forma clara e intuitiva ao contato por meio de formulário ou WhatsApp.

---

## ✨ Destaques

- **Tema claro e escuro:** detecção automática da preferência do sistema operacional, com persistência da escolha do usuário no navegador.
- **Formulário de contato funcional:** envio direto de mensagens por e-mail utilizando um template HTML próprio via EmailJS, dispensando a necessidade de back-end.
- **Design responsivo (Mobile-First):** layout adaptado para diferentes tamanhos de tela, incluindo menu mobile acessível.
- **Identidade visual editorial:** combinação de tipografia serifada nos títulos, linhas finas e uso estratégico do laranja exclusivamente como cor de acento.
- **Acessibilidade:** suporte à navegação por teclado, indicadores de foco visível, rótulos associados aos campos de formulário e respeito à preferência `prefers-reduced-motion`.
- **SEO técnico:** configuração de metatags, Open Graph, dados estruturados (`LegalService`), `sitemap.xml` e `robots.txt`.
- **Microinterações:** animações discretas de entrada sincronizadas com a rolagem da página.

---

## 🛠️ Tecnologias

| Tecnologia | Utilização |
|---|---|
| React 18 | Biblioteca para construção da interface |
| Vite 5 | Ferramenta de build e desenvolvimento |
| CSS Modules | Estilização modular dos componentes |
| Variáveis CSS | Gerenciamento de cores e identidade visual |
| JavaScript (ES2020+) | Lógica e interatividade |
| EmailJS | Envio de mensagens por e-mail |

---

## 📌 Seções da página

- Início
- Áreas de atuação
- Outras áreas
- Método Caporale
- O escritório
- Dúvidas frequentes
- Contato

---

## 📁 Estrutura do projeto

```text
src/
├── components/   # Seções da página, cada uma com seu próprio CSS Module
├── dados/        # Textos e informações de contato, desacoplados do layout
├── hooks/        # Gerenciamento de tema claro/escuro e animações de entrada
└── styles/       # Variáveis de cor, tipografia e estilos globais
```

---

🔗 **Acesse o projeto:** 
## 👨‍💻 Autor

Desenvolvido por **Mateus Rezende**.
