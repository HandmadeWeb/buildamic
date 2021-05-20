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

  provide() {
    return {
      fields: this.fields,
      sets: this.sets,
    };
  },

  data() {
    return {
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

  computed: {
    fields() {
      return this.config.fields.reduce(
        (acc, cur) => ((acc[cur.handle] = cur), acc),
        {}
      );
    },

    sets() {
      return this.config.sets.reduce(
        (acc, cur) => ((acc[cur.handle] = cur), acc),
        {}
      );
    }
  },

};
</script>
