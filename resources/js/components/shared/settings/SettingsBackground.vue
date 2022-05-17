<template>
  <settings-group heading="Background">
    <div class="flex col-gap-4">
      <div class="flex-grow">
        <vue-tabs :id="field.uuid">
          <vue-tab name="Color" selected="selected">
            <div
              :key="inline.background.color.value"
              class="buidlamic-field flex items-center mb-2"
            >
              <label class="mr-2">Background Color: </label>
              <color-fieldtype
                handle="settings_background_color"
                :config="inline.background.color.config"
                :meta="null"
                :value="inline.background.color.value"
                @input="
                  updateField({ path: 'inline.background.color', val: $event })
                "
              />
            </div>
          </vue-tab>
          <vue-tab name="Gradient">
            <div class="flex items-center">
              <toggle-fieldtype
                :value="gradientToggle"
                @input="toggleGradient($event)"
                :config="{
                  handle: 'gradient-enabled',
                  type: 'toggle',
                }"
              />
              <vue-gpickr
                v-if="gradientToggle"
                :class="{ disabled: gradientEnabled }"
                disabled
                :value="gradient"
                @input="gradient = $event"
              />
              <div class="ml-2 gradient-controls">
                <label>
                  {{ getDeep(`inline.background.gradient.value`) || "" }}</label
                >
                <button class="flex items-center" @click="gradient = ''">
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
            <div class="gradient-controls__toggle"></div>
          </vue-tab>
          <vue-tab name="Image">
            <div :key="inline.background.image.value" class="buidlamic-field">
              <assets-fieldtype
                handle="settings_background_image"
                :config="inline.background.image.config"
                :meta="undefined"
                :value="inline.background.image.value"
                @input="
                  updateField({
                    type: 'asset',
                    path: 'inline.background.image.value',
                    val: $event,
                  })
                "
                @meta-updated="
                  updateMeta({
                    path: `inline.background.image.meta`,
                    val: $event,
                  })
                "
              />
            </div>
          </vue-tab>
          <vue-tab name="Video">
            <div
              :key="inline.background.video.mp4.value"
              class="buidlamic-field mb-6"
            >
              MP4 version:
              <assets-fieldtype
                handle="settings_background_video_mp4"
                :config="inline.background.video.mp4.config"
                :meta="undefined"
                :value="inline.background.video.mp4.value"
                @input="
                  updateField({
                    type: 'asset',
                    path: 'inline.background.video.mp4',
                    val: $event,
                  })
                "
                @meta-updated="
                  updateMeta({
                    path: `inline.background.video.mp4.meta`,
                    val: $event,
                  })
                "
              />
            </div>
            <div
              :key="inline.background.video.webm.value"
              class="buidlamic-field"
            >
              webm version:
              <assets-fieldtype
                handle="settings_background_video_webm"
                :config="inline.background.video.webm.config"
                :meta="undefined"
                :value="inline.background.video.webm.value"
                @input="
                  updateField({
                    type: 'asset',
                    path: 'inline.background.video.webm',
                    val: $event,
                  })
                "
                @meta-updated="
                  updateMeta({
                    path: `inline.background.video.webm.meta`,
                    val: $event,
                  })
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
  data: function () {
    return {
      gradientToggle: false,
      inline: {
        background: {
          color: {
            config: {
              theme: "nano",
              lock_opacity: false,
              default_color_mode: "HEXA",
              color_modes: ["hex", "rgba", "hsla"],
              display: "Color",
              type: "color",
              icon: "color",
              listable: "hidden",
            },
            value: this.getDeep("inline.background.color") || "",
          },
          image: {
            config: {
              mode: "grid",
              container: "assets",
              restrict: false,
              allow_uploads: true,
              max_files: 1,
              display: "Assets",
              type: "assets",
              icon: "assets",
              listable: "hidden",
            },
            value: this.getDeep(`inline.background.image.value`) || [],
          },
          video: {
            mp4: {
              config: {
                mode: "grid",
                container: "assets",
                restrict: false,
                allow_uploads: true,
                max_files: 1,
                display: "Assets",
                instructions: "Upload the MP4 version of your video here",
                type: "assets",
                icon: "assets",
                listable: "hidden",
              },
              value: this.getDeep(`inline.background.video.mp4`) || [],
            },
            webm: {
              config: {
                mode: "grid",
                container: "assets",
                restrict: false,
                allow_uploads: true,
                max_files: 1,
                display: "Assets",
                instructions: "Upload the WebM version of your video here",
                type: "assets",
                icon: "assets",
                listable: "hidden",
              },
              value: this.getDeep(`inline.background.video.webm`) || [],
            },
          },
        },
      },
    };
  },
  computed: {
    gradient: {
      get() {
        return new LinearGradient(
          this.convertGradientStringToObject(
            this.getDeep(`inline.background.gradient.value`) ||
              "linear-gradient(0deg, #000 0%,#fff 100%)"
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

      const angle = parseInt(data.shift());
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
    toggleGradient(val) {
      this.gradientToggle = val;
    },
    handleGradient($event) {
      if (!this.gradientToggle) {
        return;
      }
      let val = {
        value:
          typeof $event === "string" ? $event : this.getGradientString($event),
      };
      this.updateField({
        path: `inline.background.gradient`,
        val,
      });
    },
  },
  mounted() {
    const val = this.getDeep(`inline.background.gradient.value`);
    if (val) {
      this.gradientToggle = true;
    }
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
