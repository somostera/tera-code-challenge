<template>
  <div  class="app" :class="isDark">
    <Header />
    <Content />
  </div>
</template>

<script>

import Content from './components/template/Content'
import Header from './components/template/Header'
import {mapState} from 'vuex'

export default {
  name: 'App',
  components: {Content, Header},
  computed:{
	...mapState(['isDark'])
  }
  
}
</script>

<style>
* {
		font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
		font-size: 1.1rem;
	}

	body {
		margin: 0;
	}

	.app {
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;

		height: 100vh;
		display: grid;
		background: #cdeff1;
		color: #15202B;
		grid-template-rows: 60px 1fr;
		grid-template-columns: 1fr;
		grid-template-areas:
			"header header"
			"content content"
			"footer footer";
	}

	.dark {
		background: #192734;
		color: #E8E8E8;
	}

</style>
