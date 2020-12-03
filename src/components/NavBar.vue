<template>
  <div class="nav-bar">
    <h1><router-link to="/">Livraria do Cowboy</router-link></h1>
    <button type="button" v-if="theme === 'light'" @click="toggleTheme">
      Dark mode
    </button>
    <button type="button" v-else @click="toggleTheme">Light mode</button>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data() {
    return {
      theme: 'light'
    }
  },
  watch: {
    theme(theme) {
      document.documentElement.dataset.theme = theme
    }
  },
  methods: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    }
  }
}
</script>

<style lang="scss" scoped>
.nav-bar {
  background: var(--color__bg_nav);
  -webkit-box-shadow: 2px 8px 5px 0px var(--color__shadow);
  -moz-box-shadow: 2px 8px 5px 0px var(--color__shadow);
  box-shadow: 2px 8px 5px 0px var(--color__shadow);
  display: flex;
  justify-content: space-between;
  padding: 30px 72px;
  width: 100vw;

  h1 {
    font-size: 50px;
    font-weight: 600;
    text-align: left;

    a {
      color: var(--color__text_nav);
      transition: opacity 0.3s;

      &:hover {
        opacity: 0.6;
      }
    }
  }

  button {
    background: transparent;
    border: 0;
    color: var(--color__text_nav);
    cursor: pointer;
    font-family: Montserrat, sans-serif;
    font-size: 30px;
    transition: opacity 0.3s;

    &:hover {
      opacity: 0.4;
    }
  }
}

@media only screen and (max-width: 1100px) {
  .nav-bar {
    padding: 24px 56px;

    h1 {
      font-size: 40px;
    }

    button {
      font-size: 24px;
    }
  }
}

@media only screen and (max-width: 840px) {
  .nav-bar {
    padding: 24px 48px;

    h1 {
      font-size: 32px;
    }

    button {
      font-size: 20px;
    }
  }
}

@media only screen and (max-width: 690px) {
  .nav-bar {
    padding: 24px 32px;

    h1 {
      font-size: 20px;
    }

    button {
      font-size: 16px;
      width: 110px;
    }
  }
}
</style>
