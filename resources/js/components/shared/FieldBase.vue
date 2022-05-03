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
    validateReplicators(formData) {
      const handle = this.field.config.statamic_settings.handle;

      this.field.value[handle].forEach((_, i) => {
        return replicator[0].fields.forEach((field) => {
          if (!field.validate) return false;
          const value = this.field.value[i][field.handle];
          formData[`${this.field.uuid}-${field.handle}-${i}`] = {};

          formData[`${this.field.uuid}-${field.handle}-${i}`].value =
            Array.isArray(value) ? value.length || null : value;
          formData[`${this.field.uuid}-${field.handle}-${i}`].validation =
            field.validate.join("|");
        });
      });

      return formData;
    },
    validateSet(formData) {
      const handle = this.field.config.statamic_settings.handle;
      const values = this.field.value[handle];
      const sets = this.field.computed?.config[handle].sets;

      values.forEach((_, i) => {
        sets[0].fields.forEach((field) => {
          if (!field.validate) return;
          const value = this.field.value[handle][i][field.handle];
          formData[`${field.handle}-${i}`] = {};

          formData[`${field.handle}-${i}`].value = Array.isArray(value)
            ? value.length || null
            : value;
          formData[`${field.handle}-${i}`].validation =
            field.validate.join("|");
        });
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
    validateFields() {
      this.setErrorBag([]);

      let formData = {};

      const is_replicator = this.field?.computed?.config?.replicators;
      if (is_replicator) {
        formData = this.validateReplicators(is_replicator, formData);
      }

      const is_set = this.field.type === "set";
      if (is_set) {
        formData = this.validateSet(formData);
      }

      const is_field = this.field.type === "field";
      if (is_field) {
        formData = this.validateField(formData);
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
    bus.$on("validate-fields", () => {
      this.validateFields();
    });
  },
};
</script>

<style></style>
