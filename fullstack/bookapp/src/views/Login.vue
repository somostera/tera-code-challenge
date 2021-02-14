<template>
  <article>
    <h1>Entrar no sistema</h1>
    <LoginComponent />
  </article>
</template>

<script>
import LoginComponent from '@/components/LoginComponent.vue'
export default {
  name: 'Login',
  components: { LoginComponent }
}
</script>

<style scoped>
h1 {
  margin-top: 30px;
  text-align: center;
}
</style>
