import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosArrowDown } from 'react-icons/io'
//import uuid from 'uuid/v4'
import { v4 as uuidv4 } from 'uuid';
import {  likeProduct, updateProducts } from '../redux/shelf/actions'

import { InputSearch, InputCategoryFilter } from '../components/CustomInput/styles'
import { ContainerFluid } from '../components/Container/styles'
import { Toolbar, ToolbarCenter } from '../components/Toolbar/styles'
import { TotalBooks, NoProducts } from '../components/Typography/styles'

import Paginator from '../components/Paginator'
import CustomLikeButton from '../components/CustomLikeButton'
import CustomImg from '../components/CustomImg'
import CustomLoading from '../components/CustomLoading'

import { 
  ProductList,
  ProductItem,
  ProductItemTop,
  BookContainer,
  BookItem,
  BookTitleShelf,
  BookAuthorShelf,
  BookCategoryShelf,
  ProductPaginator
} from '../components/Product/styles'


import { 
  Dropdown,
  DropdownButton,
  DropdownContent,
  DropdownIconButton,
  DropdownList,
  DropdownListItem
} from '../components/Dropdown/styles'


import api from '../Api'

export default function Shelf () {
  const [loading, setLoading] = useState(false)
  const [ searchText, setSearchText ] = useState('')
  const [ categoryText, setCategoryText ] = useState('')

  const [ filters, setFilters ] = useState({
    bestRating: false,
    inStock: false,
    alphabeticalSort: false,
    liked: false,
    category: false,
  })

  const dispatcher = useDispatch()
  const { products, total, paginator } = useSelector(state => state.shelf)

  useEffect(() =>  {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        let { data: products } = await api.get('/url-tera-code-challenge')
        products = products.map(p => ({...p, id: uuidv4(), liked: p.users_who_liked.length > 0 }))
        dispatcher(updateProducts(products , {
          searchText,
          paginator,
          filters: { ...filters, categoryText }
        }))
      } catch(err) {

      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [filters, categoryText, paginator, searchText, dispatcher])
  

  function handleFetchProductsPaginator(page = 1) {
    dispatcher(updateProducts(products , {
      searchText,
      paginator: {
        ...paginator,
        page
      },
      filters: { ...filters, categoryText }
    }))
  }

  function handleLike(productId) {
    dispatcher(likeProduct(productId))
  }

  function handleToggleFilter(filterName) {
    const value = filters[filterName]
    setFilters({ ...filters, [filterName]: !value })
  }

  return (
    <ContainerFluid>
      <Toolbar>
        <InputSearch placeholder="Procure por um livro" value={searchText} onChange={e => setSearchText(e.target.value)} />
        <Dropdown>
            <DropdownButton>
              <span>Filtros</span>
              <DropdownIconButton>
                <IoIosArrowDown />
              </DropdownIconButton>
            </DropdownButton>
            <DropdownContent>
              <DropdownList>
                <DropdownListItem
                  onClick={() => handleToggleFilter('bestRating')} 
                  checked={filters.bestRating}>Melhores Avaliados
                </DropdownListItem>
                <DropdownListItem
                  onClick={() => handleToggleFilter('inStock')} 
                  checked={filters.inStock}>Em Estoque
                </DropdownListItem>
                <DropdownListItem
                  onClick={() => handleToggleFilter('alphabeticalSort')} 
                  checked={filters.alphabeticalSort}>Ordem Alfabética
                </DropdownListItem>
                <DropdownListItem
                  onClick={() => handleToggleFilter('liked')} 
                  checked={filters.liked}>Livros Curtidos
                </DropdownListItem>
                <DropdownListItem
                  onClick={() => handleToggleFilter('category')} 
                  checked={filters.category}>Por Categoria
                </DropdownListItem>
              </DropdownList>
            </DropdownContent>
          </Dropdown>
          {
            
            filters.category ? (
              <InputCategoryFilter show={true} onChange={e => setCategoryText(e.target.value)} placeholder="Digite a categoria" />
            ) : null
          }
      </Toolbar>
      <Toolbar>
        <TotalBooks>Total: {total}</TotalBooks>
        
      </Toolbar>

      { loading && !total ?  (<CustomLoading />) : (null) }

      {
        !loading && total ? (
          <>
              <ProductList>
                {
                  products.map(product => {
                    const link = `/detail/${product.id}`
                    return (
                      <ProductItem key={product.id}>

                        <ProductItemTop to={link}>
                          <CustomImg src={product.cover_picture} alt={product.name} />
                        </ProductItemTop>

                        <BookContainer>
                          <BookItem to={link} >
                            <BookTitleShelf> {product.name} </BookTitleShelf>
                            <BookAuthorShelf> {product.author} </BookAuthorShelf>
                            <BookCategoryShelf> {product.category} </BookCategoryShelf>
                          </BookItem>

                          <CustomLikeButton active={product.liked} onClick={() => 
                            handleLike(product.id)} 
                          />
                        
                        </BookContainer>

                      </ProductItem>
                    )
                  })
                }
              
              </ProductList>

              <ProductPaginator>
                <Toolbar>
                  <ToolbarCenter>
                    <Paginator {...paginator} changePage={handleFetchProductsPaginator} />
                  </ToolbarCenter>
                </Toolbar>
              </ProductPaginator>   
          </>
        ) : (null)
      }

      {
        !loading && !total ? (<NoProducts />) : (null)
      }
    </ContainerFluid>
  )
 
}