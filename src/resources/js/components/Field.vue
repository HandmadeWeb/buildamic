<template>
  <div class="buildamic-field">
    <component
      :is="
        `${field.config.field.component || field.config.field.type}-fieldtype`
      "
      :config="field.config.field"
      :value="field.value"
      :meta="field.meta"
      :handle="field.config.handle"
      :name-prefix="field.config.prefix"
      :error-key-prefix="errorKey"
      :read-only="isReadOnly"
      @input="update"
      @meta-updated="$emit('meta-updated', $event)"
      @focus="$emit('focus')"
      @blur="$emit('blur')"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },

  props: {
    field: {
      type: Object,
      required: true,
    },
  },

  methods: {
    update($event) {
      this.field.value = $event;
    },
  },
};
</script>
