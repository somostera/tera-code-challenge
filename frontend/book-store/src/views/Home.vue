<template>
  <div class="home">
    <BookList />
  </div>
</template>

<script>
// @ is an alias to /src

import BookList from '@/components/books/BookList';

export default {

  name: 'Home',
  components: {
    BookList
  }
}
</script>
