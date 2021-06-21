<template>
    <div class="altamic-fieldtype-container">
        <!-- <text-input :value="value" @input="update" /> -->
        <div v-for="section in value.sections" :key="section.uuid">
            <div class="altamic-section-container">
                Section: {{ section.uuid }} <button @click="removeSection(section.uuid)">Remove Section</button>
                <div v-for="row in rows.where('parent', section.uuid)" :key="row.uuid">
                    Row: {{ row.uuid }} <button @click="removeRow(row.uuid)">Remove Row</button>
                    <div v-for="column in columns.where('parent', row.uuid)" :key="column.uuid">
                        Column: {{ column.uuid }} <button @click="removeColumn(column.uuid)">Remove Column</button>
                        <div v-for="(field, key) in fields.where('parent', column.uuid)" :key="field.uuid">
                            Field: {{ field.uuid }} <button @click="removeField(field.uuid)">Remove Field</button>
                            <div v-if="fieldDefaults[field.handle]" :class="fieldtypeComponent(field)">
                                <component
                                    :is="fieldtypeComponent(field)"
                                    :config="{...fieldDefaults[field.handle].config, ...field.config.field}"
                                    :value="field.value"
                                    :meta="fieldDefaults[field.handle].meta"
                                    :handle="field.handle"
                                    @input="updateField(key, field, $event)"
                                    @meta-updated="$emit('meta-updated', $event)"
                                    @focus="$emit('focus')"
                                    @blur="$emit('blur')"
                                />
                            </div>
                        </div>
                        <div v-for="fieldType in fieldDefaults" :key="fieldType.config.handle">
                            <button v-if="
                                allowedFields.has(fieldType.config.type) && allowedFields.get(fieldType.config.type) || 
                                blockedFields.has(fieldType.config.type) && ! blockedFields.get(fieldType.config.type)"
                            @click="addField(fieldType, column.uuid)">Add {{ fieldType.config.display }}</button>
                        </div>
                    </div>
                    <button @click="addColumn(row.uuid)">Add Column</button>
                </div>
                <button @click="addRow(section.uuid)">Add Row</button>
            </div>
        </div>
        <button @click="addSection">Add Section</button>
        <!-- <button v-if="sections.isEmpty()" @click="addSection">Add Section</button> -->
    </div>
</template>

<script>
import { v4 as uuidv4 } from "uuid";
import collect from 'collect.js';

// https://statamic.dev/extending/fieldtypes/
export default {

    mixins: [Fieldtype],

    data() {
        return {
            'fieldDefaults': this.meta.fields,
            'allowedFields': collect(this.meta.allowed_fields),
            'blockedFields': collect(this.meta.blocked_fields),
            'sections': collect(this.value.sections),
            'rows': collect(this.value.rows),
            'columns': collect(this.value.columns),
            'fields': collect(this.value.fields),
        }
    },

    methods: {
        collect,

        generateUUID(uuid = null) {
            if(! uuid || typeof uuid !== 'string' || uuid.length === 0){
                return this.generateUUID(uuidv4());
            }

            if(this.sections.where('uuid', uuid).isNotEmpty() ||
                this.rows.where('uuid', uuid).isNotEmpty() ||
                this.columns.where('uuid', uuid).isNotEmpty() ||
                this.fields.where('uuid', uuid).isNotEmpty()
            ){
                return this.generateUUID(uuidv4())
            }

            return uuid;
        },

        fieldtypeComponent(field) {
            return `${field.component}-fieldtype`;
        },

        addSection() {
            this.sections.push({
                'uuid': this.generateUUID(),
                'config': {}
            });

            this.value.sections = this.sections.toArray();

            this.update(this.value);
        },

        removeSection(uuid) {

            this.rows.where('parent', uuid).each(row => this.removeRow(row.uuid));

            this.sections = this.sections.filter(function(item) {
                return item.uuid !== uuid;
            });

            this.value.sections = this.sections.toArray();

            this.update(this.value);
        },

        addRow(parent) {
            this.rows.push({
                'uuid': this.generateUUID(),
                'parent': parent,
                'config': {}
            });

            this.value.rows = this.rows.toArray();

            this.update(this.value);
        },

        removeRow(uuid) {

            this.columns.where('parent', uuid).each(column => this.removeColumn(column.uuid));

            this.rows = this.rows.filter(function(item) {
                return item.uuid !== uuid;
            });

            this.value.rows = this.rows.toArray();

            this.update(this.value);
        },

        addColumn(parent) {
            this.columns.push({
                'uuid': this.generateUUID(),
                'parent': parent,
                'config': {}
            });

            this.value.columns = this.columns.toArray();

            this.update(this.value);
        },

        removeColumn(uuid) {

            this.fields.where('parent', uuid).each(field => this.removeField(field.uuid));

            this.columns = this.columns.filter(function(item) {
                return item.uuid !== uuid;
            });

            this.value.columns = this.columns.toArray();

            this.update(this.value);
        },

        addField(field, parent) {

            this.fields.push({
                'uuid': this.generateUUID(),
                'parent': parent,
                'type': 'field',
                'handle': field.handle,
                'component': field.config.type,
                'config': {
                    'enabled': true,
                    'field': field.config,
                },
                'value': field.value
            });

            this.value.fields = this.fields.toArray();

            this.update(this.value);
        },

        removeField(uuid) {

            this.fields = this.fields.filter(function(item) {
                return item.uuid !== uuid;
            });

            this.value.fields = this.fields.toArray();

            this.update(this.value);
        },

        updateField(key, field, value){

            this.value.fields[key].value = value;

            this.fields = collect(this.value.fields);

            this.update(this.value);
        },

        updateFieldMeta(key, field, value){
            console.log(key);
            console.log(field);
            console.log(value);
        }

    },
};
</script>
