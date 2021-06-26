<template>
  <div>
    <v-row>
      <v-col cols="2">
        <v-text-field solo label="Procure por um livro" v-model="bookName"></v-text-field>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2">
        <v-text-field
          v-if="isFilterCategory"
          solo
          label="Nome da categoria"
          v-model="category"
        ></v-text-field>
        <v-select
          cols="2"
          solo
          placeholder="Filtros"
          :items="filterList"
          v-model="selectedFilter"
          @change="applyFilter(selectedFilter)"
        ></v-select>
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
  },
  watch: {
    bookName() {
      this.applyFilter('byBookName');
    },
    category() {
      this.applyFilter('byCategory');
    },
  },
  methods: {
    applyFilter(filter) {
      const fn = this.filtersMap[filter] || filter;
      const filteredBooks = this[fn](this.getBooks);
      console.log(filteredBooks);
      this.$emit('update:availableBooks', filteredBooks);
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
      return books.filter((b) => b.users_who_liked.indexOf(this.getUser) !== -1);
    },
    byCategory(books) {
      if (this.category === '') return books;
      return books.filter((b) => b.category.startsWith(this.category));
    },
    byBookName(books) {
      if (this.bookName === '') return books;
      return books.filter((b) => b.name.startsWith(this.bookName));
    },
  },
};
</script>

<style lang="scss" scoped></style>
