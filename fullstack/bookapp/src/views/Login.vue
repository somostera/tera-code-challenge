<template>
  <article>
    <h1>Entrar no sistema</h1>
    <LoginComponent />
    <p>
      Não possui conta?
      <router-link to="registrar">Crie uma aqui</router-link>
    </p>
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
p {
  text-align: center;
}
</style>
