<template>
  <div class="book-detail-container">
    <div class="book-detail">
      <h2>{{name}}</h2>
      <div>
        <p>{{author}}</p>
        <p>{{category}}</p>
        <p>Em estoque: {{stock}} unidades</p>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
      <img :src="coverPicture" :alt="name">
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Details',

  props: {
    author: {
      type: String,
      default: ''
    },
    category: {
      type: String,
      default: ''
    },
    coverPicture: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    stock: {
      type: Number,
      default: 0
    }

  },
}
</script>

<style scoped>
  @import '../style/styleMode.css';


</style>
