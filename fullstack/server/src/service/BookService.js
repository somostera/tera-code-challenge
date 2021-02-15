const Service = require("./Service");
const BookRepository = require("../repository/BookRepository");
const Book = require("../model/Book");

class BookService extends Service {
  constructor() {
    super(BookRepository, Book);
  }
}

module.exports = BookService;
