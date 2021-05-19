<template>
    <div class="buildamic-section-container">
        <div v-for="row, rowKey in section.rows" :key="rowKey">
            <rowElement :row="row" />
        </div>
    </div>
</template>

<script>
import RowElement from './Row.vue';

export default {

    components: { 
        RowElement 
    },

    data() {
        return {
        };
    },

    props: {
        section: {
            type: Object,
            required: true
        },
    }

};
</script>
