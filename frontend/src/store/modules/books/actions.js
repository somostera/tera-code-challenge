
import axios from 'axios';
import { Constantes } from '../../../utils/Constantes';
import header from '../../../utils/headers';

const baseURL = Constantes.ENDPOINT;
var headers = header.headers;

// to handle actions
export default {
  getBooks({ commit }) {
    return axios.get(baseURL + '/url-tera-code-challenge',
    {
      headers
    })
      .then(response => {
        if(response.status == 200) {
          commit('SET_BOOKS', response.data);
        }
      }).catch(error => {
        commit('SET_ERROR_MESSAGE', 666, error)
      });
  },
  getInStock({commit}) {
    commit('SET_IN_STOCK');
    commit('UPDATE_PAGE', 1);
  },
  getBestRated({commit}) {
    commit('SET_BEST_RATED');
    commit('UPDATE_PAGE', 1);
  },
  getSorted({commit}) {
    commit('SET_SORTED');
    commit('UPDATE_PAGE', 1);
  },
  getSearchBooks({commit}, searchText) {
    commit('SET_SEARCH_BOOKS', searchText.mySearchText);
    commit('UPDATE_PAGE', 1);
  },
  getSearchBooksByCategory({commit}, searchText) {
    commit('SET_SEARCH_BOOKS_BY_CATEGORY', searchText.mySearchText);
    commit('UPDATE_PAGE', 1);
  },
  getMyLikedBooks({commit}){
    commit('SET_MY_LIKED_BOOKS');
    commit('UPDATE_PAGE', 1);
  },
  setLikeBook({commit}, title) {
    commit('SET_LIKE_BOOK', title);
  },
  updatePage({commit}, page) {
    commit('UPDATE_PAGE', page);
  }
}