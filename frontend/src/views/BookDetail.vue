<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="padding-default mt20">
        <div class="row">
          <div class="col-12 col-lg-4">
            <router-link
              :to="{name: 'HomePage'}"
              class="link-default"
            >
              <span class="material-icons-outlined">
                keyboard_arrow_left
              </span>   Voltar
            </router-link>
          </div>
        </div>
        <div class="row">
          <div class="col-12 col-lg-6 offset-lg-3">
            <BookInfo :book="getBookByName" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navbar from '../components/default/Navbar.vue';
  import BookInfo from '../components/books/BookInfo.vue';

  export default {
    components: { Navbar, BookInfo },
    data() {
      return {

      }
    },
    computed: {
      ...mapState({
        books: state => state.book.filteredBooks
      }),
      getBookByName() {
        return this.$store.getters['book/getBookByName'](this.$route.params.name);
      }
    },
    mounted() {
      this.getBooks();
    },
    methods: {
      getBooks: async function() {
        await this.$store.dispatch('book/getBooks');
      }
    }
  }
</script>

<style scoped>
  .material-icons-outlined { vertical-align: sub; }
</style>