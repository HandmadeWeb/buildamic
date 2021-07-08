<template>
  <div
    class="field border border-t-4 border-grey-70 rounded w-full p-1 text-center relative"
  >
    <span class="">{{
      this.field.config.buildamic_settings.admin_label ||
        this.field.config.statamic_settings.field.display ||
        this.field.config.statamic_settings.handle
    }}</span>
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
