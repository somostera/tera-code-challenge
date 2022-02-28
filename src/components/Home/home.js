import React, { useState, useEffect, StrictMode } from "react";
import Navbar from "../Navbar/navbar";
import "./home.style.css";
import Card from "../Card/card";
import Input from "../Input/input";
import axios from "axios";
import "../Card/card.style.css";
import Pagination from "components/Pagination/pagination";

const api =
  "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge/";

const SelectedOption = () => {
  return (
    <div className="selected-option">
      <p className="selected-option-text">Nome da Categoria</p>
    </div>
  );
};

function Home() {
  const [books, setBooks] = useState([]);
  const [itensParPage, setItensParPage] = useState(6);
  const [currentPage, setCurrentPage] = useState(0);

  //Pagination
  const pages = Math.ceil(16 / itensParPage);
  const startIndex = currentPage * itensParPage;
  const endIndex = startIndex + itensParPage;
  const currentItens = books.slice(startIndex, endIndex);
  console.log(currentItens);

  useEffect(() => {
    axios
      .get(api)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.error("Ops um erro" + err);
      });
  }, []);

  const handleSearch = (event) => {};

  return (
    <div className="container">
      <Navbar />
      <div className="page-content">
        <div className="page-content-options">
          <Input onchange={(event) => handleSearch(event)} />

          <div className="dropdown-content">
            <SelectedOption />
            <div className="dropdown">
              <button className="btn-filter">
                Filtros
                <hr />
                <span className="arrow" />
              </button>

              <div className="drop-content">
                <a href="#">Melhores Avaliados</a>
                <a href="#">Em estoque</a>
                <a href="#">Ordem Alfabética</a>
                <a href="#">Livros Curtidos</a>
                <a href="#">Por Categoria</a>
              </div>
            </div>
          </div>
        </div>

        <div className="card-list-content">
          <p className="book-total">Total: {books.length}</p>
          <div className="card-list">
            {currentItens.map((book, index) => (
              <Card key={index} book={book} />
            ))}
          </div>
        </div>
      </div>
      <div className="pagination-content">
        <Pagination pages={pages} setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
}

export default Home;
