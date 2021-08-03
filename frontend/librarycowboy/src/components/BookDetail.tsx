import { useContext} from 'react'
import '../App.css';
import { Book } from '../types/Types';
//import { flexbox } from '@material-ui/system'
import MyAppBar from './MyAppBar'
import { useLocation, useHistory } from "react-router-dom";
import HeartSVGObj from './HeartSVGObj'
import {Img} from 'react-image'
import NoImage from '../assets/no-image.png';
import { BookContext } from "../App";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  body: { 
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    minHeight: '100vh',
    height: 'auto'
  },
  typography: {
    h4: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
      [theme.breakpoints.up('md')]: {
        fontSize: '3rem',
      },
    }
  }
}));

const DetailPage = () => {
  interface stateType {
    book: Book
  }
  const { state } = useLocation<stateType>()
  const history = useHistory()
  const book = state.book;
  const { likeList, setLikeList } = useContext(BookContext)

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

  const classes = useStyles();
  return (
    <div className={classes.body}>
      <MyAppBar/>

      <div className="container">
        <div className="clickable" onClick={history.goBack}>&lt; Voltar</div>
        <div className="detailContainer">
        <div className="adjustContainer">

          <div className="imageBox">
            <div className={book.stock === 0 ? "imgText" : ""}>
              <div className={book.stock === 0 ? "imgMask" : ""}></div>
              {book.stock === 0 ? <p>FORA DE ESTOQUE</p> : null }
              <Img 
                src={[book.cover_picture, NoImage]} 
                alt={book.name} 
                title={book.name} 
                className="detail_img" />
            </div>
          </div>
          <h1 className="detail_title">{book.name}</h1>
          </div>

          <div className="detail_book_detail">{book.author}
          <div className="detail_heart" onClick={(e) => updateContext(e, book)}>
            <HeartSVGObj fillColor={heartColor(book.name)} />
          </div>
          </div>
          <div className="detail_book_detail">{book.category}</div>
          
          <div className="detail_book_stock">
            {
              book.stock > 0 ? <div>Em estoque: {book.stock} unidades</div>
              :
              <div>Fora de estoque</div>
            }
            
          </div>
          
          <div className="detail_description">
            {book.description}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailPage;
