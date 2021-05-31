<template>

    <b-container>
        <b-row>
            <b-col v-for="(book, index) in books" :key="index" cols="3">
                 <article>
                    <figure>
                        <img :src="book.cover_picture" @error="imageLoadError" width="230px">
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
                    </figure>
                </article>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            books: []
        }
    },
    methods: {
        imageLoadError(e) {
            e.target.src = "https://bulma.io/images/placeholders/480x640.png";
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

<style>

</style>