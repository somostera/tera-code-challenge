const getters = {
  booksList: state => state.booksList || [],
  filteredList: state => state.filteredList || [],
  booksLiked: state => state.booksLiked || [],
  styleMode: state => state.styleMode || '',
}

export default getters