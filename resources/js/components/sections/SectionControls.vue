<template>
  <div
    class="p-4 pt-0 flex justify-center items-center text-center"
    data-testid="section-controls"
  >
    <a
      @click.prevent="addModule"
      class="flex pr-6 items-center justify-center"
      href="#"
      data-testid="section-add"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Add empty section</a
    >
    <a
      v-if="value.length"
      @click.prevent="removeModule"
      class="flex pr-6 items-center justify-center"
      href="#"
      data-testid="section-remove"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Remove section</a
    >
    <a class="flex pr-6 items-center justify-center" href="#"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Add Section
      Separator</a
    >
  </div>
</template>

<script>
import { PlusCircleIcon, XIcon, ClipboardIcon } from "vue-feather-icons";
import ModuleControls from "../mixins/ModuleControls.js";

export default {
  name: "section-controls",
  data() {
    return {
      type: "Section",
    };
  },
  components: { PlusCircleIcon, XIcon, ClipboardIcon },
  mixins: [ModuleControls],
};
</script>

<style></style>
