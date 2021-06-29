<template>
  <div class="setting-group setting-group__layout">
    <h3 class="border-b border-dashed mb-4 py-1 text-lg">{{ heading }}</h3>
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

<style>
.setting-group + .setting-group {
  margin-top: 2rem;
}
</style>
