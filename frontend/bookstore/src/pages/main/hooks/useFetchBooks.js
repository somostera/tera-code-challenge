//Carregando os dados dos livros
import {useEffect} from "react";
import HttpStatus from "../../../utils/HttpStatus";
import TeraApi from "../../../services/api/TeraApi";

export default function useFetchBooks (setBooksStatus, setBooks, setFilteredBooks) {

    useEffect(async () => {

        try {

            setBooksStatus(HttpStatus.WAITING);
            const booksData = await TeraApi.getBooks();
            setBooks(booksData);
            setFilteredBooks(booksData);

        } catch (e) {
            setBooksStatus(HttpStatus.ON_REQUEST_ERROR);
        }

    }, []);
}