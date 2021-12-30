import React, { useState, useContext } from "react";
import "./styles.less";
import { useNavigate } from "react-router-dom";

import { ThemeContext } from "../../contexts/theme-context";

const Book = ({ book, id, isBookDetail }) => {
  const navigate = useNavigate();
  const { author, category, cover_picture, name } = book;
  const [isLiked, setIsLiked] = useState(false);
  const { theme } = useContext(ThemeContext);
  const [bookiesIsLiked, setBookiesIsLiked] = useState([]);

  const handleLiked = () => {
    setIsLiked((prevState) => !prevState);
    handleAddListIsLiked();
  };
  const handleAddListIsLiked = async () => {
    var Arr = bookiesIsLiked;
    var Arr2 = bookiesIsLiked;

    var bookIsLiked = Arr.find(function (este) {
      return este === name;
    });

    if (bookIsLiked !== undefined) {
      var test = await Arr2.filter(function (este) {
        return este !== name;
      });
      setBookiesIsLiked([...test]);
    } else {
      setBookiesIsLiked([...bookiesIsLiked, name]);
    }
  };
  if (isBookDetail) {
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
                    {isLiked ? (
                      <img
                        src={"/icons/full-heart.svg"}
                        alt="descurtir"
                        onClick={handleLiked}
                      />
                    ) : theme.name === "dark" ? (
                      <img
                        src={"/icons/heart-dark.svg"}
                        alt="curtir"
                        onClick={handleLiked}
                      />
                    ) : (
                      <img
                        src={"/icons/heart.svg"}
                        alt="curtir"
                        onClick={handleLiked}
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
  }

  return (
    <div className="book">
      <div className="book-cover">
        <img
          src={cover_picture}
          alt=" capa do livro"
          onClick={() => navigate(`/book/${id}`)}
        />
      </div>

      <div className="book-description">
        <div className="book-description-details">
          <p>{name}</p>
          <span>{author}</span>
          <span>{category}</span>
        </div>
        <div className="book-description-like">
          {isLiked ? (
            <img
              src={"icons/full-heart.svg"}
              alt="descurtir"
              onClick={handleLiked}
            />
          ) : theme.name === "dark" ? (
            <img
              src={"icons/heart-dark.svg"}
              alt="curtir"
              onClick={handleLiked}
            />
          ) : (
            <img src={"icons/heart.svg"} alt="curtir" onClick={handleLiked} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Book;
