<template>
  <settings-group heading="Text">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <div class="attribute__inline mb-2">
          <label>{{ fontSize.display }}</label>
          <select-fieldtype
            :key="`${fontSize.value}-${breakpoint}`"
            :value="fontSize.value"
            :handle="fontSize.handle"
            :config="fontSize"
            @input="fontSize = $event"
          />
        </div>
        <div class="attribute__inline flex items-center mb-2">
          <label class="mr-2">{{ color.display }}:</label>
          <color-fieldtype
            :value="color.value"
            :handle="color.handle"
            :config="color"
            @input="color = $event"
          />
        </div>
      </div>
    </div>
  </settings-group>
</template>

<script>
import SettingsGroup from "./SettingsGroup.vue";
import OptionsFields from "../../../mixins/OptionsFields";
import ColorFieldtype from "../../fields/overrides/ColorFieldtype.vue";

export default {
  name: "settings-layout",
  props: {
    field: Object,
    fieldDefaults: Object,
  },
  components: {
    SettingsGroup,
    ColorFieldtype,
  },
  computed: {
    fontSize: {
      get() {
        return {
          options: this.getTWClasses("fontSize", "text-"),
          handle: "font-size",
          display: "Font Size",
          value: this.getDeep(`inline.font-size.${this.breakpoint}`),
        };
      },
      set(val) {
        this.updateField(
          {
            path: `inline.font-size`,
            val: val,
          },
          true
        );
      },
    },
    color: {
      get() {
        return {
          handle: "color",
          display: "Font Color",
          color_modes: ["hex", "rgba"],
          default_color_mode: "HEXA",
          swatches: [],
          value: this.getDeep("inline.color") || "",
        };
      },
      set(val) {
        this.updateField(
          {
            path: `inline.color`,
            val: val,
          },
          false
        );
      },
    },
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
