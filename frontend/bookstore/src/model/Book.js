class Book {

    constructor(id, name, author, category, image, description, stock) {
        this.id = id;
        this.name = name;
        this.author = author;
        this.category = category;
        this.image = image;
        this.description = description;
        this.stock = stock;
        this.likes = 0;
    }
}

export default Book;