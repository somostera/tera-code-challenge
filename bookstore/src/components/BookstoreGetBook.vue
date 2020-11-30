<template>
<div>
   <h2 @click="backToPage()">Voltar</h2>

   <h2>{{book.name}}</h2>
    <h2>{{book.author}}</h2>
    <h2>{{book.category}}</h2>
    <h2>Em estoque: {{book.stock}}</h2>
   <img :src="book.cover_picture" />
   <h2>{{book.description}}</h2>

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

</style>