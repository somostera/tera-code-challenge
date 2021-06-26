<template>
  <div>
    <v-row>
      <v-col cols="7" sm="7" md="4">
        <v-text-field solo label="Procure por um livro" v-model="bookName"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="5" sm="5" md="2" order="2" order-md="3">
        <v-select
          solo
          placeholder="Filtros"
          :items="filterList"
          v-model="selectedFilter"
        ></v-select>
      </v-col>
      <v-col cols="12" md="4" order="3" order-md="2">
        <v-text-field
          v-if="isFilterCategory"
          solo
          label="Nome da categoria"
          v-model="category"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'filters',
  props: ['availableBooks'],
  data: () => ({
    filtersMap: {
      'Melhores avaliados': 'byRating',
      'Em estoque': 'byAvailability',
      'Ordem alfabética': 'byName',
      'Livros curtidos': 'byLiked',
      'Por categoria': 'byCategory',
    },
    selectedFilter: '',
    bookName: '',
    category: '',
  }),
  computed: {
    ...mapGetters(['getBooks', 'getUser']),
    filterList() {
      return Object.keys(this.filtersMap);
    },
    isFilterCategory() {
      return this.selectedFilter === 'Por categoria';
    },
    waitForInput() {
      return this.selectedFilter === 'Por categoria' && this.category === '';
    },
  },
  watch: {
    selectedFilter(filter) {
      if (this.bookName.length > 0) {
        const books = this.applyFilter(filter, this.getBooks);
        this.applyFilter('byBookName', books);
        return;
      }
      this.applyFilter(filter, this.getBooks);
    },
    bookName(name) {
      // Re-apply current filter
      if (name.length === 0 && this.selectedFilter.length > 0) {
        this.applyFilter(this.selectedFilter, this.getBooks);
      } else if (this.selectedFilter.length === 0) {
        this.applyFilter('byBookName', this.getBooks);
      } else {
        this.applyFilter('byBookName', this.availableBooks);
      }
    },
    category(cat) {
      if (cat.length === 0 && this.selectedFilter.length > 0) {
        this.$emit('update:availableBooks', this.getBooks);
        return;
      }
      this.applyFilter('byCategory', this.availableBooks);
    },
  },
  methods: {
    applyFilter(filter, books) {
      // Chosen filter needs extra info to run, do nothing
      if (this.waitForInput) return;
      const fn = this.filtersMap[filter] || filter;
      const filteredBooks = this[fn](books);
      // console.log(filteredBooks);
      this.$emit('update:availableBooks', filteredBooks);
      // eslint-disable-next-line consistent-return
      return filteredBooks;
    },
    byRating(books) {
      return books.sort((a, b) => {
        if (a.users_who_liked.length > b.users_who_liked.length) return -1;
        if (a.users_who_liked.length < b.users_who_liked.length) return 1;
        return 0;
      });
    },
    byAvailability(books) {
      return books.filter((b) => b.stock > 0);
    },
    byName(books) {
      return books.sort((a, b) => {
        if (a.name > b.name) return -1;
        if (a.name < b.name) return 1;
        return 0;
      });
    },
    byLiked(books) {
      return books.filter((b) => {
        if (Array.isArray(b.users_who_liked)) {
          return b.users_who_liked.indexOf(this.getUser) !== -1;
        }
        return false;
      });
    },
    // These two functions can't be converted into a single one because we'd need a parameter
    // to indicate which function to run, a.k.a flag argument, which is also a code smell sometimes.
    // As such, applyFilter wouldn't know if it should filter by category or book. We could use
    // default parameters to know if we're calling from the selector or from the watcher,
    // but IMO we have found a nice generic use case for applyFilter and we shouldn't make it ugly.
    byCategory(books) {
      if (this.category === '') return books;
      const lowerCat = this.category.toLowerCase();
      return books.filter((b) => b.category.toLowerCase().startsWith(lowerCat));
    },
    byBookName(books) {
      if (this.bookName === '') return books;
      const lowerName = this.bookName.toLowerCase();
      return books.filter((b) => b.name.toLowerCase().startsWith(lowerName));
    },
  },
};
</script>

<style lang="scss" scoped></style>
