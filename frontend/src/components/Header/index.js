import React, { useContext } from "react";
import ThemeTogglerButton from "../TogglerThemeButton";
import { ThemeContext } from "../../contexts/theme-context";
import "./styles.less";

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  console.log(theme, toggleTheme, "header");
  return (
    <div
      className="header"
      style={{
        backgroundColor: theme.background.header,
        color: theme.color.header,
      }}
    >
      <span>Livraria do cowboy</span>
      <ThemeTogglerButton title={`${theme.name} theme`} />
    </div>
  );
};
export default Header;
