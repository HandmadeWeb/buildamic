<template>
  <div class="buildamic-section bg-blue-light p-2 mb-2">
    <grid-row :row="row" v-for="(row, rowKey) in dragarray" :key="rowKey" />
  </div>
</template>

<script>
import GridRow from "./GridRow.vue";

export default {
  components: {
    GridRow,
  },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      dragarray: this.section.rows,
    };
  },

  mounted() {
  },

};
</script>
