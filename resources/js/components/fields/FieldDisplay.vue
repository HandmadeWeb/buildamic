<template>
  <div
    class="
      field
      border border-t-4 border-grey-70
      rounded
      w-full
      p-1
      text-center
      relative
    "
  >
    <div class="sortable-handle absolute top-0 left-0 h-full"></div>
    <span
      contenteditable="true"
      @blur="
        setDeep(field.config.buildamic_settings, 'admin_label', $el.innerText)
      "
      >{{
        field.config.buildamic_settings.admin_label ||
        field.config.statamic_settings.field.display ||
        field.config.statamic_settings.handle
      }}
    </span>
    <module-controls
      class="justify-center mt-1"
      :component="field"
      :value="fields"
      :index="fieldIndex"
      :customSettings="customSettings"
    />
  </div>
</template>

<script>
import ModuleControls from "../shared/ModuleControls.vue";
import { setDeep } from "../../functions/objectHelpers";

export default {
  props: {
    field: Object,
    fields: Array,
    fieldIndex: Number,
  },
  data() {
    return {
      customSettings: {
        add: {
          component: "module-selector",
          title: "Add Module",
        },
      },
    };
  },
  methods: {
    setDeep,
  },
  components: {
    ModuleControls,
  },
};
</script>

<style></style>
