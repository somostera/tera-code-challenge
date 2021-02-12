'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class BooksSchema extends Schema {
  up() {
    this.create('books', table => {
      table.increments()
      table.string('name')
      table.string('author')
      table.string('description')
      table.string('cover_picture')
      table.string('category')
      table.integer('stock')
      table.integer('likes')
      table.timestamps()
    })
  }

  down() {
    this.drop('books')
  }
}

module.exports = BooksSchema
