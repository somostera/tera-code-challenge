import React, { useContext } from 'react'
import {  ThemeProvider } from '../src/components'
import Home from '../src/pages/Home'
import { BookstoreContext } from '../src/stores/Bookstore'


const InsertTheme = () => {

  const {darkTheme} = useContext(BookstoreContext)

  return <>
   <ThemeProvider dark={darkTheme} >
   <Home />
    </ThemeProvider>
   </>
}

export default InsertTheme
