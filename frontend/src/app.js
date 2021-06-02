const routes = [
  { path: '/'	  		 , name:'home', component: httpVueLoader('templates/grid-sys.vue') 	 },
  { path: '/book/:id_', name:'book', component: httpVueLoader('templates/book-view.vue'), props: true  },
];
const router = new VueRouter({
	base  : '/',
	mode  : 'history',
	routes: routes
});

const app = new Vue({
	router: router,
	template: '<app-vue></app-vue>',
	components: { 'appVue': httpVueLoader('templates/app-vue.vue') }
}).$mount('#app');