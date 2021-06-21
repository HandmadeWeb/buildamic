<template>
    <div class="altamic-section-container">
        <!-- <text-input :value="value" @input="update" /> -->
    </div>
</template>

<script>
import AltamicRow from './AltamicRow.vue';

// Learn more at https://statamic.dev/extending/fieldtypes/
export default {

    mixins: [Fieldtype],

    components: {
        AltamicRow
    },
    
    data() {
        return {}
    }
};
</script>
