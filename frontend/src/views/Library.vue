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
      <v-col>
        <Book></Book>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex';
import Book from '@/components/Book/Book.vue';

export default {
  name: 'library',
  components: { Book },
  computed: {
    ...mapGetters(['getBooksAmount']),
  },
};
</script>
