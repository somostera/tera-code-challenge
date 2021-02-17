const express = require('express');
const bodyParser = require('body-parser')
const cors = require('./config/cors')

const BookController = require('./app/controllers/BookController');

const routes = new express.Router()

//cors

routes.use(cors());

//bodyParser

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

/// rotas


routes.get('/books', BookController.index)
routes.get('/categories', BookController.getCategory);
routes.get('/books/:name', BookController.getBookByTitle)
routes.get('/books/users/:name', BookController.getUsersNames)

routes.post('/books', BookController.create)
routes.put('/books/:id', BookController.update)
routes.delete('/books/:id', BookController.destroy)


module.exports = routes