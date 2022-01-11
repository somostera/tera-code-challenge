<template>
  <div>
    <div class="row box-book">
      <span class="book-title d-md-block d-lg-none">{{ book.name }}</span>
      <p>
        <span
          class="img-box"
          :class="book.stock == 0 ? 'inactive' : false"
        >
          <img
            :src="imageCover"
            class="img-fluid"
            @error="imageLoadError"
          >
          <span
            class="book-like mobile d-md-block d-lg-none"
            @click="setLikeBook(book.name)"
          >
            <span
              v-if="checkIsLiked(book.name)"
              class="material-icons-outlined"
              :class="checkIsLiked(book.name) ? 'red' : ''"
            >
              favorite
            </span>
            <span
              v-else
              class="material-icons-outlined"
            >
              favorite_border
            </span>
          </span>
        </span>
        <span class="book-title d-md-none d-lg-block d-sm-none d-none">{{ book.name }}</span>
        <span
          :key="updateLiked"
          class="box-like"
          @click="setLikeBook(book.name)"
        >
          <span class="book-author">{{ book.author }}</span>

          <span
            class="book-like d-md-none d-lg-block d-sm-none d-none"
          >
            <span
              v-if="checkIsLiked(book.name)"
              class="material-icons-outlined"
              :class="checkIsLiked(book.name) ? 'red' : ''"
            >
              favorite
            </span>
            <span
              v-else
              class="material-icons-outlined"
            >
              favorite_border
            </span>
          </span>
        </span>
        <span class="book-category">{{ book.category }}</span>

        <span
          v-if="book.stock > 0"
          class="book-status"
        >Em estoque: {{ book.stock }}
          <span v-if="book.stock == 1">unidade</span>
          <span v-if="book.stock > 1">unidades</span>
        </span>
        <span
          v-else
          class="book-status"
        >Fora de estoque</span>


        <span class="book-text">
          {{ book.description }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BookInfo',
  props: {
    book: {
      type: Object,
      default: function () {
        return {
          name: "Nome indefinido",
          author: "Autor indefinido",
          description: "Descrição indefinida",
          cover_picture: "https://i.ibb.co/fq1BtyM/imagem-invalida.jpg",
          category: "Categoria indefinida",
          stock: 0,
          users_who_liked: []
        }
      }
    }
  },
  data() {
    return {
      imageCover: this.book.cover_picture,
      updateLiked: false
    }
  },
  methods: {
    imageLoadError () {
      this.imageCover = "https://i.ibb.co/fq1BtyM/imagem-invalida.jpg";
    },
    checkIsLiked(name) {
      return JSON.parse(localStorage.getItem('liked_books')).includes(name);
    },
    setLikeBook(title) {
      this.$store.dispatch({
        type: 'book/setLikeBook',
        title
      });
      this.updateLiked = !this.updateLiked;
    }
  }
}
</script>

<style scoped>
  .box-book img{float: right; width: 100%; height: 430px}
  .box-book p{float: left}
  .book-title { display: block; font: 500 3rem 'Open Sans', sans-serif;}
  .book-author { font: 500 1.4rem 'Open Sans', sans-serif;}
  .book-text { padding-top: 20px}
  .book-category, .book-status { display: block; font: 500 1.2rem 'Open Sans', sans-serif; padding-bottom: 20px;}
  .book-like{padding-right: 25%}
  .book-status {padding-bottom: 20px;}

  .box-like{display: flex; justify-content: space-between; cursor: pointer;}
  .img-box { position: relative; flex-wrap: nowrap; justify-content: center; align-items: center; float: right; padding-left: 20px; padding-bottom: 20px; }
  .img-box .status{background: #000; color: #fff; height: 60px; line-height: 60px !important; font: 600 1rem 'Open Sans', sans-serif; padding: 0 40px; display: table; position: absolute; }
  .material-icons-outlined.red {color: red}
  .img-box.inactive:before{position: absolute; content: ''; top: 0; right: 0; left: 20px; bottom: 20px; background: url('https://i.ibb.co/zmqfKQW/no-img.png')no-repeat center center; background-size: cover !important;}


  @media (max-width: 991px) {
    .book-title{font-size: 2rem;}
    .box-book img { float: inherit; margin-top: 20px; height: auto; width: 100% }
    .img-box .status{top: inherit; right: inherit; font: 600 1rem 'Open Sans', sans-serif;}
    .img-box { float: none; display: table; margin: auto}
    .book-like.mobile{position: absolute; right: 20px; bottom: 20px;}
    .img-box.inactive:before{top: 20px;}
    .book-like{padding-right: 0}
    .book-like.mobile{cursor: pointer;}
  }
</style>