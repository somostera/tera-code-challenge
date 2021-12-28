import React, { useState, useEffect } from "react";
import Book from "../Book";
import "./styles.less";

const GridBook = ({ filterBy, inputSearch }) => {
  const [bookies, setBookies] = useState([]);
  const [orderedBookies, setOrderedBookies] = useState([]);
  const [bookiesILiked, setBookiesILiked] = useState([]);
  const API_URL =
    "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge";

  /*  useEffect(() => {
    fetch(API_URL)
      .then(function (response) {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(function (response) {
        if (filterBy) {
          const { functionSort } = filterBy;
          setBookies(functionSort(bookies));
        } else {
          setBookies(response);
        }
      });
  }, [bookies, filterBy]); */

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBookies(data);
    setOrderedBookies(data);
    console.log(data);
  };

  useEffect(() => {
    const filter = async () => {
      if (filterBy) {
        const { functionSort } = filterBy;
        const aux = await (await fetch(API_URL)).json();
        setBookies(aux);
        console.log();
        if (filterBy.sortBy === "category" && inputSearch !== "") {
          console.log();
          setTimeout(setOrderedBookies(functionSort(aux, inputSearch)), 10);
          console.log(functionSort(aux, inputSearch), aux);
          setOrderedBookies(functionSort(aux, inputSearch));
        } else {
          if (filterBy.sortBy === "category") {
            setOrderedBookies(bookies);
          }
          setOrderedBookies(functionSort(aux));
        }

        // const data = await (await fetch(API_URL)).json();
        //const data = await response.json();
      }
    };
    filter();
  }, [bookies, filterBy, inputSearch]);

  return (
    <>
      <div className="grid-total">
        <span>Total: {orderedBookies.length}</span>
      </div>
      <div className="grid grid-template-columns">
        {orderedBookies.map((book, index) => {
          return (
            <Book
              data={book}
              id={book.name}
              key={index}
              bookiesILiked={bookiesILiked}
              setBookiesILiked={setBookiesILiked}
            />
          );
        })}
      </div>
    </>
  );
};

export default GridBook;
