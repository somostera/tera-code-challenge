import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/home";
import Description from "./components/Description/descriptioPage.js";

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route
          path="/description/:cover_picture"
          exact
          element={<Description />}
        />
      </Routes>
    </BrowserRouter>
  );
}
