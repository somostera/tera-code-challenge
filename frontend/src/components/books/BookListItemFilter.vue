<template>
    <div
        class="book-list-filter"
        :class="{ categoryOpened: this.selected == 'category' }"
    >
        <div class="row justify-content-between">
            <div class="col">
                <base-input
                    class="search"
                    v-model="search"
                    placeholder="Procure por um livro"
                />
            </div>
            <div class="col-auto">
                <div class="d-flex align-items-center">
                    <base-input
                        class="category-input"
                        v-if="selected == 'category'"
                        v-model="category"
                        placeholder="Nome da Categoria"
                    />
                    <base-select
                        :options="filters"
                        v-model="selected"
                        placeholder="Filtros"
                    />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BaseInput from '@/components/ui/BaseInput.vue'
import BaseSelect from '@/components/ui/BaseSelect.vue'

export default {
    name: 'BookListItemFilter',
    components: {
        BaseInput,
        BaseSelect,
    },
    data() {
        return {
            search: '',
            category: '',
            selected: null,
            filters: [
                {
                    name: 'Melhores Avaliados',
                    value: 'rated',
                },
                {
                    name: 'Em estoque',
                    value: 'stock',
                },
                {
                    name: 'Ordem Alfabética',
                    value: 'alphabetic',
                },
                {
                    name: 'Livros Curtidos',
                    value: 'likes',
                },
                {
                    name: 'Por Categoria',
                    value: 'category',
                },
            ],
        }
    },
    watch: {
        search(value) {
            this.$emit('on-filter-search', value)
        },
        selected(value) {
            if (value != 'category') {
                this.$emit('on-filter-select', value)
            }
        },
        category() {
            this.$emit('on-filter-category', this.category)
        },
    },
}
</script>
