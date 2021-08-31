<template>
  <div class="options flex col-gap-6">
    <div class="flex-grow">
      <div class="attributes mb-6">
        <div
          v-for="(option, key) in attributes"
          :key="key"
          class="buildamic-field"
        >
          <label>{{ option.display }}</label>
          <component
            class="mb-2"
            :is="`${option.type}-fieldtype`"
            :handle="option.handle"
            :config="option"
            v-model="option.value"
            @input="updateField({ path: `attributes.${key}`, val: $event })"
          />
        </div>
      </div>
      <!-- <div class="user-access mb-2">
        <label>User Access</label>
        <text-fieldtype
          :handle="userId.handle"
          :config="userId"
          v-model="userId.value"
          :meta="null"
          @input="updateField({ path: 'computed.user_access', val: $event })"
        />
      </div> -->
      <div class="admin_label">
        <label>Admin Label</label>
        <text-fieldtype
          :handle="admin_label.handle"
          :config="admin_label"
          v-model="admin_label.value"
          :meta="null"
          @input="updateField({ path: 'admin_label', val: $event })"
        />
      </div>
    </div>
  </div>
</template>

<script>
import OptionsFields from "../../mixins/OptionsFields";
export default {
  components: {},
  props: {
    field: {
      type: Object,
    },
    overRideDefaultOptions: {
      type: Object,
      default: {},
    },
  },
  data() {
    return {
      attributes: {
        class: {
          placeholder: "Add any custom classes to this module",
          input_type: "text",
          type: "text",
          icon: "text",
          handle: "class",
          display: "Class",
          value: this.getDeep("attributes.class") || "",
        },
        id: {
          placeholder: "Add a custom ID to this module",
          input_type: "text",
          type: "text",
          icon: "text",
          handle: "id",
          display: "ID",
          value: this.getDeep("attributes.id") || "",
        },
      },
      //   userId: {
      //     placeholder:
      //       "Add a comma-separated list of user ID's who have access to this field",
      //     input_type: "text",
      //     type: "text",
      //     icon: "text",
      //     handle: "user_access",
      //     display: "USER ID's",
      //     value: this.getDeep("computed.user_access") || "",
      //   },
      admin_label: {
        placeholder: "Admin Label",
        input_type: "text",
        type: "text",
        icon: "text",
        handle: "admin_label",
        value: this.getDeep("admin_label") ?? null,
      },
    };
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
