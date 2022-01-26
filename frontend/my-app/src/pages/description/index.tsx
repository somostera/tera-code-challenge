import React from "react";
import { Container, Grid, IconButton } from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import * as S from "../../styles/global";

function Description(book: any) {
  return (
    <Container>
      <S.LinkStyled to="/">
        <ChevronLeftOutlinedIcon fontSize="small" /> 
        Voltar
      </S.LinkStyled>
      <Container maxWidth={"md"}>
        <Grid container justifyContent="center">
          <Grid item md={9}>
            <S.TypographyDescription>{book.book.name}</S.TypographyDescription>
            <S.ResponsiveDescription>
              <Grid container direction="row" justifyContent="flex-start">
                <Grid item xs={10} md={6}>
                  <S.TextSubtitle className="align-text">{book.book.author}</S.TextSubtitle>
                  <S.TextSubtitle>{book.book.category}</S.TextSubtitle>
                </Grid>
                <Grid item xs={2} md={1}>
                  <IconButton aria-label="add to favorites">
                    <FavoriteBorderOutlinedIcon />
                  </IconButton>
                </Grid>
              </Grid>
              <S.CardMediaChanged className="align-image flag" src={book.book.cover_picture} alt={book.book.name} />
            </S.ResponsiveDescription>
            {!book.book.stock ? (
              <S.TextSubtitle>Fora de estoque</S.TextSubtitle>
            ) : (
              <S.TextSubtitle>Em estoque: {book.book.stock} unidades</S.TextSubtitle>
            )}
            <S.TypographyDescription className="description-style">{book.book.description}</S.TypographyDescription>
          </Grid>
        </Grid>
      </Container>
    </Container>
  );
}

export default Description;
