<template>
	<div class="col-12 boxV" v-if="el != undefined">
		<router-link class="font-bold" to="/"> < Voltar </router-link>
		<div class="col-md-6 offset-md-3 col-12 mt-2 d-none d-sm-block">
			<div class="book book-lg">
				<div class="ml-2 float-right">
					<div v-if="el.stock == 0" class="out-of-stock">FORA DE ESTOQUE</div>
					<img v-if="el.stock == 0" style="height: 100%; opacity: 0.5;" :src="el.cover_picture" alt="image-here"/>
					<img v-else style="height: 40vh;" :src="el.cover_picture" alt="image-here"/>
				</div>
				<h6 class="text-left mb-2">{{ el.name }}	</h6>
				<span >{{ el.author }}		
					<i v-on:click="likeIt" v-if="el.liked==false" class="fa fa-heart-o pr-4"></i>
					<i v-on:click="likeIt" v-else class="fa fa-heart text-danger pr-4" 		></i>
				</span>
				<span	class="mb-2">{{ el.category }}</span>
				<span	v-if="el.stock > 0" class="mb-3">Em Estoque: {{ el.stock }}</span>
				<span	v-else class="mb-3">Fora de Estoque</span>
				<p class="text-justify">{{ el.description }} </p>
			</div>
		</div>
		<div class="col-md-6 offset-md-3 col-12 mt-2 d-block d-sm-none">
			<div class="book book-lg row">
				<h6  class="text-center col-12 mb-2">{{ el.name }}</h6>
				<div class="col-12 pr-2 pl-2 mb-2">
					<div v-if="el.stock == 0" class="out-of-stock">FORA DE ESTOQUE</div>
					<img v-if="el.stock == 0" style="width: 100%; opacity: 0.5;" :src="el.cover_picture" alt="image-here"/>
					<img v-else style="width: 100%;" :src="el.cover_picture" alt="image-here"/>
					<i v-on:click="likeIt" v-if="el.liked==false" class="fa fa-heart-o float-heart"></i>
					<i v-on:click="likeIt" v-else class="fa fa-heart float-heart text-danger" 		 ></i>
				</div>
				<div class="col-6 pl-2">
					<span >{{ el.author }}	</span>
					<span	>{{ el.category }}</span>
				</div>
				<div class="col-6">
					<span class="v-center mr-2" v-if="el.stock > 0">Em estoque: {{ el.stock }}</span>
					<span class="v-center mr-2" v-else>Fora de Estoque</span>
				</div>
				<p class="col-12 mt-2 text-justify">{{ el.description }} </p>
			</div>
		</div>
	</div>
</template>
<style>
	.out-of-stock {
		opacity: 1;
		padding: 10px;
		width: 80%; 
		color: #fff; 
		background: #000;
		position: absolute; 
		top: 50%; left: 50%; transform: translate(-50%, -50%);
		font-size: 13px;
		font-weight: 700;
		text-align: center;
		z-index: 3;
	}
	.book i { float: right; transform: scale(1.6,1.7); }
	.col-12.pr-2.,pl-2.mb-2 { background: #fff; }
	.float-right { background: #fff; height: 40vh; position: relative; }
	.vh-center.mr-2{ right: 0; }
</style>
<script>
	module.exports = {
		props		: {
			arr: Array,
			id_: String,
			ind: Number,
		},
		methods  : {
			likeIt: function() { if(this.el.liked) { this.el.liked = false; } else { this.el.liked = true;  }},
		},
		computed : {
			el	: function(){ const id = parseInt(this.id_); return this.arr[id]; }
		}
	}
</script>