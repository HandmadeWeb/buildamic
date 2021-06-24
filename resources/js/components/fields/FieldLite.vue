<template>
  <div class="buildamic-field" :class="[`${fieldData}-fieldtype`]">
    <label>{{ handle }}</label>
    <component
      :is="`${getFieldDefault().config.type}-fieldtype`"
      :config="getFieldDefault().config"
      :value="value"
      :meta="getFieldDefault().meta"
      :handle="handle"
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
    handle: String,
    type: String,
    fieldDefaults: {
      type: Object,
    },
  },

  data() {
    return {
      fieldData: this.field,
    };
  },
  methods: {
    updateField(key, val) {
      key.value = val;
    },
    getFieldDefault() {
      return this.fieldDefaults[this.handle];
    },
  },
  mounted() {
    console.log("FieldLite", this.field);
  },
};
</script>

<style scoped>
.buildamic-field + .buildamic-field {
  margin-top: 2rem;
}
</style>
