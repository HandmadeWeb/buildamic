<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Options" selected="selected">
      <options-tab :field="field" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
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
    OptionsTab,
  },
};
</script>
