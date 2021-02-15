const express = require('express');
const bodyParser = require('body-parser')
const cors = require('./config/cors')

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');
const BookController = require('./app/controllers/BookController');

//const auth = require('./app/middlewares/auth');
const routes = new express.Router()

//cors

routes.use(cors());

//bodyParser

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

/// rotas

routes.post('/auth', AuthController.store)
routes.post('/users', UserController.store);

// Middleware de autenticação
//routes.use(auth);

routes.get('/books', BookController.index)
routes.get('/categories', BookController.getCategory);
routes.get('/books/:name', BookController.getBookByTitle)
routes.post('/books', BookController.create)
routes.put('/books/:id', BookController.update)
routes.delete('/books/:id', BookController.destroy)

routes.get('/users', UserController.index);
routes.get('/users/:id', UserController.show);


module.exports = routes