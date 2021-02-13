<template>
  <div id="books">
    <section>
      <form class="filtros">
        <div class="input-wrapper">
          <input
            type="text"
            v-model="search"
            placeholder="Procure por um livro"
          />
        </div>
        <div class="filtros-wrapper">
          <select name="filtros" id="filtros">
            <option value="">Melhores Avaliados</option>
            <option value="">Em estoque</option>
            <option value="">Ordem Alfabetica</option>
            <option value="">Livros Curtidos</option>
          </select>
        </div>
      </form>
      <ul>
        <li :key="book.id" v-for="book of list">
          <img :src="book.cover_picture" :alt="book.name" />
          <h4>{{ book.name }}</h4>
          <span>{{ book.author }}</span>
          <span>{{ book.category }}</span>
          <heart-button
            :book="book"
            @click="heartClicked"
            :liked="book.liked"
          />
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import { books } from "@/services/api.js";
import HeartButton from "@/components/HeartButton.vue";
export default {
  components: { HeartButton },
  name: "Books",
  data: function () {
    return {
      list: [],
    };
  },
  created: function () {
    this.init();
  },
  methods: {
    heartClicked(data) {
      data.liked = !data.liked;
    },
    view(book) {
      this.$router.push({ name: "book", params: { id: book.id } });
    },
    addNew() {
      this.$router.push({ name: "book" });
    },
    init() {
      books.list().then((result) => {
        this.list = result.data;
      });
    },
  },
};
</script>

<style  scoped>
#books {
  display: flex;
  flex-direction: column;
}
section ul {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 5px;
}
section ul li {
  display: flex;
  flex-direction: column;

  align-items: flex-start;
  align-content: flex-start;
  justify-content: center;
}
section ul li img {
  height: 250px;
  width: auto;
  margin: auto;
}
.input-wrapper {
  width: 300px;
  display: block;
  position: relative;
  margin: 0 20px;
}
.filtros-wrapper {
  width: 300px;
  display: block;
  position: relative;
  margin: 0 20px;
}
form.filtros {
  display: flex;
  justify-content: space-between;
}
</style>