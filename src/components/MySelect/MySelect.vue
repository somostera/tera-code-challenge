<template>
  <div class="my-select-container"
    @focusout="handleFocusOut"
    tabindex="0"
    :class="{'ativo': ativo}"
  >
    <div class="valor-container" v-on:click="onValorClick">
      <div class="valor">
        {{ getNomeValorSelecionado() }}
      </div>
      <div class="icone">
        <i class="fas fa-chevron-down"></i>
      </div>
    </div>
    <div class="selecao-container">
      <div class="selecao-opcao" 
        v-for="opcao of opcoes"
        :key="opcao.valor"
        v-on:click="onOpcaoClick(opcao)"
      >
        {{ opcao.nome }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Model, Vue } from 'vue-property-decorator';
import { IMySelectOpcao } from '@/components/MySelect/interfaces';

@Component
export default class MySelect extends Vue {
  private ativo = false;
  @Prop() private opcoes: IMySelectOpcao[];
  @Model('change') readonly valorSelecionado!: any;

  getNomeValorSelecionado(): string {
    const opcao = this.opcoes.find(opcao => opcao.valor == this.valorSelecionado);

    if (opcao) {
      return opcao.nome;
    } else {
      return 'Selecione uma opção';
    }
  }

  /*
  * Evento disparado ao clicar em alguma opção
  */
  onOpcaoClick(opcao: IMySelectOpcao){
    this.$emit('change', opcao.valor);
    this.ativo = false;
  }

  /*
  * Disparado ao clicar no container de valor
  */
  onValorClick(){
    this.ativo = !this.ativo;
  }

  /*
  * Disparado ao perder foco
  */
  handleFocusOut(){
    this.ativo = false;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .my-select-container {
    position: relative;
    display: inline-block;
    cursor: pointer;
    color: var(--cor-texto-4);
    outline: none;

    // Bloco que apresenta valor
    .valor-container {
      display: flex;
      border: 1px solid var(--cor-4);
      border-radius: 4px;
      background-color: var(--cor-3);

      .valor {
        flex-grow: 1;
        padding: 5px 8px;
        display: inline-block;
        min-width: 100px;
      }
      .icone {
        display: inline-block;
        padding: 5px 8px;
        border-left: 1px solid var(--cor-4);
      }
    }

    // Bloco que apresenta opções
    .selecao-container {
      display: none;
      border: 1px solid var(--cor-4);
      border-radius: 4px;
      text-align: left;
      min-width: 100%;
      width: 200px;
      border-top-right-radius: 0;
      position: absolute;
      right: 0;
      top: calc(100% - 1px);
      background-color: var(--cor-3);

      // Opçao de seleção
      .selecao-opcao {
        padding: 8px 5px;
        border-bottom: 1px solid var(--cor-4);
        margin: 0 5px;

        &:hover, &.selecionado {
          background-color: var(--cor-4);
        }

        // Última opçao
        &:last-child{
          border-bottom: none;
        }
      }
    }

    // Quando seleção estiver ativa, apresentar opções
    &.ativo {
      .valor-container {
        border-bottom-right-radius: 0;
      }
      .selecao-container {
        display: block;
      }
    }
  }
</style>
