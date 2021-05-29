import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Header, HeaderTitle, HeaderToggleTheme } from './components/Header/styles'
import { Container } from './components/Container/styles'

import GlobalStyles from './common/styles/global';

import { toggleTheme } from './redux/theme/actions'
import Routes from './routes';

const App = () => {
  const theme = useSelector(state => state.theme)

  const dispatcher = useDispatch()
  const handleToggleTheme = () => dispatcher(toggleTheme())

  // useEffect(() =>  dispatcher(fetchProducts(paginator.page, paginator.size)), [])

  return (
    <BrowserRouter >  
      <ThemeProvider theme={theme}>
        <Header>
          <Container>
            <HeaderTitle to="/">Livraria do cowboy</HeaderTitle>
            <HeaderToggleTheme onClick={handleToggleTheme}>{ theme.selected === 'dark' ? 'Light mode' : 'Dark mode' }</HeaderToggleTheme>
          </Container>
        </Header>
        <Container>
          <Routes />
        </Container>
      </ThemeProvider>
      <GlobalStyles currentTheme={theme.selected} />
    </BrowserRouter>
  );
}

export default App;
