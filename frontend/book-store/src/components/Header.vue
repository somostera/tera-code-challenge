<template>
    <div id="header">

        <b-container>
                <b-col cols="10">
                    <h1>Livraria do cowboy</h1>
                </b-col>
                <b-col cols="2">
                <DarkModeButton />

                </b-col>
        </b-container>
    </div>
</template>

<script>
import DarkModeButton from '@/components/buttons/DarkMode.vue';

export default {
    components: {
        DarkModeButton,
    }
}
</script>

<style scoped>
    

</style>