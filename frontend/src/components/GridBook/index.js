import React, { useState, useEffect, useContext } from "react";
import Book from "../Book";
import "./styles.less";
import { filterByInputSearch } from "../../utils/filter";
import { Pagination } from "antd";
import { ThemeContext } from "../../contexts/theme-context";
import StyledPagination from "../Pagination";

const GridBook = ({ filterBy, inputSearch, inputCategorySearch }) => {
  const [bookies, setBookies] = useState([]);
  const [orderedBookies, setOrderedBookies] = useState([]);
  const [paginateBookies, setPaginateBookies] = useState([]);

  const [searchBookies, setSearchBookies] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);

  const [offset, setOffset] = useState(0);
  const PAGE_LIMIT = 8;

  const API_URL =
    "https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge";

  const SCREEN = window.screen.width;
  console.log(SCREEN);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await fetch(API_URL);
    const data = await response.json();
    setBookies(data);
    setOrderedBookies(data);
    setSearchBookies(data);
    setPaginateBookies(data.slice(0, 8));
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
        setPaginateBookies(filterByInputSearch(searchBookies, inputSearch)),
        10
      );
    }
    if (inputSearch === "") {
      setTimeout(
        setOrderedBookies(searchBookies),
        setPaginateBookies(searchBookies),
        10
      );
    }
  }, [inputSearch, orderedBookies, searchBookies]);

  function onShowSizeChange(current, pageSize) {
    setCurrentPage(current);
    const offset = (current - 1) * pageSize;
    setOffset(offset);
    console.log(current, pageSize, offset);
    //const start = allCountries.slice(offset, offset + pageLimit);
  }
  useEffect(() => {
    setPaginateBookies(orderedBookies.slice(offset, offset + PAGE_LIMIT));
  }, [currentPage, offset, orderedBookies]);
  console.log(paginateBookies, orderedBookies);

  return (
    <>
      <div className="grid-total">
        <span>Total: {orderedBookies.length}</span>
      </div>
      <div className="grid-container">
        <div className="grid grid-columns">
          {paginateBookies.map((book, index) => {
            return <Book book={book} id={book.name} key={index} />;
          })}
        </div>
      </div>
      {SCREEN >= 768 ? (
        <div className="pagination-container">
          <StyledPagination
            color={theme.color.body}
            size="medium"
            total={orderedBookies.length}
            onShowSizeChange={onShowSizeChange}
            defaultCurrent={1}
            defaultPageSize={PAGE_LIMIT}
            onChange={onShowSizeChange}
          />
        </div>
      ) : null}
    </>
  );
};

export default GridBook;
