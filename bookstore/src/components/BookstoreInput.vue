<template>
    <div class="container-input">
       <input 
       type="text" 
       placeholder="Procure por um livro"
       v-model="search"  
       @change="$emit('input-search', $event.target.value)"     
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
    props: ['mode','search']
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