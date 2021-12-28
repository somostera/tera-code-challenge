import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
} from "react-router-dom";
import * as routes from "./paths";
import Home from "../pages/home";
import Book from "../pages/detail-book";
import Layout from "../components/Layout";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path={routes.BOOK} element={<Book />} />
        <Route path={routes.HOME} element={<Home />} />
      </Switch>
    </Router>
  );
};
export default Routes;
