<template>
  <div id="app">
    <input id="switcher" type="checkbox" name="switcher" v-model="darkmode" />
    <label for="switcher"></label>
    <main class="main">
      <Navbar />

      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import SimpleStorage from "@schirrel/simple-storage/SimpleStorage";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data: () => {
    return {
      darkmode: false,
    };
  },
  mounted() {
    this.loadStorage();
  },
  methods: {
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