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
    book: {},
  }),
  computed: {
    ...mapGetters(['getBooks']),
  },
  mounted() {
    const { name } = this.$route.params;
    // eslint-disable-next-line prefer-destructuring
    this.book = this.getBooks.filter((b) => b.name === name)[0];
  },

  watch: {
    getBooks(books) {
      const { name } = this.$route.params;
      // eslint-disable-next-line prefer-destructuring
      this.book = books.filter((b) => b.name === name)[0];
    },
  },
};
</script>

<style lang="scss" scoped></style>
