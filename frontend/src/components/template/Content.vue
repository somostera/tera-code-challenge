<template>
    <div class="content" :class="isDark">
      
        <router-view></router-view>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
    name: 'Content',
    computed: mapState(['isDark'])
}
</script>

<style>
    .content{
        grid-area: content;
        transition: background 0.3s ease-in-out;
        background: #cdeff1;
        padding-top:1%;
        padding-left:2%;
        padding-right: 2%;
        justify-content: center        
    }

     .dark .content{
        grid-area: content;
        background: #192734;
        padding-top:1%;
        padding-left:2%;
        padding-right: 2%;
        justify-content: center        
    }
</style>