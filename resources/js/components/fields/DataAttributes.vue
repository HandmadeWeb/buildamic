<template>
  <div
    class="border p-2 border-dashed field-repeater module module-settings mt-0 flex flex-col"
  >
    <span class="text-sm text-grey-70 italic mb-2 block" v-if="instructions">{{
      instructions
    }}</span>
    <div
      v-for="(att, index) in value"
      :key="`${field.id}-${att.name}-${index}`"
      class="field-repeater__field flex flex-col"
    >
      <label v-if="label" class="pr-4 setting-label"> {{ label }}: </label>
      <div class="flex -mx-2 items-center justify-between">
        <div class="flex-grow px-2">
          <text-fieldtype
            handle="key"
            :config="{
              input_type: 'text',
              type: 'text',
              icon: 'text',
              placeholder: 'key',
            }"
            v-model.lazy="value[index].key"
            :meta="null"
            @blur="handleChange"
          />
        </div>
        <div class="flex-grow px-2">
          <text-fieldtype
            handle="value"
            :config="{
              input_type: 'text',
              type: 'text',
              icon: 'text',
              placeholder: 'value',
            }"
            v-model.lazy="value[index].value"
            :meta="null"
            @blur="handleChange"
          />
        </div>
        <eva-icon
          name="trash-2"
          @click="removeDataAtt(index)"
          width="18"
          height="18"
          fill="currentColor"
          class="flex text-grey-80 cursor-pointer pulse mr-2"
        ></eva-icon>
      </div>
    </div>
    <a class="text-gray-800 self-end py-2" @click.prevent="addDataAtt" href="#"
      >Add fields</a
    >
  </div>
</template>

<script>
import { EvaIcon } from "vue-eva-icons";
import OptionsFields from "../../mixins/OptionsFields";
// import { EventBus } from "../../EventBus";
// import { setDeep, getDeep } from "../../functions/objectHelpers";
// import { stripTrailingSlash } from "../../functions/helpers";

export default {
  name: "field-repeater",
  data: function() {
    return {
      value: [],
    };
  },
  components: {
    EvaIcon,
  },
  mixins: [OptionsFields],
  methods: {
    handleChange() {
      // Helper function to set values at any depth and bore a path to them if undefined
      //   setDeep(this.component, this.path, this.value, true);
      this.updateField(
        {
          path: `attributes.dataAtts`,
          val: this.value,
        },
        false
      );
      // Emit some events that could be useful
      //   this.$emit("change", { data: this.value, path: this.path });
    },
    addDataAtt() {
      let obj = {
        key: "",
        value: "",
      };
      this.value.push(obj);
    },
    removeDataAtt(index) {
      // remove index from this.value array
      this.value.splice(index, 1);
    },
  },
  mounted() {
    // EventBus.$on("saveAll", () => {
    //   this.handleChange();
    // });
    // Get any current results
    this.value = this.getDeep("attributes.dataAtts") || this.value;
    // If we do have more than one, make sure none are empty
    // if (this.value.length) {
    // Filter out any completely empty ones
    //   this.value = this.value.filter((value) => value.name || value.value);
    // Save / Cleanup the JSON (removing any empties)
    //   setDeep(this.component, this.path, this.value, true);
    // }
  },
  props: {
    field: Object,
    instructions: String,
    label: String,
    path: String,
    endpoint: String,
  },
};
</script>

<style lang="scss">
.field-repeater .field-repeater__field + .field-repeater__field {
  margin-top: 1rem;
}
</style>
