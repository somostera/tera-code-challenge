const Model = require("@schirrel/pg-connection/Model");
class Book extends Model {
  constructor(args = {}, fromDatabase) {
    super("BOOKSSS");
    this.addColumn("name", "NAME")
      .addColumn("author", "AUTHOR")
      .addColumn("description", "DESCRIPTION")
      .addColumn("coverPicture", "COVER_PICTURE")
      .addColumn("category", "CATEGORY")
      .addColumn("stock", "STOCK")
      .addColumn("usersWhoLiked", "USER_WHO_LIKED");
    this.setValues(args, fromDatabase);
  }
}

module.exports = Book;
