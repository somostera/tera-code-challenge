<template>
  <section class="navbar">
    <p class="nav-title">Livraria do {{ name }}</p>
    <a href="">Dark mode</a>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      name: 'Cowboy' // get of the store
    }
  }
}
</script>

<style></style>
