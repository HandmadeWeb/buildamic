<template>
  <div class="buildamic-field-container">
    
  </div>
</template>

<script>

export default {

  props: {
    value: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {};
  },

  inject: [
    "fieldDefaults", 
  ]

};
</script>
