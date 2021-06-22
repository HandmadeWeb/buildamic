<template>
  <div class="setting-group setting-group__layout">
    <h3 class="border-b border-dashed mb-2 py-1 text-lg">{{ heading }}</h3>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
  },
};
</script>

<style></style>
