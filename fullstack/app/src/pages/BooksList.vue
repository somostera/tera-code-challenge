<template>
  <div >
    <button
	  type="button"
      id="add"
      @click="goToPartner"
    >
      <span>Add</span>
    </button>
    <section>
	<v-row>
	<v-col cols="3" v-for="book of books">
	//TODO BOOK
	</v-col>
	</v-row>        
        </div>
    </section>
  </div>
</template>


<script>
import { books } from "@/services/api.js";
export default {
  name: "BookList",
  data: function () {
    return {
      list: []
    };
  },
  created: function () {
    this.init();
  },
  methods: {
    view(book)  {
      this.$router.push({ name: "book", params: { id: book.id } });
    },
	addNew() {
      this.$router.push({ name: "book"});
    },
    init() {
      books.list().then((snapshot) => {
        this.list = snapshot;
      });
    },
  },
};
</script>

<style  scoped>
table.mdl-data-table {
  width: 100%;
}

.mdl-grid.mdl-grid--no-spacing {
  width: 100%;
  max-width: 90vw;
}
</style>