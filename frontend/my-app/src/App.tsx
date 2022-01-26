import React, {useState} from "react";
import Routes from "./routes";
import GlobalStyle from "./styles/global";
import Menu from "./componentes/menu";
import {ThemeProvider} from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

function App() {
  const [ theme, setTheme ] = useState("light");
  
   const toggleTheme = () => {
    if (theme === "light") {
      window.localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      window.localStorage.setItem("theme", "light");
      setTheme("light");
    }
  };

  return(
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Menu toggleTheme = {toggleTheme}/>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
