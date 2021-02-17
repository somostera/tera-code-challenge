import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { api } from '../services/index'
const { localStorage } = window

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [createPersistedState()],
  strict: true,
  state: {
    darkmode: false,
    logged: false,
    placeholder: 'Procure um livro',
    searchBook: '',
    user: {}
  },
  mutations: {
    UPDATE_LOGIN(state, payload) {
      state.logged = payload
    },

    UPDATE_USER(state, payload) {
      state.user = Object.assign({}, state.user, payload)
    },

    UPDATE_PLACEHOLDER(state, payload) {
      state.placeholder = payload
    },

    UPDATE_SEARCH_BOOK(state, payload) {
      state.searchBook = payload
    },

    UPDATE_DARKMODE(state, payload) {
      state.darkmode = payload
    }
  },
  actions: {
    getUser(context) {
      return api.get('/user').then((response) => {
        context.commit('UPDATE_USER', response.data.data)
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
          localStorage.setItem('token', `Bearer ${response.data.data.token}`)
        })
    },

    createUser(_, payload) {
      return api.post('/user', payload)
    },

    logoutUser(context) {
      context.commit('UPDATE_BOOK', false)
      context.commit('UPDATE_USER', {})
      localStorage.removeItem('token')
      context.commit('UPDATE_LOGIN', false)
      context.commit('UPDATE_DARKMODE', false)
    },

    setPlaceholder(context, payload) {
      if (payload) {
        context.commit('UPDATE_PLACEHOLDER', payload)
      }
    },

    setSearch(context, payload) {
      context.commit('UPDATE_SEARCH_BOOK', payload)
    },

    setDarkmode(context, payload) {
      context.commit('UPDATE_DARKMODE', payload)
    }
  }
})
