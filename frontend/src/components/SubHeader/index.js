import React, { useContext } from "react";
import { ThemeContext } from "../../contexts/theme-context";
import Dropdown from "../../components/Dropdown";
import "./styles.less";

const SubHeader = ({
  optionsFilter,
  setFilterBy,
  inputSearch,
  setInputSearch,
  inputCategorySearch,
  setInputCategorySearch,
  filterBy,
}) => {
  const { theme } = useContext(ThemeContext);

  const handleChange = (event) => {
    setInputSearch(event.target.value);
  };
  const handleChangeCategory = (event) => {
    setInputCategorySearch(event.target.value);
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
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Dropdown
          options={optionsFilter}
          title={"Filtros"}
          setFilterBy={setFilterBy}
          filterBy={filterBy}
        />
        {filterBy?.sortBy === "category" ? (
          <input
            type="text"
            onChange={handleChangeCategory}
            value={inputCategorySearch}
            name="category-search"
            placeholder="Nome da Categoria"
            style={{
              width: "271px",
              position: "absolute",
              top: "195px",
              right: " 90px",
            }}
          />
        ) : null}
      </div>
    </div>
  );
};
export default SubHeader;
