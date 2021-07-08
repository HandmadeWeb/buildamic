<template>
  <div
    class="buildamic-section p-2 pl-1 border border-t-4 rounded border-blue-500 flex relative "
  >
    <module-controls
      class="pr-1"
      :component="section"
      :value="sections"
      :index="sectionIndex"
    />
    <button
      class="py-1 px-2 border border-dashed"
      @click="addRow"
      v-if="!rows.length"
    >
      Add Row
    </button>
    <vue-draggable
      :list="rows"
      :group="{ name: 'rows' }"
      ghost-class="ghost"
      class="section-draggable flex flex-col gap-2 w-full group"
    >
      <grid-row
        v-for="(row, rowIndex) in rows"
        :key="`row-${row.uuid}`"
        :row="row"
        :rows="rows"
        :rowIndex="rowIndex"
      />
    </vue-draggable>
  </div>
</template>

<style scoped></style>

<script>
import GridRow from "../rows/GridRow.vue";
import VueDraggable from "vuedraggable";
import ModuleControls from "../shared/ModuleControls";
import { createModule } from "../../factories/modules/moduleFactory";

export default {
  components: { GridRow, VueDraggable, ModuleControls },

  props: {
    section: {
      type: Object,
      required: true,
    },
    sections: {
      type: Array,
    },
    sectionIndex: Number,
  },

  data() {
    return {
      rows: this.section.value ?? [],
    };
  },

  methods: {
    addRow() {
      const newModule = createModule("Row");
      this.rows.push(newModule);
    },
  },
};
</script>
