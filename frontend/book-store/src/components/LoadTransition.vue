<template>
    <b-container>
        <b-row>
            <b-col v-if="paginated.length < 1" cols="12">
                    <img src="@/assets/imgs/book.gif" style="width:54%"/>
                </b-col>
        </b-row>
    </b-container>
</template>