<template>
  <div class="module-selector">
    <eva-icon
      class="flex cursor-pointer text-grey-80 pulse"
      fill="currentColor"
      name="menu"
      width="18"
      height="18"
      @click="toggleStack = true"
    ></eva-icon>
    <stack name="field-stack" v-if="toggleStack" @closed="toggleStack = false">
      <div class="h-full p-4 bg-white overflow-auto">
        <h2 class="mb-2 text-xl">
          Settings for {{ component.config.admin_label }}
        </h2>

        <component
          :is="`b-${component.type}`"
          :field="component"
          :fieldDefaults="fieldDefaults[`${component.type}s`]"
        />
      </div>
    </stack>
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import BField from "../fields/BField.vue";
import BSet from "../fields/BSet.vue";

export default {
  props: {
    component: Object,
    value: Array,
    index: Number,
  },
  data() {
    return {
      toggleStack: false,
    };
  },
  inject: ["fieldDefaults"],
  components: {
    EvaIcon,
    BField,
    BSet,
  },
  methods: {},
  mounted() {
    console.log(this.fieldDefaults);
  },
};
</script>

<style></style>
