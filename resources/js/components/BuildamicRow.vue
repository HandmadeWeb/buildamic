<template>
  <div class="buildamic-row-container">
      Row {{ row.uuid }}
      <div v-for="(column, columnKey) in row.columns" :key="columnKey" class="py-2"> 
        <div class="p-5 bg-yellow">
          <buildamic-column :column="column" />
          <button class="btn" v-on:click="removeColumn(columnKey)">Remove Column</button>
        </div>
      </div>
      <button class="btn" @click.prevent="addColumn">Add Column</button>
  </div>
</template>

<style scoped>

</style>

<script>
import { v4 as uuidv4 } from 'uuid';
import BuildamicColumn from './BuildamicColumn.vue';

export default {
  components: { BuildamicColumn },
  
    props: {
      row: {
        type: Object,
        required: true
      },
  },

  data() {
    return {
    };
  },

  methods: {
    addColumn() {
      this.row.columns.push({
        uuid: uuidv4(),
        type: 'column',
        fields: []
      });

      //this.update(this.value);
    },

    removeColumn(columnKey) {
      this.row.columns.splice(columnKey, 1);
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
