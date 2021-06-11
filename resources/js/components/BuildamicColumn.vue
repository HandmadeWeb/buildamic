<template>
  <div class="buildamic-column-container">
      Column {{ column.uuid }}
      <div v-for="(field, fieldKey) in column.fields" :key="fieldKey" class="py-2"> 
        <markdown-fieldtype :handle="field.field.config.handle" :value="field.value" :config="field.field.config" />
        <button class="btn" v-on:click="removeField(fieldKey)">Remove Field</button>
      </div>
      <button class="btn" @click="isSelectingNewField = true">Add Field</button>
      <stack name="field-stack" v-if="isSelectingNewField" @closed="isSelectingNewField = false">
          <div>
            <button class="btn" v-on:click="addField('markdown')">Markdown</button>
          </div>
      </stack>
  </div>
</template>

<style scoped>

</style>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {  
    props: {
      column: {
        type: Object,
        required: true
      },
  },

  data() {
    return {
      isSelectingNewField: false,
    };
  },

  methods: {
    addField(fieldType) {
      this.column.fields.push({
        uuid: uuidv4(),
        type: 'field',
        config: [],
        field: {
          config: {
            "restrict": false,
            "automatic_line_breaks": true,
            "automatic_links": false,
            "escape_markup": false,
            "smartypants": false,
            "antlers": false,
            "display": "Markdown",
            "type": "markdown",
            "icon": "markdown",
            "listable": "hidden",
            "container": null,
            "folder": null,
            "parser": null,
            "component": "markdown",
            "handle": "markdown",
            "prefix": null,
            "instructions": null,
            "required": false,
          },
        },
        value: '',
        //value: fieldType == 'markdown' ? '' : [],
      });

      //this.update(this.value);
    },

    removeField(fieldKey) {
      this.column.fields.splice(fieldKey, 1);
      //this.update(this.value);
    },
  },

//   mounted() {
//     //console.log(uuidv4());
//     // console.log('config:', this.config);
//     // console.log('meta:', this.meta);
//     // console.log('value:', this.value);
//   }

};
</script>
