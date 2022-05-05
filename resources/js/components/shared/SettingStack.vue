<template>
  <div class="module-selector">
    <eva-icon
      class="flex cursor-pointer pulse"
      fill="currentColor"
      name="edit-2-outline"
      width="18"
      height="18"
      @click="toggleStack = true"
    ></eva-icon>
    <stack name="field-stack" v-if="toggleStack" :beforeClose="handleClose">
      <div class="buildamic-settings-stack h-full p-4 bg-white overflow-auto">
        <div class="flex">
          <h2 class="mb-2 text-xl">Settings for {{ admin_label }}</h2>
          <div class="ml-auto">
            <button class="btn-secondary" @click="handleClose">Cancel</button>
            <button class="btn-primary" @click="handleSave">Save</button>
          </div>
        </div>
        <component
          :is="`${componentType}-settings`"
          :field="component"
          :fieldDefaults="fieldDefaults[`${componentType}s`]"
        />
      </div>
    </stack>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import FieldSettings from "../fields/FieldSettings.vue";
import SetSettings from "../sets/SetSettings.vue";
import RowSettings from "../rows/RowSettings.vue";
import ErrorDisplay from "../shared/ErrorDisplay.vue";
import SectionSettings from "../sections/SectionSettings.vue";
import { mapGetters, mapActions } from "vuex";
import OptionsFields from "../../mixins/OptionsFields";

export default {
  props: {
    component: Object,
    value: Array,
    index: Number,
  },
  mixins: [OptionsFields],
  data() {
    return {
      toggleStack: false,
    };
  },
  computed: {
    ...mapGetters(["fieldDefaults", "dirtyFields", "errorBag"]),
    admin_label() {
      return (
        this.component.config?.buildamic_settings?.admin_label ||
        this.component.config.admin_label
      );
    },
    componentType() {
      return this.component.useSettings || this.component.type;
    },
  },
  methods: {
    ...mapActions(["setDirtyFields", "setErrorBag"]),
    handleSave() {
      if (!this.errorBag.length) {
        this.toggleStack = false;
      }
    },
    revertFieldValues() {
      this.dirtyFields.forEach((field) => {
        this.setDeep(field.obj, field.fullPath, field.val);
      });
      this.setDirtyFields([]);
    },
    closeStack() {
      this.toggleStack = false;
      this.setErrorBag([]);
      return true;
    },
    handleClose() {
      if (this.dirtyFields.length) {
        const conf = window.confirm(
          "Are you sure you want to close this modules settings without saving?"
        );
        if (conf) {
          this.revertFieldValues();
          this.closeStack();
        }
        return false;
      }
      this.closeStack();
    },
  },
  components: {
    EvaIcon,
    FieldSettings,
    SetSettings,
    RowSettings,
    SectionSettings,
    ErrorDisplay,
  },
};
</script>

<style></style>
