import React, { 
  createContext, 
  ReactNode, 
  Dispatch, 
  SetStateAction, 
  useContext, 
  useState, 
  useEffect 
} from 'react';

import { ThemeProvider } from 'styled-components';

import { lightTheme, darkTheme } from '../styles/themes';

import GlobalStyle from '../styles/global';

import { api } from '../services/api';

interface GlobalContextProviderProps {
  children: ReactNode;
}

type BooksData = {
  author: string;
  category: string;
  cover_picture: string;
  description: string;
  name: string;
  stock: number;
  users_who_liked: string[];
}

type BooksDataFormatted = BooksData & {
  me_like: boolean;
}

interface GlobalContextData {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  booksFormatted: BooksDataFormatted[];
  setBooksFormatted: Dispatch<SetStateAction<BooksDataFormatted[]>>;
  handleLikeBook: (name: string, isLiked: boolean) => void;
}

const GlobalContext = createContext({} as GlobalContextData);

export function GlobalContextProvider({ children }: GlobalContextProviderProps) {
  const [theme, setTheme] = useState('light');
  const [booksFormatted, setBooksFormatted] = useState<BooksDataFormatted[]>([]);

  const currentTheme = theme === 'light' ? lightTheme : darkTheme;

  function formmatBooks(books: BooksData[]) {
    const formattedBooks = books.map(book => {
      return {
        ...book,
        me_like: false,
      }
    });

    return formattedBooks;
  }

  function handleLikeBook(name: string, isLiked: boolean) {
    const newBooksLiked = booksFormatted.map(book => {
      if (book.name === name) {
        return {
          ...book,
          me_like: isLiked,
        }
      } else {
        return {
          ...book,
        }
      }
    });

    setBooksFormatted(newBooksLiked);
  }

  

  useEffect(() => {
    async function loadData() {
      const { data } = await api.get('/');
  
      const newBooks = formmatBooks(data);
  
      setBooksFormatted(newBooks);
    }

    loadData();
  }, []);

  return(
    <GlobalContext.Provider 
    value={{
      theme, 
      setTheme,
      booksFormatted,
      setBooksFormatted,
      handleLikeBook,
    }}>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        { children }
      </ThemeProvider>
    </GlobalContext.Provider>
  )
}

export function useGlobalContext() {
  const context = useContext(GlobalContext);

  return context;
}
