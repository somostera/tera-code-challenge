<template>
<div class="container">
   <h2 @click="backToPage()" class="button-go-back"><font-awesome-icon :icon="['far', 'arrow-alt-circle-left']" class="icon"/>Voltar</h2>
    <div class="container-book">
         <h2 class="title">{{book.name}}</h2>
         <div class="container-img">
              <img class="img" :src="book.cover_picture" />
         </div>
        <div class="container-infos">
            <div class="container-info">
                <h2 class="info">{{book.author}}</h2>
                <h2 class="info">{{book.category}}</h2>
            </div>
            <h2 class="info">Em estoque: {{book.stock}}</h2>
        </div>
        
        <h2 class="description">{{book.description}}</h2>
    </div>
</div>
</template>
<script>
export default {
    computed: {
        book () {
            return this.$store.getters.getBooksFromIndex(this.$route.params.idbook);
        }
    },
    methods: {
        backToPage() {
            this.$router.go(-1);
        }
    }
}
</script>
<style scoped>
.container {
        width: 95%;
        margin:0 auto;
    }
    .button-go-back {
        font-size: 16px;
        cursor: pointer;
    }
    .container-book {
        width: 100%;
        margin: 0 auto;
        margin-top: 20px;
    }
    .title{
        font-size: 18px;
        font-weight: 700;
        text-align: center;
    }
    .info {
        font-size: 14px;
        margin:2px;
        font-weight: 500;
    }
    .description{
        font-size: 14px;
        margin-top: 20px;
        line-height: 25px;
    }
    .container-img{
        text-align: center;
    }
    .img {
        width: 200px;
        height: 300px;
        margin: 0 auto;
    }
    .container-infos {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
    }
@media(min-width: 750px){
     .container-infos {
         display: block;
     }
    .container {
        width: 95%;
        margin:0 auto;
    }
    .button-go-back {
        font-size: 24px;
        cursor: pointer;
    }
    .container-book {
        width: 70%;
        margin: 0 auto;
        margin-top: 60px;
    }
    .title{
        font-size: 24px;
        font-weight: 700;
        text-align: left;
    }
    .info {
        font-size: 16px;
        margin:2px;
    }
    .description{
        font-size: 16px;
        margin-top: 20px;
        line-height: 25px;
    }
    .img {
        width: 200px;
        height: 300px;
        float: right;
    }
    }

</style>