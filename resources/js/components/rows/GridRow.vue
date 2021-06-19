<template>
  <div class="border rounded border-t-4 border-green-light p-2">
    <div class="flex gap-2">
      <template v-for="(column, columnKey) in columns">
        <grid-column :key="columnKey" :column="column" />
      </template>
    </div>
    <module-controls
      :component="row"
      :value="rows"
      :index="rowIndex"
      :customSettings="customSettings"
    />
    <column-selector
      :columns="columns"
      :name="row.uuid + '-column-layouts'"
    ></column-selector>
  </div>
</template>

<style scoped></style>

<script>
import GridColumn from "../columns/GridColumn.vue";
import ColumnSelector from "./ColumnSelector.vue";
import ModuleControls from "../shared/ModuleControls";
export default {
  components: { GridColumn, ColumnSelector, ModuleControls },

  props: {
    row: {
      type: Object,
      required: true,
    },
    rows: Array,
    rowIndex: Number,
  },

  data() {
    return {
      columns: this.row.value ?? [],
      rowID: this.row.uuid,
      customSettings: {
        columns: {
          icon: "grid",
          title: "Column Selector",
          action: () => this.openModal(),
          order: 30,
        },
      },
    };
  },

  methods: {
    openModal() {
      this.$modals.open(`${this.row.uuid}-column-layouts`);
    },
  },
};
</script>
