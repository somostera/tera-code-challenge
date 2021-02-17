<template>
  <footer class="footer">
    <p>By <a href="https://teoian.com">Teoian</a> with Vue.js and Node.js</p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {}
  }
}
</script>

<style>
.footer {
  /* Footer */
  position: static;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  height: 43px;
  bottom: 0;
  background: #c4c4c4;
}
</style>
