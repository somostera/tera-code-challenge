import React, { useState, useEffect } from "react";
import "./styles.less";
import { useParams } from "react-router-dom";

import Book from "../../components/Book";

const DetailBook = () => {
  let { id } = useParams();

  const [book, setBook] = useState({});

  const API_URL =
    "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge";

  useEffect(() => {
    const loadData = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      const book_data = data.find((item) => item.name === id);
      book_data ? setBook(book_data) : setBook({});
    };
    loadData();
  }, [id]);

  return <Book isBookDetail book={book} id={id} />;
};
export default DetailBook;
