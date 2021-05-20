<template>
  <div class="buildamic-fieldtype-container">
    <div
      v-for="(section, sectionKey) in value"
      :key="sectionKey"
      :class="sortableItemClass"
    >
      <grid-section v-if="section.type == 'section'" :section="section" />
      <div v-else-if="section.type == 'global'">Global Section</div>
    </div>
  </div>
</template>

<script>
import GridSection from "../GridSection.vue";

export default {
  mixins: [Fieldtype],

  components: {
    GridSection,
  },

  data() {
    return {
      fields: {},
      sets: {},
    };
  },

  watch: {
    value: {
      handler(val) {
        this.update(val);
      },
      deep: true,
    },
  },

  mounted() {
    this.config.fields.forEach((field) => {
      this.fields[field.handle] = field;
      this.fields[field.handle+'2'] = field;
    });

    this.config.sets.forEach((set) => {
      this.sets[set.handle] = set;
      this.sets[set.handle+'2'] = set;
    });

    console.log('parent sets', this.sets);
  },
};
</script>
