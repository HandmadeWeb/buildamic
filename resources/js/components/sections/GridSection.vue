<template>
  <div
    class="
      buildamic-section
      transition-all
      duration-200
      p-2
      pb-4
      border border-t-4
      rounded
      border-blue-500
      flex
      relative
      group
      pl-4
    "
  >
    <div class="sortable-handle absolute top-0 left-0 h-full"></div>
    <vue-draggable
      :list="rows"
      :group="{ name: 'rows' }"
      handle=".sortable-handle"
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
    <module-controls
      class="
        transition-all
        duration-200
        text-blue-500
        absolute
        right-1
        bottom-1
        mx-auto
      "
      direction="row"
      :component="section"
      :value="sections"
      :index="sectionIndex"
      :customSettings="customSettings"
    />
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
