<template>
  <div v-if="showField()">
    <slot />
  </div>
</template>

<script>
import Validator from "../../field-conditions/Validator";
import { validateForm } from "js-laravel-validation";
import { mapActions, mapGetters } from "vuex";
import { bus } from "../../eventBus";

export default {
  props: {
    field: Object,
    handle: String,
    defaults: Object,
  },
  computed: {
    ...mapGetters(["errorBag"]),
  },
  methods: {
    ...mapActions(["setErrorBag"]),
    validateReplicators(
      formData,
      replicator,
      handle = this.field.config.statamic_settings.handle
    ) {
      if (!replicator) return false;

      const value = Array.isArray(this.field.value)
        ? this.field.value
        : this.field.value[handle];

      value.forEach((_, i) => {
        return replicator.fields?.forEach((field) => {
          if (!field.validate) return false;
          const field_value = value[i][field.handle];
          formData[`${field.handle}-${i}`] = {};
          formData[`${field.handle}-${i}`].value = Array.isArray(field_value)
            ? field_value.length || ""
            : field_value;
          formData[`${field.handle}-${i}`].validation =
            field.validate.join("|");
        });
      });

      return formData;
    },
    validateSet(formData, updated_field_handle) {
      const handle = this.field.config.statamic_settings.handle;
      const value = this.field.value;
      const value_keys = Object.keys(value);

      value_keys.forEach((key) => {
        if (updated_field_handle && key !== updated_field_handle) return;
        const replicator = this.defaults[key]?.config.sets;
        if (replicator && replicator.length) {
          formData = this.validateReplicators(formData, replicator[0], key);
        } else {
          const field_value = this.field.value[key];
          formData[`${key}`] = {};
          formData[`${key}`].value = Array.isArray(field_value)
            ? field_value.length || null
            : field_value;

          formData[`${key}`].validation =
            this.defaults[key]?.config?.validate?.join("|");
        }
      });

      return formData;
    },
    validateField(formData) {
      if (!this.field?.computed?.config?.validate) return false;
      formData[this.field.uuid] = {
        value: this.field.value,
        validation: this.field?.computed?.config?.validate.join("|"),
      };
      return formData;
    },
    validateFields(updated_field_handle) {
      this.setErrorBag([]);

      let formData = {};

      const is_replicator =
        this.defaults[this.field.config.statamic_settings.handle]?.config?.sets;
      if (is_replicator) {
        formData = this.validateReplicators(formData, is_replicator[0]);
      }

      const is_set = this.field.type === "set";
      if (is_set) {
        formData = this.validateSet(formData, updated_field_handle);
      }

      const is_field = this.field.type === "field" && !is_replicator;
      if (is_field) {
        formData = this.validateField(formData, updated_field_handle);
      }

      if (!formData) return true;

      const { errors } = validateForm({ formData });

      if (Object.keys(errors).length) {
        this.setErrorBag([...this.errorBag, errors]);
      }
    },
    showField() {
      const validator = new Validator(
        this.defaults[this.handle].config,
        this.field.value,
        {},
        "base"
      );
      return validator.passesConditions();
    },
  },
  mounted() {
    bus.$on("validate-fields", (updated_field_handle) => {
      this.validateFields();
    });
  },
};
</script>

<style></style>
