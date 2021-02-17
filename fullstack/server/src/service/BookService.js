const Service = require("./Service");
const BookRepository = require("../repository/BookRepository");
const Book = require("../model/Book");
const utils = require("../utils/utils");

class BookService extends Service {
  constructor() {
    super(BookRepository, Book);
  }

  async search(options) {
    let _options = {};
    let _params = { useLike: "name" };

    if (utils.defined(options.name)) {
      _options.name = options.name + "%";
      _params.useLike = { name: true };
    }

    if (utils.defined(options.filter)) {
      switch (options.filter) {
        case "asc":
          _params.custom = {
            query: ` ORDER BY ${new this.table().getColumn("name")} ASC`,
          };
          break;
        case "inStock":
          break;
        case "best":
          _params.custom = {
            query: ` ORDER BY ${new this.table().getColumn("name")} ASC`,
          };
          break;
        case "liked":
          break;
      }
    }

    return super.search(_options, _params);
  }
}

module.exports = BookService;
