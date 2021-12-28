import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import SubHeader from "../../components/SubHeader";
import GridBook from "../../components/GridBook";
import Dropdown from "../../components/Dropdown";
import {
  sortByHigher,
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

  return (
    <div>
      <SubHeader
        optionsFilter={optionsFilter}
        setFilterBy={setFilterBy}
        setInputSearch={setInputSearch}
        inputSearch={inputSearch}
      />
      <GridBook filterBy={filterBy} inputSearch={inputSearch} />
    </div>
  );
};
export default Home;
