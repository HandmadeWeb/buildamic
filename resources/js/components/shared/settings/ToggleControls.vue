<template>
  <div class="alignment-controls flex justify-center">
    <ul
      class="
        flex
        items-center
        col-gap-3
        rounded
        border border-dashed
        p-2
        bg-white
      "
    >
      <li
        class="breakpoint-option px-1 cursor-pointer"
        :class="{
          'bg-grey-40  rounded':
            breakpoint === 'xs'
              ? selected === option.value
              : selected === `${breakpoint}:${option}`,
        }"
        @click="switchOption(option.value)"
        v-for="option in config.options"
        :key="`${option.value}-${selected}`"
      >
        <eva-icon
          v-if="option.icon"
          :title="option.label"
          :name="option.icon"
          animation="pulse"
        ></eva-icon>
        <span v-else v-text="option.label" />
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { EvaIcon } from "vue-eva-icons";

export default {
  name: "Toggle-controls",
  props: {
    value: String,
    options: {
      type: Array,
      default: () => [
        { value: "block", icon: "cube", label: "Block" },
        { value: "grid", icon: "grid", label: "Grid" },
        { value: "flex", icon: "expand", label: "Flex" },
      ],
    },
  },
  data() {
    return {
      config: {
        options: this.options,
      },
    };
  },
  components: {
    EvaIcon,
  },
  computed: {
    ...mapGetters(["breakpoint"]),
    selected() {
      return this.value;
    },
  },
  methods: {
    switchOption(option) {
      if (this.breakpoint === "xs") {
        if (option === this.selected) {
          return this.$emit("input", "");
        }
        return this.$emit("input", option);
      }
      if (`${this.breakpoint}:${option}` === this.selected) {
        return this.$emit("input", "");
      }
      return this.$emit("input", `${this.breakpoint}:${option}`);
    },
  },
};
</script>
