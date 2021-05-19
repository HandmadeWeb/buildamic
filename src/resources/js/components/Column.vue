<template>
    <div class="buildamic-column-container">
        <div v-for="(field, fieldKey) in column.fields" :index="fieldKey" :key="fieldKey"> 
            {{ field.type }}
            <div v-if="field.type == 'field'">
                <fieldElement :field="field" />
            </div>
            
            <div v-else-if="field.type == 'set'">
                <fieldGroupElement :field="field" />
            </div>
        </div>
    </div>
</template>

<script>
import FieldElement from './Field.vue';
import FieldGroupElement from './FieldGroup.vue';

export default {

    components: { 
        FieldElement,
        FieldGroupElement,
    },
    
    data() {
        return {
        };
    },

    props: {
        column: {
            type: Object,
            required: true
        },
    }

};
</script>
