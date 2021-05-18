<template>

    <div class="Buildamic-fieldtype-container">

        <div v-for="section, sectionKey in value" :key="sectionKey">
            <div v-if="section.type == 'section'">
                <div v-for="row, rowKey in section.rows" :key="rowKey">
                    <div v-for="column, columnKey in row.columns" :key="columnKey">
                        <component 
                            v-for="(field, fieldKey) in column.fields"
                            :index="fieldKey"
                            :key="fieldKey"
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
                </div>
            </div>
            <div v-else-if="section.type == 'global'">Global Section</div>
        </div>

        <!-- <text-input :value="value" @input="update" /> -->

        <!-- <component 
                v-for="(field, i) in fields"
                :index="i"
                :key="field.handle"
                :is="`${field.component || field.type}-fieldtype`"
                :config="field"
                :value="value[field.handle]"
                :meta="meta.existing[field.handle]"
                :handle="field.handle"
                :name-prefix="field.prefix"
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
        // value: {
        //     type: Object,
        //     required: true
        // },
    },

    data() {
        return {
            fields: this.config.fields
        };
    },

    computed: {
    },

    methods: {  

    }

};
</script>
