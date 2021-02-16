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
      <button class="button" type="submit">Atualizar</button>
      <button class="button bg-danger" v-if="book">Deletar</button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'FormsComponent',
  data() {
    return {}
  },

  computed: {
    book() {
      return this.$store.state.book
    }
  },

  created() {
    this.getBook()
    console.log(this.book)
  },

  methods: {
    getBook() {
      const bookId = this.$route.params.id
      this.$store.dispatch('getBook', bookId)
    },

    updateBook() {
      this.$store.dispatch('updateBook', this.book)
    },

    deteleBook() {
      this.$store.dispatch('deleteBook', this.book)
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
