<template>
  <div class="buildamic-row">
    <template v-for="(column, columnKey) in columns">
      <b-column :key="columnKey" :column="column" />
    </template>
    <row-controls />
    <column-selector
      :columns="columns"
      :name="row.uuid + '-column-layouts'"
    ></column-selector>
    <button @click="$modals.open(row.uuid + '-column-layouts')">
      Open Col
    </button>
  </div>
</template>

<style scoped></style>

<script>
import { v4 as uuidv4 } from "uuid";
import BColumn from "../columns/BColumn.vue";
import RowControls from "./RowControls.vue";
import ColumnSelector from "./ColumnSelector.vue";
export default {
  components: { BColumn, RowControls, ColumnSelector },

  props: {
    row: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      columns: this.row.columns ?? [],
      rowID: this.row.uuid,
    };
  },

  methods: {
    addColumn() {
      this.row.columns.push({
        uuid: uuidv4(),
        type: "column",
        fields: [],
      });

      //this.update(this.value);
    },

    removeColumn(columnKey) {
      this.row.columns.splice(columnKey, 1);
      //this.update(this.value);
    },
  },

  provide() {},

  //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }
};
</script>
