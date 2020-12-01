<template>
<div>
    <select @change="$emit('selectionado', $event.target.value)">
        <option value="">Selecione uma classificação</option>
        <option value="melhores avaliados">Melhores Avaliados</option>
        <option value="aquele">Aquele</option>
    </select>
    </div>
</template>
<script>
export default {
    props: ['mode','selecionado'],
    data(){
        return{
        }
    }
}
</script>
<style scoped>
    .dark select {
        background: #31303a;
        color:#fff;
    }
</style>