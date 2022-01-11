// import dependency to handle HTTP request to our back end
import Vuex from 'vuex';
import Vue from 'vue';

import book from './modules/books/index.js';
import dark from './modules/dark_mode/index.js';

import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

//export store and modules
export default new Vuex.Store({
  modules: {
    book, dark
  },
  plugins: [createPersistedState()]
});