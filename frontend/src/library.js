// Definition
var header  = Vue.component('title-header', {
	template : '#title-header',
	props: ['theme_','title_'],
	data	   : function() { return {
		theme: this.theme_,
		title: this.title_
	}},
	methods  : {
		switchThemes : function(){
			switch(this.theme){
				case 'Dark' : this.theme = 'Light'; ID('body').classList.add('dark'); 		 break;
				case 'Light': this.theme = 'Dark';  ID('body').classList.remove('dark'); 	 break;
			}
		},
	},
});

var grid_f  = Vue.component('grid-filters', {
	template: '#grid-filters',
	props	  : {
		id			: String,
		options_	: Array,
		func_		: Function,
		func_2	: Function,
		stext_	: String,
	},
	data	  : function() { return {
		options	: this.options_,
		target 	: '#'+this.id,
		func     : this.func_,
		func2    : this.func_2,
		opt	 	: 'Filtros',
		stextC 	: '',
		stext		: this.stext_,
		catg_v   : false
	}},
	methods  : {
		sort : function(text, i){
			if(this.opt == 'Filtros') 	{ this.options.push({ valor: 0, text: 'Remover Filtros (X)' }); }
			if(i == 0) { this.options.pop(); this.opt = 'Filtros'; } else { this.opt = text; }
			if(i == 5) { this.catg_v = true; } else { if(this.catg_v) { this.catg_v = false; this.func('', 'category'); } }
		}
	}
});

var grid    = Vue.component('grid-sys', {
	template : '#grid-sys',
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
});

var grid_ft = Vue.component('grid-footer', {
	template : '#grid-footer',
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
});

var boxv 	= Vue.component('box-v', {
	template : '#box-v',
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
});

var desc 	= Vue.component('grid-desc', {
	template : '#grid-desc',
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
});
// Definition

// Instantiate
var app = new Vue({
	el: '#app', 
	template: '#app-vue',
	components: {
		'titleHeader': header,
		'gridFilters': grid_f,
		'gridFooter' : grid_ft,
		'boxV'	 	 : boxv,
		'gridSys'	 : grid,
		'gridDesc'	 : desc
	},
	methods : {
		collapse : function(sID){ $('#'+sID).collapse('hide'); },
	},
	data : {
		theme : 'Light',
		title	: 'Livraria do Nevesky',
		els	: [],
		opts	: [
			{ valor: 1, text: 'Melhores Avaliados' },
			{ valor: 2, text: 'Em Estoque' 			},
			{ valor: 3, text: 'Ordem Alfabética' 	},
			{ valor: 4, text: 'Livros Curtidos' 	},
			{ valor: 5, text: 'Por Categoria' 		}
		]
	},
});

// Initialize -> API auth error inside a life-cycle
httpReq('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge',
	(resp)=>{ const arr = JSON.parse(resp);
		for (let i = 0; i < arr.length; i++){
			arr[i].liked 	= false;
			arr[i].id	 	= i+1;
			arr[i].visible = true;
			arr[i].count_likes = arr[i].users_who_liked.length;
		};
		// using $data
		app.$data.els = arr;
	},
);