<template>
  <settings-group heading="Text">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <div class="buildamic-field flex items-center mb-2">
          <label class="mr-2">Alignment :</label>
          <alignment-controls
            :key="`${textAlign.value}-${breakpoint}`"
            :value="textAlign.value"
            @input="textAlign = $event"
          />
        </div>
        <div class="buildamic-field mb-2">
          <label>{{ fontSize.config.display }}</label>
          <select-fieldtype
            :key="`${fontSize.value}-${breakpoint}`"
            :value="fontSize.value"
            :handle="fontSize.config.handle"
            :config="fontSize.config"
            @input="fontSize = $event"
          />
        </div>
        <div class="buildamic-field flex items-center mb-2">
          <label class="mr-2">{{ color.config.display }}:</label>
          <color-fieldtype
            :value="color.value"
            :handle="color.config.handle"
            :config="color.config"
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
  computed: {
    fontSize: {
      get() {
        return {
          value: this.getDeep(`inline.font-size.${this.breakpoint}`) || "N/A",
          reactiveTick: this.reactiveTick,
          config: {
            options: this.getTWClasses("fontSize", "text"),
            handle: "font-size",
            display: "Font Size",
          },
        };
      },
      set($event) {
        this.updateField(
          {
            path: `inline.font-size`,
            val: $event === "none" ? "" : `${this.breakpoint}:${$event}`,
          },
          true
        );
      },
    },
    color: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          config: {
            handle: "color",
            display: "Font Color",
            color_modes: ["hex", "rgba"],
            default_color_mode: "HEXA",
            swatches: [],
          },
          value: this.getDeep(`color`) || "N/A",
        };
      },
      set($event) {
        this.updateField({ path: `color`, val: $event });
      },
    },
    textAlign: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          value: this.getDeep(`inline.text-align.${this.breakpoint}`) || "N/A",
        };
      },
      set($event) {
        this.updateField({ path: `inline.text-align`, val: $event }, true);
      },
    },
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
