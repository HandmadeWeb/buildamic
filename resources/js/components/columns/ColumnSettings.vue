<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Design">
      <design-tab :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Options" selected="selected">
      <options-tab :field="field" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import DesignTab from "../shared/DesignTab.vue";
import OptionsTab from "../shared/OptionsTab.vue";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: Object,
  },
  components: {
    DesignTab,
    OptionsTab,
  },
};
</script>
