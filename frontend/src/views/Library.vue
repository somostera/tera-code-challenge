<template>
  <v-container fluid class="px-12 py-6">
    <v-row class="mt-6 ml-6">
      <v-col cols="2">
        <p>Procure por um livro</p>
        <span>Total: {{ getBooksAmount }} </span>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2">Nome da categoria</v-col>
      <v-col cols="1">Filtros</v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
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

export default {
  name: 'library',
  components: { BookList },
  data: () => ({
    currentPage: 1,
    maxPerPage: 8,
    books: [],
  }),
  computed: {
    ...mapGetters(['getBooks', 'getBooksAmount']),
    numberOfPages() {
      return this.getBooksAmount / this.maxPerPage;
    },
  },
  mounted() {
    if (this.getBooks.length > 0) {
      this.books = this.createBookList();
    }
  },
  watch: {
    getBooks() {
      this.books = this.createBookList();
    },
    currentPage() {
      this.books = this.createBookList();
    },
    isMobile() {
      const isMobile = window.matchMedia('(max-width: 768px)');
      return isMobile.matches;
    },
  },
  methods: {
    createBookList() {
      // According to mockups, mobile uses infinite scroll.
      if (this.isMobile) return this.getBooks;
      const begin = this.maxPerPage * (this.currentPage - 1);
      const end = this.maxPerPage * this.currentPage;
      const slice = this.getBooks.slice(begin, end);
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
