<template>
  <div
    class="buildamic-field"
    :class="[`${fieldData.config.statamic_settings.field.type}-fieldtype`]"
  >
    <label>{{ fieldDisplay }}</label>
    <component
      :is="`${fieldData.config.statamic_settings.field.type}-fieldtype`"
      :config="getConfig"
      :value="fieldData.value"
      :meta="getMeta"
      :handle="fieldData.config.statamic_settings.handle"
      @input="updateField({ path: 'value', val: $event })"
      @meta-updated="updateField({ path: 'meta', val: $event })"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
// Overrides
import ColorFieldtype from "./overrides/ColorFieldtype.vue";
import Fields from "../../mixins/Fields.js";

export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: {
      type: Object,
    },
  },

  components: {
    ColorFieldtype,
  },

  mixins: [Fields],

  data() {
    return {
      fieldData: this.field,
    };
  },

  computed: {
    fieldDisplay() {
      return (
        this.field.config.buildamic_settings.admin_label ||
        this.field.config.statamic_settings.field.display ||
        this.field.config.statamic_settings.handle
      );
    },
    getMeta() {
      if (this.fieldData?.computed?.meta) {
        return this.fieldData.computed.meta;
      }
      return this.fieldDefaults[this.fieldData.config.statamic_settings.handle]
        .meta;
    },
    getConfig() {
      if (this.fieldData?.computed?.config) {
        return this.fieldData.computed.config;
      }
      return this.fieldDefaults[this.fieldData.config.statamic_settings.handle]
        .config;
    },
  },
  //   mounted() {
  //     console.log(this.fieldData);
  //   },
};
</script>

<style scoped>
.buildamic-field + .buildamic-field {
  margin-top: 2rem;
}
</style>
