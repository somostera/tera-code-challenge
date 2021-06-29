import { createGlobalStyle } from 'styled-components'

export const getVariable = name => `var(--${name})`

export default createGlobalStyle`
:root {
  --blue-dark-1: #121420;
  --blue-dark-2: #1B2432;

  --blue-light-1: #95D9DA;

  --grey-light-1: #F1FFFF;
  --grey-light-2: #C4CECE;
  --grey-light-3: #DDD;
  --grey-light-4: #8a8a8a;

  --grey-dark-1:  #403F4C;
  --grey-dark-2: #2c2c2e;

  --red-light-1: #ed5a70;

  --white: #fff;
  --black: #000;
  

  --bg-header-light: #95D9DA;
  --bg-content-light: #F1FFFF;

  --bg-header-dark: #121420;
  --bg-content-dark: #1B2432;

  --bg-search-dark: #403F4C;
  --bg-search-light: #fff; 

  --color-dark-1: #403F4C;

  --color-grey-1: #C4CECE;

  --color-white: #fff;
  --color-black: #000
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

body {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({currentTheme}) => getVariable(`bg-content-${currentTheme}`)};
}

a {
  text-decoration: none
}

ul {
  list-style: none
}


svg,
img {
  width: 100%;
  height: 100%;
}

img {
  object-fit: cover;
  display: block;
}

html,
body,
#root {
  min-height: 100%;
}

`;