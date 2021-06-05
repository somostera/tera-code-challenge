<template>
	<div>
		<div class="nav-menu left-nav b-primary d-none d-lg-block">
			<section class="row text-center boxV">
				<div id="perfil" class="col-12 mt-3"><img class="perfil" :src="photo"></img><br><span class="font-sm on-hover">{{ name }}</span></div>
				<div id="nav" class="col-12 mt-4"><span class="font-bold font-xsm on-hover">Navegação</span></div>
				<div id="nav-btns" class="col-12"><nav-ul :routes="routes"><nav-ul></div>
			</section>
		</div>
		<div class="nav-menu top-nav b-primary d-block d-lg-none"><i class="fa fa-bars v-center"></i>
			<section class="row text-center boxV on-hover">
				<div id="perfil" class="col-12 mt-3"><img class="perfil" :src="photo"></img><br><span class="font-sm on-hover">{{ name }}</span></div>
				<div id="nav" class="col-12 mt-4"><span class="font-bold font-xsm on-hover">Navegação</span></div>
				<div id="nav-btns" class="col-12"><nav-ul :routes="routes"><nav-ul></div>
			</section>
		</div>
	</div>
</template>
<style scoped>
	#perfil { min-height: 110px;}
	#nav { min-height: 20px; }
	.nav-menu.left-nav { 
		width: 45px;
		height: 100%;
		position: fixed;
		left: 0;
		top: 0;
		z-index: 2;
	}
	.nav-menu.top-nav {
		z-index: 99;
		position: fixed;
		top: 0;
	}
	.perfil { border-radius: 100%; max-height: 28px; } 
	
	.nav-menu.left-nav:hover 	{ width: 192px; }
	.nav-menu:hover .perfil 	{ max-height: 70px; } 	
	.nav-menu:hover .on-static { display: none; } 	
	.nav-menu:hover .on-hover 	{ display: initial; } 
	.nav-menu:hover .nav-btn 	{ padding: 0; padding-left: 12px; }
	.nav-menu:hover .nav-btn i { padding: 15px 0 15px 0; } 
	.nav-menu:hover .nav-btn .h-center {
		position: static;
		transform: translate(0); 
		-ms-transform: translate(0); 
		-webkit-transform: translate(0); 
		-o-transform: translate(0);
		left: 0;
	}
	
	section { padding: 0; }
	.fa-bars.v-center { color: #fff; top: 25px; }
	.on-hover 	{ display: none; }	
	.on-static 	{ display: initial;}	
</style>
<script>
	module.exports = {
		props : {
			photo	 : String,
			name 	 : String,
			routes : Array
		},
		components: {
			'navUl': httpVueLoader(cp.navul)
		}
	}
</script>