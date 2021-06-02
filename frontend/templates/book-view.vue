<template>
	<div class="col-12 boxV" v-if="el != undefined">
		<router-link class="font-bold" to="/"> < Voltar </router-link>
		<div class="col-md-6 offset-md-3 col-12 mt-2 d-none d-sm-block">
			<div class="book book-lg">
				<div class="ml-2 float-right" style="background: #fff; height: 40vh; position: relative;">
					<div v-if="el.stock == 0" class="out-of-stock" style="z-index: 3;">FORA DE ESTOQUE</div>
					<img v-if="el.stock == 0" style="height: 100%; opacity: 0.5;" :src="el.cover_picture" alt="image-here"/>
					<img v-else style="height: 40vh;" :src="el.cover_picture" alt="image-here"/>
				</div>
				<h6 class="text-left mb-2">{{ el.name }}	</h6>
				<span >{{ el.author }}		
					<i v-on:click="likeIt" v-if="el.liked==false" class="fa fa-heart-o pr-4" style="float: right; transform: scale(1.7,1.8);"></i>
					<i v-on:click="likeIt" v-else class="fa fa-heart text-danger pr-4" 	style="float: right; transform: scale(1.7,1.8);"></i>
				</span>
				<span	class="mb-2">{{ el.category }}</span>
				<span	v-if="el.stock > 0" class="mb-3">Em Estoque: {{ el.stock }}</span>
				<span	v-else class="mb-3">Fora de Estoque</span>
				<p class="text-justify">{{ el.description }} </p>
			</div>
		</div>
		<div class="col-md-6 offset-md-3 col-12 mt-2 d-block d-sm-none">
			<div class="row book book-lg">
				<h6  class="text-center col-12 mb-2">{{ el.name }}</h6>
				<div class="col-12 pr-2 pl-2 mb-2" style="background: #fff;">
					<div v-if="el.stock == 0" class="out-of-stock" style="z-index: 3;">FORA DE ESTOQUE</div>
					<img v-if="el.stock == 0" style="width: 100%; opacity: 0.5;" :src="el.cover_picture" alt="image-here"/>
					<img v-else style="width: 100%;" :src="el.cover_picture" alt="image-here"/>
					<i v-on:click="likeIt" v-if="el.liked==false" class="fa fa-heart-o float-heart" 	style="transform: scale(1.6,1.7);"></i>
					<i v-on:click="likeIt" v-else class="fa fa-heart text-danger float-heart" 		style="transform: scale(1.6,1.7);"></i>
				</div>
				<div class="col-6 pl-2">
					<span >{{ el.author }}	</span>
					<span	>{{ el.category }}</span>
				</div>
				<div class="col-6">
					<span  class="v-center mr-2" style="right: 0;" v-if="el.stock > 0">Em estoque: {{ el.stock }}</span><span v-else class="v-center mr-2" style="right: 0;">Fora de Estoque</span>
				</div>
				<p class="col-12 mt-2 text-justify">{{ el.description }} </p>
			</div>
		</div>
	</div>
</template>
<script>
	module.exports = {
		props		: {
			arr 			: Array,
			id_			: String,
			func			: Function,
			count_likes_: Number,
			ind_			: Number,
		},
		data		: function() { return {
			count_likes: this.count_likes_,
		}},
		methods  : {
			likeIt: function() { 
				if(this.el.liked) { this.el.liked = false; } else { this.el.liked = true;  }
			},
		},
		computed : {
			ind	: function(){
				return this.ind_;
			},
			el	: function(){
				const id = parseInt(this.id_);
				return this.arr[id];
			}
		}
	}
</script>