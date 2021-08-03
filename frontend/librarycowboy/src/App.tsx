import { createContext, useState } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import HomePage from "./components/HomePage";
import Detail from "./components/BookDetail";
import { ThemeProvider, createTheme  } from '@material-ui/core/styles';

export const BookContext = createContext({} as {
  likeList: string[]
  setLikeList: React.Dispatch<React.SetStateAction<string[]>>
})

export const ModeContext = createContext({} as {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
})

const themeLight = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    }
  },
  palette: {
    text: {
      primary: "#000",
      secondary: "#fff"
    },
    primary: {
      light: '#f1ffff',
      main: '#95d9da',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ffffff',
      main: '#f1ffff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const themeDark = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
    h4: {
      fontSize: '1.2rem',
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
  },
  palette: {
    text: {
      primary: "#fff",
      secondary: "#000"
    },
    primary: {
      light: '#1b2432',
      main: '#121420',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#403f4c',
      main: '#f1ffff',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const App = () => {
  const [likeList, setLikeList] = useState<string[]>([])
  const [darkMode, setDarkMode] = useState(false)
  return (
    <BrowserRouter>
      <Switch>
        <ModeContext.Provider value={{ darkMode, setDarkMode }}>
          <BookContext.Provider value={{ likeList, setLikeList }}>
            <ThemeProvider theme={darkMode ? themeDark : themeLight}>
              <Route path="/" exact component={HomePage} />
              <Route path="/detail" exact component={Detail} />
              <Redirect to="/" />
            </ThemeProvider>
          </BookContext.Provider>
        </ModeContext.Provider>
      </Switch>
    </BrowserRouter>
  );
}
export default App;