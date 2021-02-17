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
          _params.custom = {
            query: ` ${
              options.name ? " AND " : " WHERE "
            } ${new this.table().getColumn("stock")}  > 0`,
          };
          break;
        case "best":
          _params.custom = {
            query: ` ORDER BY coalesce(array_length(${new this.table().getColumn(
              "usersWhoLiked"
            )}, 1), 0) DESC`,
          };
          break;
        case "liked":
          _params.custom = {
            query: ` ${
              options.name ? " AND " : " WHERE "
            } 'Me' = ANY (${new this.table().getColumn("usersWhoLiked")})`,
          };

          break;
      }
    }

    return super.search(_options, _params);
  }

  async liked(id) {
    let book = await super.get(id);
    book.usersWhoLiked = book.usersWhoLiked || [];
    if (book.usersWhoLiked.find((user) => user == "Me")) {
      book.usersWhoLiked = book.usersWhoLiked.filter((user) => user != "Me");
    } else {
      book.usersWhoLiked.push("Me");
    }
    await super.update(book);
  }
}

module.exports = BookService;
