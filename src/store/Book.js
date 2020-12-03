import { getBooksFromApi } from '../services/BooksService'

export const BookModule = {
  namespace: true,

  state: {
    books: [],
    book: null
  },

  mutations: {
    FETCH_BOOKS(state, books) {
      state.books = books
    },
    SET_BOOK(state, book) {
      state.book = book
    }
  },

  actions: {
    async fetchBooks({ commit }) {
      const { data } = await getBooksFromApi()
      commit('FETCH_BOOKS', data)
    },
    setBook({ commit }, book) {
      commit('SET_BOOK', book)
    },
    toggleLikeBook({ commit }, book) {
      const me = Object.values(book.users_who_liked).find(user => user === 'me')

      if (me) {
        const indexOfUser = book.users_who_liked.indexOf('me')
        book.users_who_liked.splice(indexOfUser, 1)
      } else {
        book.users_who_liked.push('me')
      }

      commit('SET_BOOK', book)
    }
  },

  getters: {
    getBookByName: state => bookName =>
      state.books.filter(book => book.name === bookName)[0],
    booksList: state => (filter, searchTerm) => {
      switch (filter) {
        case 'byCategory':
          return state.books.filter(book =>
            book.category.toLowerCase().includes(searchTerm)
          )
        case 'searchedByName':
          return state.books.filter(book =>
            book.name.toLowerCase().includes(searchTerm)
          )
        case 'alphabeticalOrder':
          return state.books.sort((a, b) => {
            const valueA = a.name
            const valueB = b.name
            if (valueA < valueB) {
              return -1
            }
            if (valueA > valueB) {
              return 1
            }
            return 0
          })
        case 'bestRated':
          return state.books.sort((a, b) => {
            const valueA = a.users_who_liked.length
            const valueB = b.users_who_liked.length
            return valueB - valueA
          })
        case 'likedBooks':
          return state.books.filter(book =>
            Object.values(book.users_who_liked).find(
              user => user.toLowerCase() === 'me'
            )
          )
        case 'inStock':
          return state.books.filter(book => book.stock > 0)
        default:
          return state.books
      }
    },
    booksListSize: (state, getters) => (filter, searchTerm) => {
      if (
        (filter === 'byCategory' || filter === 'searchedByName') &&
        searchTerm !== ''
      ) {
        return getters.booksList(filter, searchTerm).length
      }
      if (filter === 'byCategory' || filter === 'searchedByName') {
        return getters.booksList().length
      }
      return getters.booksList(filter).length
    },
    isBookLikedByMe: () => book => {
      const me = Object.values(book.users_who_liked).find(user => user === 'me')
      return me === 'me'
    }
  }
}
