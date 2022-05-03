<template>
  <div :class="[tabClass]" v-show="isActive"><slot></slot></div>
</template>

<script>
export default {
  name: "vue-tab",
  props: {
    name: { type: String, required: true },
    selected: { type: Boolean, default: false },
  },

  data() {
    return {
      isActive: false,
    };
  },

  computed: {
    tabClass() {
      return this.name.toLowerCase().replace(/\s/g, "-") + "-tab";
    },
    // href() {
    //   return "#" + this.name.toLowerCase().replace(/ /g, "-");
    // },
  },

  mounted() {
    this.isActive = this.selected;
  },
};
</script>
