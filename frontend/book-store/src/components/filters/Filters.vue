<template>

    <b-container class="padding-section">
        <b-col cols="4" class="d-flex justify-content-start">
            <SearchFilter />
        </b-col>
        <b-col cols="6" class="d-flex justify-content-end">
            <SelectFilter />
        </b-col>
    </b-container>

</template>

<script>
import SearchFilter from '@/components/filters/SearchFilter';
import SelectFilter from '@/components/filters/SelectFilter';

export default {
    components: {
        SearchFilter,
        SelectFilter,
    }
}
</script>

<style>
    .container  {
        display: flex;
        justify-content: space-between;
    }
</style>