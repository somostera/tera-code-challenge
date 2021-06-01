<template>
  <div class="home">
    <Filters />
    <BookList />
  </div>
</template>

<script>
// @ is an alias to /src
import Filters from '@/components/filters/Filters';
import BookList from '@/components/books/BookList';

export default {

  name: 'Home',
  components: {
    Filters,
    BookList
  }
}
</script>
