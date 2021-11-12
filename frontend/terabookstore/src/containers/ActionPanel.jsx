import React, { useContext } from 'react'

import {View,Input,Select} from  '../components'

import { BookstoreContext } from '../stores/Bookstore'


const ActionPanel = () => {

  const {optionFilter,selectedFilter, setSelectedFilter,  category, setCategory,
    bookName, setBookName,} = useContext(BookstoreContext)

  const onBookName = e => {
    setBookName(e.target.value)
  }

  const onCategory = e => {
    setCategory(e.target.value)
  }

  return <>
      <View  my={3} width="100%" flexDirection="row" alignItems="center" justifyContent="space-between">
       <View flexDirection="row" ml={5} alignItems="center">
          <Input  type="text" placeholder="Procure por um livro"  value= {bookName} ml={5} onChange={onBookName}/>
        </View>
        <View  flexDirection="row" mr={"4rem"} alignItems="center">
            {selectedFilter === "5" && <Input type="text" value={category} placeholder="Nome da Categoria"  onChange={onCategory} />}
             <Select ml={3} value={selectedFilter} onChange={setSelectedFilter} options={optionFilter} placeholder="Filtros"  />
        </View>
      </View>


   </>
}

export default ActionPanel
