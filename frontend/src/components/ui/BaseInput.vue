<template>
    <div class="form-input">
        <input
            class="input"
            type="text"
            :value="value"
            :placeholder="placeholder"
            @input="handleInput"
        />
    </div>
</template>

<script>
export default {
    name: 'BaseInput',
    props: {
        value: {
            type: String,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Buscar por...',
        },
    },
    methods: {
        handleInput(event) {
            this.$emit('input', event.target.value)
        },
    },
}
</script>
