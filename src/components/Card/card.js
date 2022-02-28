import React from "react";
import { Link } from "react-router-dom";
import "./card.style.css";
import Like from "components/buttonLike/like";

const kebabCase = (string) =>
  string
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/[\s_]+/g, "-")
    .toLowerCase();

export const bookHash = (book) => {
  const string = `${book.name} ${book.author} `;
  return kebabCase(string);
};

const Card = ({ book }) => {
  const url = `/description/${bookHash(book)}`;

  return (
    <>
      <div className="card-container">
        <div key={book} className="card-imagem">
          <Link className="btn-image-card" to={url}>
            <img className="imagem" src={book.cover_picture} />
          </Link>
        </div>
        <div className="text-card">
          <h3 className="title-card">{book.name}</h3>
          <div className="subtext-content">
            <div className="subtext">
              <p className="subtitle-card">{book.author}</p>
              <p className="subtitle-card">{book.category}</p>
            </div>
            <Like />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
