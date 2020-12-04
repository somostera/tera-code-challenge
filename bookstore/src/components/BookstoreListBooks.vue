<template>
    <div>
        <div class="container-inputs">
            <Input v-model="book"/>
            <Selected :selecionado="selecionado" @selectionado="changeSelectionado"/>
        </div>
        <h2 class="quantity">Total: {{countBooks}}</h2>
        <div class="books-container" v-if="selecionado != ''">
            <div class="list-books" v-for="(item, index) in resultadoSelecao" :key="item.index">
            <div class="container-img">
                <img @click="goToPage(`/books/${index}`)" class="img" :src="item.cover_picture" alt="">
            </div>
            <div class="wrapper-info-book">
                <div>
                    <h2 class="text-main">{{item.name}}</h2>
                    <h2 class="text-second">{{item.author}}</h2>
                    <h2 class="text-second">{{item.category}}</h2>
                </div>
                <div v-if="!(likes.includes(index))" class="wrapper-icon" @click="handleLike($event, index )">
                    <font-awesome-icon :icon="['far', 'heart']" class="icon" />
                </div>
                <div v-else class="wrapper-icon" @click="removeLike($event, index )">
                    <font-awesome-icon :icon="['fas', 'heart']" class="icon icon-full" />
                </div>
            </div>
        </div>
    </div>
        <div class="books-container" v-else>
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
                <div v-if="!(likes.includes(index))" class="wrapper-icon" @click="handleLike($event, index )">
                    <font-awesome-icon :icon="['far', 'heart']" class="icon" />
                </div>
                <div v-else class="wrapper-icon" @click="removeLike($event, index )">
                    <font-awesome-icon :icon="['fas', 'heart']" class="icon-full" />
                </div>
            </div>
        </div>
    </div>
        <b-pagination 
        v-model = "currentPage" 
        :total-rows = "rows" 
        :per-page = "perPage" 
        aria-controls = "itemList" 
        align = "center" 
        ></b-pagination>
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
            currentPage:1,
            perPage:8,  
            book: '',
            selecionado:'',
            clicked: false,
            likes:[],
            indexLike: '',
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
        rows() {
            return this.books.length
        },
        resultadoBusca: function() {
            if(this.book == '' || this.book == ' ') {
                return this.$store.getters.allBooks.slice(
                    (this.currentPage - 1) * this.perPage,
                    this.currentPage * this.perPage,
                )
            } else {
                return this.$store.getters.getBooksFromName(this.book)
            }
        },
        resultadoSelecao() {
            return this.$store.getters.getBooksFromClassification(this.selecionado);
        },
        countBooks() {
            return this.$store.getters.allBooks.length;
        }
    },
    mounted() {
        this.$store.dispatch("getBooks");
        if (localStorage.getItem('likes')) {
            try {
                this.likes = JSON.parse(localStorage.getItem('likes'));
            } catch(e) {
                localStorage.removeItem('likes');
            }
        }
    },

    methods: {
        goToPage(page) {
            this.$router.push(page);
        },
            changeSelectionado(value) {
        this.selecionado = value;
        },
        handleLike(event,i) {
            if(this.likes.includes(i)) {
                return;
            }
            this.likes.push(i);
            this.saveLikes();
        },
        removeLike(event,index) {
            this.likes.splice(this.likes.indexOf(index), 1);
            this.saveLikes();
        },
        saveLikes(){
            const parsed = JSON.stringify(this.likes);
            localStorage.setItem('likes', parsed);
        },
    }
}
</script>

<style scoped> 
.page-item .page-link {
    background-color: red !important;
}

.books-container {
    width: 95%;
    display: grid;
    grid-template-columns: 100%;
    margin-top: 20px;
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
    margin: 4px;
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
    cursor: pointer;
    color:black;
}
.dark .wrapper-icon .icon {
    font-size: 20px;
    cursor: pointer;
    color:#fff;
}
.wrapper-icon .icon-full {
    font-size: 20px;
    cursor: pointer;
    color:red;

}
.dark .wrapper-icon .icon-full {
    font-size: 20px;
    cursor: pointer;
    color:red;

}
.container-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 95%;
}

.quantity {
    font-size: 16px;
    color: gray;
    margin-top: 15px;
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
    .container-inputs {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
</style>