<template>
    <div class="form-selected" :tabindex="tabindex" @blur="open = false">
        <div class="selected" :class="{ open: open }" @click="open = !open">
            <span>{{ selected.name }}</span>
            <div class="selected-icon">
                <i class="bi bi-chevron-down"></i>
            </div>
        </div>
        <div class="items" :class="{ selectHide: !open }">
            <div
                class="items-select"
                v-for="(option, i) of options"
                :key="i"
                @click="
                    selected = option
                    open = false
                    $emit('input', option.value)
                "
            >
                {{ option.name }}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BaseSelect',
    props: {
        default: {
            type: Object,
            required: false,
            default: null,
        },
        options: {
            type: Array,
            required: true,
        },
        placeholder: {
            type: String,
            required: false,
            default: 'Selecione',
        },
        tabindex: {
            type: Number,
            required: false,
            default: 0,
        },
    },
    data() {
        return {
            selected: this.default ? this.default : { name: this.placeholder },
            open: false,
        }
    },
}
</script>
