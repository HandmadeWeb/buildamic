<template>
  <div
    class="border flex rounded border-t-4 pl-1 border-green-light p-2 relative"
  >
    <module-controls
      class="pr-1"
      :component="row"
      :value="rows"
      :index="rowIndex"
      :customSettings="customSettings"
    />
    <div class="buildamic-row p-0 w-full gap-2" :style="colCount">
      <button
        class="py-1 px-2 border border-dashed"
        style="grid-column: 1 / -1"
        v-if="!columns.length"
        @click="$modals.open(row.uuid + '-column-layouts')"
      >
        Select columns
      </button>
      <template v-for="column in columns">
        <grid-column :key="column.uuid" :column="column" />
      </template>
    </div>

    <column-selector
      :row="row"
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
      columnsTotal:
        this.row.config.buildamic_settings?.attributes?.column_count_total ||
        12,
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

  watch: {
    columns: {
      handler: function () {
        this.columnsTotal =
          this.row.config.buildamic_settings?.attributes?.column_count_total;
      },
    },
  },

  computed: {
    colCount() {
      return 12 % this.columnsTotal !== 0
        ? `--b-columns: ${this.columnsTotal}`
        : 12;
    },
    items() {
      let count = this.columns.reduce((acc, curr) => {
        if (curr.value.length > acc) {
          acc += curr.value.length;
        }
        return acc;
      }, 0);
      return count;
    },
  },
  methods: {
    openModal() {
      this.$modals.open(`${this.row.uuid}-column-layouts`);
    },
  },
};
</script>
