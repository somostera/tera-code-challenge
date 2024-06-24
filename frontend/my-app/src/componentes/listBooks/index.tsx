import React, { useEffect, useState } from "react";
import * as S from "../../styles/global";
import { Container, Grid, Button, Checkbox } from "@material-ui/core";
import service from "../../services";
import * as types from "../types";
import { Link } from "react-router-dom";
import { PaginatedList } from "react-paginated-list";
import SearchBar from "../filter";
import SkeletonComponent from "../skeleton";
import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const ListBooks = () => {
  const [listBooks, setListBooks] = useState<types.responseListBooks[]>([]);
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [favorites, setFavorites] = useState<boolean>(localStorage.getItem("favorites") === "false" ? false : true);

  useEffect(() => {
    handleGetDataBooks();
    setBooks(books);
  }, []);

  const handleGetDataBooks = async () => {
    try {
      setLoading(true);
      const response = await service.getAll();
      setListBooks(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleClickFavorite = (event: any) => {
    event.preventDefault();
    localStorage.setItem("favorites", JSON.stringify(localStorage.getItem("favorites") === "false" ? true : false));
    setFavorites(!favorites);
  };

  return (
    <Container>
      <SearchBar props={setListBooks} books={listBooks} />
      {loading ? (
        <SkeletonComponent />
      ) : (
        <>
          <S.TypographyChanged>Total: {listBooks.length}</S.TypographyChanged>
          <PaginatedList
            ControlContainer={S.PaginatedStyle}
            list={listBooks}
            itemsPerPage={4}
            renderList={(listBooks) => (
              <>
                <S.CardListBook>
                  {listBooks.map((list, index) => (
                    <Link to={{ pathname: "/descricao/" + index, state: list }} key={index}>
                      <div className="columnCardList">
                        <S.CardMediaChanged src={list.cover_picture} />
                        <div className="cardList">
                          <S.TypographyChanged className="font">{list.name}</S.TypographyChanged>
                          <Grid container direction="row" justifyContent="space-between" alignItems="center">
                            <Grid>
                              <S.TypographySmall>{list.author}</S.TypographySmall>
                              <S.TypographySmall>{list.category}</S.TypographySmall>
                            </Grid>
                            <Grid>
                              <Button onClick={(event) => handleClickFavorite(event)}>
                                <Checkbox checked={favorites} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                              </Button>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </Link>
                  ))}
                </S.CardListBook>
              </>
            )}
          />
        </>
      )}
    </Container>
  );
};

export default ListBooks;
