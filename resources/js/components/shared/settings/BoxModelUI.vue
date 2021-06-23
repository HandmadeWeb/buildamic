<template>
  <div
    @click="focus = true"
    class="boxmodel-ui"
    :class="{ 'boxmodel-ui--focus': focus }"
  >
    <div
      style="position: relative; display: grid; margin-top: 8px; margin-right: 8px; width: 224px; height: 120px; grid-template-columns: 36px 4px 36px 1fr 36px 4px 36px; grid-template-rows: 24px 4px 24px 1fr 24px 4px 24px; outline-style: none; cursor: default; user-select: none;"
    >
      <a @click="lockMarginY = !lockMarginY" class="lockMarginY">
        <eva-icon
          width="15"
          height="15"
          :class="{ margin_y_locked: lockMarginY }"
          name="link-outline"
        />
      </a>
      <a
        :class="{ margin_x_locked: lockMarginX }"
        @click="lockMarginX = !lockMarginX"
        class="lockMarginX"
        ><eva-icon
          width="15"
          height="15"
          :class="{ margin_x_locked: lockMarginX }"
          name="link-outline"
      /></a>
      <div
        width="224"
        height="120"
        style="grid-area: 1 / 1 / -1 / -1; display: grid; grid-template-columns: 36px 1fr 36px; grid-template-rows: 24px minmax(16px, 1fr) 24px; justify-items: center; width: 224px; height: 120px;"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="224"
          height="120"
          class="input-bg"
          style="grid-area: 1 / 1 / -1 / -1;"
        >
          <g style="">
            <g style="">
              <path
                mode="delta"
                fill="currentColor"
                d="
  m1,1
  h223
  l-36,24
  h-151
  l-36,-24z
"
                threshold="1"
                data-automation-id="margin-top-button"
                aria-label="Margin top button"
                delay="0"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                mode="delta"
                fill="currentColor"
                d="
  m223,1
  v119
  l-36,-24
  v-71
  l36,-24z
"
                threshold="1"
                data-automation-id="margin-right-button"
                aria-label="Margin right button"
                delay="0"
              ></path>
            </g>
          </g>
          <g style="">
            <g style="">
              <path
                mode="delta"
                fill="currentColor"
                d="
  m1,119
  h223
  l-36,-24
  h-151
  l-36,24z
"
                threshold="1"
                data-automation-id="margin-bottom-button"
                aria-label="Margin bottom button"
                delay="0"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                mode="delta"
                fill="currentColor"
                d="
  m1,1
  v119
  l36,-24
  v-71
  l-36,-24z
"
                threshold="1"
                data-automation-id="margin-left-button"
                aria-label="Margin left button"
                delay="0"
              ></path>
            </g>
          </g>
          <clipPath id="margin-outer">
            <rect
              x="0"
              y="0"
              width="224"
              height="120"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none;"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#margin-outer)"
            x="0"
            y="0"
            width="224"
            height="120"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: rgb(196 204 212);"
          ></rect>
          <clipPath id="margin-inner">
            <rect
              x="36"
              y="24"
              width="152"
              height="72"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none;"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#margin-inner)"
            x="36"
            y="24"
            width="152"
            height="72"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: rgb(196 204 212);"
          ></rect>
        </svg>
        <component
          v-for="(m, key) in inline.margin"
          :key="m.value + breakpoint"
          :is="`${m.type}-fieldtype`"
          :style="m.style"
          :handle="m.handle"
          :config="m"
          :value="
            getDeep(field.config, `inline.margin.${breakpoint}.${key}`) || 'N/A'
          "
          @input="handleInput('margin', key, $event)"
          class="control-input
        text-center"
          aria-label="Margin right edit"
        />
      </div>
      <div
        width="144"
        height="64"
        style="grid-area: 3 / 3 / span 3 / span 3; display: grid; grid-template-columns: 36px 1fr 36px; grid-template-rows: 24px minmax(16px, 1fr) 24px; justify-items: center; width: 144px; height: 64px;"
      >
        <a
          :class="{ padding_y_locked: lockPaddingY }"
          @click="lockPaddingY = !lockPaddingY"
          class="lockPaddingY"
          ><eva-icon
            width="15"
            height="15"
            :class="{ padding_x_locked: lockPaddingX }"
            name="link-outline"
        /></a>
        <a
          :class="{ padding_x_locked: lockPaddingX }"
          @click="lockPaddingX = !lockPaddingX"
          class="lockPaddingX"
          ><eva-icon
            width="15"
            height="15"
            :class="{ padding_x_locked: lockPaddingX }"
            name="link-outline"
        /></a>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="144"
          height="64"
          class="input-bg"
          style="grid-area: 1 / 1 / -1 / -1;"
        >
          <g style="">
            <g style="">
              <path
                mode="delta"
                fill="currentColor"
                d="
  m1,1
  h143
  l-36,24
  h-71
  l-36,-24z
"
                threshold="1"
                data-automation-id="padding-top-button"
                aria-label="Padding top button"
                delay="0"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                mode="delta"
                fill="currentColor"
                d="
  m143,1
  v63
  l-36,-24
  v-15
  l36,-24z
"
                threshold="1"
                data-automation-id="padding-right-button"
                aria-label="Padding right button"
                delay="0"
              ></path>
            </g>
          </g>
          <g style="">
            <g style="">
              <path
                mode="delta"
                fill="currentColor"
                d="
  m1,63
  h143
  l-36,-24
  h-71
  l-36,24z
"
                threshold="1"
                data-automation-id="padding-bottom-button"
                aria-label="Padding bottom button"
                delay="0"
              ></path>
            </g>
          </g>
          <g>
            <g>
              <path
                mode="delta"
                fill="currentColor"
                d="
  m1,1
  v63
  l36,-24
  v-15
  l-36,-24z
"
                threshold="1"
                data-automation-id="padding-left-button"
                aria-label="Padding left button"
                delay="0"
              ></path>
            </g>
          </g>
          <clipPath id="padding-outer">
            <rect
              x="0"
              y="0"
              width="144"
              height="64"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none;"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#padding-outer)"
            x="0"
            y="0"
            width="144"
            height="64"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: rgb(196 204 212);"
          ></rect>
          <clipPath id="padding-inner">
            <rect
              x="36"
              y="24"
              width="72"
              height="16"
              fill="transparent"
              rx="2"
              ry="2"
              style="pointer-events: none;"
            ></rect>
          </clipPath>
          <rect
            clip-path="url(#padding-inner)"
            x="36"
            y="24"
            width="72"
            height="16"
            fill="transparent"
            rx="2"
            ry="2"
            style="pointer-events: none; stroke-width: 2px; stroke: rgb(196 204 212);"
          ></rect>
        </svg>
        <component
          v-for="(p, key) in inline.padding"
          :key="p.value + breakpoint"
          :is="`${p.type}-fieldtype`"
          :style="p.style"
          :handle="p.handle"
          :config="p"
          :value="
            getDeep(field.config, `inline.padding.${breakpoint}.${key}`) ||
              'N/A'
          "
          @input="handleInput('padding', key, $event)"
          class="control-input text-center"
          aria-label="Padding right edit"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style="grid-area: 3 / 3 / span 3 / span 3; pointer-events: none;"
      >
        <text
          x="6"
          y="4"
          fill="#a6a6a6"
          font-style="italic"
          font-weight="bold"
          font-size="8"
          dominant-baseline="hanging"
        >
          PADDING
        </text></svg
      ><svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        style="grid-area: 1 / 1 / -1 / -1; pointer-events: none;"
      >
        <text
          x="6"
          y="4"
          fill="#a6a6a6"
          font-style="italic"
          font-weight="bold"
          font-size="8"
          dominant-baseline="hanging"
        >
          MARGIN
        </text>
      </svg>
    </div>
  </div>
</template>

<script>
import OptionsFields from "../../../mixins/OptionsFields";
import { EvaIcon } from "vue-eva-icons";
export default {
  props: {
    field: Object,
  },
  data() {
    return {
      focus: false,
      lockMarginY: false,
      lockMarginX: false,
      lockPaddingY: false,
      lockPaddingX: false,
      inline: {
        margin: {
          mt: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("margin", "mt"),
            handle: "mt",
            display: "Margin Top",
            multiple: false,
            value: "N/A",
            style: "grid-area: 1 / 2 / 2 / 3;",
          },
          mr: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("margin", "mr"),
            handle: "mr",
            display: "Margin Right",
            value: "N/A",
            style: "grid-area: 2 / 3 / 3 / 4;",
          },
          mb: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("margin", "mb"),
            handle: "mb",
            display: "Margin Bottom",
            value: "N/A",
            style: "grid-area: 3 / 2 / 4 / 3;",
          },
          ml: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("margin", "ml"),
            handle: "ml",
            display: "Margin Left",
            value: "N/A",
            style: 'grid-area: 2 / 1 / 3 / 2;"',
          },
        },
        padding: {
          pt: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("padding", "pt"),
            handle: "paddingTop",
            display: "Padding Top",
            value: "N/A",
            style: "grid-area: 1 / 2 / 2 / 3;",
          },
          pr: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("padding", "pr"),
            handle: "paddingRight",
            display: "Padding Right",
            value: "N/A",
            style: "grid-area: 2 / 3 / 3 / 4;",
          },
          pb: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("padding", "pb"),
            handle: "paddingBottom",
            display: "Padding Bottom",
            value: "N/A",
            style: "grid-area: 3 / 2 / 4 / 3;",
          },
          pl: {
            cast_booleans: false,
            clearable: false,
            listable: "hidden",
            taggable: false,
            push_tags: false,
            type: "select",
            icon: "select",
            options: this.getTWClasses("padding", "pl"),
            handle: "paddingLeft",
            display: "Padding Left",
            value: "N/A",
            style: 'grid-area: 2 / 1 / 3 / 2;"',
          },
        },
      },
    };
  },
  mixins: [OptionsFields],
  components: {
    EvaIcon,
  },

  methods: {
    handleInput(setting, key, value) {
      if (!key) {
        return;
      }
      if (setting === "margin") {
        if (this.lockMarginY && this.lockMarginX) {
          this.inline.margin.mt.value = value;
          this.inline.margin.mr.value = value;
          this.inline.margin.mb.value = value;
          this.inline.margin.ml.value = value;
        } else if (this.lockMarginY) {
          if (key === "mt" || key === "mb") {
            this.inline.margin.mt.value = value;
            this.inline.margin.mb.value = value;
          }
        } else if (this.lockMarginX) {
          if (key === "ml" || key === "mr") {
            this.inline.margin.ml.value = value;
            this.inline.margin.mr.value = value;
          }
        }

        this.inline.margin[key].value = value;
      }
      if (setting === "padding") {
        if (this.lockPaddingY && this.lockPaddingX) {
          this.inline.padding.pt.value = value;
          this.inline.padding.pr.value = value;
          this.inline.padding.pb.value = value;
          this.inline.padding.pl.value = value;
        } else if (this.lockPaddingY) {
          if (key === "pt" || key === "pb") {
            this.inline.padding.pt.value = value;
            this.inline.padding.pb.value = value;
          }
        } else if (this.lockPaddingX) {
          if (key === "pl" || key === "pr") {
            this.inline.padding.pl.value = value;
            this.inline.padding.pr.value = value;
          }
        }

        this.inline.padding[key].value = value;
      }

      const newVals = Object.keys(this.inline[setting]).reduce((acc, cur) => {
        if (this.inline[setting][cur].value === value) {
          acc[cur] = this.inline[setting][cur].value;
        }
        return acc;
      }, {});

      const oldVals = this.getDeep(
        this.field.config,
        `inline.${setting}.${this.breakpoint}`
      );

      const payload = { ...oldVals, ...newVals };

      this.$emit("input", {
        path: `inline.${setting}`,
        key,
        val: payload,
        vm: this,
      });
    },
    checkOutsideClick(e) {
      if (!e.target.closest(".boxmodel-ui")) {
        this.focus = false;
      }
    },
  },
  mounted() {
    window.addEventListener("click", this.checkOutsideClick);
  },
  destroy() {
    window.removeEventListener("click", this.checkOutsideClick);
  },
};
</script>

<style>
.lockPaddingY,
.lockPaddingX,
.lockMarginY,
.lockMarginX {
  z-index: 1000;
  position: absolute;
}

.lockMarginY,
.lockMarginX {
  top: 1px;
  right: 5rem;
}
.lockMarginY,
.lockPaddingY {
  transform: rotate(90deg);
  transform-origin: center;
}
.lockMarginX,
.lockPaddingX {
  transform: translate(1.3rem, 0.16rem);
  transform-origin: center;
}

.lockPaddingY,
.lockPaddingX {
  top: 1.8rem;
  right: 5rem;
}

.margin_y_locked,
.margin_x_locked,
.padding_y_locked,
.padding_x_locked {
  color: red !important;
  fill: red;
}

.control-input {
  cursor: default;
  user-select: none;
  font-size: 10px;
  letter-spacing: -0.2px;
  display: flex;
  background: transparent;
  max-width: 100%;
  box-sizing: content-box;
  place-self: center;
  position: relative;
  opacity: 1;
  align-items: center;
  justify-content: center;
}

.control-input .input-group {
  max-height: 14px;
  width: fit-content;
}

.control-input input {
  text-align: center;
  background: none;
  border: none;
}

.input-bg {
  color: #fafcff;
}

.boxmodel-ui .toggle.vs__open-indicator {
  display: none;
}

.boxmodel-ui .v-select.vs--single.vs--unsearchable .vs__selected-options {
  border: none;
  background: none;
  align-items: center;
  padding: 0 !important;
}

.boxmodel-ui {
  transition: all 0.4s ease;
}

.boxmodel-ui--focus {
  transform: scale(1.5);
}
</style>
