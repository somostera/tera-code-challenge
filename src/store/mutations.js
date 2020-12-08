const mutations = {
  SET_BOOKS_LIST: (state, booksList) => {
    state.booksList = booksList
  },

  SET_FILTERED_LIST: (state, filteredList) => {
    state.filteredList = filteredList
  },

  SET_BOOKS_LIKED: (state, booksLike) => {
    state.booksLiked = booksLike
  },

  SET_STYLE_MODE: (state, styleMode) => {
    state.styleMode = styleMode
  }
}

export default mutations