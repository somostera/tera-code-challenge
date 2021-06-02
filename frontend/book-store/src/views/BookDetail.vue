<template>
  <div class="book-details">
    {{checkLikedBook}}
    <b-container class="book-details">
      <b-row>
        <b-col cols="12" class="d-flex justify-content-left">
          <a href="#" @click.prevent="$router.go(-1)" v-html="'< Voltar'"></a>
        </b-col>
        <b-col cols="6" offset="3" class="d-flex justify-content-center">
          <div class="book-details-item">
          
            <p>
              <span class="book-details-item-title">
                {{ book.name }}<br />
              </span>
              
              {{ book.author }} <br />
              {{ book.category }}<br />
              Em estoque: {{ book.stock }}<br /><br />
              <LikeButton :book-name="book.name"></LikeButton>
              <img :src="book.cover_picture" @error="imageLoadError">
              {{ book.description }}
            </p>
                    
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import LikeButton from '@/components/buttons/LikeButton';

export default {
  components: {
      LikeButton,
  },
  methods: {
    imageLoadError(e) {
        e.target.src = "https://bulma.io/images/placeholders/480x640.png";
    },
  },
  computed: {
    book() {
      return this.$store.state.books.filter((val) => val.name.toLowerCase().replace(new RegExp(" ","gm"), '-').includes(this.$route.params.name)).reduce((b) => (b))
    },
    checkLikedBook() {
      return this.$store.state.myLikedBooks > 0 ? this.$store.state.myLikedBooks.reduce((val) => val).toLowerCase().replace(new RegExp(" ","gm"), '-').includes(this.$route.params.name) : '';
    },
  }
}
</script>
