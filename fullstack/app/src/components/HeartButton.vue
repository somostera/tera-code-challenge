<template>
  <button class="btn-heart" @click="like">
    <span class="heart-icon"></span>
  </button>
</template>

<script>
export default {
  name: "HeartButton",
  props: ["book"],
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
}
.heart-icon {
  position: relative;
  display: block;
  width: var(--size) !important;
  height: var(--size) !important;
}

.heart-icon:before,
.heart-icon:after {
  position: absolute;
  content: "";
  display: block;
  height: 10px;
  width: 20px;
  background: red;
  border-radius: 50px 0 0 50px;
  transition: all 300ms;
  top: 5px;
}

.heart-icon:hover::before,
.heart-icon:hover::after {
  background: orange;
}

.heart-icon:before {
  transform: rotate(45deg);
}
.heart-icon:after {
  transform: rotate(135deg);
  left: 8px;
}
</style>