import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { likeProduct, fetchProductDetail } from '../redux/shelf/actions'
import CustomLink from '../components/CustomLink'
import CustomLikeButton from '../components/CustomLikeButton'

import { 
  BookTitle,
  BookAuthor,
  BookCategory,
  IsBookOnStock,
  BookDescription,
  BookContainer,
  BookImgContainer,
  BookDetails,
  BookImg,
  OutOfStockText
} from '../components/Product/styles'

import { Toolbar } from '../components/Toolbar/styles'
import { ContainerFluid, ContainerInfo } from '../components/Container/styles'


export default function Shelf () {
  const params = useParams()
  const history = useHistory()
  
  const { productsComplete, productDetail } = useSelector(state => state.shelf)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductDetail(productsComplete, params.id))
  }, [params.id, dispatch, history, productsComplete])

  function handleLike(productId) {
    dispatch(likeProduct(productId, true))
  }

  if (!productsComplete.length) return (<Redirect to="/" />)

  return productDetail ?  (
    <ContainerFluid>
      <Toolbar>
        <CustomLink to="/" icon={<IoIosArrowBack />} label="Voltar" />
      </Toolbar>

      <ContainerInfo >

        <BookContainer>
            <BookTitle> {productDetail.name} </BookTitle>

            <BookDetails>
              <BookAuthor> {productDetail.author} </BookAuthor>
              <BookCategory> {productDetail.category} </BookCategory>
    
              <CustomLikeButton 
                onClick={() => handleLike(productDetail.id)}
                active={productDetail.liked} 
                position='absolute'
                right="0"
              />
            </BookDetails>

            <IsBookOnStock>{
              productDetail.stock  ? 
              `Produto em estoque: ${productDetail.stock} unidades` 
              : 
              'Fora de estoque'
              }
              </IsBookOnStock>

            <BookDescription>
              { productDetail.description }
            </BookDescription>

            <BookImgContainer stockMissing={!productDetail.stock}>
              <BookImg src={productDetail.cover_picture} />
              <OutOfStockText>Fora do Estoque</OutOfStockText>

              <CustomLikeButton 
                active={productDetail.liked}
                display="block" 
                position='absolute' 
                bottom="5px"
                right="4px"
                onClick={() => handleLike(productDetail.id)} 
              />
            
            </BookImgContainer>

        </BookContainer>

      </ContainerInfo>
    </ContainerFluid>
  ) : null
}