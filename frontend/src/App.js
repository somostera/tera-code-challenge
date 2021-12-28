import "./App.less";
import api from "./services/api";
import { useState, useEffect } from "react";
/* import Dropdown from "./components/Dropdown";
import TextBox from "./components/Textbox";
import EmptyBox from "./components/EmptyBox"; */
import Routes from "./routes/Routes";
import Layout from "./components/Layout";

import { ThemeContext, themes } from "./contexts/theme-context";
import ThemeTogglerButton from "./components/TogglerThemeButton";

function App() {
  const [categories, setCategories] = useState([]);
  const [choiceCategory, setChoiceCategory] = useState("");
  const [randomCategory, setRandomCategory] = useState(false);
  const [joke, setJoke] = useState({});

  const [theme, setTheme] = useState(themes.light);

  /* console.log(choiceCategory, joke);

  useEffect(() => {
    api
      .get("/categories")
      .then((response) => setCategories(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  useEffect(() => {
    api
      .get(`random?category=${choiceCategory}`)
      .then((response) => setJoke(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, [choiceCategory]);

  useEffect(() => {
    if (randomCategory) {
      setChoiceCategory(
        categories[Math.floor(Math.random() * categories.length)]
      );
    }
  }, [randomCategory, categories]);

  console.log(categories); */
  const toggleTheme = () => {
    console.log(theme);
    setTheme(theme === themes.dark ? themes.light : themes.dark);
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout>
        <Routes />
      </Layout>
    </ThemeContext.Provider>
  );
}

export default App;
