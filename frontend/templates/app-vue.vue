<template>
	<div id="main" v-on:click="collapse('_search')">
		<title-header :theme_="theme" :title_="title" ref="header"></title-header>
		<router-view :arr="els" :opt="opts" :grid="8" class="mt-2"></router-view>
	</div>
</template>
<script>
	module.exports = {
		components: {
			'titleHeader': httpVueLoader('templates/header.vue'),
			'gridSys'	 : httpVueLoader('templates/grid-sys.vue')
		},
		methods : {
			collapse : function(sID){ $('#'+sID).collapse('hide'); },
		},
		data : function(){ return {
			theme: 'Light',
			title: 'Livraria do Nevesky',
			opts: [
				{ valor: 1, text: 'Melhores Avaliados' },
				{ valor: 2, text: 'Em Estoque' 			},
				{ valor: 3, text: 'Ordem Alfabética' 	},
				{ valor: 4, text: 'Livros Curtidos' 	},
				{ valor: 5, text: 'Por Categoria' 		}
			],
			els: []
		}},
		created : function() {
			var me = this;
			var p = new Promise((resolve, reject)=>{
				httpReq('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge',
					(resp)=>{ const arr = JSON.parse(resp);
						for (let i = 0; i < arr.length; i++){
							arr[i].liked 	= false;
							arr[i].id	 	= i+1;
							arr[i].visible = true;
							arr[i].count_likes = arr[i].users_who_liked.length;
						};
						resolve(arr);
					},
				);
			});
			p.then( arr => { me.els = arr; });
		}
	}
</script>