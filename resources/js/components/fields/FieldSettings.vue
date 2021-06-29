<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Content" selected="selected">
      <single-field :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Design">
      <design-tab :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Options">
      <options-tab :field="field" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import SingleField from "./SingleField.vue";
import OptionsTab from "../shared/OptionsTab.vue";
import DesignTab from "../shared/DesignTab.vue";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: Object,
  },
  components: {
    SingleField,
    OptionsTab,
    DesignTab,
  },
};
</script>
