<template>
  <div
    class="p-4 pt-0 flex justify-center items-center text-center"
    data-testid="row-controls"
  >
    <a
      @click.prevent="addRow"
      class="flex pr-6 items-center justify-center"
      href="#"
      data-testid="row-add"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Add Row</a
    >
    <a
      @click.prevent="removeRow"
      class="flex pr-6 items-center justify-center"
      href="#"
      data-testid="row-remove"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Remove row</a
    >
    <a class="flex pr-6 items-center justify-center" href="#"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Add row Separator</a
    >
  </div>
</template>

<script>
import { PlusCircleIcon, XIcon, ClipboardIcon } from "vue-feather-icons";
import { v4 as uuidv4 } from "uuid";

export default {
  inject: ["rows"],
  name: "row-controls",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  components: { PlusCircleIcon, XIcon, ClipboardIcon },
  methods: {
    addRow() {
      this.rows.push({ uuid: uuidv4(), type: "rows", columns: [] });
    },
    removeRow() {
      this.rows.splice(this.index, 1);
    },
  },
};
</script>

<style></style>
