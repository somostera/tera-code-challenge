<template>
  <article>
    <div>
      <p class="text-btn" @click="$router.back()">
        &#60; Voltar
      </p>
    </div>
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
  display: inline-block;
  margin-top: 10px;
}
</style>
