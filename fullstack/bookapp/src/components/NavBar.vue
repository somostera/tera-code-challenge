<template>
  <section class="navbar container">
    <p class="nav-title">Livraria do cowboy</p>
    <p class="dark-mode">Dark mode</p>
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
.dark-mode {
  font-size: 18px;
}

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
}

.nav-title {
  font-size: 28px;
}

@media only screen and (max-width: 600px) {
  .nav-title {
    font-size: 18px;
  }

  .dark-mode {
    font-size: 14px;
  }
}
</style>
