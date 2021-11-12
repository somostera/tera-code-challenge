import React, { useContext } from 'react'


import {View,Link,Text} from  '../components'
import { ThemeContext } from 'styled-components'
import { BookstoreContext } from '../stores/Bookstore'
import { AiFillHeart,AiOutlineHeart } from 'react-icons/ai'
import _ from 'lodash'

import styled from 'styled-components'

const FronCover = styled.img`
   width: 50%;
   margin: 8px;
`
const BookDetails = () => {

  const theme = useContext(ThemeContext)

  const {booksData,setBooksData,selectedBook,setShowBookDetail} = useContext(BookstoreContext)

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


  return <><Link  color={theme.colors.gray} mt={3} ml={5} onClick={() => setShowBookDetail(false)}>{"< Voltar"}</Link>
   <View alignItems="center" justifyContent="center"  width="100%" ml={"3rem"} flexDirection="row">

        <View  width="70%" my={5} ml={"25rem"} flexDirection="column" alignItems="center" justifyContent="center">
          <View  width="100%" flexDirection="row" alignItems="center" justifyContent="center">
           <View  width="100%" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
              <Text type="h3"> {selectedBook.name}</Text>
              <View  width="100%" flexDirection="row" alignItems="flex-start" justifyContent="space-between">
                <Text type="large"> {selectedBook.author}</Text> {selectedBook.liked ? <AiFillHeart size="3.5rem" color={theme.colors.red} cursor="pointer" onClick={() =>onLikeBook(selectedBook)}/> : <AiOutlineHeart size="3.5rem" cursor="pointer" color={theme.colors.icon}  onClick={() =>onLikeBook(selectedBook)}/>}
              </View>
              <Text type="large" > {"Em estoque:"+selectedBook.stock}</Text>
              <Text type="medium" mt={5}> {selectedBook.description}</Text>
            </View>
            <View  width="100%" flexDirection="column" alignItems="stretch" justifyContent="flex-start">
              <FronCover src={selectedBook.cover_picture}/>
            </View>
          </View>
        </View>
          </View>

   </>
}

export default BookDetails
