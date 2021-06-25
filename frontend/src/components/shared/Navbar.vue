<template>
  <div>
    <v-toolbar color="primary">
      <v-toolbar-title class="ml-8 title">Livraria do Cowboy</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn text @click="toggleTheme" color="white">{{ theme }} mode</v-btn>
    </v-toolbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'nav-bar',
  computed: {
    ...mapGetters(['useDarkTheme']),
    theme() {
      const currentTheme = this.useDarkTheme ? 'Light' : 'Dark';
      return currentTheme;
    },
  },
  methods: {
    ...mapActions(['toggleTheme']),
  },
  watch: {
    useDarkTheme() {
      if (this.useDarkTheme) {
        this.$vuetify.theme.dark = true;
      } else {
        this.$vuetify.theme.dark = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.title {
  color: white;
}
</style>
