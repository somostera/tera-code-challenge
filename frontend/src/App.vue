<template>
    <div id="app">
        <the-header :title="store.name" />
        <transition name="fade">
            <router-view />
        </transition>
        <the-footer />
        <base-loader />
    </div>
</template>

<script>
import TheHeader from '@/components/layout/TheHeader.vue'
import TheFooter from '@/components/layout/TheFooter.vue'
import BaseLoader from '@/components/ui/BaseLoader.vue'
import { mapState } from 'vuex'

export default {
    name: 'App',
    components: {
        TheHeader,
        TheFooter,
        BaseLoader,
    },
    data() {
        return {}
    },
    computed: {
        ...mapState(['store', 'isDark']),
    },
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';
</style>
