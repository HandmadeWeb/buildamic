<template>
    <div class="buildamic-field-container">
        <component 
            :is="`${field.config.field.component || field.config.field.type}-fieldtype`"
            :config="field.config.field"
            :value="field.value"
            :meta="field.meta"
            :handle="field.config.handle"
            :name-prefix="field.config.prefix"
            :error-key-prefix="errorKey"
            :read-only="isReadOnly"
            @input="$emit('updated', $event)"
            @meta-updated="$emit('meta-updated', $event)"
            @focus="$emit('focus')"
            @blur="$emit('blur')"
        />
    </div>
</template>

<script>

export default {
    
    data() {
        return {
        };
    },

    props: {
        field: {
            type: Object,
            required: true
        },
    }

};
</script>
