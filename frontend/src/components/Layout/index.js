import React, { useContext } from "react";
import Header from "../Header";
import { ThemeContext } from "../../contexts/theme-context";
import "./styles.less";

const Layout = ({ children }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div className="layout">
      <Header />
      <div
        className="layout-body"
        style={{
          backgroundColor: theme.background.body,
          color: theme.color.body,
        }}
      >
        {children}
      </div>
    </div>
  );
};
export default Layout;
