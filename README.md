---

# 📚 Catálogo de Cursos - Next.js

Projeto desenvolvido com **Next.js 15**, que exibe um catálogo de cursos com filtros dinâmicos, visualização de detalhes e interações modernas com animações.

🔗 **Acesse o site online:**  
👉 [https://tera-code-challenge.vercel.app/](https://tera-code-challenge.vercel.app/)

---

## 🚀 Tecnologias Utilizadas

- **Next.js 15** — Framework React com suporte a SSR e Server Actions.  
- **React 19** — Biblioteca base para construção da interface.  
- **Tailwind CSS** — Estilização rápida, moderna e responsiva.  
- **Framer Motion** — Animações e transições fluidas (bônus).  
- **React Loading Skeleton** — Feedback visual durante o carregamento.  
- **TypeScript** — Tipagem estática para maior robustez.  
- **Cypress** — Testes end-to-end.  
- **ESLint + Husky** — Padronização e qualidade de código.

---

## 🧩 Funcionalidades

### 1. Página Principal — Catálogo de Cursos
- Renderização via **SSR (Server-Side Rendering)**.
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
- Ao clicar em um curso, são exibidas:
  - Informações completas  
  - Lista de módulos  
  - Botão **“Matricular-se”** que aciona uma `Server Action`.

### 4. (Bônus) Animações com Framer Motion
- Transições suaves entre páginas e elementos.

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

A aplicação estará disponível em: [http://localhost:3000](http://localhost:3000)

---

## 🧪 Testes

O projeto utiliza **Cypress** para testes end-to-end.

```bash
# Para abrir a interface do Cypress
npx cypress open
```

---

## 📁 Estrutura de Pastas

```bash
├── app/
│   ├── page.tsx                 # Página principal
│   └── courses/[id]/page.tsx    # Página de detalhes do curso
├── components/                  # Componentes reutilizáveis
├── public/                      # Arquivos públicos
├── actions/                     # Server Actions
├── context/                     # Context API
└── types/                       # Tipagens TypeScript
```

---
