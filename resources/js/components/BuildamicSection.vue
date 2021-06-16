<template>
  <div class="buildamic-section-container">
    Section {{ section.uuid }}
    <div v-for="(row, rowKey) in section.rows" :key="rowKey" class="py-2"> 
      <div class="p-5 bg-green">
        <buildamic-row :row="row" />
        <button class="btn" v-on:click="removeRow(rowKey)">Remove Row</button>
      </div>
    </div>
    <button class="btn" @click.prevent="addRow">Add Row</button>
  </div>
</template>

<style scoped>

</style>

<script>
import { v4 as uuidv4 } from 'uuid';
import BuildamicRow from './BuildamicRow.vue';

export default {
  components: { BuildamicRow },
  
    props: {
      section: {
        type: Object,
        required: true
      },
  },

  data() {
    return {
    };
  },

  methods: {
    addRow() {
      this.section.rows.push({
        uuid: uuidv4(),
        columns: []
      });

      //this.update(this.value);
    },

    removeRow(rowKey) {
      this.section.rows.splice(rowKey, 1);
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
