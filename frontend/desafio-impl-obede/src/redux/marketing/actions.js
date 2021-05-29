import keys from './keys'

export const updateProducts = (products, { searchText, paginator, filters }) => {
  return dispatch => {
    dispatch({
      type: keys.UPDATE_PRODUCTS,
      payload: {
        products,
        options: {
          searchText,
          paginator,
          filters
        }
      }
    })
  }
}

export const fetchProductDetail = (products, productId) => {
  return dispatch => {
    const index = products.findIndex(product => product.id === productId)
    return dispatch({
      type: keys.UPDATE_PRODUCT_DETAIL,
      payload: products[index]
    })
  }
}

export const likeProduct = (productId, updateDetail = false) => {
  return {
    type: keys.LIKE_PRODUCT,
    payload: {
      productId,
      updateDetail
    }
  }
}

