<template>
  <div :style="cssProps" class="like-button">
    <BaseIcon name="heart" class="heart-icon" :fill="fill" :color="color" />
  </div>
</template>

<script>
import BaseIcon from './BaseIcon'
export default {
  name: 'HeartIcon',
  props: {
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    color: {
      type: String,
      default: '#333'
    },
    fill: {
      type: String,
      default: 'transparent'
    }
  },
  components: {
    BaseIcon
  },
  computed: {
    cssProps() {
      return {
        '--fill-color': this.fill,
        '--stroke-color': this.color
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.like-button {
  background: transparent;
  border: 0;
  cursor: pointer;
  height: 32px;
  margin-top: 6px;
  transition: opacity 0.3s;
  width: 32px;

  &:hover {
    opacity: 0.6;
  }
}

.heart-icon {
  stroke: var(--stroke-color);
  fill: var(--fill-color);
}
</style>
