import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../../config/config'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        books: [],
        search: ''
    },

    getters: {
        allBooks(state) {
            return state.books
        },
        getBooksFromIndex: state => id => {
            let book = state.books.find((item, index )=> {
                return(index == id);
            });
            return book;
        },
        getBooksFromName: state => name => {
            let books = state.books.filter(book => book.name.includes(name));
            return books;
        },
    },
    actions: {
        getBooks({commit}) {
            axios.get(`${config.apiURL}/books`)
            .then((response) => {
                commit('SET_BOOKS', response.data)
            })
        }
    },
    mutations: {
        SET_BOOKS(state, books) {
        state.books = books
        }
    }
})