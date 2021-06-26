<template>
  <div>
    <v-icon v-if="!hasUserLiked && !checkLike(book)" @click="like">mdi-heart-outline</v-icon>
    <v-icon v-else color="red" @click="dislike">mdi-heart</v-icon>
  </div>
</template>

<script>
import BookMixin from '@/mixins/Book.mixin';
import StorageMixin from '@/mixins/Storage.mixin';
import { mapActions } from 'vuex';

export default {
  name: 'like',
  props: ['book'],
  mixins: [BookMixin, StorageMixin],
  methods: {
    ...mapActions(['likeBook', 'setBooks']),
    like() {
      const books = [...this.getBooks];
      const bookIndex = books.findIndex((b) => b.name === this.book.name);
      const whoLiked = this.getBooks[bookIndex].users_who_liked;
      if (Array.isArray(whoLiked)) {
        books[bookIndex].users_who_liked.push(this.getUser);
      } else {
        books[bookIndex].users_who_liked = [this.getUser];
      }
      this.likeBook({ books });
      this.saveToStorage(this.getBooks[bookIndex]);
    },
    dislike() {
      const books = [...this.getBooks];
      const bookIndex = books.findIndex((b) => b.name === this.book.name);
      const whoLiked = this.getBooks[bookIndex].users_who_liked;
      console.log({ whoLiked });
      const removed = whoLiked.filter((user) => user !== this.getUser);
      console.log({ removed });
      this.getBooks[bookIndex].users_who_liked = removed;
      this.setBooks({ books: this.getBooks });
      this.removeFromStorage(this.getBooks[bookIndex]);
    },
    checkLike(book) {
      return this.checkStorage(book);
    },
  },
};
</script>

<style lang="scss" scoped></style>
