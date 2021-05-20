<template>
  <div class="buildamic-row-container">
    <div v-for="(column, columnKey) in row.columns" :key="columnKey">
      <grid-column :column="column" />
    </div>
  </div>
</template>

<script>
import GridColumn from "./GridColumn.vue";

export default {
  components: {
    GridColumn,
  },

  data() {
    return {};
  },

  props: {
    row: {
      type: Object,
      required: true,
    },
  },
};
</script>
