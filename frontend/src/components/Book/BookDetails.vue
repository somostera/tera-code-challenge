<template>
  <v-row justify="start">
    <v-col cols="8">
      <p class="mb-0 " :class="textClass">{{ book.author }}</p>
      <p class="mb-0 " :class="textClass">{{ book.category }}</p>
    </v-col>
    <v-spacer></v-spacer>
    <v-col cols="2" sm="4" md="1">
      <like-button :book="book"></like-button>
    </v-col>
  </v-row>
</template>

<script>
import LikeButton from '@/components/Interactions/Like';
import BookMixin from '@/mixins/Book.mixin';

export default {
  name: 'book-details',
  props: { book: Object, textClass: { type: String, default: 'text-body-2' } },
  components: { LikeButton },
  mixins: [BookMixin],
};
</script>

<style lang="scss" scoped></style>
