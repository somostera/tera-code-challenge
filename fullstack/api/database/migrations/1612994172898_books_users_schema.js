'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksUsersSchema extends Schema {
  up() {
    this.create('books_users', table => {
      table.increments()
      table.integer('book_id').unsigned()
      table.integer('user_id').unsigned()
      table.timestamps()

      table.foreign('book_id').references('books.id').onDelete('cascade')
      table.foreign('user_id').references('users.id').onDelete('cascade')
    })
  }

  down() {
    this.drop('books_users')
  }
}

module.exports = BooksUsersSchema
