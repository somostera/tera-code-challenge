import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '../services/index'
const { localStorage } = window

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    logged: false,
    user: {},
    book: {}
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.logged = payload
    },
    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload)
    },

    UPDATE_BOOK(state, payload) {
      state.book = Object.assign({}, state.book, payload)
    }
  },
  actions: {
    getUser(context) {
      return api.get('/user').then((response) => {
        context.commit('UPDATE_USER', response.data)
        context.commit('UPDATE_LOGIN', true)
      })
    },

    loginUser(_, payload) {
      return api
        .login({
          email: payload.email,
          password: payload.password
        })
        .then((response) => {
          localStorage.setItem('token', `Bearer ${response.data.token}`)
        })
    },

    createUser(_, payload) {
      return api.post('/users', payload)
    },

    logoutUser(context) {
      context.commit('UPDATE_USER', {})
      localStorage.removeItem('token')
      context.commit('UPDATE_LOGIN', false)
    },

    createBook(_, payload) {
      return api.post('/books', payload)
    },

    getBook(context, payload) {
      return api.get(`books/${payload}`).then((response) => {
        context.commit('UPDATE_BOOK', response.data)
      })
    },

    updateBook(context, payload) {
      return api.put(`/books/${payload.id}`, payload).then((response) => {
        context.commit('UPDATE_BOOK', response.data)
      })
    },

    deleteBook(context, payload) {
      return api.delete(`/books/${payload.id}`).then(() => {
        context.commit('UPDATE_BOOK', {})
      })
    },

    likeBook(context, payload) {
      return api
        .post(`/books/${payload.book.id}`, payload.deslike)
        .then((response) => {
          context.commit('UPDATE_BOOK', response.data)
        })
    }
  }
})
