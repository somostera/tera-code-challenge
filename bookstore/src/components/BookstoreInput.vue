<template>
    <div class="container-input">
       <input 
       type="text"
       :value="value"
        @keyup="$emit('input', $event.target.value)"
        placeholder="Busque por um livro"   
        />
        <h2>Titulo: {{search}}</h2>
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