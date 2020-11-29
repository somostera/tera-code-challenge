<template>
    <div class="container-input">
       <input type="text" placeholder="Procure por um livro" />
  </div>
</template>
<script>
export default {
    data() {
      return {
            text: ''
        }
    },
    props: ['mode']
}
</script>
<style scoped>
.dark input {
    background: #31303a;
    border-color: #121420;
    color:#fff;
}
.container-input {
}
input {
    padding: 5px;
}
</style>