<template>
  <div
    class="p-4 pt-0 flex justify-center items-center text-center"
    data-testid="row-controls"
  >
    <a
      @click.prevent="addModule"
      class="flex pr-6 items-center justify-center"
      href="#"
      data-testid="row-add"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Add Row</a
    >
    <a
      v-if="value.length"
      @click.prevent="removeModule"
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
import ModuleControls from "../mixins/ModuleControls.js";

export default {
  name: "row-controls",
  data: function() {
    return {
      type: "Row",
    };
  },
  mixins: [ModuleControls],
  components: { PlusCircleIcon, XIcon, ClipboardIcon },
};
</script>

<style></style>
