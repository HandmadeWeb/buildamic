<template>
  <div class="buildamic-fieldtype">
    <vue-draggable
      :list="sections"
      :group="{ name: 'sections' }"
      ghost-class="ghost"
      class="flex flex-col gap-3"
    >
      <b-section
        v-for="(section, sectionIndex) in sections"
        :key="section.uuid"
        :section="section"
      >
        <section-controls :value="sections" :index="sectionIndex"
      /></b-section>
    </vue-draggable>
    <section-controls :value="sections" v-if="!sections.length" />
  </div>
</template>

<style scoped></style>

<script>
import Fieldtype from "./fieldtype";
import collect from "collect.js";
import BSection from "../sections/BSection.vue";
import SectionControls from "../sections/SectionControls.vue";
import VueDraggable from "vuedraggable";

export default {
  mixins: [Fieldtype],

  components: {
    BSection,
    SectionControls,
    VueDraggable,
  },

  data() {
    return {
      sections: this.value ?? [],
    };
  },

  provide() {
    return {
      fieldDefaults: this.meta,
    };
  },

  mounted() {
    //console.log(uuidv4());
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.value);
  },
};
</script>
