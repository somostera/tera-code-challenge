<template>
    <div class="container-input">
       <input 
       type="text"
        @keyup="$emit('input', $event.target.value)"
        placeholder="Procure por um livro"   
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
    box-shadow: 0px 2px 5px 0px #18112d;
    color:#fff;
}
.container-input {
    width: 49%;
}
input {
    padding: 5px;
    border-radius: 5px;
    border: 1px solid #bbb;
    box-shadow: 0px 2px 3px 0px #ccc;
    outline: none;
    width: 100%;
    font-size: 14px;
}
@media(min-width: 750px) {
    .container-input {
        width: 100%;
    }
    input {
        width: 50%;
        font-size: 16px;
        color:#aaa;
    } 
}
</style>