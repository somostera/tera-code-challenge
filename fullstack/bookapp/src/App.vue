<template>
  <div id="app">
    <NavBar />
    <main class="main container">
      <router-view />
    </main>
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
@import url('https://fonts.googleapis.com/css2?family=Merienda&display=swap');
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

body {
  font-family: Nunito, Helvetica, sans-serif;
}

.container {
  padding: 0 50px;
}

.main {
  height: calc(100vh - 43px);
}

@media only screen and (max-width: 600px) {
  .container {
    padding: 0 20px;
  }
}
</style>
