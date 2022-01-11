# Desafio Tera Code Challenge - Frontend


<div align="center">

<a href="https://www.linkedin.com/in/lucas-barque/">
<img height="22" alt="LinkedIn" src="https://img.shields.io/badge/linkedin%20-%230077B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white"/>
</a>

<a href="mailto:lucasbarquesilva@gmail.com">
<img height="22" alt="Gmail" src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white" />
</a>

<a href="https://www.instagram.com/lucasbarque/">
<img height="22" alt="Instagram" src="https://img.shields.io/badge/INSTAGRAM%20-%23E4405F.svg?&style=for-the-badge&logo=Instagram&logoColor=white"/>
</a>
  
  <img src="https://i.ibb.co/B2x2w0H/Layout.png" style="max-width:100%;" />
</div>

## Desafio

Olá, bora pro desafio? :dancers:

O nosso desafio proposto é uma aplicação de uma livraria, com o design da aplicação que mandamos no email.

Vou separar a explicação em partes pra ficar mais fácil: **Integração**, **Funcionalidades do App**, **Funcionalidades por página**, **Avaliação** e **Como entregar**.


## Integração

Liberamos uma API para que você possa consumir e ter acesso aos livros

[https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge](https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge)

Ela só aceita GET e retorna um Array de objetos, esse é o schema do objeto:

```
{
  "name": String,
  "author": String,
  "description": String, 
  "cover_picture": String,
  "category": String,
  "stock": Integer,
  "users_who_liked": Array<String>
}
```

## Funcionalidades do App


Dark Mode, clicável ali na Navbar.

Curtir, o gerenciamento desse estado deve ser feito localmente.


## Funcionalidades por Página


Temos só duas páginas neste desafio, página de Listagem, a de Descrição.


### Página de Listagem

Na tela de listagem temos as seguintes funcionalidades:

- Listagem dos Livros
- Pesquisa por Nome
- Filtros de pesquisa:
  - Melhores Avaliados (Com mais curtir)
  - Em estoque
  - Ordem Alfabética
  - Livros curtidos (Os que você deu curtir)
  - Por categoria* (abre outro input para pesquisar por nome da categoria)
- Páginação da listagem
- Curtir um livro (clique no coração)


### Página de Descrição

Na tela de descrição temos as seguintes funcionalidades:

- Botão de Voltar
- Curtir um livro (clique no coração)


## Avaliação

A avaliação vai ser feita no todo do que for entregue, mas existem alguns pontos que vão chamar mais atenção.

- Componentização
  - A maneira em que as peças do sistema foram pensadas e abstraidas.
- Organização do código
  - Como você pensou e organizou seu código, desde a estrutura das pastas até o código escrito.
- Resiliência da aplicação
  - Não importa até onde você conseguiu chegar, o que importa é que o seu entregavel esteja funcionando sem quebrar e com qualidade.

Apreciamos também:

- Transições
- Fidelidade com o Design proposto

## Como entregar

Pedimos para que você crie um Fork desse repositório e faça um pull request com o código e com um README.md descrevendo como rodar o projeto

Desejamos boa sorte, e muito obrigado!


## Como executar 😉
Siga os passos abaixo e vamos lá:

1- No terminal, clone o projeto:<br>
$ git clone https://github.com/lucasbarque/tera-code-challenge.git

2- Entre na pasta do projeto:<br>
$ cd tera-code-challenge/frontend

3- Instale as dependências:<br>
$ npm install

4- Execute a aplicação 🚀:<br>
$ npm run serve

5- Execute a aplicação 🚀:<br>
Abra seu navegador e digite: http://localhost:8080/


