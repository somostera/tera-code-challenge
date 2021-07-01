import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';


function Header({ onChangeBgMode }) {
  let history = useHistory();

  return (
    <header>
    <div class="navbar navbar-dark bg-color shadow-sm">
      <div class="container-fluid d-flex justify-content-between">
        <a href="/" class="navbar-brand d-flex align-items-center">
          <strong>Livraria do cowboy</strong>
        </a>
        <button type="button" onClick={() => history.push('/new-book')} 
          class="btn btn-light">Novo Livro</button>
        <a onClick={onChangeBgMode} href="#" 
          class="navbar-brand d-flex align-items-center">
          <strong>Dark Mode</strong>
        </a>
      </div>
    </div>
  </header>
  )
}

export default Header;