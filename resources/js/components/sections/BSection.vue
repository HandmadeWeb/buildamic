<template>
  <div class="buildamic-section p-4 bg-blue">
    <vue-draggable
      :list="rows"
      :group="{ name: 'rows' }"
      ghost-class="ghost"
      class="flex flex-col gap-3"
    >
      <template v-for="(row, rowIndex) in rows">
        <b-row
          :rowIndex="rowIndex"
          :key="`row-${row.uuid}`"
          :row="row"
          :rows="rows"
        >
          <row-controls :value="rows" />
        </b-row>
      </template>
      <row-controls v-if="!rows.length" :value="rows" />
      <slot></slot>
    </vue-draggable>
  </div>
</template>

<style scoped></style>

<script>
import BRow from "../rows/BRow.vue";
import RowControls from "../rows/RowControls.vue";
import VueDraggable from "vuedraggable";

export default {
  components: { BRow, VueDraggable, RowControls },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      rows: [],
    };
  },

  methods: {},

  mounted() {
    this.rows = this.section.value ?? [];
  },
};
</script>
