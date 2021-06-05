<template>
	<div class="col-12 col-md-12 text-center mt-1" style="cursor: pointer;">
		<i class="fa fa-angle-left mr-2 font-md" 				v-on:click="prev"></i>
		<span class="mr-2" v-for="i in Math.ceil(len/max)" v-on:click="navto(i-1)"><span class="font-heavy" v-if="page==i-1">{{ i }}</span><span v-else>{{ i }}</span></span>
		<i class="fa fa-angle-right font-md" 					v-on:click="next"></i>
	</div>
</template>
<script>
	module.exports = {
		props    : {
			next  : Function,
			prev  : Function,
			navto : Function,
			page_ : Number,
			len_  : Number,
			max_  : Number
		},
		computed : {
			page : function() { return this.page_; },
			len  : function() { return this.len_;  },
			max  : function() { return this.max_;  }
		}
	}
</script>