<template>
  <div class="paginacao-local-container">
    <!-- Botão de voltar -->
    <span class="pagina"
      v-on:click="onPaginaClick(pag - 1)"
    >
      <i class="fas fa-chevron-left"></i>
    </span>
    <!-- Lista de páginas -->
    <span v-for="pagina of listadepaginas"
      :key="pagina.pag"
      :class="{'pag-atual': pagina.pag == pag}"
      v-on:click="onPaginaClick(pagina.pag)"
      class="pagina"
    >
      {{ pagina.nome }}
    </span>
    <!-- Botão de próxima página -->
    <span class="pagina"
      v-on:click="onPaginaClick(pag + 1)"
    >
      <i class="fas fa-chevron-right"></i>
    </span>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';

@Component
export default class PaginacaoLocal extends Vue {
  /*
  * Define a listagem principal
  */
  @Prop() private lista;
  /*
  * Define a quantidade de itens apresentados por página
  */
  @Prop() private itensPorPagina;
  
  /*
  * Define a página atual
  */
  private pag = 1;

  /*
  * Define quantidade de páginas apresentadas na tela
  */
  private pagsApresentadas = 5;

  /*
  * Evento disparado ao atualizar a propriedade lista
  */
  @Watch('lista')
  onListaChange(value: any[], oldValue: any[]){
    // Atualizo a paginação para página 1
    this.pag = 1;

    // Emito evento de mudança de dados
    this.emitirAtualizacao();
  }

  /*
  * Retorna a lista paginada de acordo com:
  * - A lista 
  * - A página atual 
  * - Itens por página
  */
  get listapaginada(){
    const indexInicio = (this.itensPorPagina * (this.pag -1));
    const indexFim = indexInicio + this.itensPorPagina;

    // Busco parte da lista principal, de acordo com dados da paginação
    return this.lista.slice(indexInicio, indexFim);
  }

  /*
  * Retorna lista de páginas a serem apresentadas
  */
  get listadepaginas() {
    const qtdPaginas = this.qtdPaginas;

    let retorno = [];

    // Se a quantidade de páginas for menor ou igual a configuração de páginas a apresentar
    // Apresento todas
    if (qtdPaginas <= this.pagsApresentadas) {
      for (let index = 0; index < qtdPaginas; index++) {
        retorno.push({
          nome: (index + 1),
          pag: (index + 1)
        });
      }
    }
    // Se faltam menos páginas a apresentar do que a quantidade de páginas a apresentar
    else if (this.pag >= (qtdPaginas - this.pagsApresentadas)){
      // Se faltam mais de 2 páginas antes da última
      if ((qtdPaginas - this.pag) > 2) {
        let paginaNumero = 0;
        // Adiciono páginas iniciais, deixando as duas finais.(Se apresento 10, aqui coloco 8)
        for (let index = 0; index < (this.pagsApresentadas -2); index++) {
          // Defino numeração
          paginaNumero = (qtdPaginas - this.pagsApresentadas + index);
          // Adiciono a lista
          retorno.push({
            nome: paginaNumero,
            pag: paginaNumero
          });
        }

        // Adiciono penultimo item, indicando próxima página depois do apresentado
        retorno.push({
          nome: '...',
          pag: (paginaNumero + 1)
        });

        // Adiciono último item
        retorno.push({
          nome: qtdPaginas,
          pag: qtdPaginas
        });

      } else {
        // Adiciono referência a página 1
        retorno.push({
          nome: 1,
          pag: 1
        });

        // Adiciono penultimo item, indicando página anterior ao apresentado
        retorno.push({
          nome: '...',
          pag: (qtdPaginas - this.pagsApresentadas + 2)
        });
        
        // Adiciono páginas restantes até a última página
        for (let index = 0; index < (this.pagsApresentadas -2); index++) {
          // Defino numeração
          let paginaNumero = (qtdPaginas - this.pagsApresentadas + 3 + index);
          // Adiciono a lista
          retorno.push({
            nome: paginaNumero,
            pag: paginaNumero
          });
        }
      }
    } else {
      let paginaNumero = this.pag -1;

      // Adiciono páginas iniciais, deixando as duas finais.(Se apresento 10, aqui coloco 8)
      for (let index = 0; index < (this.pagsApresentadas -2); index++) {
        // Defino numeração
        paginaNumero++;
        
        // Adiciono a lista
        retorno.push({
          nome: paginaNumero,
          pag: paginaNumero
        });
      }

      // Adiciono penultimo item, indicando próxima página depois do apresentado
      retorno.push({
        nome: '...',
        pag: (paginaNumero + 1)
      });

      // Adiciono último item
      retorno.push({
        nome: qtdPaginas,
        pag: qtdPaginas
      });
    }

    return retorno;
  }

  /*
  * Retorna a quantidade de páginas
  */
  get qtdPaginas() {
    const qtdItensLista = this.lista.length;
    const qtdPaginas = Math.ceil(qtdItensLista / this.itensPorPagina);

    if (qtdPaginas == 0) {
      return 1;
    }

    return qtdPaginas;
  }

  /*
  * Evento disparado ao clicar em uma página
  */
  onPaginaClick(pag: number){
    // Se clicou em uma página diferente
    if (pag != this.pag && pag > 0 && pag <= this.qtdPaginas) {
      // Atualizo o número da página
      this.pag = pag;

      // Emito atualização de lista paginada
      this.emitirAtualizacao();
    }
  }

  /*
  * Dispara evento com atualização de dados
  */
  emitirAtualizacao(){
    this.$emit('change', {
      listapaginada: this.listapaginada,
      pagina: this.pag
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .paginacao-local-container {
    position: relative;
    text-align: center;
    padding: 5px 10px;

    .pagina {
      cursor: pointer;
      padding: 0 5px;

      // Página selecionada
      &.pag-atual, &:hover {
        font-weight: 600;
      }
    }
  }
</style>
