import React, { useState, useEffect } from "react";
import "./styles.less";
import { useNavigate } from "react-router-dom";
import { BOOK } from "../../routes/paths";

const Book = ({ data, id, setBookiesILiked, bookiesILiked }) => {
  const navigate = useNavigate();
  const { author, category, cover_picture, name } = data;
  const [isLiked, setIsLiked] = useState(false);

  const handleLiked = () => {
    setIsLiked((prevState) => !prevState);
    //setTimeout(() => { this.control.doUpdate(); }, 10);
  };

  useEffect(() => {
    if (isLiked) {
      const res = bookiesILiked.find((book) => book.name === name);
      console.log(res);
      console.log("2", isLiked);
    }
  }, [bookiesILiked, isLiked, name]);

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
          ) : (
            <img src={"icons/heart.svg"} alt="curtir" onClick={handleLiked} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Book;
