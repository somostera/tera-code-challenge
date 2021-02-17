<template>
  <div class="books-list">
      <span v-if="user" @click="logout" class="login"> 
        [Sair]<strong>{{user}}</strong>
      </span>
      
    <div class="filters">

        <div :class="!showSelectCategory ? 'filter-name' :'filter-name-category'">
            <b-input type="text" v-model="filterName" placeholder="Procure por um livro"/>
        </div>

        <div class="filter-select" :class="!showSelectCategory ? 'filter-select' :'filter-select-category'">
            <b-select type="text" 
            :options="items" 
            v-model="filterSelected" 
            placeholder="Filtros"/>
        </div>

         <div :class="{'filter-category': showSelectCategory}">
            <b-select type="text" :options="categories" 
                v-model="categorySelected" 
                v-if="showSelectCategory"
            />
        </div>
    </div>


         <div class="col-sm-12">

            <paginate
            name="books"
            :list="filter"
            :per="numberBooks"
            class="page-link-books"
            tag="div"
            >               
               
            <p class="mt-2">Total: {{books.length}}</p>
             <b-row :cols="cols[0]" 
               :cols-sm="cols[1]" 
               :cols-md="cols[2]" 
               :cols-lg="cols[3]" 
               :cols-xl="cols[4]" >             

                <b-col  	 
                    v-for="book in paginated('books')" 
                    :key="book._id"	           
                    col	           
                    no-gutters	           
                    class="mb-2 mt-2" >

                    <BookItem :book="book" @update="updateBooks" @logged="getBooks"/>
                      
                </b-col>   

            </b-row>
            </paginate>
        <div class="paginate">
            <paginate-links
                for="books"
                :show-step-links="true"
                :step-links="{
                    next: '>',
                    prev: '<'
                }"
                :classes="{
                    'ul': 'pagination',
                    'ul > li': 'page-item',
                    'ul > li ': 'page-link-books',
                }"  
                >
            </paginate-links>
        </div>
        </div>

        <a href="/books" class="float">
            <b-icon icon="plus" scale="2" class="my-float"></b-icon>
        </a>
  </div>
</template>

<script>
import BookItem from './BookItem'
import {baseApiUrl} from '../../../global'
import axios from 'axios'
import {mapState} from 'vuex'
import {filters} from './FilterBooks'

export default {
    name:"BooksList",
    components:{BookItem},
    data(){
        return{
            books: [],
            cols: 1,
            paginate: ['books'],
            numberBooks : 8,
            filterName:'',
            categorySelected: null,
            items:[
                { value: null, text: 'Filtro' },
                {value: '0', text:'Melhores Avaliados'},
                {value: '1', text:'Em estoque'},
                {value: '2', text:'Ordem Alfabética'},
                {value: '3', text:'Livros Curtidos'},
                {value: '4', text:'Categoria'}
            ],
            filterSelected: null,
            categories: [],
            showSelectCategory: false
        }
    },
    methods:{
        getCategories(){
             axios.get(`${baseApiUrl}/categories`)
            .then(res =>{
                
                this.categories = res.data.map(category =>{
                    return {value: category, text: category}
                })
                
            })
            .catch(err => {
                return err
            })
        },
        getBooks(){
            axios.get(`${baseApiUrl}/books`)
            .then(res =>{
                this.books = res.data
                console.log(this.books)
                this.getLikes()
            })
            .catch(err => {
                return err
            })
        },
        logout(){
            this.getBooks()
            this.$store.commit('setUser',null)
            this.$store.state.booksLiked = []
            sessionStorage.clear();
        },
        getLikes(){
            this.$store.state.booksLiked = []
            this.books.map((book,index)=>{
                book.users_who_liked.map((user) =>{
                    if(user === this.user){

                        this.books[index].like = true
                        this.$store.commit('setBooksLiked',book)
                    }else{
                        this.books[index].like = false
                    }
                })
            })
            
        },
        updateBooks(book){
          
             this.books.map((b,index)=>{
              
               if(b._id === book._id && this.user !== null){
                   
                   this.books[index] = book
                   const userExists = this.books[index].users_who_liked.filter( user =>{
                       return (user === this.user)           
                   })
                    
                   if(userExists.length === 0 && book.like){
                       this.books[index].users_who_liked.push(this.user)

                   } else if(userExists.length !== 0){
                       let position = book.users_who_liked.findIndex(user =>
                        user === this.user)
                       this.books[index].users_who_liked.splice(position,1)
                   } 
                   axios.put(`${baseApiUrl}/books/${b._id}`,this.books[index])
                   .then((res) =>{
                       console.log(res)
                       this.getBooks()
                        return res 
                    }).catch(err =>{
                        return err
                    })
                  
                
               }
            })
        },
        setSize(){
            if(this.books.length == 1 || undefined){
                this.cols = [1,1,1,1,1]
            }else{
                if(this.$mq === 'xs'){
                    this.cols = [1,1,2,4,4]
                     this.numberBooks = 8
                }
                else if(this.$mq === 'Z0'){
                    this.cols = [1,1,3,4,4]
                     this.numberBooks = 8
                }
                else if(this.$mq === 's'){
                    this.cols = [1,3,3,4,4]
                     this.numberBooks = 8
                }
                else if(this.$mq === 'Z2'){
                    this.cols = [1,2,3,3,4]
                     this.numberBooks = 8
                }  
                else if(this.$mq === 'md'){
                    this.cols = [1,2,3,4,4]
                     this.numberBooks = 8
                } 
                else if(this.$mq === 'lg'){
                    this.cols = [1,2,3,3,4]
                     this.numberBooks = 8
                }
                else if(this.$mq === 'Z3'){
                    this.cols = [1,2,3,3,4]
                     this.numberBooks = 8
                } 
                else if(this.$mq === 'xl'){
                    this.cols = [1,2,3,4,5]
                    this.numberBooks = 10
                }
            }
        },
        verifyPages(){
            if(this.filter.length < 8){
                    this.numberBooks = this.filter.length
            }else{
                this.setSize()
            }
        }
    },
    computed:{
        ...mapState(['booksLiked','user']),
        filter(){
            if(this.filterName !== ''){                 
                return filters.findByName(this.books, this.filterName)

            } else if(this.filterSelected === '0'){
                return filters.bestAvaliation(this.books)

            } else if(this.filterSelected === '1'){
                return filters.orderByStock(this.books)

            } else if(this.filterSelected === '2'){
                return filters.orderByName(this.books)

            } else if(this.filterSelected === '3'){
                return filters.orderByMyLikes(this.booksLiked)

            } else if(this.filterSelected === '4'){
               this.getCategories()
               if(this.categorySelected !== null){
                    return filters.orderByCategory(this.books,this.categorySelected)
                    
               } else{
                   this.$forceUpdate()
                   return this.books
               }
            }
            else{
                this.$forceUpdate()
                return this.books
            }
            
        }          
          
      
    },
    mounted(){
        this.getBooks()
        this.setSize()
        console.log(this.user)
    },
    watch:{
         'filterName': function(){
           this.verifyPages()
        },
        'filterSelected': function(){
          
            this.verifyPages()
            if(this.filterSelected === "4"){
                this.showSelectCategory = true
            }else{
                this.showSelectCategory = false
            }   
        }
    }
}
</script>

<style >
.books-list{
    margin-top: 1%;
}

.paginate{
    display: flex;
    justify-content: center;
}

.login{
    display:flex;
    flex-direction: row-reverse;
}



/* Extra small devices (phones, 600px and down) */
@media only screen and (max-width: 600px) {
.filters{
    display:flex;
}

.filter-name{
    padding:2px;
}

.filter-name-category{
    padding:2px;
    width:40%!important;
}

.filter-select{
    margin-left: auto;
    padding: 2px;
}

.float{
	position:fixed;
	width:60px;
	height:60px;
	bottom:30px;
	right:400px;
	background-color:#3cdbdb;
	color:#FFF;
	border-radius:50px;
	text-align:center;
}


.filter-select-category{
    margin-right: auto;
    width:30%;
    padding: 2px;
}

 .filter-category{
        margin-left: auto;
        padding: 2px 5px 0px 2px;
        width:30%;
    }

    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:30px;
        left:85%;
        background-color:#3cdbdb;
        color:#FFF;
        border-radius:50px;
        text-align:center;
    }

    .my-float{
        margin-top:22px;
    }


}

/* Small devices (portrait tablets and large phones, 600px and up) */
@media only screen and (min-width: 600px) {
    .filters{
        display:flex;
        justify-content: space-between;
    }

    .filter-name{
        padding:2px;
    }

    .filter-select{
        margin-left: auto;
        padding: 2px;
    }
    .filter-category{
        padding: 2px;
    }

    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:30px;
        left: 88%;
        background-color:#3cdbdb;
        color:#FFF;
        border-radius:50px;
        text-align:center;
    }

    .my-float{
        margin-top:22px;
    }

}

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
    .filters{
        display:flex;
        justify-content: space-between;
    }

    .filter-name{
        padding:2px;
    }

    .filter-select{
        margin-left: auto;
        padding: 2px;
    }

    .filter-category{
        padding: 2px;
    }

    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:30px;
        left: 91%;
        background-color:#3cdbdb;
        color:#FFF;
        border-radius:50px;
        text-align:center;
    }

    .my-float{
        margin-top:22px;
    }
}

/* Large devices (laptops/desktops, 992px and up) */
@media only screen and (min-width: 992px) {
    .filters{
        display:flex;
        justify-content: space-between;
    }

    .filter-name{
        padding:2px;
    }

    .filter-select{
        margin-left: auto;
        padding: 2px;
    }

    .filter-category{
        padding: 2px;
    }

    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:30px;
        left: 92%;
        background-color:#3cdbdb;
        color:#FFF;
        border-radius:50px;
        text-align:center;
    }

    .my-float{
        margin-top:22px;
    }

}

/* Extra large devices (large laptops and desktops, 1200px and up) */
@media only screen and (min-width: 1200px) {
    .filters{
        display:flex;
        justify-content: space-between;
    }

    .filter-name{
        padding:2px;
        width:30%;
    }

    .filter-select{
        margin-left: auto;
        padding: 2px;
    }

    .filter-category{
        padding: 2px;
    }

    .float{
        position:fixed;
        width:60px;
        height:60px;
        bottom:30px;
        left: 94%;
        background-color:#3cdbdb;
        color:#FFF;
        border-radius:50px;
        text-align:center;
    }

    .my-float{
        margin-top:22px;
    }
}

.page-link-books {
    position: relative;
    display: block;
    padding: 0.5rem 0.5rem;
    margin-left: -1px;
    line-height: 1.25;
    background-color: transparent !important;
}

  .dark .float{
        background-color: #101520;
        color:#FFF;
    }






</style>