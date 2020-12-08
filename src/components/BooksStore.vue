<template>
  <div class="book-store-container" :class="`book-store-container-${styleMode}`">
    <div
      class="book"
      :class="`book-${styleMode}`"
      :key="book.name"
      v-for="book in listOfBooks"
    >
      <img :src="book.cover_picture" :alt="book.name">
      <h2>{{book.name}}</h2>
      <div class="book-info">
        <div>
          <p>{{book.author}}</p>
          <p>{{book.category}}</p>
        </div>
        <font-awesome-icon :class="`book-${likedBooks(book.name)}`" @click="likeBook(book.name)" :icon="['fas', 'heart']" />
      </div>
    </div>
    
  </div>
</template>

<script>
import {mapGetters, mapActions, mapMutations} from 'vuex'

export default {
  name: 'BooksStore',

  data() {
    return {
      styleText: 'Dark mode',
      styleApplied: 'light'
    }
  },

  created() {
    this.fetchBooksList()
  },

  computed: {
    ...mapGetters({styleMode:'styleMode', booksList:'booksList', filteredList: 'filteredList', booksLiked: 'booksLiked'}),

    listOfBooks() {
      return this.filteredList.length !== 0 ? this.filteredList : this.booksList
    },
  },

  methods: {
    ...mapActions({fetchBooksList: 'FETCH_BOOKS_LIST'}),
    ...mapMutations({setBooksLiked: 'SET_BOOKS_LIKED'}),

    switchMode() {
      if (this.styleApplied === 'dark') {
        this.styleApplied = 'light'
        this.styleText = 'Dark mode'
      } else
      if(this.styleApplied === 'light') {
        this.styleApplied = 'dark'
        this.styleText = 'Light mode'
      }
      this.setStyleMode(this.styleApplied)
    },

    likeBook(book) {
      const list = [...this.booksLiked]
      if (list.includes(book)) {
        let index = list.indexOf(book)
        list.splice(index, 1);
      } else {
        list.push(book)
      }
      this.setBooksLiked(list)
    },

    likedBooks(book) {
      return this.booksLiked.includes(book) ? 'liked' : 'not-liked'
    }
  }
}
</script>

<style scoped>
  @import '../style/styleMode.css';

.book-store-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.book {
  margin: 40px;
  height: fit-content;
  width: 300px;
}
.book img {
  height: 300px;
  width: 260px;
  padding: 40px;
}

.book h2 {
  font-size: 20px;
}

.book p {
  font-size: 14px;
}

.book-dark p,
.book-dark h2 {
  color: var(--dark-mode-body-font-color);
}

.book-light p,
.book-light h2{
  color: var(--light-mode-body-font-color);
}

.book-store-container-light {
  background: var(--light-mode-body-background)
}

.book-store-container-dark {
  background: var(--dark-mode-body-background)
}

.book-liked {
  color: red;
}

.book-not-liked {
  color: rgba(0,0,0,0.2);
}

.book-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 380px) {
  .book {
    margin: 0;
  }

  .book img {
    height: 100%;
    width: 100%;
    padding: 0;
  }
}

@media (max-width: 580px) {
  .book-store-container {
    justify-content: center;
  }
}

</style>
