<template>
  <div class="buildamic-field" :class="[`${fieldData.config.type}-fieldtype`]">
    <label>{{ fieldDisplay }}</label>
    <component
      :is="`${fieldData.config.type}-fieldtype`"
      :config="
        fieldDefaults[fieldData.config.handle || fieldData.handle].config
      "
      :value="fieldData.value"
      :meta="fieldDefaults[fieldData.config.handle || fieldData.handle].meta"
      :handle="fieldData.config.handle"
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
        this.fieldData.config.handle ||
        this.fieldDefaults[
          this.fieldData.config.handle || this.fieldData.handle
        ].config.display
      );
    },
  },
  methods: {
    updateField(key, val) {
      key.value = val;
    },
  },
  mounted() {
    console.log(this.fieldData);
  },
};
</script>

<style scoped>
.buildamic-field + .buildamic-field {
  margin-top: 2rem;
}
</style>
