<template>
  <div>
    <div class="tabs overflow-visible">
      <ul class="flex">
        <li
          v-for="tab in tabs"
          :key="tab.name + id"
          :class="[tab.isActive ? 'border active' : '']"
          class="tab border-b-0 text-center"
        >
          <a
            class="
              bg-transparent
              border-none
              h-auto
              shadow-none
              inline-block
              rounded-t
              py-2
              px-4
              text-gray-700
              font-semibold
            "
            :href="tab.href"
            @click="selectTab(tab)"
            >{{ tab.name }}</a
          >
        </li>
      </ul>
    </div>
    <div class="tabs-details border p-6">
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

<style scoped>
.tab:not(.active):hover {
  background: #f7f7f7;
}

.tab a:hover {
  color: inherit;
}
</style>
