import Vue from 'vue'
import Vuex from 'vuex'
import { api } from '@/services'
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
    LOGIN(state, payload) {
      state.login = payload
    }
  },
  actions: {
    loginUser(_, payload) {
      return api
        .login({
          email: payload.email,
          password: payload.password
        })
        .then((response) => {
          localStorage.set('token', `Bearer ${response.data.data.token}`)
        })
    }
  }
})
