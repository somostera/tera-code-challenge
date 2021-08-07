<template>
  <div>
    <div class="book-item">
      <router-link :to="{name: 'BookDetail', params: { name: title }}">
        <img
          :src="imageCover"
          class="img-fluid"
          @error="imageLoadError"
        >
        <div class="book-title mt20">
          {{ title }}
        </div>
        <div class="book-author">
          {{ author }}
        </div>
        <div class="book-category">
          {{ category }}
        </div>
      </router-link>
      <div
        class="like"
        @click="setLikeBook(title)"
      >
        <span
          v-if="isLiked"
          class="material-icons-outlined"
          :class="isLiked ? 'red' : ''"
        >
          favorite
        </span>
        <span
          v-else
          class="material-icons-outlined"
        >
          favorite_border
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: {
    bookKey: {
      type: Number,
      default: null
    },
    image: {
      type: String,
      default: null
    },
    title: {
      type: String,
      default: null
    },
    author: {
      type: String,
      default: null
    },
    category: {
      type: String,
      default: null
    },
    liked: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      imageCover: this.image,
      isLiked: this.liked
    }
  },
  watch: {
    image: function(newImage){
      this.imageCover = newImage;
    },
    liked: function(newLike){
      this.isLiked = newLike;
    }
  },
  methods: {
    imageLoadError () {
      this.imageCover = "https://i.ibb.co/fq1BtyM/imagem-invalida.jpg";
    },
    setLikeBook(title) {
      this.$store.dispatch({
        type: 'book/setLikeBook',
        title
      });
      this.isLiked = JSON.parse(localStorage.getItem('liked_books')).includes(title);
    }
  }
}
</script>

<style scoped>
  .book-item {width: 100%; text-align: center; position: relative;}
  .book-item a{text-decoration: none; color: black}
  .book-item .like {position: absolute; right: 70px; bottom: 20px; cursor: pointer;}
  .book-item img { width: 160px; margin: auto; height: 200px; text-align: center; object-fit: contain; }
  .book-title {font: 600 1.3rem 'Open Sans', sans-serif; }
  .book-author, .book-category {font: 500 0.8rem 'Open Sans', sans-serif; }
  .book-title, .book-author, .book-category {text-align: left;max-width: 300px;}
  .material-icons-outlined.red {color: red}

  @media (max-width: 991px) {
    .book-item img{ width: 200px; height: 240px; }
    .book-title, .book-author, .book-category{max-width: 200px;}
    .book-item .like {right: 20px}
  }

</style>