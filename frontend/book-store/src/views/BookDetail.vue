<template>
  <div class="book-details">
    {{this.$store.state.lastOpenedBook}}
    <b-container class="book-details">
      <b-row>
        <b-col cols="12" class="d-flex justify-content-left">
          <a href="#" @click.prevent="$router.go(-1)" v-html="'< Voltar'" style="text-decoration:none;"></a>
        </b-col>
        <b-col cols="8" offset="2" class="d-flex justify-content-center">
          <div class="book-details-item">
          
            <div class="d-flex justify-content-start" style="flex-direction:column">
              <span class="book-details-item-title">
                {{ book.name }}<br />
              </span>
              
              <div class="d-flex justify-content-between align-items-start" style="max-width:445px;text-align:left;">
                <div style="padding:10px 0;">

                  {{ book.author }} <br />
                  {{ book.category }}<br />
                  {{ stockPlural }}<br />
                </div>
                 <LikeButton :book-name="book.name"></LikeButton>
              </div>
              <p>
                <img :src="book.cover_picture" @error="imageLoadError">
                {{ book.description }}

              </p>
              
            </div>
                    
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
    stockPlural() {
      return this.book.stock < 1 ? 'Fora de estoque' : this.book.stock < 2 ? `Em estoque: ${this.book.stock} unidade` : `Em estoque: ${this.book.stock} unidades` 
    },
    book() {
      return this.$store.state.books.filter((val) => val.name.toLowerCase().replace(new RegExp(" ","gm"), '-').includes(this.$route.params.name)).reduce((b) => (b))
    },
    checkLikedBook() {
      return this.$store.state.myLikedBooks > 0 ? this.$store.state.myLikedBooks.reduce((val) => val).toLowerCase().replace(new RegExp(" ","gm"), '-').includes(this.$route.params.name) : '';
    },
  },
}
</script>
