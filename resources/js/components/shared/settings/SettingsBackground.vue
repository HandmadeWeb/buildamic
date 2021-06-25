<template>
  <settings-group heading="Background">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <div
          :key="inline.backgroundColor.value + breakpoint"
          class="attributes__inline mb-2"
        >
          <color-fieldtype
            :handle="inline.backgroundColor.handle"
            :config='{"theme":"nano","lock_opacity":false,"default_color_mode":"HEXA","color_modes":["hex","rgba","hsla"],"display":"Color","type":"color","icon":"color","listable":"hidden"}'
            :meta="null"
            :value="getDeep(`inline.backgroundColor.${breakpoint}`) || ''"
            @input="
              updateField({ path: `inline.backgroundColor`, val: $event }, true)
            "
          />
        </div>
        <div
          :key="inline.backgroundImage.value + breakpoint"
          class="attributes__inline"
        >
          <assets-fieldtype
            :class="getDeep(`inline.backgroundImage`)"
            :handle="inline.backgroundImage.handle"
            :config='{"mode":"grid","container":"assets","restrict":false,"allow_uploads":true,"max_files":1,"display":"Assets","type":"assets","icon":"assets","listable":"hidden"}'
            :meta='{"data":[],"container":"assets"}'
            :value="getDeep(`inline.backgroundImage`) || []"
            @input="
              updateField({ path: `inline.backgroundImage`, val: $event })
            "
          />
        </div>
      </div>
    </div>
  </settings-group>
</template>

<script>
import SettingsGroup from "./SettingsGroup.vue";
import OptionsFields from "../../../mixins/OptionsFields";

export default {
  name: "settings-layout",
  props: {
    field: Object,
    fieldDefaults: Object,
  },
  components: {
    SettingsGroup,
  },
  data: function() {
    return {
      inline: {
        backgroundColor: {
          handle: "background_color",
          display: "Background Color",
        },
        backgroundImage: {
          handle: "background_image",
          display: "Background Image",
        },
      },
    };
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
