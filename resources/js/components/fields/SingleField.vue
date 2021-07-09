<template>
  <div class="buildamic-field" :class="[`${getType}-fieldtype`]">
    <label>{{ fieldDisplay }}</label>
    <div>
      <component
        :is="`${getType}-fieldtype`"
        :config="getConfig"
        :value="fieldData.value"
        :meta="getMeta"
        :handle="fieldData.config.statamic_settings.handle"
        @input="updateField({ path: 'value', val: $event })"
        @meta-updated="$emit('meta-updated', $event)"
        @focus="$emit('focus')"
        @blur="$emit('blur')"
      />
      <span
        class="text-sm italic block pt-1"
        v-if="fieldInstructions"
        v-html="fieldInstructions"
      />
    </div>
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
    fieldInstructions() {
      return (
        this.fieldData?.computed.instructions ||
        this.getFieldDefaults.config.instructions
      );
    },
  },
  mounted() {
    console.log(this.fieldData);
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
