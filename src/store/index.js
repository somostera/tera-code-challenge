import Vue from 'vue'
import Vuex from 'vuex'

import bookStore from './state'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    bookStore
  }
})

export default store

