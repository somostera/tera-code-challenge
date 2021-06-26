const Categories = {
    /**
     * @param {Book[]} books
     * @returns {String[]}
     */
    getUniqueCategoriesFromBooks: function (books) {
        //Um Set é um conjunto de valores únicos
        return [...new Set(books.map(book => book.category))]
    }
}

export default Categories;