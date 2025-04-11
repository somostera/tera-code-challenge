# Code Challenge 🚀

Este projeto foi desenvolvido como parte de um processo seletivo. O desafio consiste em construir uma aplicação web utilizando Next.js 15 com App Router, React Server Components, Server Actions, Tailwind CSS e gerenciamento de estado no cliente.

---

## 📷 Screenshots

1. Início:
   ![Home Page](https://i.ibb.co/PsLGk1JS/Captura-de-tela-2025-04-10-224613.png)

2. Detalhes:
   ![Course Details Page](https://i.ibb.co/bRg47yBT/Captura-de-tela-2025-04-10-224648.png)

---

## 🔗 Deploy

Acesse: [https://courses-nextjs-app.vercel.app/](https://courses-nextjs-app.vercel.app/)

---

## 🧠 Tecnologias Utilizadas

- **Next.js 15+** com **App Router**
- **React Server Components**
- **Server Actions**
- **Tailwind CSS v4**
- **Zustand**
- **TypeScript**
- **Framer Motion**
- **Cypress**
- **Jest**
- **Testing Library**

---

## 📚 Funcionalidades

### 1. Página Principal - Catálogo de Cursos

- SSR com React Server Components
- Lista de cursos renderizada dinamicamente a partir de dados filtrados retornados de uma Server Action
- Cada curso é exibido em um card com:
  - Título
  - Descrição curta
  - Categoria
  - Nível de dificuldade
  - Número de aulas
  - Total de horas

### 2. Filtros (Client-Side)

- Filtros por categoria e nível de dificuldade
- Estado gerenciado no cliente com Redux
- Filtragem dinâmica sem recarregar a página
- Filtros disponíveis na URL

### 3. Página de Detalhes

- Navegação para a página de detalhes ao clicar em um curso
- Exibição de:
  - Título
  - Descrição curta
  - Descrição completa
  - Categoria
  - Nível de dificuldade
  - Número total de aulas
  - Total de horas
  - Lista de módulos
  - Número de aulas por módulo
- Botão "Matricular" com Server Action
  - Exibição de mensagem de sucesso para o usuário após matrícula

### 4. Bônus

- Animações com Framer Motion para transições
- UI responsiva com Tailwind CSS
- Testes unitários com Jest e Testing Library
- Testes end-to-end com Cypress

---

## ⚙️ Como executar o projeto localmente

1. Clone este repositório:

   ```bash
   git clone https://github.com/romaopedro199/courses-nextjs-app.git
   cd courses-nextjs-app
   # Verifique se está na branch correta
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Configure o arquivo .env.local:

   ```bash
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

4. Execute o projeto:

   ```bash
   npm run dev
   ```

5. Acesse no navegador:
   http://localhost:3000

---

## ⚙️ Como executar os testes

1. Para executar os testes unitários:

   ```bash
   npm test
   ```

2. Para executar os testes end-to-end:

   ```bash
   # Executar o projeto
   npm run dev

   # Abrir a interface do Cypress
   npm run cypress
   ```

---

## ✅ Escolhas Técnicas e Justificativas

- Zustand foi escolhido pela familiaridade, escalabilidade e ótima integração Client Components sem depender de um provider.

- Tailwind v4 facilitou a construção rápida de uma interface responsiva e consistente.

- Framer Motion foi utilizado para melhorar a experiência do usuário com transições suaves.

- TypeScript foi adotado para garantir maior segurança, clareza e escalabilidade do código.

---

## 🧩 Desafios enfrentados e soluções

- Integração entre Server e Client Components: A separação clara entre RSC e Client Components exigiu atenção para não quebrar a renderização.

  - Solução: Organização da arquitetura de componentes e uso criterioso de "use client" somente onde necessário.

- Gerenciamento de filtros no client-side disponibilizando e consumindo os filtros na URL sem atualizar a página a cada alteração.
  - Solução: Ao alterar um filtro, o estado no lado cliente e os query params da URL são atualizados, assim atualizando apenas o componente da lista de cursos sem fazer refresh na página, permitindo também o compartilhamento da URL com os filtros pré-aplicados.

---

## 🧼 Boas práticas aplicadas

- Estrutura de pastas e componentes com separação de responsabilidades

- Uso de TypeScript com tipagem estrita

- Código limpo e reutilizável

- Divisão clara entre lógica de servidor e cliente

---

## 📦 Dados utilizados

O catálogo de cursos foi carregado a partir do JSON fornecido no desafio.

---

## 👨‍💻 Autor

Desenvolvido por [João Pedro Romão](https://www.linkedin.com/in/pedro-rom%C3%A3o/)
