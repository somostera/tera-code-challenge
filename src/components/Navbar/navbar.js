import React from "react";
import "./navbar.style.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="title-content">
        <h1 className="Title">Livraria do Cowboy</h1>
      </div>
      <div className="mode-text-content">
        <p className="mode-text">Dark mode</p>
      </div>
    </div>
  );
};

export default Navbar;
