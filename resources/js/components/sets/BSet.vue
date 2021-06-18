<template>
  <div
    class="buildamic-set p-5 bg-red"
    :class="[`${field.config.type}-fieldtype`]"
  >
    <b-field v-for="field in field.fields" :key="field.uuid" :field="field" />
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
};
</script>
