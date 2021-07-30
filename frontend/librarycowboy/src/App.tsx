import React, { useState, useEffect } from 'react'
import './App.css';
import { Book } from './types/Types';
import BookDetail from './components/BookDetail'
import BookList from './components/BookList'
import BookService from './services/BookService'
import { AppBar, Toolbar, Typography, Button, Grid, Input, FormControl, InputAdornment, TextField } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Arrow from './assets/arrow_gray.svg'

const initialState: Book[] = []

const useStyles = makeStyles(theme => ({
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
    backgroundColor: "white",
    margin: "10px",
    boxShadow: "0 0 5px 1px lightgrey, inset 0 0 2px 1px lightgrey",
    borderColor: 'white',
    padding: "3px 0 3px 20px",
    fontSize: "11px"
  },
  inputFont: {
    fontSize: "11px"
  },
  pulldownButton: {
    borderLeft: "2px solid lightgrey",
    height: "36px",
    width: "20px",
    margin: "0",
    padding: "0"
  }
}))

//const [books, setBooks] = useState<Array<Book>>([]);

const App = () => {
  useEffect(() => {
    retrieveBooks();
  }, []);

  const retrieveBooks = () => {
    BookService.getAll()
    .then(response => {
      setBooks(response.data)
      console.log(response.data)
    })
    .catch(e => {
      console.log(e)
    });
  }

  const handleChange = (e: { target: { value: string; }; }) => {
    setSearch(e.target.value);
  };


  const [books, setBooks] = useState(initialState)
  const [count, setCount] = useState(0)
  const [search, setSearch]: [string, (search: string) => void] = React.useState("");
  const classes = useStyles()
  return (
    <div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Typography variant="h4" className={classes.title}>
            Livraria do cowboy
          </Typography>
          <Button color="inherit" className={classes.buttonLabel}>Dark mode</Button>
        </Toolbar>
      </AppBar>
      <div className="container">
        <Grid container spacing={10}>
          <Grid item xs={8} lg={4}>
            <FormControl fullWidth>
              <Input 
                type="text" 
                onChange={handleChange}
                className={classes.input}
                placeholder="Procure por um livro"
                disableUnderline={true}
              />
            </FormControl>
          </Grid>
          <Grid item xs={4} lg={8}>
            <div className="pulldown_box">
              <TextField 
                //select={false}
                //onChange={handleChange}
                className={classes.input}
                placeholder="Filtros"
                //underlineStyle={{display: 'none'}}
                //disableUnderline={true}
                InputProps={{
                  classes: {
                    input: classes.inputFont,
                  },
                  disableUnderline: true,
                  endAdornment: (
                    <InputAdornment position="end">
                      <Button
                        variant="text"
                        disableElevation
                        className={classes.pulldownButton}
                        >
                        <img src={Arrow} className="arrow_down"></img>
                      </Button>
                    </InputAdornment>
                  )
                }}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <BookList setBooks={setBooks} books={books} />
          </Grid>
        </Grid>
      </div>
      
      <BookDetail setBooks={setBooks} books={books} />
      
    </div>
  )
}

export default App;
