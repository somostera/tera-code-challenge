<template>
	<section v-if="els != undefined" class="row boxV" style="width: 100%; padding-top: 1.6%;">
		<grid-filters ref="search" :func_2="sort" :func_="search" :stext_="stext" :options_="options" id="_search"></grid-filters>
		<span class="col-12 pl-3 ml-1" style="padding-bottom: 0.75%; font-size: 75%"> Total: {{ len }} </span>
		<section class="row" style="min-height: 66vh; margin-left: 1px; width: 100%;">
			<template v-for="k in els_(page)">
				<box-v v-if="k != undefined" 			:detail="viewBook"
					:grid_class_="grid_class" 			:count_likes_="els[k].count_likes"
					:key		="els[k].id"				:ind_="k"
					:func		="saveLike"					:liked_="els[k].liked"
					:title	="els[k].name" 			:img="els[k].cover_picture" 
					:author	="els[k].author" 			:category="els[k].category"
					:stock="parseInt(els[k].stock)"
				></box-v>
			</template>
		</section>
		<grid-footer :prev="prevPage" :next="nextPage" :navto="clickNum" :page_="page" :len_="len" :max_="max"></grid-footer>
	</section>
</template>

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
			'gridFilters': httpVueLoader('templates/grid-filters.vue'),
			'gridFooter' : httpVueLoader('templates/grid-footer.vue'),
			'boxV'		 : httpVueLoader('templates/box-v.vue')
		},
		methods  : {
			back	  : function()		{ this.desc = null; },
			viewBook: function(id)	{ this.desc = id; },
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