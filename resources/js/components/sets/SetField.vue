<template>
  <field-base
    :handle="handle"
    :field="field"
    :defaults="setDefaults"
    :class="[`${getType}-fieldtype`]"
  >
    <element-container>
      <publish-field
        :config="getConfig"
        :value="value"
        :meta="getMeta"
        :handle="handle"
        @input="handleInput"
        @meta-updated="
          updateField({
            obj: field,
            path: `computed.meta.${handle}`,
            val: $event,
          })
        "
        @focus="$emit('focus')"
        @blur="handleBlur"
      />
    </element-container>
    <div v-if="errors.length" class="errors pl-3">
      <span v-for="error in errors" :key="error" class="text-red-600">{{
        error
      }}</span>
    </div>
  </field-base>
</template>

<script>
import ColorFieldtype from "../fields/overrides/ColorFieldtype.vue";
import OptionsFields from "../../mixins/OptionsFields.js";
import FieldBase from "../shared/FieldBase.vue";
import { validateForm } from "js-laravel-validation";

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
  methods: {
    handleInput($event) {
      this.value = $event;

      this.validateField();
      if (this.errors.length) {
        return;
      }

      this.updateField({
        obj: this.field,
        path: `value.${this.handle}`,
        val: this.value,
      });
    },
    handleBlur() {
      this.validateField();
      console.log(this.errors);
      this.$emit("blur");
    },
    validateField() {
      this.errors = [];
      if (!this.setDefaults[this.handle].config?.validate) {
        return true;
      }

      const formData = {
        [this.handle]: {
          value: this.value,
          validation: this.setDefaults[this.handle].config?.validate.join("|"),
        },
      };

      const result = validateForm({ formData });

      //   return console.log({ result });

      if (result.errors[this.handle]) {
        this.errors.push(...result.errors[this.handle]);
      }

      return this.errors;
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
