<template>
  <div id="books">
    <section>
      <ul>
        <li :key="book.id" v-for="book of list">
          <img :src="book.cover_picture" :alt="book.name" />
          <h4>{{ book.name }}</h4>
          <span>{{ book.author }}</span>
          <span>{{ book.category }}</span>
          <heart-button :book="book" @click="heartClicked" />
        </li>
      </ul>
    </section>
  </div>
</template>


<script>
import { books } from "@/services/api.js";
import HeartButton from '@/components/HeartButton.vue';
export default {
  components: {HeartButton},
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
    heartClicked (data) {
      console.log(data);
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
</style>