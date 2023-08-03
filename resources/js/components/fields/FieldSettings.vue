<template>
  <div>
    <admin-label :field="field" />
    <vue-tabs :id="field.uuid">
      <vue-tab name="Content" selected="selected">
        <div class="publish-fields @container w-full">
          <single-field :field="field" :fieldDefaults="fieldDefaults" />
        </div>
      </vue-tab>
      <vue-tab name="Design">
        <div class="publish-fields @container w-full">
          <design-tab :field="field" :fieldDefaults="fieldDefaults" />
        </div>
      </vue-tab>
      <vue-tab name="Options">
        <div class="publish-fields @container w-full">
          <options-tab :field="field" />
        </div>
      </vue-tab>
    </vue-tabs>
  </div>
</template>

<script>
import SingleField from "./SingleField.vue";
import OptionsTab from "../shared/OptionsTab.vue";
import DesignTab from "../shared/DesignTab.vue";
import AdminLabel from "../shared/AdminLabel.vue";

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
    AdminLabel,
  },
};
</script>
