//Libs/Services
import {useState, useMemo} from "react";
import useFetchBooks from "../main/hooks/useFetchBooks";
import useFilterBooks from "../main/hooks/useFilterBooks";
import HttpStatus from "../../utils/HttpStatus";
import CategoryService from "../../services/category/CategoryService";
import cloneDeep from "lodash.clonedeep";
//Components
import BookItem from "./components/bookItem/BookItem";
import Input from "../../components/input/Input";
import Slider from "../../components/slider/Slider";
import BookFilters from "./components/bookFilters/BookFilters";
import Tag from "../../components/tag/Tag";
import Icon from "../../components/icon/Icon";
//Styles
import './BookList.css';


function FilterButtonText(props) {

    let activeFiltersLength = Object.keys(props.activeFilters).length;

    //Desconsiderando o filtro por nome da contagem
    if (props.activeFilters.searchTerm !== undefined) activeFiltersLength -= 1;

    return <span className="BookList__slider_text_container">
        {activeFiltersLength > 0
            ? <Tag>{activeFiltersLength}</Tag>
            : <Tag><Icon type="filter_alt"/></Tag>}
        <span className="BookList__slider_text">Filtros</span></span>
}

export default function BookList(props) {

    const [books, setBooks] = useState([]);
    const [filteredBooks, setFilteredBooks] = useState([]);
    const [booksStatus, setBooksStatus] = useState(HttpStatus.NOT_STARTED);
    const [sliderActive, setSliderActive] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});

    //Extraindo as categorias dos livros para criar uma filtragem com melhor usabilidade
    const categories = useMemo(() => CategoryService.getUniqueCategoriesFromBooks(books), [books]);

    /**
     * @param {Object} filters
     */
    function applyFilters(filters) {
        //Fecha o Slider ao aplicar/resetar os filtros
        setSliderActive(false);

        //Checando se algum filtro foi informado
        if (Object.keys(filters).length)
            setActiveFilters(prevFilters => ({...prevFilters, ...filters}));

        //Caso contrário sete os filtros ativos para em branco
        else {
            let newActiveFilters = {};
            //Mantenha o filtro por nome ativo caso ele seja definido
            if (activeFilters.searchTerm && activeFilters.searchTerm.length)
                newActiveFilters.searchTerm = activeFilters.searchTerm;

            setActiveFilters(newActiveFilters)
        }
    }

    /**
     * @param {Book} updatedBook
     */
    function likeBook(updatedBook) {

        //Atualizando o contador de likes do livro imutavelmente
        const newBooks = cloneDeep(books);

        let book = newBooks.find(book => book.id === updatedBook.id);
        book.liked = !book.liked;
        if (book.liked) book.likes += 1;
        else book.likes -= 1;

        setBooks(newBooks);
    }

    //Hook para buscar os livros da API
    useFetchBooks(setBooksStatus, setBooks, setFilteredBooks);
    //Hook que filtra/ordena a lista de livros ao alterar os filtros ativos
    useFilterBooks(setFilteredBooks, activeFilters, books);

    return (
        <section className="BookList">
            <div className="BookList__search__filter__container">
                <Input onInput={event => applyFilters({searchTerm: event.target.value})}
                       placeholder="Pesquise pelo título ou autor"/>
                <Slider title={<FilterButtonText activeFilters={activeFilters}/>} active={sliderActive}
                        setActive={setSliderActive}>
                    <BookFilters applyFilters={applyFilters} categories={categories}/>
                </Slider>
            </div>
            {filteredBooks.map(book => <div key={book.id} className="BookList__item">
                <BookItem likeBook={likeBook} book={book}/>
            </div>)}
        </section>
    )
}