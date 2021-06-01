<template>
	<header id="header" class="box-shadow">
		<h2>{{ title }}</h2>
		<span id="theme-btn" v-on:click="switchThemes(theme)" style="cursor: pointer;">{{ theme }} Mode</span>
	</header>
</template>
<script>
	module.exports = {
		props: ['theme_','title_'],
		data	   : function() { return {
			theme: this.theme_,
			title: this.title_
		}},
		methods  : {
			switchThemes : function(){
				switch(this.theme){
					case 'Dark' : this.theme = 'Light'; ID('body').classList.add('dark'); 		 break;
					case 'Light': this.theme = 'Dark';  ID('body').classList.remove('dark'); 	 break;
				}
			},
		}
	}
</script>