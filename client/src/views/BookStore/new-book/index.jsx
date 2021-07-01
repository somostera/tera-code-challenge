import React, { useState } from 'react';
import Footer from '../../../components/footer';
import Header from '../../../components/header';
import api from '../../../services/api';

// import { Container } from './styles';

function NewBook({ bookId }) {

  const [newBook, setNewBook] = useState({
    name: '',
    author: '',
    description: '',
    cover_picture: '',
    category: '',
    stock: '',
    users_who_liked: []
  });
  const [alert, setAlert] = useState({
    class: '',
    msg: ''
  });

  const handleChange = (e) => {
    const {name, value } = e.target;
    const book = {...newBook};
    book[name] = value
    setNewBook(book); 
  };

  const handleAddNewBook = async () => {
    if (!!newBook.author && !!newBook.category && !!newBook.cover_picture &&
        !!newBook.description && !!newBook.stock) {
          if (bookId) {
            //update
          } else {
            const response = await api.post('/books', JSON.stringify(newBook), {
              headers: {
                'Content-Type': 'application/json'
              }
            });
            if (response.status === 201) {
              setNewBook({
                name: '',
                author: '',
                description: '',
                cover_picture: '',
                category: '',
                stock: '',
                users_who_liked: []
              });
              setAlert({
                class: 'alert-success',
                msg: 'Livro cadastrado com sucesso.'
              });            
            }
          }         
    }
  };

  return (
    <>
  <Header />
  <div class="p-4 d-flex align-items-center justify-content-center">
  <div class="col-md-8 order-md-1">
    <form class="needs-validation" novalidate>
    <div class="mb-3">
      <label for="name">Nome: </label>
      <input type="text" class="form-control" onChange={handleChange} 
        id="name" name="name" required value={newBook.name ? newBook.name : ''} 
        />
    </div>
    <div class="mb-3">
      <label for="author">Autor(a): </label>
      <input type="text" class="form-control" onChange={handleChange} 
        id="author" name="author" required value={newBook.author ? 
        newBook.author : ''} />
    </div>
    <div class="mb-3">
      <label for="category">Categoria: </label>
      <input type="text" class="form-control" onChange={handleChange} 
        id="category" name="category" required
        value={newBook.category ? newBook.category : ''} />
    </div>
    <div class="mb-3">
      <label for="stock">Quantidade em estoque: </label>
      <input type="text" class="form-control" onChange={handleChange} 
        id="stock" name="stock" required 
        value={newBook.stock ? newBook.stock : ''} />
    </div>
    <div class="mb-3">
      <label for="cover_picture">URL da capa: </label>
      <input type="text" class="form-control" onChange={handleChange} 
        id="cover_picture" name="cover_picture" required
        value={newBook.cover_picture ? newBook.cover_picture : ''} />
    </div>
    <div class="mb-3">
      <label for="description">Descrição </label>
      <textarea id="description" name="description" rows="5"
        class="form-control" onChange={handleChange}
        value={newBook.description ? newBook.description : ''}>
      </textarea>
    </div>
    <div class="btn-group">
    <button type="button" onClick={handleAddNewBook} 
      class="btn btn-light">Adicionar</button>
    </div>
    <div class={`alert ${alert.class} mt-2`} role="alert">
      {alert.msg}
    </div>
    </form>
  </div>
  </div>
  <Footer />
  </>
  )
}

export default NewBook;