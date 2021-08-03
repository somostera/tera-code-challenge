import React, { useState } from 'react'
import BookItem from './BookItem'
import { Book } from '../types/Types'
import ReactPaginate from 'react-paginate'
import { useHistory } from 'react-router-dom'
 
type Props = {
    books: Book[]
    //setBooks: React.Dispatch<React.SetStateAction<Book[]>>
}

const perPage: number = 8;
 
const BookList: React.FC<Props> = ({ books }) => {
    const [ offset, setOffset ] = useState(0);
    
    /** Pagenation */
    const handlePageChange = (selectedPage: {selected: number}) => {
        const offset = selectedPage.selected * perPage
        setOffset(offset); // change offset
    }
    const pagingList = (book: Book, index: number) => {
        if(index >= offset && index < (offset + perPage)) {
            return book
        }
        return null;
    }

    /** Screen transition */
    const history = useHistory()
    const gotoDetail = (book: Book) => {
        //setBook(book)
        history.push({pathname: "/detail", state: {'book': book}})
    }

    return (
        <>
            <div>
            {
                books.length <= 0 ? 'Não existe.' :
                <div className="book_item_rows">
                { books.filter(pagingList).map( (book, index) => 
                    <div onClick={()=>gotoDetail(book)} className="clickable" key={"div_" + offset + "_" + index}>
                        <BookItem
                            key={offset + "_" + index}
                            book={book}
                        />
                    </div>
                ) }
                </div>
            }
            </div>

            <div className="center">
                <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    pageCount={Math.ceil(books.length/perPage)}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={2}
                    onPageChange={handlePageChange}
                    containerClassName={'pagination'}
                    //subContainerClassName={'pages pagination'}
                    activeClassName={'activePage'}
                    previousClassName={'pagination__previous'}
                    nextClassName={'pagination__next'}
                    disabledClassName={'pagination__disabled'}
                ></ReactPaginate>
            </div>
        </>
    )
}
 
export default BookList