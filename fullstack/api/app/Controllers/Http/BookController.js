'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */

/**
 * Resourceful controller for interacting with books
 */

const Book = use('App/Models/Book')

class BookController {
  async index({ request, response }) {
    const { page, limit, order } = request.all()
    const books = await Book.query()
      .with('users_who_liked')
      .orderBy('name', order ?? 'asc')
      .paginate(page ?? 1, limit ?? 10)

    return response.json({
      data: books,
      message: 'Ok',
    })
  }

  async show({ params, response }) {
    const book = await Book.query()
      .where('id', params.id)
      .with('users_who_liked')
      .fetch()
    return response.json({ data: book, message: 'Ok' })
  }

  async store({ request, response }) {
    let attributes = request.all()
    const book = await Book.create(attributes)
    return response.json({ data: book, message: 'Created!' })
  }

  async update({ params, request, response }) {
    const book = await Book.findOrFail(params.id)
    book.merge(request.all())
    book.save()
    return response.json({ data: book, message: 'Updated!' })
  }

  async destroy({ params, response }) {
    const book = await Book.findOrFail(params.id)
    await book.delete()
    return response.json({
      message: 'Deleted!',
    })
  }
}

module.exports = BookController
