<template>
  <section>
    <v-container fluid class="px-10 py-6">
      <div @click="goBack" class="mb-8">
        <v-icon>
          mdi-arrow-left
        </v-icon>
        Voltar
      </div>
      <book-description :book="book"></book-description>
    </v-container>
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
  methods: {
    goBack() {
      this.$router.push({ path: '/' });
    },
  },
};
</script>

<style lang="scss" scoped></style>
