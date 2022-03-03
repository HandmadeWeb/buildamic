<template>
  <div
    class="
      buildamic-section
      p-2
      pl-1
      pb-0.5
      border border-t-4
      rounded
      border-blue-500
      flex
      relative
    "
  >
    <module-controls
      class="pr-1"
      :component="section"
      :value="sections"
      :index="sectionIndex"
      :customSettings="customSettings"
    />
    <vue-draggable
      :list="rows"
      :group="{ name: 'rows' }"
      ghost-class="ghost"
      class="section-draggable flex flex-grow flex-col gap-2 group"
    >
      <template v-if="rows.length">
        <grid-row
          v-for="(row, rowIndex) in rows"
          :key="`row-${row.uuid}`"
          :row="row"
          :rows="rows"
          :rowIndex="rowIndex"
        />
      </template>
      <button
        class="py-1 px-2 border border-dashed justify-self-center"
        v-else
        @click="addRow"
      >
        Add Row
      </button>
    </vue-draggable>
  </div>
</template>

<style scoped></style>

<script>
import GridRow from "../rows/GridRow.vue";
import VueDraggable from "vuedraggable";
import ModuleControls from "../shared/ModuleControls";
import SectionControls from "../../mixins/SectionControls";

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

  mixins: [SectionControls],
};
</script>
