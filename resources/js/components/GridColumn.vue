<template>
  <draggable
    :list="draggarray"
    :group="{ name: 'columns' }"
    ghost-class="ghost"
    handle=".drag-handle"
    class="buildamic-column flex-grow"
  >
    <div
      v-for="(field, fieldKey) in draggarray"
      :index="fieldKey"
      :key="fieldKey"
      class="bg-grey-40 module drag-handle p-2 text-center"
      :class="sortableItemClass"
    >
      <div
        @click.prevent="$modal.show(`${field.config.handle}-test`)"
        class="module-name"
      >
        {{ field.config.handle }}
      </div>
      <vue-modal :name="`${field.config.handle}-test`">
        <component :is="componentType(field.type)" :field="field" />
      </vue-modal>
    </div>
  </draggable>
</template>

<script>
import FieldElement from "./Field.vue";
import FieldGroupElement from "./FieldGroup.vue";
import draggable from "vuedraggable";

export default {
  components: {
    FieldElement,
    FieldGroupElement,
    draggable,
  },

  data() {
    return {
      draggarray: this.column.fields,
    };
  },

  computed: {
    sortableItemClass() {
      return `${this.column.type}-sortable-item`;
    },

    sortableHandleClass() {
      return `${this.column.type}-drag-handle`;
    },
  },

  methods: {
    componentType(fieldtype) {
      return fieldtype === "field" ? "field-element" : "field-group-element";
    },
  },

  mounted() {
    console.log(this.sortableItemClass);
  },

  props: {
    column: {
      type: Object,
      required: true,
    },
  },
};
</script>
