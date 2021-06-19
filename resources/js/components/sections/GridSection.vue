<template>
  <div class="buildamic-section p-2 border border-t-4 rounded border-blue-500">
    <vue-draggable
      :list="rows"
      :group="{ name: 'rows' }"
      ghost-class="ghost"
      class="flex flex-col gap-2"
    >
      <grid-row
        v-for="(row, rowIndex) in rows"
        :key="`row-${row.uuid}`"
        :row="row"
        :rows="rows"
        :rowIndex="rowIndex"
      />
      <module-controls
        :component="section"
        :value="sections"
        :index="sectionIndex"
      />
    </vue-draggable>
    <button @click="addRow" v-if="!rows.length">Add Row</button>
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
      rows: [],
    };
  },

  methods: {
    addRow() {
      const newModule = createModule("Row");
      this.rows.push(newModule);
    },
  },

  mounted() {
    this.rows = this.section.value ?? [];
  },
};
</script>
