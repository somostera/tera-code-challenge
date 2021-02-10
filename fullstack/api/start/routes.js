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
  Route.post('/login', 'AuthenticationControllerh.login')
  Route.get('/users', 'AuthenticationControllerh.index').middleware('auth')
  Route.get('/user', 'AuthenticationControllerh.user').middleware('auth')
  Route.put('/user', 'AuthenticationControllerh.update').middleware('auth')
  Route.post('/user', 'AuthenticationControllerh.register')
}).prefix('/api/v1')
