import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { getVariable } from '../../common/styles/global'
import CustomImg from '../CustomImg'

export const ProductList = styled.div`
  width: 100%;
  display: grid;
  grid-gap: 5rem;
    grid-template-columns: repeat(4, 1fr);
  
  @media screen and (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }



`
export const ProductItem = styled.div`
  padding: 1rem;
  display: flex;
  flex-direction: column;
`
export const ProductItemTop = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: center;
  

  img {
    width: 100%;
    max-width: 57%;
  }
`
export const ProductItemContent = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  margin-top: 2rem;

  button {
    margin-left: 1rem;
  }
`
export const ProductItemInfo = styled(Link)`
  flex-grow: 1;
  color: ${({ theme }) => theme.selected === 'dark' ? getVariable('white'): getVariable('black')};
`
export const ProductLikeBtn = styled.button`
  background-color: transparent;
  border: 0;
  /* width: 2.5rem;
  height: 2.5rem; */
  position: ${({ position }) => position || 'relative'};
  display: ${({ display }) => display || 'block' };
  cursor: pointer;

  ${({ position, top, left, right, bottom  }) => {
    const dynamic = {};
    if (position && top) dynamic.top = top;
    if (position && left) dynamic.left = left;
    if (position &&  right) dynamic.right = right;
    if (position && bottom) dynamic.bottom = bottom;
    return dynamic
  }}
  svg {
    width: auto;
    height: auto;
    font-size: 2.5rem;
    color: ${({ active, theme }) => getVariable(active ? 'red-light-1' : theme.selected === 'dark' ? 'white' : 'black' )};
  }
`
export const ProductItemTitle = styled.h2`
  font-size: 2rem;
  font-weight: lighter;
` 
export const ProductItemAuthor = styled.span`
  display: block;
  font-size: 1.2rem;
` 
export const ProductItemCategory = styled.span`
  font-size: 1.2rem;
` 
export const ProductPaginator = styled.div`
  width: 100%;
  margin-top: 4rem;
`
/*
Detail
*/

export const ProductDetailBox = styled.div`
  color: ${({ theme }) => getVariable(theme.selected === 'dark' ? 'white' : 'black')};
  height: 100%;

  display: grid;
  justify-items: center;
  grid-template-areas:
   "title title"
   "image image"
   "about stock"
   "about stock"
   "paragraph paragraph";
   @media screen and (min-width: 768px) {
    justify-items: start;
    column-gap: 3rem;
    grid-template-areas:
     "title image"
     "about image"
     "stock image"
     "paragraph image";
   }

`
export const ProductDetailTitle = styled(ProductItemTitle)`
  font-size: 3rem;
  font-weight: 400;
  margin-bottom: 1rem;
  width: 100%;
  grid-area: title;

  @media screen and (min-width: 480px) {
    font-size: 4rem;
  }
`
export const ProductDetailAbout = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: .7rem;
  margin-bottom: 1rem;
  flex-direction: column; 
  position: relative;


  grid-area: about;

  button {
    display: none;
  }

  @media screen and (min-width: 768px) {
    
    button {
      display: block;
    }
  }

`
const ProductDetailInfoBase = styled(ProductItemAuthor) `
  width: 100%;
  font-size: 1.4rem;

  @media screen and (min-width: 480px) {
    font-size: 1.6rem;
  }
`
export const ProductDetailAuthor = styled(ProductDetailInfoBase)`
`
export const ProductDetailCategory = styled(ProductDetailInfoBase)`
`
export const ProductDetailStock = styled(ProductDetailInfoBase) `
  margin-bottom: 1rem;
  margin-top: .7rem;
`
export const ProductDetailSummary = styled.p`
  font-size: 1.4rem;
 
  grid-area: paragraph;

  
`
export const ProductDetailPictureBox = styled.div.attrs(props => ({
  className: `${props.stockMissing ? 'stock-missing': ''}`
}))`
  display: block;
  position: relative;
  grid-area: image;
  &.stock-missing {
    opacity: 0.7
  }

  &.stock-missing .stock-missing-dialog {
    visibility: visible;
    backface-visibility: visible;
  }

  button {
    display: block;
  }

  @media screen and (min-width: 768px) {
    
    button {
      display: none;
    }
  }


`
export const ProductDetailPicture = styled(CustomImg)`
  width: 100%;
  /* height: auto; */
  object-fit: contain;
  max-width: 300px;
`
export const ProductDetailPictureNoStockDialog = styled.figcaption.attrs({
  className: 'stock-missing-dialog'
})`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  font-size: 1.8rem;
  width: 90%;
  transform: translate(-50%, -50%);
  background-color: ${getVariable('bg-header-dark')};
  color: ${() => getVariable('white')};
  box-shadow: 0 2px 3px rgba(0,0, 0,0.25);
  padding: 2rem .5rem;
  font-weight: bold;
  text-transform: uppercase;
  visibility: hidden;
  backface-visibility: hidden;
`