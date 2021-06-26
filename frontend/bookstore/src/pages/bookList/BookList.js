import './BookList.css';
import BookItem from "./components/bookItem/BookItem";

export default function BookList(props) {

    return (
        <section className="BookList">
            {props.books.map(book => <div className="BookList__item"><BookItem key={book.id} book={book}/></div>)}
        </section>
    )
}