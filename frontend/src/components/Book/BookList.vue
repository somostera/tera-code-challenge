<template>
  <div>
    <ul class="grid list">
      <li class="spaced" v-for="book in list" :key="book.name">
        <book :book="book" />
      </li>
    </ul>
  </div>
</template>

<script>
import Book from '@/components/Book/Book';

export default {
  name: 'book-list',
  components: { Book },
  props: { list: { type: Array } },
};
</script>

<style scoped>
.list {
  list-style: none;
}

/* Laptop and up */
@media screen and (min-width: 769px) {
  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 6.5rem;
    row-gap: 6.5rem;
  }
}

/* Tabled and down */
@media screen and (max-width: 768px) {
  .grid {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .grid .spaced {
    margin: 2rem 0;
    width: 320px;
  }
}
</style>
