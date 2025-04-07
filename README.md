---

# 📚 Catálogo de Cursos - Next.js

Projeto desenvolvido com **Next.js 15** que exibe um catálogo de cursos com filtros, visualização de detalhes e interações modernas com animações.

## 🚀 Tecnologias Utilizadas

- **Next.js 15**: Framework React com suporte a SSR e Server Actions.
- **React 19**: Biblioteca base para construção da interface.
- **Tailwind CSS**: Utilizado para estilização rápida e responsiva.
- **Framer Motion**: Utilizado para animações e transições (bônus).
- **React Loading Skeleton**: Feedback visual enquanto os dados carregam.
- **TypeScript**: Tipagem estática para maior robustez.
- **Cypress**: Testes E2E.
- **ESLint + Husky**: Padronização e qualidade de código.

---

## 🧩 Funcionalidades

### 1. Página Principal - Catálogo de Cursos
- Renderizada com **SSR (Server-Side Rendering)**.
- Dados carregados de um arquivo **JSON**.
- Cursos exibidos em **cards** com:
  - Título
  - Descrição curta
  - Categoria
  - Nível de dificuldade

### 2. Filtros Dinâmicos (Client-side)
- Filtragem por:
  - Categoria
  - Nível de dificuldade (iniciante, intermediário, avançado)
- Estado gerenciado no **client-side**.
- Atualização sem recarregar a página.

### 3. Página de Detalhes do Curso
- Ao clicar em um curso, exibe:
  - Todas as informações completas
  - Lista de módulos
  - Botão de **“Matricular-se”** que chama uma `Server Action`.

### 4. (Bônus) Animações com Framer Motion
- Transições suaves e responsivas entre páginas e elementos.

---

## 🛠️ Como Rodar o Projeto

### Pré-requisitos

- Node.js 18+
- npm ou yarn

### Passos para rodar localmente

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-projeto.git
cd seu-projeto

# Instale as dependências
npm install
# ou
yarn install

# Rode o projeto em modo de desenvolvimento
npm run dev
# ou
yarn dev
```

O projeto estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes

Este projeto utiliza **Cypress** para testes end-to-end.

```bash
# Para abrir a interface do Cypress
npx cypress open
```

---

## 📁 Estrutura de Pastas

```bash
├── app/
│   ├── page.tsx               # Página principal
│   ├── courses/[id]/page.tsx   # Página de detalhes
├── components/               # Componentes reutilizáveis
├── public/                   # Arquivos públicos
└── actions/                  # Server Actions
├── context/                  # Contexts
└── types/                  # Types
```