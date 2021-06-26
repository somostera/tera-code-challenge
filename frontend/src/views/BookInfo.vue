<template>
  <section>
    <book-description :book="book"></book-description>
  </section>
</template>

<script>
import BookDescription from '@/components/Book/BookDescription';
import { mapGetters } from 'vuex';

export default {
  name: 'book-info',
  components: { BookDescription },
  data: () => ({
    book: null,
  }),
  computed: {
    ...mapGetters(['getBooks']),
  },
  watch: {
    getBooks(books) {
      const { name } = this.$route.params;
      console.log(name);
      console.log(books);
      // eslint-disable-next-line prefer-destructuring
      this.book = books.filter((b) => b.name === name)[0];
      console.log(this.book);
    },
  },
};
</script>

<style lang="scss" scoped></style>
