// Instantiate
var app = new Vue({
	el: '#app',
	template: '<app-vue :opts_="options" :theme_="theme" :title_="title" :els_="els"></app-vue>',
	components: {
		'appVue': httpVueLoader('templates/app-vue.vue')
	},
	data : {
		options: [
			{ valor: 1, text: 'Melhores Avaliados' },
			{ valor: 2, text: 'Em Estoque' 			},
			{ valor: 3, text: 'Ordem Alfabética' 	},
			{ valor: 4, text: 'Livros Curtidos' 	},
			{ valor: 5, text: 'Por Categoria' 		}
		],
		els: [],
		theme: 'Light',
		title: 'Livraria do Nevesky'
	},
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
});
