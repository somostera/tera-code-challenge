const cp = {
	app_: {
		basedir: 'els/',
		files	 : { 
			app: 'app.vue'
		}
	},
	header_ : {
		basedir: 'els/header/',
		files	 : { 
			header: 'header.vue' 
		}
	},
	gridsys_: {
		basedir: 'els/grid-sys/',
		files	 : {
			gridsys : 'grid-sys.vue'  	 ,
			gridview: 'grid-view.vue' 	 ,
			gridbook: 'grid-book.vue' 	 ,
			gridfilt: 'grid-filters.vue',
			gridfoot: 'grid-footer.vue'
		}
	},
	build: function(){
		var cp 	 = this;
		var build = function(dir){
			Object.entries(cp[dir].files).forEach(function(file){ cp[file[0]] = cp[dir].basedir + file[1]; });
			delete cp[dir];
		}
		Object.keys(cp).forEach(function(path){ if(path != 'build') build(path); });
		delete cp.build; 
		return cp;
	}
}.build();