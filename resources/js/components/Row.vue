<template>
    <div class="buildamic-row-container">
        <div v-for="column, columnKey in row.columns" :key="columnKey">
            <columnElement :column="column" />
        </div>
    </div>
</template>

<script>
import ColumnElement from './Column.vue';

export default {

    components: { 
        ColumnElement 
    },
    
    data() {
        return {
        };
    },

    props: {
        row: {
            type: Object,
            required: true
        },
    }

};
</script>
