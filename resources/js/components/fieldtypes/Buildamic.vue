<template>
  <div class="buildamic-fieldtype-container">
    <div
      v-for="(section, sectionKey) in value.sections"
      :key="sectionKey"
      class="py-2"
    >
      <div v-if="value.sections.length" class="p-5 bg-blue">
        <b-section :section="section" />
      </div>
    </div>
    <section-controls v-if="!value.sections.length" />
  </div>
</template>

<style scoped></style>

<script>
import Fieldtype from "./fieldtype";
import { v4 as uuidv4 } from "uuid";
import collect from "collect.js";
import BSection from "../sections/BSection.vue";
import SectionControls from "../sections/SectionControls.vue";

export default {
  mixins: [Fieldtype],

  components: {
    BSection,
    SectionControls,
  },

  data() {
    return {};
  },

  provide() {
    return {
      fields: collect(this.config.fields),
      fieldsets: collect(this.config.sets),
      meta: collect(this.meta),
      sections: this.value.sections,
    };
  },

  methods: {
    getConfig(key) {
      return this.value.config[key] ?? null;
    },

    addSection() {
      this.value.sections.push({
        uuid: uuidv4(),
        type: "section",
        rows: [],
      });

      this.update(this.value);
    },

    removeSection(sectionKey) {
      this.value.sections.splice(sectionKey, 1);
      this.update(this.value);
    },
  },

  mounted() {
    //console.log(uuidv4());
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log("value:", this.value);
  },
};
</script>
