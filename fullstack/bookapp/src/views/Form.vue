<template>
  <article>
    <p class="text-btn" @click="$router.back()">&#60; Voltar</p>
    <FormsComponent />
  </article>
</template>

<script>
import FormsComponent from '@/components/FormsComponent.vue'

export default {
  name: 'Form',
  components: { FormsComponent }
}
</script>

<style lang="scss" scoped>
p {
  margin-top: 10px;
}
</style>
