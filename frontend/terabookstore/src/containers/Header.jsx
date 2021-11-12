import React, { useContext } from 'react'
import {View,Text,Toggle} from  '../components'
import { ThemeContext } from 'styled-components'
import { BookstoreContext } from '../stores/Bookstore'


const Header = () => {

  const theme = useContext(ThemeContext)
  const {darkTheme,setDarkTheme} = useContext(BookstoreContext)


  const setTheme = value => {
    setDarkTheme(value)

  }

  return <>
      <View style={{ backgroundColor: ` ${theme.colors.header}` }} width="100%" flexDirection="row" alignItems="center" justifyContent="space-between">
          <Text type="" m={3} ml={5} fontSize="3rem" >{"Livraria do Cowboy"}</Text>
          <Toggle  mr={5}  colorOff="#61b3b5" colorOn="#33374e" textOn={"Dark Mode"} state={darkTheme} textOff={"Light Mode"} onChange={setTheme} />
      </View>


   </>
}

export default Header
