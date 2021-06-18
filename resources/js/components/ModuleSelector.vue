<template>
  <div class="module-selector">
    <button class="btn" @click="toggleStack = true">Add Field</button>
    <stack name="field-stack" v-if="toggleStack" @closed="toggleStack = false">
      <div class="h-full bg-white overflow-auto">
        <div
          class="bg-grey-20 px-3 py-1 border-b border-grey-30 text-lg font-medium flex items-center justify-between"
        >
          {{ __("Fieldtypes") }}
          <button type="button" class="btn-close" @click="toggleStack = false">
            ×
          </button>
        </div>

        <div class="p-3 pt-0">
          <div class="fieldtype-selector">
            <div class="fieldtype-list">
              <div
                class="p-1"
                v-for="(field, key) in fieldDefaults.fields"
                :key="key"
              >
                <a
                  class="border flex items-center group w-full rounded shadow-sm py-1 px-2"
                  @click="addField(field)"
                >
                  <svg-icon
                    class="h-4 w-4 text-grey-80 group-hover:text-blue"
                    :name="field.config.icon"
                  ></svg-icon>
                  <span class="pl-2 text-grey-80 group-hover:text-blue">{{
                    __(field.config.display)
                  }}</span>
                </a>
              </div>
              <div
                class="p-1"
                v-for="(field, key) in fieldDefaults.sets"
                :key="key"
              >
                <a
                  class="border flex items-center group w-full rounded shadow-sm py-1 px-2"
                  @click="addField(field)"
                >
                  <span class="pl-2 text-grey-80 group-hover:text-blue">{{
                    __(key)
                  }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </stack>
  </div>
</template>

<script>
import { createModule } from "../factories/modules/moduleFactory";
export default {
  props: {
    value: Array,
  },
  data() {
    return {
      toggleStack: false,
    };
  },
  inject: ["fieldDefaults"],
  methods: {
    addField(field) {
      const MODULE = field.fields ? "Set" : "Field";
      const VALUE = field.fields ? field.fields : field.value;
      const CONFIG = field.config ?? {};
      const META = field.meta ?? {};
      const NEW_FIELD = createModule(MODULE, { VALUE, CONFIG, META });

      this.value.push(NEW_FIELD);

      console.log(this.value);

      this.toggleStack = false;
    },
    removeField(fieldKey) {
      this.value.splice(fieldKey, 1);
    },
  },
};
</script>

<style></style>
