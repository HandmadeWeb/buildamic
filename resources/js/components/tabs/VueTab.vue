<template>
  <div v-if="isActive"><slot></slot></div>
</template>

<script>
export default {
  name: "vue-tab",
  props: {
    name: { required: true },
    selected: { type: Boolean, default: false },
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    // href() {
    //   return "#" + this.name.toLowerCase().replace(/ /g, "-");
    // },
  },

  mounted() {
    this.isActive = this.selected;
  },
};
</script>
