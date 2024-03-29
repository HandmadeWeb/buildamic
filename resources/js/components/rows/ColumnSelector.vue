<template>

    <div class="p-6 bg-gray-400 text-gray-800">
      <span class="block text-2xl text-gray-800 mb-4"
        >Choose column layout:</span
      >
      <ul class="list-unstyled relative flex flex-wrap">
        <li
          class="
            column-section-wrapper
            flex-shrink-0 flex-grow
            px-2
            mb-0
            cursor-pointer
          "
          @click="changeLayout(layout)"
          v-for="(layout, i) in layouts"
          :key="layout"
        >
          <div
            class="mb-2 w-full buildamic-row bg-gray-600 rounded p-3"
            :style="colCount(i)"
          >
            <div
              class="buildamic-column"
              v-for="(colClass, index) in gridConversion(layout)"
              :key="name + index"
              :class="colClass"
            >
              <div class="bg-gray-300 h-12"></div>
            </div>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import { createModule } from "../../factories/modules/moduleFactory";
import Optionsfields from "../../mixins/OptionsFields";

export default {
  name: "column-selector",
  data: function () {
    return {
      // A simple array that turns whatever numbers are here into bootstrap columns that match
      // Note the array is formatted to be 2 by 2 so you can easily create symmetry thumbnails
      layouts: [
        "12",
        "6 6",
        "4 4 4",
        "3 3 3 3",
        "1 1 1 1 1",
        "2 2 2 2 2 2",
        "1 1 1 1 1 1 1",
        "3 6 3",
        "10 2",
        "2 10",
        "9 3",
        "3 9",
        "8 4",
        "4 8",
        "7 5",
        "5 7",
        "3 3 8",
        "8 3 3",
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
        let newCol = createModule("Column");

        // If we are divisible by 2, set the md breakpoint to 6 (translates to col-md-6)
        if (layoutArr.length % 2 === 0) {
          newCol.config.buildamic_settings.columnSizes.md = 6;
        }

        // Set the lg size to seleted value
        newCol.config.buildamic_settings.columnSizes.lg = col;

        // Not the smallest "xs" (mobile) size will remain unchanged from the newColumnStructure object which is 12
        newLayout.push(newCol);
      });

      const oldModules = {};
      const colCount = this.row.value.length;

      if (colCount) {
        this.row.value.forEach((component, index) => {
          if (component.value.length) {
            oldModules[index] = [];
            component.value.forEach((module) => {
              oldModules[index].push(module);
            });
          }
        });
      }

      this.setDeep(
        this.row.config.buildamic_settings,
        "attributes.column_count_total",
        layoutArr.reduce((a, b) => a + +b, 0)
      );

      //   console.log(
      //     "LAYOUT CHANGE",
      //     layoutArr.reduce((a, b) => a + +b, 0)
      //   );

      // Change column layout
      this.row.value.splice(0, colCount, ...newLayout);
      // Add old modules to new layout
      Object.keys(oldModules).forEach((key) => {
        if (this.row.value[key]) {
          this.row.value[key].value.push(...oldModules[key]);
        } else {
          this.row.value[0].value.push(...oldModules[key]);
        }
      });

      // Send this off to vuex for mutatin'
      // this.changeColumnLayout({
      //     id: this.component.id,
      //     newLayout: newLayout
      // })
    },
    colCount(i) {
      const count = this.layouts[i].split(" ").reduce((a, b) => a + +b, 0);

      return 12 % count !== 0 ? `--b-columns: ${count}` : "";
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
  mixins: [Optionsfields],
  props: {
    name: String,
    row: Array,
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
