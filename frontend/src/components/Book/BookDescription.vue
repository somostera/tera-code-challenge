<template>
  <!-- Saves a render try if book hasn't been fetched yet -->
  <div class="centered" v-if="hasBook">
    <section class="smaller">
      <h1 class="text-md-h4 text-sm-h6">{{ book.name || '' }}</h1>
      <div class="relative">
        <img
          :src="book.cover_picture"
          :alt="book.name"
          class="book-image"
          :class="outOfStock ? 'overlay' : ''"
        />
        <div v-if="outOfStock" class="stock">FORA DE ESTOQUE</div>
      </div>
      <div class="row around between mt-2">
        <p class="font-weight-medium author">{{ book.author || '' }}</p>
        <like-button :book="book"></like-button>
      </div>
      <p class="mb-0">{{ book.category || '' }}</p>
      <p class="mb-4">{{ stockTitle }}</p>
      <div class="tight mr-12">
        {{ book.description }}
      </div>
    </section>
  </div>
</template>

<script>
import BookMixin from '@/mixins/Book.mixin';
import LikeButton from '@/components/Interactions/Like';

export default {
  name: 'book-description',
  mixins: [BookMixin],
  components: { LikeButton },
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
  width: 100%;
  height: 100%;
}

.overlay {
  filter: opacity(0.6);
}
@media screen and (min-width: 2560px) {
  .smaller {
    width: 30%;
  }
}
@media screen and (min-width: 769px) {
  .book-image {
    float: right;
    width: 300px;
    height: 350px;
    padding-left: 4rem;
  }
  .stock {
    position: absolute;
    right: 2rem;
    top: 8rem;
    font-weight: 900;
    padding: 1rem;
    background-color: #31444a;
    color: white;
    border-radius: 2px;
  }
}

@media screen and (max-width: 768px) {
  .stock {
    position: absolute;
    right: 4rem;
    top: 12rem;
    font-weight: 900;
    padding: 1rem;
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
    right: 30%;
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
