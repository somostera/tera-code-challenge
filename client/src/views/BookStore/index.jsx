import React, { useState, useEffect } from 'react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import api from '../../services/api';

import './styles.css';

function BookStore() {

  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [bookId, setBookId] = useState('');
  const [isDarkMode, setDarkMode] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(()   =>  {
    getBooks();   
  },[])

  async function getBooks() {
    const response = await api.get('/books')
    setBooks(response.data);
  }

  async function getBooksByName(bookName) {
    const response = await api.get(`/books/search/${bookName}`)
    setBooks(response.data);
  }

  const handleChangeSearch = (e) => {
    const { value } = e.target;
    if (!!value) {
      getBooksByName(value);
    } else {
      getBooks();
    }    
  }

  return (
    <>
    <Header onChangeBgMode={() => setDarkMode(!isDarkMode)} />
    <main role="main">      

      <div class={`album py-5 ${isDarkMode ? 'dark-mode' : 'bg-content'}`}>
        <div class="container-fluid">
        <div class="container-fluid d-flex justify-content-between">
          <div class="col-md-4">
            <input type="text" class="form-control" onChange={handleChangeSearch} placeholder="Procure por um livro" />
          </div>           
          <div class="col-md-2">
            <select name="filter" id="filter" placeholder="Filtros" pla class="form-control">
              <option selected>Filtros</option>
              <option value="1">Melhores avaliados</option>
              <option value="2">Em estoque</option>
              <option value="3">Ordem Alfabética </option>
              <option value="4">Livros Curtidos</option>
            </select>
          </div>     
        </div>
          <div class="row">
            {books.map((book, index) => (
              <div key={index} class="col-md-3 d-flex align-items-center">
              <div class="mb-3">
                <img src={`${book.cover_picture}`} 
                  width="70%" height="70%" alt="book" class="rounded mx-auto d-block" />
                  <div
                    class="d-flex justify-content-between align-items-center">
                  <div style={{ margin: 20}}>
                  <span class="bookName">
                    {book.name}
                  </span>
                  <p class="author">
                    {book.author }
                  </p>
                  <p class="author">
                    {book.category}
                  </p>
                  </div>                 
                  <i class="bi-heart"></i>
                  </div>
              </div>
            </div>
            ))
            }            
          </div>
        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

export default BookStore;