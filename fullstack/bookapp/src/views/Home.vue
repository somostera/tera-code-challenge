<template>
  <article>
    <div class="filter-header">
      <input
        class="input"
        id="input-search"
        type="text"
        placeholder="Procure um livro"
      />
      <div class="filter">
        <select class="select">
          <option value="">Filtro</option>
        </select>
      </div>
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
@import '@/assets/sass/main.scss';

#input-search {
  max-width: 500px;
}

.filter {
  width: 200px;
  margin-left: 10px;
}

.filter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.select {
  width: 100%;
  height: 40px;
  font-size: 16px;
  font-family: Nunito;
  padding: 0 0 0 12px;
  margin: 12px 0 20px 0;

  background: #ffffff;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  @include shadow;
}

@media only screen and (max-width: 600px) {
  .filter {
    max-width: 150px;
  }
}
</style>
