<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light shadow-default">
      <div class="container-fluid">
        <router-link
          class="navbar-brand"
          :to="{name: 'HomePage'}"
        >
          {{ navbarName }}
        </router-link>
        <a
          class="darkmode-title"
          href="javascript:void(0)"
        > <span v-if="darkMode">Light mode</span> <span v-else>Dark mode</span>

          <div class="center con-switch">
            <vs-switch
              v-model="darkMode"
              dark
              color="#000"
              @click="toggleDarkMode"
            >
              <template #off>
                <i class="bx bxs-moon" />
              </template>
              <template #on>
                <i class="bx bxs-sun" />
              </template>
            </vs-switch>
          </div>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { Constantes } from '../../utils/Constantes';

export default {
  name: 'Navbar',
  data() {
    return {
      navbarName: Constantes.NAVBAR_NAME,
      darkTheme: this.darkMode
    }
  },
  computed: {
    ...mapState({
      darkMode: state => state.dark.darkMode
    })
  },
  mounted() {

  },
  methods: {
    toggleDarkMode: function() {
      //chamada do metodo no TOGGLE_DARK_MODE criado no Vuex
      this.$store.commit({ type: "dark/TOGGLE_DARK_MODE" });
    }
  }
}
</script>

<style>

</style>

<style scoped>
  .navbar{background-color: #95d9da;}
  .navbar .navbar-brand { font: 400 2rem 'Open Sans', sans-serif; color: #fff; margin-left: 60px}
  .navbar .darkmode-title { font: 400 1.5rem 'Open Sans', sans-serif; color: #fff; text-decoration: none !important; margin-right: 60px; display: flex; align-items: center;}
  .navbar .darkmode-title .con-switch { margin-left: 15px; }

  @media (max-width: 991px) {
    .navbar .navbar-brand{font-size: 1.3rem; margin-left: 0;}
    .navbar .darkmode-title{font-size: 1.2rem; margin-right: 0; flex-direction: column;}
  }
</style>