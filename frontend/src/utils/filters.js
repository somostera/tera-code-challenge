String.prototype.slugify = function() {
    return this.toLowerCase()
        .replace(/\s/g, '-')
        .trim()
}

export default {
    filterByName: (books, name) => {
        return books.filter(book => {
            return book.name.slugify().includes(name.slugify())
        })
    },
    filterByCategory: (books, category) => {
        return books.filter(book => {
            return book.category.slugify().includes(category.slugify())
        })
    },
}
