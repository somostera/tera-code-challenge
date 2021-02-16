<template>
    <div>
        <div class="back"><a href="/" >  Voltar</a></div>
        <b-card no-body class="overflow-hidden" >
            <b-row no-gutters>
                <b-col md="6">
                    <b-card-img :src="book.cover_picture" alt="Image" class="rounded-0"></b-card-img>
                </b-col>
                <b-col md="6">
                    <b-card-body :title="book.name">
                    <b-card-text>
                       {{book.description}}
                    </b-card-text>
                    </b-card-body>
                </b-col>
            </b-row>
        </b-card>
        </div>
</template>

<script>
export default {
    name:"bookDetails",
    data(){
        return{
            book: {}
        }
    },
    methods:{

    },
    mounted(){
        this.book = this.$route.params.book
    }
}
</script>

<style>
.dark .card-body .card{
    background: black;
}

.dark .card{
    background: black;
}
</style>