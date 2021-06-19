<template>
  <div
    class="buildamic-set p-5 bg-red"
    :class="[`${field.config.type}-fieldtype`]"
  >
    <b-field
      v-for="field in field.value"
      :key="field.uuid"
      :field="field"
      :fieldDefaults="setFieldDefaults"
    />
  </div>
</template>

<script>
import BField from "./BField.vue";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: Object,
  },
  components: {
    BField,
  },
  data() {
    return {};
  },
  computed: {
    setFieldDefaults() {
      const test = this.fieldDefaults[this.field.config.handle].fields.reduce(
        (acc, cur) => {
          console.log({ cur });
          acc[cur.handle] = cur;
          return acc;
        },
        {}
      );
      console.log({ test });
      return test;
    },
  },
  methods: {},
  mounted() {
    console.log("SET", this.field);
  },
};
</script>
