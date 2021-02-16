import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import axios from 'axios'

Vue.use(Vuex)
export default new Vuex.Store({
    state:{
        isDark : 'light',
        booksLiked: [],
        user: null
    },
    plugins: [createPersistedState({
        storage: window.localStorage,
    })],
    mutations:{
        setIsDark(state, mode){
            state.isDark = mode
        },
        setUser(state,user){
            state.user = user
            if(user){
                axios.defaults.headers.common['Authorization'] = `${user.token}`
            } else{
                delete axios.defaults.headers.common['Authorization']
            }
        },
        setBooksLiked(state, book){
            let position = state.booksLiked.findIndex(b => b._id === book._id)
            if(position === -1){
                state.booksLiked.push(book)
            }
            
        },
        removeBooksLiked(state, book){
            let position = state.booksLiked.findIndex(b => b._id === book._id)
            state.booksLiked.splice(position, 1)
        }
    },
    getters:{
        getIsDark(state){
            return  state.isDark
        },
        getBooksLiked(state){
            return  state.booksLiked
        },
        getUser(state) {
            return state.user.id;
        }
    }
})