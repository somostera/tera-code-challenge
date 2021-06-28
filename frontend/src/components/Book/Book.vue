<template>
  <div v-if="hasBook">
    <v-row justify="center" align="center">
      <v-col cols="8">
        <img :src="book.cover_picture" :alt="book.name" width="150" height="200" />
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="10" sm="8" md="9">
        <router-link :to="{ path: `/${book.name}` }"
          ><span class="text-h6">{{ book.name }}</span></router-link
        >
        <p class="mb-0 text-body-2">{{ book.author }}</p>
        <p class="mb-0 text-body-2">{{ book.category }}</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2" sm="4" md="1">
        <like-button :book="book"></like-button>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import LikeButton from '@/components/Interactions/Like';
import BookMixin from '@/mixins/Book.mixin';

export default {
  name: 'book',
  components: { LikeButton },
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
