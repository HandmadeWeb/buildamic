<template>
  <div
    class="buildamic-set"
    :class="[
      `buildamic-set-${field.config.statamic_settings.handle}-fieldtype`,
    ]"
  >
    <vue-tabs :id="field.uuid">
      <vue-tab name="Content" selected="selected">
        <field-lite
          v-for="(val, key) in field.value"
          :key="key + field.uuid"
          :value="val"
          :handle="key"
          :field="field"
          :type="field.config.statamic_settings.handle"
          :fieldDefaults="setFieldDefaults"
        />
      </vue-tab>
      <vue-tab name="Options">
        <options-tab :field="field" />
      </vue-tab>
    </vue-tabs>
  </div>
</template>

<script>
import FieldLite from "./FieldLite.vue";
import OptionsTab from "../shared/OptionsTab.vue";
import { createModule } from "../../factories/modules/moduleFactory";
export default {
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: Object,
  },
  components: {
    FieldLite,
    OptionsTab,
  },
  computed: {
    setFieldDefaults() {
      const test = this.fieldDefaults[
        this.field.config.statamic_settings.handle
      ].fields.reduce((acc, cur) => {
        acc[cur.handle] = cur;
        return acc;
      }, {});
      return test;
    },
  },
  methods: {
    createField(f, i) {
      if (typeof i !== "number") {
        console.log("test", f);
      }
      return createModule("Field", {
        ADMIN_LABEL: f,
        CONFIG: this.fieldDefaults.sets[
          this.field.config.statamic_settings.handle
        ].fields[i].config,
        VALUE: this.fieldDefaults.sets[
          this.field.config.statamic_settings.handle
        ].fields[i].value,
        HANDLE: f,
        TYPE: this.fieldDefaults.sets[
          this.field.config.statamic_settings.handle
        ].fields[i].config.type,
      });
    },
  },
  mounted() {
    console.log("set", this.field);
  },
};
</script>
