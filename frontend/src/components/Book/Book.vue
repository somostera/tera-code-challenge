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
        <v-icon v-if="!userLiked" @click="like">mdi-heart-outline</v-icon>
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
  },
  methods: {
    like() {
      const bookIndex = this.getBooks.findIndex((b) => b.name === this.book.name);
      this.getBooks[bookIndex].users_who_liked.push(this.getUser);
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>
