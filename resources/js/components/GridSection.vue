<template>
  <div class="buildamic-section bg-blue-light p-2 mb-2 flex flex-col gap-3">
    <grid-row :row="row" v-for="(row, rowKey) in dragarray" :key="rowKey" />
  </div>
</template>

<script>
import GridRow from "./GridRow.vue";

export default {
  components: {
    GridRow,
  },

  data() {
    return {
      dragarray: this.section.rows,
    };
  },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    // console.log("section element", this.section.rows);
  },
};
</script>
