<template>
  <div
    class="field border border-t-4 border-grey-70 rounded w-full p-1 text-center"
  >
    <span class="">{{ field.config.admin_label }}</span>
    <module-controls
      :component="field"
      :value="fields"
      :index="fieldIndex"
      :customSettings="customSettings"
    />
    <!-- <field-controls :fields="fields" :fieldIndex="fieldIndex" /> -->
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
          icon: "plus-circle",
          component: "module-selector",
          title: "Add Module",
          order: 20,
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
