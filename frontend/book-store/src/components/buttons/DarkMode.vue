<template>
  <a id="dark-mode-btn" href="#" @click.prevent="switchMode">
      {{ modeLabel }} mode
  </a>
</template>

<script>
export default {
    data() {
        return {
            modes: {
                light: 'Light',
                dark: 'Dark',
            },
            darkModeActivated: false,
            modeLabel: 'Dark',
        }
    },
    methods: {
        switchMode() {
            this.DarkModeActivated = !this.DarkModeActivated;
             this.modeLabel = this.DarkModeActivated ? this.modes.light : this.modes.dark;
        }
    },
}
</script>

<style scoped>
    #dark-mode-btn {
        background-color: transparent;
        border: 0px;
        color: white;
        font-size: 20px;
        text-decoration: none;
    }
</style>