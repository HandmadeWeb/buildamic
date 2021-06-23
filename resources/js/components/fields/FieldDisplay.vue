<template>
  <div
    class="field border border-t-4 border-grey-70 rounded w-full p-1 text-center"
  >
    <span class="">{{ field.config.buildamic_settings.admin_label }}</span>
    <module-controls
      :component="field"
      :value="fields"
      :index="fieldIndex"
      :customSettings="customSettings"
    />
  </div>
</template>

<script>
import ModuleControls from "../shared/ModuleControls.vue";
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
  components: {
    ModuleControls,
  },
};
</script>

<style></style>
