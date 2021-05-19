<template>
  <div class="buildamic-fieldtype-container">
    <div
      v-for="(section, sectionKey) in value"
      :key="sectionKey"
      :class="sortableItemClass"
    >
      <sectionElement v-if="section.type == 'section'" :section="section" />
      <div v-else-if="section.type == 'global'">Global Section</div>
    </div>
  </div>
</template>

<script>
import SectionElement from "../Section.vue";

export default {
  mixins: [Fieldtype],

  components: {
    SectionElement,
  },

  data() {
    return {
      fields: new Array(),
      sets: new Array(),
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
    });

    this.config.sets.forEach((set) => {
      this.sets[set.handle] = set;
    });
  },

  provide() {
    return {
      fields: this.fields,
      sets: this.sets,
    };
  },
};
</script>
