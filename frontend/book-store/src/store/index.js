import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

import { SWITCH_DARK_MODE, SET_BOOK_LIST, LIKE_BOOK, 
  DISLIKE_BOOK, LIKE_ANIMATION} from './mutation-types'


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isDarkModeOn: false,
    books: [],
    myLikedBooks: [],
    isLikedAnimationOn: false,
    searchField: ''
  },
  mutations: {
    [SWITCH_DARK_MODE] (state, payload) {
      state.isDarkModeOn = payload;
    },
    [SET_BOOK_LIST] (state, payload) {
      state.books = payload;
    },
    [LIKE_BOOK] (state, payload) {
      state.myLikedBooks.push(payload);
    },
    [DISLIKE_BOOK] (state, payload) {
      state.myLikedBooks.splice(state.myLikedBooks.indexOf(payload), 1);
    },
    [LIKE_ANIMATION] (state) {
      state.isLikedAnimationOn = !state.isLikedAnimationOn;
    },
  },
  getters: {
    searchFilter(state) {
      return state.books.filter((val) => val.name.toLowerCase().includes(state.searchField.toLocaleLowerCase()))
    }
  },
  actions: {
    getBooks({ commit }) {
      axios.get('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge')
        .then(response => (
          commit('SET_BOOK_LIST', response.data)
        ))
    },
    switchDarkMode({ commit }, payload) {
      commit('SWITCH_DARK_MODE', payload)
    },
    switchLikeBook({ commit, state }, book) {
      if (state.myLikedBooks.includes(book)) {
        commit('DISLIKE_BOOK', book)
      } else {
        commit('LIKE_ANIMATION')
        commit('LIKE_BOOK', book)
        setTimeout(() => {
          commit('LIKE_ANIMATION')
        },500)
      }
    },
    searchFilter({ commit }) {
      commit('SEARCH_FILTER')
    },
  },
})
