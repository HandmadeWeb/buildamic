<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Content" selected="selected">
      <Field :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Design">
      <design-tab :field="field" :overRideDefaultOptions="optionsOverRides" />
    </vue-tab>
    <vue-tab name="Options">
      <options-tab :field="field" :overRideDesignOptions="designOverRides" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import Field from "./Field.vue";
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
    Field,
    OptionsTab,
    DesignTab,
  },
  data() {
    return {
      optionsOverRides: {
        attributes: {
          class: {
            placeholder: "OogyBoogy",
          },
        },
      },
      designOverRides: {},
    };
  },
};
</script>
