<template>
  <!-- Use v-theme-provider so we don't have to manually add dark prop
      whenever we change the theme -->
  <!-- Tried to implement dark mode using a custom directive
  but I think vuetify just overrides it all. Leaving it with theme-provider so it's cleaner. -->
  <v-theme-provider root>
    <v-app>
      <navbar></navbar>
      <!-- Change background based on if dark theme is on or not -->
      <v-main :style="{ 'background-color': backgroundColor }">
        <transition name="fade-slide">
          <router-view />
        </transition>
      </v-main>
    </v-app>
  </v-theme-provider>
</template>

<script>
import { mapActions } from 'vuex';
import Navbar from '@/components/shared/Navbar';

export default {
  name: 'App',
  components: { Navbar },
  methods: {
    ...mapActions(['fetchBooks']),
  },
  computed: {
    backgroundColor() {
      const mode = this.$vuetify.theme.dark ? 'dark' : 'light';
      const bg = this.$vuetify.theme.themes[mode].background;
      return bg;
    },
  },
  async created() {
    // Setup app
    await this.fetchBooks();
  },
};
</script>

<style>
.fade-slide-enter,
.fade-slide-leave-to {
  opacity: 0;
  transform: translateX(-200px);
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease-in;
}
</style>
