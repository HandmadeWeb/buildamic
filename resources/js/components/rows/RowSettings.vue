<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Content" selected="selected">
      <Field :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Options">
      <default-options :field="field" :overRideDefaultOptions="overRides" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import Field from "../fields/Field.vue";
import DefaultOptions from "../shared/DefaultOptions.vue";
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
    DefaultOptions,
  },
  data() {
    return {
      overRides: {
        attributes: {
          class: {
            placeholder: "OogyBoogy",
          },
        },
      },
    };
  },
};
</script>
