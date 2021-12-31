import React, { useState, useEffect } from "react";
import Book from "../Book";
import "./styles.less";
import { filterByInputSearch } from "../../utils/filter";

const GridBook = ({ filterBy, inputSearch, inputCategorySearch }) => {
  const [bookies, setBookies] = useState([]);
  const [orderedBookies, setOrderedBookies] = useState([]);

  const [searchBookies, setSearchBookies] = useState([]);

  const API_URL =
    "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge";

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBookies(data);
    setOrderedBookies(data);
    setSearchBookies(data);
  };

  useEffect(() => {
    const filter = async () => {
      if (filterBy) {
        const { functionSort } = filterBy;

        const data = await (await fetch(API_URL)).json();

        setSearchBookies(data);

        if (filterBy.sortBy === "category" && inputCategorySearch !== "") {
          setTimeout(
            setOrderedBookies(functionSort(data, inputCategorySearch)),
            10
          );

          //setOrderedBookies(functionSort(data, inputCategorySearch));
          setSearchBookies(functionSort(data, inputCategorySearch));
        } else {
          if (filterBy.sortBy === "category") {
            setOrderedBookies(bookies);
          }
          setOrderedBookies(functionSort(data));
          setSearchBookies(functionSort(data));
        }
      }
    };
    filter();
  }, [bookies, filterBy, inputCategorySearch, inputSearch]);

  useEffect(() => {
    if (inputSearch !== "") {
      setTimeout(
        setOrderedBookies(filterByInputSearch(searchBookies, inputSearch)),
        10
      );
    }
    if (inputSearch === "") {
      setTimeout(setOrderedBookies(searchBookies), 10);
    }
  }, [inputSearch, orderedBookies, searchBookies]);

  return (
    <>
      <div className="grid-total">
        <span>Total: {orderedBookies.length}</span>
      </div>
      <div className="grid-container">
        <div className="grid grid-columns">
          {orderedBookies.map((book, index) => {
            return <Book book={book} id={book.name} key={index} />;
          })}
        </div>
      </div>
    </>
  );
};

export default GridBook;
