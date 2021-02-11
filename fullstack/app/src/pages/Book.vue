<template>
  <div>
    <div>
      <form action="#" class="" @submit.prevent="save">
        <div>
          <input type="text" id="nome" v-model="model.nome" />
          <label for="nome">Nome...</label>
        </div>

        <div>
          <button type="submit">Salvar</button>

          <button :disabled="!model.id" type="button" @click="remove">
            Apagar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
import { books } from "@/services/api.js";

export default {
  name: "Book",
  data: function () {
    return {
      model: {},
    };
  },
  methods: {
    async save() {
      await books.save(this.model);
      this.goToList();
    },
    remove() {
      books.delete(this.model.key);
      this.goToList();
    },
    goToList() {
      this.$router.push({ name: "books" });
    },
  },
};
</script>
