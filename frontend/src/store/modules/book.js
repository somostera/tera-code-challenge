import api from '../../api'
import * as type from '../mutation-types'

export default {
    namespaced: true,
    state: {
        book: {},
        books: [],
        favoriteBooks: [],
        error: null,
    },
    getters: {
        book(state) {
            return state.book
        },
        books(state) {
            return state.books
        },
        favoriteBooks(state) {
            return state.favoriteBooks
        },
        error(state) {
            return state.error
        },
    },
    mutations: {
        [type.FETCHING_BOOKS_SUCCESS](state, books) {
            state.books = books
        },
        [type.FETCHING_BOOKS_ERROR](state, error) {
            state.error = error
        },
        [type.SET_BOOK_SUCCESS](state, book) {
            state.book = book
        },
        [type.SET_BOOK_ERROR](state, error) {
            state.error = error
        },
        [type.LIKE_BOOK_SUCCESS](state, book) {
            if (!state.favoriteBooks.some(b => b.name === book.name)) {
                state.favoriteBooks.push(book)
            }
        },
        [type.LIKE_BOOK_ERROR](state, error) {
            state.error = error
        },
        [type.UNLIKE_BOOK_SUCCESS](state, book) {
            let index = state.favoriteBooks.map(b => b.name).indexOf(book.name)
            state.favoriteBooks.splice(index, 1)
        },
        [type.UNLIKE_BOOK_ERROR](state, error) {
            state.error = error
        },
    },
    actions: {
        async getBooks({ commit }) {
            await api
                .getBooks()
                .then(response => {
                    commit(type.FETCHING_BOOKS_SUCCESS, response)
                    return response
                })
                .catch(error => {
                    commit(type.FETCHING_BOOKS_ERROR, error)
                    return error
                })
        },
        setBook({ commit }, book) {
            if (book) {
                commit(type.SET_BOOK_SUCCESS, book)
                return book
            } else {
                commit(type.SET_BOOK_ERROR, null)
                return null
            }
        },
        setBookFavorite({ commit }, book) {
            if (book) {
                commit(type.LIKE_BOOK_SUCCESS, book)
                return book
            } else {
                commit(type.LIKE_BOOK_ERROR, null)
                return null
            }
        },
        removeBookFavorite({ commit }, book) {
            if (book) {
                commit(type.UNLIKE_BOOK_SUCCESS, book)
                return book
            } else {
                commit(type.UNLIKE_BOOK_ERROR, null)
                return null
            }
        },
    },
}
