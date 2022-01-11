import { initialState } from './state';

// to handle mutations
export default {
  SET_BOOKS(state, books) {
    state.books = [...books];
    state.filteredBooks = [...books];
    state.totalPage = Math.ceil(state.filteredBooks.length / state.limit);
    state.page = 1;
    state.pageBooks = [...state.filteredBooks];
    state.pageBooks = state.pageBooks.splice(state.offset, state.limit);
  },
  SET_IN_STOCK(state) {
    state.filteredBooks = state.books.filter(book => book.stock > 0);
  },
  SET_BEST_RATED(state) {
    const books = state.books;
    books.sort(function(a, b) {
      if(a.users_who_liked.length < b.users_who_liked.length) return 1;
      if(a.users_who_liked.length > b.users_who_liked.length) return -1;
    });
    state.filteredBooks = books;
  },
  SET_SORTED(state) {
    const books = state.books;
    books.sort(function(a,b) {
      if(a.name > b.name) return 1;
      if(a.name < b.name) return -1;
      return 0;
    });
    state.filteredBooks = books;
  },
  SET_SEARCH_BOOKS(state, searchText) {
    state.filteredBooks = state.books.filter(book => book.name.toLowerCase().includes(searchText.toLowerCase()));
  },
  SET_SEARCH_BOOKS_BY_CATEGORY(state, searchText) {
    state.filteredBooks = state.books.filter(book => book.category.toLowerCase().includes(searchText.toLowerCase()));
  },
  SET_LIKE_BOOK(state, title) {
    let favorites = JSON.parse(localStorage.getItem('liked_books')) || [];
    //Se está no localstorage, remover
    const index = favorites.indexOf(title.title);
    const existsLocalStorage = index != -1;
    if(existsLocalStorage) {
      favorites.splice(index, 1);
    } else {
      favorites.push(title.title);
    }
    localStorage.setItem('liked_books', JSON.stringify(favorites));
  },
  SET_MY_LIKED_BOOKS(state) {
    let favorites = JSON.parse(localStorage.getItem('liked_books')) || [];
    state.filteredBooks = state.books.filter(book => favorites.includes(book.name));
  },
  UPDATE_PAGE(state, page) {
    state.page = page.newPage;
    if(state.page > 1) {
      state.offset = state.limit * (state.page - 1);
    } else {
      state.offset = 0;
    }
    state.pageBooks = [...state.filteredBooks];
    state.pageBooks = state.pageBooks.splice(state.offset, state.limit);
    state.totalPage = Math.ceil(state.filteredBooks.length / state.limit);
  },
  SET_ERROR_MESSAGE(state, data) {
    state.ui.error = data.message;
    state.ui.code = data.code;
  },
  SET_SUCCESS(state, data) {
    state.ui.success = data.message;
    state.ui.code = data.code;
  },
  RESET_MODULE(state) { // Para resetar o módulo inteiro
    Object.assign(state, initialState)
  }
}