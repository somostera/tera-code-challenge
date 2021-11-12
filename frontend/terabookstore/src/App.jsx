import React  from 'react'
import InsertTheme from './InsertTheme'
import { BookstoreProvider } from './stores/Bookstore'


const App = () =>{
  return(
    <BookstoreProvider>
     <InsertTheme/>
 </BookstoreProvider>

)

}

export default App
