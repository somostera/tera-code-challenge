<template>
  <div class="container">
    <input v-if="byCategorySelected" type="text" name="" id="">
    <select name="" id="" v-model="selectFilter">
      <option value="">Filtrar</option>
      <option value="orderByEvaluation">Melhores Avaliados</option>
      <option value="orderByStock">Em Estoque</option>
      <option value="orderByAZ">Ordem Alfabética</option>
      <option value="orderByMyLikedBook">Livros curtidos</option>
      <option value="orderByCategory">Por Categoria</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectFilter: '',
      byCategorySelected: false
    }
  },
  watch: {
    selectFilter(value) {
      this.byCategorySelected = value == 'orderByCategory' ? true : false;
    }
  }
}
</script>

<style>

</style>  