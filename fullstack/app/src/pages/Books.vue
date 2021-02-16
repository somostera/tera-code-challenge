<template>
  <div id="books">
    <div id="filtros">
      <v-text-field
        v-model="search.text"
        label="Procure por um Livro"
      ></v-text-field>
      <v-select
        label="Filtro"
        v-model="search.filtro"
        :items="filters"
        item-text="label"
        item-value="value"
      ></v-select>
    </div>
    <section>
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
      <v-fab-transition>
        <v-btn fab right bottom absolute @click="addNew">
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </v-fab-transition>
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
      search: {},
      filters: [
        {
          label: "Melhores Avaliados",
          value: "best",
        },
        {
          label: "Em estoque",
          value: "inStock",
        },
        {
          label: "Ordem Alfabetica",
          value: "asc",
        },
        {
          label: "Livros Curtidos",
          value: "liked",
        },
      ],
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
        console.log(result.data);
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
#filtros {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
}

#filtros > * {
  max-width: 200px;
}
</style>