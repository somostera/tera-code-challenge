'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/Auth')} Auth */

/**
 * Resourceful controller for interacting with books
 */

const Database = use('Database')
const Book = use('App/Models/Book')

class BookController {
  async index({ request, response, auth }) {
    let { page, limit, filter, order, query, liked, stock } = request.all()
    page = page ?? 1
    limit = limit ?? 10
    filter = filter ?? 'name'
    order = order ?? 'asc'

    let books = null

    if (query) {
      books = await Book.query()
        .with('users_who_liked')
        .where('name', 'like', `%${query}%`)
        .orWhere('category', 'like', `%${query}%`)
        .orderBy(filter, order)
        .paginate(page, limit)
    } else if (liked) {
      const curUser = await auth.getUser()

      const likedBooks = await Database.from('books_users')
        .where('user_id', curUser.id)
        .map(row => row.book_id)

      books = await Book.query()
        .with('users_who_liked')
        .whereIn('id', likedBooks)
        .orderBy(filter, order)
        .paginate(page, limit)
    } else if (stock) {
      books = await Book.query()
        .with('users_who_liked')
        .where('stock', '>', 0)
        .orderBy(filter, order)
        .paginate(page, limit)
    } else {
      books = await Book.query()
        .with('users_who_liked')
        .orderBy(filter, order)
        .paginate(page, limit)
    }

    return response.json({
      data: books,
      message: 'Ok',
    })
  }

  async show({ params, response }) {
    const book = await Book.query()
      .where('id', params.id)
      .with('users_who_liked')
      .first()
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

  async updateLikes({ params, request, response, auth }) {
    const curUser = await auth.getUser()
    let book = await Book.findOrFail(params.id)
    const { deslike } = request.all()

    if (deslike) {
      await book.users_who_liked().detach([curUser.id])

      const likes = await Database.from('books_users')
        .where('book_id', book.id)
        .count()

      book.likes = likes[0]['count(*)']

      book.save()
    } else {
      await book.users_who_liked().attach([curUser.id])

      const likes = await Database.from('books_users')
        .where('book_id', book.id)
        .count()

      book.likes = likes[0]['count(*)']

      book.save()
    }

    book = await Book.query()
      .where('id', book.id)
      .with('users_who_liked')
      .first()

    return response.json({ data: book, message: 'Updated!' })
  }
}

module.exports = BookController
