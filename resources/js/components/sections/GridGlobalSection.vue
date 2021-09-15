<template>
  <div
    class="buildamic-section p-2 pl-1 border border-t-4 rounded border-grey-60 bg-grey-30 flex relative "
  >
    <module-controls
      class="pr-1"
      :component="section"
      :value="sections"
      :index="sectionIndex"
      :customSettings="customSettings"
    />

    <div class="flex flex-col justify-center items-center flex-1 text-grey-70">
      <strong class="italic">global section: {{ section.value.title }}</strong>
    </div>
  </div>
</template>

<style scoped></style>

<script>
import ModuleControls from "../shared/ModuleControls";

export default {
  components: { ModuleControls },

  props: {
    section: {
      type: Object,
      required: true,
    },
    sections: {
      type: Array,
    },
    sectionIndex: Number,
  },

  data() {
    return {
      rows: this.section.value ?? [],
      customSettings: {
        add: false,
        clone: false,
      },
    };
  },

  mounted() {
    console.log("global", this.section);
  },
};
</script>
