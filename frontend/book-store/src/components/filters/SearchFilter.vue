<template>
    <input class="filter-search" v-model="searchFieldValue" type="text" placeholder="Procure por um livro">
</template>

<script>
export default {
  data() {
    return {
      nameFilter: 'name',
    }
  },
  computed: {
    searchFieldValue: {
      get() {
        return this.$store.state.filters.searchField
      },
      set(value) {
        this.$store.state.filters.activatedFilter = this.nameFilter
        this.$store.state.filters.searchField = value
      }
    },

  }
}
</script>

<style>

</style>