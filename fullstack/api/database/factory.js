'use strict'

/*
|--------------------------------------------------------------------------
| Factory
|--------------------------------------------------------------------------
|
| Factories are used to define blueprints for database tables or Lucid
| models. Later you can use these blueprints to seed your database
| with dummy data.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

Factory.blueprint('App/Models/User', faker => {
  const name = faker.name({ nationality: 'it' })
  const username = name.split(' ')[1].toLowerCase()
  const email = username.toLowerCase().split(' ').join('.') + '@email.com'

  return {
    username,
    name,
    email,
    password: '123456',
  }
})
