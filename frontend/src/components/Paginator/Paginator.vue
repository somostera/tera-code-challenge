<template>
  <div></div>
</template>

<script>
export default {
  name: 'paginator',
  props: ['totalItems', 'maxPerPage'],
  computed: {
    numberOfPages() {
      return this.totalItems / this.maxPerPage;
    },
  },
};
</script>

<style lang="scss" scoped></style>
