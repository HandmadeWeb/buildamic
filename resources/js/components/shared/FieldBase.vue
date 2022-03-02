<template>
  <div v-if="showField()">
    <slot />
  </div>
</template>

<script>
import Validator from "../../field-conditions/Validator";
export default {
  props: {
    field: Object,
    handle: String,
    defaults: Object,
  },
  methods: {
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
};
</script>

<style></style>
