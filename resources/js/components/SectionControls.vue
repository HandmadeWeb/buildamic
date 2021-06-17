<template>
  <div
    class="p-4 pt-0 flex justify-center items-center text-center"
    data-testid="section-controls"
  >
    <a
      @click.prevent="addSection"
      class="flex pr-6 items-center justify-center"
      href="#"
      data-testid="section-add"
      ><plus-circle-icon class="mr-2"></plus-circle-icon> Add empty section</a
    >
    <a
      @click.prevent="removeSection"
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
import { v4 as uuidv4 } from "uuid";

export default {
  inject: ["sections"],
  name: "section-controls",
  props: {
    index: {
      type: Number,
      default: 0,
    },
  },
  components: { PlusCircleIcon, XIcon, ClipboardIcon },
  methods: {
    addSection() {
      this.sections.push({ uuid: uuidv4(), type: "section", rows: [] });
    },
    removeSection() {
      this.sections.splice(this.index, 1);
    },
  },
};
</script>

<style></style>
