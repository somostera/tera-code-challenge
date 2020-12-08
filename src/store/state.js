import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = {
  booksList: [],
  styleMode: 'light',
  filteredList: [],
  booksLiked: []
}

export default {
  actions,
  getters,
  mutations,
  state,
}
