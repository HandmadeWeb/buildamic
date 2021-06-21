<template>
  <div class="buildamic-set" :class="[`${field.config.type}-fieldtype`]">
    <vue-tabs :id="field.uuid">
      <vue-tab name="Content" selected="selected">
        <Field
          v-for="field in field.value"
          :key="field.uuid"
          :field="field"
          :fieldDefaults="setFieldDefaults"
        />
      </vue-tab>
      <vue-tab name="Options">
        <options-tab :field="field" />
      </vue-tab>
    </vue-tabs>
  </div>
</template>

<script>
import Field from "./Field.vue";
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
    Field,
    OptionsTab,
  },
  computed: {
    setFieldDefaults() {
      const test = this.fieldDefaults[this.field.config.handle].fields.reduce(
        (acc, cur) => {
          acc[cur.handle] = cur;
          return acc;
        },
        {}
      );
      return test;
    },
  },
};
</script>
