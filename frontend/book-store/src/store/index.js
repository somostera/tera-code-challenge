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
    filters: {
      activatedFilter: '',
      searchField: '',
      searchCategoryField: '',
      searchSelectField: '',
    },
    loadingBooks: false,
    loadingErro: false,
    loadingErroMsg: '',
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
      const parsed = JSON.stringify(state.myLikedBooks);
      localStorage.setItem('myLikedBooks', parsed);
    },
    [DISLIKE_BOOK] (state, payload) {
      state.myLikedBooks.splice(state.myLikedBooks.indexOf(payload), 1);
      const parsed = JSON.stringify(state.myLikedBooks);
      localStorage.setItem('myLikedBooks', parsed);
    },
    [LIKE_ANIMATION] (state) {
      state.isLikedAnimationOn = !state.isLikedAnimationOn;
    },
  },
  getters: {
    
  },
  actions: {
    getLikes({state}) {
      if (localStorage.getItem('myLikedBooks')) {
          try {
            state.myLikedBooks = JSON.parse(localStorage.getItem('myLikedBooks'));
          } catch (e) {
            localStorage.removeItem('myLikedBooks');
          }
        }
    },
    getBooks({ commit, state }) {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        state.loadingBooks = true
        return config;
      }, function (error) {
        // Do something with request error
        return Promise.reject(error);
      });

      axios.get('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge')
        .then(response => (
          commit('SET_BOOK_LIST', response.data)
        ))
        .catch(error => {
          state.loadingErro = !state.loadingErro
          state.loadingErroMsg = error
        })
        .finally(() => {
          setTimeout(() => {
            state.loadingBooks = false
          }, 1000)
        })
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
  },
})
