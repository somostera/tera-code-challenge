<template>
  <div id="book">
    <router-link :to=dataBook.name>
    <b-card
        :title=dataBook.name
        :img-src=dataBook.cover_picture
        img-alt="Image"
        img-top
        style="max-width: 20rem;"
        class="mb-2 mt-5"
    >
      <b-card-text>
        <b-row>
          <b-col cols="8">
            <p class="m-0">
              <small>{{dataBook.author}}</small>
            </p>
            <p class="m-0">
              <small>{{dataBook.category}}</small>
            </p>
          </b-col>
          <b-col cols="4" class="pt-1">
            <b-icon variant="danger" icon="heart-fill" v-if=dataBook.users_who_liked.length > 0></b-icon>
            <b-icon variant="danger" icon="heart" v-if=!dataBook.users_who_liked.length></b-icon>
          </b-col>
        </b-row>
      </b-card-text>
    </b-card>
    </router-link>
  </div>
</template>
<script>
export default {
  props: {dataBook: []},
}
</script>

<style>
#book > a{color:black}
</style>

<!--"Cuando esté muy triste o muy felíz en los 2 escenarios guarde-->
<!--silencio."-->
<!--porque si llora demasiado puede afectar al que esta muy alegre-->
<!--y si se alegra demsiado va afectar al que esta triste. Entonces sea sobrio a-->
<!--las reacciones porque todo pasa.-->