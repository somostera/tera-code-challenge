<template>
  <v-app-bar app>
    <div class="d-flex align-center">Livraria do Cowboy</div>

    <v-spacer></v-spacer>

    <v-btn @click="changeMode" text>
      <span class="mr-2">Dark Mode</span>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => {
    return {
      darkmode: false,
    };
  },
  methods: {
    changeMode() {
      this.$emit("modeChanged");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
