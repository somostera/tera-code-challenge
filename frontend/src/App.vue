<template>
  <!-- Use v-theme-provider so we don't have to manually add dark prop
      whenever we change the theme -->
  <v-theme-provider root>
    <v-app>
      <navbar></navbar>
      <v-main :style="{ 'background-color': backgroundColor }">
        <v-card> </v-card>
        <router-view />
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
