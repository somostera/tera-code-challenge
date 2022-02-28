import React from "react";
import "../Home/home.style.css";

const Input = ({ onchange }) => {
  function handleChanged(event) {
    onchange(event.target.value);
  }

  return (
    <input
      className="input"
      type="text"
      placeholder="Procure por um livro"
      onChange={handleChanged}
    />
  );
};

export default Input;
