<template>
  <article>
    <h1>Entrar no sistema</h1>
    <LoginComponent />
    <p>
      Não possui conta?
      <router-link to="register">Crie uma aqui</router-link>
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
h1 {
  margin-top: 30px;
  text-align: center;
}

p {
  text-align: center;
}
</style>
