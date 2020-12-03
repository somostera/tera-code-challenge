import { createStore } from 'vuex'
import { BookModule } from './Book'

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    Book: BookModule
  }
})
