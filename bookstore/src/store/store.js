import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import config from '../../config/config'

Vue.use(Vuex);

const dynamicSort = (property) => {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

export default new Vuex.Store({
    state: {
        books: [],
        search: '',
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
        getBooksFromClassification: state => classification => {
            if(classification === 'melhores avaliados') {
                let books = state.books.filter(book => book.users_who_liked.length > 1)
                return books;
            } else if(classification === 'em estoque') {
                let books = state.books.filter(book => book.stock > 0)
                return books;
            } else if(classification === 'livros curtidos') {
                const likesPersonal = JSON.parse(localStorage.getItem('likes'));
                let array_books = [];
                for(let like of likesPersonal) {
                    let books = state.books.filter((book, index) => index == like);
                    array_books.push(books[0]) ;
                }
                return array_books;

            } else if(classification === 'ordem alfabetica') {
                console.log('ordenação');
                const cloneBooks = Array.from(state.books);
                return cloneBooks.sort(dynamicSort("name"));
            }
        },
        
    },
    actions: {
        getBooks({commit}) {
            axios.get(`${config.apiURL}/url-tera-code-challenge`)
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