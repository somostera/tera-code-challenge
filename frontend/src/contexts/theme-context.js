import React from "react";

export const themes = {
  light: {
    name: "light",
    color: { header: "#FFFFFF", body: "#000000" },
    background: {
      header: "#95D9DA",
      body: "#F1FFFF",
    },
  },
  dark: {
    name: "dark",
    color: { header: "#FFFFFF", body: "#FFFFFF" },
    background: {
      header: "#121420",
      body: "#1B2432",
    },
  },
};

export const ThemeContext = React.createContext({
  theme: themes.light,
  toggleTheme: () => {},
});
