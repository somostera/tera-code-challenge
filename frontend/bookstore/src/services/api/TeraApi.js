import cloneDeep from "lodash.clonedeep";
import Book from "../../model/Book";

let bookCache = [];

/**
 * Serviço com métodos para manipular os livros da API
 *
 * Teoricamente deveria ser feito em um backend, mas para efeitos de demonstração é feito em memória
 * @type {{getBooks: ((function(): Promise<Book[]>)|*), getBook: ((function((int|string)): Promise<Book|null>)|*), saveBookList: TeraApi.saveBookList, updateBook: TeraApi.updateBook}}
 */
const TeraApi = {
    /**
     * @return {Promise<Book[]>}
     */
    getBooks: async function () {

        if (bookCache.length) return bookCache;

        const response = await fetch(process.env.REACT_APP_BOOKSTORE_API_URL);
        const data = await response.json();

        //Criando um objeto tipado para facilitar a manipulação dos dados
        //Como a api não retorna um ID, foi usado o índice o array
        let bookList = data.map((obj, index) => new Book(
            index,
            obj.name,
            obj.author,
            obj.category,
            obj.cover_picture,
            obj.description,
            obj.stock,
            Array.isArray(obj.users_who_liked) ? obj.users_who_liked.length : 0
        ));

        bookCache = cloneDeep(bookList);

        return bookList;
    },

    /**
     * Busca um livro pelo id
     * @param {int|string} id
     * @return {Promise<Book|null>}
     */
    getBook: async function (id) {
        if (typeof id === 'string') {
            id = parseInt(id);
        }
        const books = await this.getBooks();
        const book = books.find(book => book.id === id);
        if (book !== undefined) return book;
        return null;
    },

    /**
     * Salva a lista de livros no cache
     * @param {Book[]} bookList
     */
    saveBookList: function (bookList) {
        bookCache = cloneDeep(bookList);
    },

    /**
     * Atualiza o livro no cache
     * @param {Book} book
     */
    updateBook: function (book) {
        const updatedBook = cloneDeep(book);
        for (let i = 0; i < bookCache.length; i++) {
            let currentBook = bookCache[i];
            if (currentBook.id === updatedBook.id) {
                bookCache[i] = updatedBook;
                break;
            }
        }
    }
}

export default TeraApi;