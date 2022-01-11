// to handle state
export default {
  getBookByName: (state) => (name) => {
    return state.filteredBooks.filter(book => book.name == name)[0];
  },
  getTotalBooks: function (state) {
    return state.filteredBooks.length
  },
  getBooksFromPage: (state) => (page) => {

  }
}