<template>
    <header class="header">
        <div class="container">
            <div class="row align-items-center">
                <div class="col">
                    <div
                        class="d-flex align-items-center justify-content-between"
                    >
                        <h1>{{ title }}</h1>
                        <div class="header-change-theme" @click="changeTheme">
                            <h4 v-if="isDark">Light mode</h4>
                            <h4 v-else>Dark mode</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'
import { SET_THEME_DARK, SET_THEME_LIGHT } from '@/store/mutation-types'

export default {
    name: 'TheHeader',
    props: {
        title: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            root: document.getElementsByTagName('html')[0],
        }
    },
    computed: {
        ...mapGetters(['isDark']),
    },
    created() {
        if (this.isDark) {
            this.root.setAttribute('data-theme', 'darkMode')
        } else {
            this.root.removeAttribute('data-theme')
        }
    },
    methods: {
        changeTheme() {
            if (!this.isDark) {
                this.$store.commit(SET_THEME_DARK)
                this.root.setAttribute('data-theme', 'darkMode')
            } else {
                this.$store.commit(SET_THEME_LIGHT)
                this.root.removeAttribute('data-theme')
            }
        },
    },
}
</script>
