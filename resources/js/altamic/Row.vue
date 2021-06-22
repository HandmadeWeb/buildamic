<template>
  <div class="row mb-2 bg-green">
    Row: {{ row.uuid }} || Parent: {{ parentID }} <br />
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    parentID: String,
    row: Object,
    removeRow: Function,
  },
};
</script>

<style></style>
