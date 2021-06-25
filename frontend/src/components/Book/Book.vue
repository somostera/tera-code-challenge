<template>
  <div v-if="hasBook">
    <v-row justify="center" align="center">
      <v-col cols="8">
        <img :src="book.cover_picture" :alt="book.name" width="150" height="200" />
      </v-col>
    </v-row>
    <v-row justify="space-evenly">
      <v-col cols="10" sm="8" md="9">
        <router-link :to="{ path: `/${bookSlug}` }"
          ><span class="text-h6">{{ book.name }}</span></router-link
        >
        <p class="mb-0 text-body-2">{{ book.author }}</p>
        <p class="mb-0 text-body-2">{{ book.category }}</p>
      </v-col>
      <v-spacer></v-spacer>
      <v-col cols="2" sm="4" md="1">
        <v-icon v-if="!userLiked">mdi-heart-outline</v-icon>
        <v-icon v-else color="red">mdi-heart</v-icon>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'book',
  props: {
    book: { type: Object, required: true },
  },
  computed: {
    ...mapGetters(['getBooks', 'getUser']),
    hasBook() {
      return Object.keys(this.book).length !== 0;
    },
    userLiked() {
      if (!this.hasBook) return false;
      const whoLiked = this.book.users_who_liked;
      if (Array.isArray(whoLiked)) {
        const liked = whoLiked.indexOf(this.getUser) !== -1;
        return liked;
      }
      return false;
    },
    bookSlug() {
      const noSpecial = this.removeSpecials(this.book.name);
      const slug = noSpecial.split(' ').join('-');
      return slug;
    },
  },
  methods: {
    removeSpecials(str) {
      const lower = str.toLowerCase();
      const upper = str.toUpperCase();

      let res = '';
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < lower.length; i++) {
        if (lower[i] !== upper[i] || lower[i].trim() === '') {
          res += lower[i];
        }
      }
      return res;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
