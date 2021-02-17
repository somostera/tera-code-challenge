const Model = require("@schirrel/pg-connection/Model");
class Book extends Model {
  constructor(args = {}, fromDatabase) {
    super("BOOKS");
    this.addColumn("name", "NAME")
      .addColumn("author", "AUTHOR")
      .addColumn("description", "DESCRIPTION")
      .addColumn("coverPicture", "COVER_PICTURE")
      .addColumn("category", "CATEGORY")
      .addColumn("stock", "STOCK")
      .addColumn("usersWhoLiked", "USERS_WHO_LIKED");
    this.setValues(args, fromDatabase);
  }
  get liked() {
    //FAKE TO SEE IT ITS LIKED BY THE USER
    return !!this.usersWhoLiked.find((user) => user == "Me");
  }
  toJSON() {
    let json = super.toJSON();
    json.liked = this.liked;
    return json;
  }
}

module.exports = Book;
