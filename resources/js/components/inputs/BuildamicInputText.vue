<template>
  <div>
    <text-fieldtype
      :config="config"
      :handle="handle"
      :value="
        getDeep(`${path + (responsive ? '.' + breakpoint : '')}`) || 'N/A'
      "
      :meta="null"
      @input="handleInput"
    />
  </div>
</template>

<script>
import OptionsFields from "../../mixins/OptionsFields";
export default {
  name: "buildamic-input-text",
  props: {
    field: Object,
    config: Object,
    handle: String,
    path: String,
    responsive: Boolean,
  },
  mixins: [OptionsFields],
  methods: {
    handleInput(e) {
      this.updateField({
        path: this.path + (this.responsive ? "." + this.breakpoint : ""),
        val: e,
      });
    },
  },
  mounted() {
    console.log(this.field);
  },
};
</script>

<style></style>
