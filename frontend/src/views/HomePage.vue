<template>
  <div>
    <Navbar />
    <div class="container-fluid">
      <div class="padding-default mt40">
        <div class="row">
          <div class="col-6 col-lg-4 search-area">
            <vs-input
              v-model="searchText"
              type="search"
              color="#b7b7b7"
              class="shadow-default2"
              placeholder="Procure por um livro"
              @input="getSearchBooks"
            />
          </div>
          <div class="col-6 col-lg-3 offset-lg-3 search-area d-md-none d-lg-block d-sm-none d-none">
            <vs-input
              v-if="showInputCategory"
              v-model="searchTextCategory"
              type="search"
              color="#b7b7b7"
              class="shadow-default2"
              placeholder="Nome da categoria"
              @input="getSearchBooksByCategory"
            />
          </div>
          <div class="col-6 col-lg-2">
            <div class="con-select-example">
              <vs-select
                v-model="selectFilter"
                class="select-filter shadow-default2"
                @input="handleFilter"
              >
                <vs-select-item
                  v-for="item,index in selectFilterOptions"
                  :key="index"
                  :value="item.value"
                  :text="item.text"
                />
              </vs-select>
            </div>
          </div>
          <div class="col-12 d-md-block d-lg-none mt20 search-area">
            <vs-input
              v-if="showInputCategory"
              v-model="searchTextCategory"
              type="search"
              color="#b7b7b7"
              class="shadow-default2"
              placeholder="Nome da categoria"
              @input="getSearchBooksByCategory"
            />
          </div>
          <div class="col-12 mt20">
            <span class="total-books">Total: {{ getTotalBooks }}</span>
          </div>
          <div class="col-12">
            <div class="row">
              <div
                v-for="(book, index) in books"
                :key="index"
                class="col-12 col-lg-3 mt40"
              >
                <Book
                  :image="book.cover_picture"
                  :title="book.name"
                  :author="book.author"
                  :category="book.category"
                  :liked="checkLiked(book.name)"
                />
              </div>
            </div>
          </div>
          <div class="col-12 text-center mt60">
            <Pagination
              :page="Number(page)"
              :color="`#224a6e`"
              :update-data="pageData"
              :total-page="totalPage"
            />
          </div>
        </div>
        <div class="mt150" />
      </div>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import Navbar from '../components/default/Navbar.vue';
  import Pagination from '../components/default/Pagination.vue';
  import Book from '../components/books/Book.vue';

  export default {
    components: { Navbar, Book, Pagination},
    data() {
      return {
        searchText: '',
        showInputCategory: false,
        selectFilter: 0,
        selectFilterOptions:[
          {text:'Filtros', value:0},
          {text:'Melhores avaliados', value:1},
          {text:'Em estoque', value:2},
          {text:'Ordem Alfabética', value:3},
          {text:'Livros curtidos', value:4},
          {text:'Por categoria', value:5},
        ]
      }
    },
    computed: {
      ...mapState({
        books: state => state.book.pageBooks,
        totalPage: state => state.book.totalPage,
        page: state => state.book.page
      }),
      getTotalBooks() {
        return this.$store.getters['book/getTotalBooks'];
      }
    },
    mounted() {
      this.getBooks();
    },
    methods: {
      getBooks: async function() {
        await this.$store.dispatch('book/getBooks');
      },
      getSearchBooks: function(mySearchText) {
        this.$store.dispatch({
         type: 'book/getSearchBooks',
         mySearchText
        });
      },
      getSearchBooksByCategory: function(mySearchText) {
        this.$store.dispatch({
         type: 'book/getSearchBooksByCategory',
         mySearchText
        });
      },
      checkLiked: function(bookName) {
        if(localStorage.getItem('liked_books') != null){
          return JSON.parse(localStorage.getItem('liked_books')).includes(bookName);
        }
        return false;
      },
      handleFilter: function() {
        this.showInputCategory = false;
        switch(this.selectFilter) {
          case 1:
            this.$store.dispatch('book/getBestRated');
            break;
          case 2:
            this.$store.dispatch('book/getInStock');
            break;
          case 3:
            this.$store.dispatch('book/getSorted');
            break;
          case 4:
            this.$store.dispatch('book/getMyLikedBooks');
            break;
          case 5:
            this.showInputCategory = true;
            break;
        }
      },
      pageData(newPage) {
        this.$store.dispatch({
          type: 'book/updatePage',
          newPage
        });
      },
    }
  }
</script>

<style>
  .search-area .vs-input--placeholder{ color: #777; font: 500 1rem 'Open Sans', sans-serif; line-height: 30px; }
  .search-area input.vs-inputx.vs-input--input.normal { border-radius: 0; padding: 0 20px; line-height: 40px; height: 40px;}
  .search-area .vs-con-input-label{ width: 100%;}
  .vuesax-app-is-ltr .vs-input--placeholder { padding-left: 20px !important }
  .con-select{width: 100% !important}


  @media (max-width: 991px) {
    .search-area .vs-input--placeholder{font-size: 0.8rem;}
    .vs-select-primary .vs-select--item, input.input-select.vs-select--input{ font-size: 0.8rem; }
    input.input-select.vs-select--input{height: 40px}
    .search-area input.vs-inputx.vs-input--input.normal{padding: 0 10px}
    .vuesax-app-is-ltr .vs-input--placeholder { padding-left: 10px !important; }
    .vs-con-input-label{width: 100% !important}
  }

</style>

<style scoped>
  .total-books {font: 600 1rem 'Open Sans', sans-serif; color: #777}

  @media (max-width: 991px) {

  }
</style>