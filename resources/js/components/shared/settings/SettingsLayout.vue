<template>
  <settings-group heading="Layout">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <div class="attributes__inline">
          <div
            v-for="(option, key) in inline"
            :key="`${field.uuid}-${key}-${breakpoint}`"
            class="attribute__inline"
          >
            <label>{{ option.display }}</label>
            <component
              class="mb-2"
              :class="breakpoint"
              :is="`${option.type}-fieldtype`"
              :handle="option.handle"
              :config="option"
              :value="
                getDeep(field.config, `inline.${option.handle}.${breakpoint}`)
              "
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
        </div>
      </div>
      <BoxModelUI :field="field" @input="updateField($event, true)" />
    </div>
  </settings-group>
</template>

<script>
import SettingsGroup from "./SettingsGroup.vue";
import BoxModelUI from "./BoxModelUI.vue";
import OptionsFields from "../../../mixins/OptionsFields";

export default {
  name: "settings-layout",
  props: {
    field: Object,
  },
  components: {
    SettingsGroup,
    BoxModelUI,
  },
  data: function() {
    return {
      inline: {
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
    };
  },
  mixins: [OptionsFields],
};
</script>

<style></style>