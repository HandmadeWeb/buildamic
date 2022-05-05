<template>
  <div class="admin_label mb-4">
    <element-container>
      <publish-field
        :handle="adminLabelOption.handle"
        :config="adminLabelOption"
        :meta="null"
        :value="adminLabelOption.value"
        @input="updateField({ path: 'admin_label', val: $event })"
      />
    </element-container>
  </div>
</template>

<script>
import OptionsFields from "../../mixins/OptionsFields";
export default {
  props: {
    field: Object,
  },
  mixins: [OptionsFields],
  computed: {
    adminLabelOption: {
      get() {
        return {
          display: "Admin Label",
          placeholder: "Admin Label",
          input_type: "text",
          instructions:
            "Change the label on this module to make it easier to identify in the admin.",
          type: "text",
          icon: "text",
          handle: "admin_label",
          value: this.getDeep("admin_label"),
        };
      },
      set(value) {
        this.updateField({ path: "admin_label", val: value });
      },
    },
  },
};
</script>

<style></style>
