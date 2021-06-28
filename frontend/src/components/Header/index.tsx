import React from 'react';

import { useGlobalContext } from '../../contexts/GlobalContext';

import {
  Container,
} from './styles';

export function Header(){
  const { theme, setTheme } = useGlobalContext();

  function handleChangeTheme(theme: string) {
    setTheme(theme);
  }

  return (
    <Container>
      <h1>Livraria do cowboy</h1>
      {theme === 'light' 
        ? (
          <button onClick={() => handleChangeTheme('dark')}>
            Dark mode
          </button>
        ) : (
          <button onClick={() => handleChangeTheme('light')}>
            Light mode
          </button>
        )
      }
    </Container>
  );
}