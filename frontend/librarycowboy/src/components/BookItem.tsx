import React from 'react'
import { Book } from '../types/Types'
 
type Props = {
    book: Book
    handleDone: (book: Book) => void
    handleDelete: (book: Book) => void
}
 
const BookItem: React.FC<Props> = ({ book, handleDone, handleDelete }) => {
    return (
        <li className={book.done ? 'done' : ''}>
            <label>
                <input
                    type="checkbox"
                    className="checkbox-input"
                    onClick={() => handleDone(book)}
                    defaultChecked={book.done}
                />
                <span className="checkbox-label">{ book.title }</span>
            </label>
            <button
                onClick={() => handleDelete(book)}
                className="btn is-delete"
            >Remover</button>
        </li>
    )
}
 
export default BookItem