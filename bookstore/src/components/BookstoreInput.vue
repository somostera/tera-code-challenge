<template>
    <div class="container-input">
       <input 
       type="text"
        @keyup="$emit('input', $event.target.value)"
        placeholder="Busque por um livro"   
        />
  </div>
</template>
<script>
export default {
    
    data() {
      return {
            busca:''
        }
    },
    props: ['mode','input']
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