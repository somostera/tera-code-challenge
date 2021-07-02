<template>
  <div>
    <Header/>
    <b-container class="mt-5">
      <b-row>
        <b-col lg="8">
          <h2>
            {{dataBook.name}}
          </h2>
          <b-row>
            <b-col>
              <p class="m-0">
                {{dataBook.author}}
              </p>
            </b-col>
            <b-col>
              <b-icon variant="danger" icon="heart-fill" v-if=dataBook.users_who_liked.length > 0></b-icon>
              <b-icon variant="danger" icon="heart" v-if=!dataBook.users_who_liked.length></b-icon>
            </b-col>
          </b-row>

          <p class="m-0">
            {{dataBook.category}}
          </p>
          <p class="m-0">
            Em estoque: {{dataBook.stock}} unidades
          </p>
          <p class="mt-5 text-justify">
            {{dataBook.description}}
          </p>
        </b-col>
        <b-col lg="4">
          <img :src=dataBook.cover_picture />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import Header from "@/components/Header";
import json from '@/data.json'

export default {
  name: "Detail",
  components: {
    Header,
  },
  data: () => ({
    myJson: json,
    dataBook: []
  }),
  created() {
    this.dataBook = this.myJson.filter( (book) => {
      return book.name == this.$route.params.name
    })
    this.dataBook = this.dataBook[0]
    console.log()
  }
}
</script>