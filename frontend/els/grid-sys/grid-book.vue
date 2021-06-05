<template>
	<div :class="grid_class_">
		<div style="text-align: center;" class="mb-3">
			<router-link :to="{ name: 'book', params: { id_: ind }}">
				<img  :src="el.cover_picture" alt="image-here">
			</router-link>
		</div>
		<div class="book book-md">
			<h6 	>{{ el.name }}	</h6>
			<span >{{ el.author }}		
				<i v-on:click="likeIt();" v-if="el.liked==false" class="fa fa-heart-o pr-4"></i>
				<i v-on:click="likeIt();" v-else class="fa fa-heart text-danger pr-4" 		></i>
			</span>
			<span >{{ el.category }}</span>
		</div>
	</div>
</template>
<style scoped>
	.book i { float: right; transform: scale(1.5,1.6); }
	img { height: 21.5vh; }
</style>
<script>
	module.exports = {
		props		: {
			el				: Object,
			grid_class_ : String,
			ind_			: Number,
		},
		methods  : {
			likeIt: function(){ if(this.el.liked) { this.el.liked = false; } else { this.el.liked = true;  }},
		},
		computed : {
			ind	: function(){ return this.ind_; }
		}
	}
</script>