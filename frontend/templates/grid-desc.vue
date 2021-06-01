<template>
	<div class="col-12">
		<span class="font-bold" v-on:click="back"> < Voltar </span>
		<div class="col-md-6 offset-md-3 col-12 mt-2 d-none d-sm-block">
			<div class="book book-lg">
				<div class="ml-2 float-right" style="background: #fff; height: 40vh; position: relative;">
					<div v-if="stock == 0" class="out-of-stock" style="z-index: 3;">FORA DE ESTOQUE</div>
					<img v-if="stock == 0" style="height: 100%; opacity: 0.5;" :src="img" alt="image-here"/>
					<img v-else style="height: 40vh;" :src="img" alt="image-here"/>
				</div>
				<h6 class="text-left mb-2">{{ title }}	</h6>
				<span >{{ author }}		
					<i v-on:click="func(ind); likeIt();" v-if="liked==false" class="fa fa-heart-o pr-4" style="float: right; transform: scale(1.7,1.8);"></i>
					<i v-on:click="func(ind); likeIt();" v-else class="fa fa-heart text-danger pr-4" 	style="float: right; transform: scale(1.7,1.8);"></i>
				</span>
				<span	class="mb-2">{{ category }}</span>
				<span	v-if="stock > 0" class="mb-3">Em Estoque: {{ stock }}</span>
				<span	v-else class="mb-3">Fora de Estoque</span>
				<p class="text-justify">{{ descript }} </p>
			</div>
		</div>
		<div class="col-md-6 offset-md-3 col-12 mt-2 d-block d-sm-none">
			<div class="row book book-lg">
				<h6  class="text-center col-12 mb-2">{{ title }}</h6>
				<div class="col-12 pr-2 pl-2 ml-2 mb-2" style="background: #fff;">
					<div v-if="stock == 0" class="out-of-stock" style="z-index: 3;">FORA DE ESTOQUE</div>
					<img v-if="stock == 0" style="width: 100%; opacity: 0.5;" :src="img" alt="image-here"/>
					<img v-else style="width: 100%;" :src="img" alt="image-here"/>
					<i v-on:click="func(ind); likeIt();" v-if="liked==false" class="fa fa-heart-o float-heart" 	style="transform: scale(1.6,1.7);"></i>
					<i v-on:click="func(ind); likeIt();" v-else class="fa fa-heart text-danger float-heart" 		style="transform: scale(1.6,1.7);"></i>
				</div>
				<div class="col-6 pl-4">
					<span >{{ author }}	</span>
					<span	>{{ category }}</span>
				</div>
				<div class="col-6">
					<span  class="v-center mr-2" style="right: 0;" v-if="stock > 0">Em estoque: {{ stock }}</span><span v-else class="v-center mr-2" style="right: 0;">Fora de Estoque</span>
				</div>
				<p class="col-12 ml-2 mt-2 text-justify">{{ descript }} </p>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
		props		: {
			img   		: String,
			title 		: String,
			author		: String,
			descript		: String,
			category 	: String,
			stock 		: Number,
			who_liked	: Array,
			liked_		: Boolean,
			func			: Function,
			back		   : Function,
			count_likes_: Number,
			ind_			: Number,
		},
		data		: function() { return {
			liked 	  : this.liked_,
			count_likes: this.count_likes_
		}},
		methods  : {
			likeIt: function() { if(this.liked) { this.liked = false; } else { this.liked = true;  }},
		},
		computed : {
			ind	: function(){
				return this.ind_;
			}
		}
	}
</script>