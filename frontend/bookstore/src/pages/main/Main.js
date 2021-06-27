import "./Main.css";
import {HashRouter, Route, Switch, Redirect} from "react-router-dom";
import Nav from "./components/nav/Nav";
import BookList from "../bookList/BookList";
import BookDetails from "../bookDetails/BookDetails";
import NotFound from "../notFound/NotFound";

function Main() {

    return (
        <main>
            <HashRouter>
                <Nav/>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="list"/>
                    </Route>
                    <Route path="/book/:book_id">
                        <BookDetails/>
                    </Route>
                    <Route path="/list">
                        <BookList/>
                    </Route>
                    <Route>
                        <NotFound/>
                    </Route>
                </Switch>
            </HashRouter>
        </main>
    )
}

export default Main;