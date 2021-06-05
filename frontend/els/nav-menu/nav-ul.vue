<template>
	<ul class="nav-ul">
		<li v-for="route in routes" class="nav-btn">
			<router-link :to="{ name: route.name, params: route.params }">
				<i :class="route.icon"></i>
				<span class="font-sm ml-1 on-hover">{{ route.text }}</span>	
				<i class="fa fa-chevron-right on-hover"></i>
			</router-link>
		</li>
	</ul>
</template>
<style scoped>
	.nav-ul {
		width: 100%; 
		text-align: left;
		margin: 0;
		padding: 0;
	}
	.nav-btn { display: inline-flex; width: 100%; min-height: 35px; }
	.nav-btn span { padding: 9px 0 9px 0; } 	
	.fa { width: 40px; text-align: center; }
	.fa-chevron-right {
		font-size: 50% !important;
		position: absolute;
		right: 10%;
		margin-top: 7px;
	}
	a { text-decoration: none; }
</style>
<script>
	module.exports = {
		props : {
			routes : Array
		}
	}
</script>