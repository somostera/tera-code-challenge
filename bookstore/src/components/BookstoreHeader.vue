<template>
    <header>
        <div class="container">
            <h1>{{ title }}</h1>
            <div class="container-mode">
                <h2>{{mode}} mode</h2>
                <Toggle :mode="mode" @toggle="$emit('toggle')" />
            </div>
        </div>
    </header>
</template>
<script>

import Toggle from './BookstoreToggle'

export default {
    props: ['mode'],
    data() {
        return {
            title: 'Livraria do cowboy'
        }
    },
    components: {
        Toggle
    }
}
</script>
<style scoped>
    .dark header {
        background: #121420;
        box-shadow: 0px 2px 5px 0px #18112d;
    }
    header{
        height: 60px;
        background: #95d9da;
        box-shadow: 0px 2px 5px 0px #8888;
        transition: background 0.3s ease-in-out;
        display: flex;
        align-items: center;
    }
    header .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    header h1 {
        font-size: 16px;
        color:#fff;
        font-weight: 700;
    }
    header h2 {
        font-size: 16px;
        margin-right: 8px;
        text-transform: capitalize;
        font-weight: 700;
        color:#fff;
    }
    .container-mode {
        display: flex;
        align-items: center;
    }
    @media(min-width: 750px) {
         header h1 {
        font-size: 24px;
    }
    header h2 {
        font-size: 18px;
    }
    }
</style>