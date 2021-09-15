<template>
  <vue-modal
    :name="name"
    :scrollable="true"
    :draggable="true"
    :clickToClose="true"
    :height="'auto'"
    v-cloak
  >
    <eva-icon
      @click="$modals.close(name)"
      name="close-circle"
      class="text-grey-80 cursor-pointer inset-y-0 m-2 absolute right-0"
    ></eva-icon>
    <div class="p-6 bg-grey-40 text-grey-80">
      <span class="block text-2xl text-grey-80 mb-4">Global Modules:</span>
      <ul
        v-if="globals.length"
        class="list-unstyled relative grid grid-cols-2 gap-6"
      >
        <li
          class="column-section-wrapper bg-grey-60 rounded p-1 cursor-pointer"
          @click="addGlobal(global)"
          v-for="global in globals"
          :key="global.id"
        >
          {{ global.title }}
        </li>
      </ul>
      <p v-else>
        No globals have been found, create them inside the "Buildamic Globals"
        collection. Or create that collection first.
      </p>
    </div>
  </vue-modal>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import { createModule } from "../../factories/modules/moduleFactory";
import Optionsfields from "../../mixins/OptionsFields";
import { mapGetters } from "vuex";

export default {
  name: "global-selector",
  data: function() {
    return {};
  },
  components: {
    EvaIcon,
  },
  computed: {
    ...mapGetters(["globals"]),
  },
  methods: {
    addGlobal(global) {
      const newModule = createModule("GlobalSection", { VALUE: global });
      this.sections.splice(this.index + 1, 0, newModule);
    },
  },
  mixins: [Optionsfields],
  props: {
    name: String,
    sections: Array,
    index: Number,
  },
};
</script>

<style scoped></style>
