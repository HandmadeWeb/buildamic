<template>
    <div class="buildamic-fieldGroup-container">
        

        <div v-for="(setField, setFieldKey) in sets[field.value.type].fields" :index="setFieldKey" :key="setFieldKey" :field="setField">
            <component 
                :is="`${setField.component || setField.type}-fieldtype`"
                :config="setField"
                :value="field.value[setField.handle]"
                :meta="setField"
                :handle="setField.handle"
                :name-prefix="setField.prefix"
                :error-key-prefix="errorKey"
                :read-only="isReadOnly"
                @input="$emit('updated', $event)"
                @meta-updated="$emit('meta-updated', $event)"
                @focus="$emit('focus')"
                @blur="$emit('blur')"
            />
        </div>
    </div>
</template>

<script>
import FieldElement from './Field.vue';

export default {

    components: { 
        FieldElement,
    },
    
    inject: ['fields', 'sets'],

    props: {
        field: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
        };
    },

};
</script>