<template>
  <vue-tabs :id="field.uuid">
    <vue-tab class="test" name="Design" selected="selected">
      <design-tab :field="field" :fieldDefaults="fieldDefaults">
        <template v-slot:layout-top>
          <div class="buildamic-field">
            <label>Boxed Layout?</label>
            <toggle-fieldtype
              :config="{
                handle: 'section_boxed_layout',
              }"
              :value="boxed_layout"
              @input="boxed_layout = $event"
              :key="boxed_layout"
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
    };
  },
  //   mounted() {
  //     console.log({ boxed: this.boxed_layout });
  //   },
  computed: {
    boxed_layout: {
      get() {
        return this.getDeep("boxed_layout");
      },
      set($event) {
        this.boxed = $event;
        this.updateField({ path: `boxed_layout`, val: $event });
      },
    },
  },
  components: {
    OptionsTab,
    DesignTab,
  },
  mixins: [OptionsFields],
};
</script>
