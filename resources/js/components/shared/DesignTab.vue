<template>
  <div class="design__tab">
    <breakpoint-switcher />
    <settings-layout :field="field">
      <template v-slot:layout-top>
        <slot name="layout-top" />
      </template>
      <template v-slot:layout-bottom>
        <slot name="layout-bottom" />
      </template>
    </settings-layout>
    <settings-background
      :fieldDefaults="fieldDefaults"
      :field="field"
    ></settings-background>
    <settings-text
      :fieldDefaults="fieldDefaults"
      :field="field"
    ></settings-text>
  </div>
</template>

<script>
import SettingsLayout from "./settings/SettingsLayout";
import SettingsBackground from "./settings/SettingsBackground";
import SettingsText from "./settings/SettingsText";
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
    SettingsText,
  },
  mounted() {
    // console.log("fd", this.fieldDefaults);
  },
};
</script>
