<template>
    <div class="buildamic-fieldGroup-container">
        <!-- <fieldElement v-for="(setField, setFieldKey) in sets[field.value.type].fields" :index="setFieldKey" :key="setFieldKey" :field="setField" /> -->
        <!-- <component 
            v-for="(setField, setFieldKey) in sets[field.value.type].fields" :index="setFieldKey" :key="setFieldKey"
            :is="`${setField.component || setField.type}-fieldtype`"
            :config="setField"
            :value="setField"
            :meta="setField"
            :handle="setField.handle"
            :name-prefix="setField.prefix"
            :error-key-prefix="errorKey"
            :read-only="isReadOnly"
            @input="$emit('updated', $event)"
            @meta-updated="$emit('meta-updated', $event)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        /> -->
    </div>
</template>

<script>
import FieldElement from './Field.vue';

export default {

    components: { 
        FieldElement,
    },
    
    data() {
        return {

        };
    },

    inject: ['fields', 'sets'],

    created() {
        console.log(this.fields);    
        console.log(this.sets);    
    },

    props: {
        field: {
            type: Object,
            required: true
        },
    }

};
</script>