<template>
  <div v-if="hasBook">
    <v-row justify="center" align="center">
      <v-col cols="8">
        <img :src="book.cover_picture" :alt="book.name" width="150" height="200" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="8" sm="10" justify="start">
        <router-link :to="{ path: `/${book.name}` }">
          <div class="text-h6">{{ book.name }}</div>
        </router-link>
        <book-details :book="book"></book-details>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// import LikeButton from '@/components/Interactions/Like';
import BookMixin from '@/mixins/Book.mixin';
import BookDetails from './BookDetails.vue';

export default {
  name: 'book',
  components: { BookDetails },
  props: {
    book: { type: Object, required: true },
  },
  mixins: [BookMixin],
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
