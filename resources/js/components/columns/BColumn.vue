<template>
  <div class="buildamic-column" :class="columnClass">
    <vue-draggable
      :list="column.value"
      :group="{ name: 'columns' }"
      ghost-class="ghost"
    >
      <template v-for="field in column.value" class="py-2">
        <component :is="`b-${field.type}`" :key="field.uuid" :field="field" />
      </template>
    </vue-draggable>
    <module-selector :value="column.value" />
  </div>
</template>

<style scoped></style>

<script>
import VueDraggable from "vuedraggable";
import ModuleSelector from "../ModuleSelector.vue";
import BField from "../fields/BField.vue";
import BSet from "../sets/BSet.vue";

export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isSelectingNewField: false,
    };
  },

  computed: {
    columnClass() {
      return `col col-${this.column?.config?.columnSizes?.lg}`;
    },
  },

  components: {
    VueDraggable,
    ModuleSelector,
    BField,
    BSet,
  },

  mounted() {
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.column);
  },
};
</script>
