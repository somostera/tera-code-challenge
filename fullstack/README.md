# ✨ Tera Code Challenge - Fullstack ✨

## Descrição do Projeto
<p align="center">API do desafio proposto pela Tera Code Challenge </p>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [Node.js](https://nodejs.org/en/)


# 🎲 Rodando o Back End no Desenvolvimento (servidor)

## Instale as dependências
$ npm install

## Execute a aplicação em modo de desenvolvimento
$ node src/server 

ou

$ npm start

## O servidor iniciará na porta:3000 - acesse <http://localhost:3000> 

# 🎲 Hospedagem da API ( Heroku )

https://backend-tera.herokuapp.com/

# Rotas

**Mostrar livros**
----
  Retorna um json com os livros

* **URL**
	/books

* **Method:**
	`GET`
  
*  **URL Params**
	None`

* **Data Params**
	None
	
**Cadastrar livro**
----
  Cria um novo livro

* **URL**
	/books

* **Method:**
	`POST`
  
*  **URL Params**
	Nenhum

* **Data Params**
	name = [string]
	author = [string]
	description = [string]
	cover_picture = [string]
	category = [string]
	stock = [number]

**Atualizar Livro**
----
	Atualizar livro existente ou adicionar usuários na lista de likes

* **URL**
	/books/:id

* **Method:**
	`PUT`
  
*  **URL Params**
	id=[integer]

* **Data Params**
	Nenhum
	

**Deletar Livro**
----
  Deletar um livro existente

* **URL**
	/books/:id

* **Method:**
	`DELETE`
  
*  **URL Params**
	id=[integer]

* **Data Params**
	Nenhum
	
**Mostrar categorias**
----
  Retorna um json com as categorias

* **URL**
	/categories

* **Method:**
	`GET`
  
*  **URL Params**
	None`

* **Data Params**
	None
	
**Buscar livro por nome**
----
  Retorna um livro 

* **URL**
	/books/:name

* **Method:**
	`GET`
  
*  **URL Params**
	name = [string]

* **Data Params**
	None
	
	
	

	





