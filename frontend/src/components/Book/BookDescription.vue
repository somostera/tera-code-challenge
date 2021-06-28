<template>
  <!-- Saves a render try if book hasn't been fetched yet -->
  <div class="centered" v-if="hasBook">
    <section class="smaller">
      <h1 class="text-lg-h4 text-sm-h6 ">{{ book.name || '' }}</h1>
      <div class="relative">
        <img
          :src="book.cover_picture"
          :alt="book.name"
          class="book-image"
          :class="outOfStock ? 'overlay' : ''"
        />
        <div v-if="outOfStock" class="stock">FORA DE ESTOQUE</div>
      </div>
      <v-row class="mt-2 mb-1">
        <v-col class="pl-0 ml-2 pl-sm-0 ml-md-0">
          <book-details :book="book" :textClass="'text-body-1'"></book-details>
        </v-col>
      </v-row>
      <p class="mb-4">{{ stockTitle }}</p>
      <div class="tight mr-12">
        {{ book.description || '' }}
      </div>
    </section>
  </div>
</template>

<script>
import BookMixin from '@/mixins/Book.mixin';
// import LikeButton from '@/components/Interactions/Like';
import BookDetails from './BookDetails.vue';

export default {
  name: 'book-description',
  mixins: [BookMixin],
  components: { BookDetails },
  computed: {
    outOfStock() {
      if (!this.book) return '';
      const { stock } = this.book;
      return stock <= 0;
    },
    stockTitle() {
      if (!this.book) return '';
      const { stock } = this.book;
      if (!this.outOfStock) {
        return `Em estoque: ${stock} unidades`;
      }
      return 'Fora de estoque';
    },
  },
};
</script>

<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.row {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
}

.smaller {
  width: 47%;
}

.around {
  text-align: center;
  justify-content: space-between;
}

.tight {
  letter-spacing: 0.005px;
}
.relative {
  position: relative;
  width: max-content;
  height: max-content;
}

.overlay {
  filter: opacity(0.6);
}

@media screen and (min-width: 2560px) {
  .relative {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .book-image {
    float: right;
    width: 300px;
    height: 350px;
    padding-left: 4rem;
  }
  .stock {
    position: absolute;
    text-align: center;
    right: 15px;
    top: 150px;
    width: 200px;
    font-weight: 900;
    padding: 1rem;
    background-color: #31444a;
    color: white;
    border-radius: 2px;
  }
  .smaller {
    width: 35%;
  }
}

@media screen and (min-width: 1024px) and (max-width: 2559px) {
  .relative {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .book-image {
    float: right;
    width: 300px;
    height: 350px;
    padding-left: 4rem;
  }
  .stock {
    position: absolute;
    text-align: center;
    right: 15px;
    top: 150px;
    width: 200px;
    font-weight: 900;
    padding: 1rem;
    background-color: #31444a;
    color: white;
    border-radius: 2px;
  }

  .smaller {
    width: 40%;
  }
}
@media screen and (min-width: 768px) and (max-width: 1023px) {
  .book-image {
    width: 250px;
    height: 300px;
    /* padding-left: 4rem; */
  }
  .stock {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    left: 0;
    right: 0;
    top: 40%;
    width: 50%;
    font-weight: 900;
    padding: 0.5rem;
    background-color: #31444a;
    color: white;
    border-radius: 2px;
  }

  .overlay {
    filter: opacity(0.6);
  }

  .between {
    justify-content: space-between;
  }

  .author {
    margin-left: 0.8rem;
    margin-bottom: 0.4rem;
    font-size: 1.25rem;
  }
}

@media screen and (min-width: 321px) and (max-width: 767px) {
  .book-image {
    width: 250px;
    height: 300px;
  }

  h1 {
    font-size: 1.25rem;
  }

  .stock {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    left: 0;
    right: 0;
    top: 45%;
    width: 50%;
    font-weight: 900;
    font-size: 0.8rem;
    padding: 0.8rem;
    background-color: #31444a;
    color: white;
    border-radius: 2px;
  }
  .smaller {
    width: 90%;
  }
}

@media screen and (max-width: 320px) {
  .book-image {
    width: 250px;
    height: 300px;
  }

  h1 {
    font-size: 1.25rem;
  }

  .stock {
    position: absolute;
    right: 10%;
    top: 40%;
    font-weight: 900;
    font-size: 0.8rem;
    padding: 0.8rem;
    background-color: #31444a;
    color: white;
    border-radius: 2px;
  }
  .smaller {
    width: 90%;
  }
}
</style>
