//Libs/Services
import {useState, useMemo} from "react";
import cloneDeep from "lodash.clonedeep";
import useFetchBooks from "../main/hooks/useFetchBooks";
import HttpStatus from "../../utils/HttpStatus";
import StringUtils from "../../utils/StringUtils";
import Categories from "../../services/Categories";
//Components
import BookItem from "./components/bookItem/BookItem";
import Input from "../../components/input/Input";
import Slider from "../../components/slider/Slider";
import BookFilters from "./components/bookFilters/BookFilters";
//Styles
import './BookList.css';

export default function BookList(props) {

    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [booksStatus, setBooksStatus] = useState(HttpStatus.NOT_STARTED);

    //Extraindo as categorias dos livros para criar uma filtragem com melhor usabilidade
    const categories = useMemo(() => Categories.getUniqueCategoriesFromBooks(books), [books]);

    function filterBooksByName(event) {

        const bookName = event.target.value;

        //Copiando o array de livros para poder realizar filtragens sem quebrar a imutabilidade
        const allBooks = cloneDeep(books);

        if (bookName.length === 0 ) {
            setFilteredBooks(allBooks);
        } else {
            //Pesquisando pelo nome do livro ou nome do autor sem acentos
            const regex = new RegExp(StringUtils.removeAccents(bookName), 'gi');
            setFilteredBooks(allBooks.filter(book => {
                const bookNameWithoutAccents = StringUtils.removeAccents(book.name);
                const authorWithoutAccents = StringUtils.removeAccents(book.author);
                return regex.test(bookNameWithoutAccents) || regex.test(authorWithoutAccents)
            }));
        }
    }

    //Hook para buscar os livros da API
    useFetchBooks(setBooksStatus, setBooks, setFilteredBooks);

    return (
        <section className="BookList">
            <div className="BookList__search__filter__container">
                <Input onInput={filterBooksByName} placeholder="Pesquisa pelo nome ou autor"/>
                <Slider title="Filtros">
                    <BookFilters categories={categories} />
                </Slider>
            </div>
            {filteredBooks.map(book => <div key={book.id} className="BookList__item"><BookItem book={book}/></div>)}
        </section>
    )
}