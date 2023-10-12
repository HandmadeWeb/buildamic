<template>
  <div class="buildamic-fieldtype">
    <vue-draggable
      :list="sections"
      handle=".sortable-handle"
      :group="{ name: 'sections' }"
      ghost-class="ghost"
      class="flex flex-col gap-3"
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
      class="border border-dashed px-4 py-1"
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
import ClipboardFunctions from "../../mixins/ClipboardFunctions";

export default {
  mixins: [Fieldtype, ClipboardFunctions],

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
      const newSection = createModule("Section");
      this.sections.push(newSection);
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
    console.log({test: this.meta})
    this.$store.dispatch("setFieldDefaults", this.meta);
    this.$store.dispatch("setGlobals", this.config.globals);
    console.log(this.config)
    window.addEventListener("blur", this.readFromClipboard);
    window.addEventListener("focus", this.readFromClipboard);
  },
  destroy() {
    window.removeEventListener("blur", this.readFromClipboard);
    window.removeEventListener("focus", this.readFromClipboard);
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

.pulse-constant {
  border-radius: 50%;
  animation: pulse 1s infinite;
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
