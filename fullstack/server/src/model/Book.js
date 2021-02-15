const Model = require("@schirrel/pg-connection/Model");
class Book extends Model {
  constructor(args = {}, fromDatabase) {
    super("BOOK");
    this.addColumn("name")
      .addColumn("author")
      .addColumn("description")
      .addColumn("cover_picture")
      .addColumn("category")
      .addColumn("stock");
    this.setValues(args, fromDatabase);
  }
}

module.exports = Book;
