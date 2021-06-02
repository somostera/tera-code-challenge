const routes = [
  { path: '/', component: httpVueLoader('templates/app-vue.vue') },
]
const router = new VueRouter({
	base  : '/',
	mode  : 'history',
	routes: routes
})
const app = new Vue({
	router: router,
	template: '<router-view :opts_="options" :theme_="theme" :title_="title" :els_="els"></router-view>',
	data : {
		theme: 'Light',
		title: 'Livraria do Nevesky',
		options: [
			{ valor: 1, text: 'Melhores Avaliados' },
			{ valor: 2, text: 'Em Estoque' 			},
			{ valor: 3, text: 'Ordem Alfabética' 	},
			{ valor: 4, text: 'Livros Curtidos' 	},
			{ valor: 5, text: 'Por Categoria' 		}
		],
		els: []
	},
	created : function() {
		var me = this;
		var p = new Promise((resolve, reject)=>{
			httpReq('http://renovel.empresarial.ws/Project_R/src/get/books',
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
}).$mount('#app');