import React, { useState } from "react";

import SubHeader from "../../components/SubHeader";
import GridBook from "../../components/GridBook";

import {
  filterByCategory,
  sortByStock,
  sortByLikes,
  filterByAlphabeticalOrder,
} from "../../utils/filter";

const Home = () => {
  const [optionsFilter, setOptionsFilter] = useState([
    { sortBy: "rate", functionSort: sortByLikes, option: "Melhores Avaliados" },
    { sortBy: "stock", functionSort: sortByStock, option: "Em estoque" },
    {
      sortBy: "alphabetical",
      functionSort: filterByAlphabeticalOrder,
      option: "Ordem Alfabética",
    },
    {
      sortBy: "youLiked",
      functionSort: sortByLikes,
      option: "Livros Curtidos",
    },
    {
      sortBy: "category",
      functionSort: filterByCategory,
      option: "Por Categoria",
    },
  ]);
  const [filterBy, setFilterBy] = useState(undefined);
  const [inputSearch, setInputSearch] = useState("");
  const [inputCategorySearch, setInputCategorySearch] = useState("");

  return (
    <div>
      <SubHeader
        optionsFilter={optionsFilter}
        setFilterBy={setFilterBy}
        filterBy={filterBy}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
        setInputCategorySearch={setInputCategorySearch}
        inputCategorySearch={inputCategorySearch}
      />
      <GridBook
        filterBy={filterBy}
        inputSearch={inputSearch}
        inputCategorySearch={inputCategorySearch}
      />
    </div>
  );
};
export default Home;
