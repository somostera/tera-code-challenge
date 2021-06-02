<template>
    <input class="filter-search" v-model="searchFieldValue" type="text" placeholder="Procure por um livro">
</template>

<script>
export default {
  computed: {
    searchFieldValue: {
      get() {
        return this.$store.state.searchField
      },
      set(value) {
        this.$store.state.searchField = value
      }
    },

  }
}
</script>

<style>

</style>