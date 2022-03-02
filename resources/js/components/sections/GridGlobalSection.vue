<template>
  <div
    class="
      buildamic-section
      p-2
      pl-1
      border border-t-4
      rounded
      border-grey-60
      bg-grey-30
      flex
      relative
    "
  >
    <module-controls
      class="pr-1"
      :component="section"
      :value="sections"
      :index="sectionIndex"
      :customSettings="customSettings"
    />

    <element-container>
      <publish-field
        class="border p-2"
        :config="config"
        :value="section.value || []"
        @input="updateField({ obj: section, path: 'value', val: $event })"
        @meta-updated="
          updateField({ obj: section, path: 'computed.meta', val: $event })
        "
      />
    </element-container>
  </div>
</template>

<style scoped></style>

<script>
import OptionsFields from "../../mixins/OptionsFields";
import ModuleControls from "../shared/ModuleControls";
import SectionControls from "../../mixins/SectionControls";
import { mapGetters } from "vuex";

export default {
  components: { ModuleControls },
  mixins: [OptionsFields, SectionControls],
  props: {
    section: {
      type: Object,
      required: true,
    },
    sections: {
      type: Array,
    },
    sectionIndex: Number,
  },

  data() {
    return {
      rows: this.section.value ?? [],
      customSettings: {
        add: false,
        clone: false,
      },
      config: {
        max_items: 1,
        mode: "default",
        create: false,
        collections: [],
        display: "Global Module",
        type: "entries",
        icon: "entries",
        listable: "hidden",
        component: "relationship",
        handle: "entries",
        prefix: null,
        instructions: null,
        required: false,
      },
    };
  },

  computed: {
    ...mapGetters(["globals", "fieldDefaults"]),
  },

  methods: {
    getMeta() {
      if (this.section?.computed?.meta) {
        return this.section.computed.meta;
      }
      return [];
    },
  },

  mounted() {
    this.config.collections = this.globals;
  },
};
</script>
