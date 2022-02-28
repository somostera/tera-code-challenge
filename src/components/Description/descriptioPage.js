import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./descriptioPage.style.css";
import "../Card/card.style.css";
import { IoIosArrowBack } from "react-icons/io";
import Navbar from "../Navbar/navbar";
import Like from "components/buttonLike/like";
import { bookHash } from "../Card/card.js";
import axios from "axios";

const api =
  "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge/";

const Description = () => {
  const [bookDesc, setBookDesc] = useState([]);
  const { cover_picture } = useParams();

  useEffect(() => {
    axios.get(api).then((books) => {
      const book = books.data.find((b) => bookHash(b) === cover_picture);

      if (book) {
        setBookDesc(book);
      }
    });
  }, []);

  const { name, author, stock, description, cover_picture: image } = bookDesc;

  return (
    <div>
      <Navbar />
      <Link to="/" className="btn-back">
        <IoIosArrowBack /> Voltar
      </Link>
      <div className="description-content">
        <h2>{name}</h2>
        <div className="text-content-description">
          <div className="text-description">
            <h4>{author}</h4>
            <h4>Estoque: {stock} unidades</h4>
          </div>
          <Like />
        </div>
        <div className="description-text">
          {description}
          <img className="image-desc" src={image} alt={name} />
        </div>
      </div>
    </div>
  );
};

export default Description;
