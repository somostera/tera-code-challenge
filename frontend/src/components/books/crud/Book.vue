<template>
<div class="book">
 <div class="back"><a href="/" >  Voltar</a></div>
  <div class="book-form">
     

    <div class="form-modal">
        <b-form @submit="onSubmit">
            <label for="book-name">Nome</label>
            <b-input type="text" id="book-name" v-model="book.name" @change="onNameChange"/>
            <div class="validation-text">
            <span :hidden="this.errors.name === undefined">*Campo Nome é obrigatório</span>
            </div>

            <label for="book-autor">Autor</label>
            <b-input type="text" id="book-autor" v-model="book.author"/>
            <div class="validation-text">
             <span :hidden="this.errors.author === undefined">*Campo Autor é obrigatório</span>
            </div>

            <label for="book-categoria">Categoria</label>
            <b-input type="text" id="book-categoria" v-model="book.category"/>
            <div class="validation-text">
             <span :hidden="this.errors.category === undefined">*Campo Categoria é obrigatório</span>
            </div>

            <label for="book-quantidade">Quantidade em estoque</label>
            <b-input type="text" id="book-quantidade" v-model="book.stock"/>

            <label for="book-url">Url da capa</label>
            <b-input type="text" id="book-url" v-model="book.cover_picture"/>
            <div class="validation-text">
             <span :hidden="this.errors.cover_picture === undefined" >*Campo Url da capa é obrigatório</span>
            </div>

            <label for="book-description">Descrição</label>
            <b-textarea  id="book-description" v-model="book.description"/>
            <div class="validation-text">
             <span :hidden="this.errors.description === undefined">*Campo Descrição é obrigatório</span>
            </div>  
           
        </b-form>

        <div class="button-add">
            <b-button type="button" class="mt-4 ml-2"  @click="onSubmit" :hidden="bookExists">Adicionar</b-button>
        </div>

         <div class="buttons-container" :hidden="!bookExists">
                <b-button type="button" class="mt-4"  @click="onUpdate" align="right">Atualizar</b-button>
                <b-button type="button" class="mt-4 ml-2"  @click="onDelete">Excluir</b-button>
         </div>

    </div>
    
  </div>
  </div>
</template>

<script>
import axios from 'axios'
import {baseApiUrl,showError} from '../../../../global'
export default {
    name:"book",
    data(){
        return{
            book:{
                name: '',
                author: '',
                description: '',
                category: '',
                cover_picture: ''
            },
            bookExists: false,
            errors: {},
            confirmDelete : ''
        }
    },
    methods:{
         checkForm(e) {
            if (this.book.name && this.book.author && this.book.description
            && this.book.category && this.book.cover_picture) {
              return true;
            }

            this.errors = {};

            if (this.book.name === '') {
              this.errors.name = "Preencha o nome"
            }
            if (this.book.author  === '') {
              this.errors.author = "Preencha o autor"
            }
            if (this.book.description  === '') {
              this.errors.description = 'Preencha o autor';
            }

            if (this.book.cover_picture  === '') {
              this.errors.cover_picture = 'Preencha com a imagem'
            }

            if (this.book.stock  === '') {
              this.book.stock = 0
            }

            e.preventDefault();
        },
        onSubmit(e){
            if(this.checkForm(e)){
                console.log(this.book)
                 axios.post(`${baseApiUrl}/books`, this.book)
                .then(()=>{
                   this.$toasted.global.defaultSuccess()
                   this.book = {}
                })
                .catch(showError)

            }
           
        },
        onNameChange(){
           axios.get(`${baseApiUrl}/books/${this.book.name}`)
            .then((res) =>{
                if(res.data !== null){
                    this.book = res.data
                    this.errors = {}
                    this.bookExists = true
                }
            })
            .catch(err =>{
                return err
            })
        },
        onDelete(){
            this.$bvModal.msgBoxConfirm(`Deletar o livro ${this.book.name}?`)
            .then(() => {
                 axios.delete(`${baseApiUrl}/books/${this.book._id}`)
                .then(()=>{
                    this.book = {}
                    this.$toasted.global.defaultSuccess();
                })
                .catch(showError)
            })
            .catch(err => {
               return err
            })
           
        },
        onUpdate(){
            axios.put(`${baseApiUrl}/books/${this.book._id}`,this.book)
            .then(()=>{
                this.$toasted.global.defaultSuccess();
                this.book = {}
            })
            .catch(showError)
        }
        
    },
    watch:{
        'book.name':function(){
            this.bookExists = false
            this.onNameChange()
        }
    }
}
</script>

<style>
    
    .book{
        margin-top: 2%;
    }
    
    .book-form{
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
    }

    .form-modal {
        flex: 1; 
        width:50%
    }

    .button-add{
        display:flex;
        flex-direction: row-reverse;
        margin-left: auto;
    }

    .buttons-container{
        display:flex;
        justify-content: space-between;
    }

    .validation-text span{
        font-size: 15px;
        color: red;
    }

</style>