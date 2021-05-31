<template>

    <b-container class="padding-section">
        <b-row class="justify-content-between">
            <b-col cols="5">
                <SearchFilter />
            </b-col>
            <b-col cols="5">
                <SelectFilter />
            </b-col>
        </b-row>
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