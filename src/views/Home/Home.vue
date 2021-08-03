<template>
  <div id="livros-lista-page" class="hg-total">
    <!-- Filtros -->
    <header id="main-header">
      <div id="main-header-filtros">
        <div class="linha-filtros principal">
          <div class="custom-input" id="filtronome">
            <input type="text" 
              name="filtronome"
              placeholder="Procure por um livro" 
              v-model="filtros.porNome"
              v-on:input="filtroAlterado">
          </div>
          <div id="escolha-filtro-container">
            <div class="custom-input filtro-categoria lyt-md"
              :class="{'dp-none': filtros.tipo != EFiltroTelaTipo.fttPorCategoria}">
              <input type="text" 
                name="filtrocategoria"
                placeholder="Nome da Categoria"
                v-model="filtros.porCategoria"
                v-on:input="filtroAlterado">
            </div>
            <!-- Escolha de filtros -->
            <my-select 
              :opcoes="filtros.opcoes"
              v-model="filtros.tipo"
              v-on:change="filtroAlterado"
            >
            </my-select>
          </div>
        </div>
        <div class="linha-filtros lyt-h-md">
          <div class="custom-input filtro-categoria" :class="{'dp-none': filtros.tipo != EFiltroTelaTipo.fttPorCategoria}">
            <input type="text" 
              name="filtrocategoria"
              placeholder="Nome da Categoria"
              v-model="filtros.porCategoria"
              v-on:input="filtroAlterado">
          </div>
        </div>
      </div>
      <div id="main-header-totais">
        Total: {{ livrosFiltrados.length }}
      </div>
    </header>

    <!-- Listagem de livros -->
    <ul id="lista-livros"
      :class="{'dp-none': busy || erroBuscaAPI || livrosFiltrados.length == 0}"
    >
      <li v-for="livroTela of livrosApresentados" class="livro" 
        :key="livroTela.livro.name"
        :class="{'usuario-curtiu': livroTela.usuarioCurtiu}">
        <div class="imagem-container" v-on:click="onVisualizarLivroClick(livroTela)">
          <img 
            :src="livroTela.livro.cover_picture" 
            :alt="livroTela.livro.name"
            class="hg-total lg-total"
            @error="carregarImagemDefault"
          />
          <!-- Imagem apresentada quando algum erro acontecer a imagem principal -->
          <div class="sem-imagem hg-total lg-total"></div>
        </div>
        <div class="informacoes-container">
          <div class="dados-livro" v-on:click="onVisualizarLivroClick(livroTela)">
            <div class="titulo">
              <h2>{{ livroTela.livro.name }}</h2>
            </div>
            <div class="autor">{{ livroTela.livro.author }}</div>
          </div>
          <span class="icone-curtir curtiu" v-on:click="onUsuarioCurtirClick(false, livroTela)">
            <i class="fas fa-heart"></i>
          </span>
          <span class="icone-curtir nao-curtiu" v-on:click="onUsuarioCurtirClick(true, livroTela)">
            <i class="far fa-heart"></i>
          </span>
        </div>
      </li>
    </ul>

    <!-- Paginação da lista de livros -->
    <paginacao-local
      :lista="livrosFiltrados"
      :itens-por-pagina="8"
      v-on:change="atualizarListagemPaginada"
      :class="{'dp-none': busy || erroBuscaAPI || livrosFiltrados.length == 0}"
    >
    </paginacao-local>
    
    <!-- Loading -->
    <div class="loading-container lg-total hg-total"
      :class="{'dp-none': !busy}">
      <p class="loading-mensagem">Carregando livros...</p>
    </div>
    
    <!-- Mensagem erro container -->
    <div class="mensagem-erro-container"
      :class="{'dp-none': busy || !erroBuscaAPI}"
    >
      <div class="mensagem-erro">
        Não foi possível buscar lista de livros.
        <div class="btn-recarregar" v-on:click="carregarListagemAPI">
          Tentar novamente
        </div> 
      </div>
    </div>

    <!-- Mensagem sem dados container -->
    <div class="mensagem-sem-dados-container"
      :class="{'dp-none': busy || erroBuscaAPI || livrosFiltrados.length > 0}"
    >
      <div class="mensagem">
        Não existem itens a apresentar.
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import MySelect from '@/components/MySelect/MySelect.vue';
  import PaginacaoLocal from '@/components/PaginacaoLocal/PaginacaoLocal.vue';
  import { IFiltroTela, EFiltroTelaTipo, ILivroAPI, ILivroTela } from '@/views/Home/interfaces';
  import { IPaginacaoLocalChange } from '@/components/PaginacaoLocal/interfaces';

  @Component({
    components: {
      MySelect,
      PaginacaoLocal
    },
  })
  export default class Home extends Vue {
    apiBase = 'https://us-central1-tera-platform.cloudfunctions.net';
    /*
    * Define se houve erro ao buscar listagem da API
    */
    erroBuscaAPI = false;
    /*
    * Define se a tela está carregando informações
    */
    busy = false;
    /*
    * Listagem de livros vinda da api
    */
    livros: ILivroAPI[] = [];
    /*
    * Listagem de livros com filtros aplicados
    */
    livrosFiltrados: ILivroTela[] = [];
    /*
    * Listagem de livros da lista 'livrosFiltrados' que será apresentada de acordo com a paginação
    */
    livrosApresentados: ILivroTela[] = [];
    /*
    * Lista de Livros curtidos pelo usuário.
    * Atualmente utiliza o nome, mas o ideal é ter alguma chave.
    */
    livrosCurtidos: string[] = [];
    /*
    * Filtros da tela
    */
    filtros: IFiltroTela = {
      porNome: '',
      porCategoria: '',
      tipo: null,
      opcoes: [
        {nome: 'Filtros', valor: null },
        {nome: 'Melhores Avaliados', valor: EFiltroTelaTipo.fttMelhorAvaliados },
        {nome: 'Em estoque', valor: EFiltroTelaTipo.fttEmEstoque },
        {nome: 'Ordem Alfabética', valor: EFiltroTelaTipo.fttOrdemAlfabetica },
        {nome: 'Livros curtidos', valor: EFiltroTelaTipo.fttLivrosCurtidos },
        {nome: 'Por Categoria', valor: EFiltroTelaTipo.fttPorCategoria },
      ]
    };

    // Declaro enum para utilizar no template
    EFiltroTelaTipo = EFiltroTelaTipo;

    /*
    * Disparado ao iniciar a página
    */
    created(): void{
      // Busca dados do local storage de livros curtidos
      if (localStorage.getItem('livrosCurtidos')) {
        try {
          this.livrosCurtidos = JSON.parse(localStorage.getItem('livrosCurtidos'));
        } catch(e) {
          localStorage.removeItem('livrosCurtidos');
        }
      }

      this.carregarListagemAPI();
    }

    /*
    * Busca listagem da api e atualiza dados da tela
    */
    carregarListagemAPI(): void{
      // Busca livros da API
      this.busy = true;
      this.$http.get(this.apiBase + '/url-tera-code-challenge')
        .then(
          res => res.json(),
          (err): void => {
            this.erroBuscaAPI = true;
            return err;
          }
        )
        .then((livrosAPI) => {
          if (Array.isArray(livrosAPI)) {
            this.erroBuscaAPI = false;
            this.livros = livrosAPI;
            this.atualizarLista();
          }
        })
        .finally(() => {
          this.busy = false;
        });
    }

    /*
    * Atualiza listagem apresentada na tela
    */
    atualizarLista():void {
      this.livrosFiltrados = [];

      this.livros.forEach((livroAPI) => {
        let livroApresentado = {
          livro: livroAPI,
          usuarioCurtiu: this.usuarioCurtiuFilme(livroAPI.name)
        }

        // Filtro por nome
        const fltNome = this.filtros.porNome.trim().toLowerCase();
        if (fltNome != '') {
          let livroNome = livroAPI.name.toLowerCase();

          if (livroNome.indexOf(fltNome) <= -1) {
            return;
          }
        }

        // Livros em estoque
        if (this.filtros.tipo == EFiltroTelaTipo.fttEmEstoque && livroAPI.stock <= 0) {
          return;
        }

        // Livros que o usuário curtiu
        if (this.filtros.tipo == EFiltroTelaTipo.fttLivrosCurtidos && !livroApresentado.usuarioCurtiu) {
          return;
        }

        // Filtro por categoria
        const fltTextoCategoria = this.filtros.porCategoria.trim().toLowerCase();
        if (this.filtros.tipo == EFiltroTelaTipo.fttPorCategoria && fltTextoCategoria != '') {
          let livroCategoria = livroAPI.category.toLowerCase();
          
          if (livroCategoria.indexOf(fltTextoCategoria) <= -1) {
            return;
          }
        }

        // Adiciono livro a listagem a ser apresentada
        this.livrosFiltrados.push(livroApresentado)
      });

      // Verifico se possui ordenação por melhor avaliados
      if (this.filtros.tipo == EFiltroTelaTipo.fttMelhorAvaliados) {
        this.livrosFiltrados = this.livrosFiltrados.sort((livroA, livroB) => {
          if (livroA.livro.users_who_liked.length > livroB.livro.users_who_liked.length) {
            return -1; // Item A fica antes do B
          } else if (livroB.livro.users_who_liked.length > livroA.livro.users_who_liked.length){
            return 1; // Item B fica antes do A
          } else {
            return 0; // Ordem não é alterada
          }
        });
      }

      // Verifico se possui ordenação por ordem alfabética
      if (this.filtros.tipo == EFiltroTelaTipo.fttOrdemAlfabetica) {
        this.livrosFiltrados = this.livrosFiltrados.sort((livroA, livroB) => {
          return livroA.livro.name.localeCompare(livroB.livro.name);
        });
      }
    }

    /*
    * Verifica se o usuário curtiu o filme
    */
    usuarioCurtiuFilme(nome: string): boolean {
      return this.livrosCurtidos.indexOf(nome) > -1;
    }

    /*
    * Evento disparado quando o usuário clicar no botão de curtir do filme
    */
    onUsuarioCurtirClick(curtiu: boolean, livroTela: ILivroTela): void {
      if (curtiu) {
        if (!this.livrosCurtidos.includes(livroTela.livro.name)) {
          this.livrosCurtidos.push(livroTela.livro.name);
        }
      } else {
        let filmeIndex = this.livrosCurtidos.indexOf(livroTela.livro.name);

        if (filmeIndex > -1) {
          this.livrosCurtidos.splice(filmeIndex, 1);
        }
      }

      // Atualizo objeto com se o usuário curtiu o filme
      livroTela.usuarioCurtiu = curtiu;

      // Atualizo localstorage
      this.salvarFilmesUsuarioCurtiu();
    }

    /*
    * Carrega uma imagem default no caso de ocorrer algum erro.
    */
    carregarImagemDefault(e: any): void {
      e.target.parentElement.classList.add('img-erro');
    }

    /*
    * Disparado ao alterar algum filtro
    */
    filtroAlterado(): void{
      this.atualizarLista();
    }

    /*
    * Evento disparado para abrir visualização do livro
    */
    onVisualizarLivroClick(livro: ILivroTela): void{
      this.$router.push({
        name: 'About',
        params: {
          livro: livro
        }
      });
    }
    
    /*
    * Salva lista de filmes que o usuário curtiu no local storage
    */
    salvarFilmesUsuarioCurtiu(){
      const parsed = JSON.stringify(this.livrosCurtidos);
      localStorage.setItem('livrosCurtidos', parsed);
    }

    /*
    * Evento disparado quando a listagem paginada é atualizada
    */
    atualizarListagemPaginada(e: IPaginacaoLocalChange): void{
      this.livrosApresentados = e.listapaginada;
    }
  }
</script>

<style lang="scss">
  #livros-lista-page{
    display: flex;
    flex-direction: column;

    // Loading: Colocar código em outro local
    .loading-container {
      display: flex;
      position: absolute;
      left: 0;
      top: 0;
      background-color: rgba(255, 255, 255, 0.8);
      align-items: center;
      justify-content: center;

      // Mensagem do loading
      .loading-mensagem {
        font-size: 18px;
        color: #5d6565;
      }
    }

    // Mensagem de erro
    .mensagem-erro-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      // Mensagem do loading
      .mensagem-erro {
        font-size: 18px;
        text-align: center;

        .btn-recarregar {
          font-weight: 600;
          cursor: pointer;
        }
      }
    }

    // Mensagem sem dados
    .mensagem-sem-dados-container {
      flex-grow: 1;
      display: flex;
      justify-content: center;
      align-items: center;

      // Mensagem do loading
      .mensagem {
        font-size: 18px;
        text-align: center;
      }
    }

    // Header
    #main-header{
      // Filtros
      #main-header-filtros {
        .linha-filtros {
          margin: 5px 0;

          &.principal {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;

            // Filtro por nome
            #filtronome {
              flex-grow: 1;
              max-width: 300px;
              margin-right: 5px;
            }

            // Container da escolha de filtros
            #escolha-filtro-container {
              flex-grow: 1;
              display: flex;
              justify-content: flex-end;

              .filtro-categoria {
                display: inline-block;
                margin: 0 5px;
              }
            }
          }
        }
      }

      // Linha de total
      #main-header-totais {
        margin-top: 10px;
      }
    }

    // Listagem de livros da tela
    #lista-livros{
      flex-grow: 1;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      //Itens da listagem
      .livro {
        display: inline-flex;
        flex-direction: column;
        align-items: center;
        min-width: 22%;
        padding: 10px 0;

        // Container da imagem
        .imagem-container {
          padding: 10px 30px;
          width: 200px;
          height: 240px;
          cursor: pointer;
          
          .sem-imagem {
            display: none;
            border-radius: 3px;
          }

          img {
            border-radius: 3px;
          }

          // Em caso de erro
          &.img-erro {
            .sem-imagem {
              display: block;
              background-image: url('../../assets/img-sem-foto.jpg');
              background-size: cover;
              background-repeat: no-repeat;
              background-position: center;
            }

            img {
              display: none;
            }
          }
        }

        // Container de informações
        .informacoes-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          width: 100%;

          // Dados do livro
          .dados-livro {
            flex-grow: 1;
            text-align: left;
            margin-right: 5px;
            max-width: 200px;
            cursor: pointer;
          }

          // Ícone de curtir
          .icone-curtir {
            font-size: 16px;
          }

          // Ícone de curtir
          .icone-curtir.curtiu {
            display: none;
            color: red;
          }
        }

        // Quando o usuário curtiu o livro
        &.usuario-curtiu {
          .informacoes-container {
            .icone-curtir {
              // Ícone de que o usuário curtiu
              &.curtiu {
                display: inline-block;
              }
              // Ícone de que o usuário não curtiu
              &.nao-curtiu {
                display: none;
              }
            }
          }
        }
      }
    }

    // Layout mobile
    @media (max-width: 575px) {
      // Header da tela
      #main-header{
        // Filtros
        #main-header-filtros {
          .linha-filtros {
            &.principal {
              // Filtro por nome
              #filtronome {
                input {
                  width: 120px;
                }
              }
            }
          }
        }
      }
    }
  }
</style>
