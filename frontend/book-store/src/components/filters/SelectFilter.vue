<template>
    <b-row>
      <b-col cols="6" v-if="openInputCategory">
        <input class="filter-search" v-model="searchCategoryFieldValue" placeholder="Nome da categoria" type="text">
      </b-col>
      <b-col :cols="openInputCategory ? '6' : '12'">
        <select class="filter-select" name="" id="" v-model="searchSelecteFieldValue">
          <option value="">Filtros</option>
          <option value="orderByEvaluation">Melhores Avaliados</option>
          <option value="orderByStock">Em Estoque</option>
          <option value="orderByAZ">Ordem Alfabética</option>
          <option value="orderByMyLikedBook">Livros curtidos</option>
          <option value="orderByCategory">Por Categoria</option>
        </select>
      </b-col>
    </b-row>
</template>

<script>

export default {
  data() {
    return {
      categoryFilter: 'category',
      selectFilter: 'select',
    }
  },
  computed: {

    searchCategoryFieldValue: {
      get() {
        return this.$store.state.filters.searchCategoryField
      },
      set(value) {
        this.$store.state.filters.activatedFilter = this.categoryFilter
        this.$store.state.filters.searchCategoryField = value
      }
    },
    searchSelecteFieldValue: {
      get() {
        return this.$store.state.filters.searchSelectField
      },
      set(value) {
        this.$store.state.filters.activatedFilter = this.selectFilter
        this.$store.state.filters.searchSelectField = value
      }
    },
    openInputCategory() {
      return  this.searchSelecteFieldValue == 'orderByCategory' ? true : false;
    }
  },
}
</script>

<style>

</style>  