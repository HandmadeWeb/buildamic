<template>
  <div class="buildamic-fieldtype-container">
    <div v-for="(section, sectionKey) in value" :key="sectionKey" class="py-2"> 
      <div class="p-5 bg-blue">
        <buildamic-section :section="section" />
        <button class="btn" v-on:click="removeSection(sectionKey)">Remove Section</button>
      </div>
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
      fieldDefaults: collect(this.meta).map(function(metaVal, metaKey){ 
        if(metaKey === 'fields'){
          return collect(metaVal).map(function(field){ 
            return collect(field);
          });
        } else if(metaKey === 'fieldsets') {
          return collect(metaVal).map(function(item){ 
            return collect(item);
          });
        } else {
          return metaVal;
        }
      }),
      //fieldDefaults: this.recursiveCollect(collect(this.meta)),
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
    //console.log(collect().recursiveCollect)
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.value);
  }

};
</script>
