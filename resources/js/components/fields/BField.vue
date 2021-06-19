<template>
  <div class="buildamic-field" :class="[`${field.config.type}-fieldtype`]">
    <component
      :is="`${field.config.type}-fieldtype`"
      :config="fieldDefaults[field.config.handle || field.handle].config"
      :value="field.value"
      :meta="fieldDefaults[field.config.handle || field.handle].meta"
      :handle="field.config.handle"
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
    return {};
  },

  methods: {
    updateField(key, val) {
      console.log(val);
      key.value = val;
    },
  },

  mounted() {
    console.log(this.fieldDefaults);
  },
};
</script>
