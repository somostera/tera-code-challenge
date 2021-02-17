<template>
    <div>
        <div class="back"><a href="/" > &lt; Voltar</a></div>
        <b-card no-body class="overflow-hidden mt-4" >
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

.back{
    text-decoration:none;
    color:black;
}

a {
    color: black;
        text-decoration: none;
        background-color: transparent;
}

.dark a{
    color:white;
}
</style>