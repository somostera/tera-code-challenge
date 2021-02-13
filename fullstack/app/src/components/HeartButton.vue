<template>
  <button class="btn-heart" @click="like">
    <i class="fa-heart" :class="{ far: !liked, fas: liked }"></i>
    {{ book.liked }}
  </button>
</template>

<script>
export default {
  name: "HeartButton",
  props: ["book", 'liked'],
  methods: {
    like() {
      this.$emit("click", this.book);
    },
  },
};
</script>

<style>
.btn-heart {
  --size: 30px;
  width: var(--size) !important;
  height: var(--size) !important;
  background: none !important;
  border: none !important;
  padding: 0 !important;
  min-width: 0 !important;
  margin: 0 !important;
  position: absolute;
  bottom: 20px;
  right: 20px;
  appearance: none;
  outline: none;
}
i {
  color: #222;
}
</style>