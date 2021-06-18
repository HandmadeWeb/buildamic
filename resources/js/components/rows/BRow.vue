<template>
  <div class="buildamic-row bg-green-light p-2">
    <template v-for="(column, columnKey) in columns">
      <b-column :key="columnKey" :column="column" />
    </template>
    <slot></slot>
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
      columns: this.row.value ?? [],
      rowID: this.row.uuid,
    };
  },

  //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }
};
</script>
