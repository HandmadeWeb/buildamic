<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Design" selected="selected">
      <design-tab :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Options">
      <options-tab :field="field" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import OptionsTab from "../shared/OptionsTab.vue";
import DesignTab from "../shared/DesignTab.vue";
export default {
  name: "section-settings",
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: Object,
  },
  data() {
    return {
      columns: this.field.value,
    };
  },
  mounted() {
    console.log("section", this.field);
  },
  components: {
    OptionsTab,
    DesignTab,
  },
};
</script>
