<template>

    <div class="buildamic-fieldtype-container">
        
        <div v-for="section, sectionKey in values" :key="sectionKey" :class="sortableItemClass">
            <div v-if="section.type == 'section'">
                <div v-for="row, rowKey in section.rows" :key="rowKey">
                    <div v-for="column, columnKey in row.columns" :key="columnKey">
                        <div v-for="(field, fieldKey) in column.fields" :index="fieldKey" :key="fieldKey">
                            
                            <div v-if="field.type == 'field'">
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
                            
                            <div v-else-if="field.type == 'set'">
                                <!-- <component 
                                    v-for="(setField, setFieldKey) in this.sets[field.value.type].fields" :index="setFieldKey" :key="setFieldKey"
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
                        </div>
                    </div>
                </div>
            </div>
            <div v-else-if="section.type == 'global'">Global Section</div>
        </div>

        <!-- <text-input :value="value" @input="update" /> -->
    </div>
</template>

<script>

export default {

    mixins: [
        Fieldtype,
    ],

    props: {
        handle: {
            type: String,
            required: true
        },
        // meta: {
        //     type: Object,
        //     required: true
        // },
        value: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            fields: {},
            sets: {},
            values: this.value,
        };
    },

    mounted() {
        this.config.fields.forEach(field => {
            this.fields[field.handle] = field;
        });

        this.config.sets.forEach(set => {
            this.sets[set.handle] = set;
        });        
    },
    
    computed: {
    },

    methods: {  
    }

};
</script>
