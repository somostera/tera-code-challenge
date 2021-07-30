import React, { useState } from 'react'
import { Book } from '../types/Types'
 
type Props = {
    setBooks: React.Dispatch<React.SetStateAction<Book[]>>
    books: Book[]
}
 
const BookDetail: React.FC<Props> = ({ setBooks, books }) => {
    const [ inputTitle, setInputTitle ] = useState<string>('')
    const [ count, setCount ] = useState<number>(books.length + 1)
 
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputTitle(e.target.value)
    }
 
    const handleSubmit = () => {
        setCount(count + 1)
         
        const newBook: Book = {
            id: count,
            title: inputTitle,
            done: false
        }
         
        setBooks([newBook, ...books])
    }
 
    return (
        <div>
            <div className="inputForm">
                <div className="inner">
                    <input
                        type="text"
                        className="input"
                        value={inputTitle}
                        onChange={handleInputChange}
                    />
                    <button onClick={handleSubmit} className="btn is-primary">Adicionar</button>
                </div>
            </div>
        </div>
    )
}
 
export default BookDetail