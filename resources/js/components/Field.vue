<template>
  <div class="buildamic-field-container">
    <component
      :is="`${field.config.field.component || field.config.field.type}-fieldtype`"
      :config="field.config.field || field.config || field"
      :value="value ? value : field.value"
      :meta="field.meta ? field.meta : field.config"
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

  props: {
    field: {
      type: Object,
      required: true,
    },
    value: {
    }
  },

  data() {
    return {
    };
  },

  methods: {
    update($event) {
      this.field.value = $event;
    },
  },

};

</script>
