import React from "react";
import ListBooks from "../../componentes/listBooks";
import { Container } from "@material-ui/core";

const Home = () => {
  return (
    <Container maxWidth={"lg"}>
      <ListBooks />
    </Container>
  );
};

export default Home;
