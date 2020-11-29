<template>
    <div class="content">
        <div class="wrapper">
            <InputSearch :mode="mode"/>
            <Selected :mode="mode"/>
        </div>
        <SectionBooks />
        
    </div>
</template>
<script>
import InputSearch from './BookstoreInput'
import Selected from './BookstoreSelected'
import SectionBooks from './BookstoreSectionBooks'

export default {
    props: ['mode'],
    components: {
        InputSearch,
        Selected,
        SectionBooks
    }
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