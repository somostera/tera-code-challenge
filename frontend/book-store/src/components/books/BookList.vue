<template>

    <b-container>
        <b-row>
            <b-col v-for="(book, index) in paginated" :key="index" xl="3" cols="12" sm="12">
                 <article class="book-list-item">
                    <figure>
                        <b-row class="justify-content-around align-items-center">
                            <b-col cols="12">
                                <div class="book-list-item-cover--picture">
                                    <img :src="book.cover_picture" @error="imageLoadError" width="180px">
                                </div>
                            </b-col>
                        </b-row>
                        <b-row class="justify-content-between align-items-center">
                            <b-col cols="8">
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
                            <b-col cols="4">
                                <LikeButton :index-book="index"></LikeButton>
                            </b-col>
                        </b-row>
                    </figure>
                </article>
            </b-col>
            <b-col cols="12">
                <paginate
                    v-model="page"
                    :page-count="(books.lenth / pageSize)"
                    :page-range="3"
                    :margin-pages="2"
                    :click-handler="paginating"
                    :prev-text="'<'"
                    :next-text="'>'"
                    :container-class="'pagination'"
                    :page-class="'page-item'">
                </paginate>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';
import LikeButton from '@/components/buttons/LikeButton';

export default {
    components: {
        LikeButton,
    },
    data() {
        return {
            books: [],
            page: 1,
            pageSize: 8,
        }
    },
    methods: {
        imageLoadError(e) {
            e.target.src = "https://bulma.io/images/placeholders/480x640.png";
        },
        paginating(pageNum) {
            console.log(pageNum)
        }
    },
    computed: {
        indexStart() {
            return (this.page - 1) * this.pageSize;
        },
        indexEnd() {
            return this.indexStart + this.pageSize;
        },
        paginated() {
            return this.books.slice(this.indexStart, this.indexEnd);
        }
    },

    mounted() {
        axios.get('https://us-central1-tera-platform.cloudfunctions.net/url-tera-code-challenge')
        .then(response => (
            this.books = response.data
        ))
    }
}
</script>