<template>
  <div class="buildamic-fieldtype">
    <vue-draggable
      :list="sections"
      :group="{ name: 'sections' }"
      ghost-class="ghost"
      class="flex flex-col gap-2"
    >
      <grid-section
        v-for="(section, sectionIndex) in sections"
        :key="section.uuid"
        :section="section"
        :sections="sections"
        :sectionIndex="sectionIndex"
      />
    </vue-draggable>
    <button @click="addSection" v-if="!sections.length">Add Section</button>
  </div>
</template>

<style scoped></style>

<script>
import GridSection from "../sections/GridSection.vue";
import VueDraggable from "vuedraggable";
import { createModule } from "../../factories/modules/moduleFactory";

export default {
  mixins: [Fieldtype],

  components: {
    GridSection,
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

  provide() {
    return {
      fieldDefaults: this.meta,
    };
  },

  mounted() {
    console.log(this.meta);
    // console.log(this.value);
    //console.log(uuidv4());
    // console.log('config:', this.config);
    // console.log('meta:', this.meta);
    // console.log('value:', this.value);
  },
};
</script>

<style>
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
