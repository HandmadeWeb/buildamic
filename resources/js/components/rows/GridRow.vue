<template>
  <div
    class="
      transition-all
      duration-200
      border
      flex
      rounded
      border-t-4
      group-hover:pb-6
      border-green-light
      relative
      pl-2
    "
  >
    <div
      class="sortable-handle bg-green-200 absolute top-0 left-0 h-full"
    ></div>
    <div class="buildamic-row p-2 w-full gap-2" :style="colCount">
      <button
        class="py-1 px-1 border border-dashed"
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

    <module-controls
      class="
        transition-all
        duration-200
        text-green-light
        opacity-0
        absolute
        right-1
        bottom-1
        mx-auto
        group-hover:opacity-100
      "
      direction="row"
      :component="row"
      :value="rows"
      :index="rowIndex"
      :customSettings="customSettings"
    />

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
