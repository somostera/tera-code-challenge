<template>
  <v-app>
    <Loading />
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Loading from "@/components/Loading.vue";
export default {
  name: "App",

  components: {
    Navbar,
    Loading,
  }
};
</script>

