import Vue from 'vue';
import Vuex from 'vuex';
import { API } from '../config/api';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    useDarkTheme: false,
    books: [],
  },
  getters: {
    getBooks: (state) => state.books,
    useDarkTheme: (state) => state.useDarkTheme,
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
