<template>
  <div class="buildamic-section-container">
    <div v-for="(row, rowKey) in section.rows" :key="rowKey">
      <grid-row :row="row" />
    </div>
  </div>
</template>

<script>
import GridRow from "./GridRow.vue";

export default {
  components: {
    GridRow,
  },

  data() {
    return {};
  },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    console.log("section element");
  },
};
</script>
