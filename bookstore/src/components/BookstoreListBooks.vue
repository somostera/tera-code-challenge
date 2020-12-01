<template>
<div>
    <Input v-model="book"/>
    <Selected :selecionado="selecionado" @selectionado="changeSelectionado"/>
      <div class="books-container">
     <div class="list-books" v-for="(item, index) in resultadoBusca" :key="item.index">
       <div class="container-img">
           <img @click="goToPage(`/books/${index}`)" class="img" :src="item.cover_picture" alt="">
        </div>
        <div class="wrapper-info-book">
            <div>
                <h2 class="text-main">{{item.name}}</h2>
                <h2 class="text-second">{{item.author}}</h2>
                <h2 class="text-second">{{item.category}}</h2>
            </div>
            <div class="wrapper-icon">
                <font-awesome-icon :icon="['far', 'heart']" class="icon"/>
            </div>
            
        </div>
     </div>
  </div>
  </div>
</template>

<script>

import Input from '../components/BookstoreInput'
import Selected from '../components/BookstoreSelected'

export default {
  name: 'App',
  components: {
      Input,
      Selected
  },
  data() {
      return {
            book: '',
            selecionado: 'Aqui é o da lista'
        }
    },
    props: ['selecao'],
  computed: {
    gettersbooks() {
    return this.$store.getters.allBooks
    },
    books() {
    return this.$store.getters.allBooks
    },
    resultadoBusca: function() {
        if(this.book == '' || this.book == ' ') {
            return this.$store.getters.allBooks;
        } else {
            return this.$store.getters.getBooksFromName(this.book)
        }
    },
    resultadoSelecao() {
        return this.$store.getBooksFromClassification;
    }
  },
  mounted() {
    this.$store.dispatch("getBooks");
  },
    methods: {
      goToPage(page) {
        this.$router.push(page);
      },
      changeSelectionado(value) {
          this.selecionado = value;
      }
      
    }
}
</script>

<style scoped> 
.books-container {
    width: 100%;
    display: grid;
    grid-template-columns: 100%;

}
.container-img {
    width: 150px;
    height: 200px;
    margin: 0 auto;
}
.container-img .img {
    width: 100%;
    height: 100%;
    cursor:pointer;
}

.list-books {
    margin: 20px;
    padding: 10px;
}
.wrapper-info-book {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 20px;
}
.wrapper-info-book .text-main {
    font-size: 12px;
    font-weight: 700;
    margin:0;
}
.wrapper-info-book .text-second {
    font-size: 10px;
    margin: 0;
}
.wrapper-icon .icon {
    font-size: 20px;
}

@media(min-width: 550px) {
    .books-container {
        grid-template-columns: 50% 50%;
    }
}
@media(min-width: 750px) {
    .books-container {
        grid-template-columns: 25% 25% 25% 25%;
    }
}
</style>