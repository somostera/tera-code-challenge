<template>
  <header class="navbar container">
    <p class="nav-title">Livraria do cowboy</p>
    <p class="dark-mode">Dark mode</p>
  </header>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {}
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/sass/main.scss';

.dark-mode {
  font-size: 18px;
}

.navbar {
  /* NavBar */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  height: 74px;

  background: $primary;
  @include shadow;
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
