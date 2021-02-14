<template>
  <section class="navbar container">
    <p class="nav-title">Livraria do cowboy</p>
    <a href="">Dark mode</a>
  </section>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  }
}
</script>

<style scoped>
.navbar {
  /* NavBar */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 74px;

  background: #95d9da;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.navbar p {
  color: #ffffff;
  font-size: 28px;
}

.nav-title {
  font-weight: 600;
}

@media only screen and (max-width: 600px) {
  .navbar p {
    font-size: 18px;
  }
}
</style>
