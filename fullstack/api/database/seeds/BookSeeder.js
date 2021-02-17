'use strict'

const Book = use('App/Models/Book')
const fs = require('fs')
const books = JSON.parse(fs.readFileSync('../db.json', 'utf8'))

class BookSeeder {
  async run() {
    books.forEach(async book => {
      const { name, author, description, cover_picture, category, stock } = book
      const bookModel = await Book.create({
        name,
        author,
        description,
        cover_picture,
        category,
        stock,
      })
    })
  }
}

module.exports = BookSeeder
