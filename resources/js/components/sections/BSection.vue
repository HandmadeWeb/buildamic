<template>
  <div class="buildamic-section">
    <template v-for="(row, rowKey) in rows">
      <b-row :key="rowKey" :row="row" />
    </template>
    <section-controls />
  </div>
</template>

<style scoped></style>

<script>
import BRow from "../rows/BRow.vue";
import SectionControls from "./SectionControls.vue";

export default {
  components: { BRow, SectionControls },

  props: {
    section: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      rows: this.section.rows ?? [],
    };
  },

  methods: {},

  provide() {
    return {
      rows: this.rows,
    };
  },

  //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }
};
</script>
