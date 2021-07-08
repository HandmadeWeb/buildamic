<template>
  <div class="buildamic-field" :class="[`${getType}-fieldtype`]">
    <label>{{ handle }}</label>
    <component
      :is="`${getType}-fieldtype`"
      :config="getConfig"
      :value="value"
      :meta="getMeta"
      :handle="handle"
      @input="updateField({ path: `value.${handle}`, val: $event })"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
import ColorFieldtype from "./overrides/ColorFieldtype.vue";
import Fields from "../../mixins/Fields.js";

export default {
  props: {
    field: Object,
    handle: String,
    type: String,
    value: [Number, String, Array, Object],
    fieldDefaults: {
      type: Object,
    },
    setDefaults: {
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
    sets() {
      return [this.fieldDefaults[this.field.config.statamic_settings.handle]];
    },
    getFieldDefaults() {
      return this.setDefaults[this.handle];
    },
    getConfig() {
      if (
        this.fieldData?.computed &&
        this.fieldData?.computed[this.field.config.statamic_settings.handle]
          ?.config
      ) {
        return this.fieldData?.computed[
          this.field.config.statamic_settings.handle
        ].config;
      }
      return this.getFieldDefaults.config;
    },
    getMeta() {
      if (
        this.fieldData?.computed &&
        this.fieldData?.computed[this.field.config.statamic_settings.handle]
          ?.meta
      ) {
        return this.fieldData?.computed[
          this.field.config.statamic_settings.handle
        ].meta;
      }
      return this.getFieldDefaults.meta;
    },
    getType() {
      return this.getConfig.component || this.getConfig.type;
    },
  },
  mounted() {
    console.log(this.getConfig);
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
