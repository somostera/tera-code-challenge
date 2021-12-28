import React, { useContext } from "react";
import ThemeTogglerButton from "../TogglerThemeButton";
import { ThemeContext } from "../../contexts/theme-context";
import Dropdown from "../../components/Dropdown";
import "./styles.less";

const SubHeader = ({
  optionsFilter,
  setFilterBy,
  inputSearch,
  setInputSearch,
}) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme, "header");
  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };

  return (
    <div
      className="sub-header"
      style={{
        color: theme.color.header,
      }}
    >
      <input
        type="text"
        onChange={handleChange}
        value={inputSearch}
        name="search"
        placeholder="Procure por um livro"
      />
      <Dropdown
        options={optionsFilter}
        title={"Filtros"}
        setFilterBy={setFilterBy}
      />
    </div>
  );
};
export default SubHeader;
