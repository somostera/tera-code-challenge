<template>
	<section v-if="els != undefined" class="row boxV">
		<grid-filters ref="search" :func_2="sort" :func_="search" :stext_="stext" :options_="options" id="_search"></grid-filters>
		<span class="col-12 pl-3 ml-1"> Total: {{ len }} </span>
		<div class="row ml-3">
			<template v-for="k in els_(page)">
				<grid-el v-if="k != undefined" :el="els[k]" :key="els[k].id" :ind_="k" :grid_class_="grid_class" :func="saveLike"></grid-el>
			</template>
		</div>
		<grid-footer :prev="prevPage" :next="nextPage" :navto="clickNum" :page_="page" :len_="len" :max_="max"></grid-footer>
	</section>
</template>
<style scoped>
	section { padding: 0 2% 0 5%; }
	.col-12.pl-3.ml-1{ padding-bottom: 0.75%; font-size: 75%; }
	.boxV { width: 100%; padding-top: 1.5%; }
	.row.ml-3 { min-height: 66vh; width: 100%;	}
</style>
<script>
	module.exports = {
		props		: {
			arr	 : Array,
			opt	 : Array,
			grid   : Number
		},
		data		: function() { return {
			max    : this.grid,
			page   : 0,
			sort_  : 0,
			desc	 : null,
			stext  : '',
			grid_class : 'col-md-'+24/this.grid+' col-12 mb-2 mr-0',
		}},
		components: {
			'gridFilters': httpVueLoader(cp.gridfilt),
			'gridFooter' : httpVueLoader(cp.gridfoot),
			'gridEl'		 : httpVueLoader(cp.gridbook)
		},
		methods  : {
			nextPage: function()		{ if (this.page < (this.len/8)-1) this.page++; },
			clickNum: function(num)	{ this.page = num; },
			prevPage: function()		{ if (this.page > 0) this.page--; },
			saveLike: function(id)  { if (this.els[id].liked) { this.els[id].liked = false; } else { this.els[id].liked = true;  } },
			sort 	  : function(i)	{
				this.sort_ = i;
				switch(i){
					default: this.els.sort((a,b)=>{ {if ( a.id < b.id )  { return -1; } if ( a.id   > b.id )  { return 1; } return 0; }}); 		break;
					case 1 : this.els.sort((a,b)=>{ {if ( a.count_likes > b.count_likes ){ return -1; } if ( a.count_likes < b.count_likes ){ return 1; } return 0; }}); break;
					case 3 : this.els.sort((a,b)=>{ {if ( a.name < b.name ){ return -1; } if ( a.name > b.name ){ return 1; } return 0; }}); 	break;
				}
				this.page = 0;
			},
			search : function(text, attr){
				text 		  = text.toUpperCase();
				this.stext = text;
				var els = this.els;
				els.forEach(function(el, i){
					var words = el[attr].split(' ');
					var del   = true;
					if (/\s/g.test(text)){
						if(el[attr].toUpperCase().startsWith(text)) {
							del = false;
							els[i].visible = true;
						}
					} else {
						words.forEach(function(word){
							word = word.toUpperCase();
							if(word.startsWith(text)) {
								del = false;
								els[i].visible = true;
								return;
							}
						});
					}
					if (del){ els[i].visible = false; }
				});
				this.page  = 0;
			},
			els_: function(page){
				const arr = Array(this.max);
				var k = 0;
				page 	= page*this.max;
				var els  = this.els;
				var sort = this.sort;
				for (let i = 0; i < els.length; i++){
					if (k < this.max) {
						switch(this.sort_){
							case 2  : if (els[i].visible && els[i].stock > 0) { if (page > 0) { page--; } else { arr[k] = i; k++; } } break;
							case 4  : if (els[i].visible && els[i].liked) { if (page > 0) { page--; } else { arr[k] = i; k++; } } break;
							default : if (els[i].visible) { if (page > 0) { page--; } else { arr[k] = i; k++; } } break;
						}
					} else { return arr; }
				}
				return arr;
			}
		},
		computed : {
			len : function(){
				var els = this.els;
				var len_ = 0; 
				for (let i = 0; i < els.length; i++){
					switch(this.sort_){
						case 2  : if (els[i].visible && els[i].stock > 0) len_++; 	break;
						case 4  : if (els[i].visible && els[i].liked) len_++; 		break;
						default : if (els[i].visible) len_++;  							break;
					}
				}
				return len_;
			},
			els 	 : function(){ return this.arr; },
			options: function(){ return this.opt; } 
		}
	}
</script>
