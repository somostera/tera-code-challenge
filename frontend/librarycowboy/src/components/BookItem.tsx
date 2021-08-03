import React, { useContext } from 'react'
import { Book } from '../types/Types'
import {Img} from 'react-image'
import HeartSVGObj from './HeartSVGObj'
import NoImage from '../assets/no-image.png';
import { BookContext } from "../App";

type Props = {
    book: Book
}
 
const BookItem: React.FC<Props> = (props) => {
    //const { handleOpen } = props
    const { book } = props

    const { likeList, setLikeList } = useContext(BookContext)
    //const [like, setLike] = useState(ChildContext)

    const updateContext = (e: React.SyntheticEvent, book: Book) => {
        let bookName = book.name
        e.stopPropagation()
        let index = likeList.indexOf(bookName)
        if( index > -1) {
            likeList.splice(index, 1)
        } else {
            likeList.push(bookName)
        }
        setLikeList(likeList.slice())
    }

    const heartColor = (bookName: string) => {
        if(likeList.indexOf(bookName) > -1) {
            return "red"
        } else {
            return "transparent"
        }
    }

    return  (
        <div className="book_item">
            <div>
                <Img src={[book.cover_picture, NoImage]} alt={book.name} title={book.name} className="cover_picture" />
            </div>
            <div className="name_row_grid">
                <div className="name_text" title={book.name}>{ book.name }</div>
                <div onClick={(e) => updateContext(e, book)}>
                    <HeartSVGObj fillColor={heartColor(book.name)} />
                </div>
            </div>
            <div className="book_detail">
                {book.author}
            </div>
            <div className="book_detail">
                {book.category}
            </div>
            {/*<div>like {book.users_who_liked.length}</div>
            <div>stoke {book.stock}</div>*/}
        </div>
    ) 
}
 
export default BookItem