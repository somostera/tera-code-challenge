const routes = [
  { path: '/'	  		 , name:'home', component: httpVueLoader(cp.gridsys) },
  { path: '/book/:id_', name:'book', component: httpVueLoader(cp.gridview), props: true  },
];
const router = new VueRouter({
	base  : '/',
	mode  : 'history',
	routes: routes
});
const app = new Vue({
	router: router,
	template: '<app></app>',
	components: { 'app': httpVueLoader(cp.app) }
}).$mount('#app');