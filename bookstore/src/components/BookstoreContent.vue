<template>
    
    <div class="content">
         <router-view></router-view>    
    </div>
</template>
<script>

export default {
    props: ['mode'],
}
</script>
<style scoped>
    .content {
        margin-top: 30px;
    }
    .content .wrapper {
        display: flex;
        justify-content: space-between;
        width: 86%;
        margin: 0 auto;
    }
</style>