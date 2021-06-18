<template>
  <div
    class="buildamic-field p-5 bg-red"
    :class="[`${value.config.type}-fieldtype`]"
  >
    <component
      :is="`${value.config.type}-fieldtype`"
      :config="value.config"
      :value="value.value"
      :meta="value.meta"
      :handle="value.config.handle"
      @input="updateField(fieldKey, $event)"
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
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  mounted() {
    console.log(this.value);
  },

  inject: ["fieldDefaults"],
};
</script>
