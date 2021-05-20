<template>
  <div class="buildamic-row flex gap-3 bg-green-light p-2 mb-4">
    <grid-column
      :column="column"
      v-for="(column, columnKey) in row.columns"
      :key="columnKey"
    />
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

  mounted() {
    console.log("row", this.row.columns);
  },

  props: {
    row: {
      type: Object,
      required: true,
    },
  },
};
</script>
