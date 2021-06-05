<template>
	<header id="header">
		<h2>{{ title_ }}</h2>
		<span id="theme-btn" v-on:click="switchThemes(theme)" style="cursor: pointer;">{{ theme }} Mode</span>
	</header>
</template>
<style>
	#header {
		padding: 10px 2% 8px 5%;
		display: inline-flex;
		background: #95d9da;
		color: #eee;
		width: 100%;
	}
	#header h2 { font-size: 170%; }
	@media only screen and (max-device-width: 800px) {
		#header { padding: 10px 0 5px 5%; }
		#theme-btn {
			right: 5%; 
			position: absolute; 
			padding-top: 1.5%;
			text-align: right;
		}
	}
	#theme-btn {
		right: 5%; 
		position: absolute; 
		padding-top: 7px;
		text-align: right;
	}
</style>
<script>
	module.exports = {
		props		: {
			theme_: String,
			title_: String
		},
		data	   : function() { return {
			theme: this.theme_,
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
