import bookApi from '../api/bookApi'

const actions = {
  FETCH_BOOKS_LIST: async({commit}) => {
    try {
      const booksList = await bookApi.getAllBooks()
      commit('SET_BOOKS_LIST',booksList)
    } catch (error) {
      throw new Error(error)
    }
  }
}

export default actions