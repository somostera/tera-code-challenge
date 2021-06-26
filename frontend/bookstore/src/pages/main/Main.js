import "./Main.css";
import {BrowserRouter, Route} from "react-router-dom";
import Nav from "./components/nav/Nav";
import BookList from "../bookList/BookList";

function Main () {

    return (
        <main>
            <Nav/>
            <BrowserRouter>
                <Route path="/">
                    <BookList/>
                </Route>
            </BrowserRouter>
        </main>
    )
}

export default Main;