import React, { useState, useEffect, useContext } from 'react'
import '../App.css';
import { Book } from '../types/Types';
import BookList from './BookList'
import BookService from '../services/BookService'
import { Grid, Input, FormControl } from '@material-ui/core'
//import { flexbox } from '@material-ui/system'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import FilterMenu from './FilterMenu'
import MyAppBar from './MyAppBar'
import { BookContext } from "../App"

const initialState: Book[] = []

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    background: '#95d9da',
    border: 0,
    color: 'white',
    height: 'auto',
    padding: '5px',
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  buttonLabel: {
    fontSize: '1.2rem',
    textTransform: 'none',
  },
  select: {
    color: "white",
  },
  input: {
    backgroundColor: theme.palette.secondary.light,
    margin: "10px",
    boxShadow: "0 0 5px 1px lightgrey, inset 0 0 2px 1px lightgrey",
    borderColor: 'white',
    padding: "3px 0 3px 20px",
    fontSize: "11px"
  },
  inputFont: {
    fontSize: "11px"
  },
  body: { 
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.text.primary,
    minHeight: '100vh',
    height: 'auto'
  }
}))

/** Sort function */
const compareByName = (a: Book, b: Book) => {
  let name1 = a.name.toString().toLowerCase();
	let name2 = b.name.toString().toLowerCase();
  let comparison = 0;

  if (name1 > name2) {
    comparison = 1;
  } else if (name2 > name1) {
    comparison = -1;
  }

  return comparison;
}

const compareByValidated = (a: Book, b: Book) => {
  let like1 = a.users_who_liked === undefined ? 0 : a.users_who_liked.length
  let like2 = b.users_who_liked === undefined ? 0 : b.users_who_liked.length
  let comparison = 0;
 
  if (like1 > like2) {
    comparison = -1;
  } else if (like2 > like1) {
    comparison = 1;
  } else {
    comparison = 0;
  }

  return comparison;
}

const compareByCategory = (a: Book, b: Book) => {
  let name1 = a.category.toString().toLowerCase();
	let name2 = b.category.toString().toLowerCase();
  let comparison = 0;

  if (name1 > name2) {
    comparison = 1;
  } else if (name2 > name1) {
    comparison = -1;
  } else {
    comparison = 0;
  }

  return comparison;
}

const compareByStock = (a: Book, b: Book) => {
  let stock1 = a.stock === undefined ? 0 : Number(a.stock)
  let stock2 = b.stock === undefined ? 0 : Number(b.stock)

  let comparison = 0;

  if (stock1 > stock2) {
    comparison = -1;
  } else if (stock2 > stock1) {
    comparison = 1;
  } else {
    comparison = 0;
  }

  return comparison;
}

type Props = {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}
//const [books, setBooks] = useState<Array<Book>>([]);
const HomePage: React.FC<Props> = (darkMode, setDarkMode) => {
  const classes = useStyles()
  useEffect(() => {
    retrieveBooks();
  }, []);

  const retrieveBooks = () => {
    BookService.getAll()
    .then(response => {
      setBooks(response.data)
      setFilteredBooks(response.data)
    })
    .catch(e => {
      console.log(e)
    });
  }

  const filterByCategory = (book: Book) => {
    let regexp = new RegExp(".*")
    if(categoryName !== "") {
      regexp = new RegExp(categoryName)
    }
    if(book.category.match(regexp)) {
        return book
    }
    return null;
  }

  const filterByStock = (book: Book) => {
    let stock = book.stock === undefined ? 0 : Number(book.stock)
    if(stock > 0) {
      return book;
    }
    return null;
  }

  const filterByName = (book: Book) => {
    let regexp = new RegExp(".*")
    if(name !== "") {
      regexp = new RegExp(name + ".*")
    }
    if(book.name.match(regexp)) {
      return book
    }
    return null;
  }

  const { likeList } = useContext(BookContext)
  const filterByLike = (book: Book) => {
    if(likeList.indexOf(book.name) > -1) {
      return book;
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
    const newBooks = books.slice().filter(filterByName)
    setFilteredBooks(newBooks)
  };

  const [books, setBooks] = useState(initialState)
  const [filteredBooks, setFilteredBooks] = useState(initialState)
  const [condition, setCondition]: [string, (condition: string) => void] = React.useState("");
  const [name, setName] = useState("")

  const handleChangeCondition = (con: string) => {
    const newBooks = books.slice()
  
    if(con === "Melhores Avalidados") {
      console.log("Melhores Avalidados")
      setFilteredBooks(newBooks.sort(compareByValidated))
    } else if(con === "Em estoque") {
      console.log("Em estoque")
      setFilteredBooks(newBooks.filter(filterByStock).sort(compareByStock))
    } else if(con === "Ordem alfabética") {
      console.log("Ordem alfabética")
      setFilteredBooks(newBooks.sort(compareByName))
    } else if(con === "Livros Curtidos") {
      console.log("Livros Curtidos")
      setFilteredBooks(newBooks.filter(filterByLike))
    } else if(con === "Por Categoria") {
      console.log("Por Categoria")
      setFilteredBooks(newBooks.filter(filterByCategory).sort(compareByCategory))
    } else {
      console.log("Other")
      setFilteredBooks(newBooks)
    }
    setCondition(con);
  }

  const handleChangeCaregory = (categoryName: string) => {
    setCategoryName(categoryName)
    if(categoryName !== "") {
      const newBooks = books.slice()
      setFilteredBooks(newBooks.filter(filterByCategory).sort(compareByCategory))
    }
  }

  const [categoryName, setCategoryName]: [string, (categoryName: string) => void] = React.useState("");

  return (
    <div className={classes.body}>
      <MyAppBar/>
      <div className="container">
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className="input_area">
            <FormControl fullWidth={false}>
              <Input
                type="text" 
                onChange={handleChange}
                className={classes.input}
                placeholder="Procure por um livro"
                disableUnderline={true}
              />
            </FormControl>

            <FilterMenu 
              condition={condition}
              setCondition={handleChangeCondition} 
              categoryName={categoryName} 
              setCategoryName={handleChangeCaregory} />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="text">
              Total: {filteredBooks.length}
            </div>
          </Grid>
          <Grid item xs={12}>
            <BookList books={filteredBooks} />
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

export default HomePage;
