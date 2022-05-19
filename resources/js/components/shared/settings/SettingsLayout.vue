<template>
  <settings-group heading="Layout">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <div class="attributes attributes__inline">
          <slot name="layout-top" />
          <div
            :key="`${field.uuid}-width-${breakpoint}`"
            class="buildamic-field"
          >
            <label>Width</label>
            <component
              :class="breakpoint"
              :is="`select-fieldtype`"
              :handle="widthOption.handle"
              :config="widthOption"
              :value="widthOption.value"
              @input="widthOption = $event"
            />
          </div>

          <div
            :key="`${field.uuid}-height-${breakpoint}`"
            class="buildamic-field"
          >
            <label>Height</label>
            <component
              :class="breakpoint"
              :is="`select-fieldtype`"
              :handle="heightOption.handle"
              :config="heightOption"
              :value="heightOption.value"
              @input="heightOption = $event"
            />
          </div>

          <div class="buildamic-field">
            <div class="flex items-center mb-2">
              <label class="mr-2">Display: </label>
              <toggle-controls
                :value="displayOption"
                @input="displayOption = $event"
              />
            </div>
          </div>

          <div
            v-if="displayOption && !displayOption.includes('block')"
            class="buildamic-field flex-wrap flex items-center gap-x-4"
          >
            <div
              v-if="displayOption.includes('flex')"
              class="flex items-center mb-2"
            >
              <label class="mr-2">Align Items: </label>
              <component
                :class="breakpoint"
                :is="`select-fieldtype`"
                :handle="itemsOption.handle"
                :config="itemsOption"
                :value="itemsOption.value"
                @input="itemsOption = $event"
              />
            </div>
            <div
              v-if="displayOption.includes('flex')"
              class="flex items-center mb-2"
            >
              <label class="mr-2">Justify Content: </label>
              <component
                :class="breakpoint"
                :is="`select-fieldtype`"
                :handle="justifyContentOption.handle"
                :config="justifyContentOption"
                :value="justifyContentOption.value"
                @input="justifyContentOption = $event"
              />
            </div>
            <div class="flex items-center mb-2">
              <label class="mr-2">Place Items: </label>
              <component
                :class="breakpoint"
                :is="`select-fieldtype`"
                :handle="placeItemsOption.handle"
                :config="placeItemsOption"
                :value="placeItemsOption.value"
                @input="placeItemsOption = $event"
              />
            </div>
            <div class="flex items-center mb-2">
              <label class="mr-2">Gap: </label>
              <component
                :is="'text-fieldtype'"
                :handle="gapOption.handle"
                :config="gapOption"
                :value="gapOption.value"
                @input="gapOption = $event"
              />
            </div>
          </div>

          <slot name="layout-bottom" />
        </div>
      </div>
      <BoxModelUI :field="field" />
    </div>
  </settings-group>
</template>

<script>
import SettingsGroup from "./SettingsGroup.vue";
import BoxModelUI from "./BoxModelUI.vue";
import OptionsFields from "../../../mixins/OptionsFields";
import AlignmentControls from "./AlignmentControls.vue";
import ToggleControls from "./ToggleControls.vue";

export default {
  name: "settings-layout",
  props: {
    field: Object,
  },
  components: {
    SettingsGroup,
    BoxModelUI,
    AlignmentControls,
    ToggleControls,
  },

  computed: {
    displayOption: {
      get() {
        const reactiveTick = this.reactiveTick;
        return this.getDeep(`inline.display.${this.breakpoint}`) || "";
      },
      set(value) {
        this.updateField({ path: `inline.display`, val: value }, true);
      },
    },
    widthOption: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          cast_booleans: false,
          clearable: false,
          listable: "hidden",
          taggable: false,
          push_tags: false,
          searchable: true,
          type: "select",
          icon: "select",
          options: this.getTWClasses("width", "w"),
          handle: "width",
          display: "Width",
          value: this.getDeep(`inline`)?.width?.[this.breakpoint] ?? "",
        };
      },
      set(value) {
        this.updateField({ path: `inline.width`, val: value }, true);
      },
    },
    heightOption: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          cast_booleans: false,
          clearable: false,
          listable: "hidden",
          taggable: false,
          push_tags: false,
          searchable: true,
          type: "select",
          icon: "select",
          options: this.getTWClasses("height", "h"),
          handle: "height",
          display: "Height",
          value: this.getDeep(`inline`)?.height?.[this.breakpoint] ?? "",
        };
      },
      set(value) {
        this.updateField({ path: `inline.height`, val: value }, true);
      },
    },
    itemsOption: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          cast_booleans: false,
          clearable: false,
          listable: "hidden",
          taggable: false,
          push_tags: false,
          searchable: true,
          type: "select",
          icon: "select",
          options: {
            none: "N/A",
            "items-start": "Items Start",
            "items-end": "Items End",
            "items-center": "Items Center",
            "items-baseline": "Items Baseline",
            "items-stretch": "Items Stretch",
          },
          handle: "items",
          display: "Items",
          value: this.getDeep(`inline`)?.items?.[this.breakpoint] ?? "",
        };
      },
      set(value) {
        this.updateField({ path: `inline.items`, val: value }, true);
      },
    },
    justifyContentOption: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          cast_booleans: false,
          clearable: false,
          listable: "hidden",
          taggable: false,
          push_tags: false,
          searchable: true,
          type: "select",
          icon: "select",
          options: {
            none: "N/A",
            "justify-start": "Justify Start",
            "justify-end": "Justify End",
            "justify-center": "Justify Center",
            "justify-between": "Justify Between",
            "justify-around": "Justify Around",
            "justify-evenly": "Justify Evenly",
          },
          handle: "justify-content",
          display: "Justify Content",
          value:
            this.getDeep(`inline`)?.justifyContent?.[this.breakpoint] ?? "",
        };
      },
      set(value) {
        this.updateField({ path: `inline.justifyContent`, val: value }, true);
      },
    },
    placeItemsOption: {
      get() {
        return {
          reactiveTick: this.reactiveTick,
          cast_booleans: false,
          clearable: false,
          listable: "hidden",
          taggable: false,
          push_tags: false,
          searchable: true,
          type: "select",
          icon: "select",
          options: {
            none: "N/A",
            "place-items-start": "Place Items Start",
            "place-items-end": "Place Items End",
            "place-items-center": "Place Items Center",
            "place-items-stretch": "Place Items Stretch",
          },
          handle: "place-items",
          display: "Place Items",
          value: this.getDeep(`inline`)?.placeItems?.[this.breakpoint] ?? "",
        };
      },
      set(value) {
        this.updateField({ path: `inline.placeItems`, val: value }, true);
      },
    },
    gapOption: {
      get() {
        return {
          placeholder: "Gap between items (both horizontal and vertical)",
          input_type: "text",
          type: "text",
          icon: "text",
          handle: "gap",
          display: "Gap",
          value: this.getDeep(`inline`)?.gap?.[this.breakpoint],
        };
      },
      set(value) {
        this.updateField({ path: `inline.gap`, val: value }, true);
      },
    },
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
