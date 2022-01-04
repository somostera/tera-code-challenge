import { useState } from "react";
import Routes from "./routes/Routes";
import Layout from "./components/Layout";
import { ThemeContext, themes } from "./contexts/theme-context";

import "./App.less";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

function App() {
  const [theme, setTheme] = useState(themes.light);

  const toggleTheme = () => {
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
