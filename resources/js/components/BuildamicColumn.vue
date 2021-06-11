<template>
  <div class="buildamic-column-container">
      Column {{ column.uuid }}
      <div v-for="(field, fieldKey) in column.fields" :key="fieldKey" class="py-2"> 
        Field
        <button class="btn" v-on:click="removeField(fieldKey)">Remove Field</button>
      </div>
      <button class="btn" @click.prevent="addField">Add Field</button>
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
    };
  },

  methods: {
    addField() {
      this.column.fields.push({
        uuid: uuidv4(),
        type: 'field',
        config: [],
        value: [],
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
