Caporale Advogados — Landing page
Landing page institucional desenvolvida para o escritório Caporale Advogados, de Uberlândia/MG. O projeto apresenta as áreas de atuação, o método de trabalho e a sócia fundadora, e leva o visitante ao contato por formulário ou WhatsApp.

Destaques
Tema claro e escuro, com detecção da preferência do sistema e escolha salva no navegador
Formulário de contato funcional: as mensagens chegam por e-mail em um template HTML próprio, via EmailJS, sem back-end
Layout responsivo, pensado primeiro para o celular, com menu mobile acessível
Identidade visual editorial: tipografia serifada nos títulos, linhas finas e laranja apenas como cor de acento
Acessibilidade: navegação por teclado, foco visível, rótulos nos campos e respeito a prefers-reduced-motion
SEO técnico: metatags, Open Graph, dados estruturados (LegalService), sitemap.xml e robots.txt
Animações discretas de entrada ao rolar a página
Tecnologias
React 18
Vite 5
CSS Modules e variáveis CSS
JavaScript (ES2020+)
EmailJS
Seções
Início · Áreas de atuação · Outras áreas · Método Caporale · O escritório · Dúvidas frequentes · Contato

Como rodar
npm install
npm run dev
Para o formulário enviar e-mails, copie .env.example para .env e preencha com as chaves de uma conta no EmailJS. O template do e-mail está em email-template/contato.html.

Estrutura
src/
├── components/   Seções da página, cada uma com seu CSS Module
├── dados/        Textos e dados de contato, separados do layout
├── hooks/        Tema claro/escuro e animação de entrada
└── styles/       Variáveis de cor e estilos globais
Autor
Desenvolvido por Mateus Rezende.
