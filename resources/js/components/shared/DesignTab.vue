<template>
  <div class="design__tab">
    <breakpoint-switcher />
    <settings-layout :field="field"></settings-layout>
    <settings-background
      :fieldDefaults="fieldDefaults"
      :field="field"
    ></settings-background>
  </div>
</template>

<script>
import SettingsLayout from "./settings/SettingsLayout";
import SettingsBackground from "./settings/SettingsBackground";
import breakpointSwitcher from "./settings/BreakpointSwitcher.vue";
export default {
  props: {
    field: {
      type: Object,
    },
    fieldDefaults: Object,
  },
  components: {
    breakpointSwitcher,
    SettingsLayout,
    SettingsBackground,
  },
  mounted() {
    console.log("fd", this.fieldDefaults);
  },
};
</script>
