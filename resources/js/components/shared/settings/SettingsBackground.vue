<template>
  <settings-group heading="Background">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <vue-tabs :id="field.uuid">
          <vue-tab name="Color" selected="selected">
            <div
              :key="color.value"
              class="attribute__inline flex items-center mb-2"
            >
              <label class="mr-2">Background Color: </label>
              <color-fieldtype
                handle="settings_background_color"
                :config="color"
                :meta="null"
                :value="color.value"
                @input="color = $event"
              />
            </div>
          </vue-tab>
          <vue-tab name="Gradient">
            <div class="flex items-center">
              <vue-gpickr v-model="gradient" />
              <div class="ml-2 gradient-controls">
                <label
                  >Current Gradient:
                  {{ getDeep(`inline.background.gradient`) || "Empty" }}</label
                >
                <button class=" flex items-center" @click="gradient = ''">
                  <eva-icon
                    class="flex mr-1 cursor-pointer text-grey-80 pulse"
                    fill="currentColor"
                    name="trash-2"
                    width="18"
                    height="18"
                  ></eva-icon>
                  Clear Gradient
                </button>
              </div>
            </div>
          </vue-tab>
          <vue-tab name="Image">
            <div :key="inline.background.image.value" class="attribute__inline">
              <assets-fieldtype
                :class="getDeep(`inline.background.image`)"
                handle="settings_background_image"
                :config="{
                  mode: 'grid',
                  container: 'assets',
                  restrict: false,
                  allow_uploads: true,
                  max_files: 1,
                  display: 'Assets',
                  type: 'assets',
                  icon: 'assets',
                  listable: 'hidden',
                }"
                :meta="{ data: [], container: 'assets' }"
                :value="getDeep(`inline.background.image`) || []"
                @input="
                  updateField({ path: `inline.background.image`, val: $event })
                "
              />
            </div>
          </vue-tab>
        </vue-tabs>
      </div>
    </div>
  </settings-group>
</template>

<script>
import SettingsGroup from "./SettingsGroup.vue";
import OptionsFields from "../../../mixins/OptionsFields";
import ColorFieldtype from "../../fields/overrides/ColorFieldtype.vue";
import { EvaIcon } from "vue-eva-icons";
import { VueGpickr, LinearGradient } from "vue-gpickr";

const COLOR = 0;
const POSITION = 1;

export default {
  name: "settings-layout",
  props: {
    field: Object,
    fieldDefaults: Object,
  },
  components: {
    EvaIcon,
    SettingsGroup,
    ColorFieldtype,
    VueGpickr,
  },
  data: function() {
    return {
      inline: {
        background: {
          image: {
            value: "",
          },
        },
      },
    };
  },
  computed: {
    color: {
      get() {
        return {
          theme: "nano",
          lock_opacity: false,
          default_color_mode: "HEXA",
          color_modes: ["hex", "rgba", "hsla"],
          display: "Color",
          type: "color",
          icon: "color",
          listable: "hidden",
          value: this.getDeep("inline.background.color") || "",
        };
      },
      set(val) {
        this.updateField({ path: "inline.background.color", val });
      },
    },
    gradient: {
      get() {
        return new LinearGradient(
          this.convertGradientStringToObject(
            this.getDeep(`inline.background.gradient`) || ""
          )
        );
      },
      set(val) {
        this.handleGradient(val);
      },
    },
  },
  methods: {
    stops(stops) {
      return stops.slice().map((stop) => [...stop]);
    },
    orderedStops(stops) {
      return this.stops(stops)
        .slice()
        .sort((a, b) => a[POSITION] - b[POSITION]);
    },
    getGradientString(e) {
      const stops = this.orderedStops(e.stops)
        .map((stop) => `${stop[COLOR].toString()} ${stop[POSITION] * 100}%`)
        .join(",");
      return `linear-gradient(${e.angle}deg, ${stops})`;
    },
    convertGradientStringToObject(string) {
      if (!string) {
        return;
      }
      const type = "linear";
      let data = string
        .match(/\(([^()]+)\)/g)[0]
        .replace(/[()|%]/g, "")
        .split(",");

      const angle = parseInt(
        data
          .shift()
          .match(/\d/g)
          .join()
      );
      const stops = data.map((stop) => {
        const [color, position] = stop.trim().split(" ");
        return [color, position ? position / 100 : 0];
      });

      return {
        type,
        angle,
        stops,
      };
    },
    handleGradient($event) {
      this.updateField({
        path: `inline.background.gradient`,
        val:
          typeof $event === "string" ? $event : this.getGradientString($event),
      });
    },
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
