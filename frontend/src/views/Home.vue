<template>
  <div>
    <Header/>
    <b-container>
      <b-row>
        <b-col md="6" lg="4" sm="12" v-for="(data, index) in myJson" :key="index">
          <Book :dataBook=data />
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
import Book from "@/components/Book.vue"
import json from '@/data.json'

export default {
  name: 'Home',
  components: {
    Header,
    Book
  },
  data: () => ({
    myJson: json
  })
}
</script>
