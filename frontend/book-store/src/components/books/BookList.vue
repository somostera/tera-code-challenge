<template>

    <b-container>
        <b-row style="width:100%">
                <b-col cols="12" class="d-flex justify-content-left total-books-counter">
                    Total: {{filtered.length}}
                </b-col>
                <b-col v-if="load" cols="12">
                    <img src="@/assets/imgs/book.gif" style="width:54%"/>
                </b-col>
                <b-col cols="12" v-if="(!load && filtered.length > 0)">

                    <paginate
                    class="row"
                    name="items"
                    :per="8"
                    :list="filtered"
                    >
                
                        <b-col v-for="(book, index) in paginated('items')" :key="index" xl="3" sm="12">

                            <article class="book-list-item">
                                <figure>
                                    <router-link :to="'book/' + bookDetailParameter(book)">
                                    <b-row class="justify-content-around align-items-center">
                                        <b-col cols="12" offset="2">
                                            <div class="book-list-item-cover--picture">
                                                <img :src="book.cover_picture" @error="imageLoadError" width="180px">
                                            </div>
                                        </b-col>
                                    </b-row>
                                    </router-link>
                                    <b-row class="justify-content-around align-items-center">
                                        <b-col cols="5">
                                            <figcaption>
                                                <h6>
                                                    <strong>
                                                    {{ book.name }}
                                                    </strong>
                                                </h6>
                                                <p>
                                                    {{ book.author }} <br />
                                                    {{ book.category }}
                                                </p>
                                            </figcaption>
                                        </b-col>
                                        <b-col cols="2">
                                            <LikeButton :book-name="book.name"></LikeButton>
                                        </b-col>
                                    </b-row>
                                </figure>
                            </article>
                        </b-col>
                    </paginate>
                    <paginate-links
                    v-if="(!load && filtered.length > 0)"
                    :limit="2"
                    :show-step-links="true"
                    :step-links="{
                        next: '>',
                        prev: '<'
                    }"
                    for="items"
                    :async="true">
                    </paginate-links>
                </b-col>
                <b-col v-if="(!load && filtered.length < 1)" cols="12">
                    <p>
                        Não encontramos nenhum resultado semelhante à:
                        <strong>{{ filteredField }}</strong>
                    </p>
                    <img src="@/assets/imgs/empty-book.gif" style="width:23%"/>
                </b-col>
        </b-row>
    </b-container>
</template>

<script>
import LikeButton from '@/components/buttons/LikeButton';
import tools from '@/tools/filters'

export default {
    components: {
        LikeButton,
    },
    data() {
        return {
            paginate: ['items'],
            selectFilterValues: {
                'orderByEvaluation': {
                    label: 'Melhores Avaliados',
                },
                'orderByStock': {
                    label: 'Em Estoque',
                },
                'orderByAZ': {
                    label: 'Ordem Alfabética',
                },
                'orderByMyLikedBook': {
                    label: 'Livros Curtidos',
                },
            }
        }
    },
    methods: {
        imageLoadError(e) {
            e.target.src = "https://www.genius100visions.com/wp-content/uploads/2017/09/placeholder-vertical.jpg";
        },
        bookDetailParameter(book) {
            return book.author.toLowerCase().replace(new RegExp(" ","gm"), '-')+ '/' +book.name.toLowerCase().replace(new RegExp(" ","gm"), '-')
        },

    },
    computed: {
        books() {
            return this.$store.state.books
        },
        filteredField() {
            switch (this.$store.state.filters.activatedFilter) {
                case 'name':
                    return this.$store.state.filters.searchField
                case 'category':
                    return this.$store.state.filters.searchCategoryField
                case 'select': 
                    return this.selectFilterValues[this.$store.state.filters.searchSelectField].label
                default:
                    return this.books
            }
        },
        filtered() {
            switch (this.$store.state.filters.activatedFilter) {
                case 'name':
                    return tools.searchFilter(this.books, this.$store.state.filters.searchField)
                case 'category':
                    return tools.searchFilterCategory(this.books, this.$store.state.filters.searchCategoryField)
                case 'select': 
                    switch (this.$store.state.filters.searchSelectField) {
                        case 'orderByEvaluation':
                            return tools.orderByEvaluation(this.books, this.$store.state.filters.searchSelectField)
                        case 'orderByStock':
                            return tools.orderByStock(this.books, this.$store.state.filters.searchSelectField)
                        case 'orderByAZ':
                            return tools.orderByAZ(this.books)
                        case 'orderByMyLikedBook':
                            return tools.orderByMyLikedBook(this.books, this.$store.state.myLikedBooks)
                    
                        default:
                            return this.books
                    }
                default:
                    return this.books
            }
        },
        
        load() {
            return this.$store.state.loadingBooks
        }
    },
    mounted() {
       this.$store.dispatch('getBooks');
       this.$store.dispatch('getLikes');
    }
}
</script>