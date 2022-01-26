import React from "react";
import {Route, BrowserRouter, Switch } from "react-router-dom";

import Home from "./pages/home";
import Description from "./pages/description";

function Routes() {
  return(
    <BrowserRouter>
    <Switch>
      <Route component={Home} path="/" exact />
      <Route path="/descricao/:index" render={({location}) => {
        const {state}:any = location;
        return(
          <Description book={state} />
          ); 
      }} />
    </Switch>
    </BrowserRouter>
  );
}

export default Routes;