<template>
<select name="" id="">
    <option value="">Filtros</option>
     <option value="">Melhores Avaliados</option>
      <option value="">Em Destaque</option>
       <option value="">Livros Curtidos</option>
       <option value="">Por Categoria</option>
</select>
</template>
<script>
export default {
    props: ['mode']
}
</script>
<style scoped>
    .dark select {
        background: #31303a;
        color:#fff;
    }
</style>