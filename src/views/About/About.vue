<template>
  <div id="visualizacao-livros-page">
    <nav class="navegacao-tela">
      <router-link to="/" class="btn-voltar">
        <i class="fas fa-chevron-left"></i>
        Voltar
      </router-link>
    </nav>
    <div class="livro" v-if="livroTela != null" 
      :class="{'sem-estoque': livroTela.livro.stock <= 0, 'usuario-curtiu': livroTela.usuarioCurtiu}">
      <!-- Título mobile -->
      <div class="titulo lyt-h-sm">
        <h1>{{ livroTela.livro.name }}</h1>
      </div>
      <!-- Container de imagem do livro -->
      <div class="imagem-container">
        <img 
            :src="livroTela.livro.cover_picture" 
            :alt="livroTela.livro.name"
            class="hg-total lg-total"
            @error="carregarImagemDefault"
        />
        <!-- Imagem apresentada quando algum erro acontecer a imagem principal -->
        <div class="sem-imagem hg-total lg-total"></div>
        <!-- Sobreposição da imagem quando não possuir estoque -->
        <div class="sem-estoque-container hg-total lg-total">
          <div class="sem-estoque-msg">FORA DE ESTOQUE</div>
        </div>
        <!-- Ícones de curtir que aparecem no layout mobile -->
        <span class="icone-curtir curtiu lyt-h-sm" v-on:click="onUsuarioCurtirClick(false)">
          <i class="fas fa-heart"></i>
        </span>
        <span class="icone-curtir nao-curtiu lyt-h-sm" v-on:click="onUsuarioCurtirClick(true)">
          <i class="far fa-heart"></i>
        </span>
      </div>
      <!-- Título tamanho acima do mobile -->
      <div class="titulo lyt-sm">
        <h1>{{ livroTela.livro.name }}</h1>
      </div>
      <div class="dados-livro-container">
        <div class="dados-livro">
          <div class="autor">{{ livroTela.livro.author }}</div>
          <div class="categoria">{{ livroTela.livro.category }}</div>
        </div>
        <span class="icone-curtir curtiu lyt-sm" v-on:click="onUsuarioCurtirClick(false)">
          <i class="fas fa-heart"></i>
        </span>
        <span class="icone-curtir nao-curtiu lyt-sm" v-on:click="onUsuarioCurtirClick(true)">
          <i class="far fa-heart"></i>
        </span>
        <!-- Estoque mobile -->
        <div class="estoque lyt-h-sm">
          <div class="msg-com-estoque">
            Em estoque: {{ livroTela.livro.stock }} unidade(s)
          </div>
          <div class="msg-sem-estoque">
            Fora de estoque
          </div>
        </div>
      </div>
      <!-- Estoque tamanho acima do mobile -->
      <div class="estoque lyt-sm">
        <div class="msg-com-estoque">
          Em estoque: {{ livroTela.livro.stock }} unidade(s)
        </div>
        <div class="msg-sem-estoque">
          Fora de estoque
        </div>
      </div>
      <div class="descricao">{{ livroTela.livro.description }}</div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Vue, Component } from 'vue-property-decorator';
  import { ILivroTela } from '@/views/Home/interfaces';

  @Component({})
  export default class About extends Vue {
    livroTela: ILivroTela | null = null;
    livrosCurtidos: string[] = [];

    created(): void{
      this.livroTela = this.$route.params.livro;

      if (this.livroTela == null) {
        this.$router.push({
          name: 'Home'
        });
      } else {
        // Busca dados do local storage de livros curtidos
        if (localStorage.getItem('livrosCurtidos')) {
          try {
            this.livrosCurtidos = JSON.parse(localStorage.getItem('livrosCurtidos'));
          } catch(e) {
            localStorage.removeItem('livrosCurtidos');
          }
        }
      }
    }

    /*
    * Carrega uma imagem default no caso de ocorrer algum erro.
    */
    carregarImagemDefault(e: any): void {
      e.target.parentElement.classList.add('img-erro');
    }

    /*
    * Evento disparado quando o usuário clicar no botão de curtir do filme
    */
    onUsuarioCurtirClick(curtiu: boolean): void {
      if (curtiu) {
        if (!this.livrosCurtidos.includes(this.livroTela.livro.name)) {
          this.livrosCurtidos.push(this.livroTela.livro.name);
        }
      } else {
        let filmeIndex = this.livrosCurtidos.indexOf(this.livroTela.livro.name);

        if (filmeIndex > -1) {
          this.livrosCurtidos.splice(filmeIndex, 1);
        }
      }

      // Atualizo objeto com se o usuário curtiu o filme
      this.livroTela.usuarioCurtiu = curtiu;

      // Atualizo localstorage
      const parsed = JSON.stringify(this.livrosCurtidos);
      localStorage.setItem('livrosCurtidos', parsed);
    }
  }
</script>


<style lang="scss">
  #visualizacao-livros-page{
    .navegacao-tela {
      .btn-voltar {
        color: var(--cor-texto-2) !important;
        text-decoration: none;
      }
    }

    //Itens da listagem
    .livro {
      padding: 10px 20%;

      // Container da imagem
      .imagem-container {
        width: 200px;
        height: 240px;
        float: right;
        margin: 10px auto;
        position: relative;
        
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

        .sem-estoque-container {
          display: none;
          position: absolute;
          left: 0;
          top: 0;
          background-color: rgba(255,255,255, 0.35);

          .sem-estoque-msg {
            position: absolute;
            left: calc(50% - 70px);
            top: calc(50% - 17px);
            font-weight: 600;
            padding: 15px 10px;
            background-color: #1c2032;
            border-radius: 3px;
            color: var(--cor-texto-3);
          }
        }
      }
      
      .titulo {
        h1 {
          display: block;
        }
      }
      
      .dados-livro-container {
        display: flex;
        justify-content: space-between;
        padding-right: 10px;
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

      .descricao {
        margin-top: 15px;
        font-size: var(--font-size-sistema-pequeno);
      }

      .estoque {
        margin-top: 10px;

        .msg-sem-estoque {
          display: none;
        }
      }

      // Quando o usuário curtiu o livro
      &.usuario-curtiu {
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

      // Quando o livro está sem estoque
      &.sem-estoque {
        .estoque {
          .msg-com-estoque {
            display: none;
          }
          .msg-sem-estoque {
            display: block;
          }
        }
        .sem-estoque-container {
          display: block;
        }
      }
    }

    // Layout tabled
    @media (max-width: 767px) {
      .livro {
        padding: 10px 10%;
      }
    }
    
    // Layout mobile
    @media (max-width: 575px) {
      .livro {
        padding: 10px 0;

        .imagem-container {
          float: none;

          .icone-curtir {
            position: absolute;
            left: calc(100% - 25px);
            top: calc(100% - 25px);
            font-size: 20px;
          }
        }

        .dados-livro-container {
          .dados-livro {
            max-width: 150px;
          }
        }
        .estoque {
          text-align: right;
        }
      }
    }
  }
</style>