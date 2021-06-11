<template>
  <div class="buildamic-fieldtype-container">
    <div v-for="(section, sectionKey) in value.sections" :key="sectionKey" class="py-2"> 
      <buildamic-section :section="section" />
      <button class="btn" v-on:click="removeSection(sectionKey)">Remove Section</button>
    </div>    
    
    <button class="btn" @click.prevent="addSection">Add Section</button>
  </div>
</template>

<style scoped>

</style>

<script>
import { v4 as uuidv4 } from 'uuid';
import collect from 'collect.js';
import BuildamicSection from '../BuildamicSection.vue';

export default {
  mixins: [
    Fieldtype
  ],
  
  components: { 
    BuildamicSection 
  },

  data() {
    return {
    };
  },

  provide() {
    return {
      fields: collect(this.config.fields),
      fieldsets: collect(this.config.sets),
    }
  },

  methods: {
    getConfig(key) {
      return this.value.config[key] ?? null;
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
