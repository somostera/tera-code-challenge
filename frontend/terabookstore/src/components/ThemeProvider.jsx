import React, { Fragment } from 'react'
import { createGlobalStyle, ThemeProvider as StyledProvider } from 'styled-components'
import { Helmet } from 'react-helmet'

const GlobalStyle = createGlobalStyle`
/* Customize website's scrollbar like Mac OS

Not supports in Firefox and IE */

/* total width */

body::-webkit-scrollbar {

  background-color: #fff;

  width: 16px

}



/* background of the scrollbar except button or resizer */

body::-webkit-scrollbar-track {

  background-color: #fff

}



/* scrollbar itself */

body::-webkit-scrollbar-thumb {

  background-color: #babac0;

  border-radius: 16px;

  border: 4px solid #fff

}



/* set button(top and bottom of the scrollbar) */

body::-webkit-scrollbar-button {display:none}



body {

  margin: 0px;

}



html {

  font-size: 2px;

}




@media (max-width: 800px) {

  html {

    font-size: 12px;

  }

}



@media screen and (max-width: 960px) {

  html {

    font-size: 7px;

  }

}



@media screen and (max-width: 1024px) {

  html {

    font-size: 6.27px !important;

  }

}



@media screen and (max-width: 1280px) {

  html {

    font-size: 7.33px !important;

  }

}



@media screen and (min-width: 1366px) {

  html {

    font-size: 7.69px;

  }

}



@media screen and (max-width: 1600px) {

  html {

    font-size: 8.67px !important;

  }

}



@media screen and (min-width: 1920px) {

  html {

    font-size: 8px;

  }

}

`

/*********************
 * 1rem = 8px
 *********************/
export const theme = {
  colors: {
    backgroundColor: '#f1ffff',
    darkGray: '#303030',
    gray: '#777777',
    header: '#95d9da',
    icon: '#303030',
    input : '#ffffff',
    lightGray: '#e0e0e0',
    primary: '#95d9da',
    red: '#e50000',
    text: '#303030',
    textOn: '#fffff',
    textOff: '#000000',
    white: '#ffffff'
  },
  fontSizes: ['1.75rem', '2rem', '2.5rem', '3rem', '4.5rem', '8rem'],
  space: ['0rem', '0.5rem', '1rem', '2rem', '3rem', '4rem', '8rem', '16rem', '32rem', '64rem'],
  borders: {
    input: '0.25rem solid #E0E0E0', // Gray
    inputHovered: '0.25rem solid #777777', // Dark Gray
  },
}

export const darkTheme = {
  colors: {
    backgroundColor: '#1b2432',
    darkGray: '#303030',
    gray: '#777777',
    header: '#121420',
    icon: '#e0e0e0',
    input : '#403f4c',
    lightGray: '#e0e0e0',
    primary: '#121420',
    red: '#e50000',
    text: '#e0e0e0',
    white: '#ffffff'
  },
  fontSizes: ['1.75rem', '2rem', '2.5rem', '3rem', '4.5rem', '8rem'],
  space: ['0rem', '0.5rem', '1rem', '2rem', '3rem', '4rem', '8rem', '16rem', '32rem', '64rem'],
  borders: {
    input: '0.25rem solid #E0E0E0', // Gray
    inputHovered: '0.25rem solid #777777', // Dark Gray
  }
}

export const ThemeProvider = ({ children, dark }) => (
  <Fragment>
    <Helmet>
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;0,900;1,400&display=swap" rel="stylesheet" />
    </Helmet>
    <GlobalStyle />
    <StyledProvider theme={dark ? darkTheme: theme}>
      {children}
    </StyledProvider>
  </Fragment>
)
