'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Books api' }
})

Route.group(() => {
  /* auth */
  Route.post('/login', 'AuthenticationController.login')
  Route.get('/users', 'AuthenticationController.index').middleware('auth')
  Route.get('/user', 'AuthenticationController.user').middleware('auth')
  Route.put('/user', 'AuthenticationController.update').middleware('auth')
  Route.post('/user', 'AuthenticationController.register')

  /* books */
  Route.get('/books/:id', 'BookController.show').middleware('auth')
  Route.get('/books', 'BookController.index').middleware('auth')
  Route.post('/books', 'BookController.store').middleware('auth')
  Route.put('/books/:id', 'BookController.update').middleware('auth')
  Route.delete('/books/:id', 'BookController.destroy').middleware('auth')
}).prefix('/api/v1')
