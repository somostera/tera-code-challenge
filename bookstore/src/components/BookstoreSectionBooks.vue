<template>
    <div class="container">
        <ListBooks :selecao="selecao" @selection="changeSelection"/>
    </div>
</template>
<script>

import ListBooks from './BookstoreListBooks'

export default {
    data() {
        return {
            selecao: 'SELECIONADO'
        }
    },
    components: {
        ListBooks
    },
    methods: {
        changeSelection(value) {
            this.selecao = value;
        }
    }
}
</script>
<style scoped>
.container {
    
}
</style>