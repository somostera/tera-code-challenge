import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { View } from '../components'
import Header from '../containers/Header'
import ActionPanel from '../containers/ActionPanel'
import BookDetails from '../containers/BookDetails'
import BookList from '../containers/BookList'
import { BookstoreContext } from '../stores/Bookstore'


const Home = () => {

  const {showBookDetail} = useContext(BookstoreContext)
  const theme = useContext(ThemeContext)


  return <>
   <View style={{ backgroundColor: ` ${theme.colors.backgroundColor}` }} width="100%" height="100%" >
   <Header/>
        {showBookDetail ? <BookDetails />: <><ActionPanel/> <BookList /></>}
    </View>
   </>
}

export default Home
