<template>
  <div class="breakpoint-switcher flex justify-center mb-2 sticky z-top">
    <ul class="flex col-gap-3 rounded border border-dashed p-2 bg-white">
      <li
        class="breakpoint-option px-1 cursor-pointer"
        :class="{ 'bg-grey-40  rounded': breakpoint === option }"
        @click="switchBreakpoint(option)"
        v-for="option in config.options"
        :key="option"
      >
        {{ option }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "breakpoint-switcher",
  data() {
    return {
      config: {
        options: {
          xs: "xs",
          sm: "sm",
          md: "md",
          lg: "lg",
          xl: "xl",
        },
        inline: false,
        cast_booleans: false,
        display: "Radio",
        type: "radio",
        icon: "radio",
        listable: true,
        handle: "breakpoint-switcher",
      },
    };
  },
  computed: {
    ...mapGetters(["breakpoint"]),
  },
  methods: {
    ...mapActions(["switchBreakpoint"]),
  },
  beforeDestroy() {
    this.switchBreakpoint("xs");
  },
};
</script>
<style scoped>
.breakpoint-option--active {
  background: red;
}
.sticky {
  background: none;
  padding: 0;
  margin: 0;
}
</style>
