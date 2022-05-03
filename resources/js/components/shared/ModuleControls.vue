<template>
  <div
    class="module-controls flex text-center"
    :data-testid="`${type || component.type}-controls`"
  >
    <ul
      class="list-unstyled flex m-0 p-0 gap-2 overflow-x-auto pb-0"
      :class="[`flex-${getDirection}`]"
    >
      <li
        class="flex-shrink-0"
        v-for="(setting, i) in settings"
        :key="component.uuid + type + i"
        :title="setting.title"
      >
        <component
          v-if="setting.component"
          :component="component"
          :value="value"
          :index="index"
          :is="setting.component"
        />
        <eva-icon
          v-else
          :name="setting.icon"
          @click="setting.action"
          width="18"
          height="18"
          fill="currentColor"
          class="flex cursor-pointer pulse"
          :class="[setting.class || '']"
        ></eva-icon>
      </li>
    </ul>
  </div>
</template>

<script>
import { recursifyID } from "../../functions/idHelpers";
import { UCFirst } from "../../functions/helpers";
import { createModule } from "../../factories/modules/moduleFactory";
import { EvaIcon } from "vue-eva-icons";
import ModuleSelector from "../ModuleSelector.vue";
import SettingStack from "../shared/SettingStack.vue";
import ClipboardFunctions from "../../mixins/ClipboardFunctions";

export default {
  props: {
    value: Array,
    index: {
      type: Number,
      default: 0,
    },
    customSettings: {
      type: Object,
      default: () => [],
    },
    direction: {
      type: String,
    },
    component: {
      type: Object,
      required: true,
    },
    type: String,
  },
  mixins: [ClipboardFunctions],
  computed: {
    settings() {
      return Object.values({
        menu: {
          icon: "edit-2-outline",
          title: "Open settings modal",
          component: "setting-stack",
          action: this.openModal,
          order: 10,
        },
        add: {
          icon: "plus-circle",
          title: "Add Module",
          action: this.addModule,
          order: 20,
        },
        clone: {
          icon: "copy",
          title: "Copy Module",
          action: this.cloneModule,
          condition: this.component,
          order: 30,
        },
        clipboardCopy: {
          icon: this.isValidPasteLocation ? "clipboard" : "clipboard-outline",
          title: "Copy module to clipboard",
          action: this.isValidPasteLocation
            ? this.pasteFromClipboard
            : this.copyToClipboard,
          order: 30,
          class: this.isValidPasteLocation ? "pulse-constant" : "",
        },
        delete: {
          icon: "trash-2",
          title: "Delete Module",
          action: this.removeModule,
          order: 40,
        },
        ...this.customSettings,
      })
        .filter((el) => el)
        .sort((a, b) => a.order - b.order);
    },
    getDirection() {
      return this.direction ||
        this.component.type === "field" ||
        this.component.type === "set"
        ? "row"
        : "col";
    },
  },
  components: {
    EvaIcon,
    ModuleSelector,
    SettingStack,
  },
  methods: {
    addModule() {
      const newModule = createModule(UCFirst(this.type || this.component.type));
      this.value.splice(this.index + 1, 0, newModule);
    },
    cloneModule(newModule) {
      let clone = newModule || JSON.parse(JSON.stringify(this.component));

      // Generate ID's for each nested module
      recursifyID(clone);
      this.value.splice(this.index + 1, 0, clone);
    },
    removeModule() {
      this.value.splice(this.index, 1);
    },
    openModal(name) {
      this.$modals.open(name);
    },
  },
};
</script>
