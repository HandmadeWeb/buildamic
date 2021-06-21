<template>
  <div
    class="buildamic-column border-2 border-dashed p-2 flex flex-col items-center"
    :class="[columnClass, { 'justify-center': !fields.length }]"
  >
    <vue-draggable
      :list="fields"
      :group="{ name: 'columns' }"
      ghost-class="ghost"
      class="w-full flex flex-col gap-2 items-center"
    >
      <template v-for="(field, index) in fields">
        <field-display
          :key="field.uuid"
          :field="field"
          :fields="fields"
          :fieldIndex="index"
        >
          <module-controls :component="field" :value="fields" :index="index" />
        </field-display>
      </template>
    </vue-draggable>
    <module-selector v-if="!fields.length" :value="fields" />
  </div>
</template>

<style scoped></style>

<script>
import VueDraggable from "vuedraggable";
import ModuleSelector from "../ModuleSelector.vue";
import FieldDisplay from "../fields/FieldDisplay.vue";

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
      fields: this.column.value,
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
    FieldDisplay,
  },
};
</script>

<style scoped>
.buildamic-column {
  transition: background 0.2s;
}
.buildamic-column:hover {
  background-color: rgba(0, 0, 0, 0.03);
}
</style>
