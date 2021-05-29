<template>
    <transition name="fade">
        <div class="loader" v-show="isLoading"></div>
    </transition>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    name: 'TheLoader',
    computed: {
        ...mapGetters(['isLoading']),
    },
}
</script>
