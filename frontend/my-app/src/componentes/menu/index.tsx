import React from "react";
import { AppBar, Typography, Grid, Container } from "@material-ui/core";
import * as S from "../../styles/global";

interface Props {
  toggleTheme(): void
}

const Menu: React.FC<Props> = ({ toggleTheme }) => {

  return (
    <AppBar position="static" style={{ marginBottom: "20px" }}>
      <S.ToolbarContent>
        <Container>
          <Grid container direction="row" justifyContent="space-between" alignItems="center">
            <Grid>
              <Typography className="title-menu" variant="h6">Livraria do cowboy</Typography>
            </Grid>
            <Grid>
              <S.ButtonContainer color="inherit" onClick={toggleTheme}>
                Dark mode
              </S.ButtonContainer>
            </Grid>
          </Grid>
        </Container>
      </S.ToolbarContent>
    </AppBar>
  );
};

export default Menu;
