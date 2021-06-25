import Vue from 'vue';
import Vuex from 'vuex';
import { API } from '../config/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useDarkTheme: false,
    books: [],
    currentUser: 'Paula',
  },
  getters: {
    // TODO separate into module.
    getBooks: (state) => state.books,
    getBooksAmount: (state) => state.books.length,
    useDarkTheme: (state) => state.useDarkTheme,
    getUser: (state) => state.currentUser,
  },
  mutations: {
    updateBooks: (state, payload) => {
      state.books = payload;
    },
    updateTheme: (state) => {
      state.useDarkTheme = !state.useDarkTheme;
    },
  },
  actions: {
    fetchBooks: async ({ commit }) => {
      const response = await API.get('/');
      const { data } = response;
      console.log(data);
      commit('updateBooks', data);
    },
    toggleTheme: ({ commit }) => {
      commit('updateTheme');
    },
  },
});
