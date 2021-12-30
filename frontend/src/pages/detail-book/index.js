import React, { useState, useEffect, useContext } from "react";
import "./styles.less";
import Layout from "../../components/Layout";
import { useParams, useNavigate } from "react-router-dom";
import { ThemeContext } from "../../contexts/theme-context";

const DetailBook = () => {
  let { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({});
  const { theme, toggleTheme } = useContext(ThemeContext);
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
      <button
        style={
          theme.name === "dark" ? { color: "#FFFF" } : { color: "#6C6C6C" }
        }
        onClick={() => navigate(-1)}
      >
        {"< Voltar"}{" "}
      </button>

      <div className="detail-book-container">
        {book.stock === 0 ? (
          <div
            style={{
              background: `linear-gradient(0deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.4)),
             url(${book.cover_picture})`,
            }}
            className={"detail-book-cover-empty"}
          />
        ) : (
          <div className={"detail-book-cover"}>
            <img src={book.cover_picture} alt={"capa do livro"} />
          </div>
        )}

        <div className="detail-book-description">
          <div className="detail-book-description-container">
            <div
              style={{
                backgroundColor: theme.background.body,
                color: theme.color.body,
              }}
              className="detail-book-description-name"
            >
              {book.name}
              <div className="detail-book-description-author-like">
                <p
                  style={{
                    backgroundColor: theme.background.body,
                    color: theme.color.body,
                  }}
                  className="detail-book-description-text"
                >
                  {book.author} <br />
                  {book.category}
                </p>
                <div className="detail-book-description-like">
                  {false ? (
                    <img
                      src={"/icons/full-heart.svg"}
                      alt="descurtir"
                      /*  onClick={handleLiked} */
                    />
                  ) : theme.name === "dark" ? (
                    <img
                      src={"/icons/heart-dark.svg"}
                      alt="curtir" /*  onClick={handleLiked} */
                    />
                  ) : (
                    <img
                      src={"/icons/heart.svg"}
                      alt="curtir" /*  onClick={handleLiked} */
                    />
                  )}
                </div>
              </div>
            </div>

            {book.stock === 0 ? null : (
              <p
                style={{
                  backgroundColor: theme.background.body,
                  color: theme.color.body,
                }}
                className="detail-book-description-text"
              >
                Em estoque: {book.stock} unidades
              </p>
            )}
          </div>

          <div className="detail-book-description-summary">
            <p
              style={{
                backgroundColor: theme.background.body,
                color: theme.color.body,
              }}
            >
              {book.description}
            </p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DetailBook;
