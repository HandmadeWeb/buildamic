<template>
  <vue-modal
    :name="name"
    :scrollable="true"
    :draggable="true"
    :clickToClose="true"
    :height="'auto'"
    v-cloak
  >
    <x-icon
      @click="$modals.close(name)"
      class="text-grey-80 cursor-pointer inset-y-0 m-2 absolute right-0"
      size="1.5x"
    ></x-icon>
    <div class="p-6 bg-grey-40 text-grey-80">
      <span class="block text-2xl text-grey-80 mb-4"
        >Choose column layout:</span
      >
      <ul class="list-unstyled relative flex flex-wrap">
        <li
          class="column-section-wrapper flex-shrink-0 flex-grow px-2 mb-0 cursor-pointer"
          @click="changeLayout(layout)"
          v-for="layout in layouts"
          :key="layout"
        >
          <div class="mb-2 flex w-full bg-grey-60 rounded p-1 col-gap-1">
            <div
              class="bg-grey-30 h-12 col"
              v-for="(colClass, index) in gridConversion(layout)"
              :key="name + index"
              :class="colClass"
            ></div>
          </div>
        </li>
      </ul>
    </div>
  </vue-modal>
</template>

<script>
import { Module } from "../../classes/ModuleClass";
import { XIcon } from "vue-feather-icons";

export default {
  name: "column-selector",
  components: {
    XIcon,
  },
  data: function() {
    return {
      // A simple array that turns whatever numbers are here into bootstrap columns that match
      // Note the array is formatted to be 2 by 2 so you can easily create symmetry thumbnails
      layouts: [
        "12",
        "6 6",
        "4 4 4",
        "3 3 3 3",
        "2 2 2 2 2 2",
        "3 6 3",
        "10 2",
        "2 10",
        "9 3",
        "3 9",
        "8 4",
        "4 8",
        "7 5",
        "5 7",
        "1 1 1 1 1",
      ],
    };
  },
  methods: {
    changeLayout(layout) {
      const newLayout = [];

      // Turn the clicked string into an array at each space e,g ["6", "6"]
      const layoutArr = layout.split(" ");

      // Loop the new array and create a column for each item
      layoutArr.forEach((col) => {
        let newCol = new Module();
        newCol = newCol.newCol();

        // If we are divisible by 2, set the md breakpoint to 6 (translates to col-md-6)
        if (layoutArr.length % 2 === 0) {
          newCol.options.columns.md = 6;
        }

        // Set the lg size to seleted value
        newCol.options.columns.lg = col;

        // Not the smallest "xs" (mobile) size will remain unchanged from the newColumnStructure object which is 12
        newLayout.push(newCol);
      });

      const oldModules = [];
      const colCount = this.columns.length;

      if (colCount) {
        this.columns.forEach((component) => {
          if (component.content.length) {
            component.content.forEach((module) => {
              oldModules.push(module);
            });
            component.content = [];
          }
        });
      }

      // Change column layout
      this.columns.splice(0, colCount, ...newLayout);
      // Add old modules to new layout
      this.columns[0].content = oldModules;

      // Send this off to vuex for mutatin'
      // this.changeColumnLayout({
      //     id: this.component.id,
      //     newLayout: newLayout
      // })
    },
    gridConversion(string) {
      // Turn the clicked string into an array at each space e,g ["6", "6"]
      let array = string.split(" ");

      // Loop through and create the (currently single-sized) preview thumbnail classes
      // So the same grid you click is what the builder uses
      array.forEach((column, index) => {
        array[index] = "col-" + column;
      });

      // Return the array e.g ["col-md-6", "col-md-6"]
      return array;
    },
  },
  props: {
    name: String,
    columns: Object,
  },
};
</script>

<style scoped>
.column-section-wrapper {
  flex-basis: 50%;
  max-width: 50%;
  box-sizing: border-box;
  transition: transform 0.2s;
}

.column-section-wrapper:hover {
  transform: scale(1.04);
}

.column-section-wrapper:active {
  transform: scale(0.9);
}
</style>
