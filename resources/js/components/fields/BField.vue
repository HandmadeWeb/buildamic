<template>
  <div
    class="buildamic-field p-5 bg-red"
    :class="[`${field.config.type}-fieldtype`]"
  >
    <component
      :is="`${field.config.type}-fieldtype`"
      :config="fieldDefaults.fields[field.config.handle].config"
      :value="field.value"
      :meta="fieldDefaults.fields[field.config.handle].meta"
      :handle="field.config.handle"
      @input="updateField(field, $event)"
      @meta-updated="$emit('meta-updated', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
    <button class="btn" v-on:click="removeField(fieldKey)">
      Remove Field
    </button>
  </div>
</template>

<script>
export default {
  props: {
    field: {
      type: Object,
      required: true,
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

  //   mounted() {
  //     console.log("Field", this.field);
  //   },

  inject: ["fieldDefaults"],
};
</script>
