<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Design" selected="selected">
      <design-tab :field="field" :fieldDefaults="fieldDefaults" />
    </vue-tab>
    <vue-tab name="Options">
      <options-tab :field="field" />
    </vue-tab>
    <vue-tab name="Columns">
      <breakpoint-switcher />
      <div class="buildamic-field">
        <label>Column Gap</label>
        <buildamic-input-text
          :field="field"
          :config="{
            input_type: 'text',
            type: 'text',
            icon: 'text',
            placeholder: 'Column Gap',
          }"
          handle="col_gap"
          path="attributes.col_gap"
          responsive
        />
      </div>
      <column-settings
        class="mb-4"
        v-for="column in columns"
        :field="column"
        :key="'row-cols' + column.uuid"
      />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import OptionsTab from "../shared/OptionsTab.vue";
import DesignTab from "../shared/DesignTab.vue";
import ColumnSettings from "../columns/ColumnSettings.vue";
import BuildamicInputText from "../inputs/BuildamicInputText.vue";

export default {
  name: "row-settings",
  props: {
    field: {
      type: Object,
      required: true,
    },
    fieldDefaults: Object,
  },
  data() {
    return {
      columns: this.field.value,
    };
  },
  components: {
    OptionsTab,
    DesignTab,
    ColumnSettings,
    BuildamicInputText,
  },
};
</script>
