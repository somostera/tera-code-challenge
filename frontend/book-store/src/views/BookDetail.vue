<template>
  <div class="book-details">
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
export default {

  computed: {
    book() {
      return this.$store.state.books[this.$route.params.id]
    }
  }
}
</script>
