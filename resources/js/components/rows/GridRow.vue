<template>
  <div
    class="border flex rounded border-t-4 border-green-light p-2 relative"
    :class="[{ 'flex-col': items <= 1 }, { 'pl-1': items > 1 }]"
  >
    <module-controls
      v-if="items > 1"
      class="pr-1 items-start"
      :component="row"
      :value="rows"
      :index="rowIndex"
      :customSettings="customSettings"
    />
    <div class="flex flex-1 justify-center gap-2">
      <button
        class="py-1 px-2 border border-dashed"
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
      v-if="items <= 1"
      class="mt-2 justify-center"
      direction="col"
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

  computed: {
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
