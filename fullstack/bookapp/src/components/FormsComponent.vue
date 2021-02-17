<template>
  <form>
    <div class="form-content">
      <label class="label" for="input-name">Nome:</label>
      <input class="input" id="input-name" type="text" v-model="book.name" />

      <label class="label" for="input-author">Autor(a):</label>
      <input
        class="input"
        id="input-author"
        type="text"
        v-model="book.author"
      />

      <label class="label" for="input-category">Categoria:</label>
      <input
        class="input"
        id="input-category"
        type="text"
        v-model="book.category"
      />

      <label class="label" for="input-stock">Quantidade em estoque:</label>
      <input
        class="input"
        id="input-stock"
        type="number"
        v-model="book.stock"
      />

      <label class="label" for="input-cover">Url da capa:</label>
      <input
        class="input"
        id="input-cover"
        type="text"
        v-model="book.cover_picture"
      />

      <label class="label" for="input-description">Descrição:</label>
      <textarea
        id="input-description"
        class="input"
        style="height: 200px"
        v-model="book.description"
      >
      </textarea>
    </div>
    <div class="form-footer">
      <button class="button" type="submit" @click="createBook()" v-if="!bookId">
        Criar
      </button>
      <button class="button" type="submit" @click="updateBook()" v-if="bookId">
        Atualizar
      </button>
      <button class="button bg-danger" @click="deleteBook()" v-if="bookId">
        Deletar
      </button>
    </div>
  </form>
</template>

<script>
import { api } from '@/services/index.js'

export default {
  name: 'FormsComponent',
  data() {
    return {
      bookId: null,
      book: {}
    }
  },

  created() {
    this.getBook()
  },

  methods: {
    getBook() {
      this.bookId = this.$route.params.id
      if (this.bookId) {
        api.get(`/books/${this.bookId}`).then((response) => {
          this.book = response.data.data
        })
      }
    },

    updateBook() {
      if (this.bookId) {
        console.log(this.book)

        api
          .put(`/books/${this.bookId}`, this.book)
          .then(() => {
            this.$router.back()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    deleteBook() {
      if (this.bookId) {
        console.log(this.book)
        api
          .delete(`/books/${this.bookId}`)
          .then(() => {
            this.$router.back()
          })
          .catch((error) => {
            console.log(error)
          })
      }
    },

    createBook() {
      if (this.book) {
        api.post(`/books`, this.book).then(() => {
          this.$router.back()
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/sass/main.scss';

form {
  padding: 0px;
  margin: 30px auto;

  max-width: 547px;
}
</style>
