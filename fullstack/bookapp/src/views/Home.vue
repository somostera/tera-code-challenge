<template>
  <article>
    <div class="filter-header">
      <input
        class="input"
        id="input-search"
        type="text"
        placeholder="Procure um livro"
      />
      <input class="input" id="input-select" type="text" />
    </div>
    <p>Total: 40</p>
    <Bookshelf />
  </article>
</template>

<script>
// @ is an alias to /src
import Bookshelf from '@/components/Bookshelf.vue'

export default {
  name: 'Home',
  components: { Bookshelf }
}
</script>

<style lang="scss" scoped>
#input-search {
  max-width: 500px;
}

#input-select {
  max-width: 200px;
  margin-left: 10px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
}

@media only screen and (max-width: 600px) {
  #input-select {
    max-width: 150px;
  }
}
</style>
