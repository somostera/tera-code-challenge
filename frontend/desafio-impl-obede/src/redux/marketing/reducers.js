import { createReducer } from '../factory/create-reducer'
import keys from './keys'


const INITIAL_STATE = {
  productsComplete: [],
  products: [],
  productDetail: null,
  total: 0,
  paginator: {
    page: 1,
    size: 8,
    pages: 1
  }
}

const mappedActions = {
  [keys.UPDATE_PRODUCTS]: (state, { payload }) => {
    const copy = {...state}
    const productsComplete = copy.productsComplete.length ? copy.productsComplete : payload.products
    let products = [];
  
    const { searchText, filters } = payload.options;
    
    if (searchText && searchText.length) {
      products = productsComplete.filter(p => p.name.includes(searchText))
    }

    const { bestRating, alphabeticalSort, category, categoryText, inStock, liked } = filters
    if (bestRating) {
      products = productsComplete.filter(product => product.users_who_liked.length) 
    }
    if (liked) {
      products = productsComplete.filter(product => product.liked)
    }      
    if (inStock) {
      products = productsComplete.filter(product => product.stock > 0)
    }

    if (category) {
      if (categoryText && categoryText.length) {
        products = productsComplete.filter(product => product.category.includes(categoryText))
      }
    }
    if (alphabeticalSort) {
      products = productsComplete.sort((a, b) => a.name > b.name ? 1 :  -1)
    }
      
    if (!products.length) {
      products = [...productsComplete]
    }


    const { paginator } = payload.options;
    
    const size = copy.paginator.size !== paginator.size ? paginator.size :  state.paginator.size;
    const productsSize = products.length;

    const pages = Math.round( productsSize >= size ? productsSize / size : 1)
    const page = paginator.page
    
    if (products.length > paginator.size) {
      
      const startIndex = page > pages ? 1 : page === 1 ? 0 : (page - 1) * size;
      // const endIndex = startIndex + size > products.length - 1 ? products.length - 1 : startIndex + size
      const endIndex = startIndex + size;

      products = products.slice(startIndex, endIndex)
      
      copy.total = productsComplete.length
      
    } else {
      copy.total = products.length
    }


    
    paginator.size = size;
    paginator.pages = pages;
    paginator.page = page;
    
    copy.paginator = paginator
    copy.products = products;
    // copy.total = products.length
    copy.productsComplete = productsComplete;
    
    return copy
  },

  [keys.UPDATE_PRODUCT_DETAIL]: (state, { payload }) => {
    return {
      ...state,
      productDetail: payload
    }
  },

  [keys.LIKE_PRODUCT]: (state, { payload }) => {
    const copy = {...state}
    
    const compareId = id => item => item.id === id
    const indexList = copy.products.findIndex(compareId(payload.productId))
    const indexListComplete = copy.productsComplete.findIndex(compareId(payload.productId))


    if (indexList !== -1) {
      const liked = !copy.products[indexList].liked
      copy.products[indexList].liked = liked
      copy.productsComplete[indexListComplete].liked = liked
    }

    if (!payload.updateDetail) {
      if (copy.productDetail && payload.productId === copy.productDetail.id) {
        copy.productDetail = { ...copy.productDetail, liked: !!copy.productDetail.liked}
      }
    }

    return copy
  }
}

export default createReducer('marketing', INITIAL_STATE, mappedActions)