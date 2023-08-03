<template>
  <settings-group heading="Text">
    <div class="flex gap-x-4">
      <div class="flex-grow">
        <div class="buildamic-field flex items-center mb-2">
          <label class="mr-2">Alignment :</label>
          <alignment-controls
            :key="`${inline['text-align'].value}-${breakpoint}`"
            :value="getDeep(`inline.text-align.${breakpoint}`)"
            @input="
              updateField({ path: `inline.text-align`, val: $event }, true)
            "
          />
        </div>
        <div class="buildamic-field mb-2">
          <label>{{ inline["font-size"].config.display }}</label>
          <select-fieldtype
            :key="`${inline['font-size'].value}-${breakpoint}`"
            :value="getDeep(`inline.font-size.${breakpoint}`) || 'N/A'"
            :handle="inline['font-size'].config.handle"
            :config="inline['font-size'].config"
            @input="
              updateField({ path: `inline.font-size`, val: $event }, true)
            "
          />
        </div>
        <div class="buildamic-field flex items-center mb-2">
          <label class="mr-2">{{ inline.color.config.display }}:</label>
          <color-fieldtype
            :value="getDeep(`inline.color`) || ''"
            :handle="inline.color.config.handle"
            :config="inline.color.config"
            @input="updateField({ path: `inline.color`, val: $event })"
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
import AlignmentControls from "./AlignmentControls.vue";

export default {
  name: "settings-layout",
  props: {
    field: Object,
    fieldDefaults: Object,
  },
  components: {
    SettingsGroup,
    ColorFieldtype,
    AlignmentControls,
  },
  data() {
    return {
      inline: {
        "font-size": {
          value: "N/A",
          config: {
            options: this.getTWClasses("fontSize", "text"),
            handle: "font-size",
            display: "Font Size",
          },
        },
        color: {
          config: {
            handle: "color",
            display: "Font Color",
            color_modes: ["hex", "rgba"],
            default_color_mode: "HEXA",
            swatches: [],
          },
          value: "N/A",
        },
        "text-align": {
          value: "",
        },
      },
    };
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
