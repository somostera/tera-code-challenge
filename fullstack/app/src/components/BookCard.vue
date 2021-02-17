<template>
  <li class="book-card">
    <HeartButton :book="book" @click="heartClicked" :liked="book.liked" />
    <div class="book-card-content" @click="view($event, book)">
      <img :src="book.coverPicture" :alt="book.name" />
      <h4>{{ book.name }}</h4>
      <span>{{ book.author }}</span>
      <span>{{ book.category }}</span>
    </div>
  </li>
</template>

<script>
import HeartButton from "@/components/HeartButton.vue";
import { books } from "@/services/api.js";
export default {
  name: "BookCard",
  components: { HeartButton },
  props: ["book"],
  methods: {
    heartClicked() {
      this.book.liked = !this.book.liked;
      books.update(this.book.id, this.book);
    },
    view($event, book) {
      console.log(book.id);
      this.$router.push({ name: "book", params: { id: book.id } });
    },
  },
};
</script>
<style scoped>
.book-card {
  transition: all 300ms ease;
  padding: 5px;
  list-style: none;
}
.book-card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
  cursor: pointer;
}

.book-card:hover {
  background: var(--card-hover-color);
}

.book-card img {
  height: 250px;
  width: auto;
  margin: auto;
}
</style>
