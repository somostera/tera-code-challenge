<template>
	<div :class="grid_class">
		<div style="text-align: center;" class="mb-3">
			<router-link :to="{ name: 'book', params: { id_: ind }}"><img style="height: 21.5vh;" :src="img" alt="image-here"></router-link>
		</div>
		<div class="book book-md">
			<h6 	>{{ title }}	</h6>
			<span >{{ author }}		
				<i v-on:click="func(ind); likeIt();" v-if="liked==false" class="fa fa-heart-o pr-4" 	style="float: right; transform: scale(1.6,1.7);"></i>
				<i v-on:click="func(ind); likeIt();" v-else class="fa fa-heart text-danger pr-4" 		style="float: right; transform: scale(1.6,1.7);"></i>
			</span>
			<span >{{ category }}</span>
		</div>
	</div>
</template>
<script>
	module.exports = {
		props		: {
			img   		: String,
			title 		: String,
			author		: String,
			category 	: String,
			stock 		: Number,
			who_liked	: Array,
			liked_		: Boolean,
			func			: Function,
			detail		: Function,
			count_likes_: Number,
			grid_class_ : String,
			ind_			: Number,
		},
		data		: function() { return {
			liked 	  : this.liked_,
			grid_class : this.grid_class_,
			count_likes: this.count_likes_
		}},
		methods  : {
			likeIt: function() { if(this.liked) { this.liked = false; } else { this.liked = true;  }},
			spot	: function() { this.grid_class = 'h-center col-md-12 col-12'; }
		},
		computed : {
			ind	: function(){
				return this.ind_;
			}
		}
	}
</script>