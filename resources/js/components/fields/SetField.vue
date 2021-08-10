<template>
  <div :class="[`${getType}-fieldtype`]">
    <div>
      <element-container>
        <publish-field
          :config="getConfig"
          :value="value"
          :meta="getMeta"
          :handle="handle"
          @input="
            updateField({ obj: field, path: `value.${handle}`, val: $event })
          "
          @meta-updated="
            updateField({
              obj: field,
              path: `computed.meta.${handle}`,
              val: $event,
            })
          "
          @focus="$emit('focus')"
          @blur="$emit('blur')"
        />
      </element-container>
    </div>
  </div>
</template>

<script>
import ColorFieldtype from "./overrides/ColorFieldtype.vue";
import OptionsFields from "../../mixins/OptionsFields.js";

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
  mixins: [OptionsFields],
  data() {
    return {
      fieldData: this.field,
    };
  },
  computed: {
    sets() {
      return [this.fieldDefaults[this.handle]];
    },
    getFieldDefaults() {
      return this.setDefaults[this.handle];
    },
    getConfig() {
      if (this.fieldData?.computed?.config[this.handle]) {
        return this.fieldData?.computed.config[this.handle];
      }
      return this.getFieldDefaults.config;
    },
    getMeta() {
      if (this.fieldData?.computed?.meta[this.handle]) {
        return this.fieldData?.computed?.meta[this.handle];
      }
      return this.getFieldDefaults.meta;
    },
    getType() {
      return this.getConfig.component || this.getConfig.type;
    },
  },
  mounted() {
    // console.log("handle", this.handle);
    // console.log("field", this.fieldData);
    // console.log("meta", this.getMeta);
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
