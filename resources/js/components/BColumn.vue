<template>
  <draggable
    :list="column.fields"
    :group="{ name: 'columns' }"
    ghost-class="ghost"
    class="buildamic-column"
  >
    <div
      v-for="(field, fieldKey) in column.fields"
      :key="fieldKey"
      class="py-2"
    >
      <div class="p-5 bg-red" :class="[`${field.config.type}-fieldtype`]">
        Field {{ field.uuid }}
        <component
          :is="fieldtypeComponent(field.config.handle)"
          :config="fields.where('handle', field.config.handle).first()"
          :value="field.value"
          :meta="field.meta"
          :handle="field.config.handle"
          @input="updateField(fieldKey, $event)"
          @meta-updated="$emit('meta-updated', $event)"
          @focus="$emit('focus')"
          @blur="$emit('blur')"
        />

        <button class="btn" v-on:click="removeField(fieldKey)">
          Remove Field
        </button>
      </div>
    </div>
    <button class="btn" @click="isSelectingNewField = true">Add Field</button>
    <stack
      name="field-stack"
      v-if="isSelectingNewField"
      @closed="isSelectingNewField = false"
    >
      <div class="h-full bg-white overflow-auto">
        <div
          class="bg-grey-20 px-3 py-1 border-b border-grey-30 text-lg font-medium flex items-center justify-between"
        >
          {{ __("Fieldtypes") }}
          <button
            type="button"
            class="btn-close"
            @click="isSelectingNewField = false"
          >
            ×
          </button>
        </div>

        <div class="p-3 pt-0">
          <div class="fieldtype-selector">
            <div class="fieldtype-list">
              <div class="p-1" v-for="(field, key) in fields" :key="key">
                <a
                  class="border flex items-center group w-full rounded shadow-sm py-1 px-2"
                  @click="addField(field.handle)"
                >
                  <svg-icon
                    class="h-4 w-4 text-grey-80 group-hover:text-blue"
                    :name="field.icon"
                  ></svg-icon>
                  <span class="pl-2 text-grey-80 group-hover:text-blue">{{
                    __(field.display)
                  }}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </stack>
  </draggable>
</template>

<style scoped></style>

<script>
import { v4 as uuidv4 } from "uuid";
import draggable from "vuedraggable";

export default {
  props: {
    column: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isSelectingNewField: false,
    };
  },

  components: {
    draggable,
  },

  inject: ["fields", "fieldsets", "meta"],

  methods: {
    fieldtypeComponent(handle) {
      let field = this.fields.where("handle", handle).first();
      return `${field.component || field.type}-fieldtype`;
    },

    updateField(index, value) {
      this.column.fields[index].value = value;
    },

    addField(handle) {
      let field = this.fields.where("handle", handle).first();
      let defaultValue = this.meta.get("defaultValue")[handle];
      let defaultmeta = this.meta.get("defaultMeta")[handle];

      this.column.fields.push({
        uuid: uuidv4(),
        type: "field",
        config: {
          handle: field.handle,
          type: field.type,
        },
        meta: defaultmeta,
        value: defaultValue,
      });

      this.isSelectingNewField = false;
      //this.update(this.value);
    },

    removeField(fieldKey) {
      this.column.fields.splice(fieldKey, 1);
      //this.update(this.value);
    },
  },

  //   mounted() {
  //     //console.log(uuidv4());
  //     // console.log('config:', this.config);
  //     // console.log('meta:', this.meta);
  //     // console.log('value:', this.value);
  //   }
};
</script>
