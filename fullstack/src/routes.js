const express = require('express');
const bodyParser = require('body-parser')

const UserController = require('./app/controllers/UserController');
const AuthController = require('./app/controllers/AuthController');
const BookController = require('./app/controllers/BookController');

const auth = require('./app/middlewares/auth');


const routes = new express.Router()

routes.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);


    next();
});

routes.use(bodyParser.urlencoded({ extended: true }))
routes.use(bodyParser.json())

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