<template>
  <div>
    <div class="tabs">
      <ul class="flex border-b">
        <li v-for="tab in tabs" :key="tab.name + id" class="-mb-px mr-1">
          <a
            :class="[tab.isActive ? 'bg-grey-40' : 'bg-grey-30']"
            class="inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700 font-semibold"
            :href="tab.href"
            @click="selectTab(tab)"
            >{{ tab.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="tabs-details p-4">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "vue-tabs",
  props: {
    id: String,
  },
  data() {
    return { tabs: [] };
  },

  created() {
    this.tabs = this.$children;
  },
  methods: {
    selectTab(selectedTab) {
      this.tabs.forEach((tab) => {
        tab.isActive = tab.name == selectedTab.name;
      });
    },
  },
};
</script>
