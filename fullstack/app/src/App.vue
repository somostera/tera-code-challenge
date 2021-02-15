<template>
  <v-app :class="{ 'theme-dark': darkmode }">
    <Navbar @modeChanged="updateMode" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import SimpleStorage from "@schirrel/simple-storage/SimpleStorage";
export default {
  name: "App",

  components: {
    Navbar,
  },
  mounted() {
    this.loadStorage();
  },

  data() {
    return {
      darkmode: false,
    };
  },
  methods: {
    updateMode() {
      this.loadStorage();
    },
    async loadStorage() {
      let value = await SimpleStorage.get("darkmode");
      this.darkmode = value;
    },
  },
  watch: {
    darkmode: (newValue) => {
      SimpleStorage.set("darkmode", newValue);
    },
  },
};
</script>
