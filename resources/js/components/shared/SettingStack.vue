<template>
  <div class="module-selector">
    <eva-icon
      class="flex cursor-pointer text-grey-80 pulse"
      fill="currentColor"
      name="settings-outline"
      width="18"
      height="18"
      @click="toggleStack = true"
    ></eva-icon>
    <stack name="field-stack" v-if="toggleStack" @closed="toggleStack = false">
      <div class="h-full p-4 bg-white overflow-auto">
        <h2 class="mb-2 text-xl">Settings for {{ admin_label }}</h2>
        <component
          :is="`${componentType}-settings`"
          :field="component"
          :fieldDefaults="fieldDefaults[`${componentType}s`]"
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
import { mapGetters } from "vuex";

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
    ...mapGetters(["fieldDefaults"]),
    admin_label() {
      return (
        this.component.config?.buildamic_settings?.admin_label ||
        this.component.config.admin_label
      );
    },
    componentType() {
      return this.component.useSettings || this.component.type;
    },
  },
  components: {
    EvaIcon,
    FieldSettings,
    SetSettings,
    RowSettings,
    SectionSettings,
  },
};
</script>

<style></style>
