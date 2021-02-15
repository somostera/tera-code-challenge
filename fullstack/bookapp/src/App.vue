<template>
  <div id="app">
    <NavBar />
    <main class="main container bg-light">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: { NavBar, Footer }
}
</script>

<style lang="scss">
@import './assets/sass/main.scss';
@import url('https://fonts.googleapis.com/css2?family=Nunito&display=swap');

a {
  color: $secondary;
  text-decoration: none;
}

article {
  padding-top: 10px;
  padding-bottom: 30px;
}

body {
  background-color: $light;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  color: $dark;
  padding: 0;
  margin: 0;
}

body {
  font-family: Nunito, Helvetica, sans-serif;
}

h1 {
  text-align: center;
}

.bg-light {
  background-color: $light;
}

.button {
  /* button */

  width: 160px;
  height: 50px;
  border: none;

  background: #4b4b4b;
  box-shadow: 0px -0.5px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);

  font-weight: bold;
  font-size: 1rem;
  color: #ffffff;
}

.container {
  padding: 0 50px;
}

.erro-info {
  text-align: center;
  color: $danger;
  font-weight: 700;
}

.form-footer {
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  padding: 0px;
}

.input {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-family: Nunito;
  padding: 0 12px;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  box-shadow: 0px -0.5px 4px rgba(0, 0, 0, 0.25),
    0px 4px 4px rgba(0, 0, 0, 0.25);

  /* Inside Auto Layout */

  margin: 12px 0 20px 0;
}

.label {
  font-size: 18px;
  display: flex;
  align-items: center;
  color: $dark;
}

.main {
  min-height: calc(100vh - 74px);
  padding-top: 20px;
  padding-bottom: 20px;
}

.text-btn {
  color: $dark;
  cursor: pointer;
}

@media only screen and (max-width: 600px) {
  .container {
    padding: 0 20px;
  }
}
</style>
