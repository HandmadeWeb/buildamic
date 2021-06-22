<template>
  <div class="altamic-fieldtype-container">
    <!-- <text-input :value="value" @input="update" /> -->
    <div v-for="section in value.sections" :key="section.uuid">
      <Section
        :allRows="rows"
        :sectionRows="rows.where('parent', section.uuid)"
        :section="section"
      />
    </div>
    <button @click="addSection">Add Section</button>
    <!-- <button v-if="sections.isEmpty()" @click="addSection">Add Section</button> -->
  </div>
</template>

<script>
import VueDraggable from "vuedraggable";
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";
import Section from "./Section.vue";

// https://statamic.dev/extending/fieldtypes/
export default {
  mixins: [Fieldtype],

  data() {
    return {
      fieldDefaults: this.meta.fields,
      sections: collect(this.value.sections),
      rows: collect(this.value.rows),
      columns: collect(this.value.columns),
      fields: collect(this.value.fields),
    };
  },
  components: {
    VueDraggable,
    Section,
  },

  methods: {
    collect,

    generateUUID(uuid = null) {
      return uuidv4();
    },

    fieldtypeComponent(field) {
      return `${field.component}-fieldtype`;
    },

    addSection() {
      this.sections.push({
        uuid: this.generateUUID(),
        config: {
          enabled: true,
        },
      });

      this.value.sections = this.sections.toArray();

      this.update(this.value);
    },

    removeSection(uuid) {
      this.rows.where("parent", uuid).each((row) => this.removeRow(row.uuid));

      this.sections = this.sections.filter(function(item) {
        return item.uuid !== uuid;
      });

      this.value.sections = this.sections.toArray();

      this.update(this.value);
    },

    addColumn(parent) {
      this.columns.push({
        uuid: this.generateUUID(),
        parent: parent,
        config: {
          enabled: true,
        },
      });

      this.value.columns = this.columns.toArray();

      this.update(this.value);
    },

    removeColumn(uuid) {
      this.fields
        .where("parent", uuid)
        .each((field) => this.removeField(field.uuid));

      this.columns = this.columns.filter(function(item) {
        return item.uuid !== uuid;
      });

      this.value.columns = this.columns.toArray();

      this.update(this.value);
    },

    addField(field, parent) {
      this.fields.push({
        uuid: this.generateUUID(),
        parent: parent,
        type: "field",
        handle: field.handle,
        component: field.config.type,
        config: {
          enabled: true,
          field: field.config,
        },
        value: field.value,
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

    updateField(key, field, value) {
      this.value.fields[key].value = value;

      this.fields = collect(this.value.fields);

      this.update(this.value);
    },

    updateFieldMeta(key, field, value) {
      console.log(key);
      console.log(field);
      console.log(value);
    },
  },
};
</script>
