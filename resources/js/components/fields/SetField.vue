<template>
  <div class="buildamic-field" :class="[`${fieldData}-fieldtype`]">
    <label>{{ handle }}</label>
    <component
      :is="`${getConfig.type}-fieldtype`"
      :config="getConfig"
      :value="value"
      :meta="getMeta"
      :handle="handle"
      @input="updateField(field, $event)"
      @meta-updated="$emit('meta-updated', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
import ColorFieldtype from "./overrides/ColorFieldtype.vue";

export default {
  props: {
    field: Object,
    handle: String,
    type: String,
    value: [Number, String, Array, Object],
    fieldDefaults: {
      type: Object,
    },
    setDefaults: {
      type: Object,
    },
  },
  components: {
    ColorFieldtype,
  },

  data() {
    return {
      fieldData: this.field,
    };
  },
  computed: {
    sets() {
      return [this.fieldDefaults[this.field.config.statamic_settings.handle]];
    },
    getConfig() {
      if (this.sets) {
        this.field.config.sets = this.sets;
      }
      console.log("config", {
        ...this.getFieldDefault().config,
        ...this.field.config,
      });
      return { ...this.getFieldDefault().config, ...this.field.config };
    },
    getMeta() {
      return {
        defaults: {
          slider: {
            default: null,
          },
        },
        new: {
          slider: {
            default: null,
          },
        },
        existing: [],
        collapsed: [],
        slide_title: null,
      };
    },
  },
  methods: {
    updateField(key, val) {
      this.field.value[this.handle] = val;
      console.log(this.field);
    },
    getFieldDefault() {
      return this.setDefaults[this.handle];
    },
  },
  mounted() {
    console.log("FieldLite", this.getMeta);
  },
};
</script>

<style scoped>
.buildamic-field + .buildamic-field {
  margin-top: 2rem;
}
</style>
