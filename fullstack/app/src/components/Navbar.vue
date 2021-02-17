<template>
  <v-app-bar app color="var(--navbar-color)">
    <div class="d-flex align-center">Livraria do Cowboy</div>

    <v-spacer></v-spacer>

    <v-btn @click="changeMode" text>
      <span class="mr-2">{{ theme ? "Dark" : "Light" }} Mode</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
import ThemeService from "@/services/theme";
export default {
  name: "Navbar",
  data: () => {
    return {
      darkmode: false,
      theme: false,
    };
  },
  async mounted() {
    this.theme = ThemeService.load();
  },
  methods: {
    changeMode() {
      this.theme = ThemeService.change();
    },
  },
};
</script>

