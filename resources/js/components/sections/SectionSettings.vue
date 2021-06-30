<template>
  <vue-tabs :id="field.uuid">
    <vue-tab name="Design" selected="selected">
      <design-tab :field="field" :fieldDefaults="fieldDefaults">
        <template v-slot:layout-top>
          <div class="buildamic-field">
            <label>Boxed Layout?</label>
            <toggle-fieldtype
              :config="{
                handle: 'section_boxed_layout',
              }"
              :value="boxed_layout.value"
              @input="updateField({ path: `boxed_layout`, val: $event })"
            />
          </div>
        </template>
      </design-tab>
    </vue-tab>
    <vue-tab name="Options">
      <options-tab :field="field" />
    </vue-tab>
  </vue-tabs>
</template>

<script>
import OptionsFields from "../../mixins/OptionsFields";
import OptionsTab from "../shared/OptionsTab.vue";
import DesignTab from "../shared/DesignTab.vue";
import ToggleFieldtype from "../../../../../../../vendor/statamic/cms/resources/js/components/fieldtypes/ToggleFieldtype.vue";
export default {
  name: "section-settings",
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
      boxed_layout: {
        value: this.getDeep(`boxed_layout`) || false,
      },
    };
  },
  components: {
    OptionsTab,
    DesignTab,
    ToggleFieldtype,
  },
  mixins: [OptionsFields],
};
</script>
