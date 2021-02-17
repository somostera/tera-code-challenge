<template>
  <div id="books">
    <v-fab-transition>
      <v-btn id="add-button" fab top absolute @click="addNew">
        <v-icon>mdi-plus</v-icon>
      </v-btn>
    </v-fab-transition>
    <div id="filtros">
      <v-text-field
        v-model="search.name"
        @input="searchList"
        @blur="searchList"
        label="Procure por um Livro"
      ></v-text-field>
      <v-select
        label="Filtro"
        v-model="search.filter"
        :items="filters"
        item-text="label"
        item-value="value"
        @change="searchList"
      ></v-select>
    </div>
    <section>
      <v-row>
        <v-col md="3" sm="6" cols="12" :key="book.id" v-for="book of list">
          <BookCard :book="book" />
        </v-col>
      </v-row>
    </section>
  </div>
</template>


<script>
import { books } from "@/services/api.js";
import BookCard from "@/components/BookCard.vue";
export default {
  components: { BookCard },
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
    this.searchList({});
  },
  methods: {
    addNew() {
      this.$router.push({ name: "book" });
    },
    searchList() {
      books.search(this.search).then((result) => {
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
#filtros {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 5px 10px;
}

#filtros > * {
  max-width: 200px;
}
#add-button {
  left: calc((100% - 56px) / 2);
  z-index: 99;
}

#add-button i {
  color: #444 !important;
}
</style>