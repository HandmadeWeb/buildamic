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
      sections: this.value.value ?? [],
    };
  },

  provide() {
    return {
      fields: collect(this.config.fields),
      fieldsets: collect(this.config.sets),
      meta: collect(this.meta),
      fieldDefaults: collect(this.meta).map(function(metaVal, metaKey){ 
        if(metaKey === 'fields'){
          return collect(metaVal).map(function(field){ 
            return collect(field);
          });
        } else if(metaKey === 'fieldsets') {
          return metaVal;
        } else {
          return metaVal;
        }
      }),
    }
  },

  methods: {

    recursiveCollect(collection){
      if (typeof collection === 'object' && collection.map) {
          return collection.map(value => {
              if (typeof value === 'array' || typeof value === 'object') {
                  return this.recursiveCollect(collect(value));
              }

              return value;
          });
      }

      return collection;
    },

    addSection() {
      this.value.sections.push({
        uuid: uuidv4(),
        type: 'section',
        rows: []
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
    // console.log('value:', this.value);
  }

};
</script>
