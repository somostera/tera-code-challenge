<template>
  <v-container fluid class="px-12 py-6">
    <v-row class="mt-6 ml-6">
      <v-col cols="12">
        <book-filters :availableBooks.sync="availableBooks"></book-filters>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <span>Total: {{ booksAmount }} </span>
        <BookList :list="books" class="mb-16"></BookList>
        <v-pagination
          class="hide-mobile"
          :length="numberOfPages"
          v-model="currentPage"
        ></v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import BookList from '@/components/Book/BookList.vue';
import BookFilters from '@/components/Book/BookFilters.vue';

export default {
  name: 'library',
  components: { BookList, BookFilters },
  data: () => ({
    currentPage: 1,
    maxPerPage: 8,
    books: [],
    availableBooks: [],
    numberOfPages: 0,
  }),
  computed: {
    ...mapGetters(['getBooks']),
    booksAmount() {
      return this.getBooks.length;
    },
  },
  created() {
    this.$on('filtered-books', this.filterBooks);
  },
  mounted() {
    if (this.getBooks.length > 0) {
      this.availableBooks = this.getBooks;
      this.numberOfPages = this.availableBooks.length / this.maxPerPage;
      this.books = this.createBookList(this.availableBooks);
    }
  },
  watch: {
    getBooks(books) {
      // First render
      this.availableBooks = books;
      this.numberOfPages = books.length / this.maxPerPage;
      this.books = this.createBookList(books);
    },
    currentPage() {
      // Update page: change the displayed books to a slice of the available books.
      this.books = this.createBookList(this.availableBooks);
    },
    isMobile() {
      const isMobile = window.matchMedia('(max-width: 768px)');
      return isMobile.matches;
    },
    availableBooks(newer) {
      this.numberOfPages = Math.ceil(newer.length / this.maxPerPage);
      this.books = this.createBookList(this.availableBooks);
    },
  },
  methods: {
    createBookList(books) {
      // According to mockups, mobile uses infinite scroll.
      if (this.isMobile) return books;
      const begin = this.maxPerPage * (this.currentPage - 1);
      const end = this.maxPerPage * this.currentPage;
      const slice = books.slice(begin, end);
      return slice;
    },
  },
};
</script>

<style scoped>
@media screen and (max-width: 768px) {
  .hide-mobile {
    display: none;
  }
}
</style>
