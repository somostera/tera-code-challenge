import Vue from 'vue'
import Vuex from 'vuex'
import booksModule from './modules/book'
import {
    SHOW_LOADER,
    HIDE_LOADER,
    SET_THEME_DARK,
    SET_THEME_LIGHT,
} from './mutation-types'

import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        isDark: false,
        store: {
            name: 'Livraria do cowboy',
        },
    },
    mutations: {
        [SHOW_LOADER](state) {
            state.isLoading = true
        },
        [HIDE_LOADER](state) {
            state.isLoading = false
        },
        [SET_THEME_DARK](state) {
            state.isDark = true
        },
        [SET_THEME_LIGHT](state) {
            state.isDark = false
        },
    },
    getters: {
        isLoading: state => state.isLoading,
        isDark: state => state.isDark,
        store: state => state.store,
    },
    modules: {
        booksModule: booksModule,
    },
    plugins: [vuexLocal.plugin],
})
