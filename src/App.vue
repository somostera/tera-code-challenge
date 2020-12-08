<template>
  <div id="app">
    <Header/>
    <Filters/>
    <BooksStore/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Filters from './components/Filters'
import BooksStore from './components/BooksStore'

export default {
  name: 'App',
  components: {
    Header,
    Filters,
    BooksStore
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0;
  box-sizing: border-box;
}
</style>
