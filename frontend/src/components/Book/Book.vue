<template>
  <div v-if="hasBook">
    <v-col cols="3">
      <v-row justify="center" align="center">
        <v-col cols="4">
          <img :src="book.cover_picture" alt="book.name" width="150" height="200" />
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col cols="10">
          <router-link :to="{ path: `/${bookSlug}` }"
            ><span class="text-h6">{{ book.name }}</span></router-link
          >
          <p class="mb-0 text-body-2">{{ book.author }}</p>
          <p class="mb-0 text-body-2">{{ book.category }}</p>
        </v-col>
        <v-col cols="1">
          <v-icon v-if="!userLiked">mdi-heart-outline</v-icon>
          <v-icon v-else color="red">mdi-heart</v-icon>
        </v-col>
      </v-row>
    </v-col>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'book',
  // props: {
  //   book: { type: Object, required: true },
  // },
  data: () => ({
    book: {},
  }),
  computed: {
    ...mapGetters(['getBooks', 'getUser']),
    hasBook() {
      return Object.keys(this.book).length !== 0;
    },
    userLiked() {
      if (!this.hasBook) return '';
      const liked = this.book.users_who_liked.indexOf(this.getUser) !== -1;
      console.log(liked);
      return liked;
    },
    bookSlug() {
      const noSpecial = this.removeSpecials(this.book.name);
      const slug = noSpecial.split(' ').join('-');
      return slug;
    },
  },
  mounted() {
    if (this.getBooks.length > 0) {
      // eslint-disable-next-line prefer-destructuring
      this.book = this.getBooks[0];
    }
  },
  watch: {
    getBooks() {
      // eslint-disable-next-line prefer-destructuring
      this.book = this.getBooks[0];
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
