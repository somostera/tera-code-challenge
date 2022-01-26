/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import * as S from "../../styles/global";
import service from "../../services";
import * as types from "../types";


const SearchBar = (props:any) => {
  const [search, setSearch] = useState("");
  let list: types.responseListBooks[];

  const handleGetDataBooks = async () => {
    try {
      const response = await service.getAll();
      list = response.data;
    } catch (error) {
      console.log(error);
    }
  }; 

  async function handleOnSubmit(event: any) {
    event.preventDefault();

    handleGetDataBooks().then(resp => {
      props.props(list.filter((book) => book.name.toLowerCase().indexOf(search.toLowerCase()) !== -1));
    });    
  }

  function handleSearchChange(event: any) {
    setSearch(event.target.value.toLowerCase());
  }
 
  return (
    <form onSubmit={handleOnSubmit}>
      <Grid container direction="row" justifyContent="space-between" alignItems="center" style={{marginBottom: "20px"}}>
        <Grid item xs={7} lg={10}>
          <S.InputStyle onChange={handleSearchChange} placeholder="Procure por um livro" />
        </Grid>
        <Grid item xs={5} lg={2}>
          <S.SelectStyle placeholder="Filtros">
            <option defaultValue={1} selected>filtros</option>
            <option defaultValue={1}>melhores avaliados</option>
            <option defaultValue={1}>em estoque</option>
            <option defaultValue={1}>ordem alfabética</option>
            <option defaultValue={1}>livros curtidos</option>
            <option defaultValue={1}>por categoria</option>
          </S.SelectStyle>
        </Grid>
      </Grid>

    </form>
  );
};

export default SearchBar;
