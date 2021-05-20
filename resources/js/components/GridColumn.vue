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
          @click.prevent="$modal.show(`${fieldHandle(field)}-test`)"
          class="module-name"
        >
          {{ fieldHandle(field) }}  
        </div>

        <vue-modal :name="`${fieldHandle(field)}-test`">
          <component :is="componentType(field)" :field="field" />
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

  inject: ['fields', 'sets'],
  
  props: {
    column: {
      type: Object,
      required: true,
    },
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
    componentType(field) {
      return field.type === "field" ? "field-element" : "field-group-element";
    },

    fieldHandle(field) {
      return field.type === "field" ? field.config.handle : this.sets[field.value.type].handle;
    },
  },

};
</script>
