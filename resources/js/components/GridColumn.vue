<template>
  <div class="buildamic-column-container">
    <div
      v-for="(field, fieldKey) in column.fields"
      :index="fieldKey"
      :key="fieldKey"
    >
      <component :is="componentType(field.type)" :field="field" />
    </div>
  </div>
</template>

<script>
import FieldElement from "./Field.vue";
import FieldGroupElement from "./FieldGroup.vue";

export default {
  components: {
    FieldElement,
    FieldGroupElement,
  },

  data() {
    return {};
  },

  methods: {
    componentType(fieldtype) {
      return fieldtype === "field" ? "field-element" : "field-group-element";
    },
  },

  props: {
    column: {
      type: Object,
      required: true,
    },
  },
};
</script>
