<template>
  <div class="options flex col-gap-6 p-2">
    <div class="flex-grow">
      <div class="attributes mb-4">
        <div class="buildamic-field">
          <label>{{ classOption.display }}</label>
          <component
            :is="`${classOption.type}-fieldtype`"
            :handle="classOption.handle"
            :config="classOption"
            v-model="classOption.value"
            @input="classOption = $event"
          />
        </div>
        <div class="buildamic-field">
          <label>{{ idOption.display }}</label>
          <component
            :is="`${idOption.type}-fieldtype`"
            :handle="idOption.handle"
            :config="idOption"
            v-model="idOption.value"
            @input="idOption = $event"
          />
        </div>
      </div>
      <div class="data-atts mb-4">
        <label>Data Attributes</label>
        <data-attributes
          instructions="You do not need to add the 'data-' to the beginning of the key, it does that automatically"
          :field="field"
        />
      </div>
      <div class="moduleLink">
        <label>Module Link</label>
        <element-container>
          <publish-field
            class="border p-2"
            :config="moduleLink"
            :meta="moduleLink.meta"
            :value="moduleLink.value || []"
            @input="moduleLink = $event"
            @meta-updated="
              updateMeta({ path: 'arributes.moduleLink.meta', val: $event })
            "
          />
        </element-container>
      </div>
    </div>
  </div>
</template>

<script>
import OptionsFields from "../../mixins/OptionsFields";
import DataAttributes from "./settings/DataAttributes.vue";
export default {
  components: { DataAttributes },
  props: {
    field: {
      type: Object,
    },
    overRideDefaultOptions: {
      type: Object,
      default: {},
    },
  },
  computed: {
    classOption: {
      get() {
        console.log(this.getDeep("attributes"));
        return {
          placeholder: "Add any custom classes to this module",
          input_type: "text",
          type: "text",
          icon: "text",
          handle: "class",
          display: "Class",
          value: this.getDeep("attributes")?.class,
        };
      },
      set(value) {
        this.updateField({ path: "attributes.class", val: value });
      },
    },
    idOption: {
      get() {
        return {
          placeholder: "Add a custom ID to this module",
          input_type: "text",
          type: "text",
          icon: "text",
          handle: "id",
          display: "ID",
          value: this.getDeep("attributes")?.id,
        };
      },
      set(value) {
        this.updateField({ path: "attributes.id", val: value });
      },
    },
    moduleLink: {
      get() {
        return {
          max_items: 1,
          mode: "default",
          create: false,
          collections: [],
          display: "Add link to entry",
          type: "entries",
          icon: "entries",
          listable: "hidden",
          component: "relationship",
          handle: "entries",
          prefix: null,
          instructions: null,
          required: false,
          meta: this.getDeep("attributes")?.moduleLink?.meta || undefined,
          value: this.getDeep("attributes")?.moduleLink,
        };
      },
      set(value) {
        this.updateField({ path: "attributes.moduleLink", val: value });
      },
    },
  },
  mixins: [OptionsFields],
};
</script>

<style></style>
