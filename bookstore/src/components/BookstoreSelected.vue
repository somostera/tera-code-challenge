<template>
<div class="select-container">
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
        box-shadow: 0px 2px 5px 0px #18112d;
        border:1px solid  #18112d;;
    }
    select {
        background: #fff;
        border-radius: 5px;
        padding: 7px;
        outline: none;
        border: 1px solid #bbb;
        box-shadow: 0px 2px 3px 0px #ccc;
        color: gray;
        width: 100%;
        font-size: 14px;
        cursor:pointer;
    }
    .select-container {
        width: 49%;
    }

    @media(min-width: 750px) {
        .select-container {
            align-items: flex-end;
            display: flex;
            
        }
        select {
        background: #fff;
        border-radius: 5px;
        padding: 7px;
        outline: none;
        border: 1px solid #bbb;
        box-shadow: 0px 2px 3px 0px #ccc;
        color: gray;
        width: 100%;
        font-size: 16px;        
    }
    }
</style>