<template>
  <div class="module-selector">
    <eva-icon
      class="flex cursor-pointer text-grey-80 pulse"
      fill="currentColor"
      name="menu"
      width="18"
      height="18"
      @click="toggleStack = true"
    ></eva-icon>
    <stack name="field-stack" v-if="toggleStack" @closed="toggleStack = false">
      <div class="h-full p-4 bg-white overflow-auto">
        <h2 class="mb-2 text-xl">Settings for {{ admin_label }}</h2>
        <component
          :is="`${component.type}-settings`"
          :field="component"
          :fieldDefaults="fieldDefaults[`${component.type}s`]"
        />
      </div>
    </stack>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import FieldSettings from "../fields/FieldSettings.vue";
import SetSettings from "../fields/SetSettings.vue";
import RowSettings from "../rows/RowSettings.vue";
import SectionSettings from "../sections/SectionSettings.vue";

export default {
  props: {
    component: Object,
    value: Array,
    index: Number,
  },
  data() {
    return {
      toggleStack: false,
    };
  },
  computed: {
    admin_label() {
      return (
        this.component.config?.buildamic_settings?.admin_label ||
        this.component.config.admin_label
      );
    },
  },
  inject: ["fieldDefaults"],
  components: {
    EvaIcon,
    FieldSettings,
    SetSettings,
    RowSettings,
    SectionSettings,
  },
  methods: {},
};
</script>

<style></style>
