<template>
  <article>
    <div>
      <router-link to="/">
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
@import '../assets/sass/main.scss';

a {
  display: inline-block;
  margin-top: 10px;
  color: $dark;
}
</style>
