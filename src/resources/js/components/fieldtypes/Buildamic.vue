<template>

    <div class="buildamic-fieldtype-container">
        
        <div v-for="section, sectionKey in values" :key="sectionKey" :class="sortableItemClass">
            <sectionElement v-if="section.type == 'section'" :section="section" />

            <div v-else-if="section.type == 'global'">Global Section</div>
        </div>
      </div>
      <div v-else-if="section.type == 'global'">Global Section</div>
    </div>

    <!-- <text-input :value="value" @input="update" /> -->
  </div>
</template>

<script>
import SectionElement from '../Section.vue';

export default {
    
    mixins: [
        Fieldtype,
    ],

    components: { 
        SectionElement 
    },

    props: {
        handle: {
            type: String,
            required: true
        },
        // meta: {
        //     type: Object,
        //     required: true
        // },
        value: {
            type: Object,
            required: true
        },
    },

    data() {
        return {
            fields: new Array,
            sets: new Array,
            values: this.value,
        };
    },
  },

    mounted() {
        this.config.fields.forEach(field => {
            this.fields[field.handle] = field;
            //console.log(this.fields);
        });

        this.config.sets.forEach(set => {
            this.sets[set.handle] = set;
        });        
    },
    
    provide() {
        return {
            fields: this.fields,
            sets: this.sets,
        }
    },

    computed: {

    },

    this.config.sets.forEach((set) => {
      this.sets[set.handle] = set;
    });

    console.log(this.sets["blurbs"]);
  },

  computed: {},

  methods: {},
};
</script>
