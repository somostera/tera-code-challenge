<template>
  <div class="container">
      <SearchFilter />
      <SelectFilter />
  </div>
</template>

<script>
import SearchFilter from '@/components/filters/SearchFilter';
import SelectFilter from '@/components/filters/SelectFilter';

export default {
    components: {
        SearchFilter,
        SelectFilter,
    }
}
</script>

<style>
    .container  {
        display: flex;
        justify-content: space-between;
    }
</style>