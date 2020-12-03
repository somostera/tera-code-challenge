<template>
  <div>
    <div class="icon-wrapper" :style="cssProps">
      <svg class="icon" :width="width" :height="height">
        <use v-bind="svgIcon(name)" />
      </svg>
    </div>
    <span>
      <slot />
    </span>
  </div>
</template>

<script>
const svgIcon = name => ({ 'xlink:href': `/feather-sprite.svg#${name}` })
export default {
  name: 'BaseIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    fill: {
      type: String,
      default: 'none'
    },
    color: {
      type: String,
      default: '#333'
    }
  },
  data() {
    return {
      svgIcon
    }
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
.icon-wrapper {
  display: inline-flex;
  align-items: center;
  color: rgba(0, 0, 0, 0.4);
  font-size: 1rem;
  font-weight: 600;
}
.icon {
  stroke: var(--stroke-color);
  stroke-width: 1.4;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: var(--fill-color);
  margin-right: 6px;
}
</style>
