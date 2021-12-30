import React, { useState, useEffect, useContext } from "react";
import "./styles.less";
import { useNavigate } from "react-router-dom";
import { BOOK } from "../../routes/paths";
import { ThemeContext } from "../../contexts/theme-context";

const Book = ({ data, id, setBookiesIsLiked, bookiesIsLiked }) => {
  const navigate = useNavigate();
  const { author, category, cover_picture, name } = data;
  const [isLiked, setIsLiked] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleLiked = () => {
    setIsLiked((prevState) => !prevState);
    setBookiesIsLiked([...bookiesIsLiked, name]);
    setTimeout(bookiesIsLiked.find((book) => console.log(book)));
  };
  // console.log(bookiesIsLiked, isLiked);

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
