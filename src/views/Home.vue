<template>
  <div class="home">
    <div class="header">
      <div class="filters-wrapper">
        <input
          type="text"
          placeholder="Procure por um livro"
          v-model="searchTerm"
          @change="handleBookSearch"
        />

        <div class="filter-container">
          <div class="input-category" v-if="byCategory">
            <input
              type="text"
              placeholder="Nome da Categoria"
              v-model="searchTerm"
              @change="handleCategorySearch"
            />
            <CustomSelect @click-option="handleClickOption" />
          </div>
          <div class="no-input-category" v-else>
            <CustomSelect @click-option="handleClickOption" />
          </div>
        </div>
      </div>

      <div class="totalBooks">
        <p>Total: {{ booksListSize(filter, searchTerm) }}</p>
      </div>
    </div>

    <div
      class="body"
      v-if="
        (filter === 'byCategory' || filter === 'searchedByName') &&
          searchTerm !== ''
      "
    >
      <book
        v-for="(book, index) in booksList(filter, searchTerm).slice(
          initialIndex,
          perPage
        )"
        :key="index"
        :name="book.name"
      />
    </div>
    <div
      class="body"
      v-else-if="filter === 'byCategory' || filter === 'searchedByName'"
    >
      <book
        v-for="(book, index) in booksList().slice(initialIndex, perPage)"
        :key="index"
        :name="book.name"
      />
    </div>
    <div class="body" v-else>
      <book
        v-for="(book, index) in booksList(filter).slice(
          initialIndex,
          finalIndex
        )"
        :key="index"
        :name="book.name"
      />
    </div>

    <div class="footer" v-if="windowWidth > 690">
      <button v-show="currentPage !== 1" @click="beforePage">
        <BaseIcon name="chevron-left" :color="color" />
      </button>

      <button @click="goToPage(1)">
        <span v-if="currentPage === 1"><strong>1</strong></span>
        <span v-else>1</span>
      </button>

      <div v-if="currentPage > 3">...</div>

      <button v-if="currentPage - 1 > 1" @click="goToPage(currentPage - 1)">
        {{ currentPage - 1 }}
      </button>

      <button
        v-if="currentPage > 1 && currentPage < numberOfPages"
        @click="goToPage(currentPage)"
      >
        <strong>{{ currentPage }}</strong>
      </button>

      <button
        v-if="currentPage + 1 <= numberOfPages - 1"
        @click="goToPage(currentPage + 1)"
      >
        {{ currentPage + 1 }}
      </button>

      <div v-if="currentPage <= numberOfPages - 3">...</div>

      <button v-if="numberOfPages !== 1" @click="goToPage(numberOfPages)">
        <span v-if="currentPage === numberOfPages">
          <strong>{{ numberOfPages }}</strong>
        </span>
        <span v-else>{{ numberOfPages }}</span>
      </button>

      <button
        v-show="currentPage !== numberOfPages && numberOfPages !== 1"
        @click="nextPage"
      >
        <BaseIcon name="chevron-right" :color="color" />
      </button>
    </div>
    <div class="footer" v-else></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import store from '@/store'

import Book from '@/components/Book'
import CustomSelect from '@/components/CustomSelect'
import BaseIcon from '@/components/BaseIcon'

export default {
  name: 'Home',
  title: 'Livraria do Cowboy',
  components: {
    Book,
    CustomSelect,
    BaseIcon
  },
  store,
  data() {
    return {
      filter: '',
      searchTerm: '',
      byCategory: false,
      perPage: 8,
      currentPage: 1,
      windowWidth: 0
    }
  },
  computed: {
    ...mapGetters(['booksList', 'booksListSize']),
    byCategoryBooksList(category) {
      return this.$store.getters['byCategoryBooksList'](category)
    },
    numberOfBooks() {
      return this.booksListSize(this.filter, this.searchTerm)
    },
    numberOfPages() {
      return Math.ceil(this.numberOfBooks / this.perPage)
    },
    initialIndex() {
      return (this.currentPage - 1) * this.perPage
    },
    finalIndex() {
      return this.currentPage * this.perPage
    },
    color() {
      return 'var(--color__text)'
    }
  },
  methods: {
    handleClickOption(value) {
      this.byCategory = value === 'byCategory'
      this.filter = value
      if (!this.byCategory) {
        this.$store.getters['booksList'](value)
      }
    },
    handleCategorySearch(event) {
      this.searchTerm = event.target.value.toLowerCase()
      this.$store.getters['booksList']('byCategory', this.searchTerm)
    },
    handleBookSearch(event) {
      this.filter = 'searchedByName'
      this.currentPage = 1
      this.searchTerm = event.target.value.toLowerCase()
      this.$store.getters['booksList']('searchedByName', this.searchTerm)
    },
    nextPage() {
      if (this.currentPage !== this.numberOfPages) {
        this.currentPage++
      }
    },
    beforePage() {
      if (this.currentPage !== 1) {
        this.currentPage--
      }
    },
    goToPage(page) {
      this.currentPage = page
    },
    handleResize() {
      this.windowWidth = window.innerWidth
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  unmounted() {
    window.removeEventListener('resize', this.handleResize)
  },

  beforeMount() {
    if (!this.booksList().length) {
      this.$store.dispatch('fetchBooks', { root: true })
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  align-items: center;
  background: var(--color__bg);
  color: var(--color__text);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: auto;
}

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  .filters-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 24px 40px;

    .input-category {
      align-items: center;
      display: flex;
      width: 100%;
    }

    .no-input-category {
      width: 100%;
    }
  }

  .filter-container {
    align-items: center;
    display: flex;

    input {
      margin-right: 56px;
    }
  }

  .totalBooks {
    align-self: flex-start;
    color: var(--color__text);
    margin: 8px 40px;
  }
}

input {
  background: var(--color__bg_filter);
  border: 1px solid #ccc;
  -webkit-box-shadow: 1px 2px 2px 2px var(--color__shadow);
  -moz-box-shadow: 1px 2px 2px 2px var(--color__shadow);
  box-shadow: 1px 2px 2px 2px var(--color__shadow);
  color: var(--color__text_filter);
  font-family: Montserrat, sans-serif;
  height: 40px;
  padding: 0 20px;
  width: 480px;
}

.body {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 56px;
  column-gap: 56px;
  width: 100%;
  padding: 50px 5%;
}

.footer {
  align-items: flex-start;
  align-self: center;
  display: flex;
  font-size: 20px;
  margin-bottom: 80px;

  button {
    background: none;
    border: 0;
    color: var(--color__text);
    font-size: 20px;
    padding: 0 4px;
  }
}

@media only screen and (max-width: 1100px) {
  .body {
    grid-template-columns: repeat(3, 1fr);
  }

  input {
    width: 328px;
  }
}

@media only screen and (max-width: 840px) {
  .body {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 48px;
  }

  .header {
    .filter-container {
      width: auto;

      .input-category {
        input {
          margin-right: 40px;
        }
      }
    }
  }
  input {
    width: 280px;
  }
}

@media only screen and (max-width: 690px) {
  input {
    width: 90%;
  }

  .header {
    .filters-wrapper {
      flex-direction: column;
    }

    .filter-container {
      margin-top: 16px;
      width: 90%;

      .input-category {
        align-items: center;
        display: flex;
        width: 100%;
      }

      .no-input-category {
        width: 100%;
      }

      input {
        margin-right: 32px;
        width: 100%;
      }
    }

    .totalBooks {
      margin: 0 10%;
      text-align: left;
    }
  }

  .body {
    grid-template-columns: 1fr;
    width: 80%;
  }
}
</style>
