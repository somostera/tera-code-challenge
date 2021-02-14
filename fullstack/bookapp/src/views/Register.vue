<template>
  <section>
    <h1>Criar conta</h1>
    <RegisterComponent />
  </section>
</template>

<script>
import RegisterComponent from '@/components/RegisterComponent.vue'
export default {
  name: 'Register',
  components: { RegisterComponent }
}
</script>

<style scoped>
h1 {
  margin-top: 30px;
  text-align: center;
}
</style>
