<template>
  <div id="app">
    <NavBar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { NavBar, Footer }
}
</script>

<style lang="scss">
body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  padding: 0;
  margin: 0;
}
</style>
