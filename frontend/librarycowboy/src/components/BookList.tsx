import React from 'react'
import BookItem from './BookItem'
import { Book } from '../types/Types'
 
type Props = {
    books: Book[]
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}
 
const BookList: React.FC<Props> = ({ books, setBooks }) => {
 
    const handleDone = (book: Book) => {
        setBooks(prev => prev.map(t =>
            t.id === book.id
                ? { ...book, done: !book.done }
                : t
        ))
    }
 
    const handleDelete = (book: Book) => {
        setBooks(prev => prev.filter(t =>
            t.id !== book.id
        ))
    }

    return (
        <div className="inner">
        {
            books.length <= 0 ? 'Não existe.' :
            <ul className="task-list">
            { books.map( (book, index) => (
                <BookItem
                    key={index}
                    book={book}
                    handleDelete={handleDelete}
                    handleDone={handleDone}
                />
            )) }
            </ul>
        }
        </div>
    )
}
 
export default BookList