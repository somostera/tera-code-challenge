'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Book extends Model {
  users_who_liked() {
    return this.belongsToMany('App/Models/User').pivotTable('books_users')
  }
}

module.exports = Book
