<template>
  <div id="app" class="hg-total" :class="{'dark-mode': modoDark}">
    <header id="header-tela">
      <h1 id="titulo-sistema">Livraria do cowboy</h1>
      <span id="btn-modo-tela" v-on:click="onBtnModoTelaClick(!modoDark)">
        {{ btnModoDarkTexto }}
      </span>
    </header>
    <div id="body-tela">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue } from 'vue-property-decorator';

  export default class App extends Vue {
    /*
    * Define se o modo dark está ativo
    */
    public modoDark = false;
    
    /*
    * Define o texto que vai aparecer no botão de modo da tela
    */
    get btnModoDarkTexto(): string {
      return this.modoDark ? 'Light mode' : 'Dark mode';
    }

    /*
    * Evento disparado ao clicar no botão de ativar modo dark/light
    */
    onBtnModoTelaClick(ativarModoDark: boolean){
      this.modoDark = ativarModoDark;
      // Forço atualização
      this.$mount();
    }
  }
</script>

<style lang="scss">
  /* Variáveis de estilo para padronização */
  :root {
      --borda-padrao: 1px solid #ccc;
      --padding-padrao: 10px 20px;
      --espacamento-superior: 10px;
      --tamanho-fonte-titulo-sistema: 28px;
      --tamanho-fonte-titulo-listagem: 22px;
      --tamanho-fonte-titulo-cadastro: 22px;
      --tamanho-fonte-texto-padrao: 14px;
      --tamanho-fonte-dados-usuario: 12px;
      
      --fonte-color-padrao: rgb(51, 51, 51);
      --borda-radius-padrao: 4px;
      --background-color-padrao: white;
      --background-color-padrao-contraste: #ebebeb;


      /* Breakpoints de layout
      --layout-sm: 576px;
      --layout-md: 768px;
      --layout-lg: 992px; */

      /* Fonte */
      --fonte-family-padrao: Avenir, Helvetica, Arial, sans-serif;
      --font-size-titulo-sistema: 30px;
      --font-weight-titulo-sistema: bold;
      --font-size-header-sistema: 26px;
      --font-size-sistema: 14px;
      --font-size-sistema-pequeno: 13px;

      /* Espaçamentos */
      --espacamento-lateral: 60px;
      --espacamento-vertical: 20px;
      --espacamento-entre-itens: 5px;

      /* Cores: Padrão(Light-mode) */
      --cor-1: #83dfdb; /* Cor principal do sistema */
      --cor-2: #eff; /* Cor segundaria do sistema, utilizada para o fundo da tela */
      --cor-3: white; /* Fundo de inputs e selects */
      --cor-4: #b9c8c7; /* Bordas em geral e traços utilizados em conjuntos com a cor 3 */

      --cor-texto-1: #141515; /* Títulos */
      --cor-texto-2: #5d6565; /* Subtítulos e textos. */
      --cor-texto-3: #fdf6f8; /* Textos com fundo da cor-1 */
      --cor-texto-4: #757575; /* Textos dos filtros */
  }
  
  body {
    height: 100vh;
    position: relative;
  }

  body, h1, h2, h3, h4, h5, h6, p, ul, li, label, button, figure {
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6, label {
    display: inline-block;
  }

  /* Altura total */
  .hg-total {
    height: 100%;
  }

  /* Largura total */
  .lg-total {
    width: 100%;
  }

  // Desaparece
  .dp-none {
    display: none !important;
  }

  // Custom inputs texts
  .custom-input {
    padding: 5px;
    border-radius: 3px;
    border: 1px solid var(--cor-4);
    background-color: var(--cor-3);
    min-width: 120px;

    input[type=text] {
      width: 100%;
      padding: 0;
      margin: 0;
      border: none;
      background-color: transparent;
      outline: none;
      color: var(--cor-texto-4);
    }
  }

  /* Ajustes de layout por tamanho da tela */
  /* Layout sm */
  @media (min-width: 576px) {
    /* Layout escondido a partir do sm */
    .lyt-h-sm {
      display: none !important;
    }
  }

  @media (max-width: 575px) {
    /* Layout aparece a partir do sm */
    .lyt-sm {
      display: none !important;
    }

    /* Variaveis */
    :root {
      /* Fonte */
      --font-size-titulo-sistema: 20px;
      --font-weight-titulo-sistema: normal;
      --font-size-header-sistema: 18px;

      /* Espaçamentos */
      --espacamento-lateral: 10px;
      --espacamento-vertical: 20px;
    }
  }

  /* Layout md */
  @media (min-width: 768px) {
    /* Layout escondido a partir do md */
    .lyt-h-md {
      display: none !important;
    }
  }

  @media (max-width: 767px) {
    /* Layout aparece a partir do md */
    .lyt-md {
      display: none !important;
    }
  }

  /* Layout lg */
  @media (min-width: 992px) {
    /* Layout escondido a partir do lg */
    .lyt-h-lg {
      display: none !important;
    }
  }

  @media (max-width: 991px) {
    /* Layout aparece a partir do lg */
    .lyt-lg {
      display: none !important;
    }
  }
  // Div da aplicação
  #app {
    display: flex;
    flex-direction: column;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    /* Definições gerais de espaçamento */

    /* Definições gerais de tamanhos na tela de tamanho padrão */
    font-size: var(--font-size-sistema);
    font-family: var(--fonte-family-padrao);

    /* Definições gerais de cor da tela no modo padrão(Light-mode) */
    color: var(--cor-texto-2);

    // Modo dark
    &.dark-mode {
      /* Cores: Padrão(Light-mode) */
      --cor-1: #141020; /* Cor principal do sistema */
      --cor-2: #1c2032; /* Cor segundaria do sistema, utilizada para o fundo da tela */
      --cor-3: #423b4c; /* Fundo de inputs e selects */
      --cor-4: #282233; /* Bordas em geral e traços utilizados em conjuntos com a cor 3 */

      --cor-texto-1: #fcfcfc; /* Títulos */
      --cor-texto-2: #dcdcdc; /* Subtítulos e textos. */
      --cor-texto-3: #fdf6f8; /* Textos com fundo da cor-1 */
      --cor-texto-4: #fdf6f8; /* Textos dos filtros */
    }

    // Header do sistema
    #header-tela {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: var(--espacamento-vertical) var(--espacamento-lateral);
      border-bottom: 1px solid var(--cor-4);
      background-color: var(--cor-1);
      color: var(--cor-texto-3);
      font-size: var(--font-size-header-sistema);

      // Título do sistema
      #titulo-sistema {
        font-size: var(--font-size-titulo-sistema);
        font-weight: var(--font-weight-titulo-sistema);
        margin-right: var(--espacamento-entre-itens);
      }

      /* Botão de modo de visualização */
      #btn-modo-tela {
        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    // Corpo do sistema
    #body-tela {
      flex-grow: 1;
      padding: var(--espacamento-vertical) var(--espacamento-lateral);
      background-color: var(--cor-2);
      overflow-y: auto;
    }
  }
</style>
