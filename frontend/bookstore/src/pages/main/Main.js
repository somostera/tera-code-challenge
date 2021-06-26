import "./Main.css";
import {useState, useEffect} from "react";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./components/nav/Nav";
import BookList from "../bookList/BookList";
import TeraApi from "../../services/TeraApi";
import HttpStatus from "../../utils/HttpStatus";

function Main () {

    /**
     * @param {Book[]} books
     */
    const [books, setBooks] = useState([]);
    const [booksStatus, setBooksStatus] = useState(HttpStatus.NOT_STARTED);

    //Carregando os dados dos livros
    useEffect(async () => {

        try {

            setBooksStatus(HttpStatus.WAITING);
            setBooks(await TeraApi.getBooks());

        } catch (e) {
            setBooksStatus(HttpStatus.ON_REQUEST_ERROR);
        }

    }, []);

    return (
        <main>
            <Nav/>
            <BrowserRouter>
                <Route path="/">
                    <BookList books={books}/>
                </Route>
            </BrowserRouter>
        </main>
    )
}

export default Main;