<template>
  <div
    class="buildamic-field"
    :class="[`${fieldData.config.statamic_settings.field.type}-fieldtype`]"
  >
    <label>{{ fieldDisplay }}</label>
    <component
      :is="`${fieldData.config.statamic_settings.field.type}-fieldtype`"
      :config="fieldDefaults[fieldData.config.statamic_settings.handle].config"
      :value="fieldData.value"
      :meta="fieldDefaults[fieldData.config.statamic_settings.handle].meta"
      :handle="fieldData.config.statamic_settings.handle"
      @input="updateField(field, $event)"
      @meta-updated="$emit('meta-updated', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
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
  },
  methods: {
    updateField(key, val) {
      key.value = val;
    },
  },
  mounted() {
    console.log("fieldData", this.fieldData);
  },
};
</script>

<style scoped>
.buildamic-field + .buildamic-field {
  margin-top: 2rem;
}
</style>
