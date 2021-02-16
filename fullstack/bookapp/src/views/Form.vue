<template>
  <article>
    <div>
      <router-link to="/" tag="p">
        &#60; Voltar
      </router-link>
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
