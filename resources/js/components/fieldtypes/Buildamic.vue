<template>
  <div class="buildamic-fieldtype">
    <vue-draggable
      :list="sections"
      :group="{ name: 'sections' }"
      ghost-class="ghost"
      class="flex flex-col gap-2 group"
    >
      <component
        :is="`grid-${section.type}`"
        v-for="(section, sectionIndex) in sections"
        :key="section.uuid"
        :section="section"
        :sections="sections"
        :sectionIndex="sectionIndex"
      />
    </vue-draggable>
    <button
      data-testid="add_section_button"
      @click="addSection"
      v-if="!sections.length"
    >
      Add Section
    </button>
  </div>
</template>

<style scoped></style>

<script>
import GridSection from "../sections/GridSection.vue";
import GridGlobalSection from "../sections/GridGlobalSection.vue";
import VueDraggable from "vuedraggable";
import { createModule } from "../../factories/modules/moduleFactory";

export default {
  mixins: [Fieldtype],

  components: {
    GridSection,
    GridGlobalSection,
    VueDraggable,
  },

  data() {
    return {
      sections: this.value ?? [],
    };
  },

  methods: {
    addSection() {
      const newModule = createModule("Section");
      this.sections.push(newModule);
    },
  },

  //   watch: {
  //     value: {
  //       handler(val) {
  //         console.log({ val });
  //       },
  //       deep: true,
  //     },
  //   },

  mounted() {
    this.$store.dispatch("setFieldDefaults", this.meta);
    this.$store.dispatch("setGlobals", this.config.globals);
  },
};
</script>

<style>
:root {
  --col-gap: 0.2rem;
}

.pulse:hover {
  border-radius: 50%;
  animation: pulse 1s 1;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
  }

  70% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}
.list-item {
  display: inline-block;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
.list-enter, .list-leave-to /* .list-leave-active below version 2.1.8 */ {
  opacity: 0;
  transform: translateY(30px);
}
</style>
