<template>
  <field-base
    :handle="handle"
    :field="field"
    :defaults="setDefaults"
    :class="[
      `${getType}-fieldtype`,
      `field-${window.tailwind_width_class(this.getConfig.width)}`,
    ]"
  >
    <element-container>
      <publish-field
        :config="getConfig"
        :value="value"
        :meta="meta"
        :handle="handle"
        @input="handleInput"
        @meta-updated="updateMeta($event)"
        @focus="$emit('focus')"
        @blur="handleBlur"
      />
    </element-container>

    <!-- <error-display :handle="handle" /> -->
  </field-base>
</template>

<script>
import ColorFieldtype from "../fields/overrides/ColorFieldtype.vue";
import OptionsFields from "../../mixins/OptionsFields.js";
import FieldBase from "../shared/FieldBase.vue";

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
    FieldBase,
  },
  mixins: [OptionsFields],
  data() {
    return {
      fieldData: this.field,
      value: null,
      meta: null,
      errors: [],
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
    getType() {
      return this.getConfig.component || this.getConfig.type;
    },
    window() {
      return window;
    },
  },
  methods: {
    getMeta() {
      if (this.fieldData?.computed?.meta[this.handle]) {
        return this.fieldData?.computed?.meta[this.handle];
      }
      return this.getFieldDefaults.meta;
    },
    saveMeta() {
      if (this.fieldData?.computed?.meta[this.handle]) {
        this.fieldData.computed.meta[this.handle] = this.meta;
      } else {
        this.getFieldDefaults.meta = this.meta;
      }
    },
    updateMeta($newVal) {
      this.meta = $newVal;
    },
    handleInput($event) {
      this.value = $event;

      this.updateField({
        obj: this.field,
        path: `value.${this.handle}`,
        val: this.value,
      });
    },
    handleBlur() {
      this.$emit("blur");
    },
  },
  created() {
    this.meta = this.getMeta();
  },
  destroyed() {
    this.saveMeta();
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

<style lang="scss">
.buildamic-set {
  .tabs-details {
    > .content-tab {
      display: flex;
      flex-wrap: wrap;

      > div > .publish-field {
        width: 100% !important;
      }
    }
  }
}
</style>
