<template>
	<div class="col-12 pr-0" style="width: 100%;">
		<div class="row mb-2">
			<div class="col-md-5 col-8 pr-0">
				<input type="text" placeholder="Procure por um livro"
					v-on:keyup="func(stext, 'name')" 
					v-model	 ="stext" 
					class		 ="form-control box-shadow" 
				/>
			</div>
			<div class="col-md-2 col-4 order-md-3 pl-0">
				<ul class="form-select box-shadow mb-0"
					:href="target" 
					data-toggle="collapse"
				><input class="form-control" 
						style="height: 33px; border:0; padding: 5px;" 
						v-model="opt" readonly
					/>
					<div class="collapse box-shadow search-dd"  :id="id">
						<li v-for="opt in options" 
							v-on:click="sort(opt.text, opt.valor); func2(opt.valor);"
							:value	 ="opt.valor" 
						>{{ opt.text }}</li>
					</div>
				</ul>
			</div>
			<div class="col-md-3 offset-md-2 order-md-2 col-12 pr-md-1">
				<input v-if="catg_v" type="text" placeholder="Nome da Categoria"
					v-on:keyup="func(stextC, 'category')" 
					v-model	 ="stextC"
					class		 ="form-control box-shadow"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	module.exports = {
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
	}
</script>