<template>
  <div>
    <b-navbar fixed toggleable="lg" type="dark" variant="info">
      <b-container>
        <b-navbar-brand>
          <router-link to="/">
            Livraria do cowboy
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" style="z-index:10"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>

          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-navbar-nav right>
              <b-nav-item href="#">
                Dark mode
              </b-nav-item>

            </b-navbar-nav>

          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </div>
</template>

<script>
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  mounted() {
    window.addEventListener('scroll', this.onScroll);
  },
  data: () => ({
    whiteNavbar: false,
  }),
  methods: {

    onScroll() {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      if (currentScrollPosition < 60) {
        this.whiteNavbar = false;
      } else {
        this.whiteNavbar = true;
      }
    },
  },
});
</script>
<style>
a {
  color: white;
  text-decoration: none;
  background-color: transparent;
}
a:hover {
  text-decoration: none;
}
</style>
