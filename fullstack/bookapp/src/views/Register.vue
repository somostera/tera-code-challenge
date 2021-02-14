<template>
  <article>
    <h1>Criar conta</h1>
    <RegisterComponent />
  </article>
</template>

<script>
import RegisterComponent from '@/components/RegisterComponent.vue'
export default {
  name: 'Register',
  components: { RegisterComponent }
}
</script>
