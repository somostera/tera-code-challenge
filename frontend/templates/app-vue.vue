<template>
	<div id="main" v-on:click="collapse('_search')">
		<title-header :theme_="theme" :title_="title" ref="header"></title-header>
		<grid-sys :arr="els" :opt="opts" ref="gallery" :grid="8"></grid-sys>
	</div>
</template>
<script>
	module.exports = {
		props	  : {
			theme_ : String,
			title_ : String,
			els_	 : Array,
			opts_	 : Array
		},
		data: function(){ return {
			theme : this.theme_,
			title	: this.title_,
			opts	: this.opts_
		}},
		computed: {
			els: function() { return this.els_ }
		},
		components: {
			'titleHeader': httpVueLoader('templates/header.vue'),
			'gridSys'	 : httpVueLoader('templates/grid-sys.vue')
		},
		methods : {
			collapse : function(sID){ $('#'+sID).collapse('hide'); },
		}
	}
</script>