<template>
  <div class="header" :class="styleMode">
    <h1>Livraria do cowboy</h1>
    <h2 @click="switchMode">{{styleText}}</h2>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  name: 'Header',

  data() {
    return {
      styleText: 'Dark mode',
      styleApplied: 'light'
    }
  },

  computed: {
    ...mapGetters({styleMode:'styleMode'})
  },

  methods: {
    ...mapMutations({setStyleMode: 'SET_STYLE_MODE'}),

    switchMode() {
      if (this.styleApplied === 'dark') {
        this.styleApplied = 'light'
        this.styleText = 'Dark mode'
      } else
      if(this.styleApplied === 'light') {
        this.styleApplied = 'dark'
        this.styleText = 'Light mode'
      }
      this.setStyleMode(this.styleApplied)
    }
  }
}
</script>

<style scoped>
  @import '../style/styleMode.css';

.header {
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
}

.header h2 {
  cursor: pointer;
}

.dark {
  background: var(--dark-mode-header-background);
  color: var(--dark-mode-header-font-color);
}

.light {
  background: var(--light-mode-header-background);
  color: var(--light-mode-header-font-color);
}

@media (max-width: 550px) {
  .header {
    padding: 10px 15px;
  }
  .header h1 {
    font-size: 20px;
    margin: 0;
  }

  .header h2 {
    font-size: 14px;
    margin: 0;
    margin-top: 4px;
  }
}
</style>
