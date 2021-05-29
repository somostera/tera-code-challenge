import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useHistory, Redirect } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'

import { likeProduct, fetchProductDetail } from '../redux/marketing/actions'

import CustomLink from '../components/CustomLink'
import CustomLikedButton from '../components/CustomLikedButton'

import { 
  ProductDetailTitle,
  ProductDetailAuthor,
  ProductDetailCategory,
  ProductDetailStock,
  ProductDetailSummary,
  ProductDetailBox,
  ProductDetailPictureBox,
  ProductDetailAbout,
  ProductDetailPicture,
  ProductDetailPictureNoStockDialog
  
} from '../components/Product/styles'
import { Toolbar } from '../components/Toolbar/styles'
import { ContainerFluid, ContainerDetail } from '../components/Container/styles'


export default function Marketing () {
  const params = useParams()
  const history = useHistory()
  
  const { productsComplete, productDetail } = useSelector(state => state.marketing)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductDetail(productsComplete, params.id))
  }, [params.id, dispatch, history, productsComplete])

  function handleLikeProduct(productId) {
    dispatch(likeProduct(productId, true))
  }

  if (!productsComplete.length) return (<Redirect to="/" />)

  return productDetail ?  (
    <ContainerFluid>
      <Toolbar>
        <CustomLink to="/" icon={<IoIosArrowBack />} label="Voltar" />
      </Toolbar>

      <ContainerDetail >
      <ProductDetailBox>
          <ProductDetailTitle>{productDetail.name}</ProductDetailTitle>

          <ProductDetailAbout>
            <ProductDetailAuthor>{productDetail.author}</ProductDetailAuthor>
            <ProductDetailCategory>{productDetail.category}</ProductDetailCategory>
   
            <CustomLikedButton 
              onClick={() => handleLikeProduct(productDetail.id)}
              active={productDetail.liked} 
              position='absolute'
              right="0"
              />
          </ProductDetailAbout>

          <ProductDetailStock>{
            productDetail.stock ? 
            `Produto em estoque: ${productDetail.stock} unidades` : 
            'Fora de estoque'
           }</ProductDetailStock>

          <ProductDetailSummary>
            { productDetail.description }
          </ProductDetailSummary>

          <ProductDetailPictureBox stockMissing={!productDetail.stock}>
            <ProductDetailPicture src={productDetail.cover_picture} />
          <ProductDetailPictureNoStockDialog>Fora do Estoque</ProductDetailPictureNoStockDialog>


          <CustomLikedButton 
            active={productDetail.liked}
            display="block" 
            position='absolute' 
            bottom="5px"
            right="4px"
            onClick={() => handleLikeProduct(productDetail.id)} 
          />
          
          </ProductDetailPictureBox>
      </ProductDetailBox>
      </ContainerDetail>
    </ContainerFluid>
  ) : null
}