<template>
    <div id="header">

        <b-container fluid>
            <b-row class="align-items-center">
                <b-col>
                    <h1>Livraria do cowboy</h1>
                </b-col>
                <b-col>
                <DarkModeButton />

                </b-col>
            </b-row>
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