<template>
  <vs-pagination
    v-model="newPage"
    :color="newColor"
    :total="totalPage"
    @input="update"
  />
</template>

<script>
  export default {
    name: 'Pagging',
    props: {
      page: {
        type: Number,
        default: null
      },
      color: {
        type: String,
        default: null
      },
      totalPage: {
        type: Number,
        default: null
      },
      updateData: {
        type: Function,
        default: null
      }
    },
    data() {
      return {
        newPage: this.page,
        newColor: this.color
      }
    },
    methods: {
      update: function(page) {
        this.updateData(page);
      }
    }
  }
</script>


<style>
.vs-col.vs-pagination--mb{justify-content: center !important;}
.vs-pagination--nav, .vs-pagination--ul{align-items: flex-start !important;}
</style>

