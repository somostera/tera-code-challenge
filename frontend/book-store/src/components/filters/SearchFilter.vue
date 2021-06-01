<template>
  <div>
    <input class="filter-search" v-model="search" type="text" placeholder="Procure por um livro">
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions(['searchFilter']),
  },
  computed: {
    searchFieldValue: {
      get() {
        return this.$store.state.searchField
      },
      set(value) {
        this.$store.state.searchField = value
      }
    },
    search() {
      return this.searchFilter
    }
  }
}
</script>

<style>

</style>