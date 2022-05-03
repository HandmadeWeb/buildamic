<template>
  <field-base
    :handle="fieldData.config.statamic_settings.handle"
    :field="field"
    :defaults="fieldDefaults"
    class="buildamic-field"
    :class="[`${getType}-fieldtype`]"
  >
    <element-container>
      <publish-field
        :config="getConfig"
        :value="fieldData.value"
        :meta="getMeta"
        :handle="fieldData.config.statamic_settings.handle"
        @input="updateField({ obj: field, path: 'value', val: $event })"
        @meta-updated="
          updateMeta({ obj: field, path: 'computed.meta', val: $event })
        "
      />
    </element-container>
    <error-display />
  </field-base>
</template>

<script>
// Overrides
import ColorFieldtype from "./overrides/ColorFieldtype.vue";
import OptionsFields from "../../mixins/OptionsFields.js";
import FieldBase from "../shared/FieldBase.vue";
import ErrorDisplay from "../shared/ErrorDisplay.vue";

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
    FieldBase,
    ErrorDisplay,
  },

  mixins: [OptionsFields],

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
    getFieldDefaults() {
      return this.fieldDefaults[this.fieldData.config.statamic_settings.handle];
    },
    getMeta() {
      if (this.fieldData?.computed?.meta) {
        return this.fieldData.computed.meta;
      }
      return this.getFieldDefaults.meta;
    },
    getType() {
      return this.getConfig.component || this.getConfig.type;
    },
    getConfig() {
      if (this.fieldData?.computed?.config) {
        return this.fieldData.computed.config;
      }
      return this.getFieldDefaults.config;
    },
  },
  methods: {
    searchMeta(el) {
      console.log(el);
    },
  },

  provide() {
    return {
      storeName: "base",
    };
  },
};
</script>

<style scoped>
.buildamic-field + .buildamic-field {
  margin-top: 2rem;
}
</style>
