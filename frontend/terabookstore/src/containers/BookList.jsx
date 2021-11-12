import React, { useContext } from 'react'

import {View,Text} from  '../components'
import _  from 'lodash'

import { ThemeContext } from 'styled-components'
import { BookstoreContext } from '../stores/Bookstore'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'


import styled from 'styled-components'

const FronCover = styled.img`
    width: 50%;
    margin: 8px;
`

const BookList = () => {

  const theme = useContext(ThemeContext)

  const {booksData,setBooksData,setShowBookDetail, setSelectedBook} = useContext(BookstoreContext)

  const OnClickBook = (book) =>{
    setSelectedBook(book)
    setShowBookDetail(true)
  }

  const onLikeBook = (book) =>{
   let books= _.map(booksData, (b) =>{
      if(b === book){
        if(b.liked === undefined){
          b.liked = true
        }else{
          b.liked = !b.liked
        }

      }
      return b
    })
    setBooksData(books)
  }

  return  <View style={{ backgroundColor: ` ${theme.colors.backgroundColor}` }} width="100%" >

      {booksData.length > 0 ?
            <View width="98%" ml={"3rem"} flexWrap="wrap" flexDirection="row">
                {_.map(booksData, (book, i)=>{
                  return  <View  key={i}  p={5} my={2} mr={4} width="20%" height="45rem" alignItems="center">

                      <View flexDirection="column" height="70%" alignItems="center" justifyContent="center"  onClick={() => OnClickBook(book)}>
                          <FronCover src={book.cover_picture}/>
                      </View>
                      <View flexDirection="row" width="100%"  alignItems="center" >
                      <View flexDirection="column" flex="90" mt={"2rem"} mb={"2rem"} alignItems="flex-start" justifyContent="flex-start">
                          <Text type="" fontSize="2.5rem" fontWeight="bold" ml={"1rem"}> {book.name}</Text>
                          <Text type="" fontSize="2rem" ml={"1rem"}> {book.author}</Text>
                          <Text type="" fontSize="2rem" ml={"1rem"}> {book.category}</Text>
                      </View>
                        <View flexDirection="column" flex="10" alignItems="center" justifyContent="flex-end">
                        {book.liked ? <AiFillHeart size="3.5rem" color={theme.colors.red} cursor="pointer" onClick={() =>onLikeBook(book)}/> : <AiOutlineHeart size="3.5rem" cursor="pointer"  color={theme.colors.icon} onClick={() =>onLikeBook(book)}/>}
                        </View>
                      </View>
                  </View>

                })}
            </View>:
            <Text type="" fontSize="2.5rem" fontWeight="bold" ml={"4rem"}> {"Sem resultados para exibir"}</Text>
      }


        </View>
}

export default BookList
