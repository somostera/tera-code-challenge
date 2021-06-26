import Book from "../model/Book";

const TeraApi = {
    getBooks: async function () {
        const response = await fetch(process.env.REACT_APP_BOOKSTORE_API_URL);
        const data = await response.json();

        //Criando um objeto tipado para facilitar a manipulação dos dados
        //Como a api não retorna um ID, foi usado o índice o array
        return data.map((obj, index) => new Book(
            index,
            obj.name,
            obj.author,
            obj.category,
            obj.cover_picture,
            obj.description,
            obj.stock
        ))
    }
}

export default TeraApi;