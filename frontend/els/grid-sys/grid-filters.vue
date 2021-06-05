<template>
	<div class="col-12 pr-0" style="width: 100%;">
		<div class="row mb-2">
			<div class="col-md-5 col-8 pr-0">
				<input class="form-control box-shadow" v-on:keyup="func_(stext, 'name')" v-model="stext" placeholder="Procure por um livro"/>
			</div>
			<div class="col-md-2 col-4 order-md-3 pl-0">
				<ul class="form-select box-shadow mb-0" :href="target" data-toggle="collapse">
					<input class="form-control" v-model="opt" readonly />
					<div class="collapse box-shadow search-dd" :id="id">
						<li v-for="opt in options" v-on:click="sort(opt.text, opt.valor);" :value="opt.valor">{{ opt.text }}</li>
					</div>
				</ul>
			</div>
			<div class="col-md-3 offset-md-2 order-md-2 col-12 pr-md-1">
				<input class="form-control box-shadow" v-if="catg_v" v-on:keyup="func_(stextC, 'category')" v-model="stextC" placeholder="Nome da Categoria" />
			</div>
		</div>
	</div>
</template>
<style scoped>
	input:read-only { height: 33px; border:0; padding: 5px; }
</style>
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
			opt	 	: 'Filtros',
			stextC 	: '',
			stext		: this.stext_,
			catg_v   : false
		}},
		methods  : {
			sort : function(text, i){
				if(this.opt == 'Filtros') 	{ this.options.push({ valor: 0, text: 'Remover Filtros (X)' }); }
				if(i == 0) { this.options.pop(); this.opt = 'Filtros'; } else { this.opt = text; }
				if(i == 5) { this.catg_v = true; } else { if(this.catg_v) { this.catg_v = false; this.func_('', 'category'); } }
				this.func_2(i);
			}
		}
	}
</script>