import React, { useState, useEffect } from "react";
import "./styles.less";
import Layout from "../../components/Layout";
import { useParams, useNavigate } from "react-router-dom";

const DetailBook = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});

  const API_URL =
    "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge";

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      const book_data = data.find((item) => item.name === id);
      book_data ? setBook(book_data) : setBook({});
      console.log(book_data);
    };
    loadData();
  }, [id]);

  return (
    <div className="detail-book">
      <button onClick={() => navigate(-1)}>{"< Voltar"} </button>

      <div className="detail-book-container">
        <div className="detail-book-cover">
          <img src={book.cover_picture} alt="" />
        </div>

        <div className="detail-book-description">
          <span className="detail-book-description-name">{book.name}</span>

          <div className="detail-book-description-author-like">
            <p className="detail-book-description-text">{book.author}</p>
            <div className="detail-book-description-like">
              {false ? (
                <img
                  src={"icons/full-heart.svg"}
                  alt="descurtir"
                  /*  onClick={handleLiked} */
                />
              ) : (
                <img
                  src={"icons/heart.svg"}
                  alt="curtir" /*  onClick={handleLiked} */
                />
              )}
            </div>
          </div>
          <p className="detail-book-description-text">{book.category}</p>
          <p className="detail-book-description-text">
            Em estoque: {book.stock} unidades
          </p>
          <div className="detail-book-description-summary">
            <p>{book.description}</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBook;
