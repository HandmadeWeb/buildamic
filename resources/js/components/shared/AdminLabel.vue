<template>
  <div class="admin_label mb-4">
    <element-container>
      <publish-field
        :handle="adminLabel.handle"
        :config="adminLabel"
        :meta="null"
        :value="adminLabel.value"
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
  data: function () {
    return {
      adminLabel: {
        display: "Admin Label",
        placeholder: "Admin Label",
        input_type: "text",
        instructions:
          "Change the label on this module to make it easier to identify in the admin.",
        type: "text",
        icon: "text",
        handle: "admin_label",
        value: this.getDeep("admin_label") ?? null,
      },
    };
  },
};
</script>

<style></style>
