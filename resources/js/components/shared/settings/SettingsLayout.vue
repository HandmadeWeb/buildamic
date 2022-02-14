<template>
  <settings-group heading="Layout">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <div class="attributes attributes__inline">
          <slot name="layout-top" />
          <div
            v-for="(option, key) in sizes"
            :key="`${field.uuid}-${key}-${breakpoint}`"
            class="buildamic-field"
          >
            <label>{{ option.display }}</label>
            <component
              :class="breakpoint"
              :is="`${option.type}-fieldtype`"
              :handle="option.handle"
              :key="option.value"
              :config="option"
              :value="getDeep(`inline.${option.handle}.${breakpoint}`, '')"
              @input="
                updateField(
                  {
                    path: `inline.${key}`,
                    val: $event,
                  },
                  true
                )
              "
            />
          </div>

          <div class="buildamic-field flex-wrap flex items-center gap-6">
            <div v-if="displayOption === 'flex'" class="flex items-center mb-2">
              <label class="mr-2">Align Items: </label>
              <alignment-controls
                :options="inline.items.config.options"
                :key="`${inline.items.value}-${breakpoint}`"
                :value="inline.items.value"
                @input="
                  updateField({ path: `inline.items`, val: $event }, true)
                "
              />
            </div>
            <div v-if="displayOption === 'flex'" class="flex items-center mb-2">
              <label class="mr-2">Justify Content: </label>
              <alignment-controls
                :options="inline.justifyContent.config.options"
                :key="`${inline.justifyContent.value}-${breakpoint}`"
                :value="inline.justifyContent.value"
                @input="
                  updateField(
                    { path: `inline.justifyContent`, val: $event },
                    true
                  )
                "
              />
            </div>
            <div v-if="displayOption === ''" class="flex items-center mb-2">
              <label class="mr-2">Place Items: </label>
              <alignment-controls
                :options="inline.placeItems.config.options"
                :key="`${inline.placeItems.value}-${breakpoint}`"
                :value="inline.placeItems.value"
                @input="
                  updateField({ path: `inline.placeItems`, val: $event }, true)
                "
              />
            </div>
            <div class="flex items-center mb-2">
              <label class="mr-2">Display: </label>
              <toggle-controls
                :key="`${inline.display.value}-${breakpoint}`"
                :value="inline.display.value"
                @input="
                  updateField({ path: `inline.display`, val: $event }, true)
                "
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
  data: function () {
    return {
      sizes: {
        width: {
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
          value: "",
        },
        height: {
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
          value: "",
        },
      },
      inline: {
        items: {
          config: {
            options: [
              { value: "items-start", icon: "text-left" },
              { value: "items-center", icon: "text-center" },
              {
                value: "items-end",
                icon: "text-right",
              },
            ],
          },
          value: "",
        },
        placeItems: {
          config: {
            options: [
              { value: "place-items-start", icon: "text-left" },
              { value: "place-items-center", icon: "text-center" },
              {
                value: "place-items-end",
                icon: "text-right",
              },
            ],
          },
          value: "",
        },
        justifyContent: {
          config: {
            options: [
              { value: "justify-start", icon: "text-left" },
              { value: "justify-center", icon: "text-center" },
              {
                value: "justify-end",
                icon: "text-right",
              },
            ],
          },
          value: "",
        },
        display: {
          value: "",
        },
      },
    };
  },

  computed: {
    displayOption() {
      return this.inline.display.value;
    },
  },

  mounted() {
    // Get initial data for inline fields
    if (this?.inline && typeof this?.inline === "object") {
      Object.keys(this.inline).forEach((key) => {
        this.inline[key].value = this.getDeep(
          `inline.${key}.${this.breakpoint}`,
          ""
        );
      });
    }
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
