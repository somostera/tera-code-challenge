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
article {
  padding-top: 30px;
}

h1 {
  text-align: center;
}
</style>
