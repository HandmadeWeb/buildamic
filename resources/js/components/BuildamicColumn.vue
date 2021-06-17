<template>
  <div class="buildamic-column-container">
    Column {{ value.uuid }}
    <div
      v-for="(field, fieldKey) in value.value"
      :key="fieldKey"
      class="py-2"
    >
      <div v-if="field.type === 'field'" class="p-5 bg-red" :class="[`${field.config.type}-fieldtype`]">
        Field {{ field.uuid }}

        <component
          :is="fieldtypeComponent(field.config.handle)"
          :config="fieldDefaults.get('fields').get('config').where('handle', field.config.handle).first()"
          :value="field.value"
          :meta="fieldDefaults.get('fields').get('meta').get(field.config.handle)"
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

      <div v-if="field.type === 'fieldset'" class="p-5 bg-red">
        Field Set {{ field.uuid }}

        <div v-for="(subField, subFieldKey) in fieldDefaults.get('fieldsets')[field.config.handle]['config']['fields']" :key="subFieldKey" class="p-5 bg-blue">
          <div class="p-5 bg-purple" :class="[`${subField.field.type}-fieldtype`]">
            Field {{ subField.field.display }}

            <component
              :is="`${subField.field.type}-fieldtype`"
              :config="subField.field"
              :value="field.value[subField.handle]"
              :meta="fieldDefaults.get('fieldsets')[field.config.handle]['meta'][subField.handle]"
              :handle="subField.handle"
              @input="updateFieldSet(fieldKey, subField.handle, $event)"
              @meta-updated="$emit('meta-updated', $event)"
              @focus="$emit('focus')"
              @blur="$emit('blur')"
            />

          </div>
        </div>

        <button class="btn" v-on:click="removeField(fieldKey)">
          Remove FieldSet
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
              <div class="p-1" v-for="(field, key) in fieldDefaults.get('fields').get('config')" :key="key">
                <a
                  class="border flex items-center group w-full rounded shadow-sm py-1 px-2"
                  @click="addField(field.handle)"
                >
                  <svg-icon
                    class="h-4 w-4 text-grey-80 group-hover:text-blue"
                    :name="field.field.icon"
                  ></svg-icon>
                  <span class="pl-2 text-grey-80 group-hover:text-blue">{{
                    __(field.field.display)
                  }}</span>
                </a>
              </div>

              <div class="p-1" v-for="(fieldSet, fieldSetKey) in fieldDefaults.get('fieldsets')" :key="fieldSetKey">

                <a
                  class="border flex items-center group w-full rounded shadow-sm py-1 px-2"
                  @click="addFieldSet(fieldSetKey)"
                >
                  <!-- <svg-icon
                    class="h-4 w-4 text-grey-80 group-hover:text-blue"
                    :name="fieldSet.icon"
                  ></svg-icon> -->
                  <span class="pl-2 text-grey-80 group-hover:text-blue">
                    Fieldset: {{ __(fieldSet.config.display) }}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </stack>
  </div>
</template>

<style scoped></style>

<script>
import { v4 as uuidv4 } from "uuid";

export default {
  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      isSelectingNewField: false,
    };
  },

  inject: [
    "fieldDefaults", 
  ],

  methods: {
    fieldtypeComponent(handle) {
      let field = this.fieldDefaults.get('fields').get('config').where('handle', handle).first();
      return `${field.field.component || field.field.type}-fieldtype`;
    },

    updateField(index, newValue) {
      this.value.value[index].value = newValue;
    },

    updateFieldSet(index, subFieldHandle, newValue) {
      this.value.value[index].value[subFieldHandle] = newValue;
    },

    addField(handle) {
      let field = this.fieldDefaults.get('fields').get('config').where('handle', handle).first();

      this.value.value.push({
        uuid: uuidv4(),
        type: "field",
        config: {
          handle: field.handle,
          type: field.field.type,
        },
        //meta: this.fieldDefaults.get('fields').get('meta').get(handle),
        value: this.fieldDefaults.get('fields').get('value').get(handle),
      });

      this.isSelectingNewField = false;
    },

    addFieldSet(handle) {

      let fieldSet = this.fieldDefaults.get('fieldsets')[handle];

      this.value.value.push({
        uuid: uuidv4(),
        type: "fieldset",
        config: {
          handle: handle,
        },
        //meta: defaultmeta,
        value: fieldSet['value'],
      });

      this.isSelectingNewField = false;
    },

    removeField(fieldKey) {
      this.value.value.splice(fieldKey, 1);
    },
  },

};
</script>
